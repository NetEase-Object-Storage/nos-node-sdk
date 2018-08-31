export interface Bucket {
  creationDate: Date
  name: string
}

export enum BucketAcl {
  PRIVATE = 'private',
  PUBLISH = 'public-read',
}

export enum BucketLocation {
  HZ = 'HZ',
  BJ = 'BJ',
  GZ = 'GZ',
}

export interface OperateBucketParams {
  bucket: string
}

export interface SetBucketAclParams extends OperateBucketParams {
  acl: BucketAcl
}

export interface SetBucketDefault404Params extends OperateBucketParams {
  objectKey: string
}

export interface BucketWebsite {
  indexDocument: string
  errorDocument?: string
}