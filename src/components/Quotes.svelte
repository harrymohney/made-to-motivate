<script>
  // import { onMount } from 'svelte';
  import FilterButton from './FilterButton.svelte';
  import Quote from './Quote.svelte';
  import MoreActions from './MoreActions.svelte';
  import NewQuote from './NewQuote.svelte';
  import QuotesStatus from './QuotesStatus.svelte';
  import { alert } from '../stores.js'
  // import Api from './Api.svelte'
  
  // import { writable } from 'svelte/store';
  
  export let quotes = []

  let quotesStatus                   // reference to QuotesStatus instance

  $: newQuoteId = quotes.length > 0 ? Math.max(...quotes.map(q => q.id)) + 1 : 1

  function addQuote(name) {
    quotes = [...quotes, { id: newQuoteId, name, completed: false }]
    $alert = `Quote '${name}' has been added`
  }

  function removeQuote(quote) {
    quotes = quotes.filter(q => q.id !== quote.id)
    quotesStatus.focus()             // give focus to status heading
    $alert = `Quote '${quote.name}' has been deleted`
  }

  function updateQuote(quote) {
    const i = quotes.findIndex(q => q.id === quote.id)
    if (quotes[i].name !== quote.name)            $alert = `quote '${quotes[i].name}' has been renamed to '${quote.name}'`
    if (quotes[i].completed !== quote.completed)  $alert = `quote '${quotes[i].name}' marked as ${quote.completed ? 'completed' : 'active'}`
    quotes[i] = { ...quotes[i], ...quote }
  }

  let filter = 'all'
  const filterQuotes = (filter, quotes) => 
    filter === 'active' ? quotes.filter(q => !q.completed) :
    filter === 'completed' ? quotes.filter(q => q.completed) : 
    quotes

    $: {
    if (filter === 'all')               $alert = 'Browsing all quotes'
    else if (filter === 'active')       $alert = 'Browsing active quotes'
    else if (filter === 'completed')    $alert = 'Browsing completed quotes'
  }

  const checkAllQuotes = (completed) => {
    quotes = quotes.map(q => ({...q, completed}))
    $alert = `${completed ? 'Checked' : 'Unchecked'} ${quotes.length} quotes`
  }
  const removeCompletedQuotes = () => {
    $alert = `Removed ${quotes.filter(q => q.completed).length} quotes`
    quotes = quotes.filter(q => !q.completed)
  }

</script>

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
    <li>Add a new Quote!</li>
  {/each}
  </ul>

  <hr />

  <!-- MoreActions -->
  <MoreActions {quotes}
    on:checkAll={e => checkAllQuotes(e.detail)}
    on:removeCompleted={removeCompletedQuotes}
  />

</div>

<!-- <style>
  /* Add your global styles here */
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 36px;
    color: #333;
    text-align: center;
  }

  .quote-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .default-text {
    font-size: 18px;
    color: #666;
    text-align: center
  }
</style> -->