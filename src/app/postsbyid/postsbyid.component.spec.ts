import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsbyidComponent } from './postsbyid.component';

describe('PostsbyidComponent', () => {
  let component: PostsbyidComponent;
  let fixture: ComponentFixture<PostsbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
