# Halo Meow! — AI Virtual Radio Host

Brand: HALO MEOW! · Indonesian AI radio host · TikTok LIVE vertical scene.

## Production components
- ai-live/: local Node service that receives TikFinity Event API events, sends chat to an AI chat-completions provider, and speaks Indonesian replies in the browser.
- ai-live/LIVE2D_LAYER_MAP.md: PSD layer hierarchy, parameter map, motion list and export quality gate.
- ai-live/README.md: local setup and limitations.

## Run the AI/event bridge
Requires Node.js 20+, TikFinity Desktop on the same PC, and an AI provider API key configured privately in .env. See ai-live/README.md. Do not commit secrets.

## Live2D status
The currently available character art is a flattened transparent PNG, not a layered PSD. A genuine Live2D release requires reconstructing separate layers and hidden overlaps, rigging them, then exporting the Cubism runtime files (.moc3, .model3.json, textures, physics and motions). The layer map is included; a finished rig is not yet present.

Do not describe this repository as a finished autonomous AI streamer until the model is rigged, the AI provider is configured, TikFinity is connected, and the complete setup has been tested in TikTok LIVE Studio.