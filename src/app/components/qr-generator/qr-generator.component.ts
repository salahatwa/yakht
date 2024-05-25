import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { BlinkedQrComponent } from 'blinked-qr';
import { Select2Data } from 'ng-select2-component';
import { Observable } from 'rxjs';
import { UpdateThemeOption } from '../../shared/action/theme-option.action';
import { CategoryModel } from '../../shared/interface/category.interface';
import { Option } from '../../shared/interface/theme-option.interface';
import { BlogState } from '../../shared/state/blog.state';
import { CategoryState } from '../../shared/state/category.state';
import { ProductState } from '../../shared/state/product.state';
import { ThemeOptionState } from '../../shared/state/theme-option.state';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss']
})
export class QrGeneratorComponent implements AfterViewInit {

  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;
  @Select(CategoryState.category) category$: Observable<CategoryModel>;
  @Select(ProductState.products) product$: Observable<Select2Data>;
  @Select(CategoryState.categories) categories$: Observable<Select2Data>;
  @Select(BlogState.blogs) blogs$: Observable<Select2Data>;

  public active = 'general';

  public form: FormGroup;


  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      width: new FormControl(200),
      height: new FormControl(200),
      scale: new FormControl(0),
      rotate: new FormControl(0),
      template: new FormControl('ocean'),
      image: new FormControl(''),
      data: new FormControl('Qr'),
      margin: new FormControl(3),
      backgroundOptions: new FormGroup({
        color: new FormControl('#fff0'),
      }),
      cornersSquareOptions: new FormGroup({
        type: new FormControl(''),
        color: new FormControl(''),
      }),
      dotsOptions: new FormGroup({
        type: new FormControl(''),
        color: new FormControl(''),
      }),
      frameOptions: new FormGroup({
        style: new FormControl(''),
        height: new FormControl(''),
        width: new FormControl(''),
        x: new FormControl(''),
        y: new FormControl(''),
        background: new FormControl(''),
        containers: new FormArray([]),
        texts: new FormArray([])
      })
    });

  }

  mapper(){
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
    return data;
  }

  ngOnInit() {
    // const themeOption$ = this.store.dispatch(new GetThemeOption());
    // const categories$ = this.store.dispatch(new GetCategories({ status: 1, type: 'product' }));
    // this.store.dispatch(new GetBlogs({ status: 1 }));

    // forkJoin([themeOption$, categories$]).subscribe({
    //   complete: () => {
    //     this.patchForm();
    //   }
    // });


  }

  @ViewChild("qrcode", { static: true }) qrcode: BlinkedQrComponent;

  ngAfterViewInit() {
    // this.form.valueChanges.pipe(
    //   pairwise(),
    //   map(([oldState, newState]) => {
    //     let changes = {};
    //     for (const key in newState) {
    //       if (oldState[key] !== newState[key] &&
    //         oldState[key] !== undefined) {
    //         changes[key] = newState[key];
    //       }
    //     }
    //     return changes;
    //   }), filter(changes => Object.keys(changes).length !== 0 && !this.form.invalid)
    // ).subscribe(
    //   (value:any) => {
    //     console.log("Form has changed:", value);
    //     this.qrcode
    //       .update(this.qrcode.config, value,
    //       )
    //       .subscribe((res) => {
    //         console.log('update:', res);
    //         console.log('Element:', res.container.querySelector(this.qrcode.config.type == 'svg' ? 'svg' : 'canvas'));
    //       });
    //   }
    // );
    // console.log(this.qrcode.config);
    // console.log(this.form.value);
  }


  submit() {
    // this.store.dispatch(new UpdateThemeOption({ options: this.form.value }))
  }

  /**
* Update
*/
  public updateQr(): void {
    this.qrcode
      .update(this.qrcode.config, this.form.value)
      .subscribe((res) => {
        // TO DO something!
        console.log('update:', res);
        console.log('Element:', res.container.querySelector(this.qrcode.config.type == 'svg' ? 'svg' : 'canvas'));
      });
  }

  /**
   * Download
   */
  onDownload(qrcode: BlinkedQrComponent): void {
    console.log(this.qrcode.config);

    this.qrcode.download('test').subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });

    // qrcode.download('test').subscribe((res) => {
    //   // TO DO something!
    //   console.log('download:', res);
    // });
  }

}
