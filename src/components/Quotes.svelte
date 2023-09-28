<script>
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
    filter === 'active' ? quotes.filter(t => !q.selected) :
    filter === 'selected' ? quotes.filter(t => q.selected) : 
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
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn__primary={filter === 'all'} aria-pressed={filter === 'all'} on:click={()=> filter = 'all'} >
      <span class="visually-hidden">Show</span>
      <span>All</span>
      <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === 'active'} aria-pressed={filter === 'active'} on:click={()=> filter = 'active'} >
      <span class="visually-hidden">Show</span>
      <span>Active</span>
      <span class="visually-hidden">Motivation</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === 'selected'} aria-pressed={filter === 'selected'} on:click={()=> filter = 'selected'} >
      <span class="visually-hidden">Show</span>    
      <span>Selected</span>
      <span class="visually-hidden">tasks</span>
    </button>
  </div>

  <!-- TodosStatus -->
  <h2 id="list-heading">{selectedQuotes} out of {totalQuotes} quotes selected</h2>

  <!-- quotes -->
  <ul role="list" class="quotes-list stack-large" aria-labelledby="list-heading">
  {#each filterQuotes(filter, quotes) as quotes (quotes.id)}
    <li class="quotes">
      <div class="stack-small">
        <div class="c-cb">
            <input type="checkbox" id="todo-{quote.id}"
              on:click={() => quote.completed = !quote.completed}
              checked={quote.completed}
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