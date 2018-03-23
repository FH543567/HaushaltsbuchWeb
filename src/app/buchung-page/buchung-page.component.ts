import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-buchung-page',
  templateUrl: './buchung-page.component.html',
  styleUrls: ['./buchung-page.component.scss']
})
export class BuchungPageComponent implements OnInit {
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
