#!/bin/bash

if [ $# -ne 1 ]; then
  echo error:The number of arguments is wrong.
  exit 1
fi

protoc --plugin=$(yarn bin)/protoc-gen-ts_proto \
  --ts_proto_out=./grpc/protobuf/ \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=outputClientImple=false \
  --ts_proto_opt=addGrpcMetadata=true \
  -I./grpc/protos/ \
  grpc/protos/$1.proto