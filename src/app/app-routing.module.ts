import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./pages/user-dashboard/user-dashboard.module').then(m => m.UserDashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prod-list',
    loadChildren: () => import('./pages/prod-list/prod-list.module').then(m => m.ProdListPageModule)
  },
  {
    path: 'prod-add',
    loadChildren: () => import('./pages/prod-add/prod-add.module').then(m => m.ProdAddPageModule)
  },
  {
    path: 'prod-detail/:_id',
    loadChildren: () => import('./pages/prod-detail/prod-detail.module').then(m => m.ProdDetailPageModule)
  },
  {
    path: 'prod-edit/:_id',
    loadChildren: () => import('./pages/prod-edit/prod-edit.module').then( m => m.ProdEditPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./pages/user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./pages/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./pages/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'prod-list',
    loadChildren: () => import('./pages/prod-list/prod-list.module').then( m => m.ProdListPageModule)
  },
  {
    path: 'prod-list-u',
    loadChildren: () => import('./pages/prod-list-u/prod-list-u.module').then( m => m.ProdListUPageModule)
  },
  {
    path: 'prod-detail-u/:_id',
    loadChildren: () => import('./pages/prod-detail-u/prod-detail-u.module').then( m => m.ProdDetailUPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
