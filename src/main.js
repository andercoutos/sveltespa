const jquery = window.$;
import {router} from './router.js';

// funções
function alterarAUrl(url,title){
	var state = {
		url: url,
		title: title
	};
	window.history.pushState(state, '', url);
}

// gatilhos
jquery(function(){
	var path= window.location.pathname.split('/')[1];
	path=encodeURI(path);
	if(path){
		router(path,'body');
	}else{
		router('home','body');
	}
	document.addEventListener('click', e => {
		var dataContainer=$(e.target).attr('data-container');
		if(
			dataContainer &&
			e.target.tagName.toLowerCase() == 'a' &&
			!e.ctrlKey &&
			!e.shiftKey
		) {
			e.stopPropagation();
			e.preventDefault();
			var title=jquery(e.target).attr('title');
			var url=jquery(e.target).attr('href');
			jquery(dataContainer).html('');
			path=url.split('/')[1];
			if(!path){
				path='/';
			}
			router(path,dataContainer);
			alterarAUrl(url,title);
			return false;
		}else{
			return true;
		}
	});
});
