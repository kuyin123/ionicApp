import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[auto-fit-layout]'
})
export class AutoFitLayout {
  constructor(public element: ElementRef, public renderer: Renderer) {
    //因为ionic的默认padding宽度是16
    renderer.setElementStyle(element.nativeElement, 'width', `${(document.body.clientWidth - 32).toString()}px`);
    renderer.setElementStyle(element.nativeElement, 'height', `300px`);
  }
}
