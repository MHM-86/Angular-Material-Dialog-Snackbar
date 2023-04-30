import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { dialogTypes } from '../../models/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialogConfig: MatDialogConfig = new MatDialogConfig();
  private actionName: string = '';
  private discriptipn: string = 'Default text of the dialog';
  private actionBtnTxt: string = 'ok';

  constructor(public matDialog: MatDialog) { }

  openDialogWitConfig(dialogType: string, title?: string, discription?: string, actionBtnTxt?: string, actionName?: string) {
    this.dialogConfig.minWidth = '400px';
    this.dialogConfig.minHeight = '150px';
    this.dialogConfig.panelClass = dialogType;
    this.dialogConfig.data = {
      actionName: (actionName && actionName.length) ? actionName : this.actionName,
      description: (discription && discription.length) ? discription : this.discriptipn,
      actionButtonText: (actionBtnTxt && actionBtnTxt.length) ? actionBtnTxt : this.actionBtnTxt,
      title: (title && title.length) ? title : dialogType,
      icon: dialogType !== dialogTypes.Success ? dialogType : 'check_circle',
    }
    this.matDialog.open(ModalComponent, this.dialogConfig);
  }

  Info(title?: string, discription?: string, actionBtnTxt?: string, actionName?: string, ...args: any[]) {
    this.openDialogWitConfig(dialogTypes.Info,title, discription, actionBtnTxt, actionName);
    
  }

  Success(title?: string, discription?: string, actionBtnTxt?: string, actionName?: string, ...args: any[]) {
    this.openDialogWitConfig(dialogTypes.Success, title, discription, actionBtnTxt, actionName);
  }

  Warning(title?: string, discription?: string, actionBtnTxt?: string, actionName?: string, ...args: any[]) {
    this.openDialogWitConfig(dialogTypes.Warning, title, discription, actionBtnTxt, actionName);
  }

  Error(title?: string, discription?: string, actionBtnTxt?: string, actionName?: string, ...args: any[]) {
    this.openDialogWitConfig(dialogTypes.Error, title, discription, actionBtnTxt, actionName);
  }
}
