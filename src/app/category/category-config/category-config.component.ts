import { Component, OnInit } from '@angular/core';

/**
 * @Author: Joshua Rammacher
 */
@Component({
  selector: 'app-category-config',
  templateUrl: './category-config.component.html',
  styleUrls: ['./category-config.component.scss']
})
export class CategoryConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class SelectValueType {
  selectedType = 'ausgaben';
}
