export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type AvifOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly lossless?: Maybe<Scalars['Boolean']>;
  readonly speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  readonly width?: Maybe<Scalars['Int']>;
  readonly toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  readonly __typename?: 'Directory';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge';
  readonly next?: Maybe<Directory>;
  readonly node: Directory;
  readonly previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type DirectoryFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  readonly __typename?: 'File';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly childrenImageSharp?: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly childImageSharp?: Maybe<ImageSharp>;
  readonly childrenMdx?: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly childMdx?: Maybe<Mdx>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  readonly __typename?: 'FileConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  readonly __typename?: 'FileEdge';
  readonly next?: Maybe<File>;
  readonly node: File;
  readonly previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childrenMdx = 'childrenMdx',
  childrenMdx___rawBody = 'childrenMdx___rawBody',
  childrenMdx___fileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  childrenMdx___frontmatter___title = 'childrenMdx___frontmatter___title',
  childrenMdx___frontmatter___date = 'childrenMdx___frontmatter___date',
  childrenMdx___frontmatter___updated = 'childrenMdx___frontmatter___updated',
  childrenMdx___frontmatter___image___sourceInstanceName = 'childrenMdx___frontmatter___image___sourceInstanceName',
  childrenMdx___frontmatter___image___absolutePath = 'childrenMdx___frontmatter___image___absolutePath',
  childrenMdx___frontmatter___image___relativePath = 'childrenMdx___frontmatter___image___relativePath',
  childrenMdx___frontmatter___image___extension = 'childrenMdx___frontmatter___image___extension',
  childrenMdx___frontmatter___image___size = 'childrenMdx___frontmatter___image___size',
  childrenMdx___frontmatter___image___prettySize = 'childrenMdx___frontmatter___image___prettySize',
  childrenMdx___frontmatter___image___modifiedTime = 'childrenMdx___frontmatter___image___modifiedTime',
  childrenMdx___frontmatter___image___accessTime = 'childrenMdx___frontmatter___image___accessTime',
  childrenMdx___frontmatter___image___changeTime = 'childrenMdx___frontmatter___image___changeTime',
  childrenMdx___frontmatter___image___birthTime = 'childrenMdx___frontmatter___image___birthTime',
  childrenMdx___frontmatter___image___root = 'childrenMdx___frontmatter___image___root',
  childrenMdx___frontmatter___image___dir = 'childrenMdx___frontmatter___image___dir',
  childrenMdx___frontmatter___image___base = 'childrenMdx___frontmatter___image___base',
  childrenMdx___frontmatter___image___ext = 'childrenMdx___frontmatter___image___ext',
  childrenMdx___frontmatter___image___name = 'childrenMdx___frontmatter___image___name',
  childrenMdx___frontmatter___image___relativeDirectory = 'childrenMdx___frontmatter___image___relativeDirectory',
  childrenMdx___frontmatter___image___dev = 'childrenMdx___frontmatter___image___dev',
  childrenMdx___frontmatter___image___mode = 'childrenMdx___frontmatter___image___mode',
  childrenMdx___frontmatter___image___nlink = 'childrenMdx___frontmatter___image___nlink',
  childrenMdx___frontmatter___image___uid = 'childrenMdx___frontmatter___image___uid',
  childrenMdx___frontmatter___image___gid = 'childrenMdx___frontmatter___image___gid',
  childrenMdx___frontmatter___image___rdev = 'childrenMdx___frontmatter___image___rdev',
  childrenMdx___frontmatter___image___ino = 'childrenMdx___frontmatter___image___ino',
  childrenMdx___frontmatter___image___atimeMs = 'childrenMdx___frontmatter___image___atimeMs',
  childrenMdx___frontmatter___image___mtimeMs = 'childrenMdx___frontmatter___image___mtimeMs',
  childrenMdx___frontmatter___image___ctimeMs = 'childrenMdx___frontmatter___image___ctimeMs',
  childrenMdx___frontmatter___image___atime = 'childrenMdx___frontmatter___image___atime',
  childrenMdx___frontmatter___image___mtime = 'childrenMdx___frontmatter___image___mtime',
  childrenMdx___frontmatter___image___ctime = 'childrenMdx___frontmatter___image___ctime',
  childrenMdx___frontmatter___image___birthtime = 'childrenMdx___frontmatter___image___birthtime',
  childrenMdx___frontmatter___image___birthtimeMs = 'childrenMdx___frontmatter___image___birthtimeMs',
  childrenMdx___frontmatter___image___blksize = 'childrenMdx___frontmatter___image___blksize',
  childrenMdx___frontmatter___image___blocks = 'childrenMdx___frontmatter___image___blocks',
  childrenMdx___frontmatter___image___publicURL = 'childrenMdx___frontmatter___image___publicURL',
  childrenMdx___frontmatter___image___childrenImageSharp = 'childrenMdx___frontmatter___image___childrenImageSharp',
  childrenMdx___frontmatter___image___childrenMdx = 'childrenMdx___frontmatter___image___childrenMdx',
  childrenMdx___frontmatter___image___id = 'childrenMdx___frontmatter___image___id',
  childrenMdx___frontmatter___image___children = 'childrenMdx___frontmatter___image___children',
  childrenMdx___frontmatter___spoiler = 'childrenMdx___frontmatter___spoiler',
  childrenMdx___frontmatter___pageName = 'childrenMdx___frontmatter___pageName',
  childrenMdx___frontmatter___type = 'childrenMdx___frontmatter___type',
  childrenMdx___slug = 'childrenMdx___slug',
  childrenMdx___body = 'childrenMdx___body',
  childrenMdx___excerpt = 'childrenMdx___excerpt',
  childrenMdx___headings = 'childrenMdx___headings',
  childrenMdx___headings___value = 'childrenMdx___headings___value',
  childrenMdx___headings___depth = 'childrenMdx___headings___depth',
  childrenMdx___html = 'childrenMdx___html',
  childrenMdx___mdxAST = 'childrenMdx___mdxAST',
  childrenMdx___tableOfContents = 'childrenMdx___tableOfContents',
  childrenMdx___timeToRead = 'childrenMdx___timeToRead',
  childrenMdx___wordCount___paragraphs = 'childrenMdx___wordCount___paragraphs',
  childrenMdx___wordCount___sentences = 'childrenMdx___wordCount___sentences',
  childrenMdx___wordCount___words = 'childrenMdx___wordCount___words',
  childrenMdx___fields___slug = 'childrenMdx___fields___slug',
  childrenMdx___fields___collection = 'childrenMdx___fields___collection',
  childrenMdx___id = 'childrenMdx___id',
  childrenMdx___parent___id = 'childrenMdx___parent___id',
  childrenMdx___parent___parent___id = 'childrenMdx___parent___parent___id',
  childrenMdx___parent___parent___children = 'childrenMdx___parent___parent___children',
  childrenMdx___parent___children = 'childrenMdx___parent___children',
  childrenMdx___parent___children___id = 'childrenMdx___parent___children___id',
  childrenMdx___parent___children___children = 'childrenMdx___parent___children___children',
  childrenMdx___parent___internal___content = 'childrenMdx___parent___internal___content',
  childrenMdx___parent___internal___contentDigest = 'childrenMdx___parent___internal___contentDigest',
  childrenMdx___parent___internal___description = 'childrenMdx___parent___internal___description',
  childrenMdx___parent___internal___fieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  childrenMdx___parent___internal___ignoreType = 'childrenMdx___parent___internal___ignoreType',
  childrenMdx___parent___internal___mediaType = 'childrenMdx___parent___internal___mediaType',
  childrenMdx___parent___internal___owner = 'childrenMdx___parent___internal___owner',
  childrenMdx___parent___internal___type = 'childrenMdx___parent___internal___type',
  childrenMdx___children = 'childrenMdx___children',
  childrenMdx___children___id = 'childrenMdx___children___id',
  childrenMdx___children___parent___id = 'childrenMdx___children___parent___id',
  childrenMdx___children___parent___children = 'childrenMdx___children___parent___children',
  childrenMdx___children___children = 'childrenMdx___children___children',
  childrenMdx___children___children___id = 'childrenMdx___children___children___id',
  childrenMdx___children___children___children = 'childrenMdx___children___children___children',
  childrenMdx___children___internal___content = 'childrenMdx___children___internal___content',
  childrenMdx___children___internal___contentDigest = 'childrenMdx___children___internal___contentDigest',
  childrenMdx___children___internal___description = 'childrenMdx___children___internal___description',
  childrenMdx___children___internal___fieldOwners = 'childrenMdx___children___internal___fieldOwners',
  childrenMdx___children___internal___ignoreType = 'childrenMdx___children___internal___ignoreType',
  childrenMdx___children___internal___mediaType = 'childrenMdx___children___internal___mediaType',
  childrenMdx___children___internal___owner = 'childrenMdx___children___internal___owner',
  childrenMdx___children___internal___type = 'childrenMdx___children___internal___type',
  childrenMdx___internal___content = 'childrenMdx___internal___content',
  childrenMdx___internal___contentDigest = 'childrenMdx___internal___contentDigest',
  childrenMdx___internal___description = 'childrenMdx___internal___description',
  childrenMdx___internal___fieldOwners = 'childrenMdx___internal___fieldOwners',
  childrenMdx___internal___ignoreType = 'childrenMdx___internal___ignoreType',
  childrenMdx___internal___mediaType = 'childrenMdx___internal___mediaType',
  childrenMdx___internal___owner = 'childrenMdx___internal___owner',
  childrenMdx___internal___type = 'childrenMdx___internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___updated = 'childMdx___frontmatter___updated',
  childMdx___frontmatter___image___sourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  childMdx___frontmatter___image___absolutePath = 'childMdx___frontmatter___image___absolutePath',
  childMdx___frontmatter___image___relativePath = 'childMdx___frontmatter___image___relativePath',
  childMdx___frontmatter___image___extension = 'childMdx___frontmatter___image___extension',
  childMdx___frontmatter___image___size = 'childMdx___frontmatter___image___size',
  childMdx___frontmatter___image___prettySize = 'childMdx___frontmatter___image___prettySize',
  childMdx___frontmatter___image___modifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  childMdx___frontmatter___image___accessTime = 'childMdx___frontmatter___image___accessTime',
  childMdx___frontmatter___image___changeTime = 'childMdx___frontmatter___image___changeTime',
  childMdx___frontmatter___image___birthTime = 'childMdx___frontmatter___image___birthTime',
  childMdx___frontmatter___image___root = 'childMdx___frontmatter___image___root',
  childMdx___frontmatter___image___dir = 'childMdx___frontmatter___image___dir',
  childMdx___frontmatter___image___base = 'childMdx___frontmatter___image___base',
  childMdx___frontmatter___image___ext = 'childMdx___frontmatter___image___ext',
  childMdx___frontmatter___image___name = 'childMdx___frontmatter___image___name',
  childMdx___frontmatter___image___relativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  childMdx___frontmatter___image___dev = 'childMdx___frontmatter___image___dev',
  childMdx___frontmatter___image___mode = 'childMdx___frontmatter___image___mode',
  childMdx___frontmatter___image___nlink = 'childMdx___frontmatter___image___nlink',
  childMdx___frontmatter___image___uid = 'childMdx___frontmatter___image___uid',
  childMdx___frontmatter___image___gid = 'childMdx___frontmatter___image___gid',
  childMdx___frontmatter___image___rdev = 'childMdx___frontmatter___image___rdev',
  childMdx___frontmatter___image___ino = 'childMdx___frontmatter___image___ino',
  childMdx___frontmatter___image___atimeMs = 'childMdx___frontmatter___image___atimeMs',
  childMdx___frontmatter___image___mtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  childMdx___frontmatter___image___ctimeMs = 'childMdx___frontmatter___image___ctimeMs',
  childMdx___frontmatter___image___atime = 'childMdx___frontmatter___image___atime',
  childMdx___frontmatter___image___mtime = 'childMdx___frontmatter___image___mtime',
  childMdx___frontmatter___image___ctime = 'childMdx___frontmatter___image___ctime',
  childMdx___frontmatter___image___birthtime = 'childMdx___frontmatter___image___birthtime',
  childMdx___frontmatter___image___birthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  childMdx___frontmatter___image___blksize = 'childMdx___frontmatter___image___blksize',
  childMdx___frontmatter___image___blocks = 'childMdx___frontmatter___image___blocks',
  childMdx___frontmatter___image___publicURL = 'childMdx___frontmatter___image___publicURL',
  childMdx___frontmatter___image___childrenImageSharp = 'childMdx___frontmatter___image___childrenImageSharp',
  childMdx___frontmatter___image___childrenMdx = 'childMdx___frontmatter___image___childrenMdx',
  childMdx___frontmatter___image___id = 'childMdx___frontmatter___image___id',
  childMdx___frontmatter___image___children = 'childMdx___frontmatter___image___children',
  childMdx___frontmatter___spoiler = 'childMdx___frontmatter___spoiler',
  childMdx___frontmatter___pageName = 'childMdx___frontmatter___pageName',
  childMdx___frontmatter___type = 'childMdx___frontmatter___type',
  childMdx___slug = 'childMdx___slug',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___fields___collection = 'childMdx___fields___collection',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type FileFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly publicURL?: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp?: Maybe<ImageSharpFilterInput>;
  readonly childrenMdx?: Maybe<MdxFilterListInput>;
  readonly childMdx?: Maybe<MdxFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF',
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED',
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE',
}

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp';
  readonly fixed?: Maybe<ImageSharpFixed>;
  readonly fluid?: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original?: Maybe<ImageSharpOriginal>;
  readonly resize?: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type ImageSharpFilterInput = {
  readonly fixed?: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid?: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  readonly original?: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize?: Maybe<ImageSharpResizeFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly sizes?: Maybe<StringQueryOperatorInput>;
  readonly originalImg?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize';
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly width?: Maybe<IntQueryOperatorInput>;
  readonly height?: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  readonly __typename?: 'Internal';
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type InternalFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>;
  readonly contentDigest?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners?: Maybe<StringQueryOperatorInput>;
  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType?: Maybe<StringQueryOperatorInput>;
  readonly owner?: Maybe<StringQueryOperatorInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly progressive?: Maybe<Scalars['Boolean']>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>;
  readonly ne?: Maybe<Scalars['JSON']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex?: Maybe<Scalars['JSON']>;
  readonly glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  readonly __typename?: 'Mdx';
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: MdxFrontmatter;
  readonly slug?: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings?: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html?: Maybe<Scalars['String']>;
  readonly mdxAST?: Maybe<Scalars['JSON']>;
  readonly tableOfContents?: Maybe<Scalars['JSON']>;
  readonly timeToRead?: Maybe<Scalars['Int']>;
  readonly wordCount?: Maybe<MdxWordCount>;
  readonly fields: MdxFields;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  readonly __typename?: 'MdxConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  readonly __typename?: 'MdxEdge';
  readonly next?: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous?: Maybe<Mdx>;
};

export type MdxFields = {
  readonly __typename?: 'MdxFields';
  readonly slug: Scalars['String'];
  readonly collection?: Maybe<Scalars['String']>;
};

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter___updated = 'frontmatter___updated',
  frontmatter___image___sourceInstanceName = 'frontmatter___image___sourceInstanceName',
  frontmatter___image___absolutePath = 'frontmatter___image___absolutePath',
  frontmatter___image___relativePath = 'frontmatter___image___relativePath',
  frontmatter___image___extension = 'frontmatter___image___extension',
  frontmatter___image___size = 'frontmatter___image___size',
  frontmatter___image___prettySize = 'frontmatter___image___prettySize',
  frontmatter___image___modifiedTime = 'frontmatter___image___modifiedTime',
  frontmatter___image___accessTime = 'frontmatter___image___accessTime',
  frontmatter___image___changeTime = 'frontmatter___image___changeTime',
  frontmatter___image___birthTime = 'frontmatter___image___birthTime',
  frontmatter___image___root = 'frontmatter___image___root',
  frontmatter___image___dir = 'frontmatter___image___dir',
  frontmatter___image___base = 'frontmatter___image___base',
  frontmatter___image___ext = 'frontmatter___image___ext',
  frontmatter___image___name = 'frontmatter___image___name',
  frontmatter___image___relativeDirectory = 'frontmatter___image___relativeDirectory',
  frontmatter___image___dev = 'frontmatter___image___dev',
  frontmatter___image___mode = 'frontmatter___image___mode',
  frontmatter___image___nlink = 'frontmatter___image___nlink',
  frontmatter___image___uid = 'frontmatter___image___uid',
  frontmatter___image___gid = 'frontmatter___image___gid',
  frontmatter___image___rdev = 'frontmatter___image___rdev',
  frontmatter___image___ino = 'frontmatter___image___ino',
  frontmatter___image___atimeMs = 'frontmatter___image___atimeMs',
  frontmatter___image___mtimeMs = 'frontmatter___image___mtimeMs',
  frontmatter___image___ctimeMs = 'frontmatter___image___ctimeMs',
  frontmatter___image___atime = 'frontmatter___image___atime',
  frontmatter___image___mtime = 'frontmatter___image___mtime',
  frontmatter___image___ctime = 'frontmatter___image___ctime',
  frontmatter___image___birthtime = 'frontmatter___image___birthtime',
  frontmatter___image___birthtimeMs = 'frontmatter___image___birthtimeMs',
  frontmatter___image___blksize = 'frontmatter___image___blksize',
  frontmatter___image___blocks = 'frontmatter___image___blocks',
  frontmatter___image___publicURL = 'frontmatter___image___publicURL',
  frontmatter___image___childrenImageSharp = 'frontmatter___image___childrenImageSharp',
  frontmatter___image___childrenImageSharp___gatsbyImageData = 'frontmatter___image___childrenImageSharp___gatsbyImageData',
  frontmatter___image___childrenImageSharp___id = 'frontmatter___image___childrenImageSharp___id',
  frontmatter___image___childrenImageSharp___children = 'frontmatter___image___childrenImageSharp___children',
  frontmatter___image___childImageSharp___gatsbyImageData = 'frontmatter___image___childImageSharp___gatsbyImageData',
  frontmatter___image___childImageSharp___id = 'frontmatter___image___childImageSharp___id',
  frontmatter___image___childImageSharp___children = 'frontmatter___image___childImageSharp___children',
  frontmatter___image___childrenMdx = 'frontmatter___image___childrenMdx',
  frontmatter___image___childrenMdx___rawBody = 'frontmatter___image___childrenMdx___rawBody',
  frontmatter___image___childrenMdx___fileAbsolutePath = 'frontmatter___image___childrenMdx___fileAbsolutePath',
  frontmatter___image___childrenMdx___slug = 'frontmatter___image___childrenMdx___slug',
  frontmatter___image___childrenMdx___body = 'frontmatter___image___childrenMdx___body',
  frontmatter___image___childrenMdx___excerpt = 'frontmatter___image___childrenMdx___excerpt',
  frontmatter___image___childrenMdx___headings = 'frontmatter___image___childrenMdx___headings',
  frontmatter___image___childrenMdx___html = 'frontmatter___image___childrenMdx___html',
  frontmatter___image___childrenMdx___mdxAST = 'frontmatter___image___childrenMdx___mdxAST',
  frontmatter___image___childrenMdx___tableOfContents = 'frontmatter___image___childrenMdx___tableOfContents',
  frontmatter___image___childrenMdx___timeToRead = 'frontmatter___image___childrenMdx___timeToRead',
  frontmatter___image___childrenMdx___id = 'frontmatter___image___childrenMdx___id',
  frontmatter___image___childrenMdx___children = 'frontmatter___image___childrenMdx___children',
  frontmatter___image___childMdx___rawBody = 'frontmatter___image___childMdx___rawBody',
  frontmatter___image___childMdx___fileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  frontmatter___image___childMdx___slug = 'frontmatter___image___childMdx___slug',
  frontmatter___image___childMdx___body = 'frontmatter___image___childMdx___body',
  frontmatter___image___childMdx___excerpt = 'frontmatter___image___childMdx___excerpt',
  frontmatter___image___childMdx___headings = 'frontmatter___image___childMdx___headings',
  frontmatter___image___childMdx___html = 'frontmatter___image___childMdx___html',
  frontmatter___image___childMdx___mdxAST = 'frontmatter___image___childMdx___mdxAST',
  frontmatter___image___childMdx___tableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  frontmatter___image___childMdx___timeToRead = 'frontmatter___image___childMdx___timeToRead',
  frontmatter___image___childMdx___id = 'frontmatter___image___childMdx___id',
  frontmatter___image___childMdx___children = 'frontmatter___image___childMdx___children',
  frontmatter___image___id = 'frontmatter___image___id',
  frontmatter___image___parent___id = 'frontmatter___image___parent___id',
  frontmatter___image___parent___children = 'frontmatter___image___parent___children',
  frontmatter___image___children = 'frontmatter___image___children',
  frontmatter___image___children___id = 'frontmatter___image___children___id',
  frontmatter___image___children___children = 'frontmatter___image___children___children',
  frontmatter___image___internal___content = 'frontmatter___image___internal___content',
  frontmatter___image___internal___contentDigest = 'frontmatter___image___internal___contentDigest',
  frontmatter___image___internal___description = 'frontmatter___image___internal___description',
  frontmatter___image___internal___fieldOwners = 'frontmatter___image___internal___fieldOwners',
  frontmatter___image___internal___ignoreType = 'frontmatter___image___internal___ignoreType',
  frontmatter___image___internal___mediaType = 'frontmatter___image___internal___mediaType',
  frontmatter___image___internal___owner = 'frontmatter___image___internal___owner',
  frontmatter___image___internal___type = 'frontmatter___image___internal___type',
  frontmatter___spoiler = 'frontmatter___spoiler',
  frontmatter___pageName = 'frontmatter___pageName',
  frontmatter___type = 'frontmatter___type',
  slug = 'slug',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  fields___slug = 'fields___slug',
  fields___collection = 'fields___collection',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type MdxFieldsFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>;
  readonly collection?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  readonly rawBody?: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  readonly frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  readonly slug?: Maybe<StringQueryOperatorInput>;
  readonly body?: Maybe<StringQueryOperatorInput>;
  readonly excerpt?: Maybe<StringQueryOperatorInput>;
  readonly headings?: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html?: Maybe<StringQueryOperatorInput>;
  readonly mdxAST?: Maybe<JsonQueryOperatorInput>;
  readonly tableOfContents?: Maybe<JsonQueryOperatorInput>;
  readonly timeToRead?: Maybe<IntQueryOperatorInput>;
  readonly wordCount?: Maybe<MdxWordCountFilterInput>;
  readonly fields?: Maybe<MdxFieldsFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  readonly elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly __typename?: 'MdxFrontmatter';
  readonly title: Scalars['String'];
  readonly date: Scalars['Date'];
  readonly updated?: Maybe<Scalars['Date']>;
  readonly image?: Maybe<File>;
  readonly spoiler?: Maybe<Scalars['String']>;
  readonly pageName?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterUpdatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly date?: Maybe<DateQueryOperatorInput>;
  readonly updated?: Maybe<DateQueryOperatorInput>;
  readonly image?: Maybe<FileFilterInput>;
  readonly spoiler?: Maybe<StringQueryOperatorInput>;
  readonly pageName?: Maybe<StringQueryOperatorInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  readonly __typename?: 'MdxGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  readonly __typename?: 'MdxHeadingMdx';
  readonly value?: Maybe<Scalars['String']>;
  readonly depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  readonly value?: Maybe<StringQueryOperatorInput>;
  readonly depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  readonly __typename?: 'MdxWordCount';
  readonly paragraphs?: Maybe<Scalars['Int']>;
  readonly sentences?: Maybe<Scalars['Int']>;
  readonly words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  readonly paragraphs?: Maybe<IntQueryOperatorInput>;
  readonly sentences?: Maybe<IntQueryOperatorInput>;
  readonly words?: Maybe<IntQueryOperatorInput>;
};

export type Node = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type NodeFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type Potrace = {
  readonly turnPolicy?: Maybe<PotraceTurnPolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly file?: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory?: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site?: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction?: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage?: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp?: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdx?: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly sitePlugin?: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  context?: Maybe<SitePageContextFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata?: Maybe<SiteSiteMetadata>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  readonly __typename?: 'SiteBuildMetadata';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next?: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  readonly __typename?: 'SiteEdge';
  readonly next?: Maybe<Site>;
  readonly node: Site;
  readonly previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteLanguage = 'siteMetadata___siteLanguage',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SiteFilterInput = {
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  readonly port?: Maybe<IntQueryOperatorInput>;
  readonly host?: Maybe<StringQueryOperatorInput>;
  readonly polyfill?: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  readonly __typename?: 'SiteFunction';
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SiteFunctionConnection = {
  readonly __typename?: 'SiteFunctionConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next?: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  functionRoute = 'functionRoute',
  pluginName = 'pluginName',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type SiteFunctionFilterInput = {
  readonly functionRoute?: Maybe<StringQueryOperatorInput>;
  readonly pluginName?: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  readonly matchPath?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage';
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly pluginCreator?: Maybe<SitePlugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly context?: Maybe<SitePageContext>;
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  readonly __typename?: 'SitePageContext';
  readonly slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge';
  readonly next?: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___fileName = 'pluginCreator___pluginOptions___fileName',
  pluginCreator___pluginOptions___minify = 'pluginCreator___pluginOptions___minify',
  pluginCreator___pluginOptions___namespace = 'pluginCreator___pluginOptions___namespace',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator___pluginOptions___pure',
  pluginCreator___pluginOptions___alias____ = 'pluginCreator___pluginOptions___alias____',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___lessBabel = 'pluginCreator___pluginOptions___lessBabel',
  pluginCreator___pluginOptions___mediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  pluginCreator___pluginOptions___root = 'pluginCreator___pluginOptions___root',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator___pluginOptions___pageTransitionDelay',
  pluginCreator___pluginOptions___enableWebVitalsTracking = 'pluginCreator___pluginOptions___enableWebVitalsTracking',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___categories = 'pluginCreator___pluginOptions___categories',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___icons = 'pluginCreator___pluginOptions___icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator___pluginOptions___icons___src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator___pluginOptions___icons___sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator___pluginOptions___icons___type',
  pluginCreator___pluginOptions___icons___purpose = 'pluginCreator___pluginOptions___icons___purpose',
  pluginCreator___pluginOptions___lang = 'pluginCreator___pluginOptions___lang',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___feeds = 'pluginCreator___pluginOptions___feeds',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator___pluginOptions___feeds___query',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator___pluginOptions___feeds___output',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator___pluginOptions___feeds___title',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  context___slug = 'context___slug',
}

export type SitePageFilterInput = {
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly component?: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName?: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName?: Maybe<StringQueryOperatorInput>;
  readonly matchPath?: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator?: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly context?: Maybe<SitePageContextFilterInput>;
};

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge';
  readonly next?: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___fileName = 'pluginOptions___fileName',
  pluginOptions___minify = 'pluginOptions___minify',
  pluginOptions___namespace = 'pluginOptions___namespace',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions___pure',
  pluginOptions___alias____ = 'pluginOptions___alias____',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___lessBabel = 'pluginOptions___lessBabel',
  pluginOptions___mediaTypes = 'pluginOptions___mediaTypes',
  pluginOptions___root = 'pluginOptions___root',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___pageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  pluginOptions___enableWebVitalsTracking = 'pluginOptions___enableWebVitalsTracking',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___categories = 'pluginOptions___categories',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___icons = 'pluginOptions___icons',
  pluginOptions___icons___src = 'pluginOptions___icons___src',
  pluginOptions___icons___sizes = 'pluginOptions___icons___sizes',
  pluginOptions___icons___type = 'pluginOptions___icons___type',
  pluginOptions___icons___purpose = 'pluginOptions___icons___purpose',
  pluginOptions___lang = 'pluginOptions___lang',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions___crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___cacheDigest = 'pluginOptions___cacheDigest',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___feeds = 'pluginOptions___feeds',
  pluginOptions___feeds___query = 'pluginOptions___feeds___query',
  pluginOptions___feeds___output = 'pluginOptions___feeds___output',
  pluginOptions___feeds___title = 'pluginOptions___feeds___title',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly resolve?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>;
  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  readonly __typename?: 'SitePluginPackageJson';
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDevDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly main?: Maybe<StringQueryOperatorInput>;
  readonly license?: Maybe<StringQueryOperatorInput>;
  readonly dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly __typename?: 'SitePluginPackageJsonPeerDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  readonly __typename?: 'SitePluginPluginOptions';
  readonly isTSX?: Maybe<Scalars['Boolean']>;
  readonly jsxPragma?: Maybe<Scalars['String']>;
  readonly allExtensions?: Maybe<Scalars['Boolean']>;
  readonly displayName?: Maybe<Scalars['Boolean']>;
  readonly fileName?: Maybe<Scalars['Boolean']>;
  readonly minify?: Maybe<Scalars['Boolean']>;
  readonly namespace?: Maybe<Scalars['String']>;
  readonly transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  readonly pure?: Maybe<Scalars['Boolean']>;
  readonly alias?: Maybe<SitePluginPluginOptionsAlias>;
  readonly base64Width?: Maybe<Scalars['Int']>;
  readonly stripMetadata?: Maybe<Scalars['Boolean']>;
  readonly defaultQuality?: Maybe<Scalars['Int']>;
  readonly failOnError?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly path?: Maybe<Scalars['String']>;
  readonly extensions?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel?: Maybe<Scalars['Boolean']>;
  readonly mediaTypes?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root?: Maybe<Scalars['String']>;
  readonly trackingId?: Maybe<Scalars['String']>;
  readonly head?: Maybe<Scalars['Boolean']>;
  readonly anonymize?: Maybe<Scalars['Boolean']>;
  readonly respectDNT?: Maybe<Scalars['Boolean']>;
  readonly pageTransitionDelay?: Maybe<Scalars['Int']>;
  readonly enableWebVitalsTracking?: Maybe<Scalars['Boolean']>;
  readonly short_name?: Maybe<Scalars['String']>;
  readonly categories?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly start_url?: Maybe<Scalars['String']>;
  readonly background_color?: Maybe<Scalars['String']>;
  readonly theme_color?: Maybe<Scalars['String']>;
  readonly display?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly icons?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsIcons>>>;
  readonly lang?: Maybe<Scalars['String']>;
  readonly legacy?: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head?: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode?: Maybe<Scalars['String']>;
  readonly crossOrigin?: Maybe<Scalars['String']>;
  readonly include_favicon?: Maybe<Scalars['Boolean']>;
  readonly cacheDigest?: Maybe<Scalars['String']>;
  readonly query?: Maybe<Scalars['String']>;
  readonly feeds?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsAlias = {
  readonly __typename?: 'SitePluginPluginOptionsAlias';
  readonly _?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasFilterInput = {
  readonly _?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeeds = {
  readonly __typename?: 'SitePluginPluginOptionsFeeds';
  readonly query?: Maybe<Scalars['String']>;
  readonly output?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query?: Maybe<StringQueryOperatorInput>;
  readonly output?: Maybe<StringQueryOperatorInput>;
  readonly title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  readonly isTSX?: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma?: Maybe<StringQueryOperatorInput>;
  readonly allExtensions?: Maybe<BooleanQueryOperatorInput>;
  readonly displayName?: Maybe<BooleanQueryOperatorInput>;
  readonly fileName?: Maybe<BooleanQueryOperatorInput>;
  readonly minify?: Maybe<BooleanQueryOperatorInput>;
  readonly namespace?: Maybe<StringQueryOperatorInput>;
  readonly transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  readonly pure?: Maybe<BooleanQueryOperatorInput>;
  readonly alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>;
  readonly base64Width?: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality?: Maybe<IntQueryOperatorInput>;
  readonly failOnError?: Maybe<BooleanQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly extensions?: Maybe<StringQueryOperatorInput>;
  readonly lessBabel?: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes?: Maybe<StringQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly trackingId?: Maybe<StringQueryOperatorInput>;
  readonly head?: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize?: Maybe<BooleanQueryOperatorInput>;
  readonly respectDNT?: Maybe<BooleanQueryOperatorInput>;
  readonly pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  readonly enableWebVitalsTracking?: Maybe<BooleanQueryOperatorInput>;
  readonly short_name?: Maybe<StringQueryOperatorInput>;
  readonly categories?: Maybe<StringQueryOperatorInput>;
  readonly start_url?: Maybe<StringQueryOperatorInput>;
  readonly background_color?: Maybe<StringQueryOperatorInput>;
  readonly theme_color?: Maybe<StringQueryOperatorInput>;
  readonly display?: Maybe<StringQueryOperatorInput>;
  readonly icon?: Maybe<StringQueryOperatorInput>;
  readonly icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  readonly lang?: Maybe<StringQueryOperatorInput>;
  readonly legacy?: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin?: Maybe<StringQueryOperatorInput>;
  readonly include_favicon?: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest?: Maybe<StringQueryOperatorInput>;
  readonly query?: Maybe<StringQueryOperatorInput>;
  readonly feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  readonly __typename?: 'SitePluginPluginOptionsIcons';
  readonly src?: Maybe<Scalars['String']>;
  readonly sizes?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly purpose?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly sizes?: Maybe<StringQueryOperatorInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
  readonly purpose?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  readonly __typename?: 'SiteSiteMetadata';
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly siteLanguage?: Maybe<Scalars['String']>;
  readonly siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly siteLanguage?: Maybe<StringQueryOperatorInput>;
  readonly siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  readonly grayscale?: Maybe<Scalars['Boolean']>;
  readonly duotone?: Maybe<DuotoneGradient>;
  readonly rotate?: Maybe<Scalars['Int']>;
  readonly trim?: Maybe<Scalars['Float']>;
  readonly cropFocus?: Maybe<ImageCropFocus>;
  readonly fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
};

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never }>;

export type NotFoundPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: Maybe<{ readonly __typename?: 'Mdx'; readonly body: string }>;
};

export type AllPostsSortedQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsSortedQuery = {
  readonly __typename?: 'Query';
  readonly posts: {
    readonly __typename?: 'MdxConnection';
    readonly totalCount: number;
    readonly edges: ReadonlyArray<{
      readonly __typename?: 'MdxEdge';
      readonly node: {
        readonly __typename?: 'Mdx';
        readonly id: string;
        readonly timeToRead?: Maybe<number>;
        readonly excerpt: string;
        readonly frontmatter: {
          readonly __typename?: 'MdxFrontmatter';
          readonly title: string;
          readonly date: any;
          readonly spoiler?: Maybe<string>;
          readonly pubDate: any;
        };
        readonly fields: { readonly __typename?: 'MdxFields'; readonly slug: string };
      };
    }>;
  };
};

export type IndexPageQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: Maybe<{ readonly __typename?: 'Mdx'; readonly id: string; readonly body: string }>;
};

export type TypographyPageQueryVariables = Exact<{ [key: string]: never }>;

export type TypographyPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: Maybe<{ readonly __typename?: 'Mdx'; readonly body: string }>;
};

export type UsesPageQueryVariables = Exact<{ [key: string]: never }>;

export type UsesPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: Maybe<{ readonly __typename?: 'Mdx'; readonly body: string }>;
};

export type PostDetailsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type PostDetailsQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: Maybe<{
    readonly __typename?: 'Mdx';
    readonly body: string;
    readonly timeToRead?: Maybe<number>;
    readonly excerpt: string;
    readonly fields: { readonly __typename?: 'MdxFields'; readonly slug: string };
    readonly frontmatter: {
      readonly __typename?: 'MdxFrontmatter';
      readonly title: string;
      readonly date: any;
      readonly spoiler?: Maybe<string>;
      readonly pubDate: any;
      readonly image?: Maybe<{
        readonly __typename?: 'File';
        readonly childImageSharp?: Maybe<{
          readonly __typename?: 'ImageSharp';
          readonly resize?: Maybe<{
            readonly __typename?: 'ImageSharpResize';
            readonly src?: Maybe<string>;
            readonly width?: Maybe<number>;
            readonly height?: Maybe<number>;
          }>;
        }>;
      }>;
    };
  }>;
};
