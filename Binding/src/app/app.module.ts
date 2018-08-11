import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormModule} from './form/form.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ImputPropertyComponent } from './imput-property/imput-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifeCicleComponent } from './life-cicle/life-cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ImputPropertyComponent,
    OutputPropertyComponent,
    LifeCicleComponent
  ],
  imports: [
    BrowserModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
