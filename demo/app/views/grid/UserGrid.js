import GridPanel from 'demo/libs/views/GridPanel';
import UserStore from 'demo/app/stores/UserStore';

const UserGrid = GridPanel.extend({

  initialize: function(){
    this.collection.fetchPage(1);
  },

  columns: [
    { header: 'ID', dataIndex: 'id' },
    { header: 'Name', dataIndex: 'name' },
    { header: 'Email', dataIndex: 'email' },
    { header: 'Phone', dataIndex: 'phone' }
  ],

  collection: new UserStore(),

  onDestroy: function(){
    this.collection.reset([]);
  }

});

export default UserGrid;
