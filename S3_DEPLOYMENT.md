# Amazon S3 Static Website Hosting

## Prerequisites
- AWS Account
- AWS CLI installed

## Steps:

### 1. Create S3 Bucket
```bash
aws s3 mb s3://wisemount-website-prod
```

### 2. Enable Static Website Hosting
```bash
aws s3 website s3://wisemount-website-prod --index-document index.html --error-document 404.html
```

### 3. Set Bucket Policy (Public Read)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::wisemount-website-prod/*"
    }
  ]
}
```

### 4. Upload Files
```bash
aws s3 sync dist/ s3://wisemount-website-prod --delete
```

### 5. Your site will be live at:
http://wisemount-website-prod.s3-website-REGION.amazonaws.com

## Automatic Deployment Script
```bash
npm run build
aws s3 sync dist/ s3://wisemount-website-prod --delete
```
