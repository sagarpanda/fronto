import MenuTpl from 'demo/app/templates/menu.tpl';

const Menu = Mn.View.extend({
  className: 'container-fluid',

  ui: {
    home: '.m_home',
    grid: '.m_grid',
    tab: '.m_tab',
    settings: '.m_settings'
  },

  template: _.template(MenuTpl),

  setActive: function(cls) {
    if (this.ui[cls]) {
      if (this.activeEl) {
        this.removeActive();
      }
      this.ui[cls].addClass('active');
      this.activeEl = this.ui[cls];
    }
  },

  removeActive: function() {
    if (this.activeEl) this.activeEl.removeClass('active');
  }
});

export default Menu;
