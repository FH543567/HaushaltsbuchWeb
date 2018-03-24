import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BuchungDetailsComponent } from './buchung-details/buchung-details.component';
import { BuchungComponent } from './buchung/buchung.component';
import { BuchungPageComponent } from './buchung-page/buchung-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule,
  MatIconModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule} from '@angular/material';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { CategoryNewComponent } from './category-new/category-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BuchungDetailsComponent,
    BuchungComponent,
    BuchungPageComponent,
    CategoryDetailsComponent,
    CategoryConfigComponent,
    CategoryNewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
