/*
 *
 *  // Sample
 *  Mn.Layout.extend({
 *  	...
 *		items: [ PanelView, { xclass: PanelView, title: "My Panel" }],
 *		behaviors: {
 *			appendView: {
 *				behaviorClass: AddMnItems,
 * 				//target element
 *				uiSelector: '.body'
 *			}
 *		}
 *		...
 *	});
 *
*/
import HtmlView from 'demo/libs/views/HtmlView';

const behavior = Mn.Behavior.extend({
  defaults: {
    uiSelector: '.body',
    itemsKey: 'items',
    className: ''
  },

  insertRegion: function(cid) {
    const str = `${cid}outer`;
    //ob[str] = `.${str}`;

    let uiEl = this.ui[this.options.uiSelector];
    if (!uiEl && this.options.uiSelector === 'el') {
      uiEl = this.$el;
    }
    if (!uiEl) {
      uiEl = this.$(this.options.uiSelector);
    }
    const className = this.options.className
      ? ` ${this.options.className}`
      : '';
    uiEl.append(`<div class="${str}${className}"></div>`);
    //this.view.addRegions(ob);
    this.view.addRegion(str, `.${str}`);

    return str;
  },

  // onRender
  onRender: function(view) {
    const items = view[this.options.itemsKey] || [];
    let activeIndex;
    view.items = [];
    for (let i = 0; i < items.length; i++) {
      let childV = items[i];

      //set active index
      if (childV.active) {
        activeIndex = i;
      }

      if (typeof childV === 'function') {
        childV = new childV();
      } else if (childV.xclass) {
        const options = _.omit(childV, 'xclass');
        childV = new childV.xclass(options);
      } else {
        childV = new HtmlView(childV);
      }
      const rgion = this.insertRegion(childV.cid, i);
      view[this.options.itemsKey][i] = childV;
      view[this.options.itemsKey][i].region = rgion;

      this.view.showChildView(rgion, childV);
    }
    view.trigger('setActiveIndex', activeIndex);
  }
});

export default behavior;
