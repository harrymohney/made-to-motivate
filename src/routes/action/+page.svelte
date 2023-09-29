<script lang="ts">
  import { enhance } from '$app/forms'

  export let form

  $: submission_status = form?.body?.message
</script>

<div>
  <h2>Action</h2>

  {#if submission_status === 'submitting'}
    <p>Submitting...</p>
  {:else if submission_status === 'failed'}
    <p>Submission failed.</p>
  {:else if submission_status === 'success'}
    <p>Submission success.</p>
  {:else}
    <form method="POST" use:enhance>
      <label for="quote">
        <span>Quote</span>
      </label>
      <input
        type="text"
        name="quote"
        aria-label="quote"
        placeholder="Enter your quote"
        required
        autocomplete="off"
      />
      <label for="author">
        <span>Author</span>
      </label>
      <input
        type="text"
        name="author"
        aria-label="author"
        placeholder="Spoken by"
        required
        autocomplete="off"
      />
      <input type="submit" value="Submit to Airtable" />
    </form>
  {/if}
</div>