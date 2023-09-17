<script lang="ts">
	import Hr from '../components/HorizontalLine.svelte';
	import githubIcon from '$lib/assets/auth/github-icon.svg';
	import googleIcon from '$lib/assets/auth/google-icon.svg';
	import { goto } from '$app/navigation';
	import { store, auth } from '$lib';
	import { GoogleAuthProvider, signInWithPopup, type UserCredential } from 'firebase/auth';
	import { onDestroy } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import type { FirebaseError } from 'firebase/app';

	function signInWithGithub() {
		$store.isSigninIn = true;
		console.log('signin in with github');
		$store.isSigninIn = false;
	}

	async function signInWithGoogle() {
		$store.isSigninIn = true;
		console.log('signin in with google');
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((user: UserCredential) => {
				console.info('signed in with boogle');
				if (user) {
					goto('/');
				}
			})
			.catch((error: FirebaseError) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(errorCode, errorMessage);
			})
			.finally(() => ($store.isSigninIn = false));
	}

	const signInOptions = [
		{
			styles:
				'text-slate-100 bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30',
			info: 'Sign in with Github',
			icon: githubIcon,
			alt: 'GitHub icon',
			handler: signInWithGithub
		},
		{
			styles:
				'text-slate-100 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center ',
			info: 'Sign in with Google',
			icon: googleIcon,
			alt: 'Google icon',
			handler: signInWithGoogle
		}
	];
	onDestroy(() => ($store.showPassword = false));
</script>

<Hr content="or" />

{#each signInOptions as option}
	<Button on:click={option.handler} styles={option.styles}>
		<img src={option.icon} width="20" height="20" alt={option.alt} />
		{option.info}
	</Button>
{/each}
