import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from '@ionic/angular';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    IonicModule.forRoot(SettingsPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsPageModule {}
