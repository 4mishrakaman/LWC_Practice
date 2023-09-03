import { LightningElement } from 'lwc';
import getWeather from '@salesforce/apex/WeatherAPIUtils.getWeatherDetails';

export default class WeatherApp extends LightningElement {
    city = '';
    success = false;
    imgUrl = '';
    condition = '';
    region = '';
    country = '';
    dateTime = '';
    temp = '';

    handleOnChange(event) {
        this.city = event.target.value;
    }

    handleClick() {
        getWeather({ city: this.city })
            .then((response) => {
                console.log('Response => ' + JSON.stringify(response)); // Changed JSON.stringify to see the whole response
                let parseData = JSON.parse(response);

                this.imgUrl = parseData.current.condition.icon;
                console.log(this.imgUrl);
                this.condition = parseData.current.condition.text;
                console.log(this.condition);
                this.region = parseData.location.region;
                console.log(this.region);
                this.country = parseData.location.country;
                console.log(this.country);
                this.dateTime = parseData.location.localtime;
                console.log(this.dateTime);
                this.temp = parseData.current.temp_c;
                console.log(this.temp);
            })
            .catch((error) => {
                console.log('Error => ' + JSON.stringify(error));
            });
    }
}
