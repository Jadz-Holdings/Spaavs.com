# SPAAVS design & content memory

Durable agent memory for this project lives in the Cursor agent store:

`/cursor/stores/self/spaavs/`

| File | Contents |
|------|----------|
| `README.md` | Index |
| `design/DESIGN_SYSTEM.md` | Themes, type, components, UX |
| `brand/LOGO_AND_TAGLINE.md` | Wordmark ≠ tagline rules |
| `content/SITE_CONTENT.md` | Full page copy |
| `content/SITE_CONTENT.json` | Structured content dump |
| `content/FORMS_AND_DATA.md` | Forms & integrations |
| `decisions/PUBLISHING_GATES.md` | Go-live / verification gates |

**Do not commit or publish until the user issues an explicit go-live command.**

Runtime mirror of identity/nav/contact: `src/lib/site.ts`.
