import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarActionsService {

  constructor() { }

  snackBarAction(snackBarData: any) {
    switch (snackBarData.actionName) {
      case "action1":
        this.action1(snackBarData);
        break;
      
      case "action2":
        this.action2(snackBarData);
        break;
        
      default:
        break;
    }
  }

  private action1(snackBarData: any) {
    console.log("This action Called from snackbar", snackBarData);
    alert("This action Called from snackbar");
  }

  private action2(snackBarData: any) {
    console.log("this action is called from snackbar", snackBarData);
  }
}