define([
    'libs/BaseController',
    'app/views/layouts/Home',
    'app/views/settings/View'
], function(BaseController, Home, SettingView){

    var Controller = BaseController.extend({

        settings: function(){
            var layout = this.renderLayout(Home, App.bodyRegion);
            layout.menu.setActive('settings');

            var settingView = new SettingView();
            layout.container.show(settingView);
        }
        
    });

    return new Controller;
});