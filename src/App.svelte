<script>
  import GameBoard from './GameBoard.svelte'

  import { shakeCurrentRow } from './shake'

  let word = 'hello'
  let wordlist = []
  let guesses = ['']
  $: idx = guesses.length - 1

  async function getData() {
    const response = await fetch('./wordlist.txt')
    wordlist = (await response.text()).split('\n')
    word = wordlist[Math.floor(Math.random() * wordlist.length)]
    console.log('word:', word)
  }
  getData()

  function _handleChar(char) {
    if (guesses[idx].length < word.length) {
      guesses[idx] += char.toLowerCase()
    }
  }

  function _handleDelete() {
    guesses[idx] = guesses[idx].slice(0, -1)
  }

  function _handleEnter() {
    const guess = guesses[idx]
    console.log("Guess:", guess)

    if (guess.length === word.length) {
      if (guess === word) {
        // success
        console.log('Success')
      } else if (!wordlist.includes(guess)) {
        // guess not in wordlist
        console.log('Guess not in the wordlist')
        shakeCurrentRow()
      } else {
        // guess in wordlist but incorrect
        console.log('Guess in wordlist but incorrect')
        guesses.push('')
      }
    } else {
      console.log('Not enough letters')
      shakeCurrentRow()
    }
  }

  function isChar(s) {
    const re = /^[a-z]$/i
    return re.test(s)
  }

  function handleKeydown(event) {
    let key = event.key
    /*console.log(key, event)*/

    if (isChar(key)) {
      _handleChar(key)
    } else if (key === 'Backspace' || key == 'Delete') {
      _handleDelete()
    } else if (key === 'Enter') {
      _handleEnter()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header>
  <h1>Wordle</h1>
</header>

<main>
  <GameBoard {word} {guesses} nTries={6} />
</main>

<style>
  header {
    display: flex;
    flex-direction: col;
    justify-content: center;
    border: 1px solid black;
  }
</style>
