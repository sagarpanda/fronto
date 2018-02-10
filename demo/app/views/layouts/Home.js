import Menu from 'demo/app/views/Menu';
import HomeTpl from 'demo/app/templates/home.tpl';

const Home = Mn.View.extend({
  regions: {
    menuRegion: '.mn-menu',
    container: '.container-body'
  },

  template: _.template(HomeTpl),

  onRender: function() {
    this.menu = new Menu();
    this.showChildView('menuRegion', this.menu);
  }
});

export default Home;
