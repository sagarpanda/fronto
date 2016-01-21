define(['libs/LayoutView', 'text!templates/signin.tpl'], function(LayoutView, LoginTpl){

	var Screen = LayoutView.extend({

		regions: {
			content : ".container"
		},

		events: {
			'xclick button.submit': 'loginHandler',
		},

		loginHandler: function(e){
			e.preventDefault();
			App.routers.appRouter.navigate('#/home', {trigger:true});
		},

		template: _.template(LoginTpl)

	});
	return Screen;

});