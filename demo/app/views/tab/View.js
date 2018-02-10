import TabTpl from 'demo/app/templates/tab.tpl';
import BasicTab from 'demo/app/views/tab/BasicTab';

const View = Mn.View.extend({
  className: 'tab',

  regions: {
    tab1: '.tab1',
    tab2: '.tab2'
  },

  template: _.template(TabTpl),

  onRender: function() {
    this.showChildView('tab1', new BasicTab());
  }
});

export default View;
