import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselModule } from "ngx-bootstrap";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
