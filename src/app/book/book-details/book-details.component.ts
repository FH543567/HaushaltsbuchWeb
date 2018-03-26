import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
/**
 * @author jb260400
 * TODO: Serverkommunikation
 */
export class BookDetailsComponent implements OnInit {

  years = [
    {value: 'year_1', viewValue: '2016'},
    {value: 'year_2', viewValue: '2017'},
    {value: 'year_3', viewValue: '2018'}
  ]; // TODO: Jahrliste aus Datenbank ziehen

  months = [
    {value: 'month_1', viewValue: 'Jan \n +1500€'},
    {value: 'month_2', viewValue: 'Feb \n -500€'},
    {value: 'month_3', viewValue: 'Mai \n +268€'}
  ]; // TODO: Jahrliste aus Datenbank ziehen
  constructor() { }

  ngOnInit() {
  }

}
