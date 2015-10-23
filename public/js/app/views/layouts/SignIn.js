define(['text!templates/signin.tpl'], function(LoginTpl){

	var Screen = Mn.LayoutView.extend({

		regions: {
			content : ".container"
		},

		events: {
			'click button.submit': 'loginHandler'
		},

		loginHandler: function(e){
			e.preventDefault();
			App.routers.appRouter.navigate('#/home', {trigger:true});
		},

		template: _.template(LoginTpl)

	});
	return Screen;

});