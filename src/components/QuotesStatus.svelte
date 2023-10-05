<script>
  export let quotes;

  $: totalQuotes = quotes.length
  $: completedQuotes = quotes.filter(quote => quote.completed).length

  let headingEl

  export const focus = () => headingEl.focus()

</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="-1">{completedQuotes} out of {totalQuotes} favorites selected</h2>

<style>
  h2 {
    font-size: 20px;
    color: #333;
  }
</style>
