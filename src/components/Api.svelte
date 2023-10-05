<!-- <script>
  import { onMount } from 'svelte';
  import { getQuote } from '../api.js';

  let quote = '';
  let isLoading = false;

  async function generateQuote() {
    isLoading = true;
    try {
      const data = await getQuote();
      console.log('Response from API:', data);
      if (data && data.length > 0 && data[0].text) {
        quote = data[0].text;
      } else {
        console.error('Invalid response from API:', data);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    generateQuote();
  });
</script>

<style>
  .quote-card {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .quote-text {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  .quote-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s;
  }

  .quote-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .quote-button:hover {
    background-color: #0056b3;
  }
</style>

<div class="quote-card">
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    <p class="quote-text">{quote}</p>
    <button class="quote-button" on:click={generateQuote}>Generate Quote</button>
  {/if}
</div> -->