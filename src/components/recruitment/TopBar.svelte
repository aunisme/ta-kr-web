<script>

import TopBarMenu from "./TopBarMenu.svelte";

let labels = [
    {route: 'profile', icon: 'person'},
    {route: 'settings', icon: 'settings'},

]

</script>


<style>
    .wrapper {
        @apply flex flex-row w-full justify-between  ;
    }
    .right-cta {
        @apply flex flex-row m-5 p-5 rounded-md bg-white shadow-md;
    }
    .left-cta {
        @apply m-5 p-5;
    }
    .new {
        @apply bg-blue-500 text-white  px-8 py-3 rounded-md;
    }
</style>

<div class="wrapper">
    <div class="left-cta">
    <button class="new hover:bg-blue-700">New Job</button>
    </div>
    <div class="right-cta">
    <TopBarMenu menu={labels} />
    </div>
</div>