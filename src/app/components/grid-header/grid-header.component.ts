import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  private params: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Getting the grid params
   * @param params
   */
  agInit(params): void {
    this.params = params;
  }
}
