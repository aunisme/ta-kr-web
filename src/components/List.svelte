<script>

export let segment;
export let menu;

</script>

<style>
    .list {
        @apply flex flex-row items-center text-gray-600 px-4 py-2;
    }
    .items {
        @apply  px-3 text-sm whitespace-no-wrap font-normal justify-center text-center ;
    }
    .selected {
        @apply border-r-4 border-blue-400 text-blue-400 font-bold;
    }

</style>

<ul>
    {#each menu as list }
    <li class="group hover:bg-blue-400">
        {#if list.title === 'Recruitment'}
            <a class="list group-hover:text-white" href={list.route} class:selected={segment === undefined}>
                    <i class="material-icons md-48">{list.icon}</i>
               {#if list.title !== undefined}
               <span class="items">
                {list.title}
            </span>
               {/if}
            </a>
        {:else}
        <a class="list group-hover:text-white" href={list.route} class:selected={segment === list.route}>
            <i class="material-icons md-48">{list.icon}</i>
            {#if list.title !== undefined}
               <span class="items">
                {list.title}
            </span>
               {/if}
        </a>
        {/if}
    </li>
        
    {/each}
</ul>
