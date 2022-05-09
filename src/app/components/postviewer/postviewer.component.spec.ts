import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostviewerComponent } from './postviewer.component';

describe('PostviewerComponent', () => {
  let component: PostviewerComponent;
  let fixture: ComponentFixture<PostviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
