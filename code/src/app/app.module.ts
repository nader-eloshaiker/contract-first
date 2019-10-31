import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetstoreComponent} from './components/petstore/petstore.component';
import {PetService} from './services/pet.service';
import {ApiService} from './services/api.service';
import {PetFindComponent} from './components/pet-find/pet-find.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {ApiModule, Configuration, ConfigurationParameters} from '../lib/api/generated/pet-store-angular-sdk';
//
// export const apiParams: ConfigurationParameters = {
//   basePath: 'https://petstore.swagger.io/v2'
//   // set configuration parameters here.
// };
// export const apiConfig = new Configuration(apiParams);
// export function getApiConfig() {
//   return apiConfig;
// }

@NgModule({
  declarations: [
    AppComponent,
    PetstoreComponent,
    PetFindComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    // ApiModule.forRoot(getApiConfig),
  ],
  providers: [
    ApiService,
    PetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
