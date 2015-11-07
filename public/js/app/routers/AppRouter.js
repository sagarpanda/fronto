define(['app/controllers/AppController'], function(AppController){

	return Mn.AppRouter.extend({

		controller : AppController,

		appRoutes  : {
			"" 			: "signin",
			"home" 		: "home",
			"signin" 	: "signin",
			"signout" 	: "signout",
			"settings" 	: "settings",
			"grid" 		: "showGrid",
			"tab" 		: "showTab"
		},

		onRoute: function(){
			//console.log('onRoute', arguments);
		}
		
	});
	
});