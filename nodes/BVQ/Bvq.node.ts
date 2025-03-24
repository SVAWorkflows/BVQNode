import {
    ApplicationError,
    NodeConnectionType,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

export class Bvq implements INodeType {
	description: INodeTypeDescription = {
        displayName: 'BVQ',
        name: 'bvq', 
        icon: 'file:Bvq.svg',
        group: ['transform'],
        version: 1,
        subtitle: 'Get BVQ Data',
        description: 'Get data from the BVQ API',
        defaults: {
            name: 'BVQ',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'bvqApi',
                required: true,
            },
        ],        
        properties: [
            {
                displayName: 'Data Type',
                name: 'datatype',
                description: 'Select the data type you want to retrieve from the BVQ API',
                type: 'options',
                default: 'Alerting',
                options: [
                    {
                        name: 'Alerting',
                        value: 'Alerting', // identical to name, so the URL can be created based on selection
                        description: 'Returns the latest alerts',
                    },
                    {
                        name: 'Localities / Sites',
                        value: 'Localities / Sites', // identical to name, so the URL can be created based on selection
                        description: 'Returns the latest localities / sites',
                    },
                ],
                required: true,
            },
            {
                displayName: 'Timestamp',
                name: 'timestamp',
                description: 
                    'Specifies the starting point of the time period from which you want to retrieve data, up to now, as a Unix timestamp in seconds',
                type: 'string',
                default: '',
                placeholder: 'Unix Timestamp in Seconds',
                displayOptions: {
                    show: {
                        datatype: ['Alerting'],  // Shows only when anything in the drop-down is selected
                    },
                },
                
            },
		],
	};

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

        // Retrieve credentials
        const credentials = await this.getCredentials('bvqApi', 0);
        if (!credentials) {
            throw new ApplicationError('Missing credentials for BVQ API.');
        }

        const { username, password, apiKey, apiBaseURL, ignoreSslIssues } = credentials as {
			username: string;
			password: string;
            apiKey:string;
			apiBaseURL: string;
			ignoreSslIssues: boolean;
		};

        // Retrieve node parameters (only once)
        const dataType = this.getNodeParameter('datatype', 0) as string;

        // Ensure API URL is properly formatted
        const baseUrl = apiBaseURL.replace(/\/$/, '');

	    let apiUrl: string;
        // Ensure API URL is properly formatted
        if (dataType === 'Alerting') {
            apiUrl = `${baseUrl}/rest/alerting/svamon/export/${apiKey}`; //apiUrl = `${baseUrl}/rest/alerting/svamon/export/${apiKey}?${timestamp}`;
        }  
        else if (dataType === 'Localities / Sites') {
            apiUrl = `${baseUrl}/api/data_sources/favorite.json?favoritePath=System%2FBVQ%2FTable%20views%2FLocalities%2FSite`;
        }
        else{
            apiUrl = '';
        }

		for (let i = 0; i < items.length; i++) {
			try {
                const response = await this.helpers.request({
                    method: 'GET',
                    url: apiUrl,
                    rejectUnauthorized: !ignoreSslIssues,
                    auth: { username, password },
                    headers: { 'Content-Type': 'application/json' },
                });

                // Ensure the response is parsed JSON
                const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;

				returnData.push({ json: jsonResponse });
			} catch (error) {
				throw new ApplicationError(`BVQ API Request Failed: ${error.message}`);
			}
		}

		return [returnData];
	}
}
