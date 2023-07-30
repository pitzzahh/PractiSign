import { redirect } from "@sveltejs/kit";

// TODO: check if logged in, if not redirect to login else redirect to dashboard
// Temporary stuff, still learning sveltekit
redirect(307, '/login')