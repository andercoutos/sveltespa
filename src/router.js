import Home from './Home.svelte';
import About from './About.svelte';
export const router=function(path,id){
	switch(path){
		case 'home':
		new Home({
			target: document.body,
			hydrate: false,
		});
		break;
		case 'about':
		new About({
			target: document.body,
			hydrate: false,
			props: {
				answer: 42
			}
		});
		break;
		default:
		// erro 404
		break;
	}
};
