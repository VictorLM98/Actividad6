import { Routes } from '@angular/router';
import { PersonasListComponent } from './pages/personas-list/personas-list.component';
import { PersonaviewComponent } from './pages/personaview/personaview.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "home"},
    {path: "home", component: PersonasListComponent },
    {path: "user/:_id", component: PersonaviewComponent},
    {path: "newuser/user", component: FormComponent },
    {path: "updateuser/user/:_id", component: FormComponent}

];
