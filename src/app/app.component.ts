import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav)  
  sidenav!: MatSidenav;
  titre!: string;
  constructor(private observer: BreakpointObserver){

  }
  ngOnInit(): void {
    this.titre="Contact"
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode ='side';
        this.sidenav.open();
      }
    })
  }
  changeTitle(titre:string){
    this.titre = titre;
  }
}
