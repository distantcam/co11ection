---
layout: note
pagination:
  data: api.notes
  size: 1
  alias: note
permalink: "{{ note.path | slug }}/"
eleventyComputed:
  title: "{{ note.title }}"
---

{{ note.body }}
