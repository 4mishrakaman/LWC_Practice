import { LightningElement,wire } from 'lwc';
import getAccount  from '@salesforce/apex/fetchAccCon.accList';
export default class AccountLwc extends LightningElement {
    @wire(getAccount)
    accountList;
}