import Grid from './Grid';
import Pagination from './Pagination';
import Store from './../Store';

const GridPanel = Mn.View.extend({
  className: 'grid-panel',

  viewOptions: ['title', 'columns'],

  columns: [],

  title: 'Grid',

  constructor: function(options) {
    this.mergeOptions(options, this.viewOptions);
    Mn.View.prototype.constructor.apply(this, arguments);
  },

  regions: {
    grid: '.grid',
    paging: '.paging'
  },

  template: function(sModel) {
    const tpl =
      '\
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

    return _.template(tpl)(sModel);
  },

  templateContext: function() {
    return { title: this.title };
  },

  collection: new Store(),

  onRender: function() {
    this.collectionView = new Grid({
      collection: this.collection,
      columns: this.columns
    });
    this.pagination = new Pagination({ collection: this.collection });
    this.showChildView('grid', this.collectionView);
    this.showChildView('paging', this.pagination);
  }
});

export default GridPanel;
