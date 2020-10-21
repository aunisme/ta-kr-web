<script>
import Button from "../Button.svelte";
import TopBarMenu from "./TopBarMenu.svelte";

  
</script>

<style>
  .wrapper {
    @apply flex flex-row w-3/4 pb-6 bg-gray-300 fixed z-10  justify-between;
  }
  .right-cta {
    @apply flex flex-row my-5 p-5  rounded-md bg-white shadow-md;
  }
  .left-cta {
    @apply my-6 items-center rounded-md;
  }
  .new {
    @apply text-gray-600;
  }
</style>

<div class="container mx-auto">
  <div class="wrapper">
    <div class="group left-cta new bg-white  shadow-md hover:bg-blue-500">
        <button class="group-hover:text-white px-10 py-4">
          New Job
        </button>
      </div>
      <div class="right-cta">
        <slot />
      </div>
  </div>
</div>
