import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {AuthorizationComponent} from "@fb/authorization";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'fb-layout',
  standalone: true,
  imports: [CommonModule, MatSidenav, MatSidenavContainer, MatSidenavContent, RouterOutlet, MatToolbar, MatToolbarRow, AuthorizationComponent, MatIconButton, MatIcon, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
