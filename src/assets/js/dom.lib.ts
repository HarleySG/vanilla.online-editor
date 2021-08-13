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

function handleInput() {
  const newHtml = newDom();

  $iframe?.setAttribute('srcdoc', newHtml);
  historyUpdate();
}

function historyUpdate() {
  const css = $css.value;
  const js = $js.value;
  const html = $html.value;

  const hashedCode = `${btoa(html)}|${btoa(css)}|${btoa(js)}`;
  window.history.replaceState(null, '', `/${hashedCode}`);
}

function newDom() {
  const css = $css.value;
  const js = $js.value;
  const html = $html.value;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
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

function codepen() {
  $html?.addEventListener('input', handleInput);
  $js?.addEventListener('input', handleInput);
  $css?.addEventListener('input', handleInput);
}

export { codepen };
