export default () => {
	window.$ = require('jquery');
    require('../static/css/ui/semantic.min.js');
    var dropdown = require('semantic-ui-dropdown');
    $('.ui.dropdown').dropdown();
}

export function UI() {
	require('../static/css/ui/semantic.min.js');
}