import { Component } from '@angular/core';
import {
  faUser,
  faEnvelope,
  faCheck,
  faL,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCheck = faCheck;
  model: any = {};
  submitted: boolean = false;
  onSubmit() {
    if (this.model) {
      console.log('Form submitted:', this.model);
      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      this.model = {};
    }
  }
}
