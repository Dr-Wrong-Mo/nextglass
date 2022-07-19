import { Injectable } from '@angular/core';

export class WindowService {
  constructor() {}
}

export interface ICustomWindow extends Window {
  [x: string]: any;
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}

@Injectable()
export class WindowRefService {
  get nativeWindow(): ICustomWindow {
    return getWindow();
  }
}

// https://stackoverflow.com/questions/34177221/how-to-inject-window-into-a-service
