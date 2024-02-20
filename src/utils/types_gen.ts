export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type IGenAsset = {
  __typename: "Asset";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars["String"]>;
  blurHash?: Maybe<Scalars["String"]>;
  copyright?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dominantColor?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  originType?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type IGenAsset_Connection = {
  __typename: "Asset_Connection";
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenAsset_ConnectionEdge = {
  __typename: "Asset_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_CreateInput = {
  author?: InputMaybe<Scalars["String"]>;
  blurHash?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type IGenAsset_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Nested_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  blurHash?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  height?: InputMaybe<IGenCaisyField_Number_WhereInt>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  width?: InputMaybe<IGenCaisyField_Number_WhereInt>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  blurHash?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  height?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  width?: InputMaybe<IGenOrder>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  blurHash?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  blurHash?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  height?: InputMaybe<IGenCaisyField_Number_WhereInt>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  width?: InputMaybe<IGenCaisyField_Number_WhereInt>;
};

export type IGenCaisyDocument_Meta = {
  __typename: "CaisyDocument_Meta";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_Number_WhereInt = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename: "Caisy_Field_Document_NotFound";
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
};

export type IGenCaisy_Field_Tag = {
  __typename: "Caisy_Field_Tag";
  color?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type IGenCompBrandCategory = {
  __typename: "CompBrandCategory";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_Connection = {
  __typename: "CompBrandCategory_Connection";
  edges?: Maybe<Array<Maybe<IGenCompBrandCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompBrandCategory_ConnectionEdge = {
  __typename: "CompBrandCategory_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompBrandCategory>;
};

export type IGenCompBrandCategory_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Nested_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompBrandCategory_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompBrandCategory_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompButton = {
  __typename: "CompButton";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  link?: Maybe<Array<Maybe<IGenCompButton_Link>>>;
  style?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompButtonLinkArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButtonExternalLinks = {
  __typename: "CompButtonExternalLinks";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  style?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type IGenCompButtonExternalLinks_Connection = {
  __typename: "CompButtonExternalLinks_Connection";
  edges?: Maybe<Array<Maybe<IGenCompButtonExternalLinks_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompButtonExternalLinks_ConnectionEdge = {
  __typename: "CompButtonExternalLinks_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompButtonExternalLinks>;
};

export type IGenCompButtonExternalLinks_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<IGenCompButtonExternalLinks_Style>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButtonExternalLinks_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Nested_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompButtonExternalLinks_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  url?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompButtonExternalLinks_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  url?: InputMaybe<IGenOrder>;
};

export enum IGenCompButtonExternalLinks_Style {
  Inverted = "Inverted",
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
}

export type IGenCompButtonExternalLinks_Style_Where = {
  eq?: InputMaybe<IGenCompButtonExternalLinks_Style>;
};

export type IGenCompButtonExternalLinks_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<IGenCompButtonExternalLinks_Style>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButtonExternalLinks_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompButtonExternalLinks_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  url?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompButton_Connection = {
  __typename: "CompButton_Connection";
  edges?: Maybe<Array<Maybe<IGenCompButton_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompButton_ConnectionEdge = {
  __typename: "CompButton_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompButton>;
};

export type IGenCompButton_CreateInput = {
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<IGenCompButton_Style>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButton_Link_Where = {
  findOne?: InputMaybe<IGenCompButton_Link_WhereConnection>;
};

export type IGenCompButton_Link_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenCompButton_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompButton_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButton_Nested_Where>>>;
  style?: InputMaybe<IGenCompButton_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompButton_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  link?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export enum IGenCompButton_Style {
  Inverted = "Inverted",
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
}

export type IGenCompButton_Style_Where = {
  eq?: InputMaybe<IGenCompButton_Style>;
};

export type IGenCompButton_UpdateInput = {
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<IGenCompButton_Style>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButton_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
  link?: InputMaybe<IGenCompButton_Link_Where>;
  style?: InputMaybe<IGenCompButton_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompButton_Link = IGenPage;

export type IGenCompFacts = {
  __typename: "CompFacts";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  facts?: Maybe<Array<Maybe<IGenCompFacts_Facts>>>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompFactsFactsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFactsFact = {
  __typename: "CompFactsFact";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type IGenCompFactsFact_Connection = {
  __typename: "CompFactsFact_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFactsFact_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFactsFact_ConnectionEdge = {
  __typename: "CompFactsFact_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFactsFact>;
};

export type IGenCompFactsFact_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Nested_Where>>>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFactsFact_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  label?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  value?: InputMaybe<IGenOrder>;
};

export type IGenCompFactsFact_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFacts_Connection = {
  __typename: "CompFacts_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFacts_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFacts_ConnectionEdge = {
  __typename: "CompFacts_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFacts>;
};

export type IGenCompFacts_Facts_Where = {
  findOne?: InputMaybe<IGenCompFacts_Facts_WhereConnection>;
};

export type IGenCompFacts_Facts_WhereConnection = {
  CompFactsFact?: InputMaybe<IGenCompFactsFact_Nested_Where>;
};

export type IGenCompFacts_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFacts_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFacts_Nested_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFacts_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  facts?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompFacts_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  facts?: InputMaybe<IGenCompFacts_Facts_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFacts_Facts = IGenCompFactsFact;

export type IGenCompFaq = {
  __typename: "CompFaq";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  faqItems?: Maybe<Array<Maybe<IGenCompFaq_FaqItems>>>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompFaqFaqItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaqItem = {
  __typename: "CompFaqItem";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<IGenCompFaqItem_Description>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompFaqItemDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaqItem_Connection = {
  __typename: "CompFaqItem_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFaqItem_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFaqItem_ConnectionEdge = {
  __typename: "CompFaqItem_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFaqItem>;
};

export type IGenCompFaqItem_CreateInput = {
  description?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaqItem_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Nested_Where>>>;
  description?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFaqItem_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompFaqItem_UpdateInput = {
  description?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaqItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
  description?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFaqItem_Description = {
  __typename: "CompFaqItem_description";
  connections?: Maybe<Array<Maybe<IGenCompFaqItem_Description_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenCompFaqItem_DescriptionConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaqItem_Description_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenCompFaq_Connection = {
  __typename: "CompFaq_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFaq_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFaq_ConnectionEdge = {
  __typename: "CompFaq_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFaq>;
};

export type IGenCompFaq_FaqItems_Where = {
  findOne?: InputMaybe<IGenCompFaq_FaqItems_WhereConnection>;
};

export type IGenCompFaq_FaqItems_WhereConnection = {
  CompFaqItem?: InputMaybe<IGenCompFaqItem_Nested_Where>;
};

export type IGenCompFaq_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaq_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaq_Nested_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFaq_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  faqItems?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompFaq_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  faqItems?: InputMaybe<IGenCompFaq_FaqItems_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFaq_FaqItems = IGenCompFaqItem;

export type IGenCompFooterSection = {
  __typename: "CompFooterSection";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  links?: Maybe<Array<Maybe<IGenCompFooterSection_Links>>>;
  sectionTitle?: Maybe<Scalars["String"]>;
};

export type IGenCompFooterSectionLinksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFooterSection_Connection = {
  __typename: "CompFooterSection_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFooterSection_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFooterSection_ConnectionEdge = {
  __typename: "CompFooterSection_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFooterSection>;
};

export type IGenCompFooterSection_CreateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectionTitle?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFooterSection_Links_Where = {
  findOne?: InputMaybe<IGenCompFooterSection_Links_WhereConnection>;
};

export type IGenCompFooterSection_Links_WhereConnection = {
  CompButton?: InputMaybe<IGenCompButton_Nested_Where>;
  CompButtonExternalLinks?: InputMaybe<IGenCompButtonExternalLinks_Nested_Where>;
};

export type IGenCompFooterSection_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  links?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  sectionTitle?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompFooterSection_UpdateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectionTitle?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFooterSection_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
  links?: InputMaybe<IGenCompFooterSection_Links_Where>;
  sectionTitle?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFooterSection_Links =
  | IGenCompButton
  | IGenCompButtonExternalLinks;

export type IGenCompGrid = {
  __typename: "CompGrid";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  items?: Maybe<Array<Maybe<IGenCompGrid_Items>>>;
  numberOfColumns?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompGridItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard = {
  __typename: "CompGridBrandCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  category?: Maybe<Array<Maybe<IGenCompGridBrandCard_Category>>>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  linksTo?: Maybe<Scalars["String"]>;
  logo?: Maybe<IGenAsset>;
  name?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardCategoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardLogoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard_Category_Where = {
  findOne?: InputMaybe<IGenCompGridBrandCard_Category_WhereConnection>;
};

export type IGenCompGridBrandCard_Category_WhereConnection = {
  CompBrandCategory?: InputMaybe<IGenCompBrandCategory_Nested_Where>;
};

export type IGenCompGridBrandCard_Connection = {
  __typename: "CompGridBrandCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGridBrandCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGridBrandCard_ConnectionEdge = {
  __typename: "CompGridBrandCard_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGridBrandCard>;
};

export type IGenCompGridBrandCard_Logo_Where = {
  findOne?: InputMaybe<IGenCompGridBrandCard_Logo_WhereConnection>;
};

export type IGenCompGridBrandCard_Logo_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompGridBrandCard_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Nested_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  linksTo?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompGridBrandCard_Style_Where>;
};

export type IGenCompGridBrandCard_Sort = {
  category?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  linksTo?: InputMaybe<IGenOrder>;
  logo?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export enum IGenCompGridBrandCard_Style {
  JustLogo = "justLogo",
  WithDescription = "withDescription",
}

export type IGenCompGridBrandCard_Style_Where = {
  eq?: InputMaybe<IGenCompGridBrandCard_Style>;
};

export type IGenCompGridBrandCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  category?: InputMaybe<IGenCompGridBrandCard_Category_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  linksTo?: InputMaybe<IGenCaisyField_String_Where>;
  logo?: InputMaybe<IGenCompGridBrandCard_Logo_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompGridBrandCard_Style_Where>;
};

export type IGenCompGridBrandCard_Category = IGenCompBrandCategory;

export type IGenCompGridTeamMemberCard = {
  __typename: "CompGridTeamMemberCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<IGenAsset>;
  jobTitle?: Maybe<Scalars["String"]>;
  linkToLinkedInProfile?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCardImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCard_Connection = {
  __typename: "CompGridTeamMemberCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGridTeamMemberCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGridTeamMemberCard_ConnectionEdge = {
  __typename: "CompGridTeamMemberCard_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGridTeamMemberCard>;
};

export type IGenCompGridTeamMemberCard_Image_Where = {
  findOne?: InputMaybe<IGenCompGridTeamMemberCard_Image_WhereConnection>;
};

export type IGenCompGridTeamMemberCard_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompGridTeamMemberCard_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Nested_Where>>>;
  jobTitle?: InputMaybe<IGenCaisyField_String_Where>;
  linkToLinkedInProfile?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompGridTeamMemberCard_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  jobTitle?: InputMaybe<IGenOrder>;
  linkToLinkedInProfile?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompGridTeamMemberCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  image?: InputMaybe<IGenCompGridTeamMemberCard_Image_Where>;
  jobTitle?: InputMaybe<IGenCaisyField_String_Where>;
  linkToLinkedInProfile?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompGrid_Connection = {
  __typename: "CompGrid_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGrid_ConnectionEdge = {
  __typename: "CompGrid_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGrid>;
};

export type IGenCompGrid_Items_Where = {
  findOne?: InputMaybe<IGenCompGrid_Items_WhereConnection>;
};

export type IGenCompGrid_Items_WhereConnection = {
  CompGridBrandCard?: InputMaybe<IGenCompGridBrandCard_Nested_Where>;
  CompGridTeamMemberCard?: InputMaybe<IGenCompGridTeamMemberCard_Nested_Where>;
};

export type IGenCompGrid_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGrid_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGrid_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export enum IGenCompGrid_NumberOfColumns {
  Use2ColumnsToCenter = "Use2ColumnsToCenter",
  Use3Columns = "Use3Columns",
  Use4Columns = "Use4Columns",
}

export type IGenCompGrid_NumberOfColumns_Where = {
  eq?: InputMaybe<IGenCompGrid_NumberOfColumns>;
};

export type IGenCompGrid_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  items?: InputMaybe<IGenOrder>;
  numberOfColumns?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  items?: InputMaybe<IGenCompGrid_Items_Where>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompGrid_Items =
  | IGenCompGridBrandCard
  | IGenCompGridTeamMemberCard;

export type IGenCompHeroSlider = {
  __typename: "CompHeroSlider";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  slides?: Maybe<Array<Maybe<IGenCompHeroSlider_Slides>>>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide = {
  __typename: "CompHeroSliderSlide";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  backgroundImage?: Maybe<
    Array<Maybe<IGenCompHeroSliderSlide_BackgroundImage>>
  >;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  text?: Maybe<IGenCompHeroSliderSlide_Text>;
};

export type IGenCompHeroSliderSlideBackgroundImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlideTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide_BackgroundImage_Where = {
  findOne?: InputMaybe<IGenCompHeroSliderSlide_BackgroundImage_WhereConnection>;
};

export type IGenCompHeroSliderSlide_BackgroundImage_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompHeroSliderSlide_Connection = {
  __typename: "CompHeroSliderSlide_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSliderSlide_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSliderSlide_ConnectionEdge = {
  __typename: "CompHeroSliderSlide_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompHeroSliderSlide>;
};

export type IGenCompHeroSliderSlide_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenCompHeroSliderSlide_Sort = {
  backgroundImage?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompHeroSliderSlide_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  backgroundImage?: InputMaybe<IGenCompHeroSliderSlide_BackgroundImage_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenCompHeroSliderSlide_BackgroundImage = IGenAsset;

export type IGenCompHeroSliderSlide_Text = {
  __typename: "CompHeroSliderSlide_text";
  connections?: Maybe<Array<Maybe<IGenCompHeroSliderSlide_Text_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenCompHeroSliderSlide_TextConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide_Text_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenCompHeroSlider_Connection = {
  __typename: "CompHeroSlider_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSlider_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSlider_ConnectionEdge = {
  __typename: "CompHeroSlider_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompHeroSlider>;
};

export type IGenCompHeroSlider_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Nested_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompHeroSlider_Slides_Where = {
  findOne?: InputMaybe<IGenCompHeroSlider_Slides_WhereConnection>;
};

export type IGenCompHeroSlider_Slides_WhereConnection = {
  CompHeroSliderSlide?: InputMaybe<IGenCompHeroSliderSlide_Nested_Where>;
};

export type IGenCompHeroSlider_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  slides?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompHeroSlider_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  slides?: InputMaybe<IGenCompHeroSlider_Slides_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompHeroSlider_Slides = IGenCompHeroSliderSlide;

export type IGenCompImageCard = {
  __typename: "CompImageCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<IGenAsset>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompImageCardImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageCard_Connection = {
  __typename: "CompImageCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompImageCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompImageCard_ConnectionEdge = {
  __typename: "CompImageCard_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompImageCard>;
};

export type IGenCompImageCard_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageCard_Image_Where = {
  findOne?: InputMaybe<IGenCompImageCard_Image_WhereConnection>;
};

export type IGenCompImageCard_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompImageCard_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompImageCard_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  image?: InputMaybe<IGenCompImageCard_Image_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompImageWithText = {
  __typename: "CompImageWithText";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  asset?: Maybe<Array<Maybe<IGenCompImageWithText_Asset>>>;
  buttons?: Maybe<Array<Maybe<IGenCompImageWithText_Buttons>>>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  imageRightInsteadOfLeft?: Maybe<Scalars["Boolean"]>;
  strap?: Maybe<Scalars["String"]>;
  text?: Maybe<IGenCompImageWithText_Text>;
};

export type IGenCompImageWithTextAssetArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextButtonsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithText_Asset_Where = {
  findOne?: InputMaybe<IGenCompImageWithText_Asset_WhereConnection>;
};

export type IGenCompImageWithText_Asset_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompImageWithText_Buttons_Where = {
  findOne?: InputMaybe<IGenCompImageWithText_Buttons_WhereConnection>;
};

export type IGenCompImageWithText_Buttons_WhereConnection = {
  CompButton?: InputMaybe<IGenCompButton_Nested_Where>;
  CompButtonExternalLinks?: InputMaybe<IGenCompButtonExternalLinks_Nested_Where>;
};

export type IGenCompImageWithText_Connection = {
  __typename: "CompImageWithText_Connection";
  edges?: Maybe<Array<Maybe<IGenCompImageWithText_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompImageWithText_ConnectionEdge = {
  __typename: "CompImageWithText_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompImageWithText>;
};

export type IGenCompImageWithText_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenCompImageWithText_Sort = {
  asset?: InputMaybe<IGenOrder>;
  buttons?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  imageRightInsteadOfLeft?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  strap?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompImageWithText_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  asset?: InputMaybe<IGenCompImageWithText_Asset_Where>;
  buttons?: InputMaybe<IGenCompImageWithText_Buttons_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenCompImageWithText_Asset = IGenAsset;

export type IGenCompImageWithText_Buttons =
  | IGenCompButton
  | IGenCompButtonExternalLinks;

export type IGenCompImageWithText_Text = {
  __typename: "CompImageWithText_text";
  connections?: Maybe<Array<Maybe<IGenCompImageWithText_Text_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenCompImageWithText_TextConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithText_Text_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenCompPageHeader = {
  __typename: "CompPageHeader";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  backgroundImage?: Maybe<Array<Maybe<IGenCompPageHeader_BackgroundImage>>>;
  backgroundVideo?: Maybe<IGenVideo>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type IGenCompPageHeaderBackgroundImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeaderBackgroundVideoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeader_BackgroundImage_Where = {
  findOne?: InputMaybe<IGenCompPageHeader_BackgroundImage_WhereConnection>;
};

export type IGenCompPageHeader_BackgroundImage_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompPageHeader_BackgroundVideo_Where = {
  findOne?: InputMaybe<IGenCompPageHeader_BackgroundVideo_WhereConnection>;
};

export type IGenCompPageHeader_BackgroundVideo_WhereConnection = {
  Video?: InputMaybe<IGenVideo_Nested_Where>;
};

export type IGenCompPageHeader_Connection = {
  __typename: "CompPageHeader_Connection";
  edges?: Maybe<Array<Maybe<IGenCompPageHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompPageHeader_ConnectionEdge = {
  __typename: "CompPageHeader_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompPageHeader>;
};

export type IGenCompPageHeader_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompPageHeader_Sort = {
  backgroundImage?: InputMaybe<IGenOrder>;
  backgroundVideo?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompPageHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  backgroundImage?: InputMaybe<IGenCompPageHeader_BackgroundImage_Where>;
  backgroundVideo?: InputMaybe<IGenCompPageHeader_BackgroundVideo_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompPageHeader_BackgroundImage = IGenAsset;

export type IGenCompSectionHeader = {
  __typename: "CompSectionHeader";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Array<Maybe<IGenCompSectionHeader_Image>>>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompSectionHeaderImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompSectionHeader_Connection = {
  __typename: "CompSectionHeader_Connection";
  edges?: Maybe<Array<Maybe<IGenCompSectionHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompSectionHeader_ConnectionEdge = {
  __typename: "CompSectionHeader_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompSectionHeader>;
};

export type IGenCompSectionHeader_Image_Where = {
  findOne?: InputMaybe<IGenCompSectionHeader_Image_WhereConnection>;
};

export type IGenCompSectionHeader_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenCompSectionHeader_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Nested_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompSectionHeader_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompSectionHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  image?: InputMaybe<IGenCompSectionHeader_Image_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompSectionHeader_Image = IGenAsset;

export type IGenCompTextBlock = {
  __typename: "CompTextBlock";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttons?: Maybe<Array<Maybe<IGenCompTextBlock_Buttons>>>;
  id?: Maybe<Scalars["ID"]>;
  text?: Maybe<IGenCompTextBlock_Text>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompTextBlockButtonsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlockTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Buttons_Where = {
  findOne?: InputMaybe<IGenCompTextBlock_Buttons_WhereConnection>;
};

export type IGenCompTextBlock_Buttons_WhereConnection = {
  CompButton?: InputMaybe<IGenCompButton_Nested_Where>;
  CompButtonExternalLinks?: InputMaybe<IGenCompButtonExternalLinks_Nested_Where>;
};

export type IGenCompTextBlock_Connection = {
  __typename: "CompTextBlock_Connection";
  edges?: Maybe<Array<Maybe<IGenCompTextBlock_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompTextBlock_ConnectionEdge = {
  __typename: "CompTextBlock_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompTextBlock>;
};

export type IGenCompTextBlock_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Nested_Where>>>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompTextBlock_Sort = {
  buttons?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenCompTextBlock_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  buttons?: InputMaybe<IGenCompTextBlock_Buttons_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompTextBlock_Buttons =
  | IGenCompButton
  | IGenCompButtonExternalLinks;

export type IGenCompTextBlock_Text = {
  __typename: "CompTextBlock_text";
  connections?: Maybe<Array<Maybe<IGenCompTextBlock_Text_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenCompTextBlock_TextConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Text_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenFooter = {
  __typename: "Footer";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  legalSection?: Maybe<Array<Maybe<IGenFooter_LegalSection>>>;
  sections?: Maybe<Array<Maybe<IGenFooter_Sections>>>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenFooterLegalSectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooter_LegalSection =
  | IGenCompButton
  | IGenCompButtonExternalLinks;

export type IGenFooter_Sections = IGenCompFooterSection;

export type IGenMainNavigation = {
  __typename: "MainNavigation";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  home?: Maybe<Array<Maybe<IGenMainNavigation_Home>>>;
  id?: Maybe<Scalars["ID"]>;
  logo?: Maybe<IGenAsset>;
  logoDarkVersion?: Maybe<IGenAsset>;
  mainNavigation?: Maybe<Array<Maybe<IGenMainNavigation_MainNavigation>>>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenMainNavigationHomeArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationLogoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationLogoDarkVersionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationMainNavigationArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigation_Home = IGenPage;

export type IGenMainNavigation_MainNavigation = IGenPage;

export type IGenMutation = {
  __typename: "Mutation";
  createAsset?: Maybe<IGenAsset>;
  createCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  createCompButton?: Maybe<IGenCompButton>;
  createCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  createCompFaqItem?: Maybe<IGenCompFaqItem>;
  createCompFooterSection?: Maybe<IGenCompFooterSection>;
  createCompImageCard?: Maybe<IGenCompImageCard>;
  deleteAsset?: Maybe<Scalars["Boolean"]>;
  deleteCompBrandCategory?: Maybe<Scalars["Boolean"]>;
  deleteCompButton?: Maybe<Scalars["Boolean"]>;
  deleteCompButtonExternalLinks?: Maybe<Scalars["Boolean"]>;
  deleteCompFaqItem?: Maybe<Scalars["Boolean"]>;
  deleteCompFooterSection?: Maybe<Scalars["Boolean"]>;
  deleteCompImageCard?: Maybe<Scalars["Boolean"]>;
  updateAsset?: Maybe<IGenAsset>;
  updateCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  updateCompButton?: Maybe<IGenCompButton>;
  updateCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  updateCompFaqItem?: Maybe<IGenCompFaqItem>;
  updateCompFooterSection?: Maybe<IGenCompFooterSection>;
  updateCompImageCard?: Maybe<IGenCompImageCard>;
};

export type IGenMutationCreateAssetArgs = {
  input: IGenAsset_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompBrandCategoryArgs = {
  input: IGenCompBrandCategory_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompButtonArgs = {
  input: IGenCompButton_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompButtonExternalLinksArgs = {
  input: IGenCompButtonExternalLinks_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompFaqItemArgs = {
  input: IGenCompFaqItem_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompFooterSectionArgs = {
  input: IGenCompFooterSection_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompImageCardArgs = {
  input: IGenCompImageCard_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationDeleteAssetArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompBrandCategoryArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompButtonArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFaqItemArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFooterSectionArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompImageCardArgs = {
  id: Scalars["ID"];
};

export type IGenMutationUpdateAssetArgs = {
  id: Scalars["ID"];
  input: IGenAsset_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompBrandCategoryArgs = {
  id: Scalars["ID"];
  input: IGenCompBrandCategory_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompButtonArgs = {
  id: Scalars["ID"];
  input: IGenCompButton_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
  input: IGenCompButtonExternalLinks_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompFaqItemArgs = {
  id: Scalars["ID"];
  input: IGenCompFaqItem_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompFooterSectionArgs = {
  id: Scalars["ID"];
  input: IGenCompFooterSection_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompImageCardArgs = {
  id: Scalars["ID"];
  input: IGenCompImageCard_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export enum IGenOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export type IGenPage = {
  __typename: "Page";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  featuredImage?: Maybe<Array<Maybe<IGenPage_FeaturedImage>>>;
  id?: Maybe<Scalars["ID"]>;
  internalTitle?: Maybe<Scalars["String"]>;
  metaAuthor?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  sitemapPriority?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type IGenPageComponentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageFeaturedImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageInfo = {
  __typename: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  startCursor?: Maybe<Scalars["String"]>;
};

export type IGenPage_Components_Where = {
  findOne?: InputMaybe<IGenPage_Components_WhereConnection>;
};

export type IGenPage_Components_WhereConnection = {
  CompFacts?: InputMaybe<IGenCompFacts_Nested_Where>;
  CompFaq?: InputMaybe<IGenCompFaq_Nested_Where>;
  CompGrid?: InputMaybe<IGenCompGrid_Nested_Where>;
  CompHeroSlider?: InputMaybe<IGenCompHeroSlider_Nested_Where>;
  CompImageWithText?: InputMaybe<IGenCompImageWithText_Nested_Where>;
  CompPageHeader?: InputMaybe<IGenCompPageHeader_Nested_Where>;
  CompSectionHeader?: InputMaybe<IGenCompSectionHeader_Nested_Where>;
  CompTextBlock?: InputMaybe<IGenCompTextBlock_Nested_Where>;
};

export type IGenPage_Connection = {
  __typename: "Page_Connection";
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenPage_ConnectionEdge = {
  __typename: "Page_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenPage>;
};

export type IGenPage_FeaturedImage_Where = {
  findOne?: InputMaybe<IGenPage_FeaturedImage_WhereConnection>;
};

export type IGenPage_FeaturedImage_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenPage_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Nested_Where>>>;
  internalTitle?: InputMaybe<IGenCaisyField_String_Where>;
  metaAuthor?: InputMaybe<IGenCaisyField_String_Where>;
  metaDescription?: InputMaybe<IGenCaisyField_String_Where>;
  metaKeywords?: InputMaybe<IGenCaisyField_String_Where>;
  metaTitle?: InputMaybe<IGenCaisyField_String_Where>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
};

export enum IGenPage_SitemapPriority {
  Priority040 = "Priority040",
  Priority060 = "Priority060",
  Priority080 = "Priority080",
  Priority100 = "Priority100",
}

export type IGenPage_SitemapPriority_Where = {
  eq?: InputMaybe<IGenPage_SitemapPriority>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  featuredImage?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  internalTitle?: InputMaybe<IGenOrder>;
  metaAuthor?: InputMaybe<IGenOrder>;
  metaDescription?: InputMaybe<IGenOrder>;
  metaKeywords?: InputMaybe<IGenOrder>;
  metaTitle?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  sitemapPriority?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  components?: InputMaybe<IGenPage_Components_Where>;
  featuredImage?: InputMaybe<IGenPage_FeaturedImage_Where>;
  internalTitle?: InputMaybe<IGenCaisyField_String_Where>;
  metaAuthor?: InputMaybe<IGenCaisyField_String_Where>;
  metaDescription?: InputMaybe<IGenCaisyField_String_Where>;
  metaKeywords?: InputMaybe<IGenCaisyField_String_Where>;
  metaTitle?: InputMaybe<IGenCaisyField_String_Where>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components =
  | IGenCompFacts
  | IGenCompFaq
  | IGenCompGrid
  | IGenCompHeroSlider
  | IGenCompImageWithText
  | IGenCompPageHeader
  | IGenCompSectionHeader
  | IGenCompTextBlock;

export type IGenPage_FeaturedImage = IGenAsset;

export type IGenQuery = {
  __typename: "Query";
  Asset?: Maybe<IGenAsset>;
  CompBrandCategory?: Maybe<IGenCompBrandCategory>;
  CompButton?: Maybe<IGenCompButton>;
  CompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  CompFacts?: Maybe<IGenCompFacts>;
  CompFactsFact?: Maybe<IGenCompFactsFact>;
  CompFaq?: Maybe<IGenCompFaq>;
  CompFaqItem?: Maybe<IGenCompFaqItem>;
  CompFooterSection?: Maybe<IGenCompFooterSection>;
  CompGrid?: Maybe<IGenCompGrid>;
  CompGridBrandCard?: Maybe<IGenCompGridBrandCard>;
  CompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard>;
  CompHeroSlider?: Maybe<IGenCompHeroSlider>;
  CompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide>;
  CompImageCard?: Maybe<IGenCompImageCard>;
  CompImageWithText?: Maybe<IGenCompImageWithText>;
  CompPageHeader?: Maybe<IGenCompPageHeader>;
  CompSectionHeader?: Maybe<IGenCompSectionHeader>;
  CompTextBlock?: Maybe<IGenCompTextBlock>;
  Footer?: Maybe<IGenFooter>;
  MainNavigation?: Maybe<IGenMainNavigation>;
  Page?: Maybe<IGenPage>;
  Tag?: Maybe<IGenCaisy_Field_Tag>;
  UniversalText?: Maybe<IGenUniversalText>;
  Video?: Maybe<IGenVideo>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allCompBrandCategory?: Maybe<IGenCompBrandCategory_Connection>;
  allCompButton?: Maybe<IGenCompButton_Connection>;
  allCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks_Connection>;
  allCompFacts?: Maybe<IGenCompFacts_Connection>;
  allCompFactsFact?: Maybe<IGenCompFactsFact_Connection>;
  allCompFaq?: Maybe<IGenCompFaq_Connection>;
  allCompFaqItem?: Maybe<IGenCompFaqItem_Connection>;
  allCompFooterSection?: Maybe<IGenCompFooterSection_Connection>;
  allCompGrid?: Maybe<IGenCompGrid_Connection>;
  allCompGridBrandCard?: Maybe<IGenCompGridBrandCard_Connection>;
  allCompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard_Connection>;
  allCompHeroSlider?: Maybe<IGenCompHeroSlider_Connection>;
  allCompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide_Connection>;
  allCompImageCard?: Maybe<IGenCompImageCard_Connection>;
  allCompImageWithText?: Maybe<IGenCompImageWithText_Connection>;
  allCompPageHeader?: Maybe<IGenCompPageHeader_Connection>;
  allCompSectionHeader?: Maybe<IGenCompSectionHeader_Connection>;
  allCompTextBlock?: Maybe<IGenCompTextBlock_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allTags?: Maybe<IGenTag_Connection>;
  allVideo?: Maybe<IGenVideo_Connection>;
};

export type IGenQueryAssetArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompBrandCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompButtonArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFactsArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFactsFactArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFaqArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFaqItemArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFooterSectionArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridBrandCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridTeamMemberCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompHeroSliderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompHeroSliderSlideArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompImageCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompImageWithTextArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompPageHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompSectionHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompTextBlockArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryMainNavigationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryPageArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryTagArgs = {
  id: Scalars["ID"];
};

export type IGenQueryUniversalTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryVideoArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};

export type IGenQueryAllCompBrandCategoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
};

export type IGenQueryAllCompButtonArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompButton_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
};

export type IGenQueryAllCompButtonExternalLinksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
};

export type IGenQueryAllCompFactsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFacts_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
};

export type IGenQueryAllCompFactsFactArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
};

export type IGenQueryAllCompFaqArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFaq_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
};

export type IGenQueryAllCompFaqItemArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
};

export type IGenQueryAllCompFooterSectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
};

export type IGenQueryAllCompGridArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
};

export type IGenQueryAllCompGridBrandCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
};

export type IGenQueryAllCompGridTeamMemberCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
};

export type IGenQueryAllCompHeroSliderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
};

export type IGenQueryAllCompHeroSliderSlideArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
};

export type IGenQueryAllCompImageCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
};

export type IGenQueryAllCompImageWithTextArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
};

export type IGenQueryAllCompPageHeaderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
};

export type IGenQueryAllCompSectionHeaderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
};

export type IGenQueryAllCompTextBlockArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
};

export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};

export type IGenQueryAllTagsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IGenQueryAllVideoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenVideo_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
};

export type IGenTag_Connection = {
  __typename: "Tag_Connection";
  edges?: Maybe<Array<Maybe<IGenTag_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenTag_ConnectionEdge = {
  __typename: "Tag_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCaisy_Field_Tag>;
};

export type IGenUniversalText = {
  __typename: "UniversalText";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  copyright?: Maybe<Scalars["String"]>;
  customHtml?: Maybe<Scalars["String"]>;
  customHtmlBody?: Maybe<Scalars["String"]>;
  filter_all?: Maybe<Scalars["String"]>;
  filter_current?: Maybe<Scalars["String"]>;
  filter_divested?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  pageNotFoundBackgroundImage?: Maybe<IGenAsset>;
  pageNotFoundButton?: Maybe<
    Array<Maybe<IGenUniversalText_PageNotFoundButton>>
  >;
  pageNotFoundDescription?: Maybe<IGenUniversalText_PageNotFoundDescription>;
  primaryColor?: Maybe<Scalars["String"]>;
  secondaryColor?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenUniversalTextPageNotFoundBackgroundImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalTextPageNotFoundButtonArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalTextPageNotFoundDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalText_PageNotFoundButton =
  | IGenCompButton
  | IGenCompButtonExternalLinks;

export type IGenUniversalText_PageNotFoundDescription = {
  __typename: "UniversalText_pageNotFoundDescription";
  connections?: Maybe<
    Array<Maybe<IGenUniversalText_PageNotFoundDescription_Connections>>
  >;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenUniversalText_PageNotFoundDescriptionConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalText_PageNotFoundDescription_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenVideo = {
  __typename: "Video";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  vimeoVideoId?: Maybe<Scalars["String"]>;
};

export type IGenVideo_Connection = {
  __typename: "Video_Connection";
  edges?: Maybe<Array<Maybe<IGenVideo_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenVideo_ConnectionEdge = {
  __typename: "Video_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenVideo>;
};

export type IGenVideo_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenVideo_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenVideo_Nested_Where>>>;
  vimeoVideoId?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenVideo_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  vimeoVideoId?: InputMaybe<IGenOrder>;
};

export type IGenVideo_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  vimeoVideoId?: InputMaybe<IGenCaisyField_String_Where>;
};
