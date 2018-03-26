import { Component, OnInit } from '@angular/core';


/**
 * @Author: Joshua Rammacher
 */
@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss']
})
export class CategoryNewComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    // SelectValueType();  -------------DEAKTIVERT DAMIT KOMPILIERT WERDEN KANN!!!! JM
  }

}
export class SelectValueType {
  selectedType = 'ausgaben';
}
