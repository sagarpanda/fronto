define(['text!templates/dashboard/uploaddata.tpl'], function(UploadDataTpl){

	return Mn.ItemView.extend({

		tagName: 'form',

		className: 'form-horizontal',

		ui: {
			goBtn: 'button.btn-go'
		},

		events:{
			'click button.btn-go': 'clickHandler'
		},

		template: _.template(UploadDataTpl),

		clickHandler: function(e){
			e.preventDefault();
		}

	});

});