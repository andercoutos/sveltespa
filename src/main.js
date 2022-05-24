const jquery = window.$;
import {router} from './router.js';

// funções
function alterarAUrl(url,title){
	var state = {
		id: (new Date).getTime(),
		url: url,
		title: title
	};
	window.history.replaceState(state, '', url);
}
function alterarOHistorico(url,title){
	var state = {
		id: (new Date).getTime(),
		url: url,
		title: title
	};
	window.history.pushState(state, '', url);
}
function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// gatilhos
jquery(function(){
	var path= window.location.pathname.split('/')[1];
	if(path){
		router(path);
	}else{
		router('home');
	}	
	document.addEventListener('click', e => {
		var dataContainer=$(e.target).attr('data-container');
		if(
			e.target.tagName.toLowerCase() == 'a' &&
			dataContainer
		) {
			e.stopPropagation();
			e.preventDefault();
			var title=jquery(e.target).attr('title');
			var url=jquery(e.target).attr('href');
			jquery('body').html('');
			path=url.split('/')[1];
			router(path);
			return false;
		}else{
			return true;
		}
	});
});
