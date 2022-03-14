import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsbyidComponent } from './postsbyid/postsbyid.component';
import { ProductsComponent } from './products/products.component';
import { UserscomponentComponent } from './userscomponent/userscomponent.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Product',component:ProductsComponent},
  {path:'users',component:UserscomponentComponent},
  { path: 'posts', component: PostsComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'posts/:id',component:PostsbyidComponent,
children:[{path:'comments',component:CommentsComponent}]}
  ,
  {path:':id/comments',component:PostsComponent},


  {path:'**',component:ErrorcomponentComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
