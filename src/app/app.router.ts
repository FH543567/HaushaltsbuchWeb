import { BuchungDetailsComponent } from './buchung-details/buchung-details.component';
import { BuchungComponent } from './buchung/buchung.component';
import { BuchungPageComponent } from './buchung-page/buchung-page.component';
import { CategoryConfigComponent} from './category-config/category-config.component';
import { CategoryDetailsComponent} from './category-details/category-details.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import { AppComponent } from './app.component';
export const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: BuchungPageComponent },
    { path: 'Buchungen', component: BuchungPageComponent},
    { path: 'Buchung/Details', component: BuchungDetailsComponent},
    { path: 'Buchung/Erstellen', component: BuchungComponent},
    { path: 'CategoryConfig', component: CategoryConfigComponent},
    { path: 'CategoryDetails', component: CategoryDetailsComponent},
    { path: 'CategoryNew', component: CategoryNewComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '/Home' }
];
