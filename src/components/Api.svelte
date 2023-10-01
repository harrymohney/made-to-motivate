<script>
  import { onMount } from 'svelte';
  import { getQuote } from '../api.js';

  let quote = '';
  let isLoading = false;

  async function generateQuote() {
    isLoading = true;
    try {
      const data = await getQuote();
      quote = data[0].text;
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      isLoading = false;
    }
  }
</script>

<style>
  .quote-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }

  .quote-text {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .quote-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }

  .quote-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>

<div class="quote-card">
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    <p class="quote-text">{quote}</p>
    <button class="quote-button" on:click={generateQuote}>Generate Quote</button>
  {/if}
</div>
