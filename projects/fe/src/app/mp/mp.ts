import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data-service'

@Component({
  selector: 'app-mp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mp.html',
  styleUrl: './mp.scss',
})
export class Mp {
  userForm = new FormGroup({
    name: new FormControl('')
  })

  constructor(
    private dataService: DataService
  ) {}

  outputText = ''

  submitTheForm() {
    this.outputText = 'Loading data... '
    console.log('initiated submitTheForm...')
    let nameField = this.userForm.get('name')
    let name = this.userForm.get('name')?.value
    if (name != null) {
     this.dataService.getData(name).subscribe({
       next: (resp) => {
         if (resp.body != null) {
          this.outputText = resp.body
          this.userForm.reset()
         }
       },
       error: (error) => {
         console.log(error)
       }
     })
    }
  }
}
