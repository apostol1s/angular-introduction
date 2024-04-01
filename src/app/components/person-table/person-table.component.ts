import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Apostolos',
    surName: 'Tourlidas',
    age: 27,
    email: 'tourlidasa@aueb.gr',
  };
}
