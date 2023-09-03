import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccount from '@salesforce/apex/FetchAccount.getAccount';

export default class MasterAccount extends NavigationMixin(LightningElement) {
    @track stringEntered = '';
    showText = false;
    accountList;
    error;
    buttonDisabled = true;
    enteredId = '';

    handleInputChange(event) {
        this.stringEntered = event.target.value;
        this.showText = false; // Hide any previous results
        this.buttonDisabled = this.stringEntered.length === 0; // Enable the button if text is entered
    }

    handleClick(event) {
        const inputField = this.template.querySelector('lightning-input[data-id="accountInput"]');
        this.stringEntered = inputField.value;
        this.showText = true;
        getAccount({ accountId: this.stringEntered })
            .then((result) => {
                this.accountList = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accountList = undefined;
            });
    }

    handleNavigate() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.stringEntered,
                actionName: 'view',
            },
        });
    }

    handleEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.stringEntered,
                actionName: 'edit',
            },
        });
    }

    handleReset() {
        this.stringEntered = ''; // Clear the stringEntered variable
        this.showText = false; // Hide any previous results
        this.accountList = undefined; // Clear the accountList
        this.error = undefined; // Clear any errors
        this.buttonDisabled = true; // Disable the button
    }
}
