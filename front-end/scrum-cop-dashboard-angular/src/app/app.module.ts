import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixHeaderComponent } from './matrix-header/matrix-header.component';
import { MatrixRowComponent } from './matrix-row/matrix-row.component';
import { MatrixBodyComponent } from './matrix-body/matrix-body.component';
import { SkillSquareComponent } from './skill-square/skill-square.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixHeaderComponent,
    MatrixRowComponent,
    MatrixBodyComponent,
    SkillSquareComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
