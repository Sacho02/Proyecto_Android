import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerQRPage } from './leer-qr.page';

describe('LeerQRPage', () => {
  let component: LeerQRPage;
  let fixture: ComponentFixture<LeerQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeerQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

