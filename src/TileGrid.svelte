<script>
  export let word = 'hello' // correct word
  export let guesses = [''] // list of guesses
  export let nGuesses = 6
</script>

<div class="board">
  {#each Array(nGuesses) as _, i}
    <div class="grid-row">
      {#each word as c, j}
        {#if i < guesses.length && j < guesses[i].length}
          <div class="tile tile-used">
            {guesses[i][j]}
          </div>
        {:else}
          <div class="tile tile-empty">&nbsp;</div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .board {
    vertical-align: middle;
    height: 100%;
    margin: 2rem;
  }

  .grid-row {
    display: flex;
    justify-content: center;
  }

  .tile {
    width: 3rem;
    line-height: 3rem;
    font-size: 2rem;
    font-weight: bold;
    margin: 2px;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
  }

  .tile-empty {
    border: 2px solid grey;
  }

  .tile-used {
    border: 2px solid black;
  }
</style>
