<script>
  import { createEventDispatcher } from 'svelte'
  export let word = ''
  export let key = ''

  const dispatch = createEventDispatcher()

  function handleClick(_) {
    console.log(key)
    dispatch('key', { key: key })
  }
</script>

<button class="key" data-key={key} on:click={handleClick}>{key}</button>

<style>
  :root {
    --green: rgb(93, 159, 94);
    --grey: rgb(108, 113, 115);
    --yellow: rgb(195, 170, 86);
    --border-grey: rgb(212, 214, 218);
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

  .key[data-key='Enter'],
  .key[data-key='Delete'] {
    flex: 1.5;
  }
</style>
