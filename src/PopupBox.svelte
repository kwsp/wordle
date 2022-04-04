<script>
  import { fly } from 'svelte/transition'
  export let msg = ''

  let visible = false
  $: {
    if (msg) {
      visible=true
      setTimeout(() => {
        visible = false
      }, 1500);
    }
  }
</script>

{#if visible}
  <div class="popup-box" transition:fly={{ y: 20, duration: 500 }}>
    <span>{msg}</span>
  </div>
{/if}

<style>
  .popup-box {
    z-index: 10000;
    position: absolute;
    top: 66px;
    height: 50px;
    width: 200px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    color: white;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 1rem;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
