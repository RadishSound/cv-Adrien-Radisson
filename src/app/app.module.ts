import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ActiviteComponent } from './activite/activite.component';
import { CompetenceComponent } from './competence/competence.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { CardComponent } from './card/card.component';
import  {   NgxStarRatingModule }  from  'ngx-star-rating';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ExperienceComponent,
    FormationComponent,
    ActiviteComponent,
    CompetenceComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,    
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    PdfViewerModule,
    ClipboardModule,
    NgxStarRatingModule,
    MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
