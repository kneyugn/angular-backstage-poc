import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools'
const routes: Routes = [
  {
        path: 'gha',
        component: WebComponentWrapper,
        data: {
          type: 'script',
          remoteEntry: 'http://localhost:3023/remoteEntry.js',
          exposedModule: './gha',
          remoteName: 'gha',
          elementName: 'gha-react-element',
        } as WebComponentWrapperOptions
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
