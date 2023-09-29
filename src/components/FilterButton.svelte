<script>
  export let filter = "all";
</script>

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
      <span class="visually-hidden">quotes</span>
    </button>
  </div>