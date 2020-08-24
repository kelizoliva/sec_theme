$(window).on('load', function (e) {
	$('#loader').delay(300).fadeOut();
});
$(document).ready(function () {
	$('.shrinker').append('<span>Search<span>');
    $('#edit-field-organization-state-tid').SumoSelect({search: true, searchText: 'Search here.', placeholder: 'Select state(s)...', csvDispCount: 3 });
    $('#edit-field-topic-tid').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select topic(s)...', csvDispCount: 3 });
    $('#edit-type').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select type(s)...', csvDispCount: 3 });
    $('#edit-field-age-group-tid').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select age(s)...', csvDispCount: 3 });
    $('#edit-field-type-of-training-value').SumoSelect({search: true, searchText: 'Search here', placeholder: 'In Person or Online...', csvDispCount: 3 });
	$('.views-field-field-type-of-training .field-content:contains("person")').html(function(_, html) {
		return html.replace(/(In person)/g, '<span class="inperson">$1</span>');
	});
	$('.views-field-field-type-of-training .field-content:contains("Online")').html(function(_, html) {
		return html.replace(/(Online)/g, '<span class="online">$1</span>');
	});
  	$('.node-type-organization .block.block-field-node-field-trainings-webpage .field-item  a').each(function () {
	  	$(this).addClass('button');
  	});
  	$('.node-type-organization .block.block-field-node-field-trainings-webpage .field-item  a:contains("Trainings Webpage"), .views-field-field-trainings-webpage .button a:contains("Trainings Webpage")').html(function(_, html) {
		return html.replace(/(Trainings Webpage)/g, 'Visit Trainings Webpage');
	});
	// Hide list of States if this is a national organization
	$('.National-Organization .field-content').each(function() {
	   $(this).html('All States and Territories');
	});
	if($('#edit-field-organization-state-tid').val()){
    	$('.block-views-portal-offerings-search-block-1').removeClass('hide');
	} else {
    	$('.block-views-portal-offerings-search-block-1').addClass('hide');
	}
	
	// populate limiting filter
	var limiter = jQuery('#edit-field-organization-state-tid-1');
	var state = jQuery('#edit-field-organization-state-tid');
	state.bind('change', function () {
    	var selected = $(this).val();
		limiter.val(selected);
	});
	state.trigger('change');
	limiter.bind('change', function () {
		var submit = $('#views-exposed-form-portal-offerings-search-block-1');
		submit.submit(function(e) {
			e.preventDefault(); // avoid to execute the actual submit of the form.
			var form = $(this);
			var url = form.attr('action');
		    $.ajax({
	           type: "POST",
	           url: url,
	           data: form.serialize(), // serializes the form's elements.
	           success: function(data)
	           {
	               alert(data); // show response from the php script.
	           }
		    });
		});
	});
	limiter.trigger('change');	

	/* plsse drawer functionality
	$('.shrinkable').load(link.attr('href'),function(responseText, textStatus, XMLHttpRequest){
    	$('.drawer').each(function () {
	    e.preventDefault();
		  $(this).children('.pull').on("click", function(){
			$(this).toggleClass('open');
		    $(this).parent().children('.junk').slideToggle();
		    return false;
		  });
	  	});
		$('.drawer').each(function () {
			$(this).children('.plsse-hide').appendTo($(this).children('.pull'));
		  	if($(this).find('.junk').length == 0) {
				$(this).children( '.plsse-hide' ).hide();
			}
			});
	}); */
	$('.drawer').each(function () {
	  $(this).children('.pull').on("click", function(){
		$(this).toggleClass('open');
	    $(this).parent().children('.junk').slideToggle();
	    return false;
	  });
  	});
	$('.drawer').each(function () {
		$(this).children('.plsse-hide').appendTo($(this).children('.pull'));
	  	if($(this).find('.junk').length == 0) {
			$(this).children( '.plsse-hide' ).hide();
		}
  	});
});
