<script>
	const url = sessionStorage.getItem('$viewer');
</script>

{#if url}
	<div class="h-screen w-full">
		<object width="100%" height="100%" data={url} title="viewer" />
	</div>
{/if}
