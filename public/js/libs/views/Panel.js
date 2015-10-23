/*  // Class: PanelView
 *	// Example
 *  var panel = new PanelView({
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
define(['libs/behaviors/AddMnItems'], function(AddMnItems){

	return Mn.LayoutView.extend({

		viewOptions: ['skipWrap', 'childView', 'title', 'bbar'],

		initialize: function(options){
			this.mergeOptions(options, this.viewOptions);
		},

		regions: {
			body: '.panel-body'
		},

		ui: {
			titleEl: '.panel-title'
		},

		template: function(sModel){
			var tpl = '\
		        <div class="panel panel-default">\
		            <div class="panel-heading">\
		                <h3 class="panel-title"><%= title %></h3>\
		            </div>\
		            <div class="panel-top"></div>\
		            <div class="panel-body"></div>\
		            <div class="panel-bottom"></div>\
		        </div>';

		    return _.template(tpl)(sModel)
		},

		templateHelpers: function(){
			var self = this;
			return {title: self.title}
		},

        onRender: function(){
        	if (this.skipWrap) {
	        	var html = Marionette.Renderer.render(this.template, this.templateHelpers());
				this.$el.replaceWith(html);
				this.setElement(html);
			};
        },

		onShow: function(){
			this.setChildView(this.childView);
		},

		onDestroy: function(){
			if (this.childView) {
				//console.log('destroy');
			};
		},

		setChildView: function(vw){
			var myView = vw;
			if (myView) {
				if (typeof myView === 'function') {
					myView = new myView();
				}else{
					var options = _.omit(myView, 'xclass');
					myView = new myView.xclass(options);
				}
				this.childView = myView;
				this.body.show(this.childView);
			};
		},

 		behaviors: {
 			appendView: {
 				behaviorClass: AddMnItems,
 				uiSelector: '.panel-bottom',
 				itemsKey : 'bbar'
 			}
 		}

	});

});