const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

const colorNames = [
  'blue',
  'grey',
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'amber',
  'orange',
  'deep-orange',
];
const colorNumbers = ['6', '7', '8', '9', '10'];

const createColor = () => {
  const name = colorNames[Math.floor(Math.random() * colorNames.length)];
  const number = colorNumbers[Math.floor(Math.random() * colorNumbers.length)];

  return `${name}-${number}`;
};

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
      color: { S: createColor() },
    },
    TableName: process.env.API_SKILLTRACKER_USERTABLE_NAME,
  };

  await ddb.putItem(params).promise();

  console.log('Success: Everything executed correctly');
  console.log(event.request.userAttributes);

  return event;
};
