<script lang="ts">
	import eye from '$lib/assets/auth/eye.svg';
	import eyeClosed from '$lib/assets/auth/eye-closed.svg';
	import { store } from '$lib';

	export let value: string = '';
	export let name: string = '';
	export let hasIcon: boolean;

	let inputType: 'password' | 'text' = 'text';

	const togglePassword = () => {
		$store.showPassword = !$store.showPassword;
		console.log(`is toggled: ${$store.showPassword}`);
	};

	$: {
		inputType = hasIcon && !$store.showPassword ? 'password' : 'text';
	}
	let variants: string =
		'border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-slate-100 block p-2.5 bg-transparent dark:border-gray-600 w-full focus:ring-slate-100 dark:placeholder-gray-400 focus:outline-none dark:text-slate-100 dark:focus:primary dark:focus:border-priamry';
</script>

<div class="relative">
	{#if inputType === 'password'}
		<input
			on:keydown|stopPropagation
			on:click|stopPropagation
			required
			type="password"
			class={variants}
			{name}
			bind:value
		/>
	{:else}
		<input
			on:keydown|stopPropagation
			on:click|stopPropagation
			required
			type="text"
			class={variants}
			{name}
			bind:value
		/>
	{/if}

	{#if hasIcon}
		<button
			on:click|preventDefault|stopPropagation={togglePassword}
			class="absolute {$store.showPassword
				? 'top-1/2'
				: 'top-[60%]'} right-2 -translate-y-1/2 focus:outline-none"
		>
			{#if !$store.showPassword}
				<img width="30" height="30" src={eyeClosed} alt="Toggle hide password icon" />
			{:else}
				<img width="30" height="30" src={eye} alt="Toggle show password icon" />
			{/if}
		</button>
	{/if}
</div>
