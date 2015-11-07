define(['backbone'], function(Backbone){

	return Backbone.Model.extend({

		defaults: {
		    "id": "",
		    "name": "",
		    "email": "",
		    "phone": 0
		}/*,

		parse : function(response, options) {
			console.log(options);
			return response;
		}*/
	});
});