<script>
const jquery = window.$;
document.title="home";
jquery(function(){
	jquery.get("/data.php", function(data, status){
		var html="Data: " + data + "<br>Status: " + status;
		jquery('#data').html(html);
	});
});
</script>

<div id="container">
<h2>home</h2>
<p id="data"></p>
<a href="/about/42" data-container="#container" title="about">about</a>
</div>
