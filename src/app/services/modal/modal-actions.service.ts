import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor() { }

  modalAction(modalData: any) {
    switch (modalData.actionName) {
      case "alert":
        this.alert(modalData);
        break;
      
      case "action2":
        this.action2(modalData);
        break;
        
      default:
        break;
    }
  }

  private alert(modalData: any) {
    console.log("This action Called from modal");
    alert("This action Called from modal")
  }

  private action2(modalData: any) {
    console.log("action2 is called from the dialog (modal)");
  }
}