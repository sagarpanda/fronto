import Store from 'demo/libs/Store';
import UserModel from 'demo/app/models/UserModel';
import ApiUrl from 'demo/app/constants/url';

const UserStore = Store.extend({
  model: UserModel,

  initialize: function() {
    _.extend(this, { queryParams: {} });
  },

  url: function() {
    return ApiUrl.user;
  },

  parse: function(response) {
    this.total = response.total ? response.total : this.total;
    this.calcTotalPage();
    return response.items;
  }
});

export default UserStore;
