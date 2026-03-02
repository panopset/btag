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
   if (this.name != null) {
     this.dataService.getData(this.name).subscribe({
       next: (resp) => {
        if (resp.body != null) {
         this.outputText = resp.body
         this.cdr.detectChanges()
        }
       }
     })
   }
  }
}
