import { Entry } from "contentful";
import { getEntries } from "@cms/api";
import { IPageFields } from "@cms/types";

export default async function getPage(slug: string) {
  const entries: Entry<IPageFields>[] = await getEntries<IPageFields>("page", {
    "fields.slug": slug,
  });
  if (entries && entries.length > 0) {
    return entries[0];
  } else {
    return undefined;
  }
}
