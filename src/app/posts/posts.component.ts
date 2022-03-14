import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postslist: any;
  constructor(private posts: PostsService, private router: Router) {
  }
  postss: any = [{ "id": 1, "name": "ali" }, { "id": 2, "name": "ali" }]

  ngOnInit(): void {
    this.posts.GetAllPosts().subscribe(
      post => { this.postslist = post }
    )
  }
  gotopostbyid(post: any) {
    this.router.navigate(["/posts", post.id, "comments"])
  }
}
