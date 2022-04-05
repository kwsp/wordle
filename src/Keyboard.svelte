<script>
  import Key from './Key.svelte'

  export let charsCorrect = new Set()
  export let charsContains = new Set()
  export let charsWrong = new Set()

  const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  keys[1] = ["Spacer", ...keys[1], "Spacer"]
  keys[2] = ["Enter", ...keys[2], "Delete"]
</script>

<div class="keyboard">
  {#each keys as row}
    <div class="row">
      {#each row as key}
        <Key {key} on:key {charsCorrect} {charsContains} {charsWrong} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .keyboard {
    margin: 0 8px;
    user-select: none;
  }

  :root {
    --green: rgb(93, 159, 94);
    --grey: rgb(108, 113, 115);
    --yellow: rgb(195, 170, 86);
    --border-grey: rgb(212, 214, 218);
  }

  .row {
    display: flex;
    width: 100%;
    margin: 0 auto 8px;
    touch-action: manipulation;
  }
</style>
