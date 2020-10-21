<script>
  import Nav from '../components/Nav.svelte';
  import Styles from "../components/Styles.svelte";
import Sidebar from '../components/Sidebar.svelte';

  export let segment;
</script>

<style>
	main {
		@apply col-start-2 flex flex-col h-full bg-gray-300;
	}
	
</style>

<Styles/>
<Sidebar {segment}/>
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>