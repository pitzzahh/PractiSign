<script lang="ts">
	import Hr from '../components/HorizontalLine.svelte';
	import githubIcon from '$lib/assets/auth/github-icon.svg';
	import googleIcon from '$lib/assets/auth/google-icon.svg';
	import { goto } from '$app/navigation';
	import { store, auth } from '$lib';
	import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, type UserCredential } from 'firebase/auth';
	import { onDestroy } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import type { FirebaseError } from 'firebase/app';

	function signInWithGithub() {
		$store.isAuthenticating = true;
		console.log('signin in with github');
		$store.isAuthenticating = false;
	}

	async function signin(provider: any) {
		$store.isAuthenticating = true;
		console.log(`Signing in using ${provider}`)
		signInWithPopup(auth, provider)
			.then((user: UserCredential) => {
				console.info(`signed in with ${provider}`);
				if (user) {
					goto('/');
				}
			})
			.catch((error: FirebaseError) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(errorCode, errorMessage);
			})
			.finally(() => ($store.isAuthenticating = false));
	}

	const signInOptions = [
		{
			styles:
				'text-slate-100 bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30',
			info: 'Sign in with Github',
			icon: githubIcon,
			alt: 'GitHub icon',
			provider: new GithubAuthProvider()
			},
		{
			styles:
				'text-slate-100 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center ',
			info: 'Sign in with Google',
			icon: googleIcon,
			alt: 'Google icon',
			provider: new GoogleAuthProvider()
		}
	];
	onDestroy(() => ($store.showPassword = false));
</script>

<Hr content="or" />

{#each signInOptions as option}
	<Button on:click={() => signin(option.provider)} styles={option.styles}>
		<img src={option.icon} width="20" height="20" alt={option.alt} />
		{option.info}
	</Button>
{/each}
