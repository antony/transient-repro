/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			// optimizeDeps: {
			// 	exclude: [ '@beyonk/svelte-calendar', 'dayjs/esm', 'es6-object-assign' ]
			// }
		}
	}
};

export default config;
