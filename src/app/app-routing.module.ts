import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/marquee', pathMatch: 'full' },
  {
    path: 'marquee',
    loadChildren: () =>
      import('./marquee/marquee.module').then((m) => m.MarqueeModule),
  },
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then((m) => m.ECommerceModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'counter-svc',
    loadChildren: () =>
      import('./counter-service/counter-service.module').then((m) => m.CounterServiceModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./dynamic-div/dynamic-div.module').then((m) => m.DynamicDivModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
