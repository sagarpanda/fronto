define([
	'libs/views/GridPanel', 
	'app/stores/UserStore'
	], function(GridPanel, UserStore){

	return GridPanel.extend({

		title: 'Custom Render',

		initialize: function(){
			this.collection.fetch(1);
		},

		columns: [
			{ header: 'ID', dataIndex: 'id' },
			{ 
				header: 'Name / Phone', renderer: function(){
					return '<%= name %> / <%= phone %>'
				} 
			},
			{ header: 'Email', dataIndex: 'email' }
		],

		collection: new UserStore(),

		onDestroy: function(){
			this.collection.reset([]);
		}

	});
});