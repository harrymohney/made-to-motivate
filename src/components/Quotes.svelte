<h1>Quote Motivation</h1>
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A" />


<!-- Quotes.svelte -->
<div class="quoteapp stack-large">
  <!-- NewQuote -->
  <form>
    <h2 class="label-wrapper">
      <label for="quote-0" class="label__lg"> How motivated are you? </label>
    </h2>
    <input type="text" id="quote-0" autocomplete="off" class="input input__lg" />
    <button type="submit" disabled="" class="btn btn__primary btn__lg">
      Add
    </button>
  </form>

  <!-- Filter -->
  <div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" aria-pressed="true">
      <span class="visually-hidden">Show</span>
      <span>All</span>
      <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Show</span>
      <span>Active</span>
      <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" aria-pressed="false">
      <span class="visually-hidden">Show</span>
      <span>Completed</span>
      <span class="visually-hidden">tasks</span>
    </button>
  </div>

  <!-- QuoteStatus -->
  <h2 id="list-heading">Let's get motivated</h2>

  <!-- Quotes -->
  <ul role="list" class="quote-list stack-large" aria-labelledby="list-heading">
    <!-- quote-1 (editing mode) -->
    <li class="quote">
      <div class="stack-small">
        <form class="stack-small">
          <div class="form-group">
            <label for="quote-1" class="quote-label">
              'Be the change you want to see in the world'
            </label>
            <input
              type="text"
              id="quote-1"
              autocomplete="off"
              class="quote-text" />
          </div>
          <div class="btn-group">
            <button class="btn quote-cancel" type="button">
              Cancel
              <span class="visually-hidden">Be the change you want to see in the world</span>
            </button>
            <button class="btn btn__primary quote-edit" type="submit">
              Save
              <span class="visually-hidden">Be the change you want to see in the world</span>
            </button>
          </div>
        </form>
      </div>
    </li>

    <!-- quote-2 -->
    <li class="quote">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="quote-2" checked />
          <label for="quote-2" class="quote-label">
            Success is the sum of small efforts - repeated day in and day out.
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Edit
            <span class="visually-hidden">Success is the sum of small efforts - repeated day in and day out.</span>
          </button>
          <button type="button" class="btn btn__danger">
            Delete
            <span class="visually-hidden">Success is the sum of small efforts - repeated day in and day out.</span>
          </button>
        </div>
      </div>
    </li>

    <!-- quote-3 -->
    <li class="quote">
      <div class="stack-small">
        <div class="c-cb">
          <input type="checkbox" id="quote-3" />
          <label for="quote-3" class="quote-label">
            Strive not to be a success, but rather to be of value.
          </label>
        </div>
        <div class="btn-group">
          <button type="button" class="btn">
            Edit
            <span class="visually-hidden">Strive not to be a success, but rather to be of value.</span>
          </button>
          <button type="button" class="btn btn__danger">
            Delete
            <span class="visually-hidden">Strive not to be a success, but rather to be of value.</span>
          </button>
        </div>
      </div>
    </li>
  </ul>

  <hr />

  <!-- MoreActions -->
  <div class="btn-group">
    <button type="button" class="btn btn__primary">Select all</button>
    <button type="button" class="btn btn__primary">Reset all</button>
  </div>
</div>
