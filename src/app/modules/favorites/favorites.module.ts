import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoritesPageComponent } from "./pages/favorites-page/favorites-page.component";
import { FavoritesRoutingModule } from "./favorites-routing.module";

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
