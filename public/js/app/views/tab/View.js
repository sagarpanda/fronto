define([
	'text!templates/tab.tpl',
	'app/views/tab/BasicTab'
	], function(TabTpl, BasicTab){

	return Mn.LayoutView.extend({

		className: 'tab',

		regions: {
			tab1: '.tab1',
			tab2: '.tab2'
		},

		template: _.template(TabTpl),

		onShow: function(){
			this.tab1.show(new BasicTab);
		}

	});

});