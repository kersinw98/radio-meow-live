# Radio Meow Live
Indonesian cat-radio livestream overlay for TikTok LIVE Studio.

## Files
- `index.html`: overlay layout and original SVG cat host
- `styles.css`: neon night-radio styling and CSS animation
- `app.js`: idle blink, talking mouth state, follow/like/gift hooks

## Enable GitHub Pages
1. Open repository Settings → Pages.
2. Under Build and deployment choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then Save.
4. Wait for the Pages deployment to finish.

Expected URL: https://kersinw98.github.io/radio-meow-live/

## Event hooks
`window.RadioMeow.onChat(text)`, `onFollow()`, `onLike()`, `onGift(name)`, `onSpeechStart()`, `onSpeechEnd()`.
These are visual hooks only. A separate TikFinity event bridge, AI backend and Indonesian TTS are still required. Do not put API keys or TikTok credentials in this public repository.

Start with 720p / 30 FPS. Test in a separate LIVE Studio scene before replacing any existing setup.