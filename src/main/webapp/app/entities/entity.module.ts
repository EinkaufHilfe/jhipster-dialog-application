import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'price-list',
        loadChildren: () => import('./price-list/price-list.module').then(m => m.JhipsterDialogApplicationPriceListModule),
      },
      {
        path: 'deduction',
        loadChildren: () => import('./deduction/deduction.module').then(m => m.JhipsterDialogApplicationDeductionModule),
      },
      {
        path: 'part-sale',
        loadChildren: () => import('./part-sale/part-sale.module').then(m => m.JhipsterDialogApplicationPartSaleModule),
      },
      {
        path: 'condition-definition',
        loadChildren: () =>
          import('./condition-definition/condition-definition.module').then(m => m.JhipsterDialogApplicationConditionDefinitionModule),
      },
      {
        path: 'price',
        loadChildren: () => import('./price/price.module').then(m => m.JhipsterDialogApplicationPriceModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.JhipsterDialogApplicationCustomerModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterDialogApplicationEntityModule {}
