import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
  MatIconModule, MatMenuModule, MatGridListModule, MatInputModule, MatSelectModule ,
  MatOptionModule, MatTableModule, MatFormFieldModule, MatSidenavModule, MatListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatStepperModule,
  MatChipsModule, MatButtonToggleModule, MatDialogModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookNewComponent } from './book/book-new/book-new.component';
import { BookConfigComponent } from './book/book-config/book-config.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { OverviewComponent } from './overview/overview.component';
import { BalanceComponent } from './balance/balance.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { EntryPageComponent } from './entry/entry-page/entry-page.component';
import { EntryNewComponent } from './entry/entry-new/entry-new.component';
import { EntryDetailsComponent } from './entry/entry-details/entry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryDetailsComponent,
    CategoryConfigComponent,
    CategoryNewComponent,
    BookDetailsComponent,
    BookNewComponent,
    BookConfigComponent,
    HeaderComponent,
    RegistrationComponent,
    OverviewComponent,
    BalanceComponent,
    ReportsComponent,
    LoginComponent,
    EntryPageComponent,
    EntryNewComponent,
    EntryDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule,
      MatMenuModule, MatGridListModule, MatInputModule, MatSelectModule, MatOptionModule,
      MatTableModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSidenavModule,
      MatListModule, MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatStepperModule,
      MatChipsModule, MatButtonToggleModule, MatDialogModule, MatSortModule, MatPaginatorModule]
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
