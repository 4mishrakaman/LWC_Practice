import { LightningElement,wire } from 'lwc';
import getContact  from '@salesforce/apex/fetchAccCon.conList';
export default class ContactLWC extends LightningElement 
{
    contactsList ;
    error;
    @wire(getContact)
    contactList({data,error})
    {
        if(data)
        {
            this.contactsList = data;
            this.error = undefined;
        }
        else if(error)
        {
            this.contactsList = undefined;
            this.error = error;
        }
    }
    
}