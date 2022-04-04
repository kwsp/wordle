<script>
  import Key from './Key.svelte'

  export let word = ''
  const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
</script>

<div class="keyboard">
  <div class="row">
    {#each keys[0] as key}
      <Key {word} {key} on:key />
    {/each}
  </div>

  <div class="row">
    <div class="spacer" />
    {#each keys[1] as key}
      <Key {word} {key} on:key />
    {/each}
    <div class="spacer" />
  </div>

  <div class="row">
    <Key {word} key="Enter" on:key />
    {#each keys[2] as key}
      <Key {word} {key} on:key />
    {/each}
    <Key {word} key="Delete" on:key />
  </div>
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

  .spacer {
    flex: 0.5;
  }
</style>
