import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public statut: boolean = true;
  public statut2: boolean = !this.statut;

  public inverser() {
    this.statut = !this.statut;
    this.statut2 = !this.statut2;
  }
}
