import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { CompetenceComponent } from './competence/competence.component';
import { ActiviteComponent } from './activite/activite.component';

const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'formation', component: FormationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'competence', component: CompetenceComponent },
    { path: 'activite', component: ActiviteComponent }




];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {
    
}