<script>
import {createEventDispatcher} from 'svelte'
import Avatar from "./Avatar.svelte";
import Button from "./Button.svelte";

let dispatch = createEventDispatcher();


let hidden = false;
let more = true;
const show = () => {
    hidden = !hidden;
}
const showMore = () => {
    more = !more;
}

let exps = [{
    experience: "IT Support",
    duration: "3 years"
}];
let skills = ['Troubleshooting', 'Admin'];
</script>


<style>
    .card {
        /* height: 20rem; */
        @apply grid auto-rows-auto gap-2 auto-cols-auto w-full mx-auto mb-4 bg-white rounded-md border-2 border-gray-400;
    }
    .header {
        @apply row-start-1 grid grid-cols-2 pb-4 items-center justify-center border-b-2 border-gray-300;
    }
    .hero {
        @apply col-start-1 flex flex-row my-4 mx-auto border-none;
    }
    .avatar {
        @apply mt-4 mx-4 mr-10 w-16;

    }
    .title {
        @apply col-start-1 flex flex-col  text-xl text-gray-600 justify-between;
    }
    .subtitle {
        @apply flex flex-row justify-between font-normal text-sm;
    }
    .job {
        @apply px-5 py-1 mx-1 bg-blue-500 text-white font-bold rounded-md ;
    }
    .cta {
        @apply flex flex-row mt-8 justify-around items-center;
    }
    .doc {
        @apply flex flex-row items-center justify-between;
    }
    .body {
        @apply row-start-2 border-b border-gray-300;
    }
    .wrapper {
        @apply grid auto-rows-auto;
    }
    .note {
        @apply grid auto-cols-auto border-b border-gray-200 text-gray-600;
    }
    .exp {
        @apply flex flex-row justify-between mb-1 border-b border-gray-200 text-gray-600;
    }
    .footer {
        @apply m-4 mb-2 flex flex-row items-center justify-between;
    }
    .tooltip .tooltip-text {
  @apply invisible p-2 absolute z-10 inline-block ml-6 text-sm rounded-lg bg-gray-700 text-white;
}

.tooltip:hover .tooltip-text {
  @apply visible;
}
    
</style>

<div class="card">
    <div class="header">
        <div class="hero">
            <div class="avatar">
                <img class="w-16 h-16 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
            </div>
            <div class="title">
                <h1 class="font-bold mt-3 text-lg">Muhammad Syahrul</h1>
                <ul class="subtitle">
                    <li class="py-1">Applied for :</li>
                    <li class="job">Second Line Maintainer</li>
                </ul>
            </div>
        </div>
        <div class="cta group bg-white">
            <div class="doc">
                <Button style="hover:text-white mx-4 px-4 flex flex-row item-center bg-gray-300 border-2 border-gray-400 justify-center text-gray-600 rounded-md">
                    <i class="material-icons py-4 pr-2 md-48">description</i>
                    <span class="py-4 pl-2">CV(.pdf)</span>
                </Button>
                <Button style="hover:text-white mx-4 px-4 flex flex-row item-center bg-gray-300 border-2 border-gray-400 justify-center text-gray-600 rounded-md">
                    <i class="material-icons py-4 pr-2 md-48">link</i>
                    <span class="py-4 pl-2">LinkedIn</span>
                </Button>
            </div>
            <Button on:hide={show} hidden={hidden} style=" hover:text-blue-500 relative text-gray-600 rounded-full">
                {#if hidden === true}
                <div class="tooltip flex flex-row">
                    <i class="material-icons md-48 ">expand_more
                    </i>
                    <span class="tooltip-text">
                        {#if hidden === true}
                        Expand
                        {:else}
                            ''
                        {/if}
                    </span>
                </div>
                {:else }
                <i class="material-icons md-48 ">expand_less
                    </i>
                {/if}
            </Button>
        </div>
    </div>
    <div class="body" class:hidden={hidden}>
        <div class="wrapper">
            <div class="note ">
                <div class="mx-auto p-6 font-bold text-sm col-start-1">
                    <p>Hiring Notes</p>
                </div>
                <div class=" col-start-2 p-4 ">
                    <p class="">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur provident et nobis explicabo qui ab earum soluta dolore hic sapiente voluptates quidem architecto officiis esse, quaerat obcaecati! Voluptate iste possimus maiores nemo, nobis eos repudiandae voluptatem voluptas magni iusto quos pariatur incidunt eligendi natus error non rerum temporibus ipsa ex deserunt neque? <span class:hidden={more}>Expedita, quae eos blanditiis repellendus ea facere molestiae doloremque voluptatum, aliquid quia non eveniet? A atque, aliquid repellendus iste quo dolorem obcaecati reiciendis culpa accusantium porro quis quos aspernatur. Impedit totam eum fugit voluptates perferendis excepturi cumque mollitia doloribus voluptatem laudantium ea, exercitationem debitis, dolores eaque neque deleniti!</span>
                       <Button on:hide={showMore} hidden={more} style="text-blue-500">
                        {#if more === true}
                        <p class="">...</p>
                        {:else }
                        <p class="text-sm">Close</p>
                        {/if}
                    </Button>
                    </p>
                    
                </div>
            </div>
            <div class="exp">
                <div class="flex text-sm">
                    <div class="p-6 font-bold">
                    <p>Experiences</p>
                </div>
                <div class="p-4 ">
                    <ul class="flex flex-row">
                        {#each exps as exp }
                        <li class="pr-4">
                            <p class="p-2">{exp.experience} <span>({exp.duration})</span></p>
                            
                        </li>
                        {/each}
                    </ul>
                </div></div>
                <div class="flex text-sm">
                    <div class="p-6 font-bold">
                        <p>Skills</p>
                    </div>
                    <div class="p-4 ">
                        <ul class="flex flex-row ">
                            {#each skills as skill }
                            <li class="pr-4 ">
                                <p class="p-2 bg-gray-300 rounded-md">{skill}</p>
                            </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="mx-4 mb-2">
                    <button class="bg-blue-500 hover:bg-blue-700 rounded text-white px-10 py-4">
                        Interested
                    </button>
                    <button class="rounded text-blue px-10 py-4">
                        Not Interested
                    </button>
                </div>
                <div class="mx-4 mb-2 text-gray-600">
                    <p>Applied Yesterday</p>
                </div>
              </div>
        </div>
    </div>
 
</div>