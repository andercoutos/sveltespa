<script>
const jquery = window.$;
document.title="home";
jquery(function(){
	jquery.get("data.php", function(data, status){
		var html="Data: " + data + "<br>Status: " + status;
		jquery('#data').html(html);
	});
});
</script>

<div id="container">
<h2>home</h2>
<p id="data"></p>
<a href="/about" data-container="#container" title="About">about</a>
</div>
