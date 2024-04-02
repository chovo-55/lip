import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  HalavnyKonktrolorComponent
} from './components/dokumentySubpages/halavny-konktrolor/halavny-konktrolor.component';
import {ZmluvyComponent} from "./components/dokumentySubpages/zmluvy/zmluvy.component";
import {SmerniceComponent} from "./components/dokumentySubpages/smernice/smernice.component";
import {
  MajetkovePriznaniaComponent
} from "./components/dokumentySubpages/majetkove-priznania/majetkove-priznania.component";
import {
  PozvankyZastupitelstvoComponent
} from "./components/dokumentySubpages/pozvanky-zastupitelstvo/pozvanky-zastupitelstvo.component";
import {SpravaAuditoraComponent} from "./components/dokumentySubpages/sprava-auditora/sprava-auditora.component";
import {TlacivaComponent} from "./components/dokumentySubpages/tlaciva/tlaciva.component";
import {UzPlanComponent} from "./components/dokumentySubpages/uz-plan/uz-plan.component";
import {KomunitPlanComponent} from "./components/dokumentySubpages/komunit-plan/komunit-plan.component";
import {RozpocetComponent} from "./components/dokumentySubpages/rozpocet/rozpocet.component";
import {PoslanciComponent} from "./components/dokumentySubpages/poslanci/poslanci.component";
import {KomisieComponent} from "./components/dokumentySubpages/komisie/komisie.component";
import {ZapisniceComponent} from "./components/dokumentySubpages/zapisnice/zapisnice.component";
import {R2022Component} from "./components/dokumentySubpages/r2022/r2022.component";
import {R2023Component} from "./components/dokumentySubpages/r2023/r2023.component";
import {R2024Component} from "./components/dokumentySubpages/r2024/r2024.component";

const routes: Routes = [
  {path: 'Hlavný_Kontrolor', component: HalavnyKonktrolorComponent},
  {path: 'VZN_obce_a_smernice', component: SmerniceComponent},
  {path: 'Zmluvy', component: ZmluvyComponent},
  {path: 'Majetkové_priznania_verejných_funkcionárov', component: MajetkovePriznaniaComponent},
  {path: 'Pozvánky_na_obecné_zastupiteľstvo', component: PozvankyZastupitelstvoComponent},
  {path: 'Správa_auditora', component: SpravaAuditoraComponent},
  {path: 'Tlačivá', component: TlacivaComponent},
  {path: 'Územny_plán', component: UzPlanComponent},
  {path: 'Komunitný_plán_obce', component: KomunitPlanComponent},
  {path: 'Rozpočet_a_záverečný_účet_obce', component: RozpocetComponent},
  {path: 'Poslanci_obecného_zastupiteľstva', component: PoslanciComponent},
  {path: 'Komisie', component: KomisieComponent},
  {path: 'Zápisnice', component: ZapisniceComponent},
  {path: '2022', component: R2022Component},
  {path: '2023', component: R2023Component},
  {path: '2024', component: R2024Component},
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
