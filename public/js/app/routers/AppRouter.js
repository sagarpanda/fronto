define(['app/controllers/AppController'], function(AppController){

	return Mn.AppRouter.extend({

		controller : AppController,

		appRoutes  : {
			"" 			: "signin",
			"home" 		: "home",
			"signin" 	: "signin",
			"signout" 	: "signout",
			"settings" 	: "settings"
		},

		onRoute: function(){
			//console.log('onRoute', arguments);
		}
		
	});
	
});