import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MediaPlayerComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
