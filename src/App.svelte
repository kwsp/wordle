<script>
  import Header from './Header.svelte'
  import GameBoard from './GameBoard.svelte'
  import PopupBox from './PopupBox.svelte'
  import Keyboard from './Keyboard.svelte'

  import { shakeCurrentRow } from './shake'

  let word = '' // target word
  let wordlist = []
  let guesses = [''] // list of guesses
  $: idx = guesses.length - 1

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
    if (guesses[idx].length < word.length) {
      guesses[idx] += char.toLowerCase()
    }
  }

  function _handleDelete() {
    guesses[idx] = guesses[idx].slice(0, -1)
  }

  function _handleEnter() {
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
        popupMsg = 'Not in word list'
        console.log(popupMsg)
        shakeCurrentRow()
      } else {
        // guess in wordlist but incorrect
        console.log('Guess in wordlist but incorrect')
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
  function handleKey(key) {
    if (isChar(key)) {
      _handleChar(key)
    } else if (key === 'Backspace' || key == 'Delete') {
      _handleDelete()
    } else if (key === 'Enter') {
      _handleEnter()
    }
  }

  function handleKeydown(event) {
    if (!gameOver) {
      handleKey(event.key)
    }
  }

  function handleOnScreenKeyboard(event) {
    if (!gameOver) {
      handleKey(event.detail.key)
    }
  }

</script>

<svelte:window on:keydown={handleKeydown} />

<Header />

<main>
  <GameBoard {word} {guesses} {nTries} />
  <PopupBox bind:msg={popupMsg} />
  <Keyboard on:key={handleOnScreenKeyboard} {word}/>
</main>

<style>
  main {
    max-width: 543px;
    margin: auto;
  }
</style>
