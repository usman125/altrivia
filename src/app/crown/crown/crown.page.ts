import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crown',
  templateUrl: './crown.page.html',
  styleUrls: ['./crown.page.scss'],
})
export class CrownPage implements OnInit {

  imageId: any = null;

  constructor(
    public _location: Location,
    public _router: Router,
  ) { }

  ngOnInit() {
  }

  questionRequest(){
    this._router.navigate(['/']);
  }

  selectedImage(i) {
    console.log("SELCTED IMAGE SIS:--", i);
    this.imageId = i;
  }

}
