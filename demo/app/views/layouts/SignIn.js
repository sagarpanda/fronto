import LoginTpl from 'demo/app/templates/signin.tpl';
import App from 'demo/App';

const Screen = Mn.View.extend({
  regions: {
    content: '.container'
  },

  events: {
    'click button.submit': 'loginHandler'
  },

  loginHandler: function(e) {
    e.preventDefault();
    App.routers.appRouter.navigate('#/home', { trigger: true });
  },

  template: _.template(LoginTpl)
});
export default Screen;
