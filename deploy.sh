#!/bin/bash

npm run build && cdk synth && cdk deploy UsersStack
