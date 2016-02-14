define([
	'libs/views/GridView', 
	'app/stores/UserStore'
	], function(GridPanel, UserStore){

	return GridPanel.extend({

		initialize: function(){
			this.collection.fetchPage(1, {limit:10});
		},

		title: 'Test Grid - Sticky Header',

		columns: [
			{ header: 'ID', dataIndex: 'id', width: '5%' },
			{ header: 'Name', dataIndex: 'name' },
			{ header: 'Email', dataIndex: 'email' },
			{ header: 'Phone', dataIndex: 'phone', width: '45%' }
		],

		collection: new UserStore(),

		onDestroy: function(){
			this.collection.reset([]);
		}

	});
});