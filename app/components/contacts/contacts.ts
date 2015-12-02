import {Component} from 'angular2/angular2';
import {Map} from '../map/map';


@Component({
  selector: 'contacts',
  templateUrl: 'app/components/contacts/contacts.html',
  styleUrls: ['app/components/contacts/contacts.css'],
  providers: [],
  directives: [Map],
  pipes: []
})
export class Contacts {

  constructor() {}

}