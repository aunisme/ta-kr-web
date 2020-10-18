<script>

    export let menu;
    
    </script>
    
    <style>
        .list {
            @apply flex flex-row items-center text-gray-600 px-3 py-2;
        }
        .items {
            @apply  px-3 text-sm whitespace-no-wrap font-normal justify-center text-center ;
        }
        /* .selected {
            @apply border-r-4 border-blue-400 font-bold;
        } */
    
    </style>
    
    <ul class="flex flex-row">
        {#each menu as list }
        <li class="group hover:bg-blue-400">
            <a class="list group-hover:text-white" href={list.route}>
                <i class="material-icons md-48">{list.icon}</i>
                {#if list.title !== undefined}
                   <span class="items">
                    {list.title}
                </span>
                   {/if}
            </a>
        
        </li>
            
        {/each}
    </ul>
    