const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */

exports.handler = async (event) => {
  let date = new Date();

  let params = {
    Item: {
      id: { S: event.request.userAttributes.sub },
      __typename: { S: 'User' },
      lastName: { S: event.request.userAttributes.family_name },
      firstName: { S: event.request.userAttributes.given_name },
      email: { S: event.request.userAttributes.email },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      owner: { S: event.request.userAttributes.sub },
    },
    TableName: process.env.API_SKILLTRACKER_USERTABLE_NAME,
  };

  await ddb.putItem(params).promise();

  console.log('Success: Everything executed correctly');
  console.log(event.request.userAttributes)

  return event;
};
