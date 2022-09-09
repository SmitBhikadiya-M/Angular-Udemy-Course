import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, pipe } from 'rxjs';
import { Post } from './models/post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = true;
  error = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content).subscribe((res) => {
      console.log(res);
    });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.error = null;
    this.postService.fetchPosts().subscribe({
      next: (posts: Post[]) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (err: HttpErrorResponse) => {
        this.postService.errorSubj.next(err.message);
        this.error = err.message;
        this.isFetching = false;
      }
    })
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe((res) => {
      this.loadedPosts = [];
    })
  }

  onHandleError() {
    this.error = null;
  }
}
