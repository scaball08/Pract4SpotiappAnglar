import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: '', pathMatch:'full' ,redirectTo:'home' },
  { path: '**', pathMatch:'full' , redirectTo:'home' }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash:true} )],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
