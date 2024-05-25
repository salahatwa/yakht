import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BlinkedQrComponent } from 'blinked-qr';
import * as data from '../../../shared/data/theme-option';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-qr-frames',
  templateUrl: './qr-frames.component.html',
  styleUrl: './qr-frames.component.scss'
})
export class QrFramesComponent {
  @Input() form: FormGroup;
  @Input() qrcode: BlinkedQrComponent;
  public collection_layout = data.frames_layout;

  public fonts: Select2Data = [
    {
      value: 'cursive',
      label: 'Cursive',
    },
    {
      value: 'serif',
      label: 'Serif',
    }
  ];


  constructor(private fb: FormBuilder) {

  }
  styleControls() {
    return (this.form.get('frameOptions.containers') as FormArray);
  }

  textControls() {
    return (this.form.get('frameOptions.texts') as FormArray);
  }


  selectItem(item) {
    this.styleControls().clear();
    this.textControls().clear();     

    if (item?.frameOptions?.containers && item?.frameOptions?.containers.length > 0) {
      item?.frameOptions?.containers.forEach(item => {
        const group = this.fb.group({
          fill: new FormControl(item?.fill),
          stroke: new FormControl(item?.stroke)
        });
        this.styleControls().push(group);
      });
    }

    if (item?.frameOptions?.texts && item?.frameOptions?.texts.length > 0) {
      item?.frameOptions?.texts.forEach(item => {
        const group = this.fb.group({
          textContent: new FormControl(item?.textContent),
          fill: new FormControl(item?.fill),
          x: new FormControl(item?.x),
          y: new FormControl(item?.y),
          fontSize: new FormControl(item?.fontSize),
          fontFamily: new FormControl(item?.fontFamily),
        });
        this.textControls().push(group);
      });
    }

    this.form.patchValue(item);

    this.update();
  }

  update() {
    console.log(this.form.value);

    let data=this.form.value;

    if (!this.form.value?.frameOptions.style)
    {
      console.log('rest>>');
    
      this.form.get('width').setValue("200");
      this.form.get('height').setValue("200");
      this.form.get('frameOptions').reset();
      // this.form.get('frameOptions.style').setValue(undefined);
      data.width="200";
      data.height="200";
      data.frameOptions=undefined;
    }

   
    this.qrcode
      .update(this.qrcode.config, data,
      )
      .subscribe((res) => {
      });
  }
}
