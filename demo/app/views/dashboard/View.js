import AddMnItems from 'demo/libs/behaviors/AddMnItems';
import Panel from 'demo/libs/views/Panel';
import HtmlView from 'demo/libs/views/HtmlView';
import UploadData from 'demo/app/views/dashboard/UploadData';
import Activity from 'demo/app/views/dashboard/Activity';

const View = Mn.View.extend({
  className: 'dashboard',

  template: false,

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
    },
    {
      xclass: Panel,
      title: 'Recent Activity',
      className: 'col-sm-6 col-md-6',
      childView: Activity
    },
    {
      xclass: Panel,
      title: 'Upload Data',
      className: 'col-sm-6 col-md-6',
      childView: UploadData
    }/*,
    {
      xclass: Panel,
      title: 'Recent Activity',
      className: 'col-sm-6 col-md-6',
      childView: Activity
    }*/
  ]
});

export default View;
