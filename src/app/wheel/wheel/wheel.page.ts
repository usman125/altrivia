import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var WHEELOFFORTUNE: any;

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.page.html',
  styleUrls: ['./wheel.page.scss'],
})
export class WheelPage implements OnInit {

  showOverlay: Boolean = false;

  constructor(public _router: Router) { }

  ngOnInit() {
    var self = this;
    WHEELOFFORTUNE.init('.wheel-wrapper', [6, 7, 1, 2, 3, 4, 5], Math.floor(Math.random()), {
      onSpin: function () {
        self.showOverlay = true;
        // console.log("ON SPIN FROM ANGULAR:--", self.showOverlay);
      },
      onSelect: function (selected) {
        // var _this = self.goToCategory.bind(this);
        self.showOverlay = false;
        // console.log("ON SELECT FROM ANGULAR:--", selected, self.selected, self.showOverlay);
        // self.goToCategory(selected);
        self._router.navigate(['/category', selected]);
        if (selected == "7"){
          this._router.navigate(['/crown']);
        }
      }
    });
  }
  
  goToCategory = (selected) => {
    console.log("ON SELECT FROM ANGULAR:--", selected, this.showOverlay);
  }

  resignGame(){
    console.log("RESIGN GAME");
  }

  goBack() {
    this._router.navigate(['/tabs/tab3']);
  }

}
