define(['text!templates/dashboard/activity.tpl'], function(ActivityTpl){

	return Mn.ItemView.extend({

		template: _.template(ActivityTpl),

	});

});