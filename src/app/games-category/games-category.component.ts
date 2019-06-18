import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute, 
    private location: Location, 
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.addPosts(10, 'music'),
    this.postService.addPosts(12, 'games'),
    this.postService.addPosts(8, 'poker'),
    this.postsToDisplay = this.postService.getPostsByCategory('games');
    console.log(this.postsToDisplay);
    
  }

}