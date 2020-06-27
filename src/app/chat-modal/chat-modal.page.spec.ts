import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModalPage } from './chat-modal.page';

describe('ChatModalPage', () => {
  let component: ChatModalPage;
  let fixture: ComponentFixture<ChatModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
