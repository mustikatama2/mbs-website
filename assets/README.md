# MBS Website Assets

Drop files here before running deployment. File paths map directly to what the site expects.

## Structure

```
assets/
├── photos/
│   ├── factory/          ← Factory floor, log yard, hot press, warehouse
│   │   ├── logyard.jpg
│   │   ├── production-floor.jpg
│   │   ├── warehouse.jpg
│   │   └── shipping.jpg
│   ├── products/         ← Plywood stack, blockboard edge, panel close-up
│   │   ├── plywood.jpg
│   │   └── blockboard.jpg
│   └── team/             ← Sales contact headshot
│       └── sales-contact.jpg
├── certs/                ← CARB cert scan, JAS cert scan, V-Legal
│   ├── carb-cert.jpg
│   ├── jas-cert.jpg
│   └── vlegal-cert.jpg
└── logo/                 ← Company logo (SVG preferred, PNG ok)
    └── mbs-logo.svg
```

## Photo Guidelines
- **Minimum:** 1200px wide, JPG or WebP
- **Aspect ratio:** 4:3 or 16:9 for cards; 3:2 for hero
- **No watermarks, no dark exposures**

## How to Use
Once uploaded, ping the AI agent with the file paths and it will update the site to use real photos.
