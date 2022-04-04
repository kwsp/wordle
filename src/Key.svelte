<script>
  import { createEventDispatcher } from 'svelte'
  export let charsCorrect = new Set()
  export let charsContains = new Set()
  export let key = ''

  const dispatch = createEventDispatcher()

  function handleClick(_) {
    dispatch('key', { key: key })
  }

  $: correct = charsCorrect.has(key)
  $: contains = charsContains.has(key)
</script>

{#if key === 'Spacer'}
  <div style="flex:0.5" />
{:else if key == 'Delete'}
  <button
    class="key {correct ? 'correct' : contains ? 'contains' : ''}"
    data-key={key}
    on:click={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        fill="var(--color-tone-1)"
        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
      />
    </svg>
  </button>
{:else}
  <button
    class="key {correct ? 'correct' : contains ? 'contains' : ''}"
    data-key={key}
    on:click={handleClick}
  >
    {key}
  </button>
{/if}

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
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    user-select: none;
  }

  .key[data-key='Enter'],
  .key[data-key='Delete'] {
    flex: 1.5;
  }

  .key.correct {
    color: white;
    background-color: var(--green);
  }
  .key.contains {
    color: white;
    background-color: var(--yellow);
  }
</style>
