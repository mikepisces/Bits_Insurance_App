import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import policiesData from '../../../assets/mockData/policies.json'
import { PolicyPlan } from 'src/app/model/PolicyPlan';


@Component({
  selector: 'insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  @Output()
  bookAddedEvent = new EventEmitter();
  private selectedFile;
  private policies: PolicyPlan[];
  imgURL: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.policies = policiesData;
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  // saveFlavour() {
  //   if (this.book.id == null) {
  //   const uploadData = new FormData();
  //   uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
  //   this.selectedFile.imageName = this.selectedFile.name;

  //   this.httpClient.post('http://localhost:8080/books/upload', uploadData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.httpClientService.addFlavour(this.book).subscribe(
  //           (book) => {
  //             this.bookAddedEvent.emit();
  //             this.router.navigate(['admin', 'books']);
  //           }
  //         );
  //         console.log('Image uploaded successfully');
  //       } else {
  //         console.log('Image not uploaded successfully');
  //       }
  //     }
  //     );
  //   }else {
  //     this.httpClientService.updateFlavour(this.book).subscribe(
  //       (book) => {
  //         this.bookAddedEvent.emit();
  //         this.router.navigate(['admin', 'books']);
  //       }
  //     );
  //   }
  // }
}