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
define(['libs/views/HtmlView'], function(HtmlView){

	var behavior = Mn.Behavior.extend({

		defaults: {
			uiSelector: ".body",
			itemsKey: 'items',
			className: ''
		},

		insertRegion: function(cid, index){
			var ob = {},
				str = cid+'outer';
			ob[str] = '.'+str;
			
			var uiEl = this.ui[this.options.uiSelector];
			if (!uiEl && this.options.uiSelector === 'el') {
				uiEl = this.$el;
			}
			if (!uiEl) {
				uiEl = this.$(this.options.uiSelector);
			}
			var className = this.options.className ? ' '+this.options.className : '';
			uiEl.append('<div class="'+str+className+'"></div>');
			this.view.addRegions(ob);

			return this.view[str];
		},

		onShow: function(view, region){

			var items = view[this.options.itemsKey] || [];
			var activeIndex;
			view.items = [];
			for (var i = 0; i < items.length; i++) {

				var childV = items[i];

				//set active index
				if (childV.active) { activeIndex = i; };

				if (typeof childV === 'function') {
					childV = new childV();
				}else if(childV.xclass){
					var options = _.omit(childV, 'xclass');
					childV = new childV.xclass(options);
				}else{
					childV = new HtmlView(childV);
				}
				var rgion = this.insertRegion(childV.cid, i);
				view[this.options.itemsKey][i] = childV;
				view[this.options.itemsKey][i].region = rgion;

				rgion.show(childV);
			};
			view.trigger('setActiveIndex', activeIndex);
		}

	});

	return behavior;

});