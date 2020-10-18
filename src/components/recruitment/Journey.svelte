<script>
import Tabs from "./Tabs.svelte";

let items = [
    {title: 'Applications', count: 5, idx: 0},
    {title: 'Qualified', count: 2, idx: 1},
    {title: 'Onprosses', count: 4, idx: 2},
];

let activeItem = items[0];
// console.log(activeItem);
const onTabChange = (e) => (activeItem = e.detail);
</script>

<div class="">
    <Tabs {activeItem} {items} on:onTabChange={onTabChange}/>
</div>