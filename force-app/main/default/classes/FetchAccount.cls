public with sharing class FetchAccount {

    @AuraEnabled(cacheable = true)
    public static Account getAccount(String accountId){
        try {
                return [Select Id,Name,Description,Phone From Account WHERE Id =:accountId Limit 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(String accountId)
    {
        try {
             return [Select Id,AccountId,FirstName,LastName,Phone,email From Contact WHERE AccountId =:accountId Limit 50000];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}