define(['i18n!nls/content', 'consts', 'libs/Modal'], function(content, consts, Modal){

	var App = Mn.Application.extend({

		name: 'App',

		initialize: function(){
			var self = this;
			this.lang = { content: content };
			this.constants = consts;
			this.routers = this.routers || {};
			this.models = this.models || {};
			this.stores = this.stores || {};
			this.views = this.views || {};

			this.modal = new Modal(self.modalRegion);
		},

		regions: {
			bodyRegion: '.main',
			modalRegion: '.region_1'
		},

		ui: {
			modal: '.modal'
		},

		onStart: function(routers){
			var self = this;
			_.each(routers, function(router, key){
				self.routers[key] = new router();
			});
			//this.routers.appRouter = new AppRouter();
			this.ui.modal = $(this.ui.modal);
			Backbone.history.start();
		}
		
	});
	
	var app = new App();
	window[app.name] = app;
	return app;
});