<script>
  import { fade } from 'svelte/transition'
  export let msg = ''

  let visible = false
  $: {
    if (msg) {
      visible = true
      setTimeout(() => {
        visible = false
        msg = ''
      }, 1000)
    }
  }
</script>

{#if visible}
  <div class="popup-box" out:fade={{ duration: 200 }}>{msg}</div>
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
    background-color: black;
    border-radius: 5px;

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
  }
</style>
