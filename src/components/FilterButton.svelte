<script>
  export let filter = 'all'
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
    <span class="visually-hidden">tasks</span>
  </button>
  <button class="btn toggle-btn" class:btn__primary={filter === 'completed'} aria-pressed={filter === 'completed'} on:click={()=> filter = 'completed'} >
    <span class="visually-hidden">Show</span>
    <span>Completed</span>
    <span class="visually-hidden">tasks</span>
  </button>
</div>

<!-- <style>
  .filters {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    margin: 0 10px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .btn[aria-pressed="true"] {
    background-color: #0056b3;
  }
</style> -->
