import { Component, OnInit } from '@angular/core';
import {Gun} from '../Model/Gun';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {GunService} from '../Shared/gun.service';
@Component({
  selector: 'app-reactive-form-gun',
  templateUrl: './reactive-form-gun.component.html',
  styleUrls: ['./reactive-form-gun.component.css']
})
export class ReactiveFormGunComponent implements OnInit {
  guntoModify: Gun = new Gun();
  productform: FormGroup;
  param: string ;
  constructor(private gs: GunService, private ac: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.productform = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      prix: new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]*')]),
      img: new FormControl('', Validators.required),
      clip: new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]*')]),
      country: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(100)])
    });
    this.ac.paramMap.subscribe(next => {
      this.param = next.get('id');
      this.gs.getGunById(Number(next.get('id'))).subscribe(p => this.guntoModify = p);
    });

  }

  get idP() {
    return this.productform.get('id');
  }

  get name() {
    return this.productform.get('name');
  }

  get prix() {
    return this.productform.get('prix');
  }

  get img() {
    return this.productform.get('img');
  }
  get clip() {
    return this.productform.get('clip');
  }
  get country() {
    return this.productform.get('country');
  }
  get description() {
    return this.productform.get('Description');
  }


  update() {
    this.gs.updateGun(this.guntoModify.id, this.guntoModify).subscribe(next => this.router.navigateByUrl('/home'));
  }
}
