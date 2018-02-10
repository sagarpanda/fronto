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

const renderer = function(name) {
  return `<%= ${name} %>`;
};

const Grid = Mn.CollectionView.extend({
  viewOptions: ['columns'],

  columns: [],

  tagName: 'table',

  childViewContainer: 'tbody',

  className: 'table table-condensed table-hover',

  constructor: function(options) {
    this.mergeOptions(options, this.viewOptions);
    this.createChildView();
    Mn.CollectionView.prototype.constructor.apply(this, arguments);
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.onSyncSuccess);
    this.listenTo(this.collection, 'request', this.onRequestStart);
  },

  onSyncSuccess: function() {
    //this.destroyEmptyView();
    this.waiting = false;
    //this.checkEmpty();
  },

  onRequestStart: function() {
    this.waiting = true;
    //this.destroyEmptyView();
    //this.checkEmpty();
  },

  createChildView: function() {
    let tpl = '',
      tplHeader = '',
      attr = '',
      headerAttr = '';
    if (this.columns.length === 0) {
      return false;
    }

    for (let i = 0; i < this.columns.length; i++) {
      attr = this.columns[i].style
        ? ` style="${this.columns[i].style}"`
        : '';
      attr += this.columns[i].cls ? ` class="${this.columns[i].cls}"` : '';
      headerAttr = this.columns[i].headerStyle
        ? ` style="${this.columns[i].headerStyle}"`
        : '';
      headerAttr += this.columns[i].headerCls
        ? ` class="${this.columns[i].headerCls}"`
        : '';

      if (this.columns[i].renderer) {
        tpl += `<td ${attr}>${this.columns[i].renderer.call(this)}</td>`;
      } else {
        tpl += `<td ${attr}>${renderer(this.columns[i].dataIndex)}</td>`;
      }
      tplHeader += `<th ${headerAttr}>${this.columns[i].header}</th>`;
    }

    // childView
    this.childView = Mn.View.extend({
      tagName: 'tr',
      modelEvents: {
        change: 'render'
      },
      template: function(sModel) {
        return _.template(tpl)(sModel);
      }
    });

    // template
    this.template = function() {
      tplHeader = `<thead><tr>${tplHeader}</tr></thead><tbody></tbody>`;
      return _.template(tplHeader)();
    };
  },

  waiting: true,

  getEmptyView: function() {
    let msg = 'no data found';
    if (this.waiting) {
      msg = 'Loading...';
    }

    return Mn.View.extend({
      template: _.template(msg)
    });
  }
});

export default Grid;
