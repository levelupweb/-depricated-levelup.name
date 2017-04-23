var UI = function(options) {
	registerUIModules();
}

function registerUIModules(modules) {
	$(`.ui.dropdown`).dropdown();

	$('.ui.basic.modal')
	  .modal('show')
	;
}

var options = {
	
}

UI(options);