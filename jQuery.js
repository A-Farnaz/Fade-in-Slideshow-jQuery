<script>
$(document).ready(function(){
	$("#slideshow div img").each(function(i) {
		$(this).delay((i++) * 500).fadeIn(2000, function(){
		$("div#copy").delay(500).fadeIn(2000).each();
        });
  });
});
</script>
