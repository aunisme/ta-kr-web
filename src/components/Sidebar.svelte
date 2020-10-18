<script>
import List from './List.svelte';
export let segment;
let labels = [
        {route: '.', title:'Recruitment', icon: 'developer_board'},
        {route: 'jobs', title:'Jobs', icon: 'developer_board'},

    ];

    
</script>

<style>
    .sidebar {
        width: 230px;
        @apply col-start-1 shadow-md flex flex-col fixed  h-full ;
    }
    .brand {
        @apply  mt-6 p-5 font-bold rounded-l-full text-white bg-blue-500 ml-2;
    }
    .items {
        @apply flex flex-col pl-5 mt-20;
    }
</style>

<nav class="sidebar">
    <div class="brand">
        <h3><a href=".">Kejar Recruitment</a></h3>
    </div>
    <div class="items">
        <!-- <div class="flex flex-row bg-white p-2 py-3 justify-center mt-5 rounded items-center hover:bg-gray-400"></div> -->
        <List menu={labels} {segment} />
    </div>
</nav>