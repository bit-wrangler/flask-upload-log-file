import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  file: File;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  log(msg) {console.log(msg);}

  onSubmit(form) {
    let formData: FormData = new FormData();
    formData.append('file', this.file, this.file.name);
    let headers: Headers = new Headers();
    //headers.append('Content-Type', 'multipart/form-data');
    //headers.append('Accept','application/json');

    this.http.post(
      'http://localhost:5000/upload-log/foobar',
      formData,
      new RequestOptions({headers: headers})
    ).subscribe( response => {
      console.log(response);
    });
  }

  getFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

}
