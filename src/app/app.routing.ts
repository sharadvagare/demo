import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { AboutComponent } from './components/about.component';
import { TemplateFromsComponent } from './components/templateFroms.component';
import { ModelFormComponent } from './components/modelForm.component';
const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'template-form',
      component: TemplateFromsComponent
  },
  {
      path: 'model-form',
      component: ModelFormComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
