<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, user } from '$lib';
	import Hr from '$lib/components/HorizontalLine.svelte';
	import { signOut } from 'firebase/auth';
</script>

<svelte:head>
	<title>PractiSign - Sign In and Registration Application</title>
	<meta
		name="description"
		content="Secure sign-in and registration application for PractiSign. Create an account, manage users, and enjoy smooth authentication."
	/>
	<meta name="author" content="Peter John Arao" />
	<meta
		name="keywords"
		content="sign-in application, registration app, secure authentication, user management, PractiSign"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://practi-sign.vercel.app/" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Language" content="en" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta property="og:title" content="PractiSign - Sign In and Registration Application" />
	<meta
		property="og:description"
		content="Secure sign-in and registration application for PractiSign. Create an account, manage users, and enjoy smooth authentication."
	/>
	<meta property="og:image" content="https://practi-sign.vercel.app/favicon.png" />
	<meta property="og:url" content="https://practi-sign.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="PractiSign" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@PractiSignApp" />
	<meta name="twitter:title" content="PractiSign - Sign In and Registration Application" />
	<meta
		name="twitter:description"
		content="Secure sign-in and registration application for PractiSign. Create an account, manage users, and enjoy smooth authentication."
	/>
	<meta name="twitter:image" content="https://practi-sign.vercel.app/favicon.png" />
</svelte:head>

<main class="bg-blue-500 h-screen flex justify-center items-center">
	<div class="text-white text-center">
		<p class="text-6xl font-bold mb-4">Welcome {auth.currentUser?.displayName}</p>
		<p class="text-4xl">Discover amazing content and more!</p>
		<Hr content="options" />
		<button
			class="bg-danger-900 text-white py-2 px-4 rounded-md hover:bg-danger-500"
			on:click={() => {
				signOut(auth)
					.then(() => {
						goto('/signin');
					})
					.catch((error) => {
						console.log(error);
					});
			}}
		>
			Sign Out
		</button>
	</div>
</main>
