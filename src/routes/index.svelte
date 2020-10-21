<script>
import Journey from "../components/recruitment/Journey.svelte";
import Main from "../components/Main.svelte";
import TopBar from "../components/recruitment/TopBar.svelte";
import TopBarMenu from "../components/recruitment/TopBarMenu.svelte";

let labels = [
    { route: "profile", icon: "person", title: "profile" },
    { route: "settings", icon: "settings", title: "setting" },
  ];
</script>
<style>
	
  
</style>

<svelte:head>
	<title>Kejar Recruitment</title>
</svelte:head>
<TopBar >
	<TopBarMenu menu={labels}/>
</TopBar>
<Main>
<Journey />
</Main>
