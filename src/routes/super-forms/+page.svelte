<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client'
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
  import { z } from 'zod'

  export let data

  let submission_status = ''

  const new_contact = z.object({
    quote: z.string().min(5),
    author: z.string().min(1),
  })

  const { form, errors, enhance } = superForm(data.form, {
    validators: new_contact,
    resetForm: true,
    onSubmit: event => {
      submission_status = 'submitting'
    },
    onUpdated: ({ form }) => {
      if (form.valid) {
        submission_status = 'success'
      }
      submission_status = ''
    },
    delayMs: 500,
  })
</script>

<div class="mx-auto max-w-xl">
  <h2>Super form</h2>

  {#if submission_status === 'submitting'}
    <p>Submitting...</p>
  {:else if submission_status === 'failed'}
    <p>Submission failed.</p>
  {:else if submission_status === 'success'}
    <p>Submission success.</p>
  {:else}
    <form method="POST" use:enhance>
      <label for="name" class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        bind:value={$form.quote}
        data-invalid={$errors.quote}
        type="text"
        name="quote"
        aria-label="quote"
        placeholder="Enter your quote"
        required
        autocomplete="off"
        class="input input-bordered w-full {$errors.quote
          ? 'input-error'
          : ''}"
      />
      <label for="quote" class="label">
        <span
          class="label-text-alt {$errors.quote
            ? 'text-error'
            : 'text-base-100'}"
        >
          {$errors.quote}
        </span>
      </label>

      <label for="author" class="label">
        <span class="label-text">Author</span>
      </label>
      <input
        bind:value={$form.author}
        type="text"
        name="author"
        aria-label="author"
        placeholder="Spoken by"
        required
        autocomplete="off"
        class="input input-bordered w-full {$errors.author
          ? 'input-error'
          : ''}"
      />
      <label for="author" class="label">
        <span
          class="label-text-alt {$errors.author
            ? 'text-error'
            : 'text-base-100'}"
        >
          {$errors.author}
        </span>
      </label>
      <input
        type="submit"
        value="Submit to Airtable"
        class="btn btn-primary w-full mt-10"
      />
    </form>
  {/if}
</div>