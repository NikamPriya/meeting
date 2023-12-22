import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPackagesComponent } from './client-packages.component';

describe('ClientPackagesComponent', () => {
  let component: ClientPackagesComponent;
  let fixture: ComponentFixture<ClientPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPackagesComponent]
    });
    fixture = TestBed.createComponent(ClientPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
