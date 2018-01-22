import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public userId;
  public title;
  public text;

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['id'];
  }

  onPostCreated(title, text) {
    this.postService.createPost({userId: this.userId, title, text});
  }

}
