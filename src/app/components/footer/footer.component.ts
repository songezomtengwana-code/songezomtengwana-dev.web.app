import { Component, OnInit } from '@angular/core';
import { emailModel } from 'src/app/models/email.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  formsInfo?: emailModel[];
  form = new emailModel();

  ngOnInit(): void {}

  public email: any;

  handleForm() {
    switch (this.form) {
      case this.form.email:
        alert(`fill in email section`);
        break;
      case this.form.message:
        alert(`fill in message section`);
        break;
      case this.form.name:
        alert(`fill in name section`);
        break;
      default:
        alert('thank you for sending a message ' + this.form.name);
        break;
    }

    const messageObject = {
      name: this.form.name,
      email: this.form.email,
      message: this.form.message,
      subject: 'Response From Website | Songezo Mtengwana',
    };
  }
}
