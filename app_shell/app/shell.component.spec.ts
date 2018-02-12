import { TestBed, async } from '@angular/core/testing';
import { ShellComponent } from './shell.component';
describe('ShellComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShellComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'rave'`, async(() => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rave');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('rave');
  }));
});
