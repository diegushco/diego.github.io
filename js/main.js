$(".carousel").carousel({
	interval:500,
	pause: "hover"
})
$("#miModal").modal({
	show: false
})
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    $('[data-toggle="popover"]').popover();
});