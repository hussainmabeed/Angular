import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-postsbyid',
  templateUrl: './postsbyid.component.html',
  styleUrls: ['./postsbyid.component.scss']
})
export class PostsbyidComponent implements OnInit {
postid:any;
  constructor(private act:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.postid=this.act.snapshot.paramMap.get("id")
  }
goto(){
  this.router.navigate(["comments"],{relativeTo:this.act})

}
}

