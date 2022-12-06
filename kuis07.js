$(document).ready(function() {
	$("#tombol").click(function() {
		alert("Test Click jQuery");
	});
	$("#tombol2").click(function() {
		$("p.paragraf").slideUp();
	});
	$("#tombol3").dblclick(function() {
		$("p.paragraf2").slideUp();
	});
	$(".kotak").mouseenter(function() {
		$("p.paragraf3").slideUp();
	});
	$(".kotak").mouseleave(function() {
		$("p.paragraf3").slideDown();
	});
	$("input").focus(function() {
		$(this).css("color","red");
		$(this).css("background-color","yellow");
		$(this).css("font-size","18px");
	});
});