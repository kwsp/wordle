<script>
  import { shakeState } from './shake'

  export let word = 'hello' // correct word
  export let guesses = [''] // list of guesses
  export let nTries = 6

  $: idx = guesses.length - 1
</script>

<div class="board">
  {#each Array(nTries) as _, i}
    <div
      class="grid-row {idx === i ? 'curr' : ''} {$shakeState ? 'shake' : ''}"
    >
      {#each word as c, j}
        {#if i < guesses.length && j < guesses[i].length}
          <div class="tile tile-used">{guesses[i][j]}</div>
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

  @keyframes shake {
    10%,
    90% {
      transform: translateX(-1px);
    }
    20%,
    80% {
      transform: translateX(2px);
    }
    30%,
    70% {
      transform: translateX(-3px);
    }
    40%,
    60% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-5px);
    }
  }

  .curr.shake {
    animation: shake 0.5s;
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
