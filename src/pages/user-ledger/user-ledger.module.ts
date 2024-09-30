import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from '@ionic/angular';
import { UserLedgerPage } from './user-ledger';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserLedgerPage,
  ],
  imports: [
    IonicPageModule.forChild(UserLedgerPage),
    IonicModule,
    CommonModule
  ],
})
export class UserLedgerPageModule {}
