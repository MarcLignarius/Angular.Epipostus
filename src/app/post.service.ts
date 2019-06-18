import { Injectable } from '@angular/core';

import { Post } from './../app/post.model';

@Injectable()
export class PostService {
  currentId: number = 0;
  masterPostList: Post[] = [];
  
  getPosts(): Post[] {
    return this.masterPostList;
  }

  getPostById(postId: number){
    for (var i = 0; i <= this.masterPostList.length - 1; i++) {
      if (this.masterPostList[i].postId === postId) {
        return this.masterPostList[i];
      }
    }
  }

  getPostsByCategory(category: string){
    let posts = []; 
    
    for (var i = 0; i <= this.masterPostList.length - 1; i++) {
      if (this.masterPostList[i].category == category) {
        posts.push(this.masterPostList[i]);
      }
    }
    return posts;
  }

  // mock post template
  buildMockPost(): Post {
    const newPost = new Post();
    newPost.postId = this.currentId;
    this.currentId++;
    newPost.userId = 1;
    newPost.title = 'This is a sample title';
    newPost.body = 'Elit laborum qui elit ut aliqua et qui magna labore elit. Ad sint eu minim fugiat aute quis voluptate aute consequat deserunt consequat deserunt irure esse. Sit consectetur qui voluptate qui tempor dolore ut aliqua.';
    newPost.category = "";
    // tslint:disable-next-line: max-line-length
    return newPost;
  }

  // add a given number of mock posts in a specified categotry to this.masterPostList array
  addPosts(postsRequested: number, category: string): void {
    for (let i = 0; i < postsRequested; i++) {
      const newPost = this.buildMockPost();
      newPost.category = category;
      this.masterPostList.push(newPost);
    }
  }

  constructor() { }

}
