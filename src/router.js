import Index from './Index.svelte';
import About from './About.svelte';

export const router=function(path,targetSelector){
	switch(path){

		case '/':
		new Index({
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
		console.log(path);
		break;
	}
};
