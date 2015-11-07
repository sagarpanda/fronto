require([
	"jquery", 
	"underscore", 
	"backbone", 
	"marionette", 
	"App", 
	"router"
], function($, _, Backbone, Mn, App1, Routers){

    $(document).ready(function(){ App.start(Routers); });
});