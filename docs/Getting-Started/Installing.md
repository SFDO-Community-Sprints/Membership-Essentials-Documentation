---
title: Installing Membership Essentials
parent: Getting Started
nav_order: 1
---

# Installing the Membership Essentials App

The Membership Essentials App (MEA) is a managed package and has been security reviewed by Salesforce. Installation, along with many other great Salesforce.org Open Source Commons applications, is done through Salesforce.org's [MetaDeploy installer](https://github.com/SFDO-Tooling/MetaDeploy).

When installing the Membership Essentials app for your organization, it is recommended to follow best practices:
* Create or refresh a sandbox from your Production org
* Install the package in the sandbox (see Post Installation Considerations)
* Thoroughly test the existing processes and features of the package
* Once tested, the package can be installed into the Production org
* Resource: [AppExchange Basics](https://trailhead.salesforce.com/content/learn/modules/appexchange_basics)


[Install the latest managed package - UPDATE W/ MEA](https://install.salesforce.org/products/SummitEventsApp/latest){: .btn .btn-green }{:target="_blank"}

## Post Installation Instructions

There are a few additional setup steps to consider once the Membership Essentials app is installed.

**NOTE:** Developers should read the Developer Guidelines before beginning any work.

### Confirm Package Installation
* Setup > Search for ‘Installed Packages’.
* Confirm the “Membership Essentials” app is one of the installed packages.

### Assign users to the Manage Memberships Permission Set
1. Setup > Permission Sets 
2. Click on the Permission Set Label **Manage Memberships**
3. Click the **Manage Assignments** button to view Current Assignments
4. Click **'Add Assignments** to select users who will be managing memberships; 
5. Click **Next** and review **Expiration Options**
6. Click the **Assign** button to add individual users to this permission set
7. For more information: [Manage Permission Set Assignments](https://help.salesforce.com/s/articleView?id=sf.perm_sets_manage_assignments.htm&type=5)

### Assign users to the View Memberships Permission Set
1. Setup > Permission Set
2. Click on the Permission Set Label “View Memberships’
3. Repeat steps 3-6 above for those users who need view-only access to Memberships







## You're all set! At this point, you should have a functioning Membership Essentials Package!


