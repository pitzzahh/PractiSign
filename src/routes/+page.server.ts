import { redirect } from "@sveltejs/kit";
import { onMount } from "svelte";

// TODO: check if logged in, if not redirect to login else redirect to dashboard
// Temporary stuff, still learning sveltekit

onMount(() => {
    throw redirect(307, '/login');
});