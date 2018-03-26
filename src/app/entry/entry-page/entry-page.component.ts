import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent implements OnInit {
  displayedColumns = ['id', 'Name', 'Datum', 'Betrag', 'X'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
