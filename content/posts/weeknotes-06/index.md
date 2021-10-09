---
type: post
title: Weeknotes 6 - Taking notes, performance testing and deleting a versioned S3 bucket
date: 2021-10-09
draft: false
media: ./bucket.jpg
author: Csaba Gyõrfi
tags:
  - Weeknotes
  - Notion
  - AWS
  - S3
  - Deleting a versioning-enabled bucket
---

## Taking Notes

It is "a bit meta" writing my Weeknotes about how I take notes. This week I started using [Notion](https://www.notion.so/). I used to keep my notes all over the places, for example, Google Drive, Markdown files/GitHub or just in text files on my laptop, which caused a massive headache when organising my knowledge. I had not started using Notion earlier because it is undoubtedly heavier than a whatever text editor, but of course. After all, it is a fully-fledged productivity tool. So far, I'm using it as a notebook, but maybe I will migrate my [Trello](https://trello.com/) boards one day. By the way, I often use Trello to manage my projects and life in general.

## Performance testing

I spent most of my week automating performance tests against a [RADIUS server](https://en.wikipedia.org/wiki/RADIUS). We needed to deploy numerous EC2 instances that played the clients' role in sending authentication requests to the server. For successful authentication, the clients must have signed certificates, configuration files and a script that repeatedly fires requests. We uploaded these files into a configuration S3 bucket where the EC2 instances could pull these files while booting. As good default practice, we used a versioning-enabled bucket. When we tried to tear down the infrastructure, I had to relearn that deleting a versioned S3 bucket is not that straightforward. I've created a script that I can pull out of my pocket next time.

### Deleting the versioning-enabled S3 bucket

You cannot delete an S3 bucket unless it is empty. The reason for versioning a bucket is to eliminate the chance of losing valuable data. Therefore deleting from a versioned bucket has a bit of complexity: S3 creates a delete marker when deleting from the bucket, which becomes the new version of the object instead of simply removing the thing. Therefore we need to run three API calls for the delete operation. First, you need to delete all versions of the objects in the bucket:

```bash
aws s3api delete-objects --bucket "your-bucket-name" --delete "$(aws s3api list-object-versions --bucket "your-bucket-name" --output=json --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
```

Then you need to delete each delete marker:

```bash
aws s3api delete-objects --bucket "your-bucket-name" --delete "$(aws s3api list-object-versions --bucket "your-bucket-name" --output=json --query='{Objects: DeleteMarkers[].{Key:Key,VersionId:VersionId}}')"
```

And finally, you can destroy the bucket:
```
aws s3api delete-bucket --bucket "your-bucket-name"
```

To sum this up in a single script, you can create a `delete_bucket.sh` file with the following:
```bash
#!/bin/bash

bucket_name=$1

aws s3api delete-objects --bucket $bucket_name --delete "$(aws s3api list-object-versions --bucket $bucket_name --output=json --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"

aws s3api delete-objects --bucket $bucket_name --delete "$(aws s3api list-object-versions --bucket $bucket_name --output=json --query='{Objects: DeleteMarkers[].{Key:Key,VersionId:VersionId}}')"

aws s3api delete-bucket --bucket $bucket_name
```

Run the script using:
```bash
bash delete_bucket.sh "your-bucket-name"
```

>Be aware this will wipe the bucket with all its data, despite the versioning, so use it on your responsibility!
