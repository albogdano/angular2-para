import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AboutModule } from './about.module';

export function main() {
   describe('About component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AboutModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const aboutDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Powered by');
          });
        }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<app-about></app-about>',
    standalone: false
})
class TestComponent {}
