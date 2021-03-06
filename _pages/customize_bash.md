---
layout: page
title: Customize bash
project: customize-bash
permalink: /customize-bash
tags: [linux, shell, bash]
---

{% include fork_me.html project=page.project %}

<article class="markdown-body" markdown="1">

# {{ page.title }}

<div class="article-heading">
configurable and extendable bash customisation
</div>

![php](/img/01-customize-bash.png)

## Features

- easy management of multiple profiles
- easy deployment on multiple machines
- colored prompt : local, ssh, telnet, root
- colored grep, less
- basic aliases
- use aliases width sudo

## Usage

```
  usage : source customize-bash.sh [ -f startup_file ] [ profile ]

    startup_file : .bash_profile, .bash_login, .profile, .bashrc (default)

```

## Setup

### 1. clone

```
git clone https://github.com/frian/customize-bash.git
```

or [download](https://github.com/frian/customize-bash/archive/v1.1.0.tar.gz)

&nbsp;

### 2. create bash_customize_profile.sh

```
cd profiles/default
cp bash_customize_profile.sh.dist bash_customize_profile.sh
```

   add your environment variable

   copy files from samples or add your own files to the profiles/default folder ( files must have .sh extension )

&nbsp;

### 3. install

```
source customize-bash.sh
```

## Create a profile

### 1. create a profile dir

```bash
mkdir profiles/newprofile
```

add a bash_customize_profile.sh file

add needed files

&nbsp;

### 2. install

```bash
. customize-bash.sh newprofile
```

## Changelog

Check the [Changelog](https://github.com/frian/customize-bash/blob/master/CHANGELOG.md)

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

{% include page_tags.html %}

</article>
