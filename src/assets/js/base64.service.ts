import { decode } from "js-base64";

const { pathname } = window.location

const [encodeHtml, encodeCss, encodeJs] = pathname.slice(1).split('%7C')

const rawHtml = encodeHtml ? decode(encodeHtml) : ''
const rawCss = encodeCss ? decode(encodeCss) : ''
const rawJs = encodeJs ? decode(encodeJs) : ''

export {
  rawHtml,
  rawJs,
  rawCss
}