<script>
  import { createEventDispatcher, onMount } from 'svelte'
  const dispatch = createEventDispatcher()
  
  import { selectOnFocus } from '../actions.js'
  
  export let autofocus = false
  
  let name = ''
  let nameEl                  // reference to the name input DOM node
  
  const addQuote = () => {
    dispatch('addQuote', name)
    name = ''
    nameEl.focus()            // give focus to the name input
  }
  
  const onCancel = () => {
    name = ''
    nameEl.focus()            // give focus to the name input
  }
  
  onMount(() => autofocus && nameEl.focus())    // if autofocus is true, we run nameEl.focus()
</script>

<form on:submit|preventDefault={addQuote} on:keydown={e => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="quote-0" class="label__lg">What motivates you?</label>
  </h2>
  <input bind:value={name} bind:this={nameEl} use:selectOnFocus 
    type="text" id="quote-0" autoComplete="off" class="input input__lg" 
  />
  <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>

<!-- <style>
  form {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .label__lg {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .input__lg {
    padding: 12px 24px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 10px;
    color: #333;
  }
  
  .input__lg:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .btn__lg {
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 18px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn__lg:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .btn__lg:hover {
    background-color: #0056b3;
  }
</style> -->
