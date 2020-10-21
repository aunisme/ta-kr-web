<script>
    import {createEventDispatcher} from 'svelte'
    // export let label;
    export let hidden;
    let dispatch = createEventDispatcher();

    export let style;
</script>


<button class="{style}" on:click="{dispatch('hide', !hidden)}">
    <slot ></slot>
</button>

