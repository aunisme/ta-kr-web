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
        @apply my-6 items-center rounded-md;
    }
    .new {
        @apply text-gray-600 ;
    }
</style>

<div class="wrapper ">
    <div class="group left-cta new bg-white shadow-md hover:bg-blue-500">
    <button class="group-hover:text-white px-10 py-4">New Job</button>
    </div>
    <div class="right-cta">
    <TopBarMenu menu={labels} />
    </div>
</div>