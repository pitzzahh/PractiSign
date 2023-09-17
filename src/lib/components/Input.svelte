<script lang="ts">
	import eye from '$lib/assets/auth/eye.svg';
	import eyeClosed from '$lib/assets/auth/eye-closed.svg';
	import { store } from '$lib';
	export let content: string = '';
	export let name: string = '';
	export let hasIcon: boolean;

	$: inputType = hasIcon && $store.togglePassword ? 'password' : 'text';
</script>

<div class="relative">
	<input
		on:keydown
		on:click={(e) => e.stopPropagation()}
		required
		type={inputType}
		class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-slate-100 block p-2.5 bg-transparent dark:border-gray-600 w-full focus:ring-slate-100 dark:placeholder-gray-400 focus:outline-none dark:text-slate-100 dark:focus:primary dark:focus:border-priamry"
		{name}
		value={content}
	/>
	{#if hasIcon}
		<button
			on:click|preventDefault={() => {
				$store.togglePassword = !$store.togglePassword;
				console.log(`is toggled: ${$store.togglePassword}`);
			}}
			class="absolute {$store.togglePassword
				? 'top-[60%] '
				: 'top-1/2'} right-2 -translate-y-1/2 focus:outline-none"
		>
			{#if $store.togglePassword}
				<img width="30" height="30" src={eyeClosed} alt="Toggle hide password icon" />
			{:else}
				<img width="30" height="30" src={eye} alt="Toggle show password icon" />
			{/if}
		</button>
	{/if}
</div>
