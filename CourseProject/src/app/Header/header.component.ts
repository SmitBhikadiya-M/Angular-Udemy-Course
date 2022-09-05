import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent{
    collapsed = true;
    @Output() onNavSelectEvent = new EventEmitter<string>();

    onSelect(name: string){
        this.onNavSelectEvent.emit(name);
    }
}