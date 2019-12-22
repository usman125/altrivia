import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.page.html',
  styleUrls: ['./finished.page.scss'],
})
export class FinishedPage implements OnInit {

  game: any;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    this.game = this.navParams.get('game');
    console.log("PARAMS FROM FINISHED:--", this.game);
  }

  async dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
