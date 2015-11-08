define([
	'libs/views/Grid',
	'libs/views/Pagination',
	'libs/Store'
	], function(Grid, Pagination, Store){

	return Mn.LayoutView.extend({

		className 	: 'grid-panel',

		viewOptions : ['title', 'columns'],

		columns 	: [],

		title 		: 'Grid',

		constructor : function(options){ 
			this.mergeOptions(options, this.viewOptions);
			Mn.LayoutView.prototype.constructor.apply(this, arguments);
		},

		regions: {
			grid   : '.grid',
			paging : '.paging'
		},

		template: function(sModel){
			var tpl = '\
		        <div class="panel panel-default">\
		            <div class="panel-heading">\
		                <h3 class="panel-title"><%= title %></h3>\
		            </div>\
		            <div class="panel-top"></div>\
		            <div class="panel-body">\
		            	<div class="grid"></div>\
		            	<div class="paging" style="overflow:hidden;"></div>\
		            </div>\
		            <div class="panel-bottom"></div>\
		        </div>';

		    return _.template(tpl)(sModel)
		},

		templateHelpers: function(){
			var self = this;
			return {title: self.title}
		},

		collection: new Store(),

		onShow: function(){
			var self = this;
			this.collectionView = new Grid({
				collection 	: self.collection,
				columns 	: this.columns
			});
			this.pagination = new Pagination({collection: self.collection});
			this.grid.show(self.collectionView);
			this.paging.show(self.pagination);
		}

	});

});