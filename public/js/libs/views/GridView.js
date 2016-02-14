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
define(['libs/views/Pagination'], function(Pagination){

	var renderer = function(name){
		return '<%= '+ name +' %>';
	};

	return Mn.CompositeView.extend({

		viewOptions : ['columns', 'title'],

		columns 	: [],

		tagName		: 'div',

		title: 'Grid',

		childViewContainer : '.tbody',

		//className	: 'table table-condensed table-hover',
		className	: 'grid-wrap',

		regions: {
			paging : '.paging'
		},

		ui: {
			gridBody: '.tbody',
			thead: '.thead',
			paging : '.paging'
		},

		constructor : function(options){ 
			this.mergeOptions(options, this.viewOptions);
			this.__createChildView();
			Mn.CompositeView.prototype.constructor.apply(this, arguments);
		},

		initialize: function(options){
			this.listenTo(this.collection, 'sync', this.onSyncSuccess);
			this.listenTo(this.collection, 'request', this.onRequestStart);
		},

		onSyncSuccess: function(){
			this.destroyEmptyView();
			this.waiting = false;
			this.checkEmpty();
		},

		onRequestStart: function(){
			this.waiting = true;
			this.destroyEmptyView();
			this.checkEmpty();
		},

		__createChildView: function(){
			var tpl = '',
				tplHeader = '',
				attr = '',
				headerAttr = '',
				width = '';
			if (this.columns.length == 0) { return false; };

			for (var i = 0; i < this.columns.length; i++) {

				width = this.columns[i].width;
				if (_.isNumber(width)) { width += 'px'};

				attr = this.columns[i].width ? ' style="width:'+width+';"' : '';
				attr += this.columns[i].cls ? ' class="col '+this.columns[i].cls+'"' : ' class="col"';

				headerAttr = this.columns[i].width ? ' style="width:'+width+';"' : '';
				headerAttr += this.columns[i].headerCls ? ' class="col h-col '+this.columns[i].headerCls+'"' : ' class="col h-col"';

				if (this.columns[i].renderer) {
					tpl += '<div'+attr+'>'+ this.columns[i].renderer.call(this) +'</div>';
				}else{
					tpl += '<div'+attr+'>'+ renderer(this.columns[i].dataIndex) +'</div>';	
				};
				tplHeader += '<div'+headerAttr+'>'+ this.columns[i].header +'</div>';
			};

			// childView
			this.childView = Mn.ItemView.extend({
				tagName 	: 'div',
				className 	: 'row1',
				modelEvents : {
					'change': 'render'
				},
				template	: function(sModel){
					return _.template(tpl)(sModel);
				}
			});

			// template
			this.template = function(sModel){

				var tplStr = '\
			        <div class="panel panel-default">\
			            <div class="panel-heading">\
			                <h3 class="panel-title"><%= title %></h3>\
			            </div>\
			            <div class="panel-top"></div>\
			            <div class="panel-body">\
			            	<div class="grid-body">\
			            		<div class="thead-outer"><div class="thead">'+tplHeader+'</div></div>\
			            		<div class="tbody"></div>\
			            	</div>\
		            		<div class="paging" style="overflow:hidden;"></div>\
			            </div>\
			            <div class="panel-bottom"></div>\
			        </div>';

				return _.template(tplStr)(sModel);
			};

		},

		templateHelpers: function(){
			return {title: this.title}
		},

		waiting: true,

		getEmptyView: function(){
			var msg = 'no data found';
			if (this.waiting) { msg = 'Loading...'; };
			
			return Mn.LayoutView.extend({
				template: _.template(msg)
			});
		},

		onShow: function(){
			var prevTop = 0;
			var self = this;
			$(this.ui.gridBody).scroll( function(evt) {
			    var currentTop = $(this).scrollLeft();
			    if(prevTop !== currentTop) {
			        prevTop = currentTop;
			        var s = currentTop;
			        self.ui.thead.css('left', -s+'px');
			        //self.ui.thead.scrollLeft(s);
			        console.log("I scrolled vertically.");
			    }
			});
			var pagination = new Pagination({collection: self.collection});
			this.ui.paging.html(pagination.el);
		}
		
	});

});