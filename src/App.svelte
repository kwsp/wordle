<script>
  import GameBoard from './GameBoard.svelte'
  
  import { shakeCurrentRow } from './shake'
  
  let word = 'hello'
  let guesses = ['']

  $: idx = guesses.length - 1;
  
  function _handleChar(char) {
    const idx = guesses.length - 1
    if (guesses[idx].length < word.length) {
      guesses[idx] += char
    }
  }

  function _handleDelete() {
    const idx = guesses.length - 1
    guesses[idx] = guesses[idx].slice(0, -1)
  }

  function _handleEnter() {
    if (guesses[idx].length === word.length) {

    } else {
      // length doesn't match
      shakeCurrentRow()
    }
    console.log(guesses[idx])
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
    } else if (key === "Enter") {
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
