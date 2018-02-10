const UserModel = Backbone.Model.extend({
  defaults: {
    id: '',
    name: '',
    email: '',
    phone: 0
  } /*,

	parse : function(response, options) {
		console.log(options);
		return response;
	}*/
});

export default UserModel;
