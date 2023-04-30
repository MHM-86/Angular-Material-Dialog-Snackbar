import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { dialogTypes } from '../../models/modal.model';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar/snackbar.component';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {}
  private snackbarConfig: MatSnackBarConfig = new MatSnackBarConfig();
  private actionName: string = 'OK';
  private discription: string = 'Default text of the snckbar';

  openSnackbarWithConfig(type: string, discription?: string, actionName?:string) {
    this.snackbarConfig.data = {
      discription:(discription && discription.length) ? discription : this.discription,
      actionName: (actionName && actionName.length) ? actionName : this.actionName,
      icon: type !== dialogTypes.Success ? type : 'check_circle',
    }
    this.snackbarConfig.panelClass = type+'-snackbar';
    return this.matSnackBar.openFromComponent(SnackbarComponent,this.snackbarConfig);
  }

  Info(discription?: string, actionName?: string, ...args: any[]) {
    this.openSnackbarWithConfig(dialogTypes.Info, discription, actionName);
    
  }

  Success(discription?: string, actionName?: string, ...args: any[]) {
    this.openSnackbarWithConfig(dialogTypes.Success, discription, actionName);
  }

  Warning(discription?: string, actionName?: string, ...args: any[]) {
    this.openSnackbarWithConfig(dialogTypes.Warning, discription, actionName);
  }

  Error(discription?: string, actionName?: string, ...args: any[]) {
    this.openSnackbarWithConfig(dialogTypes.Error, discription, actionName);
  }
 
}