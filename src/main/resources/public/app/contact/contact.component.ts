import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact',
  templateUrl: './app/contact/contact.html',
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  mentors: any[];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    const that = this;

    let success = function (mentors: any) {
      that.mentors = mentors;
    };

    this.contactService.getContactInformation().then(success);
  }
}