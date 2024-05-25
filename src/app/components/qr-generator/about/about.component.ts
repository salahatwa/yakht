import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Select2Data } from 'ng-select2-component';
import { Option } from 'src/app/shared/interface/theme-option.interface';

import * as data from '../../../shared/data/theme-option';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  @Input() themeOption$: Observable<Option>;
  @Input() form: FormGroup;

  public language_direction: Select2Data = data.language_direction;

  selectBanner(url: string, key: string) {
    this.form.get(key)?.setValue(url ? url : null);
  }

  get futuresContent(): FormArray {
    return this.form.get('about_us.about.futures') as FormArray;
  }

  selectFutures(url: string, index: number) {
    this.futuresContent.at(index).get('icon')?.setValue(url ? url : null);
  }
  removeFutures(index: number) {
    if (this.futuresContent.length <= 0) return
    this.futuresContent.removeAt(index);
  }


  addFuture(event: Event) {
    // event.preventDefault();
    // this.futuresContent.push(
    //   this.formBuilder.group({
    //     icon: new FormControl(''),
    //     title: new FormControl(''),
    //   })
    // );
  }
}
