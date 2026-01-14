import { Component, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  imports: [MatTooltipModule, MatButtonModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  isClicked = signal(false);

  toggleSearchBar() {
    this.isClicked.set(!this.isClicked())
  }
}
