<script>
import Application from "./Application.svelte";
import Hired from "./Hired.svelte";
import Inprosses from "./Inprosses.svelte";
import Qualified from "./Qualified.svelte";
import Tabs from "./Tabs.svelte";

let items = [
    {title: 'Applications', count: 5},
    {title: 'Qualified', count: 2},
    {title: 'Onprosses', count: 4},
    {title: 'Hired', count: 9},

];

let activeItem = items[0];
// console.log(activeItem);
const onTabChange = (e) => (activeItem = e.detail);
</script>

<div class="container bg-gray-300 mx-auto">
    <Tabs {activeItem} {items} on:onTabChange={onTabChange}/>
    <div class="mt-5 pt-32 mx-auto ">
        {#if activeItem === items[0]}
        <Application />
        {:else if activeItem === items[1]}
        <Qualified />
        {:else if activeItem === items[2]}
        <Inprosses />
        {:else if activeItem === items[3]}
        <Hired />
        {/if}
    </div>
</div>