#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UsersStack } from '../lib/users-stack';
import { VpcStack } from '../lib/vpc-stack';
import {RDSStack} from "../lib/rds-stack";

const app = new cdk.App();

const userStack = new UsersStack(app, 'UsersStack');

const vpcStack = new VpcStack(app, 'VpcStack');
const rdsStack = new RDSStack(app, 'RDSStack', {
    vpc: vpcStack.vpc
});

vpcStack.grantDeployPrivileges(userStack.buildScriptsUser);
rdsStack.grantDeployPrivileges(userStack.buildScriptsUser);
