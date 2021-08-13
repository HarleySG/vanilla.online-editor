import { updateEditor } from './dom.service';
import { htmlEditor, cssEditor, jsEditor } from './monaco.service';

function mountEditor(): void {
  const editorValues = {
    html: htmlEditor,
    css: cssEditor,
    js: jsEditor
  };

  htmlEditor.event(() => updateEditor(editorValues));
  cssEditor.event(() => updateEditor(editorValues));
  jsEditor.event(() => updateEditor(editorValues));
  
  updateEditor(editorValues);
}

export default mountEditor;
