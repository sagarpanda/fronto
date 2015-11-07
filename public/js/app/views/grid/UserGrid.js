define([
	'libs/views/Grid', 
	'app/stores/UserStore'
	], function(Grid, UserStore){

	return Grid.extend({

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