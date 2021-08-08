import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhrasesListComponent } from "./phrases-list/phrases-list.component";
import { TranslatorComponent } from "./translator/translator.component";

const appRoutes: Routes = [    
    { path: 'translator', component: TranslatorComponent},
    { path: 'phrases-list', component: PhrasesListComponent},
    { path: '**', redirectTo: '/translator'}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}