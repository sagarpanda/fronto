require([
	"jquery", 
	"underscore", 
	"backbone", 
	"marionette", 
	"App", 
	"router", 
	"bootstrap"
], function($, _, Backbone, Mn, App1, Routers){

    $(document).ready(function(){ App.start(Routers); });
});