<script>
import Home from './Home.svelte';
import About from './About.svelte';
import { writable } from 'svelte/store';
// const page = writable(0);
var page= window.location.pathname.split('/')[1];
if(!page){
	page='home';
}
</script>
{#if page==="home"}
<Home/>
{:else if page=== "about"}
<About/>
{:else}
erro 404<br>
{/if}
