<script>
  import GameBoard from './GameBoard.svelte'
  import PopupBox from './PopupBox.svelte'

  import { shakeCurrentRow } from './shake'

  let word = 'hello'
  let wordlist = []
  let guesses = ['']

  let msg = ''

  async function getData() {
    const response = await fetch('./wordlist.txt')
    wordlist = (await response.text()).split('\n')
    word = wordlist[Math.floor(Math.random() * wordlist.length)]
    console.log('word:', word)
  }
  getData()

  function _handleChar(char) {
    const idx = guesses.length - 1
    if (guesses[idx].length < word.length) {
      guesses[idx] += char.toLowerCase()
    }
  }

  function _handleDelete() {
    const idx = guesses.length - 1
    guesses[idx] = guesses[idx].slice(0, -1)
  }

  function _handleEnter() {
    const idx = guesses.length - 1
    const guess = guesses[idx]
    console.log('Guess:', guess)

    if (guess.length === word.length) {
      if (guess === word) {
        // success
        msg = 'Success'
        guesses[idx+1] = '' // force Svelte to update
      } else if (!wordlist.includes(guess)) {
        // guess not in wordlist
        msg = 'Guess not in the wordlist'
        console.log(msg)
        shakeCurrentRow()
      } else {
        // guess in wordlist but incorrect
        msg = 'Guess in wordlist but incorrect'
        console.log(msg)
        guesses[idx+1] = ''
      }
    } else {
      msg = 'Not enough letters'
      console.log(msg)
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
  <PopupBox bind:msg />
</main>

<style>
  header {
    display: flex;
    flex-direction: col;
    justify-content: center;
    border: 1px solid black;
  }
</style>
