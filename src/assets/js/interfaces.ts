import { editor, IDisposable } from 'monaco-editor';

interface IEditorConfigItem {
  config: editor.IStandaloneCodeEditor,
  event: (cb: IUpdateEditor) => IDisposable
}

interface IEditorConfig {
  html: IEditorConfigItem;
  css: IEditorConfigItem;
  js: IEditorConfigItem
}

interface ICreateDom {
  html: string;
  css: string;
  js: string
}

type IUpdateEditor = () => void;

interface IMonacoEnv {
  getWorker(_: any, label: any): Worker | undefined;
}


export {
  ICreateDom,
  IUpdateEditor,
  IMonacoEnv,
  IEditorConfig
}