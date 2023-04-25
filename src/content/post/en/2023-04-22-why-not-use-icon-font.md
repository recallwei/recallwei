---
title: 'Why not use icon font?'
tags:
  - 'Icon'
---

Why not use icon font?
Shadow DOM used by web component has big advantages over usual SVGs or framework specific components, but what about
icon fonts?

Do not use icon fonts!!!

- Icon fonts are ugly. Browser renders icons using font rendering methods, which causes blurred icon edges and icons
  lose their sharpness.
- Icons rendered from icon fonts are often hard to align, resulting in misaligned icons.
- Browsers load huge fonts just to render few icons. This can be solved by using custom icon fonts, but doesn't solve
  other issues.
- No colored icons, only monotone. No SVG animations.

Icon fonts do not belong in modern web. They were a great solution when Internet Explorer was popular, web components
did not exist and SVG support was buggy. Those bad times are over.
