import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';

export class UsersStack extends cdk.Stack {
  readonly buildScriptsUser: iam.User;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.buildScriptsUser = new iam.User(this, 'BuildScriptsUser', {
        userName: 'BuildScriptsUser',
    });
    this.buildScriptsUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AWSCloudFormationFullAccess'));
    this.buildScriptsUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('IAMFullAccess'));

    const accessKey = new iam.CfnAccessKey(this, 'myAccessKey', {
        userName: this.buildScriptsUser.userName
    })

    // TODO what are CfnOutput?????
    new cdk.CfnOutput(this, 'accessKeyId', { value: accessKey.ref });
    new cdk.CfnOutput(this, 'secretAccessKey', { value: accessKey.attrSecretAccessKey });
  }
}
