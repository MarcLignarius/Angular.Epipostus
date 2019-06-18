import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[] = [];

  getAllPosts(): void {
    this.posts = this.postService.getPosts();
  }

  ngOnInit() {
    this.postService.addPosts(10, 'music'),
    this.postService.addPosts(12, 'games'),
    this.postService.addPosts(8, 'poker'),
    this.getAllPosts();
  }

}
