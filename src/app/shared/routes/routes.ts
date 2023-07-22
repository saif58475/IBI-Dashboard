import { Routes } from '@angular/router';


export const content: Routes = [
  // {
  //   path: 'sample-page',
  //   // loadChildren: () => import('../../components/sample/sample.module').then(m => m.SampleModule)
  //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)

  // },
  {
    path: 'admin',
    loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: 'agent',
  //   // loadChildren: () => import('../../components/Agent/agent-module.module').then(m => m.AgentModuleModule)
  //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)

    
  // },
  // {
  //   path: 'donation',
  //   // loadChildren: () => import('../../components/donation/donation.module').then(m=> m.DonationModule)
  //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)

  // },
  // {
  //   path: 'collectormanager',
  //   // loadChildren: () => import('../../components/collectormanager/collectormanager.module').then(m=> m.CollectormanagerModule)
  //   loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule)

  // },
];
