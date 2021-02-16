// Matthew Groh

orderEvent = function ( event ) {	
	// if "vegan" is in the Notes
	if($("#notes").val().includes("vegan")){
		alert("NOTE: These cheesecakes contain dairy.");
		return;
	} else {
		// display "Thank you!" message
		var accept = $("#labelQuantity").html().replace('Quantity   Topping',
			'Thank you! Your order has been placed.')
		$("#labelQuantity").html(accept);

		// display topping selection
		var toppingText = $("#labelPlain").html().replace('Plain',
			'Topping: ' + $("input[name='topping']:checked").val())
		$("#labelPlain").html(toppingText);

		// display quantity selection
		var quantityText = $("#labelCherry").html().replace('Cherry',
			'Quantity: ' + $('select option:selected').text())
		$("#labelCherry").html(quantityText);

		// display notes
		var notesText = $("#labelChocolate").html().replace('Chocolate',
			'Notes: ' + $("#notes").val())
		$("#labelChocolate").html(notesText);

		// remove everything else
		$("#labelNotes").remove();
		$("select").remove();
		$("input").remove();
		$("textarea").remove();
		$("#buttonOrder").remove();
	}
}

$(function() {
	$("#buttonOrder").click(orderEvent);
});