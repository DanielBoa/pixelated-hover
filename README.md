## ❤️=🟥 Pixelated Hover

Creates a pixelated image hover effect at runtime.

[**See it in action here.**](http://danielboa.github.io/pixelated-hover/example.html)

_**NOTES**:_
* _**This wasn't really intended for production, just playing around.**_
* If your images are loaded from another host ensure you set `crossorigin="anonymous"` on your `img` tags as well as your image host supports CORS.

### Example

```html
<!-- include css in head -->
<link rel="stylesheet" href="pixelated-hover.css">

<!-- include js at bottom of body -->
<script src="pixelated-hover.js"></script>
```
```html
<!-- use the following structure  -->
<a href="#" data-pixelated-hover>
  <img src="images/street.jpg" />
</a>
<!-- can optionally choose desired pixel size -->
<a href="#" data-pixelated-hover="10">
  <img src="images/street.jpg" />
</a>
```