#!/bin/bash
# Upload Terry Rayment portfolio videos to Mux via URL ingest
# Mux will download directly from each URL (must be a direct media file, not a Vimeo page).
#
#   export MUX_TOKEN_ID=...
#   export MUX_TOKEN_SECRET=...

: "${MUX_TOKEN_ID:?Set MUX_TOKEN_ID (Mux dashboard)}"
: "${MUX_TOKEN_SECRET:?Set MUX_TOKEN_SECRET}"

# Output file to collect results
OUTPUT_FILE="$(dirname "$0")/mux-results.json"
echo "[" > "$OUTPUT_FILE"

FIRST=true

upload_to_mux() {
  local title="$1"
  local url="$2"

  echo "Uploading: $title"

  RESPONSE=$(curl -s -X POST "https://api.mux.com/video/v1/assets" \
    -u "$MUX_TOKEN_ID:$MUX_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -d "{
      \"input\": [{\"url\": \"$url\"}],
      \"playback_policy\": [\"public\"],
      \"video_quality\": \"basic\",
      \"passthrough\": \"$title\"
    }")

  ASSET_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['data']['id'])" 2>/dev/null)
  PLAYBACK_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['data']['playback_ids'][0]['id'])" 2>/dev/null)

  if [ -n "$PLAYBACK_ID" ]; then
    echo "  -> Asset: $ASSET_ID | Playback: $PLAYBACK_ID"
    if [ "$FIRST" = true ]; then
      FIRST=false
    else
      echo "," >> "$OUTPUT_FILE"
    fi
    echo "  {\"title\": \"$title\", \"asset_id\": \"$ASSET_ID\", \"playback_id\": \"$PLAYBACK_ID\"}" >> "$OUTPUT_FILE"
  else
    echo "  -> ERROR: $RESPONSE"
  fi
}

# All 19 videos
upload_to_mux 'Ad Council | Magic Hour' 'https://download.wiredrive.com/asset/assetId/127238289/size/primary/ts/1664836127/type/library/client/WD-WV2DA/AD+COUNCIL+-+MAGIC+HOUR+-+PRORES.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Ad Council | Muse' 'https://download.wiredrive.com/asset/assetId/127238288/size/primary/ts/1665099402/type/library/client/WD-WV2DA/MUSE+-+FINISH.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Boars Head | Compromise Elsewhere' 'https://download.wiredrive.com/asset/assetId/130398049/size/primary/ts/1684956019/type/library/client/WD-WV2DA/Boars+Head+-+Compromise+Elsewhere+-+2.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Cadillac | Daring Origins Anthem' 'https://download.wiredrive.com/asset/assetId/91337173/size/primary/ts/1597120535/type/library/client/WD-WV2DA/Cadillac_Anthem_3.21_3-HD+1080p+%281%29.mov?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Cadillac | Tree Hunting' 'https://download.wiredrive.com/asset/assetId/91337116/size/primary/ts/1597163431/type/library/client/WD-WV2DA/Cadillac+%7C+%22Tree+Hunting%22.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Castrol | Larry Fitzgerald' 'https://download.wiredrive.com/asset/assetId/115405277/size/primary/ts/1639174710/type/library/client/WD-WV2DA/FITZ_MASTER_6_CONFORM.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Dodge | Sleep' 'https://download.wiredrive.com/asset/assetId/91337417/size/primary/ts/1597163283/type/library/client/WD-WV2DA/Dodge+-+Sleep-HD.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'DoorDash | Nascar' 'https://download.wiredrive.com/asset/assetId/121345577/size/primary/ts/1651096734/type/library/client/WD-WV2DA/DD_NASCAR_30.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'DoorDash | Snow' 'https://download.wiredrive.com/asset/assetId/118532038/size/primary/ts/1645638045/type/library/client/WD-WV2DA/DRDS2022140H_30_Whole_Neighborhood_Snow_30s_GM_TV_unslated.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Esfuerzo | To Us' 'https://download.wiredrive.com/asset/assetId/91372300/size/primary/ts/1597173556/type/library/client/WD-WV2DA/Esfuerzo+_+Yourself.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Etisalat | The Mechanic' 'https://download.wiredrive.com/asset/assetId/149781309/size/primary/ts/1744935998/type/library/client/WD-WV2DA/Etisalat_TheMechanic_1080p.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'IKEA | First Apartment' 'https://download.wiredrive.com/asset/assetId/91337573/size/primary/ts/1598454187/type/library/client/WD-WV2DA/IKEA+-+First+Apartment.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Jaguar | 00:30 Joyride' 'https://download.wiredrive.com/asset/assetId/91337612/size/primary/ts/1598451502/type/library/client/WD-WV2DA/JAG_DIR_28_30+vsn+a+FINAL.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Kodak | Understanding' 'https://download.wiredrive.com/asset/assetId/91337702/size/primary/ts/1597109393/type/library/client/WD-WV2DA/Kodak+%7C+%22Understanding%22.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Mahindra | First Day of Work' 'https://download.wiredrive.com/asset/assetId/148755008/size/primary/ts/1740689534/type/library/client/WD-WV2DA/Mahindra+-+First+Day+of+Work+-+30+-+2.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Mahindra | Working Together' 'https://download.wiredrive.com/asset/assetId/149335927/size/primary/ts/1742941803/type/library/client/WD-WV2DA/Mahindra+-+Working+Together+-+45.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'MD Lotto | Santa Is That You' 'https://download.wiredrive.com/asset/assetId/148017849/size/primary/ts/1737420901/type/library/client/WD-WV2DA/MD_Lotto_15_3.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Memorial Hermann | Cellist' 'https://download.wiredrive.com/asset/assetId/152174330/size/primary/ts/1758661379/type/library/client/WD-WV2DA/MemorialHermann_Cellist_ProRes.mp4?token=7f06b43f8&category=pres&action=download'

upload_to_mux 'Memorial Hermann | Showstopper' 'https://download.wiredrive.com/asset/assetId/140342772/size/primary/ts/1704828777/type/library/client/WD-WV2DA/140342772_web.mp4?token=7f06b43f8&category=pres&action=download'

echo "" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo ""
echo "Done! Results saved to $OUTPUT_FILE"
