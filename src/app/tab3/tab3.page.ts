import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  buttonClick: any = null;

  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  public selectMode($event) {
    this.buttonClick = "Button CLicked";
    console.log("Hello World", $event);
  }

}
