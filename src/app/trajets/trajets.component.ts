import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {

  public trajets: any;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeywordDepart: string = "";
  public currentKeywordArrive: string = "";
  public currentKeywordDate: string = "";

  constructor(private catService: CatalogueService, private router: Router) { }

  ngOnInit() {
    console.log('start ngOnInit()');
    console.log('end ngOnInit()');
  }

  onGetTrajets() {
    console.log('start onGetTrajets()');
    this.catService.getTrajets(this.currentPage, this.size).subscribe(data => {
      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.trajets = data;
    }, err => {
      console.log(err);
    });
    console.log('end onGetTrajets()');
  }


  onPageProduct(i) {
    this.currentPage = i;
    this.chercherTrajetDepart();
    this.chercherTrajetDate();
    this.chercherTrajetArrive();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeywordDepart = form.keywordDepart;
    this.currentKeywordArrive = form.keywordArrive;
    this.currentKeywordDate = form.keywordDate;
    this.chercherTrajetDepart();
    this.chercherTrajetDate();
    this.chercherTrajetArrive();
  }
  chercherTrajetDepart() {
    console.log('start onChercher()');
    console.log(this.currentKeywordDepart);
      this.catService.getTrajetsByKeywordDepart(this.currentKeywordDepart, this.currentPage, this.size).subscribe(data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.trajets = data;
      }, err => {
        console.log(err);
      });
    
    console.log('end onChercher()');

  }
  chercherTrajetArrive() {
    console.log('start onChercher()');
    console.log(this.currentKeywordDepart);
      this.catService.getTrajetsByKeywordArrive(this.currentKeywordArrive, this.currentPage, this.size).subscribe(data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.trajets = data;
      }, err => {
        console.log(err);
      });
    
    console.log('end onChercher()');

  }
  chercherTrajetDate() {
    console.log('start onChercher()');
    console.log(this.currentKeywordDepart);
      this.catService.getTrajetsByKeywordDate(this.currentKeywordDate, this.currentPage, this.size).subscribe(data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.trajets = data;
      }, err => {
        console.log(err);
      });
    
    console.log('end onChercher()');

  }

  onDetailTrajet() {

  }
  onBookTrajet() {

  }
  onDeleteTrajet(t) {
    console.log("start onDeleteTrajet")
    let conf = confirm(" suuuure ???!!");
    if (conf) {
      this.catService.deleteTrajetRessource(t._links.self.href).subscribe(data => {
        this.chercherTrajetDepart();
      }, err => {
        console.log(err);
      });
    }
    console.log("end onDeleteTrajet")
  }
  onEditTrajet(t) {
    let url = t._links.self.href;
    this.router.navigateByUrl("/edit-trajet/" + btoa(url));
  }

}
