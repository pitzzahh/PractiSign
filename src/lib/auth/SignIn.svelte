<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import SignInOptions from './SignInOptions.svelte';
	import banner from '$lib/assets/auth/auth-banner-1.jpg';
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import { auth, store } from '$lib';
	import { goto } from '$app/navigation';
	import {
		signInWithEmailAndPassword,
		type UserCredential
	} from 'firebase/auth';
	import { onDestroy } from 'svelte';
	import Hr from '$lib/components/HorizontalLine.svelte';

	let passwordContent: string = '';
	let email: string = '';
	let errorMessage: string = '';

	const btn = {
		info: 'SignIn'
	};

	const handleSignIn = async () => {
		btn.info = 'Signing in';
		$store.isProcessing = true;
		signInWithEmailAndPassword(auth, email, passwordContent)
			.then((result: UserCredential) => {
				if (result.user) {
					goto('/');
				}
			})
			.catch((error) => {
				errorMessage = error.code;
				console.error(errorMessage);
			})
			.finally(() => {
				btn.info = 'SignIn';
				$store.isProcessing = false;
			});
	};

	onDestroy(() => ($store.showPassword = false));
</script>

<svelte:head>
	<title>Sign in</title>
	<meta name="description" content="Sign in form" />
	<meta name="author" content="Peter John Arao" />
	<meta name="og:title" content="Sign in" />
	<meta property="og:site_name" content="PractiSign" />
</svelte:head>

<section class="dark:bg-primary min-h-screen flex items-center justify-center">
	<div
		in:scale
		class="dark:bg-secondary flex items-center justify-center rounded-2xl shadow-2xl px-10 py-4 md:px-10 md:py-5 gap-4"
	>
		<div class="flex flex-start items-start justify-center w-full flex-col">
			<span class="font-bold text-4xl dark:text-slate-100">Welcome back</span>
			<span class="font-bold text-xl dark:text-slate-100">Sign in to continue</span>
			<form method="POST" class="flex flex-col gap-4 mt-10 w-full" use:enhance>
				<div>
					<label for="email" class="sr-only">Email</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Email</p>
					<Input
						on:keydown={() => errorMessage = ''}
						bind:value={email}
						hasIcon={false}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Password</p>
					<Input
						on:keydown={(event) => {
							event.stopImmediatePropagation()
							if (event.key === 'Enter') {
								handleSignIn();
							}
							errorMessage = '';
						}}
						bind:value={passwordContent}
						hasIcon={true}
					/>
				</div>
				<Button
					info={btn.info}
					on:click={handleSignIn}
					styles="text-slate-100 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				/>
				{#if errorMessage}
					<p class="text-red-500 text-center">{errorMessage}</p>
				{/if}
				<SignInOptions />

				<Hr />

				<div class="flex items-center justify-center gap-3">
					<p class="dark:text-slate-100">Don't have an account?</p>
					<Button
						on:click={() => goto('/signup')}
						styles="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 hover:scale-105"
					>
						SignUp
					</Button>
				</div>
			</form>
		</div>
		<div class="hidden md:block">
			<img class="rounded-2xl w-[40rem]" src={banner} alt="Left side graphic" />
		</div>
	</div>
</section>
