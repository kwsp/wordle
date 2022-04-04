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

  let charsCorrect = new Set()
  let charsContains = new Set()

  function updateKeyboard() {
    charsCorrect = new Set(
      guesses.flatMap((guess) =>
        [...guess].filter((char, i) => char === word[i])
      )
    )
    charsContains = new Set(
      guesses.flatMap((guess) =>
        [...guess].filter((char) => word.includes(char))
      )
    )
  }

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
        updateKeyboard()
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
        updateKeyboard()
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


<PopupBox bind:msg={popupMsg} />
<main>
  <Header />
  <div id="game">
    <GameBoard {word} {guesses} {nTries} />
    <Keyboard on:key={handleOnScreenKeyboard} {charsContains} {charsCorrect} />
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
  }

  #game {
    max-width: 500px;
    width: 100%;
    margin: auto;
    margin: 0 auto;
    display:flex;
    flex: 1;
    flex-direction:column;
    height: 100%;
    justify-content: space-evenly;
  }

</style>
