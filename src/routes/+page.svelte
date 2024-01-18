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

<div class="h-screen w-full flex flex-col items-center p-8">
	<div class="mb-8 font-bold">My Files</div>
	<div class="flex flex-col items-center gap-4">
		{#each files as path}
			<button on:click={async () => await get_url(path)}>{path}</button>
		{/each}
	</div>
</div>
