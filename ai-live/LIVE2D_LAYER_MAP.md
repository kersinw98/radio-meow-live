# Halo Meow! — Live2D Layer & Rigging Specification

This is the production layer map for the approved modest black/purple cat-ear DJ. It is a build specification, not a claim that a Cubism model has already been rigged.

## Required PSD hierarchy (top to bottom)
- 00_GUIDES (hidden on export)
- 01_FX: cheek blush, eye sparkle
- 02_FRONT_HAIR: ahoge, center bangs, left/right bangs, front side locks
- 03_FACE: neutral + A/I/U/E/O mouth shapes, teeth, tongue; each eye split into upper/lower lids, sclera, iris, pupil and highlights; brows and nose
- 04_HEAD_ACCESSORIES: separate cat ears (outer/inner), headphone band, left/right cups and glow
- 05_HEAD_BASE: face base and ear bases
- 06_BACK_HAIR: main back hair, left/right sections and tips
- 07_BODY: neck, high-neck inner layer, hoodie body/collar/sleeves, hands, drawstrings, zipper and paw badge
- 08_OCCLUSION_REPAIR: hidden hair behind face/shoulders, neck and hoodie under chin, hidden eye/face behind lids, mouth interior

## Minimum parameters
ParamAngleX/Y/Z; ParamBodyAngleX/Y/Z; ParamEyeLOpen; ParamEyeROpen; ParamEyeBallX/Y; ParamBrowLY/RY; ParamMouthOpenY; ParamMouthForm; ParamHairFront/Side/Back; ParamEarL/R; ParamHeadphoneL/R.

## Motions
Idle breathing + hair/ear physics; blink/gaze; Indonesian speech lip-sync; smile/laugh/surprise/shy/concern; follow greeting; gift thank-you; return-to-idle.

## Release quality gate
- No face stickers placed over a flattened face.
- Every moving part has overlap paint to prevent holes during rotation.
- Test head angles, blink, gaze, mouth open and five vowel mouth shapes.
- Test physics at low/high amplitude.
- Export and verify .moc3, .model3.json, textures, .physics3.json, expressions and motions.
- Test in the intended runtime before connecting LIVE events.

## Current blocker
The available character is a single flattened transparent PNG. Splitting visible pixels cannot create a production-ready rig; hidden artwork must be reconstructed. Use the original layered PSD/Procreate/Affinity source if available. Otherwise repaint the character into independent layers before rigging.