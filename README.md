# NgOnInit

Once I created a local instance of this project, the NgOnInit lifecycle worked without issue.

# Access Window Object

Angular makes it difficult to access the Window Object.
I found [this documentation](hhttps://stackoverflow.com/a/37176929/13604562) on creating a custom window object that can be imported to any module.

As described in the link, I created a service file with a class called WindowRefService and an interface named ICustomWindow. I then declared the class in app.module.ts.

With that done, I was able to import WindowRefService and ICustomWindow into app.componenet.ts.

```
private _window: ICustomWindow;

constructor(windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
}

public fetchItems() {
    new Promise((resolve: any, reject): any => {
      setTimeout(() => {
        resolve({ data: this._window.loadInfo });
      }, 300);
    }).then((data) => {
      this.data = data.data; //This assigns the data array to the local variable which can be used in the HTML file.
    });
}

ngOnInit() {
    this.fetchItems() //This executes the fetchItems method on init.
}
```
