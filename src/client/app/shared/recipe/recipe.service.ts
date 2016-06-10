import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {

  private isDev = ('<%= ENV %>' === 'dev');
  private appID = this.isDev ? 'app:para' : 'app:albogdano';
  private RECIPES_RESOURCE = this.isDev
    ? 'http://localhost:8080/v1/recipes' : 'https://paraio.com/v1/recipes';

  private options = new RequestOptions({ headers:
    new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Anonymous ' + this.appID
    }) });

  constructor(private http: Http) {}

  get(): Observable<string[]> {
      return this.http.get(this.RECIPES_RESOURCE, this.options)
        .map((response: Response) => response.json());
  }

  add(name: string, text: string): Observable<any> {
    if (!name || !text) { return Observable.of(null); }
    let recipe:any = { name: name, text: text };
    return this.http.post(this.RECIPES_RESOURCE, JSON.stringify(recipe), this.options)
      .map((response: Response) => response.json());
  }

  edit(id: any, name: string, text: string) {
    if (!id) { return; }
    let recipe:any = { name: name, text: text };
    this.http.patch(this.RECIPES_RESOURCE + '/' + id, JSON.stringify(recipe), this.options).toPromise();
  }

  remove(id: string) {
    if (!id) { return; }
    this.http.delete(this.RECIPES_RESOURCE + '/' + id, this.options).toPromise();
  }

  search(q: string): Observable<string[]> {
    return this.http.get(this.RECIPES_RESOURCE + '?q=' + q)
        .map((response: Response) => response.json());
  }
}

