// How to use
// return Grid.extend({
// 	columns: [
// 		{ header: 'Name', dataIndex: 'name' },
// 		{ header: 'Age', dataIndex: 'age' },
// 		{ header: 'Company', dataIndex: 'company' },
// 		{ header: 'Email', dataIndex: 'email' }
// 	],
// 	collection: myCollection
// });
define([], function(){

	return Mn.CompositeView.extend({

		viewOptions : ['columns'],

		columns 	: [],

		tagName		: 'table',

		className	: 'table table-condensed table-hover',

		constructor : function(options){ 
			this.mergeOptions(options, this.viewOptions);
			this.createChildView();
			Mn.CompositeView.prototype.constructor.apply(this, arguments);
		},

		initialize: function(options){ },

		createChildView: function(){
			var tpl = '',
				tplHeader = '',
				attr = '',
				headerAttr = '';
			if (this.columns.length == 0) { return false; };

			for (var i = 0; i < this.columns.length; i++) {

				attr = this.columns[i].style ? ' style="'+this.columns[i].style+'"' : '';
				attr += this.columns[i].cls ? ' class="'+this.columns[i].cls+'"' : '';
				headerAttr = this.columns[i].headerStyle ? ' style="'+this.columns[i].headerStyle+'"' : '';
				headerAttr += this.columns[i].headerCls ? ' class="'+this.columns[i].headerCls+'"' : '';

				tpl += '<td'+attr+'><%= '+ this.columns[i].dataIndex +' %></td>';
				tplHeader += '<th'+headerAttr+'> '+ this.columns[i].header +' </th>';
			};

			// childView
			this.childView = Mn.ItemView.extend({
				tagName 	: 'tr',
				modelEvents : {
					'change': 'render'
				},
				template	: function(sModel){
					return _.template(tpl)(sModel);
				}
			});

			// template
			this.template = function(sModel){
				tplHeader = '<thead><tr>'+tplHeader+'</tr></thead><tbody></tbody>';
				return _.template(tplHeader)();
			};

			this.childViewContainer = 'tbody';
		}
		
	});

});