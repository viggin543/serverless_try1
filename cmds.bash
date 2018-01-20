#!/usr/bin/env bash
nvm use 6
#check package json
npm run publish
#this will create package and deploy to aws lambda the server
# claudia needs node 6 currently
# claudia needs claudia profile in ~/.aws/credentials
# with full access to lambda, apigateway and iam ( for creating and assigning roles to lambdas )
claudia generate-serverless-express-proxy --express-module dist/service
claudia create --region us-east-2 --deploy-proxy-api --role claudia-test-executor --handler lambda.handler
#each time you update the lambda env vars must be set !
claudia update --set-env mongoHost=ds163494.mlab.com,mongoPort=63494,mongoUser=dev,mongoPass=12345678

#to update run 
babel src/* -d dist/ && claudia update --set-env mongoHost=ds163494.mlab.com,mongoPort=63494,mongoUser=dev,mongoPass=12345678

#https://github.com/rpgreen/apilogs
pip install apilogs
pip install awslogs
apilogs get --api-id pd2cwpoovh --stage latest --watch --profile personal --aws-region us-east-2

#to enable apigateway api logs follow:
#https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/

#my mongo
mongo ds163494.mlab.com:63494/storage -u dev -p 12345678git remote get-url origin

# mongodb documentation
# http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#find

#typescript node starter project for reference
#https://github.com/Microsoft/TypeScript-Node-Starter/blob/master/package.json