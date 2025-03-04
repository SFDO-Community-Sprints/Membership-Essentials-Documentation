---
layout: default
title: Additional Considerations
parent: Getting Started
nav_order: 12
---
> == THIS PAGE IS UNDER CONSTRUCTION ==

When customizing the Membership Essentials app to meet your organziations' requirements, consider:
  * Membership Types and Membership Statuses that will be needed
  * Using Membership Contact Roles
  * Using the Products and Pricebooks objects to track your various Memberships products
  * Using a Membership Product Family on the Product object
  * If Membership notifications will sent from Salesforce

## Customize Picklist Values of Related Objects
* Setup > Object Manager > Select object
* Customize values of the following picklist fields as needed to support your business processes:
  * **Accounts & Contacts**
    * Membership Status (Global Picklist)
    * Membership Type (Global Pickist)
  * **Membership**
    * Origin
    * Status (Global Picklist)
    * Type (Global Picklist)
  * **Membership Contact Role**
    * Role
    * Status (Global Picklist)
    * Type (Global Picklist)
  * **Products**
    * Product Family
    * Renewal Option
    * Term Unit

  **NOTE:** A Product Type field for memberships has not been added at this time since products cannot be deleted, only archived. If a product with a membership type has been archived, it would prevent the org from being able to remove the managed package in the future. Alternatively, users can add Membership as a product type themselves if they would like a different page layout for membership type products.

>
>  For more information on managing picklists:
>  * [Create a Global Picklist Value Set](https://help.salesforce.com/s/articleView?language=en_US&id=sf.fields_creating_global_picklists.htm&type=5)
>  * [Manage Picklist Values](https://trailhead.salesforce.com/content/learn/modules/picklist_admin/picklist_admin_manage)
>    

## Set Up Products For Memberships
To be used with the **Upgrade Path** and **Downgrade Path** fields:
  * App Launcher > Products
  * Create Membership Products. Examples include Individual Membership, Household Membership, and Corporate Membership
  
    **NOTE:** You may add additional fields to the Product object if you need to track additional information about the product itself (e.g. max number of members or number of membership cards to print)

>
>    For more information on managing Products and Opportunity Products:
>    *[Set up Products]([https://help.salesforce.com/s/articleView?id=sf.products_setup.htm&type=5)
>    * [Create and Customize Products](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-customize-products)
>
      
## Set Up Price Books For Memberships
  * App Launcher > Price Books
  * Add products to price books

>
>    For more information on Price Books:
>    * [Create Custom Price Books]([https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-custom-price-books)
>    * [Manage Price Book]([https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-custom-price-books)
>    * [Add Products to a Price Book](https://help.salesforce.com/s/articleView?id=sf.comm_products_pricebooks.htm&type=5)
>
    
## Setup Organization-Wide Email Address*
An organization-wide email address is needed if your org uses automated email processes such as no-reply email addresses, auto-response, mass emails, workflow rules, process builder, Flow, Apex triggers etc. Verify if this is needed for your org.
* Setup > Organization Wide Addresses > Click the “Add” button

>
>   * For more info: Setup an Organization-Wide Email Address
>

## Update Process Automation Settings*
If you’ve created/verified an organization-wide email address in the previous step, set the **“Automated Process User Email Address”** to reflect your organization-wide email address. 
* Setup > Process Automation Settings

>
> * For more info: Emails from the [Automated Process User](https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_flow_set_from_email_address_for_automated_process_user.htm&release=226&type=5)
>

<footer>
  <a href="https://github.com/SFDO-Community-Sprints/MembershipSchemaAndBenefits-Documentation/edit/main/docs/Getting-Started/additional-considerations.md" style="font-size: smaller;">Edit this page on GitHub.</a>
</footer>
