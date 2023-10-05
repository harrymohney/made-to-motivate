<!-- <script>
  import { onMount } from 'svelte';
  import { getQuote } from '../api.js';

  let author = '';
  let quoteText = '';
  let isLoading = false;

  async function generateQuote() {
    isLoading = true;
    try {
      const data = await getQuote();
      console.log('Response from API:', data);
      if (data && data.length > 0 && data[0].text) {
        quoteText = data[0].text;
        author = data[0].author; // Add author field
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
  /* Add your CSS styles for the component here */
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

  .quote-author {
    font-size: 16px;
    margin-top: 5px;
    color: #666;
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
    <p class="quote-text">{quoteText}</p>
    <p class="quote-author">- {author}</p>
    <button class="quote-button" on:click={generateQuote}>Generate Quote</button>
  {/if}
</div> -->
