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
          class="tile {c == guess[j]
            ? 'correct'
            : word.includes(guess[j])
            ? 'contains'
            : 'wrong'}"
          style="animation-delay: {j * 0.2}s;"
        >
          {guess[j]}
        </div>
      {/each}
    </div>
  {/each}

  <!-- Current guesses -->
  <div class="grid-row curr {$shakeRowState ? 'shake' : ''}">
    {#each word as _, j}
      <div class="tile {j < guesses[idx].length ? 'filled' : 'empty'} ">
        {#if j < guesses[idx].length}
          {guesses[idx][j]}
        {:else}
          &nbsp;
        {/if}
      </div>
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
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    user-select: none;

    background-color: white;
    color: black;
  }

  @keyframes flipVertical {
    10%,
    90% {
      transform: rotateX(18deg);
    }
    50% {
      transform: rotateX(90deg);
    }
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
    animation: pop 0.1s;
  }

  .tile.wrong,
  .tile.correct,
  .tile.contains {
    color: white;
    animation: flipVertical 0.4s;
  }

  .tile.correct {
    background-color: var(--green);
    border: 2px solid var(--green);
  }

  .tile.contains {
    background-color: var(--yellow);
    border: 2px solid var(--yellow);
  }

  .tile.wrong {
    background-color: var(--grey);
    border: 2px solid var(--grey);
  }
</style>
