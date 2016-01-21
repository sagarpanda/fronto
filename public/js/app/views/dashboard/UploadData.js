define([
	'app/models/FormModel',
	'libs/LayoutView',
	'text!templates/dashboard/uploaddata.tpl'
	], function(FormModel, LayoutView, UploadDataTpl){

	return LayoutView.extend({

		tagName: 'form',

		className: 'form-horizontal',

		waiting: true,

		attributes: {
			style: 'height:180px;'
		},

		model: new FormModel(),

		ui: {
			goBtn: 'button.btn-go'
		},

		modelEvents: {
			'sync': 'onSyncSuccess',
			'request': 'onRequestStart',
		},

		events:{
			'xclick button.btn-go': 'clickHandler'
		},

		template: function(sModel){
			return _.template(UploadDataTpl)(sModel);
		},

		templateHelpers: function(){
			var m = { waiting: this.waiting, sModel: this.model.attributes };
			return m;
		},

		clickHandler: function(e){
			e.preventDefault();
			console.log('clicked');
		},

		onSyncSuccess: function(){
			this.waiting = false;
			this.render();
		},

		onRequestStart: function(){
			this.waiting = true;
		},

		initialize: function(){
			this.model.fetch();
		}

	});

});