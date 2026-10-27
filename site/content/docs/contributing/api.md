---
title: "Using the API"
description: "How to use the Ace Archive API"
menu:
  docs:
    parent: "contributing"
weight: 205
---

If you want to export data from Ace Archive, you can either download the nightly
[data export]({{< ref "docs/contributing/export.md" >}}), or you can call this
API.

Instead of a traditional REST API, Ace Archive uses
[JSON-LD](https://json-ld.org/) to provide rich metadata about items in the
collection in a machine-readable format. Rather than have a dedicated API
endpoint, pages on this website can return either a web page or a JSON-LD
document via [HTTP content
negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation).

For example, if you call the following endpoint with an `Accept:
application/ld+json` header, you'll get [this JSON-LD
document](https://acearchive.lgbt/artifacts/orlando-the-asexual-manifesto/index.jsonld).

```
GET https://acearchive.lgbt/artifacts/orlando-the-asexual-manifesto
```

Try querying the following endpoints to see what JSON-LD data they return.

- [https://acearchive.lgbt/artifacts/](https://acearchive.lgbt/artifacts/index.jsonld)
- [https://acearchive.lgbt/artifacts/orlando-the-asexual-manifesto/](https://acearchive.lgbt/artifacts/orlando-the-asexual-manifesto/index.jsonld)
- [https://acearchive.lgbt/collections/Newsjournals and Underground Press/](https://acearchive.lgbt/collections/Newsjournals%20and%20Underground%20Press/index.jsonld)
- [https://acearchive.lgbt/identities/Aromantic/](https://acearchive.lgbt/identities/Aromantic/index.jsonld)
- [https://acearchive.lgbt/people/Jim Sinclair/](https://acearchive.lgbt/people/Jim%20Sinclair/index.jsonld)

Ace Archive uses the [Schema.org](https://schema.org/) vocabulary to describe
items in the collection. The specific properties we use are not currently
considered stable API. Additionally, because two semantically identical JSON-LD
documents can be structured very differently, the exact JSON representation of
this metadata isn't guaranteed to be stable.

You may notice some some URIs in the JSON-LD graph end with a `#this` fragment.
This distinguishes **real-world objects** from **web pages**. For example, take
the following URI:

```
https://acearchive.lgbt/a/MKbNWmmhCog6/
```

It is ambiguous whether the URI above represents *The Asexual Manifesto*, a
historical document, or [this web
page](https://acearchive.lgbt/artifacts/orlando-the-asexual-manifesto/) about
that document. In the knowledge graph, these are distinct objects—a
[`CreativeWork`](https://schema.org/CreativeWork) vs a
[`WebPage`](https://schema.org/WebPage).

In the JSON-LD API, URIs that end in `#this` represent real-world objects. This
approach is [recommended by the W3C](https://www.w3.org/TR/cooluris/).
