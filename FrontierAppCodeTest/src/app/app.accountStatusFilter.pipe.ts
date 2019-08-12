import { Pipe, PipeTransform } from '@angular/core';
import { Account } from './account.model';

@Pipe({
    name: 'accountStatusFilter',
    pure: false
})
export class AccountStatusFilter implements PipeTransform {
    transform(items: Array<any>, AccountStatusId: number): Array<any> {
        return items.filter(item => item.AccountStatusId === AccountStatusId);
    }
}