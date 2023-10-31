---
title: Post-Installation Considerations
parent: Getting Started
nav_order: 2
---
*This content is a work in progress. If you're interested in contributing to the Summit Events App and want to help provide support by reviewing or adding to this page, comment below and let us know!*


# Post-Installation Considerations

After you install Summit Events in your org there are some additional considerations you'll want to make to ensure there is alignment with your organization. Before you begin, be sure that you've completed all of the steps to [Install and Configure](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/) Summit Events.

## Page Layout Considerations
The Summit Events App was originally created for Higher Education institutions. You'll notice there are some fields that are specifically related to Admissions, like "Applicant Type". Based on your organization/institution, you may want to remove fields from the page layout to avoid confusion from your Users. We add the most commonly used fields that highlight existing functionality to the page layouts on install for visibility.

Here are some suggested fields to review based on some industry intentions:
* Applicant Type
* ...

For support in creating new or editing your page layouts, we encourage you to review Salesforce documentation: [How to create and edit page layouts](https://help.salesforce.com/articleView?id=customize_layoutcreate.htm&type=5)

## Visibility (Objects and Search) 
Because Summit Events is intended to integrate with your existing Salesforce org, you'll want to consider exposing records on related objects. The Contact record is a good example as you may want to create visibility to an individual's registration records from that object. Consider the following for visibility and clarity within your Salesforce org:

* Add the Summit Events Registrant related list to the Contact page layout.
* Configure the fields that display in the "Default" Search Layouts for [each of the Summit Events objects](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/object-field-resources/). You can leverage Salesforce resources to learn [how to configure Search Layouts](https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5).


## Picklist Considerations

Summit Events is delivered with sample values for institution/organization based picklist fields. Some picklist fields are standard and should not be edited, like Status values on each object. To provide some guidance, review the below objects' picklist fields, updating the values to meet your institution's/organization's needs. For information on updating picklist values, be sure to contact your Salesforce Administrator and follow Salesforce's [guided instructions](https://trailhead.salesforce.com/content/learn/modules/picklist_admin). We encourage that you deactivate unused values rather than delete or rename.

**Summit Events object**
* Audience
* Ask Applicant Type
* Building 
* Event Sponsor
* Event Type
* Location Type

**Summit Events Instance object**
* Building Override *(should match "Building" on the Summit Events object)*
* Category
* Location Type Override *(should match "Location Type" on the Summit Events object)*

**Summit Events Appointment object**
* Building *(should match "Building" on the Summit Events object)*

**Summit Events Appointment Type object**
* Appointment Category
* Appointment Type
* Auto Add Building *(should match "Building" on the Summit Events object)*

**Summit Events Registration object**
* *Registrant will see these picklist values*
  - Applicant Type
  - Campus Tour Location
  - Preferred Visit Time
  - Registrant Gender
  - Registrant Program Interest
  - Registrant Pronouns
  - Relationship to Institution
* *Admin/Event Management*
  - Presentation Location *(should match "Building" on the Summit Events object)*
  - Participation Type


**Summit Events Questions object**
* Existing Picklist Values *(Note: this will be based on any custom picklist fields on the Summit Events Registration object)*


<b>---To be continued. Please check back later!---</b>


## Additional Considerations
There are some additional considerations to make Summit Events more personalized for your Organization/Institution. Consider the following and check out the provided resources:

* **Changing field Display Names**
    - Changing the field display name to better match your organization's/institution's jargon may be helpful to users.
    - The following instructions [how to change field label for managed package fields](https://www.greytrix.com/blogs/salesforce/2017/10/06/how-to-rename-the-field-label-in-salesforce-for-managed-package/).
    - **Note:** Doing this may create challenges in leveraging some of the documentation, so be mindful on what fields you're updating.
* **Creating Record Type and Custom Page Layouts**
    - Create Record Type and Custom Page layouts can help guide users based on their specific use cases. 
    - In Higher Education, you may have different layouts for Admissions and Advancements based on their needs and processes.
    - You can leverage Salesforce resources on [how to create Record Types](https://trailhead.salesforce.com/en/content/learn/projects/customize-a-salesforce-object/create-record-types).
* **Add the Summit Events Calendar to your website**
    - There are a couple of ways to do this and it may depend on your organization's/institution's website resources.
    - You can follow these instructions on getting the full calendar to a web page. - [Instructions Needed]()
    - You can follow these instructions for more advanced calendaring functionality and leverage the Summit Events Feed. - [Instructions Needed]()
* **Setup Contact and Lead Matching** 
    - Ideally, you'll want Event Registrants to be added to your Salesforce org in a meaningful way. You may want to create and match Leads and/or Contacts. Review the following to create a process that supports your organization/institution:
      - [Contact and Lead Matching/Creation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/contact-and-lead-matching/)
* **Create a Custom Template**
    - A custom template will allow for the registration form and pages to be branded for your organization/institution.
    - The "General SLDS" is standard and will allow for a professional looking form, but you may want more branding.
    - You can follow these instructions on [how to create a custom template](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/custom-templates/).


