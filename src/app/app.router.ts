import { CategoryConfigComponent} from './category/category-config/category-config.component';
import { CategoryDetailsComponent} from './category/category-details/category-details.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
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
    { path: 'category/config', component: CategoryConfigComponent},
    { path: 'category/details', component: CategoryDetailsComponent},
    { path: 'category/new', component: CategoryNewComponent},
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
    { path: '**', redirectTo: '/home' }
];
