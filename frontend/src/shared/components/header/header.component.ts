import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, MatIconModule, MatButtonModule, SearchBarComponent, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
