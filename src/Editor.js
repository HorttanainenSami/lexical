import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ListItemNode, ListNode } from "@lexical/list";
import TreeViewPlugin from "@lexical/react/LexicalTreeView";
import ToolbarPlugin from "./plugins/ListToolbar";
import PlaygroundTheme from "./themes/PlaygroundTheme";
import prepopulatedText from "./SampleText.js";
import { createEditor } from "lexical";

export default function Editor() {
  //generated with createEditor
  const generatedJSON = {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "Play around with the list plugin here!",
              type: "text",
              version: 1
            }
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1
        },
        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "This is a bullet list example.",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "And the below sample is a bullet list.",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            }
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "list",
          version: 1,
          listType: "bullet",
          start: 1,
          tag: "ul"
        },
        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try nesting the lists.",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try nesting the lists.",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            }
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "list",
          version: 1,
          listType: "number",
          start: 1,
          tag: "ol"
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "\nThis is a more complex check list example.",
              type: "text",
              version: 1
            }
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1
        },
        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try clicking on the check boxes.",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try the plugin yourself:)",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try the plugin yourself:)",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: "Try the plugin yourself:)",
                  type: "text",
                  version: 1
                }
              ],
              direction: null,
              format: "",
              indent: 0,
              type: "listitem",
              version: 1,
              value: 1
            }
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "list",
          version: 1,
          listType: "check",
          start: 1,
          tag: "ul"
        }
      ],
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  };
  //With NODE_ENV=prod some errors disappear but some still remain
  const editorConfig = {
    theme: PlaygroundTheme,
    onError(error) {
      throw error;
    },
    nodes: [ListNode, ListItemNode]
  };
  console.log(process.env.NODE_ENV);
  const editor = createEditor(editorConfig);
  prepopulatedText(editor).then(() => {
    const editorState = editor.getEditorState();
    console.log("ASDAS", JSON.stringify(editorState.toJSON()));
  });

  const editorConfig2 = {
    ...editorConfig,
    editorState: JSON.stringify(generatedJSON)
  };
  return (
    <LexicalComposer initialConfig={editorConfig2}>
      <div className="editor-container">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />
        <ListPlugin />
        <CheckListPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the list plugin...
    </div>
  );
}
