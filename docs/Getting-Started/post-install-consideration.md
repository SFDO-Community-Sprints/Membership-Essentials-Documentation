---
title: Post-Installation Considerations
parent: Getting Started
nav_order: 3
---

# *UNDER CONSTRUCTION*
*This content is a work in progress. If you're interested in contributing to the Membership Essentials App and want to help provide support by reviewing or adding to this page, comment below and let us know!*

## Post Install Considerations

### Assign/Customize Page Layouts of Related Objects
* Setup > Object Manager > Select Object
  * Account > Page Layouts > Account Layout for Memberships
  * Contact > Page Layouts > Contact Layout for Memberships

For more info:
* [Customizing Page Layouts](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5)
* [Configure Page Layouts and Record Types](https://trailhead.salesforce.com/content/learn/modules/lightning-knowledge-setup-and-customization/configure-page-layouts-and-record-types)


### Customize Picklist Values of Related Object
* Setup > Object Manager > Select object
* Customize values of the following picklist fields if desired/needed:

 *Account*
  1.  Membership Status (Global Picklist)
  2.  Membership Type (Global Pickist)

 *Contact*
  1. Membership Status (Global Picklist)
  2. Membership Type (Global Pickist)
 
 *Membership* 
  1. Origin
  2. Status (Global Picklist)
  3. Type

For more info:
* [Create a Global Picklist Value Set](https://help.salesforce.com/s/articleView?language=en_US&id=sf.fields_creating_global_picklists.htm&type=5)
* [Manage Picklist Values](https://trailhead.salesforce.com/content/learn/modules/picklist_admin/picklist_admin_manage)


## Additional Post Installation Considerations

## Setup Organization-Wide Email Address
An organization-wide email address is needed if your org uses automated email processes such as no-reply email addresses, auto-response, mass emails, workflow rules, process builder, Flow, Apex triggers etc. Verify if this is needed for your org.
* Setup > Organization Wide Addresses > Click the “Add” button
* For more info: Setup an Organization-Wide Email Address

## Update Process Automation Settings
If you’ve created/verified an organization-wide email address in the previous step, set the **“Automated Process User Email Address”** to reflect your organization-wide email address. 
* Setup > Process Automation Settings
* For more info: Emails from the [Automated Process User](https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_flow_set_from_email_address_for_automated_process_user.htm&release=226&type=5)

