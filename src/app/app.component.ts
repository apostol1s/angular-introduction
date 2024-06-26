import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from "./components/list-group-menu/list-group-menu.component";
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink, RouterOutlet, ListGroupMenuComponent, NavbarComponent]
})
export class AppComponent {}
