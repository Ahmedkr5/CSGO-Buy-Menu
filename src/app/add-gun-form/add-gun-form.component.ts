import { Component, OnInit } from '@angular/core';
import {Gun} from '../Model/Gun';
import {GunService} from '../Shared/gun.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-gun-form',
  templateUrl: './add-gun-form.component.html',
  styleUrls: ['./add-gun-form.component.css']
})
export class AddGunFormComponent implements OnInit {
  gun: Gun = new Gun();
  constructor(private gs: GunService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.gs.addGun(this.gun).subscribe((next=>this.router.navigateByUrl('/Home')));
  }
}
