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
3. Enter `n8n-node-bvq` in **Enter npm package name**
4. Agree to the risks of using community nodes
5. Select **Install**

**Note:** After installation, you need to restart your n8n instance for the new node to be recognized.

## Operations

In the UI there is a dropdown to select what data shall be retrieved from the BVQ API.
Currently only Alerts can be selected in the dropdown menu. 

If Alerts is selected the data based on the provided Unix timestamp will be retrieved since this timestamp. The data is submitted in json format and can be used for several use cases. 

## Credentials

Credentials such as username, password (which is a BVQ-Account) and the API-Base-URL are mandatory. 

## Usage

The data is submitted in json format and can be used for several use cases.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## Version History

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

