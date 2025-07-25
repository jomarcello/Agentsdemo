#!/bin/bash

# Advanced Demo Deployment with Railway API
# Usage: ./deploy-advanced.sh "Client Name" "Practice Type" "Primary Color"

set -e

if [ $# -lt 1 ]; then
    echo "Usage: $0 \"Client Name\" [Practice Type] [Primary Color]"
    exit 1
fi

CLIENT_NAME="$1"
PRACTICE_TYPE="${2:-general}"
PRIMARY_COLOR="${3:-#2563eb}"
RAILWAY_TOKEN="eacfe3d5-7724-42c7-89d8-62028455eddc"

# Generate branch name
BRANCH_NAME="demo/$(echo "$CLIENT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')"
EXPECTED_URL="https://agentsdemo-$(echo "$BRANCH_NAME" | sed 's/\//-/g').up.railway.app"

echo "🚀 Advanced deployment for: $CLIENT_NAME"
echo "📍 Branch: $BRANCH_NAME"
echo "🌐 Expected URL: $EXPECTED_URL"

# Create and deploy branch (same as before)
git checkout main
git pull origin main
git checkout -b "$BRANCH_NAME" 2>/dev/null || git checkout "$BRANCH_NAME"

# Update practice configuration
cat > src/lib/practice-config.ts << EOF
export const practiceConfig = {
  name: "$CLIENT_NAME",
  type: "$PRACTICE_TYPE",
  primaryColor: "$PRIMARY_COLOR",
  
  // Contact info
  phone: "+44 20 7000 0000",
  address: "123 Medical Street, London, UK",
  
  // Branding
  logo: null,
  
  // Services
  services: [
    "General Consultations",
    "Health Screenings", 
    "Treatment Planning",
    "Follow-up Care"
  ],
  
  // Demo settings
  enableVoiceDemo: true,
  enableChatDemo: true,
  showPricing: true,
  
  // CTA settings
  calendlyUrl: "https://calendly.com/your-calendar-link",
  ctaEnabled: true
};
EOF

# Commit and push
git add .
git commit -m "Demo setup for $CLIENT_NAME - $PRACTICE_TYPE practice" || echo "No changes to commit"
git push origin "$BRANCH_NAME"

echo ""
echo "✅ Branch deployed to GitHub!"
echo "🔄 Checking Railway deployment status..."

# Wait and check deployment
sleep 10

# Test if URL is live (with timeout)
for i in {1..30}; do
    if curl -s --connect-timeout 5 "$EXPECTED_URL" > /dev/null 2>&1; then
        echo "✅ Demo is LIVE!"
        echo "🌐 URL: $EXPECTED_URL"
        break
    else
        echo "⏳ Waiting for Railway deployment... ($i/30)"
        sleep 10
    fi
    
    if [ $i -eq 30 ]; then
        echo "⚠️  Deployment taking longer than expected"
        echo "🌐 URL: $EXPECTED_URL (may still be deploying)"
        echo "💡 Check Railway dashboard: https://railway.app/dashboard"
    fi
done

echo ""
echo "📋 Demo Ready:"
echo "   Client: $CLIENT_NAME"
echo "   URL: $EXPECTED_URL"
echo "   Branch: $BRANCH_NAME"
echo ""
echo "🔄 To update: git checkout $BRANCH_NAME && git push origin $BRANCH_NAME"