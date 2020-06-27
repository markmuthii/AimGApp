import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'member-search', loadChildren: './member-search/member-search.module#MemberSearchPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'products-single/:productid', loadChildren: './products-single/products-single.module#ProductsSinglePageModule' },
  { path: 'member-profile/:memberid', loadChildren: './member-profile/member-profile.module#MemberProfilePageModule' },
  { path: 'chat-modal/:userid', loadChildren: './chat-modal/chat-modal.module#ChatModalPageModule' },
  { path: 'product-add', loadChildren: './product-add/product-add.module#ProductAddPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'leads', loadChildren: './leads/leads.module#LeadsPageModule' },
  { path: 'teams', loadChildren: './teams/teams.module#TeamsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
