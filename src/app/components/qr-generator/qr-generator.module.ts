import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../../shared/shared.module';
import { ThemeOptionRoutingModule } from './qr-generator-routing.module';

// Components
import { QrGeneratorComponent } from './qr-generator.component';

// State
import { BlinkedQrModule } from 'blinked-qr';
import { BlogState } from '../../shared/state/blog.state';
import { CategoryState } from '../../shared/state/category.state';
import { PageState } from '../../shared/state/page.state';
import { ProductState } from '../../shared/state/product.state';
import { ThemeOptionState } from '../../shared/state/theme-option.state';
import { AboutComponent } from './about/about.component';
import { GeneralComponent } from './general/general.component';
import { HeaderComponent } from './header/header.component';
import { QrFramesComponent } from './qr-frames/qr-frames.component';

@NgModule({
  declarations: [
    QrGeneratorComponent,
    GeneralComponent,
    HeaderComponent,
    AboutComponent,
    QrFramesComponent
  ],
  imports: [
    CommonModule,
    ThemeOptionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    BlinkedQrModule,
    NgxsModule.forFeature([
      ThemeOptionState,
      CategoryState,
      PageState,
      ProductState,
      BlogState
    ])
  ]
})

export class QrGeneratorModule { }
