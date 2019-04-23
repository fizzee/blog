---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: ja                              # Lang is required
author: ogi
title: test
description: 
excerpt: 
cover: false                         # Leave false if the post does not have cover image, if there is set to true
coverAlt: 
demo: 
categories:
  - test
tags: 
  - test
created_at: 2019-04-22 09:00
updated_at: 2019-04-22 09:00
meta:                                 # If you have cover image
  - property: og:image
    content: /fizzee-icon.png  
  - name: twitter:image
    content: /fizzee-icon.png 
---


## Images

### default rendering
![Minion](/fizzee-icon.png)

### Using lazy-load using IntersectionObserver
<lazy-load tag="img" :data="{ src: '/fizzee-icon.png', alt: 'The Stormtroopocat' }" />
