define([
	'libs/behaviors/AddMnItems', 
	'libs/views/Panel', 
	'libs/views/HtmlView',
	'app/views/dashboard/UploadData',
	'app/views/dashboard/Activity',
	'app/models/FormModel'
	], function(AddMnItems, Panel, HtmlView, UploadData, Activity, FormModel){

	return Mn.LayoutView.extend({

		className: 'dashboard',

 		behaviors: {
 			appendView: {
 				behaviorClass: AddMnItems,
 				uiSelector: 'el'
 			}
 		},

 		items: [
 			{
 				xclass: HtmlView,
 				tagName: 'h1',
 				html: 'Dashboard',
 				className: 'page-header page-header-crm'
 			}, {
 				xclass: Panel,
 				title: 'Recent Activity',
 				className: 'col-sm-6 col-md-6',
 				childView: Activity
 			}, {
 				xclass: Panel,
 				title: 'Upload Data',
 				className: 'col-sm-6 col-md-6',
 				childView: UploadData
 			}, {
 				xclass: Panel,
 				title: 'Recent Activity',
 				className: 'col-sm-6 col-md-6',
 				childView: Activity
 			}
 		]

	});

});