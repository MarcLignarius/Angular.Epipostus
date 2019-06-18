import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: number;
  postToDisplay: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.postService.addPosts(10, 'music'),
    this.postService.addPosts(12, 'games'),
    this.postService.addPosts(8, 'poker'),
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    }); 
    this.postToDisplay = this.postService.getPostById(this.postId);
  }

}
