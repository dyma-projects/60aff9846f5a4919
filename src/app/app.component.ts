import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public pseudo = "NMehdiT";
  public typeInput = "date";

  public sauvegarde() {
    console.log("Clic");
  }
}
