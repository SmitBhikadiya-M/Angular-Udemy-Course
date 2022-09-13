import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes-rotuing.module').then(mod => mod.RecipesRoutingModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule)
  },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
