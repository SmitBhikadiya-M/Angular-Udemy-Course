import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { map } from "rxjs";
import { Post } from "./models/post.model";

@Injectable({ providedIn: 'root' })
export class PostService {

  errorSubj = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title,
      content
    }
    return this.http.post<{ name: string }>(
      'https://ng-http-learning-c3d41-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        headers: { 'content-type': 'application/json' },
        observe: 'body'
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(
      'https://ng-http-learning-c3d41-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'custom-header': 'hello' }),
        params: new HttpParams().set('print', 'pretty'),
      }
    )
      .pipe(map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ id: key, ...responseData[key] });
          }
        }
        return postsArray;
      }));
  }

  deletePosts() {
    return this.http.delete(
      "https://ng-http-learning-c3d41-default-rtdb.firebaseio.com/posts.json",
      {
        observe: 'events'
      }
    ).pipe(tap((event)=>{
      if(event.type === HttpEventType.Response){
        console.log(event);
      }
    }));
  }
}