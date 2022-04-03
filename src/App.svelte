<script>
  import TileGrid from './TileGrid.svelte'

  let word = 'hello'
  let guesses = ['']

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
    console.log("boo")
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
  <TileGrid {word} {guesses} nGuesses={6} />
</main>

<style>
  header {
    display: flex;
    flex-direction: col;
    justify-content: center;
    border: 1px solid black;
  }
</style>
