require([
	"jquery", 
	"underscore", 
	"backbone", 
	"marionette", 
	"App", 
	"AppRouter"
], function($, _, Backbone, Mn, App1, AppRouter){

    $(document).ready(function(){ App.start(AppRouter); });
});