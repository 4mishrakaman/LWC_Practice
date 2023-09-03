import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement 
{
    @api greetingText = 'Child Component LWC';

    @api handleChange()
    {
        this.greetingText = 'Updated From Parent LWC Button';
    }
}