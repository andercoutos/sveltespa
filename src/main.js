const jquery = window.$;
import {router} from './router.js';

// funções:
function abrirComponenteDaUrl(url,title,dataContainer){
	jquery(dataContainer).html('');
	var path=url.split('/')[1];
	if(!path){
		path='/';
	}
	router(path,dataContainer);
}
function alterarAUrl(url,title,dataContainer){
	var state = {
		url: url,
		title: title,
		dataContainer: dataContainer
	};
	window.history.pushState(state, '', url);
}

// gatilhos:

// abrir página diretamente

jquery( function() {
	var path= window.location.pathname.split('/')[1];
	path=encodeURI(path);
	if(!path){
		path='/';
	}
	router(path,'body');
});


// abrir página através de link interno
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
		alterarAUrl(url,title,dataContainer);
		abrirComponenteDaUrl(
			url,
			title,
			dataContainer
		);
		return false;
	}else{
		return true;
	}
});

// abrir página através do histórico do browser
window.onpopstate = function (e) {
	if (e.state!=null) {
		abrirComponenteDaUrl(
			e.state.url,
			e.state.title,
			e.state.dataContainer
		);
	}else{
		abrirComponenteDaUrl(
			window.location.pathname,
			document.title,
			'body'
		);
	}

};
