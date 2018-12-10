import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  formData  : Actor;
  list: Actor[];
  readonly rootURL = "http://localhost:61799/api";

  constructor(private http: HttpClient) { }
  deleteActor(id: number){
    return this.http.delete(this.rootURL+'/Actor/'+ id);
  }
  putActor(formData : Actor){
    return this.http.put(this.rootURL+'/Actor/'+formData.Id, formData);
  }
  postActor(formData : Actor){
    return this.http.post(this.rootURL+'/Actor', formData);
  }

 
  refreshList(){
    return this.http.get(this.rootURL + '/Actor')
    .toPromise().then(result =>this.list = result as Actor[]);
  }
}