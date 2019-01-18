import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private data: DataService) {}
  recipes: [];
  ngOnInit() {
    this.route.params.subscribe(paramaters => {
      this.data.getRecipes(paramaters.items).subscribe(recipes => {
        this.recipes = recipes["hits"];
      });
    });
  }
}
