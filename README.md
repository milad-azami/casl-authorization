# CASL

CASL operates on the abilities level, that is what a user can actually do in the application. An ability itself depends on the 4 parameters (last 3 are optional):

### User Action

Describes what user can actually do in the app. User action is a word (usually a verb) which depends on the business logic (e.g., prolong, read). Very often it will be a list of words from CRUD - create, read, update and delete.

### Subject

The subject or subject type which you want to check user action on. Usually this is a business (or domain) entity (e.g., Subscription, Article, User). The relation between subject and subject type is the same as relation between an object instance and its class.

### Fields

Can be used to restrict user action only to matched subject's fields (e.g., to allow moderator to update status field of an Article and disallow to update description or title)

### Conditions

Criteria which restricts user action only to matched subjects. This is useful when you need to give a permission on specific subjects (e.g., to allow user to manage own Article)
