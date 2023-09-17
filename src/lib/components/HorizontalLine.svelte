<script lang="ts">
	export let content: string = '';
</script>

<div class="flex items-center justify-center gap-2">
	{#if content}
		<hr class="w-1/2 h-[1px] dark:bg-[#24292F]" />
		<p class="dark:text-slate-100 mb-1">{content}</p>
		<hr class="w-1/2 h-[1px] dark:bg-[#24292F]" />
	{:else}
		<hr class="w-full h-[1px] dark:bg-[#24292F]" />
	{/if}
</div>
