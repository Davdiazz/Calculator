import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



const MODULES = [
  MatButtonModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
