$(function() {
	$('#jsfilter').on('input', function() {
		var query = $(this).val();
		$('#jsfilter-content li').each(function() {
			if ($(this).find('span.jsfilterable').text().search(new RegExp(query, 'i')) != -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});
