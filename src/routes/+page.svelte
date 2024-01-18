<script>
	import { onMount } from 'svelte';
	import { list_files, get_file } from '$lib/index.js';
	import { goto } from '$app/navigation';

	let files = [];
	onMount(async () => {
		files = await list_files();
	});

	async function get_url(path) {
		let z = sessionStorage.getItem(path);
		if (z) {
		} else {
			z = await get_file(path);
			sessionStorage.setItem(path, z);
		}
		sessionStorage.setItem('$viewer', z);
		goto(`/viewer`, { replaceState: false });
	}
</script>

<div class="h-max w-full flex flex-col items-center p-8">
	<div class="mb-8 font-bold text-3xl">My Files</div>
	<div class="flex flex-col justify-center items-center gap-6">
		{#each files as path}
			<button on:click={async () => await get_url(path)} class='border-[2px] border-gray-100 px-4 py-2 rounded-2xl'>
        <div class="text-blue-500 text-[1.2rem]">{path.split("/")[path.split("/").length-1]}</div>
        <div class="text-gray-300 text-xs">{path}</div>
      </button>
		{/each}
	</div>
</div>
