<script>
const jquery = window.$;
document.title="about";
jquery(function(){
	jquery.get("data.php", function(data, status){
		var html="Data: " + data + "<br>Status: " + status;
		jquery('#data').html(html);
	});
});
</script>

<div id="container">
<h2>about</h2>
<p id="data"></p>
<a href="/home" data-container="#container" title="home">home</a>
</div>
