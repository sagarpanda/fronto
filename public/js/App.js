define(['i18n!nls/content', 'consts'], function(content, consts){

	var App = Mn.Application.extend({

		name: 'App',

		initialize: function(){
			this.lang = { content: content };
			this.constants = consts;
			this.routers = this.routers || {};
			this.models = this.models || {};
			this.stores = this.stores || {};
			this.views = this.views || {};
		},

		regions: {
			bodyRegion: 'body'
		},

		onStart: function(routers){
			var self = this;
			_.each(routers, function(router, key){
				self.routers[key] = new router();
			});
			//this.routers.appRouter = new AppRouter();
			Backbone.history.start();
		}
		
	});
	
	var app = new App();
	window[app.name] = app;
	return app;
});