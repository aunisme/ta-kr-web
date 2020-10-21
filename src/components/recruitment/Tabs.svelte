<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
  
    export let items;
    export let activeItem;
    // console.log(items.title);
   
  </script>
  
  <style>
    .wrapper {
        --border-opacity: 1;
        @apply flex flex-row rounded-md  mt-3 pt-5 mx-auto fixed shadow-md  w-full z-10 justify-start bg-white border-2 border-b-0 border-gray-300;
        /* -webkit-box-shadow: 0 6px 4px -4px rgba(226, 232, 240, var(--border-opacity));
        -moz-box-shadow: 0 6px 4px -4px rgba(226, 232, 240, var(--border-opacity));
        box-shadow: 0 6px 4px -4px rgba(226, 232, 240, var(--border-opacity)); */
      }
    .count {
        @apply ml-2 py-1 px-2 bg-blue-500 rounded-md text-white text-xs font-bold;
    }
    ul {
      display: flex;
      justify-content: center;
      padding: 0;
      list-style-type: none;
    }
    li {
      @apply px-5 text-gray-600;
      cursor: pointer;
    }
    .label {
        @apply flex flex-row items-end;
    }
    .active {
        @apply text-blue-500 border-b-2 border-blue-500 pb-5;
    }
    /* .active .count {
        @apply text-white;
    } */
  </style>
  
  <div class="wrapper container">
    <ul>
      {#each items as item}
        <li on:click={() => dispatch('onTabChange', item)} class:active={item === activeItem}>
          <div class="label" >
              <p>{item.title} </p><span class="count">{item.count}</span>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  