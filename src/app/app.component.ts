import { Component } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actionName?: string;
  title?: string;
  discriptipn?: string;
  actionBtnTxt?: string;

  constructor(private modalService : ModalService,
    private snackbarService: SnackbarService) { }
  info() {
    this.modalService.Info(this.title,this.discriptipn,this.actionBtnTxt,this.actionName);
  }

  success() {
    this.modalService.Success(this.title,this.discriptipn,this.actionBtnTxt,this.actionName);
  }
  
  warning() {
    this.modalService.Warning(this.title,this.discriptipn,this.actionBtnTxt,this.actionName);
  }
  error() {
    this.modalService.Error(this.title,this.discriptipn,this.actionBtnTxt,this.actionName);
  }

  infoSnackBar(message: string, action: string) {
    this.snackbarService.Info(message, action);
  }
  successSnackBar(message: string, action: string) {
    this.snackbarService.Success(message, action);
  }
  warningSnackBar(message: string, action: string) {
    this.snackbarService.Warning(message, action);
  }
  errorSnackBar(message: string, action: string) {
    this.snackbarService.Error(message, action);
  }
}