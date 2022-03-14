import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserscomponentComponent } from './userscomponent/userscomponent.component';
import { PostsComponent } from './posts/posts.component';
import { PostsbyidComponent } from './postsbyid/postsbyid.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { CommentsComponent } from './comments/comments.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CommentsComponent,
    ErrorcomponentComponent,
    HomeComponent,
    PostsComponent,
    PostsbyidComponent,
    TwoWayBindingComponent,
    UserscomponentComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
