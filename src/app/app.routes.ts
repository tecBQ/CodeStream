import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WalkthroughCreateComponent} from './walkthroughs/walkthrough-create/walkthrough-create.component';

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'walk',component:WalkthroughCreateComponent}
];
export const appRoutingProviders:any[]=[

];
export const routing=RouterModule.forRoot(routes);

