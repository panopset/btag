import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data-service'

@Component({
  selector: 'app-mp',
  imports: [CommonModule, FormsModule],
  templateUrl: './mp.html',
  styleUrl: './mp.scss',
})
export class Mp {
  constructor(
    private dataService: DataService
  ) {}

  outputText = ''
  name = ''

  submitTheForm() {
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
