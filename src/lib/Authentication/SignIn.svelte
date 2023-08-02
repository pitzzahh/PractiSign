<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
	import SignInOptions from './SignInOptions.svelte';
	import signinBanner from '$lib/assets/auth/signin-md-banner-1.jpg';
	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';

	let togglePassword: boolean;
	let passwordContent: string;

	const buttonInfo = {
		isSigningIn: false,
		info: 'SignIn'
	};

	const handleSignIn = () => {
		buttonInfo.isSigningIn = true;
		buttonInfo.info = 'Signing in';
		setTimeout(() => {
			buttonInfo.isSigningIn = false;
			buttonInfo.info = 'SignIn';
		}, 2000);
	};

	function init(el: HTMLInputElement): void {
		el.focus();
	}

	$: showingPassword = togglePassword;
</script>

<svelte:head>
	<title>Sign in</title>
	<meta
		name="description"
		content="Sign in form"
	/>
	<meta name="author" content="Peter John Arao" />
	<meta name="og:title" content="Sign in" />
	<meta property="og:site_name" content="PractiSign" />
</svelte:head>

<section class="dark:bg-primary min-h-screen flex items-center justify-center">
	<div
		in:scale
		class="dark:bg-secondary flex items-center justify-center rounded-2xl shadow-2xl px-10 py-7 md:px-10 md:py-5 gap-4"
	>
		<div class="flex flex-start items-start justify-center w-full flex-col">
			<span class="font-bold text-4xl dark:text-slate-100">Welcome back</span>
			<span class="font-bold text-xl dark:text-slate-100">Sign in to continue</span>
			<form class="flex flex-col gap-4 mt-10 w-full" use:enhance>
				<div>
					<label for="email" class="sr-only">Email</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Email</p>
					<input
						required
						type="text"
						use:init
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 bg-transparent dark:border-gray-600 w-full dark:placeholder-gray-400 dark:text-slate-100 dark:focus:primary dark:focus:border-priamry"
						name="email"
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<p class="dark:text-slate-100 text-md font-bold mb-1">Password</p>
					<PasswordInput {togglePassword} content={passwordContent}  on:click={() => (togglePassword = !togglePassword)} />
				</div>
				<Button
					info={buttonInfo.info}
					on:click={handleSignIn}
					showLoading={buttonInfo.isSigningIn}
					styles="text-slate-100 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				/>
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
