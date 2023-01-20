import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchbarComponent } from 'src/app/components/shared/searchbar/searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
