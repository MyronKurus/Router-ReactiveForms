import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post.model';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: Post[];

  constructor(private postService: PostService, private userService: UserService) {
    this.postService.getAllPosts$().subscribe((postData: Post[]) => {
      this.postList = postData;
    });
  }

  ngOnInit() {
    // console.log(this.postList);
  }
}


