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
  copyright?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dominantColor?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  originType?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
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
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
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

export type IGenCompBrandCategory_Sort = {
  title?: InputMaybe<IGenOrder>;
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

export type IGenCompButtonExternalLinks_Sort = {
  description?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
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

export type IGenCompButton_Sort = {
  link?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
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

export type IGenCompFactsFact_CreateInput = {
  label?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFactsFact_Sort = {
  label?: InputMaybe<IGenOrder>;
  value?: InputMaybe<IGenOrder>;
};

export type IGenCompFactsFact_UpdateInput = {
  label?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
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

export type IGenCompFacts_CreateInput = {
  facts?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFacts_Sort = {
  facts?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompFacts_UpdateInput = {
  facts?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFacts_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
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

export type IGenCompFaqItem_Sort = {
  title?: InputMaybe<IGenOrder>;
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

export type IGenCompFaq_CreateInput = {
  faqItems?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaq_Sort = {
  faqItems?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompFaq_UpdateInput = {
  faqItems?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaq_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
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

export type IGenCompFooterSection_Sort = {
  links?: InputMaybe<IGenOrder>;
  sectionTitle?: InputMaybe<IGenOrder>;
};

export type IGenCompFooterSection_UpdateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectionTitle?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFooterSection_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type IGenCompGridBrandCard_CreateInput = {
  category?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  linksTo?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<IGenCompGridBrandCard_Style>;
};

export type IGenCompGridBrandCard_Sort = {
  category?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  linksTo?: InputMaybe<IGenOrder>;
  logo?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  style?: InputMaybe<IGenOrder>;
};

export enum IGenCompGridBrandCard_Style {
  JustLogo = "justLogo",
  WithDescription = "withDescription",
}

export type IGenCompGridBrandCard_Style_Where = {
  eq?: InputMaybe<IGenCompGridBrandCard_Style>;
};

export type IGenCompGridBrandCard_UpdateInput = {
  category?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  linksTo?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<IGenCompGridBrandCard_Style>;
};

export type IGenCompGridBrandCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  linksTo?: InputMaybe<IGenCaisyField_String_Where>;
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

export type IGenCompGridTeamMemberCard_CreateInput = {
  image?: InputMaybe<Scalars["ID"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  linkToLinkedInProfile?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCard_Sort = {
  image?: InputMaybe<IGenOrder>;
  jobTitle?: InputMaybe<IGenOrder>;
  linkToLinkedInProfile?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
};

export type IGenCompGridTeamMemberCard_UpdateInput = {
  image?: InputMaybe<Scalars["ID"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  linkToLinkedInProfile?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
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

export type IGenCompGrid_CreateInput = {
  headline?: InputMaybe<Scalars["String"]>;
  items?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns>;
  title?: InputMaybe<Scalars["String"]>;
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
  headline?: InputMaybe<IGenOrder>;
  items?: InputMaybe<IGenOrder>;
  numberOfColumns?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompGrid_UpdateInput = {
  headline?: InputMaybe<Scalars["String"]>;
  items?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlideTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type IGenCompHeroSliderSlide_CreateInput = {
  backgroundImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  headline?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenCompHeroSliderSlide_Sort = {
  backgroundImage?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
};

export type IGenCompHeroSliderSlide_UpdateInput = {
  backgroundImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  headline?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenCompHeroSliderSlide_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenCompHeroSliderSlide_BackgroundImage = IGenAsset;

export type IGenCompHeroSliderSlide_Text = {
  __typename: "CompHeroSliderSlide_text";
  connections?: Maybe<Array<Maybe<IGenCompHeroSliderSlide_Text_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
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

export type IGenCompHeroSlider_CreateInput = {
  slides?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSlider_Sort = {
  slides?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompHeroSlider_UpdateInput = {
  slides?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSlider_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
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

export type IGenCompImageCard_Sort = {
  description?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextButtonsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type IGenCompImageWithText_CreateInput = {
  asset?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  buttons?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  headline?: InputMaybe<Scalars["String"]>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  strap?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenCompImageWithText_Sort = {
  asset?: InputMaybe<IGenOrder>;
  buttons?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  imageRightInsteadOfLeft?: InputMaybe<IGenOrder>;
  strap?: InputMaybe<IGenOrder>;
};

export type IGenCompImageWithText_UpdateInput = {
  asset?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  buttons?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  headline?: InputMaybe<Scalars["String"]>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  strap?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenCompImageWithText_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeaderBackgroundVideoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type IGenCompPageHeader_CreateInput = {
  backgroundImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  backgroundVideo?: InputMaybe<Scalars["ID"]>;
  headline?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeader_Sort = {
  backgroundImage?: InputMaybe<IGenOrder>;
  backgroundVideo?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
};

export type IGenCompPageHeader_UpdateInput = {
  backgroundImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  backgroundVideo?: InputMaybe<Scalars["ID"]>;
  headline?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
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

export type IGenCompSectionHeader_CreateInput = {
  image?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompSectionHeader_Sort = {
  image?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompSectionHeader_UpdateInput = {
  image?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompSectionHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlockTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type IGenCompTextBlock_CreateInput = {
  buttons?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  text?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Sort = {
  buttons?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenCompTextBlock_UpdateInput = {
  buttons?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  text?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSectionsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooter_CreateInput = {
  legalSection?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sections?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenFooter_UpdateInput = {
  legalSection?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sections?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationLogoDarkVersionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigationMainNavigationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigation_CreateInput = {
  home?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  logo?: InputMaybe<Scalars["ID"]>;
  logoDarkVersion?: InputMaybe<Scalars["ID"]>;
  mainNavigation?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigation_UpdateInput = {
  home?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  logo?: InputMaybe<Scalars["ID"]>;
  logoDarkVersion?: InputMaybe<Scalars["ID"]>;
  mainNavigation?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenMainNavigation_Home = IGenPage;

export type IGenMainNavigation_MainNavigation = IGenPage;

export type IGenMutation = {
  __typename: "Mutation";
  createAsset?: Maybe<IGenAsset>;
  createCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  createCompButton?: Maybe<IGenCompButton>;
  createCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  createCompFacts?: Maybe<IGenCompFacts>;
  createCompFactsFact?: Maybe<IGenCompFactsFact>;
  createCompFaq?: Maybe<IGenCompFaq>;
  createCompFaqItem?: Maybe<IGenCompFaqItem>;
  createCompFooterSection?: Maybe<IGenCompFooterSection>;
  createCompGrid?: Maybe<IGenCompGrid>;
  createCompGridBrandCard?: Maybe<IGenCompGridBrandCard>;
  createCompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard>;
  createCompHeroSlider?: Maybe<IGenCompHeroSlider>;
  createCompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide>;
  createCompImageCard?: Maybe<IGenCompImageCard>;
  createCompImageWithText?: Maybe<IGenCompImageWithText>;
  createCompPageHeader?: Maybe<IGenCompPageHeader>;
  createCompSectionHeader?: Maybe<IGenCompSectionHeader>;
  createCompTextBlock?: Maybe<IGenCompTextBlock>;
  createFooter?: Maybe<IGenFooter>;
  createMainNavigation?: Maybe<IGenMainNavigation>;
  createPage?: Maybe<IGenPage>;
  createUniversalText?: Maybe<IGenUniversalText>;
  createVideo?: Maybe<IGenVideo>;
  deleteAsset?: Maybe<Scalars["Boolean"]>;
  deleteCompBrandCategory?: Maybe<Scalars["Boolean"]>;
  deleteCompButton?: Maybe<Scalars["Boolean"]>;
  deleteCompButtonExternalLinks?: Maybe<Scalars["Boolean"]>;
  deleteCompFacts?: Maybe<Scalars["Boolean"]>;
  deleteCompFactsFact?: Maybe<Scalars["Boolean"]>;
  deleteCompFaq?: Maybe<Scalars["Boolean"]>;
  deleteCompFaqItem?: Maybe<Scalars["Boolean"]>;
  deleteCompFooterSection?: Maybe<Scalars["Boolean"]>;
  deleteCompGrid?: Maybe<Scalars["Boolean"]>;
  deleteCompGridBrandCard?: Maybe<Scalars["Boolean"]>;
  deleteCompGridTeamMemberCard?: Maybe<Scalars["Boolean"]>;
  deleteCompHeroSlider?: Maybe<Scalars["Boolean"]>;
  deleteCompHeroSliderSlide?: Maybe<Scalars["Boolean"]>;
  deleteCompImageCard?: Maybe<Scalars["Boolean"]>;
  deleteCompImageWithText?: Maybe<Scalars["Boolean"]>;
  deleteCompPageHeader?: Maybe<Scalars["Boolean"]>;
  deleteCompSectionHeader?: Maybe<Scalars["Boolean"]>;
  deleteCompTextBlock?: Maybe<Scalars["Boolean"]>;
  deleteFooter?: Maybe<Scalars["Boolean"]>;
  deleteMainNavigation?: Maybe<Scalars["Boolean"]>;
  deletePage?: Maybe<Scalars["Boolean"]>;
  deleteUniversalText?: Maybe<Scalars["Boolean"]>;
  deleteVideo?: Maybe<Scalars["Boolean"]>;
  updateAsset?: Maybe<IGenAsset>;
  updateCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  updateCompButton?: Maybe<IGenCompButton>;
  updateCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  updateCompFacts?: Maybe<IGenCompFacts>;
  updateCompFactsFact?: Maybe<IGenCompFactsFact>;
  updateCompFaq?: Maybe<IGenCompFaq>;
  updateCompFaqItem?: Maybe<IGenCompFaqItem>;
  updateCompFooterSection?: Maybe<IGenCompFooterSection>;
  updateCompGrid?: Maybe<IGenCompGrid>;
  updateCompGridBrandCard?: Maybe<IGenCompGridBrandCard>;
  updateCompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard>;
  updateCompHeroSlider?: Maybe<IGenCompHeroSlider>;
  updateCompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide>;
  updateCompImageCard?: Maybe<IGenCompImageCard>;
  updateCompImageWithText?: Maybe<IGenCompImageWithText>;
  updateCompPageHeader?: Maybe<IGenCompPageHeader>;
  updateCompSectionHeader?: Maybe<IGenCompSectionHeader>;
  updateCompTextBlock?: Maybe<IGenCompTextBlock>;
  updateFooter?: Maybe<IGenFooter>;
  updateMainNavigation?: Maybe<IGenMainNavigation>;
  updatePage?: Maybe<IGenPage>;
  updateUniversalText?: Maybe<IGenUniversalText>;
  updateVideo?: Maybe<IGenVideo>;
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

export type IGenMutationCreateCompFactsArgs = {
  input: IGenCompFacts_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompFactsFactArgs = {
  input: IGenCompFactsFact_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompFaqArgs = {
  input: IGenCompFaq_CreateInput;
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

export type IGenMutationCreateCompGridArgs = {
  input: IGenCompGrid_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompGridBrandCardArgs = {
  input: IGenCompGridBrandCard_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompGridTeamMemberCardArgs = {
  input: IGenCompGridTeamMemberCard_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompHeroSliderArgs = {
  input: IGenCompHeroSlider_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompHeroSliderSlideArgs = {
  input: IGenCompHeroSliderSlide_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompImageCardArgs = {
  input: IGenCompImageCard_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompImageWithTextArgs = {
  input: IGenCompImageWithText_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompPageHeaderArgs = {
  input: IGenCompPageHeader_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompSectionHeaderArgs = {
  input: IGenCompSectionHeader_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCompTextBlockArgs = {
  input: IGenCompTextBlock_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateFooterArgs = {
  input: IGenFooter_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateMainNavigationArgs = {
  input: IGenMainNavigation_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreatePageArgs = {
  input: IGenPage_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateUniversalTextArgs = {
  input: IGenUniversalText_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateVideoArgs = {
  input: IGenVideo_CreateInput;
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

export type IGenMutationDeleteCompFactsArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFactsFactArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFaqArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFaqItemArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompFooterSectionArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompGridArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompGridBrandCardArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompGridTeamMemberCardArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompHeroSliderArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompHeroSliderSlideArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompImageCardArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompImageWithTextArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompPageHeaderArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompSectionHeaderArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCompTextBlockArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteFooterArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteMainNavigationArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeletePageArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteUniversalTextArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteVideoArgs = {
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

export type IGenMutationUpdateCompFactsArgs = {
  id: Scalars["ID"];
  input: IGenCompFacts_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompFactsFactArgs = {
  id: Scalars["ID"];
  input: IGenCompFactsFact_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompFaqArgs = {
  id: Scalars["ID"];
  input: IGenCompFaq_UpdateInput;
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

export type IGenMutationUpdateCompGridArgs = {
  id: Scalars["ID"];
  input: IGenCompGrid_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompGridBrandCardArgs = {
  id: Scalars["ID"];
  input: IGenCompGridBrandCard_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompGridTeamMemberCardArgs = {
  id: Scalars["ID"];
  input: IGenCompGridTeamMemberCard_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompHeroSliderArgs = {
  id: Scalars["ID"];
  input: IGenCompHeroSlider_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompHeroSliderSlideArgs = {
  id: Scalars["ID"];
  input: IGenCompHeroSliderSlide_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompImageCardArgs = {
  id: Scalars["ID"];
  input: IGenCompImageCard_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompImageWithTextArgs = {
  id: Scalars["ID"];
  input: IGenCompImageWithText_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompPageHeaderArgs = {
  id: Scalars["ID"];
  input: IGenCompPageHeader_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompSectionHeaderArgs = {
  id: Scalars["ID"];
  input: IGenCompSectionHeader_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCompTextBlockArgs = {
  id: Scalars["ID"];
  input: IGenCompTextBlock_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateFooterArgs = {
  id: Scalars["ID"];
  input: IGenFooter_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateMainNavigationArgs = {
  id: Scalars["ID"];
  input: IGenMainNavigation_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdatePageArgs = {
  id: Scalars["ID"];
  input: IGenPage_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateUniversalTextArgs = {
  id: Scalars["ID"];
  input: IGenUniversalText_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateVideoArgs = {
  id: Scalars["ID"];
  input: IGenVideo_UpdateInput;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageInfo = {
  __typename: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  startCursor?: Maybe<Scalars["String"]>;
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

export type IGenPage_CreateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  internalTitle?: InputMaybe<Scalars["String"]>;
  metaAuthor?: InputMaybe<Scalars["String"]>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaKeywords?: InputMaybe<Scalars["String"]>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority>;
  slug?: InputMaybe<Scalars["String"]>;
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
  featuredImage?: InputMaybe<IGenOrder>;
  internalTitle?: InputMaybe<IGenOrder>;
  metaAuthor?: InputMaybe<IGenOrder>;
  metaDescription?: InputMaybe<IGenOrder>;
  metaKeywords?: InputMaybe<IGenOrder>;
  metaTitle?: InputMaybe<IGenOrder>;
  sitemapPriority?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
};

export type IGenPage_UpdateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  internalTitle?: InputMaybe<Scalars["String"]>;
  metaAuthor?: InputMaybe<Scalars["String"]>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaKeywords?: InputMaybe<Scalars["String"]>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
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

export type IGenQueryAllVideoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenVideo_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
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
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalTextPageNotFoundButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalTextPageNotFoundDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalText_CreateInput = {
  copyright?: InputMaybe<Scalars["String"]>;
  customHtml?: InputMaybe<Scalars["String"]>;
  customHtmlBody?: InputMaybe<Scalars["String"]>;
  filter_all?: InputMaybe<Scalars["String"]>;
  filter_current?: InputMaybe<Scalars["String"]>;
  filter_divested?: InputMaybe<Scalars["String"]>;
  pageNotFoundBackgroundImage?: InputMaybe<Scalars["ID"]>;
  pageNotFoundButton?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  pageNotFoundDescription?: InputMaybe<Scalars["JSON"]>;
  primaryColor?: InputMaybe<Scalars["String"]>;
  secondaryColor?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversalText_UpdateInput = {
  copyright?: InputMaybe<Scalars["String"]>;
  customHtml?: InputMaybe<Scalars["String"]>;
  customHtmlBody?: InputMaybe<Scalars["String"]>;
  filter_all?: InputMaybe<Scalars["String"]>;
  filter_current?: InputMaybe<Scalars["String"]>;
  filter_divested?: InputMaybe<Scalars["String"]>;
  pageNotFoundBackgroundImage?: InputMaybe<Scalars["ID"]>;
  pageNotFoundButton?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  pageNotFoundDescription?: InputMaybe<Scalars["JSON"]>;
  primaryColor?: InputMaybe<Scalars["String"]>;
  secondaryColor?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
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

export type IGenUniversalText_PageNotFoundDescription_Connections =
  IGenCaisy_Field_Document_NotFound;

export type IGenVideo = {
  __typename: "Video";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
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

export type IGenVideo_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
  vimeoVideoId?: InputMaybe<Scalars["String"]>;
};

export type IGenVideo_Sort = {
  title?: InputMaybe<IGenOrder>;
  vimeoVideoId?: InputMaybe<IGenOrder>;
};

export type IGenVideo_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  vimeoVideoId?: InputMaybe<Scalars["String"]>;
};

export type IGenVideo_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  vimeoVideoId?: InputMaybe<IGenCaisyField_String_Where>;
};
