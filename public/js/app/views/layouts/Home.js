define([
	'marionette',
	'text!templates/home.tpl',
    'app/views/Menu'
    ], function(Mn, Home, Menu){

	return Mn.LayoutView.extend({

		regions: {
			menuRegion : ".mn-menu",
			container  : ".container-body"
		},

		template: _.template(Home),

		onShow: function(){
			this.menu = new Menu();
            this.menuRegion.show(this.menu);
		}
	});

});