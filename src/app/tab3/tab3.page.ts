import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FinishedPage } from '../finished/finished/finished.page';

declare var WHEELOFFORTUNE: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  buttonClick: any = null;
  params = {
    value: 3
  }
  dataFinished: any = [
    {
      opponent: {
        avatar: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        name: 'Ali Husnain',
        score: 1,
      },
      me: {
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Usman Ali Khan',
        score: 3,
      },
      group: 3
    },
    {
      opponent: {
        avatar: 'https://i.imgur.com/K3KJ3w4h.jpg',
        name: 'Bilal Asif',
        score: 1,
      },
      me: {
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Usman Ali Khan',
        score: 0,
      },
      group: 3
    }
  ]

  constructor(
    public _router: Router,
    public loadingController: LoadingController,
    public modalController: ModalController,
  ) { }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 900,
      message: '<img src="../../../assets/images/loading.gif" />',
      showBackdrop: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // spinWheel() {
  //   WHEELOFFORTUNE.init('.wheel-wrapper', [6, 7, 1, 2, 3, 4, 5], 112, {
  //     onSpin: function() {
  //       // $scope.started = true;
  //       // AudioService.play('sound/spin.wav');
  //       // AudioService.play('sound/click.wav');
  //     },
  //     onSelect: function(selected) {
  //       // CacheService.addGameRotation($scope.game.id, selected);
  //       // $scope.goToCategory(selected);
  //       // AudioService.stop('sound/spin.wav');
  //     }
  //   });
  // }

  async presentModal(game) {
    const modal = await this.modalController.create({
      component: FinishedPage,
      componentProps:{
        "game": game
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewWillLeave() {
    this.buttonClick = null;
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  checkResult(game) {
    this.presentModal(game);
  }

  public selectMode($event) {
    this._router.navigate(['/select-mode']);
  }

}
