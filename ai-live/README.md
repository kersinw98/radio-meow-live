# Halo Meow! — Local AI LIVE Host Bridge

This local Node service connects the TikFinity Desktop Event API to an Indonesian AI host and the browser overlay.

## Setup
1. Install Node.js 20+ and TikFinity Desktop on the same PC as TikTok LIVE Studio.
2. Copy `.env.example` to `.env`; set `AI_API_KEY`. Never commit `.env`.
3. Run `npm install`, then `npm start`.
4. Open `http://127.0.0.1:8765` in Chrome or add it as a Browser/Webpage source in TikTok LIVE Studio.
5. TikFinity Event API endpoint: `ws://127.0.0.1:21213/`.
6. Check `http://127.0.0.1:8765/health`.

## Events
Chat → AI reply in Bahasa Indonesia; follow/gift/share → spoken acknowledgement; likes are grouped with a cooldown. The overlay uses the browser's installed Indonesian speech voice.

## Important status
This is a real local event/AI bridge scaffold, not a finished Live2D model. The currently approved character file is a flattened PNG. Rigging requires a properly layered PSD with hidden overlaps reconstructed, then Cubism/PSD2Live rigging and export of `.moc3`, `.model3.json`, textures, physics and motion files. No credentials are included. Human moderation is still required.
