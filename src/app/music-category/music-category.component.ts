import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-music-category',
  templateUrl: './music-category.component.html',
  styleUrls: ['./music-category.component.css'],
  providers: [PostService]
})
export class MusicCategoryComponent implements OnInit {
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
    this.postsToDisplay = this.postService.getPostsByCategory('music');
  }

  goToPostDetail(clickedPost: Post) {
    this.router.navigate(['music', clickedPost.postId]);
  };

}