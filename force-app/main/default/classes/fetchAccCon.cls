public with sharing class fetchAccCon {
    
    @AuraEnabled(cacheable= true)
    public static List<Account> accList()
    {
        return [Select Id,Name From Account Limit 50000 ];
    }
    @AuraEnabled(cacheable= true)
    public static List<Contact> conList()
    {
        return [Select Id,FirstName,LastName From Contact Limit 50000];
    }
}