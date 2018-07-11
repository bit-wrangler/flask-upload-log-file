import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  file: File;
  constructor() { }

  ngOnInit() {
  }

  log(msg) {console.log(msg);}

  onSubmit(form) {
    console.log("submitted");
    console.log(form);
  }

  getFile(event) {
    this.file = event.target.files;
    console.log(this.file);
  }

}
