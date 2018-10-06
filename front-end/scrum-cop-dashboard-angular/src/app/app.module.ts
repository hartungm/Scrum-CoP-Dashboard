import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixHeaderComponent } from './matrix-header/matrix-header.component';
import { MatrixRowComponent } from './matrix-row/matrix-row.component';
import { MatrixBodyComponent } from './matrix-body/matrix-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixHeaderComponent,
    MatrixRowComponent,
    MatrixBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
