# Continious Testing for Plissee-Experte with Cypress.io 

[Test structure](#markdown-header-test-structure)  
[Test diagram](#markdown-header-test-diagramme)  
[Local testing](#markdown-header-local-testing)  
[Scheduled testruns](#markdown-header-scheduled-testruns)  
[Manual testruns](#markdown-header-manual-testruns)  
[Run personal selection](#markdown-header-how-to-run-a-personal-selection-of-specfiles)  
[Various hints](#markdown-header-various-hints)  

## Test structure 

- Each spec.js-file is a separate test case. 

- The .spec.js files are located in the respective folder of each specgroup, i.e.:    
    .  
    - cypress/e2e/product_configuration/**specialforms**/configure_F1_direkt_Cremona-1093.spec.js    
    .  
- Negativ testcases are designated with 'neg'. Currently we have the following distinct specgroups:    
.  
    - [gutscheine](cypress/e2e/product_configuration/gutscheine/)  
    - [muster](cypress/e2e/product_configuration/muster/)  
    - [neg_empty_inputs](cypress/e2e/product_configuration/neg_empty_inputs/)    
    - [neg_paypal](cypress/e2e/product_configuration/neg_paypal/)     
    - [neg_roof](cypress/e2e/product_configuration/neg_roof/)    
    - [neg_special_I](cypress/e2e/product_configuration/neg_special_I/)    
    - [neg_special_II](cypress/e2e/product_configuration/neg_special_II/)    
    - [neg_vatid](cypress/e2e/product_configuration/neg_vatid/)    
    - [neg_vertical](cypress/e2e/product_configuration/neg_vertical/)     
    - [rabattcodes](cypress/e2e/product_configuration/rabattcodes/)    
    - [rmg](cypress/e2e/product_configuration/rmg/)    
    - [roof](cypress/e2e/product_configuration/roof/)    
    - [serviceprodukte](cypress/e2e/product_configuration/serviceprodukte/)     
    - [specialforms](cypress/e2e/product_configuration/specialforms/)    
    - [user](cypress/e2e/product_configuration/user/)    
    - [vatid](cypress/e2e/product_configuration/vatid/t)    
    - [vertical](cypress/e2e/product_configuration/vertical/)    
    - [zubehoer](cypress/e2e/product_configuration/zubehoer/)      
.  
    
- Every specgroup directory contains a textfile "speclist.txt" with the list of available .spec.js files    
.    
![speclist](IMAGES/speclist.png)    
.    
- The default pipeline of this repository automatically checks on every push to the repository, whether there are changes in the cypress/e2e/product_configuration directory and its subdirectories and updates the respective speclist.txt files accordingly.  

- Within the .spec.js file a configurator method is called. This method includes all set() functions that are required for the configuration of the product/test, i.e.:    
    - _cypress/support/configurator_specialForms.js_    
    .    

- Within the configurator files the methods _checkCart() from cart.js, checkOut(), checkFinalPrices() and placeOrder()_ from checkout.js are called:    
    - _checkCart()_ includes all functions that are required to check prices in cart  
    - _checkOut()_ includes all functions that are required to set the customer data  
    - _checkFinalPrices()_ includes all functions that are required to check prices in 'Bestellübersicht'  
    - _placeOrder()_ includes all functions that are required to set the order and check backend prices     

.  

## Test diagramme
![PEX structure](IMAGES/pex_diagramm.png)    
.    


## Local Testing

1. Download / clone this repository
2. In the <root>folder  

```bash
npm install
```  

3. Start headless testrun with 

```bash
npm test
```

or with  

```bash
npx cypress run
```

4. Open Cypress runner for headed testruns with  

```bash
npm run cypress:open
```  
.    

![Cypress runner](IMAGES/open_cypress_runner.png)

.  
## Scheduled testruns

.    
Every morning all scheduled test cases run via Bitbucket pipelines against production server (test cases stop on checkout page in order to avoid test orders on production system).  
We can update test schedule via Repositories > cypress-test > Pipelines > Schedules.    
.    
![schedule](IMAGES/scheduled-pipelines.png)    
.    
**All testresults are being displayed in real-time on the currents.dev dashboard:**    
.    
![currents dashboard](IMAGES/currents-dashboard.png)    
.    
**Screenshots, video recordings and detailed informations are available for failed tests:**    
.    
![currents dashboard detail](IMAGES/currents-dashboard-detail.png)    
.    

## Manual testruns


Manual testruns can be started via:  
  1) Repositories > cypress-test > Pipelines > Run pipeline    
.    
  ![dropdown](IMAGES/pipelines-view.png)    
.    
**If you want to run tests against STAGE or PRODUCTION environment you can specify the following options:**  

    - BRANCH : The specfiles from this branch will be used  
    - Pipeline: The custom test configuration on a specific testing environment  
    - SPECGROUP: All specfiles in the selected specgroup will be executed against the testing environment. By default all available specfiles are preselected ("*")  
    - SPECGROUP_2: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE").  
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_2 is equal to SPECGROUP.
    - SPECGROUP_3: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE") 
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_3 is equal to SPECGROUP or SPECGROUP_3 is equal to SPECGROUP_2     
.    
  
  2) Repositories > cypress-test > Branches > Actions > Run pipeline for a branch    

.    
![run pipeline for branch](IMAGES/run-pipeline-for-branch.png)    
.    
**From the dropdown menu select the relevant testpipeline:**    
.    
![dropdown](IMAGES/pipeline-dropdown.png)    
.    
**Then select the specgroup.** By default all available specfiles are preselected with "*"    
.    
![specgroup](IMAGES/pipeline-specgroup.png)    
.    
**If you want to run tests on a dedicated testing environment you can specify the following options:**    
.    

    - TESTBRANCH : The specified branch will be checked out on the testing environment    
    - Pipeline: The custom test configuration on a specific testing environment  
    - SPECGROUP: All specfiles in the selected specgroup will be executed against the testing environment. By default all available specfiles are preselected ("*")  
    - SPECGROUP_2: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE").  
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_2 is equal to SPECGROUP.
    - SPECGROUP_3: All specfiles in the selected specgroup will be executed against the testing environment. By default no specfiles are preselected ("NONE") 
      Selection will be omitted during pipeline run if SPECGROUP is set to "*" or "CUSTOM" or SPECGROUP_3 is equal to SPECGROUP or SPECGROUP_3 is equal to SPECGROUP_2 
    - IMPORT_MINIDUMP: The current database minidump will be imported on the testing environment    
    
.    
![pexdelphinus](IMAGES/pipeline-pexdelphinus.png)    
.    
## How to run a personal selection of specfiles
    
.    
  - Add a textfile "custom-speclist.txt" with a list of arbitrary specfiles at repository root  
  - Commit the file  
  - In the dropdown menu of the respective testing pipeline select "CUSTOM" for SPECGROUP   
.    
![custom speclist](IMAGES/custom-speclist.png)    
.    
![custom](IMAGES/pipeline-custom.png)  
.    

## Various hints
 
.    
- We changed user_agent for browser to "testing_agent" in order to avoid cypress to be part of VWO-Tests or Universal Analytics. Otherwise this would falsify statistics.    
- save testing_agent in cypress.config.js    
.    
``` 
"userAgent": "...",
```
.    
#### Find project id
- https://app.currents.dev/organizations/628926ac797398fd1ff186eb/projects/CUSNOF    
- save project id in cypress.config.js    
.    
``` 
"projectId": "...",
```

