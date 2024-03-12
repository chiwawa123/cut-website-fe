import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebUrlServiceService {
  constructor() { }

  public getUrl(id: number): string {
    if (!sessionStorage.getItem('' + id)) {
      const today: number = new Date().getMilliseconds();
      sessionStorage.setItem(id + '', ((today - id) * 100) + "tech" + today);
    }

    return sessionStorage.getItem('' + id)!; // Use non-null assertion operator (!)
  }

  public getID(url: string): number {
    if (url.indexOf("tech") > 0) {
      const data: Array<string> = url.split("tech");
      const id = Number.parseInt(data[1]) - (Number.parseInt(data[0]) / 100);
      return id;
    }
    return 0;
  }
}
