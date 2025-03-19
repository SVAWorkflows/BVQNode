# BVQNode
Custom BVQ Node for API request in n8n

This is a custom node for n8n that retrieves data from the BVQ API if you have the mandatory credentials such as username, password (which is a BVQ-Account) and the API-Base-URL. 
In the UI there is a dropdown to select what data shall be retrieved from the BVQ API.
Currently only Alerts can be selected in the dropdown menu. 

If Alerts is selected the data based on the provided Unix timestamp will be retrieved since this timestamp. The data is submitted in json format and can be used for several use cases. 
