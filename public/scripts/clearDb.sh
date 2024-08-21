#!/bin/bash

current_date=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
token='Z8PIzBNZcT7cpgvJusDBVTaWXd1tzo9RJin2O2OQpaOOBzOEO9TAClGjPXR_IpmMHtqr4fAeUeOQklKyLdtsNw=='
host='http://10.9.240.14:8086'

./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin-Prediction"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC
./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC
./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin-Sentiment"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC

echo "Current date: $current_date"
