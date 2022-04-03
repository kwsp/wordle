<script>
  export let guesses = [
    ["H", "E", "L", "L", "O"],
    ["H", "E", "", "", ""],
  ];
</script>

<div class="board">
  {#each guesses as guess}
    <div class="grid-row">
      {#each guess as char}
        <div class={char.length ? "tile tile-used" : "tile tile-empty"}>
          {char}
        </div>
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
