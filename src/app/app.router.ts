import { BuchungDetailsComponent } from './buchung-details/buchung-details.component';
import { BuchungComponent } from './buchung/buchung.component';
import { BuchungPageComponent } from './buchung-page/buchung-page.component';
import { AppComponent } from './app.component';
export const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: BuchungPageComponent },
    { path: 'Buchungen', component: BuchungPageComponent},
    { path: 'Buchung/Details', component: BuchungDetailsComponent},
    { path: 'Buchung/Erstellen', component: BuchungComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '/Home' }
];
