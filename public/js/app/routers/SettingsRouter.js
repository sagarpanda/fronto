define(['app/controllers/SettingsController'], function(SettingsController){

	return Mn.AppRouter.extend({

		controller : SettingsController,

		appRoutes  : {
			"settings" 	: "settings"
		}
		
	});
	
});