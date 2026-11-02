# Somar Sans — licensing status: UNRESOLVED

**Do not treat this as legal clearance. Resolve before any public launch.**

## What the files actually say

Read from the OTF `name` table of `SomarSans-Regular.otf`:

| Field | Value |
|---|---|
| Family (ID 1) | Somar Sans |
| Vendor URL (ID 0 / 11) | https://www.baianat.com/ |
| Designer / Manufacturer (ID 8, 9) | Baianat |
| **License Description (ID 13)** | **absent** |
| **License URL (ID 14)** | **absent** |
| **Copyright (ID 0)** | **no copyright statement** |

The files carry no embedded license terms of any kind.

## Why this matters here

Two separate permissions are needed, and neither is evidenced:

1. **Web embedding.** Serving the WOFF2 files from a Hope Center website is
   distribution to the public. Many free-for-desktop licenses exclude it.
2. **Redistribution.** These font binaries are bundled inside this skill
   archive and inside the `hope-center-brand` skill. Passing a font file to
   another party is redistribution and is separately restricted under most
   licenses.

A font that is free for desktop use is not automatically free to serve or to
ship inside a toolkit.

## Required action

Obtain one of the following from Baianat, or from whoever supplied the fonts
to the organization, and store it in this folder:

- the SIL Open Font License text, if that is the license; or
- the commercial license or purchase record covering **web embedding** and
  **redistribution**, naming Christian Hope Center as licensee.

Then replace this file with the actual license text and remove the warning
from `references/hope-center-brand.md` §8.

## Until it is resolved

- Internal documents, mockups, and previews: proceed.
- **Public websites and apps: do not launch** with these fonts embedded
  without confirming the license.
- If clearance cannot be obtained, the documented fallback is Arial (EN) /
  Tahoma (AR). Both are system fonts and need no embedding — but the brand
  owner must be told the identity is degraded.

## Files in this folder

| Format | Purpose |
|---|---|
| `*.woff2` | Web delivery. ~39 KB per weight. Use these in `@font-face`. |
| `*.otf` | Source of truth. Desktop apps, Word, InDesign, PDF generation. |

The WOFF2 files were generated from the OTFs with `fontTools`. Arabic and
Latin coverage was verified in every weight after conversion.
