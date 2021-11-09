// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface INavLinkFields {
  /** Link Title */
  linkTitle?: string | undefined;

  /** Link Url */
  linkUrl?: string | undefined;

  /** Is external? */
  isExternal?: boolean | undefined;
}

export interface INavLink extends Entry<INavLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title?: string | undefined;

  /** Slug */
  slug: string;

  /** Blocks */
  blocks?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "navLink" | "page";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
