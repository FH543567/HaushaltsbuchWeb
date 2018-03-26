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
import {EntryPageComponent} from './entry/entry-page/entry-page.component';
import {EntryDetailsComponent} from './entry/entry-details/entry-details.component';
import {logging} from 'selenium-webdriver';
import {EntryNewComponent} from './entry/entry-new/entry-new.component';

export const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: EntryPageComponent },
    { path: 'entry', component: EntryPageComponent},
    { path: 'entry/details', component: EntryDetailsComponent},
    { path: 'entry/new', component: EntryNewComponent},
    { path: 'CategoryConfig', component: CategoryConfigComponent},
    { path: 'CategoryDetails', component: CategoryDetailsComponent},
    { path: 'CategoryNew', component: CategoryNewComponent},
    // nachfolgende von Jan-Michael
    { path: 'overview', component: OverviewComponent},
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
