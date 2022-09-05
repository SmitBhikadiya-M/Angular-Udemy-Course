import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    console.log(this.elemRef.nativeElement, event.target);
    
    this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elemRef: ElementRef){ 
   
  }

}
