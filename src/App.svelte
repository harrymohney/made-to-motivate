<script>
  import Quotes from './components/Quotes.svelte'

  import { quotes } from './stores.js'
</script>

<Quotes bind:quotes={$quotes} />