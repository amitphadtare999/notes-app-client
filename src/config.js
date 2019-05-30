export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-uploads-amit"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://43q91a4do9.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_2w95CyNcm",
    APP_CLIENT_ID: "611pohd0ocsb8ovu2v3je75mvr",
    IDENTITY_POOL_ID: "ap-south-1:e3604ebf-b007-4712-91d7-c15a7b5e12ec"
  }
};
