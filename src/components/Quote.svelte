<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let quote
  let editing = false; // track editing mode
  let name = quote.name; // hold the name
  function update(updatedQuote) {
  quote = { ...quote, ...updatedQuote }; // applies modifications to quote
  dispatch("update", quote); // emit update event
}
function onCancel() {
  name = quote.name; // restores name to its initial value and
  editing = false; // and exit editing mode
}

function onSave() {
  update({ name }); // updates quote name
  editing = false; // and exit editing mode
}

function onRemove() {
  dispatch("remove", quote); // emit remove event
}

function onEdit() {
  editing = true; // enter editing mode
}

function onToggle() {
  update({ completed: !quote.completed }); // updates quote status
}
{#each filterQuotes(filter, quotes) as quote (quote.id)}
<li class="quote">
  <Todo {quote} on:update={(e) => updateTodo(e.detail)} on:remove={(e) =>
  removeTodo(e.detail)} />
</li>
</script>
<div class="stack-small">
{#if editing}
  <!-- markup for editing quotes: label, input text, Cancel and Save Button -->
  <form on:submit|preventDefault={onSave} class="stack-small" on:keydown={(e) => e.key === 'Escape' && onCancel()}>
    <div class="form-group">
      <label for="quote-{quote.id}" class="quote-label">New name for '{quote.name}'</label>
      <input bind:value={name} type="text" id="quote-{quote.id}" autoComplete="off" class="quote-text" />
    </div>
    <div class="btn-group">
      <button class="btn quote-cancel" on:click={onCancel} type="button">
        Cancel<span class="visually-hidden">renaming {quote.name}</span>
        </button>
      <button class="btn btn__primary quote-edit" type="submit" disabled={!name}>
        Save<span class="visually-hidden">new name for {quote.name}</span>
      </button>
    </div>
  </form>
{:else}
  <!-- markup for displaying quote: checkbox, label, Edit and Delete Button -->
  <div class="c-cb">
    <input type="checkbox" id="quote-{quote.id}"
      on:click={onToggle} checked={quote.completed}
    >
    <label for="quote-{quote.id}" class="quote-label">{quote.name}</label>
  </div>
  <div class="btn-group">
    <button type="button" class="btn" on:click={onEdit}>
      Edit<span class="visually-hidden"> {quote.name}</span>
    </button>
    <button type="button" class="btn btn__danger" on:click={onRemove}>
      Delete<span class="visually-hidden"> {quote.name}</span>
    </button>
  </div>
{/if}
</div>
