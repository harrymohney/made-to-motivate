<script lang="ts">
  import FilterButton from './FilterButton.svelte'
  import Quote from './Quote.svelte'
  import MoreActions from './MoreActions.svelte'
  import NewQuote from './NewQuote.svelte'  
  import QuotesStatus from './QuotesStatus.svelte'
  
  export let quotes = []

  let quotesStatus                   // reference to QuotesStatus instance

  $: newQuoteId = quotes.length ? Math.max(...quotes.map(q => q.id)) + 1 : 1

  function removeQuote(quote) {
    quotes = quotes.filter(q => q.id !== quote.id)
    quotesStatus.focus()             // give focus to status heading
  }

  function addQuote(name) {
    quotes = [...quotes, { id: newQuoteId, name, completed: false }]
  }

  function updateQuote(quote) {
    const i = quotes.findIndex(q => q.id === quote.id)
    quotes[i] = { ...quotes[i], ...quote }
  }

  let filter = 'all'
  const filterQuotes = (filter, quotes) => 
    filter === 'active' ? quotes.filter(q => !q.completed) :
    filter === 'completed' ? quotes.filter(q => q.completed) : 
    quotes

  const checkAllQuotes = (completed) => {
    quotes = quotes.map(q => ({...q, completed}))
  }

  const removeCompletedQuotes = () => quotes = quotes.filter(q => !q.completed)

</script>

<!-- Quotes.svelte -->
<div class="quoteapp stack-large">

  <!-- NewQuote -->
  <NewQuote autofocus on:addQuote={e => addQuote(e.detail)} />

  <!-- Filter -->
  <FilterButton bind:filter />

  <!-- QuotesStatus -->
  <QuotesStatus bind:this={quotesStatus} {quotes} />

  <!-- Quotes -->
  <ul class="quote-list stack-large" aria-labelledby="list-heading">
  {#each filterQuotes(filter, quotes) as quote (quote.id)}
    <li class="quote">
      <Quote {quote}
        on:update={e => updateQuote(e.detail)}
        on:remove={e => removeQuote(e.detail)}
      />
    </li>
  {:else}
    <li>Pick your motivation!</li>
  {/each}
  </ul>

  <hr />

  <!-- MoreActions -->
  <MoreActions {quotes}
    on:checkAll={e => checkAllQuotes(e.detail)}
    on:removeCompleted={removeCompletedQuotes}
  />

</div>