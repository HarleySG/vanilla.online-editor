import * as monaco from 'monaco-editor';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import JsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import { $css, $html, $js } from './dom.service';
import { rawCss, rawHtml, rawJs } from './base64.service';
import { IUpdateEditor, IMonacoEnv } from './interfaces';

declare global {
  interface Window {
    MonacoEnvironment: IMonacoEnv;
  }
}

const COMMON_EDITOR_OPTIONS = {
  automaticLayout: true,
  fontSize: 18,
  scrollBeyondLastLine: false,
  roundedSelection: false,
  padding: {
    top: 16
  },
  minimap: {
    enabled: false
  },
  theme: 'vs-dark'
};

window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'html') return new HtmlWorker();
    if (label === 'javascript') return new JsWorker();
    if (label === 'css') return new CssWorker();
  }
} as IMonacoEnv;;

const htmlEditorConfig = monaco.editor.create($html, {
  value: rawHtml,
  language: 'html',
  ...COMMON_EDITOR_OPTIONS
});

const cssEditorConfig = monaco.editor.create($css, {
  value: rawCss,
  language: 'css',
  ...COMMON_EDITOR_OPTIONS
});

const jsEditorConfig = monaco.editor.create($js, {
  value: rawJs,
  language: 'javascript',
  ...COMMON_EDITOR_OPTIONS
});

const htmlEditor = {
  config: htmlEditorConfig,
  event: (cb: IUpdateEditor) => htmlEditorConfig.onDidChangeModelContent(cb)
};

const cssEditor = {
  config: cssEditorConfig,
  event: (cb: IUpdateEditor) => cssEditorConfig.onDidChangeModelContent(cb)
};

const jsEditor = {
  config: jsEditorConfig,
  event: (cb: IUpdateEditor) => jsEditorConfig.onDidChangeModelContent(cb)
};

export { htmlEditor, cssEditor, jsEditor };
