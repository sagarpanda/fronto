import Home from 'demo/app/views/layouts/Home';
import SettingView from 'demo/app/views/settings/View';
import App from 'demo/App';

const Controller = Mn.Object.extend({
  settings: function() {
    if (this.layout !== 'home') {
      App.showView(new Home());
      this.layout = 'home';
    }
    const view = App.getView();
    view.getChildView('menuRegion').setActive('settings');

    const settingView = new SettingView();
    view.showChildView('container', settingView);
  }
});

export default new Controller();
