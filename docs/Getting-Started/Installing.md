---
layout: default
title: Installing Membership Essentials
parent: Getting Started
nav_order: 11
---

# Installing the Membership Essentials App

The Membership Essentials App (MEA) is a managed package and has been security reviewed by Salesforce. Installation, along with many other great Salesforce.org Open Source Commons applications, is done through Salesforce.org's [MetaDeploy installer](https://github.com/SFDO-Tooling/MetaDeploy).

When installing the Membership Essentials app for your organization, it is recommended to follow best practices:
* Create or refresh a sandbox from your Production org
* Install the package in the sandbox
* Complete the Post Installation Considerations
* Review the Additional Considerations section
* Thoroughly test the existing processes and features of the package
  
* Once tested, the package can be installed into the Production org
* Replicate the applicable post-install steps
* Resource: [AppExchange Basics](https://trailhead.salesforce.com/content/learn/modules/appexchange_basics)


[Install the latest managed package - (NEEDS LINK MEA PACKAGE)](https://install.salesforce.org/products/SummitEventsApp/latest){: .btn .btn-green }{:target="_blank"}

## Post-Installation Instructions

### Confirm Package Installation
  1. Setup > Search for "Installed Packages"
  2. cccc
  3. Confirm the “Membership Essentials” app is one of the installed packages

### Assign Profiles to the Membership apps
Add necessary user profiles to the “Membership” app in App Manager
  1. Setup > App Manager > find the "Membership" app
  2. "Edit" the Membership app
  3. Click the User Profile setting and add the applicable 'Available Profiles' to the 'Selected Profiles' column.
  4. Click "Save"

### Assign users to the Membership: Manage Permission Set
  1. Setup > Permission Sets 
  2. Click on the Permission Set Label **Membership: Manage**
  3. Click the **Manage Assignments** button to view Current Assignments
  4. Click **Add Assignments** to select users who will be managing memberships; 
  5. Click **Next** and review **Expiration Options**
  6. Click the **Assign** button to add individual users to this permission set
  7. For more information: [Manage Permission Set Assignments](https://help.salesforce.com/s/articleView?id=sf.perm_sets_manage_assignments.htm&type=5)

### Assign users to the Membership: View Permission Set
  1. Setup > Permission Set
  2. Click on the Permission Set Label **Membership: View**
  3. Repeat steps 3-6 above for those users who need view-only access to Memberships

### Customize Page Layouts
Update the related lists on the following object to view Membership details:
  1. Account page layout(s): add Membership and Opportunity to the related lists section
  2. Contact page layout(s): add Membership and Opportunity to the related lists section
  3. Products:
     - Product page layout(s): add Membership to the related lists section
     - Confirm Product SKU is on the Product Layout for Memberships  page layout
        - If using a Product Record Type: assign the Product Layout for Memberships to the record type.
        - If not, assign this page layout to the users who will be managing Membership products.

  6. (Optional) Assign the Compact Product layout for Membership as the Primary Compact layout (if applicable)
                Setup > Object Manager > Product > Compact Layout

  For more information on customizing page layouts:
  * [Enhanced Page Layouts](https://help.salesforce.com/s/articleView?language=en_US&id=sf.customize_layoutcustomize_pd.htm&type=5)
  * [Configure Page Layouts and Record Types](https://trailhead.salesforce.com/content/learn/modules/lightning-knowledge-setup-and-customization/configure-page-layouts-and-record-types)

----
## You're all set! You should now have a working version of Membership Essentials!
Check out the Additional Considerations sections for details on configuration you may want to incorporate into your Salesforce org.

<footer>
   <a href="https://github.com/SFDO-Community-Sprints/MembershipSchemaAndBenefits-Documentation/edit/main/docs/Getting-Started/Installing.md" style="font-size: smaller;">Edit this page on GitHub.</a>
</footer>
