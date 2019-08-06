import { Component, OnInit } from '@angular/core';

import { Video } from 'src/app/classes/video';
import { GridService } from 'src/app/services/grid.service';
import { gridOptions, youtubeUrl } from '../../constants/grid-options';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  /** Data array for grid */
  rowData: Array<Video> = [];
  /** Settings for grid */
  gridOptions = {
    ...gridOptions,
    columnDefs: [
      { headerName: '', field: 'thumbnails', cellRenderer: this.imageRender, width: 150},
      { headerName: 'Published on', field: 'publishedAt', cellRenderer: this.timeRender, cellClass: 'grid-cell' },
      { headerName: 'Video Title', field: 'title', resizable: true, cellRenderer: this.urlRender, width: 300, cellClass: 'grid-cell'},
      { headerName: 'Description', field: 'description', resizable: true, width: 350, cellClass: 'grid-cell'}
    ],
    getRowHeight: params => {
      return params.data.thumbnails.height;
    },
    getContextMenuItems: this.getContextMenuItems,
  };

  constructor(private gridService: GridService) {
  }

  ngOnInit() {
    this.init();
  }

  /**
   * Initializing rows data
   */
  init() {
    this.gridService.getData().subscribe(result => {
      if (result && result.items) {
        this.rowData = result.items.map(item => new Video(
          item.snippet.thumbnails.default,
          item.snippet.publishedAt,
          item.snippet.title,
          item.id.videoId,
          item.snippet.description,
          ));
      }
      console.log(this.rowData)
    });
  }

  /**
   * Rendering image cell
   * @param params
   */
  private imageRender(params): string {
     return `<img src='${params.value.url}' width='${params.value.width}' height='${params.value.height}'>`;
  }

  /**
   * Rendering url cell
   * @param params
   */
  private urlRender(params): string {
    return `<a href='${youtubeUrl + params.value.videoId}' target="_blank">${params.value.title}</a>`;
  }

  /**
   * Rendering time cell
   * @param params
   */
  private timeRender(params): string {
    return new Date(params.value).toUTCString();
  }

  /**
   * Changing context menu for url column
   * @param params
   */
  private getContextMenuItems(params) {
    if (params.value && params.value.videoId) {
    return [...params.defaultItems, {
            name: 'Open in new tab',
            action: () => { open(youtubeUrl + params.value.videoId, '_blank'); }
    }];
    } else {
      return params.defaultItems;
    }
  }
}
