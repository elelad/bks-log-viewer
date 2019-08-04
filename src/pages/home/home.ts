import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoggingViewerFilterService } from '../viewer/logging-viewer-filter.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public level: any = '0';
  public maxMessagesToLogToFile: number = 0;
  public maxFilesToSave: number = 3;
  public messagesFromFile = [];
  public meassage: string = 'log something...';

  constructor(public navCtrl: NavController,
    private loggingViewerFilterService: LoggingViewerFilterService,
    private toastCtrl: ToastController,
    public platform: Platform,
  ) {

  }

  getFile(ev) {
    const files: any[] = ev.target.files;
    console.log(files);
    let prms = [];
    for (let f of files) {
      prms.push(this.readFormFile(f));
    }
    Promise.all(prms).then(()=>{
      this.messagesFromFile.sort((a,b)=>{
        return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime();
      });
      this.loggingViewerFilterService.filterChanged.emit();
    })
  }

  readFormFile(file){
    return new Promise((res,rej)=>{
      const fReader = new FileReader();
      fReader.onerror = (e) => { rej(e) }
      fReader.onload = (ev) => {
        if (fReader.readyState === 2) {
          const result: any = fReader.result;
          try { this.messagesFromFile = this.messagesFromFile.concat(...JSON.parse(result)) }
          catch (e) { this.toast(e) }
        }

      }
      fReader.onloadend = () => {
        //this.loggingViewerFilterService.filterChanged.emit();
        res('done');
      }
      fReader.readAsText(file);
    })
  }

  clearLogs() {
    console.log('clearLogs')
    this.messagesFromFile = [];
    setTimeout(() => { this.loggingViewerFilterService.filterChanged.emit() }, 20);
  }

  toast(msg) {
    let t = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    t.present();
  }

}
