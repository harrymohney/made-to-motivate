<script>
  import FilterButton from "./FilterButton.svelte";
  export let quotes = []
  
  let newQuoteName = ''
  $: newQuoteId = totalQuotes ? Math.max(...quotes.map(q => q.id)) + 1 : 1

  $: totalQuotes = quotes.length
  $: selectedQuotes = quotes.filter(quote => quote.selected).length

  function removeQuote(quote) {
    quotes = quotes.filter(t => q.id !== quote.id)
  }

  function addQuote() {
    quotes = [...quotes, { id: newQuoteId, name: newQuoteName, selected: false }]
    newQuoteName = ''
  }

  let filter = 'all'
  const filterQuotes = (filter, quotes) => 
    filter === 'active' ? quotes.filter(q => !q.selected) :
    filter === 'selected' ? quotes.filter(q => q.selected) : 
    quotes

</script>

<!-- Quotes.svelte -->
<div class="quoteapp stack-large">

  <!-- NewQuote -->
  <form on:submit|preventDefault={addQuote}>
    <h2 class="label-wrapper">
      <label for="quote-0" class="label__lg">
        What motivates you?
      </label>
    </h2>
    <input bind:value={newQuoteName} type="text" id="quote-0" autocomplete="off" class="input input__lg" />
    <button type="submit" disabled="" class="btn btn__primary btn__lg">
      Add
    </button>
  </form>

  <!-- Filter -->
  <FilterButton bind:filter={filter} />

  <!-- QuotesStatus -->
  <h2 id="list-heading">{selectedQuotes} out of {totalQuotes} quotes selected</h2>

  <!-- quotes -->
  <ul role="list" class="quotes-list stack-large" aria-labelledby="list-heading">
  {#each filterQuotes(filter, quotes) as quote (quote.id)}
    <li class="quotes">
      <div class="stack-small">
        <div class="c-cb">
            <input type="checkbox" id="quote-{quote.id}"
              on:click={() => quote.selected = !quote.selected}
              checked={quote.selected}
            />          
            <label for="quote-{quote.id}" class="quote-label">
            {quote.name}
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Edit <span class="visually-hidden">{quote.name}</span>
          </button>
          <button type="button" class="btn btn__danger"
            on:click={() => removeQuote(quote)}
          >
            Delete <span class="visually-hidden">{quote.name}</span>
          </button>
        </div>
      </div>
    </li>
  {:else}
    <li>Get Motivated!</li>
  {/each}
  </ul>

  <hr />

  <!-- MoreActions -->
  <div class="btn-group">
    <button type="button" class="btn btn__primary">Check all</button>
    <button type="button" class="btn btn__primary">Reset all</button>
  </div>

</div>