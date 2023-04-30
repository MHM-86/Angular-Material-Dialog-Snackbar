import { Component, inject, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarActionsService } from 'src/app/services/snackbar/snackbar-actions.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  data = inject(MAT_SNACK_BAR_DATA);
  constructor(private snackbarService: SnackbarActionsService,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,) { }

  actionFunction() {
    this.snackbarService.snackBarAction(this.data);
    this.closeSnackBar();
  }

  closeSnackBar() {
    this.snackBarRef.dismiss();
  }
}
