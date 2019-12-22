import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.page.html',
  styleUrls: ['./select-mode.page.scss'],
})
export class SelectModePage implements OnInit {

  constructor(
    public _router: Router,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 900,
      message: '<img src="../../../assets/images/loading.gif" />',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  goToSpinWheel(){
    this._router.navigate(['/wheel']);
  }

  goBack() {
    this.presentLoadingWithOptions();
    this._router.navigate(['/tabs/tab3']);
  }

}
