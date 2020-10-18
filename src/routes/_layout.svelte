<script>
  import Nav from '../components/Nav.svelte';
  import Styles from "../components/Styles.svelte";
import Sidebar from '../components/Sidebar.svelte';

  export let segment;
</script>

<style>
	main {
		@apply col-start-2;
	}
	@media screen and (max-width: 550px) {
    main {
      flex: 1;
      width: 90%;
      /* margin: 2rem; */
      /* margin-top: 6rem; */
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 640px) {
    main {
      position: relative;
      flex: 1;
      width: 30%;
      /* margin-left: 2rem; */
      /* margin-top: 6rem; */
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 768px) {
    main {
      position: relative;
      /* flex: 1; */
      margin: 1rem;
      /* margin-top: 6rem; */
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    main {
      position: relative;
      flex: 1;
      /* margin: 2rem; */
      /* margin-top: 6rem; */
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 1280px) {
    main {
      position: relative;
      flex: 1;
      /* margin: 3rem; */
      /* margin-left: 18rem; */
      /* margin-top: 6rem; */
      box-sizing: border-box;
    }
  }
</style>

<Styles/>
<Sidebar {segment}/>
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>