eventHandler = function ( event ) {
	var selectedMonth = $(this).children("option:selected").val();
	$("#month").val(selectedMonth);
}

$(function() {
	$("#month").change(eventHandler);
});