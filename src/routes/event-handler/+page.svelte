<script lang="ts">
  let submission_status = ''
  const handle_submit = async (event: Event) => {
    submission_status = 'submitting'

    const form = event.target as HTMLFormElement
    const form_data = new FormData(form)
    const data = Object.fromEntries(form_data)

    const res = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const { message } = await res.json()
    submission_status = message
  }
</script>

<h2>Event handler</h2>

{#if submission_status === 'submitting'}
  <p>Submitting...</p>
{:else if submission_status === 'failed'}
  <p>Submission failed.</p>
{:else if submission_status === 'success'}
  <p>Submission success.</p>
{:else}
  <form method="POST" on:submit|preventDefault={handle_submit}>
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
      <span>Email</span>
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