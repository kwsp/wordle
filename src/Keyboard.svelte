<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

  function handleClick(event) {
    const key = event.target.dataset.key
    console.log(key)
    dispatch('key', { key: key })
  }
</script>

<div class="keyboard">
  <div class="row">
    {#each keys[0] as key}
      <button class="key" data-key={key} on:click={handleClick}>{key}</button>
    {/each}
  </div>

  <div class="row">
    <div class="spacer" />
    {#each keys[1] as key}
      <button class="key" data-key={key} on:click={handleClick}>{key}</button>
    {/each}
    <div class="spacer" />
  </div>

  <div class="row">
    <button class="key enter" data-key="Enter" on:click={handleClick}>
      Enter
    </button>
    {#each keys[2] as key}
      <button class="key" data-key={key} on:click={handleClick}>{key}</button>
    {/each}
    <button class="key delete" data-key="Delete" on:click={handleClick}>
      delete
    </button>
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

  .key {
    background-color: var(--border-grey);
    color: black;
    margin: 0 6px 0 0;
    height: 58px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 4px;
  }

  .spacer {
    flex: 0.5;
  }

  .enter,
  .delete {
    flex: 1.5;
  }
</style>
