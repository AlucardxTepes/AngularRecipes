import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recipes = false;
  shopList = false;

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfkMaHW0gurpoNlQg337xWnY3PTYLEbz0',
      authDomain: 'angular-http-test-60147.firebaseapp.com',
      databaseURL: 'https://angular-http-test-60147.firebaseio.com',
      projectId: 'angular-http-test-60147',
      storageBucket: 'angular-http-test-60147.appspot.com',
      messagingSenderId: '992167033606'
    });
  }

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
