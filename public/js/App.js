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

		onStart: function(AppRouter){

			this.routers.appRouter = new AppRouter();
			Backbone.history.start();
		}
		
	});
	
	var app = new App();
	window[app.name] = app;
	return app;
});