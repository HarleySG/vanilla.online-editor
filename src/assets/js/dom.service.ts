import { encode } from 'js-base64';
import { ICreateDom } from './interfaces';

const $ = (selector: string): HTMLElement | undefined => {
  const el = document.querySelector(selector) as HTMLElement;
  if (el) {
    return el;
  }
  return undefined;
};

const $css = $('#css') as HTMLInputElement;
const $js = $('#js') as HTMLInputElement;
const $html = $('#html') as HTMLInputElement;
const $iframe = $('#app_frame') as HTMLIFrameElement;

function updateHash(hashedCode: string): void {
  window.history.replaceState(null, '', `/${hashedCode}`);
}

function encodeDom(): Promise<ICreateDom> {
  const css = $css.value;
  const js = $js.value;
  const html = $html.value;
  const hashedCode = `${encode(html)}|${encode(css)}|${encode(js)}`;

  updateHash(hashedCode);

  return Promise.resolve({ css, js, html });
}

function updateIframe(newDom: string): void {
  $iframe?.setAttribute('srcdoc', newDom);
}

function createDom({ html, css, js }: ICreateDom) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script type="module">${js}</script>
  </body>
</html>
`;
}

export { $css, $js, $html, $iframe, createDom, encodeDom, updateIframe };
