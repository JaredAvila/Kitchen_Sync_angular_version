import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselModule } from "ngx-bootstrap";
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, SearchComponent, ResultsComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
