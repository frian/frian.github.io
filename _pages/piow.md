---
layout: page
title: Piow
project: piow
permalink: /piow/
tags: [web, image, gallery]
---

{% include fork_me.html project=page.project %}

<article class="markdown-body" markdown="1">

# {{ page.title }}

<div class="article-heading" markdown="1">

A simple one page image gallery

</div>


## Screenshots

![piow screenshot](/img/piow.png){:class="thumb"}

![piow screenshot](/img/piow1.png){:class="thumb"}

![piow screenshot](/img/piow2.png){:class="thumb"}

## Setup

### 1. upload to your www root

### 2. configure

if installed in a sub-domain you may need to edit config/piow.php

```
    $imagesDir = '/images/';
```
to something like

```
    $imagesDir = '/<subdomain>/<optionnal_folder>/images/'
```

### 3. upload images to the images folder


## Images

- there's no image processing (resize, preview creation), there are enough tools for that.
- recommended image size 2400x1800p
- recommended preview size 150x113px
- previews must be named : prev-&lt;original_file_name&gt;
- upload all images in the images folder


## Usage

- view image : click on a preview
- view next image : click on right side of image or keyboard 'arrow right'
- view previous image : click on left side of image or keyboard 'arrow left'
- close image : click on top right cross or keyboard 'x' or keyboard 'ESC'

## Demo

[here](http://piow.frian.org/)

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

{% include page_tags.html %}

</article>
