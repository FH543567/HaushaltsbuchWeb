import { BuchungDetailsComponent } from './buchung-details/buchung-details.component';
import { BuchungComponent } from './buchung/buchung.component';
import { BuchungPageComponent } from './buchung-page/buchung-page.component';
import { CategoryConfigComponent} from './category-config/category-config.component';
import { CategoryDetailsComponent} from './category-details/category-details.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { OverviewComponent } from './overview/overview.component';
import { BalanceComponent } from './balance/balance.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { AppComponent } from './app.component';
import {BookDetailsComponent} from './book/book-details/book-details.component';
import {BookNewComponent} from './book/book-new/book-new.component';
import {BookConfigComponent} from './book/book-config/book-config.component';

export const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: BuchungPageComponent },
    { path: 'Buchungen', component: BuchungPageComponent},
    { path: 'Buchung/Details', component: BuchungDetailsComponent},
    { path: 'Buchung/Erstellen', component: BuchungComponent},
    { path: 'CategoryConfig', component: CategoryConfigComponent},
    { path: 'CategoryDetails', component: CategoryDetailsComponent},
    { path: 'CategoryNew', component: CategoryNewComponent},
    // nachfolgende von Jan-Michael
    { path: 'overview', component: OverviewComponent},
    { path: 'buchung-details', component: BuchungComponent},
    { path: 'balance', component: BalanceComponent},
    { path: 'reports', component: ReportsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'book/details', component: BookDetailsComponent},
    { path: 'book/new', component: BookNewComponent},
    { path: 'book/config', component: BookConfigComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '/Home' }
];
