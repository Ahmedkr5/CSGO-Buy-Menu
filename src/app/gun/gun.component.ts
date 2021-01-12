import { Component, OnInit,Input } from '@angular/core';
import {Gun} from '../Model/Gun';
import {GunService} from '../Shared/gun.service';

@Component({
  selector: 'app-gun',
  templateUrl: './gun.component.html',
  styleUrls: ['./gun.component.css']
})
export class GunComponent implements OnInit {
  @Input() gun: Gun;
  constructor(private gs: GunService) { }

  ngOnInit(): void {
  }
 /* deleteGun(id: number){
    this.gs.deleteGun(id).subscribe();
  }*/
  deleteGun(id:number){
    console.log('delete');
    this.gs.deleteGun(id).subscribe();
  }

}
