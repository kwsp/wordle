// Count Common Words
//
// read a list of files given to the program and
// count the frequency of all alphabetic words (lowercase)
// write results to 2 files
//    topwords.txt - list of all 5 letter words from most
//        to least frequent
//    word_counts.txt - pair of (word, count) for 5 letter
//        words from most to least frequent
//
// needs -std=c++17 or above
#include <algorithm>
#include <cctype>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <regex>
#include <string>
#include <unordered_map>
#include <vector>

using std::string;
using std::unordered_map;
using std::vector;

namespace fs = std::filesystem;

typedef unordered_map<string, int> Counter;

// defs
bool lowerOnly = true;
fs::path top_words_fname("./topwords.txt");
fs::path word_counts_fname("./word_counts.txt");

// helper functions
bool isalpha(string s) {
  const auto re = std::regex("^[A-Za-z]+$");
  return std::regex_match(s, re);
}

bool islower(string s) {
  const auto re = std::regex("^[a-z]+$");
  return std::regex_match(s, re);
}

// Converts string to lowercase inplace
inline void lower(string &word) {
  std::transform(word.begin(), word.end(), word.begin(),
                 [](unsigned char c) { return std::tolower(c); });
}

// file processor
void proc_file(fs::path fpath, Counter &counter) {
  std::ifstream fs(fpath);

  string word;
  while (fs >> word) {
    if (lowerOnly && !islower(word)) {
      // only count words that are all lowercase.
      // ignore words with uppercase letters
      continue;
    } else {
      // convert uppercase letters to lowercase
      lower(word);
    }
    if (isalpha(word)) {
      if (counter.find(word) != counter.end())
        ++counter[word];
      else
        counter[word] = 1;
    }
  }
  fs.close();
}

vector<string> getTopWords(Counter &counter, size_t topN = SIZE_MAX) {
  vector<std::pair<string, int>> elems(counter.begin(), counter.end());
  std::sort(elems.begin(), elems.end(),
            [](std::pair<string, int> p1, std::pair<string, int> p2) {
              return p1.second > p2.second;
            });

  const auto n = std::min(topN, elems.size());
  vector<string> res;
  res.reserve(n);
  for (int i = 0; i < n; i++) {
    res.emplace_back(elems[i].first);
  }

  return res;
}

int main(int argc, char **argv) {
  Counter counter;

  for (int i = 1; i < argc; i++) {
    fs::path fpath(argv[i]);

    if (fs::exists(fpath)) {
      std::cout << "Parsing " << fpath << "\n";
      proc_file(fpath, counter);
    } else {
      std::cerr << "Warning: file not found: " << fpath << "\n";
    }
  }

  auto topWords = getTopWords(counter);

  // write top words
  std::cout << "Writing top words to " << top_words_fname << std::endl;
  std::ofstream fs(top_words_fname);
  for (const auto &word : topWords) {
    fs << word << "\n";
  }
  fs.close();

  // write top words with count
  std::cout << "Writing word counts to " << word_counts_fname << std::endl;
  fs.open(word_counts_fname);
  for (const auto &word : topWords) {
    fs << word << " " << counter[word] << "\n";
  }
  fs.close();
}
