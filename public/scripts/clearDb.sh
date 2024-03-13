#!/bin/bash

current_date=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
token='V6Mcr-5AOJFtWPNnT-9us4gu799kcyX-W2xnWdOQTd-LC36M5gOJMoiD5skM6pzD2HO3XavEKWdkJM9PMOeyYw=='
host='http://10.9.240.14:8086'

./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin-Prediction"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC
./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC
./public/scripts/influx delete --host $host --token $token  --bucket sample-bucket --predicate '_measurement="Bitcoin-Sentiment"' --start 1970-01-01T00:00:00Z --stop $current_date --org IHPC

echo "Current date: $current_date"