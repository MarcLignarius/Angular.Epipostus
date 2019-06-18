import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-poker-category',
  templateUrl: './poker-category.component.html',
  styleUrls: ['./poker-category.component.css'],
  providers: [PostService]
})
export class PokerCategoryComponent implements OnInit {
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
    this.postsToDisplay = this.postService.getPostsByCategory('poker');
  }

  goToPostDetail(clickedPost: Post) {
    this.router.navigate(['poker', clickedPost.postId]);
  };

}
