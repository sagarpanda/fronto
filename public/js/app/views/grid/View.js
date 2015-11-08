define([
	'text!templates/grid.tpl',
	'app/views/grid/UserGrid',
	'app/views/grid/CustomRender'
	], function(TabTpl, UserGrid, CustomRender){

	return Mn.LayoutView.extend({

		className: 'grid',

		regions: {
			grid1: '.grid1',
			grid2: '.grid2'
		},

		template: _.template(TabTpl),

		onShow: function(){
			var userGrid = new UserGrid();
			this.grid1.show(userGrid);

			var customRender = new CustomRender();
			this.grid2.show(customRender);
		}

	});

});