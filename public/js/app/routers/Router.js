define([
	'app/routers/AppRouter', 
	'app/routers/SettingsRouter'], 
	function(AppRouter, SettingsRouter){

	return {
		appRouter: AppRouter,
		settingsRouter: SettingsRouter
	};

});