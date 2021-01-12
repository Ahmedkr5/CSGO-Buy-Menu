import { Component, OnInit, OnChanges} from '@angular/core';
import {GunService} from '../Shared/gun.service';
import {Gun} from '../Model/Gun';

@Component({
  selector: 'app-guns',
  templateUrl: './guns.component.html',
  styleUrls: ['./guns.component.css']
})
export class GunsComponent implements OnInit, OnChanges {
  inputval: number;
  guns: Gun [] ;

  constructor(private gs: GunService) { }

  ngOnInit(): void {
    console.log ("oninit");
    this.gs.getGuns().subscribe((res) => this.guns = res);
  }
  ngOnChanges(){
    console.log ("onchanges");
  }
  addGun(g:Gun){
    this.guns.push(g);
  }
  getFilteredGuns(): void {
    let filteredguns : Gun[]=[];
    for (let g of this.guns){
      if (g.prix <= this.inputval){
        filteredguns.push(g);
      }
    }
    this.guns=filteredguns;

  }
}
