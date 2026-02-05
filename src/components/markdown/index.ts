import Heading from "./heading.svelte";
import Paragraph from "./paragraph.svelte";
import Text from "./text.svelte";
import Image from "./image.svelte";
import Link from "./link.svelte";
import Em from "./em.svelte";
import Del from "./del.svelte";
import Strong from "./strong.svelte";
import List from "./list.svelte";
import ListItem from "./list-item.svelte";
import Html from "./html.svelte";
import Blockquote from "./blockquote.svelte";
import Code from "./code.svelte";
import type { RootContentMap } from "mdast";
import Br from "./br.svelte";
import InlineCode from "./inline-code.svelte";
import { TocLink, TocParagraph } from "./toc";

export type RendererFor = "content" | "toc";

export const getRenderer = (type: keyof RootContentMap, renderFor: RendererFor = "content") => {
  const isForToc = renderFor === "toc";
  switch (type) {
    case "blockquote":
      return Blockquote;
    case "break":
      return Br;
    case "code":
      return Code;
    case "delete":
      return Del;
    case "emphasis":
      return Em;
    case "heading":
      return Heading;
    case "html":
      return Html;
    case "image":
      return Image;
    case "inlineCode":
      return InlineCode;
    case "link":
      return isForToc ? TocLink : Link;
    case "list":
      return List;
    case "listItem":
      return ListItem;
    case "paragraph":
      return isForToc ? TocParagraph : Paragraph;
    case "strong":
      return Strong;
    case "text":
      return Text;
    default:
      return null;
  }
};
