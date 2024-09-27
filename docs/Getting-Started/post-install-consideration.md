---
title: Post-Installation Considerations
parent: Getting Started
nav_order: 3
---

# *Post Installation Considerations*


### Assign/Customize Page Layouts of Related Objects
* Setup > Object Manager > Select Object
* Customize your page layouts as needed:
  * **Account** > Page Layouts > Account Layout for Memberships
  * **Contact** > Page Layouts > Contact Layout for Memberships
  * **Product** > Page Payouts > Products Layout for Memberships
  * **Product** > Compact Layouts > Compact Products Layout for Memberships

  For more information on customizing page layouts:
  * [Customizing Page Layouts](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5)
  * [Configure Page Layouts and Record Types](https://trailhead.salesforce.com/content/learn/modules/lightning-knowledge-setup-and-customization/configure-page-layouts-and-record-types)
  
  
### Customize Picklist Values of Related Objects
* Setup > Object Manager > Select object
* Customize values of the following picklist fields as needed to support your business processes:
  * **Account** > Membership Status (Global Picklist)
  * **Account** > Membership Type (Global Pickist)
  * **Contact** > Membership Status (Global Picklist)
  * **Contact** > Membership Type (Global Pickist)
  * **Membership** > Origin
  * **Membership** > Status (Global Picklist)
  * **Membership** > Type (Global Picklist)
  * **Membership Contact Role** > Role
  * **Membership Contact Role** > Status (Global Picklist)
  * **Membership Contact Role** > Type (Global Picklist)
  * **Products** > Product Family
  * **Products** > Renewal Option
  * **Products** > Term Unit

  **NOTE:** A Product Type field for memberships has not been added at this time since products cannot be deleted, only archived. If a product with a membership type has been archived, it would prevent the org from being able to remove the managed package in the future. Alternatively, users can add Membership as a product type themselves if they would like a different page layout for membership type products.

  For more information on managing picklists:
  * [Create a Global Picklist Value Set](https://help.salesforce.com/s/articleView?language=en_US&id=sf.fields_creating_global_picklists.htm&type=5)
  * [Manage Picklist Values](https://trailhead.salesforce.com/content/learn/modules/picklist_admin/picklist_admin_manage)

### Set Up Products For Memberships
  * To be used with the **Upgrade Path** and **Downgrade Path** fields
  * App Launcher > Products
  * Create Membership Products (Examples: Individual Membership, Household Membership, Corporate Membership)

For more information:
* [Create and Customize Products](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-customize-products))

**NOTE:** You may add additional fields to the Product object if you need to track additional information about the product itself (e.g. max number of members or number of membership cards to print)


### Set Up Price Books For Memberships
* App Launcher > Price Books
  * Add products to price books

For more information:
* [Create Custom Price Books](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-customize-products)](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-custom-price-books))
* [Add Products to a Price Book](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-customize-products)](https://trailhead.salesforce.com/content/learn/projects/manage-products-prices-quotes-orders/create-custom-price-books)(https://help.salesforce.com/s/articleView?id=sf.comm_products_pricebooks.htm&type=5))
-----     
# *Additional Post Installation Considerations*

### Setup Organization-Wide Email Address
An organization-wide email address is needed if your org uses automated email processes such as no-reply email addresses, auto-response, mass emails, workflow rules, process builder, Flow, Apex triggers etc. Verify if this is needed for your org.
* Setup > Organization Wide Addresses > Click the “Add” button
* For more info: Setup an Organization-Wide Email Address

### Update Process Automation Settings
If you’ve created/verified an organization-wide email address in the previous step, set the **“Automated Process User Email Address”** to reflect your organization-wide email address. 
* Setup > Process Automation Settings
* For more info: Emails from the [Automated Process User](https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_flow_set_from_email_address_for_automated_process_user.htm&release=226&type=5)

<footer>
  <a href="https://github.com/SFDO-Community-Sprints/MembershipSchemaAndBenefits-Documentation/edit/main/docs/Getting-Started/post-install-consideration.md" style="font-size: smaller;">Edit this page on GitHub.</a>
</footer>
