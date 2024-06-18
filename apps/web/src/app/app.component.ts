import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorizationComponent } from '@fb/authorization';
import {LayoutComponent} from "../../../../libs/core/src/lib/components/layout/layout.component";

@Component({
  standalone: true,
  imports: [ AuthorizationComponent, LayoutComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'web';
}
