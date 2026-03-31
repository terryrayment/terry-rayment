#!/usr/bin/env node
/**
 * Create one Mux asset from a **direct** video file URL (https://...mp4 / .mov).
 * Vimeo page links (vimeo.com/123) do not work — download or host the master, then pass that URL.
 *
 * Usage:
 *   export MUX_TOKEN_ID=...
 *   export MUX_TOKEN_SECRET=...
 *   node scripts/upload-one-to-mux.mjs "https://example.com/master.mp4" "optional passthrough label"
 *
 * Prints playback id on success (add to works.ts as muxPlaybackId; remove vimeoVideoId).
 */

import process from "node:process";

const tokenId = process.env.MUX_TOKEN_ID;
const tokenSecret = process.env.MUX_TOKEN_SECRET;
const fileUrl = process.argv[2];
const passthrough = process.argv[3] ?? "upload-one";

if (!tokenId || !tokenSecret) {
  console.error("Set MUX_TOKEN_ID and MUX_TOKEN_SECRET (Mux dashboard → API access).");
  process.exit(1);
}
if (!fileUrl) {
  console.error(
    'Usage: node scripts/upload-one-to-mux.mjs "<direct-video-url>" [passthrough-label]'
  );
  process.exit(1);
}

const auth = Buffer.from(`${tokenId}:${tokenSecret}`).toString("base64");

const res = await fetch("https://api.mux.com/video/v1/assets", {
  method: "POST",
  headers: {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    input: [{ url: fileUrl }],
    playback_policy: ["public"],
    video_quality: "basic",
    passthrough,
  }),
});

const body = await res.json();

if (!res.ok) {
  console.error("Mux API error:", JSON.stringify(body, null, 2));
  process.exit(1);
}

const playbackId = body?.data?.playback_ids?.[0]?.id;
const assetId = body?.data?.id;

if (!playbackId) {
  console.error("Unexpected response:", JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log("asset_id:", assetId);
console.log("playback_id:", playbackId);
console.log(
  "\nIn src/data/works.ts for this piece: set muxPlaybackId to the playback_id and remove vimeoVideoId."
);
