<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import signinBanner from '$lib/assets/auth/signin-md-banner-1.jpg';
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { createUserWithEmailAndPassword, type UserCredential } from 'firebase/auth';
	import { auth, authUser, store } from '$lib';

	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	import type { FirebaseError } from 'firebase/app';
	import OrDivider from '$lib/components/OrDivider.svelte';

	let togglePassword: boolean;

	let email: string;
	let passwordContent: string;

	const buttonInfo = {
		isSigninUp: true,
		showLoading: false,
		info: 'SignUp'
	};

	const handleSignUp = () => {
		buttonInfo.isSigninUp = true;
		buttonInfo.showLoading = true;
		buttonInfo.info = 'Signing up';
		createUserWithEmailAndPassword(auth, email, passwordContent)
			.then((userCredential: UserCredential) => {
				$authUser = {
					uid: userCredential.user.uid,
					email: userCredential.user.email || ''
				};
				goto('/');
			})
			.catch((error: FirebaseError) => {
				console.log(error);
			})
			.finally(() => {
				buttonInfo.isSigninUp = false;
				buttonInfo.showLoading = false;
				buttonInfo.info = 'Signup';
			});
	};
</script>

<svelte:head>
	<title>Sign up</title>
	<meta name="description" content="Sign up form" />
	<meta name="author" content="Peter John Arao" />
	<meta name="og:title" content="Sign up" />
	<meta property="og:site_name" content="PractiSign" />
</svelte:head>

<section class="dark:bg-primary min-h-screen flex items-center justify-center">
	<div
		in:scale
		class="dark:bg-secondary flex items-center justify-center rounded-2xl shadow-2xl px-10 py-4 md:px-10 md:py-5 gap-4"
	>
		<div class="flex flex-start items-start justify-center w-full flex-col">
			<span class="font-bold text-4xl dark:text-slate-100">Nice to meet you</span>
			<span class="font-bold text-xl dark:text-slate-100">Sign up to continue with our service</span
			>
			<form method="POST" class="flex flex-col gap-4 mt-10 w-full" use:enhance>
				<div>
					<label for="text" class="sr-only">Name</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Name</p>
					<Input content={email} name={'name'} hasIcon={false} />
				</div>
				<div>
					<label for="email" class="sr-only">Email</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Email</p>
					<Input content={email} name={'email'} hasIcon={false} />
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Password</p>
					<Input
						content={passwordContent}
						name={'password'}
						hasIcon={true}
					/>
				</div>
				<Button
					info={buttonInfo.info}
					on:click={handleSignUp}
					showLoading={buttonInfo.showLoading}
					styles="text-slate-100 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				/>
				<hr class="h-[1px] dark:bg-[#24292F]" />
				<div class="flex items-center justify-center gap-3">
					<p class="dark:text-slate-100">Already have an account?</p>
					<a href="/signin">
						<Button
							info="SignIn"
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
