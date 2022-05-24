import Home from './Home.svelte';
import About from './About.svelte';
export const router=function(path,targetSelector){
	switch(path){
		case 'home':
		new Home({
			target: document.querySelector(targetSelector)
		});
		break;
		case 'about':
		new About({
			target: document.querySelector(targetSelector)
		});
		break;
		default:
		// erro 404
		break;
	}
};
