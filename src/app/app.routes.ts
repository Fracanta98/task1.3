import { Routes } from '@angular/router';
import { Elenco } from './components/elenco/elenco';


export const routes: Routes = [
    {path:'', redirectTo:'elenco', pathMatch:'full'},
    {path:'elenco', component:Elenco},
    
];
