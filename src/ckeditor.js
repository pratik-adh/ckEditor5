/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor"
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment"
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat"
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote"
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold"
import Code from "@ckeditor/ckeditor5-basic-styles/src/code"
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials"
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor"
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor"
import Heading from "@ckeditor/ckeditor5-heading/src/heading"
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline"
import Image from "@ckeditor/ckeditor5-image/src/image"
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload"
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic"
import Link from "@ckeditor/ckeditor5-link/src/link"
import List from "@ckeditor/ckeditor5-list/src/list"
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph"
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough"
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript"
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline"

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Code,
  Essentials,
  FontBackgroundColor,
  FontColor,
  Heading,
  HorizontalLine,
  Image,
  ImageUpload,
  Italic,
  Link,
  List,
  Paragraph,
  Strikethrough,
  Subscript,
  Underline,
]

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "alignment",
      "|",
      "fontColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "link",
      "imageUpload",
      "code",
      "blockQuote",
      "horizontalLine",
    ],
  },
  language: "en",
}

export default Editor
