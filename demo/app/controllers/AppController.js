//import BaseController from 'demo/libs/BaseController';
import SignIn from 'demo/app/views/layouts/SignIn';
import Home from 'demo/app/views/layouts/Home';
import DashView from 'demo/app/views/dashboard/View';
import GridView from 'demo/app/views/grid/View';
import TabView from 'demo/app/views/tab/View';
import App from 'demo/App';

const Controller = Mn.Object.extend({

  layout: '',

  signin: function() {
    if (this.layout !== 'signin') {
      App.showView(new SignIn());
    }
    this.layout = 'signin';
  },

  home: function() {
    if (this.layout !== 'home') {
      App.showView(new Home());
    }
    this.layout = 'home';
    const view = App.getView();
    view.getChildView('menuRegion').setActive('home');

    const dashboard = new DashView();
    view.showChildView('container', dashboard);
  },

  signout: function() {
    if (this.layout !== '') {
      this.layout = '';
      const view = App.getView();
      view.getChildView('menuRegion').removeActive();
    }
    App.routers.appRouter.navigate('#/signin', { trigger: true });
  },

  showGrid: function() {
    if (this.layout !== 'home') {
      App.showView(new Home());
      this.layout = 'home';
    }
    const view = App.getView();
    view.getChildView('menuRegion').setActive('grid');

    const gridView = new GridView();
    view.showChildView('container', gridView);
  },

  showTab: function() {
    if (this.layout !== 'home') {
      App.showView(new Home());
      this.layout = 'home';
    }
    const view = App.getView();
    view.getChildView('menuRegion').setActive('tab');

    const tab = new TabView();
    view.showChildView('container', tab);
  }
});

export default new Controller();
