import { GridHeaderComponent } from '../components/grid-header/grid-header.component';
import { GridToolbarComponent } from '../components/grid-toolbar/grid-toolbar.component';

export const youtubeUrl = 'https://www.youtube.com/watch?v=';

export const gridOptions = {
    defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
    },
    sideBar: {
        toolPanels: [
          {
            id: 'customStats',
            labelDefault: 'Toolbar',
            labelKey: 'customStats',
            iconKey: 'custom-stats',
            toolPanel: 'customStatsToolPanel'
          }
        ],
    },
    defaultToolPanel: 'customStats',
    frameworkComponents: {
      customStatsToolPanel: GridToolbarComponent,
      agColumnHeader: GridHeaderComponent
    },
    icons: { 'custom-stats': '<span class="ag-icon"></span>' },
    rowMultiSelectWithClick: true,
    rowSelection: 'multiple',
    rowClass: 'grid-row'
};
