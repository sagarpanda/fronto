define(['backbone'], function(Backbone){

	return Backbone.Model.extend({

		url: 'datas/form.php',

		defaults: {
		    "categories": [],
		    "fileTypes": []
		},

		parse : function(response, options) {
			//console.log(options);
			return response.items;
		}
	});
});