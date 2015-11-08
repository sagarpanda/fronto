define([
	'libs/views/GridPanel', 
	'app/stores/UserStore'
	], function(GridPanel, UserStore){

	return GridPanel.extend({

		initialize: function(){
			this.collection.fetch();
		},

		columns: [
			{ header: 'ID', dataIndex: 'id' },
			{ header: 'Name', dataIndex: 'name' },
			{ header: 'Email', dataIndex: 'email' },
			{ header: 'Phone', dataIndex: 'phone' }
		],

		collection: new UserStore(),

	});
});