import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectItemMiniComponent } from './project-item-mini.component';

describe('ProjectItemMiniComponent', () => {
  let component: ProjectItemMiniComponent;
  let fixture: ComponentFixture<ProjectItemMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectItemMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
