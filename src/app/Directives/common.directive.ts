import { Directive, ElementRef, HostListener, Renderer2, RendererFactory2 } from '@angular/core';

@Directive({
  selector: 'input[appCommon]'
})
export class CommonDirective {

  constructor(private element:ElementRef,private _renderer:Renderer2) { }
  // @HostListener('mouseenter') OnHover(){
  //   this._renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  //   this._renderer.setStyle(this.element.nativeElement, 'background-color', 'red');

  // }
  // @HostListener('mouseleave') OnLeave(){
  //   this._renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  //   this._renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  // }
  @HostListener('input',['$event']) onKeyPress(event:any){
    let eve=this.element.nativeElement.value;
    let ASCIICode = (event.which) ? event.which : event.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;

  }

}
