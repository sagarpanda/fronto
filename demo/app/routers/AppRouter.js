//define(['app/controllers/AppController'], function(AppController) {});
import AppController from 'demo/app/controllers/AppController';
const AppRouter = Mn.AppRouter.extend({
  controller: AppController,

  appRoutes: {
    '': 'signin',
    home: 'home',
    signin: 'signin',
    signout: 'signout',
    grid: 'showGrid',
    tab: 'showTab'
  },

  onRoute: function() {
    //console.log('onRoute', arguments);
  }
});
export default AppRouter;
