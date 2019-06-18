import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-games-category',
  templateUrl: './games-category.component.html',
  styleUrls: ['./games-category.component.css'],
  providers: [PostService]
})
export class GamesCategoryComponent implements OnInit {
  postId: number;
  postsToDisplay: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postService.addPosts(10, 'music'),
    this.postService.addPosts(12, 'games'),
    this.postService.addPosts(8, 'poker'),
    this.postsToDisplay = this.postService.getPostsByCategory('games');
  }

  goToPostDetail(clickedPost: Post) {
    this.router.navigate(['games', clickedPost.postId]);
  };

}