import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
