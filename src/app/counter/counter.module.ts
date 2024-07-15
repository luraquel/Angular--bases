
import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.components';



@NgModule({

  exports: [
    CounterComponent,
  ],
  declarations: [
    CounterComponent,
  ],

})
export class CounterModule { }

