define([
	'text!templates/grid.tpl',
	'app/views/grid/UserGrid',
	'app/views/grid/CustomRender',
	'app/views/grid/TestGrid'
	], function(TabTpl, UserGrid, CustomRender, TestGrid){

	return Mn.LayoutView.extend({

		className: 'grid',

		regions: {
			grid1: '.grid1',
			grid2: '.grid2',
			grid3: '.grid3'
		},

		template: _.template(TabTpl),

		onShow: function(){xx = this;

			var userGrid = new UserGrid();
			this.grid1.show(userGrid);

			var customRender = new CustomRender();
			this.grid2.show(customRender);

			var testGrid = new TestGrid();
			this.grid3.show(testGrid);
		}

	});

});