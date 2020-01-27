import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-trajet',
  templateUrl: './new-trajet.component.html',
  styleUrls: ['./new-trajet.component.css']
})
export class NewTrajetComponent implements OnInit {
  
  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
    console.log('start ngOnInit()');
    console.log('end ngOnInit()');
  }

  onSaveTrajet(data : any){
    console.log(data);
    this.catService.addTrajetRessource(this.catService.host+"/trajets",data).subscribe(res=>{
      this.router.navigateByUrl("/trajets")
    },err=>{
      console.log(err);
    });

  }

}
