<script lang="ts">
	import eye from '$lib/assets/auth/eye.svg';
	import eyeClosed from '$lib/assets/auth/eye-closed.svg';
	export let togglePassword: boolean;
	export let content: string = '';

	$: inputType = togglePassword ? 'text' : 'password';
</script>

<div class="relative">
	<input
		required
		type={inputType}
		class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block py-2.5 pl-2.5 pr-10 bg-transparent dark:border-gray-600 w-full dark:placeholder-gray-400 dark:text-slate-100 dark:focus:primary dark:focus:border-priamry"
		name="password"
		value={content}
	/>
	<button
		on:click|preventDefault
		class="absolute {togglePassword ? 'top-1/2' : 'top-[60%]'} right-2 -translate-y-1/2 focus:outline-none"
	>
		{#if togglePassword}
			<img width="30" height="30" src={eye} alt="Toggle show password icon" />
		{:else}
			<img width="30" height="30" src={eyeClosed} alt="Toggle hide password icon" />
		{/if}
	</button>
</div>
