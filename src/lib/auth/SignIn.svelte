<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import SignInOptions from './SignInOptions.svelte';
	import signinBanner from '$lib/assets/auth/signin-md-banner-1.jpg';
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import { auth, authUser } from '$lib';
	import { goto } from '$app/navigation';
	import {
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		type UserCredential
	} from 'firebase/auth';

	let passwordContent: string = '';
	let email: string = '';
	
	$: errorMessage = '';

	const buttonInfo = {
		isSigningIn: false,
		info: 'SignIn'
	};

	const handleSignIn = async () => {
		buttonInfo.isSigningIn = true;
		buttonInfo.info = 'Signing in';
		signInWithEmailAndPassword(auth, email, passwordContent)
			.then((result: UserCredential) => {
				const token = GoogleAuthProvider.credentialFromResult(result)?.accessToken;
				const user = result.user;
				if (user) {
					$authUser = {
						uid: user.uid,
						email: user.email || ''
					};
					goto('/');
				}
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				errorMessage = error.message;
				console.log(errorCode, errorMessage);
			})
			.finally(() => {
				buttonInfo.isSigningIn = false;
				buttonInfo.info = 'SignIn';
			});
	};
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
			<form method="post" class="flex flex-col gap-4 mt-10 w-full" use:enhance>
				<div>
					<label for="email" class="sr-only">Email</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Email</p>
					<Input on:keydown={() => (errorMessage = '')} content={email} hasIcon={false} />
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Password</p>
					<Input
						on:keydown={(event) => {
							if (event.key === 'Enter') {
								handleSignIn();
							}
							errorMessage = '';
						}}
						content={passwordContent}
						hasIcon={true}
					/>
				</div>
				<Button
					info={buttonInfo.info}
					on:click={handleSignIn}
					showLoading={buttonInfo.isSigningIn}
					styles="text-slate-100 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				/>
				<p class="text-red-500 text-center">{errorMessage}</p>
				<SignInOptions />
				<hr class="h-[1px] dark:bg-[#24292F]" />
				<div class="flex items-center justify-center gap-3">
					<p class="dark:text-slate-100">Don't have an account?</p>
					<a href="/signup">
						<Button
							info="SignUp"
							showLoading={false}
							styles="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						/>
					</a>
				</div>
			</form>
		</div>
		<div class="hidden md:block">
			<img class="rounded-2xl w-[40rem]" src={signinBanner} alt="Left side graphic" />
		</div>
	</div>
</section>
