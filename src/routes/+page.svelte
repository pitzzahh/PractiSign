<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	let isClicked: boolean;

	const buttonInfo = {
		isClicked: false,
		info: 'Login'
	};
	const handleLogin = () => {
		buttonInfo.isClicked = true;
		buttonInfo.info = 'Logging in';
		setTimeout(() => {
			buttonInfo.isClicked = false;
			buttonInfo.info = 'Login';
		}, 2000);
	};


	function init(el: HTMLInputElement): any {
		el.focus();
	}
</script>

<section class="dark:bg-primary min-h-screen flex items-center justify-center">
	<div class="dark:bg-secondary flex items-center justify-center rounded-2xl shadow-2xl">
		<div class="flex flex-start items-start justify-center flex-col py-8 px-4">
			<span class="font-bold text-4xl dark:text-slate-100">Login</span>
			<form class="flex flex-col gap-4 mt-5">
				<input
					type="text"
                    use:init
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-priamry"
					placeholder="username"
					name="username"
				/>

				<input
					type="password"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-priamry focus:border-priamry block w-full p-2.5 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-priamry dark:focus:border-priamry"
					placeholder="password"
					name="password"
				/>
				<Button
					info={buttonInfo.info}
					on:click={handleLogin}
					isClicked={buttonInfo.isClicked}
					styles="text-slate-100 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 
                w-96 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
				/>

				<div class="flex items-center justify-center gap-2">
					<hr class="w-1/2 h-[1px] dark:bg-[#24292F]" />
					<p class="dark:text-slate-100 mb-1">or</p>
					<hr class="w-1/2 h-[1px] dark:bg-[#24292F]" />
				</div>
				<button
					type="button"
					class="text-slate-100 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2"
				>
					<svg
						class="w-4 h-4 mr-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
							clip-rule="evenodd"
						/>
					</svg>
					Sign in with Github
				</button>
				<button
					type="button"
					class="text-slate-100 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-2 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
				>
					<svg
						class="w-4 h-4 mr-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 19"
					>
						<path
							fill-rule="evenodd"
							d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
							clip-rule="evenodd"
						/>
					</svg>
					Sign in with Google
				</button>
			</form>
		</div>
		<div class="hidden md:block w-1/2 p-5">
			<img
				class="rounded-2xl w-96"
				src="https://images.unsplash.com/photo-1690571653404-f6095cf3d596?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=emanuel-haas-0zPkdQyaxAY-unsplash.jpg"
				alt="Left side graphic"
			/>
		</div>
	</div>
</section>
