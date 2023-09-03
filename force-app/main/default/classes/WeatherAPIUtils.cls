public with sharing class WeatherAPIUtils 
{
    @AuraEnabled
    public static string getWeatherDetails(string city) 
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:Weather_API/current.json?q='+city);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        return response.getBody();
        
    }
}