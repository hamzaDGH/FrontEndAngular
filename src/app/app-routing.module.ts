import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrajetsComponent } from './trajets/trajets.component';
import { NewTrajetComponent } from './new-trajet/new-trajet.component';
import { EditTrajetComponent } from './edit-trajet/edit-trajet.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {
    path :"trajets", component : TrajetsComponent
  },
  {
    path:"new-trajet", component : NewTrajetComponent
  },
  {
    path:"edit-trajet/:id", component :EditTrajetComponent
  },
  {
    path:"inscription", component:InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
