const Pagination = Mn.View.extend({
  tagName: 'ul',

  className: 'pagination grid-pagination',

  events: {
    'click li': 'onClickHandler'
  },

  ui: {
    listUi: 'li'
  },

  collectionEvents: {
    sync: 'render'
  },

  initialize: function() {
    this.collection = this.options.collection;
  },

  onClickHandler: function(e) {
    e.preventDefault();
    const target = e.currentTarget || e.srcElement;
    let val = target.getAttribute('data-val');

    if (val === 'prev') {
      this.collection.prevPage();
    } else if (val === 'next') {
      this.collection.nextPage();
    } else {
      val = parseInt(val, 10);
      this.collection.fetchPage(val);
    }
  },

  template: function(store) {
    const tpl =
      '<% if(pages.length > 1){%><li data-val="prev"><a href="#"><span aria-hidden="true">«</span></a></li>\
      <% _.each(pages, function(count){ %>\
      <li <% if(count === currPage){ %> class="active" <%} %> data-val="<%= count %>"><a href="#"><%= count %></a></li>\
      <% }); %>\
      <li data-val="next"><a href="#"><span aria-hidden="true">»</span></a></li><% } %>';
    return _.template(tpl)(store);
  },

  templateContext: function() {
    const pages = this.collection.totalPages;
    if (pages > 0) {
      return {
        pages: _.range(1, pages + 1),
        currPage: this.collection.currPage
      };
    }
    return { pages: [] };
  }
});

export default Pagination;
