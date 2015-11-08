define(['libs/Store', 'app/models/UserModel'], function(Store, UserModel){

	return Store.extend({

		model: UserModel,

		url: 'datas/user.json',

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			return response.items;
		}
		
	});
});
