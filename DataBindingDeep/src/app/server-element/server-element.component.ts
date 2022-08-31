import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements 
        OnInit, 
        OnChanges, 
        OnDestroy,
        DoCheck, 
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) headingName: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph:ElementRef;

  constructor() {
    console.log('Contructor called!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
    console.log('Heading Content: '+this.headingName.nativeElement.textContent);
    console.log('Text Content of Paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text Content of Paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Heading Content: '+ this.headingName.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
