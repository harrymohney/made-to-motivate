<!-- <script>
  import Quotes from "./components/Quotes.svelte";

	let quotes = [
		{ id: 1, name: 'Be the change you want to see in the world', selected: true },
		{ id: 2, name: 'Success is the sum of small efforts - repeated day in and day out.', selected: true },
		{ id: 3, name: 'Strive not to be a success, but rather to be of value.', selected: true }
	]
</script> -->
<script>
  import Quotes from './components/Quotes.svelte'
	import Alert from './components/Alert.svelte'

  import { quotes } from './stores.js'
</script>

<Quotes bind:quotes={$quotes} />