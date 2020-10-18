<script>

    export let menu;
    
    </script>
    
    <style>
        .list {
            @apply flex flex-row items-center text-gray-600 px-3;
        }
    
    </style>
    
    <ul class="flex flex-row items-center">
        {#each menu as list }
        <li class="group">
            <a class="list group-hover:text-blue-500" href={list.route}>
                <i class="material-icons md-48">{list.icon}</i>
            </a>
        </li>
            
        {/each}
    </ul>
    