import { ICreateDom } from './interfaces';
import { encodeDom, createDom, updateIframe, $css, $js, $html } from './dom.service'
import { rawCss, rawHtml, rawJs } from './base64.service';

function updateEditor(): void {
  encodeDom().then(({ css, js, html }: ICreateDom) => {
    const newHtml = createDom({ html, css, js });

    updateIframe(newHtml);
  });
}

function mountEditor(): void {
  $html?.addEventListener('input', updateEditor);
  $js?.addEventListener('input', updateEditor);
  $css?.addEventListener('input', updateEditor);

  $html.value = rawHtml;
  $css.value = rawCss;
  $js.value = rawJs;
}

export default mountEditor;