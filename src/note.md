---
layout: note
pagination:
  data: api.notes
  size: 1
  alias: note
permalink: "{{ note.path | slugify }}/"
eleventyComputed:
  title: "{{ note.title }}"
---

{{ note.body }}
