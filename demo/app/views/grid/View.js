import UserGrid from './UserGrid';
import CustomRender from './CustomRender';
import TestGrid from './TestGrid';
import TabTpl from 'demo/app/templates/grid.tpl';

const View = Mn.View.extend({
  className: 'grid',

  regions: {
    grid1: '.grid1',
    grid2: '.grid2',
    grid3: '.grid3'
  },

  template: _.template(TabTpl),

  onRender: function() {
    const userGrid = new UserGrid();
    this.showChildView('grid1', userGrid);

    const customRender = new CustomRender();
    this.showChildView('grid2', customRender);

    const testGrid = new TestGrid();
    this.showChildView('grid3', testGrid);
  }
});

export default View;
