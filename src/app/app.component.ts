import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes = false;
  shopList = false;

  onNavigate(feature: string) {
    if (feature === 'recipes') {
      this.recipes = true;
      this.shopList = false;
    } else {
      this.shopList = true;
      this.recipes = false;
    }
  }
}
