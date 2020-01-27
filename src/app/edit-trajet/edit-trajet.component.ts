import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { Trajet } from '../model/trajet.model';

@Component({
  selector: 'app-edit-trajet',
  templateUrl: './edit-trajet.component.html',
  styleUrls: ['./edit-trajet.component.css']
})
export class EditTrajetComponent implements OnInit {
  private url: string;
  private currentTrajet: Trajet;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catService: CatalogueService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catService.getRessources(this.url).subscribe(data => {
      this.currentTrajet = data;
    }, err => {
      console.log(err);
    })

  }


  onUpdateTrajet(value: any) {
    this.catService.updateTrajetRessource(this.url, value).subscribe(data => {
      alert("Mise à jour effectuée avec succès");
      this.router.navigateByUrl("/trajets");
    }, err => {
      console.log(err);
    })
  }



}
