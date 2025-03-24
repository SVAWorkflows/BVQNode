# n8n-nodes-bvq

This is an n8n community node developed by SVA System Vertrieb Alexander GmbH. It lets you use BVQ data in your n8n workflows.
For further Information visit the offical BVQ Website https://www.bvq-software.de/en.

BVQ is a cross-platform software designed for automated monitoring of your entire data center, including computing, SAN, and storage layers. It offers monitoring, reporting, alerting, and analysis functions with an intelligent connection to ITSM systems.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

- [Important Information](#important-information)  
- [Installation](#installation) 
- [Operations](#operations)  
- [Credentials](#credentials)
- [Usage](#usage) 
- [Resources](#resources)
- [Version History](#version-history)    

## Important Information

> Due to the early state of development the BVQ API is not able to provide data based on the Unix timestamp to n8n but is planned to be working soon. For further information please do not hesitate to contact BVQ directly. 

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Quick Installation

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-bvq` in **Enter npm package name**
4. Agree to the risks of using community nodes
5. Select **Install**

**Note:** After installation, you need to restart your n8n instance for the new node to be recognized.


## Operations

In the UI there is a dropdown to select what data shall be retrieved from the BVQ API.
Currently you can choose between "Alerting" and "Localities / Sites"

If "Alerting" is selected, the data based on the provided Unix timestamp will be retrieved since this timestamp. 

If "Localities / Sites" is selected, the registered Localities and Sites will be provided.

## Credentials

You need the following credentials to establish an API connection:

- Username (from your BVQ-Account)
- Password (from your BVQ-Account)
- URL (Can be found in your local BVQ-Instance under "Connectors" > "Integrations")
- API-Key for "Alertings" (Can be generated in your local BVQ-Instance under "Connectors" > "Integrations")

Furthermore there is a checkbox named "Ignore SSL Issues", which you can tick to trust invalid or self-signed SSL-Certificates. If you persist to only trust valid SSL-Certificates, keep the checkbox at "false", which is the default value. If you do so, the Authentication of your API-Connection might fail.


## Usage

The data is submitted in a json formatted array and can be used for any use case.


## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)


## Version History

### 1.1.4

- Bugfixes

### 1.1.3

- Bugfixes

### 1.1.2

- Bugfixes
- Updated README.md

### 1.1.1

- Bugfixes

### 1.1.0

- Updated README.md
- Added additional Dropdown-Option "Localities/Sites"
- When "Altering" is selected the API-Key is mandatory 
- Changed names of text fields 

### 1.0.12

- Bugfixes

### 1.0.11

- Bugfixes

### 1.0.10

- Bugfixes

### 1.0.9

- Bugfixes

### 1.0.8

- Bugfixes

### 1.0.7

- Bugfixes

### 1.0.6

- Bugfixes

### 1.0.5

- Updated DocumentationURL 
- Specified Credential-Documentation

### 1.0.4

- Updated README.md

### 1.0.3

- Changed Package manager from npm to pnpm 
- Changed Dev Dependencies
- Minor code fixes

### 1.0.2

- Updated README.md

### 1.0.1

- Updated README.md

### 1.0.0

- Initial release