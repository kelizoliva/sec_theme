 // SEC-specific CSS (needs to move to its own theme)
 $(document).ready(function () {
    $('#edit-field-organization-state-tid').SumoSelect({search: true, searchText: 'Search here.', placeholder: 'Select state(s)...', csvDispCount: 3 });
    $('#edit-field-topic-tid').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select topic(s)...', csvDispCount: 3 });
    $('#edit-type').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select type(s)...', csvDispCount: 3 });
    $('#edit-field-age-group-tid').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select age(s)...', csvDispCount: 3 });
	$('.views-field-field-type-of-training .field-content:contains("person")').html(function(_, html) {
		return html.replace(/(In person)/g, '<span class="inperson">$1</span>');
	});
	$('.views-field-field-type-of-training .field-content:contains("Online")').html(function(_, html) {
		return html.replace(/(Online)/g, '<span class="online">$1</span>');
	});
	$('.drawer').each(function () {
		$(this).children('.plsse-hide').appendTo($(this).children('.pull'));
	  	if($(this).find('.junk').length == 0) {
			$(this).children( '.plsse-hide' ).hide();
		}
  	});
  	$('.node-type-organization .block.block-field-node-field-trainings-webpage .field-item  a').each(function () {
	  	$(this).addClass('button');
  	});
  	$('.node-type-organization .block.block-field-node-field-trainings-webpage .field-item  a:contains("Trainings Webpage")').html(function(_, html) {
		return html.replace(/(Trainings Webpage)/g, 'Visit Trainings Webpage');
	});
 });
 
 