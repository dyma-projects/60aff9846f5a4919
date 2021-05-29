import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public pseudo = "NMehdiT";
  public typeInput = "date";

  public sauvegarde() {
    console.log("Clic");
  }
}
