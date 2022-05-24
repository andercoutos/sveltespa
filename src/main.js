const jquery = window.$;
import {router} from './router.js';
var path= window.location.pathname.split('/')[1];
if(path){
	router(path);
}else{
	router('home');
}
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
export const startRouter = function(){
	jquery('a').click(function(){
		var data_container=jquery(this).attr('data-container');
		if(data_container){
			var title=jquery(this).attr('title');
			var url=jquery(this).attr('href');
			jquery('body').html('');
			path=url.split('/')[1];
			router(path);
			return false;
		}else{
			return true;
		}
	});
}

function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
jquery(function(){
	startRouter();
});
