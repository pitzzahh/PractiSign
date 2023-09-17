<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, authUser } from '$lib';
	import type { FirebaseError } from 'firebase/app';
	import { signOut } from 'firebase/auth';

	function handleSignOut(_event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		signOut(auth)
			.then(() => {
				$authUser = undefined;
				goto('/signin');
			})
			.catch((error: FirebaseError) => {
				console.log(error);
			});
	}
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

<h1>Hello welcome {auth.currentUser?.displayName}</h1>
<button on:click={handleSignOut}>SignOut</button>
