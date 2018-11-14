import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config/env.config';

@Injectable()
export class RecipeService {

  private appID = 'app:albogdano';
  private RECIPES_RESOURCE = Config.API + '/v1/recipes';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Anonymous ' + this.appID
    })
  };

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<string[]>(this.RECIPES_RESOURCE, this.options);
  }

  add(name: string, text: string) {
    if (!name || !text) { return of(null); }
    const recipe: any = { name: name, text: text };
    return this.http.post(this.RECIPES_RESOURCE, JSON.stringify(recipe), this.options);
  }

  edit(id: string, name: string, text: string) {
    if (!id) { return of(null); }
    const recipe: any = { name: name, text: text };
    return this.http.patch(this.RECIPES_RESOURCE + '/' + id, JSON.stringify(recipe), this.options);
  }

  remove(id: string) {
    if (!id) { return of(null); }
    return this.http.delete(this.RECIPES_RESOURCE + '/' + id, this.options);
  }

  search(q: string) {
    return this.http.get(this.RECIPES_RESOURCE + '?q=' + q, this.options);
  }
}

