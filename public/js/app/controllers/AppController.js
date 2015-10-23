define([
    'libs/BaseController',
    'app/views/layouts/Home',
    'app/views/layouts/SignIn',
    'app/views/dashboard/View',
    'app/views/settings/View'
], function(BaseController, Home, SignIn, DashView, SettingView){

    var Controller = BaseController.extend({

        home: function(){
            var layout = this.renderLayout(Home, App.bodyRegion);
            layout.menu.setActive('home');

            var dashboard = new DashView();
            layout.container.show(dashboard);
        },

        signin: function(){
            var layout = this.renderLayout(SignIn, App.bodyRegion);
        },

        signout: function(){
            this.layout.menu.removeActive();
            App.routers.appRouter.navigate('#/signin', {trigger:true});
        },

        settings: function(){
            var layout = this.renderLayout(Home, App.bodyRegion);
            layout.menu.setActive('settings');

            var settingView = new SettingView();
            layout.container.show(settingView);
        }

    });

    return new Controller;
});