import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredentialsFormWrapperComponent } from './credentials-form-wrapper.component';

describe('CredentialsFormWrapperComponent', () => {
  let component: CredentialsFormWrapperComponent;
  let fixture: ComponentFixture<CredentialsFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialsFormWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialsFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
