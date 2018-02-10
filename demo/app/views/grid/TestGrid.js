import GridPanel from 'demo/libs/views/GridPanel';
import UserStore from 'demo/app/stores/UserStore';

const TestGrid = GridPanel.extend({
  initialize: function() {
    this.collection.fetchPage(1, { limit: 10 });
  },

  title: 'Test Grid - Sticky Header',

  columns: [
    { header: 'ID', dataIndex: 'id', width: '5%' },
    { header: 'Name', dataIndex: 'name' },
    { header: 'Email', dataIndex: 'email' },
    { header: 'Phone', dataIndex: 'phone', width: '45%' }
  ],

  collection: new UserStore(),

  onDestroy: function() {
    this.collection.reset([]);
  }
});

export default TestGrid;
