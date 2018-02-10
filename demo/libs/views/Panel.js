/*  // Class: PanelView
 *	// Example
 *  const panel = new PanelView({
 *      className : 'col-sm-6 col-md-6',
 *      //skipWrap  : true,
 *      title     : 'My Panel',
 *      childView : {
 *          xclass : Mn.LayoutView,
 *          template : _.template('Hello')
 *      }
 *      , bbar: [{xclass:PanelView, title: 'Hello'}]
 *  });
*/
import AddMnItems from 'demo/libs/behaviors/AddMnItems';

const Panel = Mn.View.extend({
  viewOptions: ['skipWrap', 'childView', 'title', 'bbar'],

  initialize: function(options) {
    this.mergeOptions(options, this.viewOptions);
  },

  regions: {
    body: '.panel-body'
  },

  ui: {
    titleEl: '.panel-title'
  },

  template: function(sModel) {
    const tpl =
      '<div class="panel panel-default">\
          <div class="panel-heading">\
              <h3 class="panel-title"><%= title %></h3>\
          </div>\
          <div class="panel-top"></div>\
          <div class="panel-body"></div>\
          <div class="panel-bottom"></div>\
      </div>';

    return _.template(tpl)(sModel);
  },

  templateContext: function() {
    return { title: this.getOption('title') };
  },

  onRender: function() {
    if (this.skipWrap) {
      const html = Mn.Renderer.render(
        this.template,
        this.templateHelpers()
      );
      this.$el.replaceWith(html);
      this.setElement(html);
    }
    this.setChildView(this.childView);
  },

  onDestroy: function() {
    if (this.childView) {
      //console.log('destroy');
    }
  },

  setChildView: function(vw) {
    let myView = vw;
    if (myView) {
      if (typeof myView === 'function') {
        myView = new myView();
      } else {
        const options = _.omit(myView, 'xclass');
        myView = new myView.xclass(options);
      }
      this.childView = myView;
      this.showChildView('body', this.childView);
      //this.body.show(this.childView);
    }
  },

  behaviors: {
    appendView: {
      behaviorClass: AddMnItems,
      uiSelector: '.panel-bottom',
      itemsKey: 'bbar'
    }
  }
});

export default Panel;
