import Router from './app/routers/Router';
//import 'bootstrap/dist/css/bootstrap.css';
//import './css/bootstrap.css';
//import './css/style.css';

const App = Mn.Application.extend({

  initialize: function() {
    //this.lang = { content: content };
    //this.constants = consts;
    this.routers = this.routers || {};
    this.models = this.models || {};
    this.stores = this.stores || {};
    this.views = this.views || {};

    //this.modal = new Modal(self.modalRegion);
  },

  region: '.main',

  onStart: function() {
    //this.showView(tpl);
    _.each(Router, (router, key) => {
      this.routers[key] = new router();
    });
    //this.routers.appRouter = new AppRouter();
    //this.ui.modal = $(this.ui.modal);
    Backbone.history.start();
  }
});

const app = new App();
export default app;
