export type AmplifyDependentResourcesAttributes = {
    "api": {
        "skilltracker": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "skilltracker2e50d456": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "skilltracker2e50d456PostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string",
            "Region": "string"
        },
        "skilltracker2e50d456PreSignup": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "LambdaExecutionRoleArn": "string",
            "Region": "string"
        }
    }
}