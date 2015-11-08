define([
	'text!templates/grid.tpl',
	'app/views/grid/UserGrid'
	], function(TabTpl, UserGrid){

	return Mn.LayoutView.extend({

		className: 'grid',

		regions: {
			grid1: '.grid1',
			grid2: '.grid2'
		},

		template: _.template(TabTpl),

		onShow: function(){
			userGrid = new UserGrid();
			this.grid1.show(userGrid);
		}

	});

});