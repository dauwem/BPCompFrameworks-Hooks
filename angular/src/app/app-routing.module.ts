import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { ConfirmedGraphContainer } from './containers/confirmed-graph-container/confirmed-graph-container.component';
import { CuredGraphContainer } from './containers/cured-graph-container/cured-graph-container.component';
import { DeadGraphContainer } from './containers/dead-graph-container/dead-graph-container.component';

const routes: Routes = [
  { path: 'confirmed', component: ConfirmedGraphContainer },
  { path: 'cured', component: CuredGraphContainer },
  { path: 'dead', component: DeadGraphContainer },
  { path: '',   redirectTo: '/confirmed', pathMatch: 'full' },
  { path: '**', redirectTo: '/confirmed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
