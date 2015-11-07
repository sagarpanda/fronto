define([
    'libs/BaseController',
    'app/views/layouts/Home',
    'app/views/layouts/SignIn',
    'app/views/dashboard/View',
    'app/views/settings/View',
    'app/views/grid/View',
    'app/views/tab/View'
], function(BaseController, Home, SignIn, DashView, SettingView, GridView, TabView){

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
            if (this.layout && this.layout.menu) {
                this.layout.menu.removeActive();
            };
            App.routers.appRouter.navigate('#/signin', {trigger:true});
        },

        showGrid: function(){
            var layout = this.renderLayout(Home, App.bodyRegion);
            layout.menu.setActive('grid');

            var view = new GridView();
            layout.container.show(view);
        },

        showTab: function(){
            var layout = this.renderLayout(Home, App.bodyRegion);
            layout.menu.setActive('tab');

            var tab = new TabView();
            layout.container.show(tab);
        }

    });

    return new Controller;
});