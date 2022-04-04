<script>
  import { shakeRowState } from './shake'

  export let word = '' // target word
  export let guesses = [''] // list of guesses
  export let nTries = 6

  $: idx = guesses.length - 1
</script>

<div class="board">
  <!-- Past guesses -->
  {#each guesses.slice(0, -1) as guess}
    <div class="grid-row">
      {#each word as c, j}
        <div
          class="tile tile-filled {c == guess[j]
            ? 'correct'
            : word.includes(guess[j])
            ? 'contains'
            : 'wrong'}"
        >
          {guess[j]}
        </div>
      {/each}
    </div>
  {/each}

  <!-- Current guesses -->
  <div class="grid-row curr {$shakeRowState ? 'shake' : ''}">
    {#each word as _, j}
      {#if j < guesses[idx].length}
        <div class="tile filled pop">
          {guesses[idx][j]}
        </div>
      {:else}
        <div class="tile empty">&nbsp;</div>
      {/if}
    {/each}
  </div>

  <!-- Empty guesses -->
  {#each Array(nTries - idx - 1) as _}
    <div class="grid-row">
      {#each word as _}
        <div class="tile empty">&nbsp;</div>
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

  @keyframes pop {
    10%,
    90% {
      transform: scale(102%);
    }
    20%,
    80% {
      transform: scale(104%);
    }
    30%,
    70% {
      transform: scale(106%);
    }
    40%,
    60% {
      transform: scale(108%);
    }
    50% {
      transform: scale(110%);
    }
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

  .tile.pop {
    animation: pop 0.1s;
  }

  :root {
    --green: rgb(93, 159, 94);
    --grey: rgb(108, 113, 115);
    --yellow: rgb(195, 170, 86);
    --border-grey: rgb(212, 214, 218);
  }

  .tile.empty {
    border: 2px solid var(--border-grey);
  }

  .tile.filled {
    border: 2px solid black;
  }

  .tile.correct {
    color: white;
    background-color: var(--green);
    border: 2px solid var(--green);
  }
  .tile.contains {
    color: white;
    background-color: var(--yellow);
    border: 2px solid var(--yellow);
  }
  .tile.wrong {
    color: white;
    background-color: var(--grey);
    border: 2px solid var(--grey);
  }
</style>
