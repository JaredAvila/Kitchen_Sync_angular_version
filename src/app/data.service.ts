import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url: string;
  constructor(private http: HttpClient) {}
  getRecipes(stringy: string) {
    this.url =
      "http://api.edamam.com/search?q=" +
      stringy +
      "&app_id=c804c269&app_key=ad79d88a2a8b07be1a581c0c79218223%20&from=0&to=5";

    return this.http.get(this.url);
  }
}
