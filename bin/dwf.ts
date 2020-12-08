#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DwfStack } from '../lib/dwf-stack';
import { UsersStack } from '../lib/users-stack';

const app = new cdk.App();
new DwfStack(app, 'DwfStack');
new UsersStack(app, 'UsersStack');
