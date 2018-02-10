import ActivityTpl from 'demo/app/templates/dashboard/activity.tpl';

const Activity = Mn.View.extend({
  template: _.template(ActivityTpl)
});

export default Activity;
