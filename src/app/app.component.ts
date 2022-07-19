import { Component, OnInit } from '@angular/core';
import { WindowRefService, ICustomWindow } from './window.service';

/*
Instructions:
- Using the provided data and wireframe create a store for Other Half Brewing with the ability to filter by type

Wireframe:
https://www.figma.com/file/q2oN3YotxHqZwd7W301rOQ/Interview-Exercise%3A-Store-Listings?node-id=0%3A1

Data format:
{
    "data": [
        {
            "id": 81598,
            "active": true,
            "title": "Willi Becher Glass",
            "subtitle": "16 oz glass",
            "longDescription": "16 oz glass with other half logo",
            "imageUrl": "https://s3.amazonaws.com/craftcellr-images/otherhalf/_75c58b3b-2b3c-4610-b07b-651b76959327.jpg",
            "price": 1000,
            "type": "GLASSWARE",
            "fulfillmentTypes": [
                "PICKUP",
                "SHIPPING"
            ]
        },
        ...
    ]
}
*/

/*
Provided code:
- fetchItems(): a mocked api to fetch items returning a promise
- useItems(): a hook that fetches items
- Types: enum of the item types
- App: the component rendered to the DOM
dd
*/

export class dataClass {
  data: Array<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _window: ICustomWindow;
  public data: Object;
  public type: String;

  public fetchItems() {
    new Promise((resolve: any, reject): any => {
      setTimeout(() => {
        resolve({ data: this._window.loadInfo });
      }, 300);
    }).then((response: dataClass) => {
      this.data = response.data;
    });
  }

  // public setData(): void {
  //   this.data = this.fetchItems()
  //   }

  public types = [
    { type: 'Beer', name: 'BEER' },
    { type: 'Clothing', name: 'CLOTHING' },
    { type: 'Glassware', name: 'GLASSWARE' },
    { type: 'Events', name: 'EVENT' },
  ];

  constructor(windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit() {
    this.fetchItems();
    this.type = this.types[0].name;
  }
}
