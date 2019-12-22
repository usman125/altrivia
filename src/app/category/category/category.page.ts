import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  Id: any = '';

  constructor(
    public _router: Router,
    public _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.Id = +params['categoryId'];
    });
  }

  questionRequest() {
    this._router.navigate(['/wheel']);
  }

}
