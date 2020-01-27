import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private catService:CatalogueService,private router:Router) { }

  ngOnInit() {
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  onSaveUser(data : any){
    console.log(data);
    this.catService.addUserRessource(this.catService.host+"/trajets",data).subscribe(res=>{
      this.router.navigateByUrl("/trajets")
    },err=>{
      console.log(err);
    });
  }
}
