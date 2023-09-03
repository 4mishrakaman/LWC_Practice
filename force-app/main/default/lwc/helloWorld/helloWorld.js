import { LightningElement,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class HelloWorld extends LightningElement 
{
    greeting = 'Hello World from Js.LWC';
    resetGreeting = this.greeting;

    connectedCallback()
    {
        //window.alert('The divide value =>'+this.handleArrowFunction(10,5));
    }

    handleClickMe()
    {
        const event = new ShowToastEvent({
            title : 'Click Me button clicked',
            message : ' Greeting updated successfully',
            variant : 'Success'
        })
        this.dispatchEvent(event);
        this.greeting = 'Hellow World Updated';
    }

    handleReset()
    {
        const event = new ShowToastEvent({
            title : 'Reset clicked',
            message : ' Greeting reset successfully',
            variant : 'Success'
        })
        this.dispatchEvent(event);
        this.greeting = this.resetGreeting;
    }

    handleArrowFunction =(dividend,divisor) =>{
        return (dividend/divisor);
    }
}