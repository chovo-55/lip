import {R2022Component} from './components/dokumentySubpages/r2022/r2022.component';
import {R2023Component} from './components/dokumentySubpages/r2023/r2023.component';
import {R2024Component} from './components/dokumentySubpages/r2024/r2024.component';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeScreenComponent} from './components/welcome-screen/welcome-screen.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  HalavnyKonktrolorComponent
} from './components/dokumentySubpages/halavny-konktrolor/halavny-konktrolor.component';
import {SmerniceComponent} from './components/dokumentySubpages/smernice/smernice.component';
import {ZmluvyComponent} from './components/dokumentySubpages/zmluvy/zmluvy.component';
import {
  MajetkovePriznaniaComponent
} from './components/dokumentySubpages/majetkove-priznania/majetkove-priznania.component';
import {
  PozvankyZastupitelstvoComponent
} from './components/dokumentySubpages/pozvanky-zastupitelstvo/pozvanky-zastupitelstvo.component';
import {SpravaAuditoraComponent} from './components/dokumentySubpages/sprava-auditora/sprava-auditora.component';
import {TlacivaComponent} from './components/dokumentySubpages/tlaciva/tlaciva.component';
import {UzPlanComponent} from './components/dokumentySubpages/uz-plan/uz-plan.component';
import {KomunitPlanComponent} from './components/dokumentySubpages/komunit-plan/komunit-plan.component';
import {RozpocetComponent} from './components/dokumentySubpages/rozpocet/rozpocet.component';
import {PoslanciComponent} from './components/dokumentySubpages/poslanci/poslanci.component';
import {KomisieComponent} from './components/dokumentySubpages/komisie/komisie.component';
import {ZapisniceComponent} from './components/dokumentySubpages/zapisnice/zapisnice.component';
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    NavbarComponent,
    HalavnyKonktrolorComponent,
    SmerniceComponent,
    ZmluvyComponent,
    MajetkovePriznaniaComponent,
    PozvankyZastupitelstvoComponent,
    SpravaAuditoraComponent,
    TlacivaComponent,
    UzPlanComponent,
    KomunitPlanComponent,
    RozpocetComponent,
    PoslanciComponent,
    KomisieComponent,
    ZapisniceComponent,
    R2024Component,
    R2023Component,
    R2022Component,
  ],

  imports: [
    NgxExtendedPdfViewerModule, // add this line
    BrowserModule,
    AppRoutingModule, // This already contains your routes
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
