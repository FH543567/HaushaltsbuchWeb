import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * @author jb260400
 *
 * TODO: Icons für Headerleiste
 * TODO: Monat und Buch Groeßen kontrollieren
 */
export class HeaderComponent implements OnInit {
  months = [
    {value: '0', viewValue: 'Jan'},
    {value: '1', viewValue: 'Feb'},
    {value: '2', viewValue: 'Mrz'},
    {value: '3', viewValue: 'Apr'},
    {value: '4', viewValue: 'Mai'},
    {value: '5', viewValue: 'Jun'},
    {value: '6', viewValue: 'Jul'},
    {value: '7', viewValue: 'Aug'},
    {value: '8', viewValue: 'Sep'},
    {value: '9', viewValue: 'Okt'},
    {value: '10', viewValue: 'Nov'},
    {value: '11', viewValue: 'Dez'}
  ];
  books = [
    {value: 'bookID_1', viewValue: 'Schachverien'},
    {value: 'bookID_2', viewValue: 'Zuhause'}
  ]; // TODO: Buchliste aus Datenbank ziehen

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Prueft ob Benutzer eingeloggt ist
   * @returns {boolean}
   */
  get isLoggedIn() {
    if (localStorage.getItem('login')) {
      return true;
    }
    }

  /**
   *
    */
  logout() {
    localStorage.removeItem('login');
  }

}
