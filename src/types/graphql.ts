export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  readonly lossless?: InputMaybe<Scalars['Boolean']>;
  readonly quality?: InputMaybe<Scalars['Int']>;
  readonly speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  readonly toFormat?: InputMaybe<ImageFormat>;
  readonly width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Boolean']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne?: InputMaybe<Scalars['Boolean']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Date']>;
  readonly gt?: InputMaybe<Scalars['Date']>;
  readonly gte?: InputMaybe<Scalars['Date']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt?: InputMaybe<Scalars['Date']>;
  readonly lte?: InputMaybe<Scalars['Date']>;
  readonly ne?: InputMaybe<Scalars['Date']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  readonly __typename?: 'Directory';
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent?: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge';
  readonly next?: Maybe<Directory>;
  readonly node: Directory;
  readonly previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
}

export type DirectoryFilterInput = {
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity?: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

export type File = Node & {
  readonly __typename?: 'File';
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  readonly childImageSharp?: Maybe<ImageSharp>;
  readonly childMdx?: Maybe<Mdx>;
  readonly children: ReadonlyArray<Node>;
  readonly childrenImageSharp?: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly childrenMdx?: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent?: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  readonly __typename?: 'FileConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileEdge = {
  readonly __typename?: 'FileEdge';
  readonly next?: Maybe<File>;
  readonly node: File;
  readonly previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childMdx___body = 'childMdx___body',
  childMdx___children = 'childMdx___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___fields___collection = 'childMdx___fields___collection',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___image___absolutePath = 'childMdx___frontmatter___image___absolutePath',
  childMdx___frontmatter___image___accessTime = 'childMdx___frontmatter___image___accessTime',
  childMdx___frontmatter___image___atime = 'childMdx___frontmatter___image___atime',
  childMdx___frontmatter___image___atimeMs = 'childMdx___frontmatter___image___atimeMs',
  childMdx___frontmatter___image___base = 'childMdx___frontmatter___image___base',
  childMdx___frontmatter___image___birthTime = 'childMdx___frontmatter___image___birthTime',
  childMdx___frontmatter___image___birthtime = 'childMdx___frontmatter___image___birthtime',
  childMdx___frontmatter___image___birthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  childMdx___frontmatter___image___blksize = 'childMdx___frontmatter___image___blksize',
  childMdx___frontmatter___image___blocks = 'childMdx___frontmatter___image___blocks',
  childMdx___frontmatter___image___changeTime = 'childMdx___frontmatter___image___changeTime',
  childMdx___frontmatter___image___children = 'childMdx___frontmatter___image___children',
  childMdx___frontmatter___image___childrenImageSharp = 'childMdx___frontmatter___image___childrenImageSharp',
  childMdx___frontmatter___image___childrenMdx = 'childMdx___frontmatter___image___childrenMdx',
  childMdx___frontmatter___image___ctime = 'childMdx___frontmatter___image___ctime',
  childMdx___frontmatter___image___ctimeMs = 'childMdx___frontmatter___image___ctimeMs',
  childMdx___frontmatter___image___dev = 'childMdx___frontmatter___image___dev',
  childMdx___frontmatter___image___dir = 'childMdx___frontmatter___image___dir',
  childMdx___frontmatter___image___ext = 'childMdx___frontmatter___image___ext',
  childMdx___frontmatter___image___extension = 'childMdx___frontmatter___image___extension',
  childMdx___frontmatter___image___gid = 'childMdx___frontmatter___image___gid',
  childMdx___frontmatter___image___id = 'childMdx___frontmatter___image___id',
  childMdx___frontmatter___image___ino = 'childMdx___frontmatter___image___ino',
  childMdx___frontmatter___image___mode = 'childMdx___frontmatter___image___mode',
  childMdx___frontmatter___image___modifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  childMdx___frontmatter___image___mtime = 'childMdx___frontmatter___image___mtime',
  childMdx___frontmatter___image___mtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  childMdx___frontmatter___image___name = 'childMdx___frontmatter___image___name',
  childMdx___frontmatter___image___nlink = 'childMdx___frontmatter___image___nlink',
  childMdx___frontmatter___image___prettySize = 'childMdx___frontmatter___image___prettySize',
  childMdx___frontmatter___image___publicURL = 'childMdx___frontmatter___image___publicURL',
  childMdx___frontmatter___image___rdev = 'childMdx___frontmatter___image___rdev',
  childMdx___frontmatter___image___relativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  childMdx___frontmatter___image___relativePath = 'childMdx___frontmatter___image___relativePath',
  childMdx___frontmatter___image___root = 'childMdx___frontmatter___image___root',
  childMdx___frontmatter___image___size = 'childMdx___frontmatter___image___size',
  childMdx___frontmatter___image___sourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  childMdx___frontmatter___image___uid = 'childMdx___frontmatter___image___uid',
  childMdx___frontmatter___pageName = 'childMdx___frontmatter___pageName',
  childMdx___frontmatter___spoiler = 'childMdx___frontmatter___spoiler',
  childMdx___frontmatter___tags = 'childMdx___frontmatter___tags',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___type = 'childMdx___frontmatter___type',
  childMdx___frontmatter___updated = 'childMdx___frontmatter___updated',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___html = 'childMdx___html',
  childMdx___id = 'childMdx___id',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___slug = 'childMdx___slug',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  children = 'children',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenMdx = 'childrenMdx',
  childrenMdx___body = 'childrenMdx___body',
  childrenMdx___children = 'childrenMdx___children',
  childrenMdx___children___children = 'childrenMdx___children___children',
  childrenMdx___children___children___children = 'childrenMdx___children___children___children',
  childrenMdx___children___children___id = 'childrenMdx___children___children___id',
  childrenMdx___children___id = 'childrenMdx___children___id',
  childrenMdx___children___internal___content = 'childrenMdx___children___internal___content',
  childrenMdx___children___internal___contentDigest = 'childrenMdx___children___internal___contentDigest',
  childrenMdx___children___internal___description = 'childrenMdx___children___internal___description',
  childrenMdx___children___internal___fieldOwners = 'childrenMdx___children___internal___fieldOwners',
  childrenMdx___children___internal___ignoreType = 'childrenMdx___children___internal___ignoreType',
  childrenMdx___children___internal___mediaType = 'childrenMdx___children___internal___mediaType',
  childrenMdx___children___internal___owner = 'childrenMdx___children___internal___owner',
  childrenMdx___children___internal___type = 'childrenMdx___children___internal___type',
  childrenMdx___children___parent___children = 'childrenMdx___children___parent___children',
  childrenMdx___children___parent___id = 'childrenMdx___children___parent___id',
  childrenMdx___excerpt = 'childrenMdx___excerpt',
  childrenMdx___fields___collection = 'childrenMdx___fields___collection',
  childrenMdx___fields___slug = 'childrenMdx___fields___slug',
  childrenMdx___fileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  childrenMdx___frontmatter___date = 'childrenMdx___frontmatter___date',
  childrenMdx___frontmatter___image___absolutePath = 'childrenMdx___frontmatter___image___absolutePath',
  childrenMdx___frontmatter___image___accessTime = 'childrenMdx___frontmatter___image___accessTime',
  childrenMdx___frontmatter___image___atime = 'childrenMdx___frontmatter___image___atime',
  childrenMdx___frontmatter___image___atimeMs = 'childrenMdx___frontmatter___image___atimeMs',
  childrenMdx___frontmatter___image___base = 'childrenMdx___frontmatter___image___base',
  childrenMdx___frontmatter___image___birthTime = 'childrenMdx___frontmatter___image___birthTime',
  childrenMdx___frontmatter___image___birthtime = 'childrenMdx___frontmatter___image___birthtime',
  childrenMdx___frontmatter___image___birthtimeMs = 'childrenMdx___frontmatter___image___birthtimeMs',
  childrenMdx___frontmatter___image___blksize = 'childrenMdx___frontmatter___image___blksize',
  childrenMdx___frontmatter___image___blocks = 'childrenMdx___frontmatter___image___blocks',
  childrenMdx___frontmatter___image___changeTime = 'childrenMdx___frontmatter___image___changeTime',
  childrenMdx___frontmatter___image___children = 'childrenMdx___frontmatter___image___children',
  childrenMdx___frontmatter___image___childrenImageSharp = 'childrenMdx___frontmatter___image___childrenImageSharp',
  childrenMdx___frontmatter___image___childrenMdx = 'childrenMdx___frontmatter___image___childrenMdx',
  childrenMdx___frontmatter___image___ctime = 'childrenMdx___frontmatter___image___ctime',
  childrenMdx___frontmatter___image___ctimeMs = 'childrenMdx___frontmatter___image___ctimeMs',
  childrenMdx___frontmatter___image___dev = 'childrenMdx___frontmatter___image___dev',
  childrenMdx___frontmatter___image___dir = 'childrenMdx___frontmatter___image___dir',
  childrenMdx___frontmatter___image___ext = 'childrenMdx___frontmatter___image___ext',
  childrenMdx___frontmatter___image___extension = 'childrenMdx___frontmatter___image___extension',
  childrenMdx___frontmatter___image___gid = 'childrenMdx___frontmatter___image___gid',
  childrenMdx___frontmatter___image___id = 'childrenMdx___frontmatter___image___id',
  childrenMdx___frontmatter___image___ino = 'childrenMdx___frontmatter___image___ino',
  childrenMdx___frontmatter___image___mode = 'childrenMdx___frontmatter___image___mode',
  childrenMdx___frontmatter___image___modifiedTime = 'childrenMdx___frontmatter___image___modifiedTime',
  childrenMdx___frontmatter___image___mtime = 'childrenMdx___frontmatter___image___mtime',
  childrenMdx___frontmatter___image___mtimeMs = 'childrenMdx___frontmatter___image___mtimeMs',
  childrenMdx___frontmatter___image___name = 'childrenMdx___frontmatter___image___name',
  childrenMdx___frontmatter___image___nlink = 'childrenMdx___frontmatter___image___nlink',
  childrenMdx___frontmatter___image___prettySize = 'childrenMdx___frontmatter___image___prettySize',
  childrenMdx___frontmatter___image___publicURL = 'childrenMdx___frontmatter___image___publicURL',
  childrenMdx___frontmatter___image___rdev = 'childrenMdx___frontmatter___image___rdev',
  childrenMdx___frontmatter___image___relativeDirectory = 'childrenMdx___frontmatter___image___relativeDirectory',
  childrenMdx___frontmatter___image___relativePath = 'childrenMdx___frontmatter___image___relativePath',
  childrenMdx___frontmatter___image___root = 'childrenMdx___frontmatter___image___root',
  childrenMdx___frontmatter___image___size = 'childrenMdx___frontmatter___image___size',
  childrenMdx___frontmatter___image___sourceInstanceName = 'childrenMdx___frontmatter___image___sourceInstanceName',
  childrenMdx___frontmatter___image___uid = 'childrenMdx___frontmatter___image___uid',
  childrenMdx___frontmatter___pageName = 'childrenMdx___frontmatter___pageName',
  childrenMdx___frontmatter___spoiler = 'childrenMdx___frontmatter___spoiler',
  childrenMdx___frontmatter___tags = 'childrenMdx___frontmatter___tags',
  childrenMdx___frontmatter___title = 'childrenMdx___frontmatter___title',
  childrenMdx___frontmatter___type = 'childrenMdx___frontmatter___type',
  childrenMdx___frontmatter___updated = 'childrenMdx___frontmatter___updated',
  childrenMdx___headings = 'childrenMdx___headings',
  childrenMdx___headings___depth = 'childrenMdx___headings___depth',
  childrenMdx___headings___value = 'childrenMdx___headings___value',
  childrenMdx___html = 'childrenMdx___html',
  childrenMdx___id = 'childrenMdx___id',
  childrenMdx___internal___content = 'childrenMdx___internal___content',
  childrenMdx___internal___contentDigest = 'childrenMdx___internal___contentDigest',
  childrenMdx___internal___description = 'childrenMdx___internal___description',
  childrenMdx___internal___fieldOwners = 'childrenMdx___internal___fieldOwners',
  childrenMdx___internal___ignoreType = 'childrenMdx___internal___ignoreType',
  childrenMdx___internal___mediaType = 'childrenMdx___internal___mediaType',
  childrenMdx___internal___owner = 'childrenMdx___internal___owner',
  childrenMdx___internal___type = 'childrenMdx___internal___type',
  childrenMdx___mdxAST = 'childrenMdx___mdxAST',
  childrenMdx___parent___children = 'childrenMdx___parent___children',
  childrenMdx___parent___children___children = 'childrenMdx___parent___children___children',
  childrenMdx___parent___children___id = 'childrenMdx___parent___children___id',
  childrenMdx___parent___id = 'childrenMdx___parent___id',
  childrenMdx___parent___internal___content = 'childrenMdx___parent___internal___content',
  childrenMdx___parent___internal___contentDigest = 'childrenMdx___parent___internal___contentDigest',
  childrenMdx___parent___internal___description = 'childrenMdx___parent___internal___description',
  childrenMdx___parent___internal___fieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  childrenMdx___parent___internal___ignoreType = 'childrenMdx___parent___internal___ignoreType',
  childrenMdx___parent___internal___mediaType = 'childrenMdx___parent___internal___mediaType',
  childrenMdx___parent___internal___owner = 'childrenMdx___parent___internal___owner',
  childrenMdx___parent___internal___type = 'childrenMdx___parent___internal___type',
  childrenMdx___parent___parent___children = 'childrenMdx___parent___parent___children',
  childrenMdx___parent___parent___id = 'childrenMdx___parent___parent___id',
  childrenMdx___rawBody = 'childrenMdx___rawBody',
  childrenMdx___slug = 'childrenMdx___slug',
  childrenMdx___tableOfContents = 'childrenMdx___tableOfContents',
  childrenMdx___timeToRead = 'childrenMdx___timeToRead',
  childrenMdx___wordCount___paragraphs = 'childrenMdx___wordCount___paragraphs',
  childrenMdx___wordCount___sentences = 'childrenMdx___wordCount___sentences',
  childrenMdx___wordCount___words = 'childrenMdx___wordCount___words',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  publicURL = 'publicURL',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
}

export type FileFilterInput = {
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize?: InputMaybe<IntQueryOperatorInput>;
  readonly blocks?: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  readonly childMdx?: InputMaybe<MdxFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenMdx?: InputMaybe<MdxFilterListInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL?: InputMaybe<StringQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Float']>;
  readonly gt?: InputMaybe<Scalars['Float']>;
  readonly gte?: InputMaybe<Scalars['Float']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt?: InputMaybe<Scalars['Float']>;
  readonly lte?: InputMaybe<Scalars['Float']>;
  readonly ne?: InputMaybe<Scalars['Float']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp';
  readonly children: ReadonlyArray<Node>;
  readonly fixed?: Maybe<ImageSharpFixed>;
  readonly fluid?: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original?: Maybe<ImageSharpOriginal>;
  readonly parent?: Maybe<Node>;
  readonly resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
}

export type ImageSharpFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly original?: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed';
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly base64?: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName?: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid';
  readonly aspectRatio: Scalars['Float'];
  readonly base64?: Maybe<Scalars['String']>;
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg?: InputMaybe<StringQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  readonly sizes?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal';
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize';
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly height?: InputMaybe<IntQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly ne?: InputMaybe<Scalars['Int']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
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
  readonly content?: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType?: InputMaybe<StringQueryOperatorInput>;
  readonly owner?: InputMaybe<StringQueryOperatorInput>;
  readonly type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  readonly progressive?: InputMaybe<Scalars['Boolean']>;
  readonly quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['JSON']>;
  readonly glob?: InputMaybe<Scalars['JSON']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne?: InputMaybe<Scalars['JSON']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex?: InputMaybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  readonly __typename?: 'Mdx';
  readonly body: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Scalars['String'];
  readonly fields: MdxFields;
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: MdxFrontmatter;
  readonly headings?: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mdxAST?: Maybe<Scalars['JSON']>;
  readonly parent?: Maybe<Node>;
  readonly rawBody: Scalars['String'];
  readonly slug?: Maybe<Scalars['String']>;
  readonly tableOfContents?: Maybe<Scalars['JSON']>;
  readonly timeToRead?: Maybe<Scalars['Int']>;
  readonly wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  readonly __typename?: 'MdxConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type MdxEdge = {
  readonly __typename?: 'MdxEdge';
  readonly next?: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous?: Maybe<Mdx>;
};

export type MdxFields = {
  readonly __typename?: 'MdxFields';
  readonly collection?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
};

export enum MdxFieldsEnum {
  body = 'body',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  excerpt = 'excerpt',
  fields___collection = 'fields___collection',
  fields___slug = 'fields___slug',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___date = 'frontmatter___date',
  frontmatter___image___absolutePath = 'frontmatter___image___absolutePath',
  frontmatter___image___accessTime = 'frontmatter___image___accessTime',
  frontmatter___image___atime = 'frontmatter___image___atime',
  frontmatter___image___atimeMs = 'frontmatter___image___atimeMs',
  frontmatter___image___base = 'frontmatter___image___base',
  frontmatter___image___birthTime = 'frontmatter___image___birthTime',
  frontmatter___image___birthtime = 'frontmatter___image___birthtime',
  frontmatter___image___birthtimeMs = 'frontmatter___image___birthtimeMs',
  frontmatter___image___blksize = 'frontmatter___image___blksize',
  frontmatter___image___blocks = 'frontmatter___image___blocks',
  frontmatter___image___changeTime = 'frontmatter___image___changeTime',
  frontmatter___image___childImageSharp___children = 'frontmatter___image___childImageSharp___children',
  frontmatter___image___childImageSharp___gatsbyImageData = 'frontmatter___image___childImageSharp___gatsbyImageData',
  frontmatter___image___childImageSharp___id = 'frontmatter___image___childImageSharp___id',
  frontmatter___image___childMdx___body = 'frontmatter___image___childMdx___body',
  frontmatter___image___childMdx___children = 'frontmatter___image___childMdx___children',
  frontmatter___image___childMdx___excerpt = 'frontmatter___image___childMdx___excerpt',
  frontmatter___image___childMdx___fileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  frontmatter___image___childMdx___headings = 'frontmatter___image___childMdx___headings',
  frontmatter___image___childMdx___html = 'frontmatter___image___childMdx___html',
  frontmatter___image___childMdx___id = 'frontmatter___image___childMdx___id',
  frontmatter___image___childMdx___mdxAST = 'frontmatter___image___childMdx___mdxAST',
  frontmatter___image___childMdx___rawBody = 'frontmatter___image___childMdx___rawBody',
  frontmatter___image___childMdx___slug = 'frontmatter___image___childMdx___slug',
  frontmatter___image___childMdx___tableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  frontmatter___image___childMdx___timeToRead = 'frontmatter___image___childMdx___timeToRead',
  frontmatter___image___children = 'frontmatter___image___children',
  frontmatter___image___childrenImageSharp = 'frontmatter___image___childrenImageSharp',
  frontmatter___image___childrenImageSharp___children = 'frontmatter___image___childrenImageSharp___children',
  frontmatter___image___childrenImageSharp___gatsbyImageData = 'frontmatter___image___childrenImageSharp___gatsbyImageData',
  frontmatter___image___childrenImageSharp___id = 'frontmatter___image___childrenImageSharp___id',
  frontmatter___image___childrenMdx = 'frontmatter___image___childrenMdx',
  frontmatter___image___childrenMdx___body = 'frontmatter___image___childrenMdx___body',
  frontmatter___image___childrenMdx___children = 'frontmatter___image___childrenMdx___children',
  frontmatter___image___childrenMdx___excerpt = 'frontmatter___image___childrenMdx___excerpt',
  frontmatter___image___childrenMdx___fileAbsolutePath = 'frontmatter___image___childrenMdx___fileAbsolutePath',
  frontmatter___image___childrenMdx___headings = 'frontmatter___image___childrenMdx___headings',
  frontmatter___image___childrenMdx___html = 'frontmatter___image___childrenMdx___html',
  frontmatter___image___childrenMdx___id = 'frontmatter___image___childrenMdx___id',
  frontmatter___image___childrenMdx___mdxAST = 'frontmatter___image___childrenMdx___mdxAST',
  frontmatter___image___childrenMdx___rawBody = 'frontmatter___image___childrenMdx___rawBody',
  frontmatter___image___childrenMdx___slug = 'frontmatter___image___childrenMdx___slug',
  frontmatter___image___childrenMdx___tableOfContents = 'frontmatter___image___childrenMdx___tableOfContents',
  frontmatter___image___childrenMdx___timeToRead = 'frontmatter___image___childrenMdx___timeToRead',
  frontmatter___image___children___children = 'frontmatter___image___children___children',
  frontmatter___image___children___id = 'frontmatter___image___children___id',
  frontmatter___image___ctime = 'frontmatter___image___ctime',
  frontmatter___image___ctimeMs = 'frontmatter___image___ctimeMs',
  frontmatter___image___dev = 'frontmatter___image___dev',
  frontmatter___image___dir = 'frontmatter___image___dir',
  frontmatter___image___ext = 'frontmatter___image___ext',
  frontmatter___image___extension = 'frontmatter___image___extension',
  frontmatter___image___gid = 'frontmatter___image___gid',
  frontmatter___image___id = 'frontmatter___image___id',
  frontmatter___image___ino = 'frontmatter___image___ino',
  frontmatter___image___internal___content = 'frontmatter___image___internal___content',
  frontmatter___image___internal___contentDigest = 'frontmatter___image___internal___contentDigest',
  frontmatter___image___internal___description = 'frontmatter___image___internal___description',
  frontmatter___image___internal___fieldOwners = 'frontmatter___image___internal___fieldOwners',
  frontmatter___image___internal___ignoreType = 'frontmatter___image___internal___ignoreType',
  frontmatter___image___internal___mediaType = 'frontmatter___image___internal___mediaType',
  frontmatter___image___internal___owner = 'frontmatter___image___internal___owner',
  frontmatter___image___internal___type = 'frontmatter___image___internal___type',
  frontmatter___image___mode = 'frontmatter___image___mode',
  frontmatter___image___modifiedTime = 'frontmatter___image___modifiedTime',
  frontmatter___image___mtime = 'frontmatter___image___mtime',
  frontmatter___image___mtimeMs = 'frontmatter___image___mtimeMs',
  frontmatter___image___name = 'frontmatter___image___name',
  frontmatter___image___nlink = 'frontmatter___image___nlink',
  frontmatter___image___parent___children = 'frontmatter___image___parent___children',
  frontmatter___image___parent___id = 'frontmatter___image___parent___id',
  frontmatter___image___prettySize = 'frontmatter___image___prettySize',
  frontmatter___image___publicURL = 'frontmatter___image___publicURL',
  frontmatter___image___rdev = 'frontmatter___image___rdev',
  frontmatter___image___relativeDirectory = 'frontmatter___image___relativeDirectory',
  frontmatter___image___relativePath = 'frontmatter___image___relativePath',
  frontmatter___image___root = 'frontmatter___image___root',
  frontmatter___image___size = 'frontmatter___image___size',
  frontmatter___image___sourceInstanceName = 'frontmatter___image___sourceInstanceName',
  frontmatter___image___uid = 'frontmatter___image___uid',
  frontmatter___pageName = 'frontmatter___pageName',
  frontmatter___spoiler = 'frontmatter___spoiler',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___title = 'frontmatter___title',
  frontmatter___type = 'frontmatter___type',
  frontmatter___updated = 'frontmatter___updated',
  headings = 'headings',
  headings___depth = 'headings___depth',
  headings___value = 'headings___value',
  html = 'html',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mdxAST = 'mdxAST',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  rawBody = 'rawBody',
  slug = 'slug',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export type MdxFieldsFilterInput = {
  readonly collection?: InputMaybe<StringQueryOperatorInput>;
  readonly slug?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  readonly body?: InputMaybe<StringQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly excerpt?: InputMaybe<StringQueryOperatorInput>;
  readonly fields?: InputMaybe<MdxFieldsFilterInput>;
  readonly fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  readonly headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  readonly html?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly rawBody?: InputMaybe<StringQueryOperatorInput>;
  readonly slug?: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  readonly timeToRead?: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  readonly elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly __typename?: 'MdxFrontmatter';
  readonly date: Scalars['Date'];
  readonly image?: Maybe<File>;
  readonly pageName?: Maybe<Scalars['String']>;
  readonly spoiler?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly title: Scalars['String'];
  readonly type?: Maybe<Scalars['String']>;
  readonly updated?: Maybe<Scalars['Date']>;
};

export type MdxFrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterUpdatedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  readonly date?: InputMaybe<DateQueryOperatorInput>;
  readonly image?: InputMaybe<FileFilterInput>;
  readonly pageName?: InputMaybe<StringQueryOperatorInput>;
  readonly spoiler?: InputMaybe<StringQueryOperatorInput>;
  readonly tags?: InputMaybe<StringQueryOperatorInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
  readonly type?: InputMaybe<StringQueryOperatorInput>;
  readonly updated?: InputMaybe<DateQueryOperatorInput>;
};

export type MdxGroupConnection = {
  readonly __typename?: 'MdxGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  readonly __typename?: 'MdxHeadingMdx';
  readonly depth?: Maybe<Scalars['Int']>;
  readonly value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  readonly depth?: InputMaybe<IntQueryOperatorInput>;
  readonly value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<MdxFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  readonly __typename?: 'MdxWordCount';
  readonly paragraphs?: Maybe<Scalars['Int']>;
  readonly sentences?: Maybe<Scalars['Int']>;
  readonly words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  readonly paragraphs?: InputMaybe<IntQueryOperatorInput>;
  readonly sentences?: InputMaybe<IntQueryOperatorInput>;
  readonly words?: InputMaybe<IntQueryOperatorInput>;
};

export type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  readonly compressionSpeed?: InputMaybe<Scalars['Int']>;
  readonly quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type Potrace = {
  readonly alphaMax?: InputMaybe<Scalars['Float']>;
  readonly background?: InputMaybe<Scalars['String']>;
  readonly blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  readonly color?: InputMaybe<Scalars['String']>;
  readonly optCurve?: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance?: InputMaybe<Scalars['Float']>;
  readonly threshold?: InputMaybe<Scalars['Int']>;
  readonly turdSize?: InputMaybe<Scalars['Float']>;
  readonly turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMdx: MdxConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly directory?: Maybe<Directory>;
  readonly file?: Maybe<File>;
  readonly imageSharp?: Maybe<ImageSharp>;
  readonly mdx?: Maybe<Mdx>;
  readonly site?: Maybe<Site>;
  readonly siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  readonly siteFunction?: Maybe<SiteFunction>;
  readonly sitePage?: Maybe<SitePage>;
  readonly sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly host?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime?: Maybe<Scalars['String']>;
  readonly parent?: Maybe<Node>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly siteMetadata?: Maybe<SiteSiteMetadata>;
  readonly trailingSlash?: Maybe<Scalars['String']>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  readonly __typename?: 'SiteBuildMetadata';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataEdge = {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next?: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteEdge = {
  readonly __typename?: 'SiteEdge';
  readonly next?: Maybe<Site>;
  readonly node: Site;
  readonly previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteLanguage = 'siteMetadata___siteLanguage',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___title = 'siteMetadata___title',
  trailingSlash = 'trailingSlash',
}

export type SiteFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly host?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  readonly port?: InputMaybe<IntQueryOperatorInput>;
  readonly siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  readonly __typename?: 'SiteFunction';
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent?: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  readonly __typename?: 'SiteFunctionConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionEdge = {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next?: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly functionRoute?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pluginName?: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage';
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly pageContext?: Maybe<Scalars['JSON']>;
  readonly parent?: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge';
  readonly next?: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly component?: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext?: InputMaybe<JsonQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly path?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin';
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name?: Maybe<Scalars['String']>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson?: Maybe<Scalars['JSON']>;
  readonly parent?: Maybe<Node>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<Scalars['JSON']>;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge';
  readonly next?: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version',
}

export type SitePluginFilterInput = {
  readonly browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson?: InputMaybe<JsonQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  readonly resolve?: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  readonly __typename?: 'SiteSiteMetadata';
  readonly description?: Maybe<Scalars['String']>;
  readonly siteLanguage?: Maybe<Scalars['String']>;
  readonly siteUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly siteLanguage?: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl?: InputMaybe<StringQueryOperatorInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['String']>;
  readonly glob?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne?: InputMaybe<Scalars['String']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  readonly cropFocus?: InputMaybe<ImageCropFocus>;
  readonly duotone?: InputMaybe<DuotoneGradient>;
  readonly fit?: InputMaybe<ImageFit>;
  readonly grayscale?: InputMaybe<Scalars['Boolean']>;
  readonly rotate?: InputMaybe<Scalars['Int']>;
  readonly trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  readonly quality?: InputMaybe<Scalars['Int']>;
};

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never }>;

export type NotFoundPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: { readonly __typename?: 'Mdx'; readonly body: string } | null;
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
        readonly excerpt: string;
        readonly frontmatter: {
          readonly __typename?: 'MdxFrontmatter';
          readonly title: string;
          readonly date: any;
          readonly spoiler?: string | null;
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
  readonly mdx?: { readonly __typename?: 'Mdx'; readonly id: string; readonly body: string } | null;
};

export type TypographyPageQueryVariables = Exact<{ [key: string]: never }>;

export type TypographyPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: { readonly __typename?: 'Mdx'; readonly body: string } | null;
};

export type UsesPageQueryVariables = Exact<{ [key: string]: never }>;

export type UsesPageQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: {
    readonly __typename?: 'Mdx';
    readonly body: string;
    readonly frontmatter: {
      readonly __typename?: 'MdxFrontmatter';
      readonly image?: {
        readonly __typename?: 'File';
        readonly childImageSharp?: {
          readonly __typename?: 'ImageSharp';
          readonly resize?: {
            readonly __typename?: 'ImageSharpResize';
            readonly src?: string | null;
            readonly width?: number | null;
            readonly height?: number | null;
          } | null;
        } | null;
      } | null;
    };
  } | null;
};

export type PostDetailsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type PostDetailsQuery = {
  readonly __typename?: 'Query';
  readonly mdx?: {
    readonly __typename?: 'Mdx';
    readonly body: string;
    readonly excerpt: string;
    readonly fields: { readonly __typename?: 'MdxFields'; readonly slug: string };
    readonly frontmatter: {
      readonly __typename?: 'MdxFrontmatter';
      readonly title: string;
      readonly date: any;
      readonly spoiler?: string | null;
      readonly tags?: ReadonlyArray<string> | null;
      readonly pubDate: any;
      readonly image?: {
        readonly __typename?: 'File';
        readonly childImageSharp?: {
          readonly __typename?: 'ImageSharp';
          readonly resize?: {
            readonly __typename?: 'ImageSharpResize';
            readonly src?: string | null;
            readonly width?: number | null;
            readonly height?: number | null;
          } | null;
        } | null;
      } | null;
    };
  } | null;
};

export type TagArticlesQueryVariables = Exact<{
  tag?: InputMaybe<Scalars['String']>;
}>;

export type TagArticlesQuery = {
  readonly __typename?: 'Query';
  readonly posts: {
    readonly __typename?: 'MdxConnection';
    readonly totalCount: number;
    readonly edges: ReadonlyArray<{
      readonly __typename?: 'MdxEdge';
      readonly node: {
        readonly __typename?: 'Mdx';
        readonly id: string;
        readonly excerpt: string;
        readonly frontmatter: {
          readonly __typename?: 'MdxFrontmatter';
          readonly title: string;
          readonly spoiler?: string | null;
        };
        readonly fields: { readonly __typename?: 'MdxFields'; readonly slug: string };
      };
    }>;
  };
};
