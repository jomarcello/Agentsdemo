#!/bin/bash

# Check Demo Status Script
# Usage: ./check-demo-status.sh [branch-name]

BRANCH_NAME="${1:-demo/test-clinic}"
EXPECTED_URL="https://agentsdemo-$(echo "$BRANCH_NAME" | sed 's/\//-/g').up.railway.app"

echo "🔍 Checking demo status for: $BRANCH_NAME"
echo "🌐 URL: $EXPECTED_URL"
echo ""

# Check if branch exists
if git show-branch "$BRANCH_NAME" >/dev/null 2>&1; then
    echo "✅ Git branch exists: $BRANCH_NAME"
else
    echo "❌ Git branch not found: $BRANCH_NAME"
    exit 1
fi

# Check URL status
echo "🔄 Testing URL connectivity..."

if curl -s --connect-timeout 10 "$EXPECTED_URL" > /dev/null 2>&1; then
    echo "✅ Demo is LIVE and accessible!"
    
    # Get response code
    STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$EXPECTED_URL")
    echo "📊 HTTP Status: $STATUS_CODE"
    
    # Check if it's the correct demo
    if curl -s "$EXPECTED_URL" | grep -q "Test Clinic\|$CLIENT_NAME" 2>/dev/null; then
        echo "✅ Correct demo content detected"
    fi
    
else
    echo "❌ Demo not accessible yet"
    echo "💡 Possible reasons:"
    echo "   - Railway still deploying (wait 2-3 minutes)"
    echo "   - Branch deployments not enabled"
    echo "   - Network connectivity issue"
fi

echo ""
echo "🔗 Quick actions:"
echo "   - Railway Dashboard: https://railway.app/dashboard"
echo "   - GitHub Branch: https://github.com/jomarcello/Agentsdemo/tree/$BRANCH_NAME"
echo "   - Demo URL: $EXPECTED_URL"