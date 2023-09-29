<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let quotes

  let completed = true;

  const checkAll = () => {
    dispatch("checkAll", completed);
    completed = !completed;
  };

  const removeCompleted = () => dispatch("removeCompleted");

  $: completedQuotes = quotes.filter(q => q.completed).length
</script>

<div class="btn-group">
  <button type="button" class="btn btn__primary" 
    disabled={quotes.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
  <button type="button" class="btn btn__primary" 
    disabled={completedQuotes === 0} on:click={removeCompleted}>Remove selected</button>
</div>