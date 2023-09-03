import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ParentComponent extends LightningElement 
{
    textMessage ='Test';
    handleClick()
    {
        this.template.querySelector("c-child-component").handleChange();
        const greet = this.template.querySelector("c-child-component");
        if(greet)
        {
            this.textMessage = greet.greetingText;
        }

        const event = new ShowToastEvent({
            title : 'Button clicked',
            message : ' Greeting reset successfully',
            variant : 'Success'
        })
        this.dispatchEvent(event);
        

        console.log(this.textMessage);


    }


}