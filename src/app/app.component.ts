import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ccenrolmentfe';
  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this
      .postService
      .getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
