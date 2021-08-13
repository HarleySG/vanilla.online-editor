import Split from 'split-grid'

export default function() {
  Split({
    rowGutters: [{
        track: 1,
        element: document.querySelector('.gutter-row-1') as HTMLElement,
    }],
    columnGutters: [{
      track: 1,
      element: document.querySelector('.gutter-col-1')  as HTMLElement,
  }, {
      track: 3,
      element: document.querySelector('.gutter-col-3')  as HTMLElement,
  }],
  })
}