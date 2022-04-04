<script>
  import GameBoard from './GameBoard.svelte'
  import PopupBox from './PopupBox.svelte'

  import { shakeCurrentRow } from './shake'

  let word = '' // target word
  let wordlist = []
  let guesses = [''] // list of guesses

  let nTries = 6
  let gameOver = false
  let popupMsg = ''

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
        popupMsg = 'Success'
        guesses[idx + 1] = '' // force Svelte to update
        gameOver = true
      } else if (!wordlist.includes(guess)) {
        // guess not in wordlist
        popupMsg = 'Guess not in the wordlist'
        console.log(popupMsg)
        shakeCurrentRow()
      } else {
        // guess in wordlist but incorrect
        popupMsg = 'Guess in wordlist but incorrect'
        console.log(popupMsg)
        guesses[idx + 1] = ''
      }
    } else {
      popupMsg = 'Not enough letters'
      console.log(popupMsg)
      shakeCurrentRow()
    }
    if (guesses.length == nTries) {
      gameOver = true
    }
  }

  function isChar(s) {
    const re = /^[a-z]$/i
    return re.test(s)
  }

  function handleKeydown(event) {
    if (gameOver) {
      return
    }

    let key = event.key

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
  <GameBoard {word} {guesses} {nTries} />
  <PopupBox bind:msg={popupMsg} />
</main>

<style>
  header {
    display: flex;
    flex-direction: col;
    justify-content: center;
    border: 1px solid black;
  }
</style>
