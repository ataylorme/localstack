import {SQSClient, ListQueuesCommand} from "@aws-sdk/client-sqs";

const shouldConfigureClient = process.env.CONFIGURE_CLIENT === "1";

let sqsClient;
if (shouldConfigureClient) {
    sqsClient = new SQSClient({
        region: "us-east-1",
        endpoint: process.env.AWS_ENDPOINT_URL
    });
} else {
    sqsClient = new SQSClient({region: "us-east-1"});
}

export const handler = async(event) => {
    const cmd = new ListQueuesCommand({});
    await sqsClient.send(cmd);
    return "ok"
};
