$(function(){

	var tis_url = "http://tisbookiu.com/BuybackBooks.aspx?i=";
	var bs_url = "https://bookscouter.com/prices.php?isbn=";
	var bs_url_suffix = "&searchbutton=Sell";
	$('#scanned-isbns').val('');

	var row_template = '<tr><td><input type="text" class="isbn" placeholder="Enter ISBN" /></td><td><input type="text" class="tis-price" placeholder="Enter TIS price" /></td><td><input type="text" class="bs-price" placeholder="Enter BookScouter price" /></td><td><h3>$<span class="suggested-price"></span></h3></td></tr>';


	$('#proceed-to-check').click(function(){
		var isbns = $('#scanned-isbns').val().split("\n");
		var isbn_string = '';

		$(isbns).each(function(index){
			if(this != ""){
				$('.book-list tbody').append('<tr><td><input type="text" class="isbn" placeholder="Enter ISBN" value="'+this+'" /></td><td><input type="text" class="tis-price" placeholder="Enter TIS price" /></td><td><input type="text" class="bs-price" placeholder="Enter BookScouter price" /></td><td><h3>$<span class="suggested-price"></span></h3></td></tr>');
				isbn_string += this.slice(0, -1);
				isbn_string += '%2c';
			}
		});

		$('#scan-state').fadeOut();
		$('#check-state').fadeIn();
		$('#scanned-isbns').val('');

		window.open(tis_url+isbn_string, '_blank');

		$(isbns).each(function(index){
			if(this != ""){
				window.open(bs_url+this+bs_url_suffix,'_blank');
			}
		});

		$('.tis-price, .bs-price').keyup(function(){
			calculatePrices($(this));
		});

	});


	$('.add-row').click(function(){
		$('.book-list tbody').append(row_template);

		$('.tis-price, .bs-price').keyup(function(){
			calculatePrices($(this));
		});

	});


	$('.tis-price, .bs-price').keyup(function(){
		calculatePrices($(this));
	});


	function calculatePrices(trigger){
		var tis_price = parseInt(trigger.parents('tr').find('.tis-price').val());
		var bs_price = parseInt(trigger.parents('tr').find('.bs-price').val());
		var target = trigger.parents('tr').find('.suggested-price');

		var suggested_price = 0;

		if(tis_price < bs_price){
			suggested_price = ((bs_price - tis_price) * 0.25) + tis_price;
			target.html(Math.ceil(suggested_price));
		}
		else{
			target.html(bs_price);
		}

		var total_price = 0;
		$('.suggested-price').each(function(index){
			total_price += parseFloat($(this).html());
		});
		$('#total-price').html(Math.ceil(total_price));
	}

	$('.check-prices').click(function(){
		var isbns = '';
		$('.isbn').each(function(index){
			if($(this).val()){
				window.open(bs_url+$(this).val()+bs_url_suffix,'_blank');
				isbns += $(this).val().slice(0, -1);
				isbns += '%2c';
			}
		});
		window.open(tis_url+isbns, '_blank');
	});


});
