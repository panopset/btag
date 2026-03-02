import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data-service'
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mp',
  imports: [CommonModule, FormsModule],
  templateUrl: './mp.html',
  styleUrl: './mp.scss',
})
export class Mp {
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  outputText = ''
  name = ''

  submitTheForm() {
    this.outputText = 'Loading data... '
    console.log('initiated submitTheForm...')
    let submittedName = this.name
    if (this.name != null) {
     this.dataService.getData(this.name).pipe(
       tap(_ => {
         let reazy = _.body
         console.log("reazy: " + reazy)
         if (_.body != null) {
           this.outputText = _.body
         }
       })
     ).subscribe(
       {
              next: (resp) => {
                if (resp.body != null) {
                  this.cdr.detectChanges()
         console.log("subscribe: " + resp.body)
                 this.outputText = resp.body
                 this.name = submittedName
                }
              },
              error: (error) => {
                console.log(error)
              }
            }
       )
    }
  }



  submitTheForm2() {
    this.outputText = 'Loading data... '
    console.log('initiated submitTheForm...')
    let submittedName = this.name
    if (this.name != null) {
     this.dataService.getData(this.name).subscribe({
       next: (resp) => {
         if (resp.body != null) {
          this.outputText = resp.body
          this.name = submittedName
         }
       },
       error: (error) => {
         console.log(error)
       }
     })
    }
  }
}
