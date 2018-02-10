import AddMnItems from 'demo/libs/behaviors/AddMnItems';
import HtmlView from 'demo/libs/views/HtmlView';

const View = Mn.View.extend({
  className: 'settings',

  template: false,

  behaviors: {
    appendView: {
      behaviorClass: AddMnItems,
      uiSelector: 'el'
    }
  },

  items: [
    {
      xclass: HtmlView,
      tagName: 'h1',
      html: 'Settings',
      className: 'page-header page-header-crm'
    },
    {
      xclass: HtmlView,
      html: 'text goes here...'
    }
  ]
});

export default View;
