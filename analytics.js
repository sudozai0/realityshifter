// Reality Shifter Analytics System

const analytics = firebase.analytics();

// Track game start
function trackGameStart() {
    analytics.logEvent("game_started", {
        timestamp: Date.now()
    });
}

// Track level completion
function trackLevelComplete(levelNumber, timeTaken) {
    analytics.logEvent("level_completed", {
        level: levelNumber,
        time: timeTaken
    });
}

// Track enemy defeated
function trackEnemyDefeated(enemyType) {
    analytics.logEvent("enemy_defeated", {
        enemy: enemyType
    });
}

// Track in-game purchases (e.g., gun skins)
function trackPurchase(itemName, price) {
    analytics.logEvent("purchase", {
        item: itemName,
        amount: price
    });
}

// Track player dimension shifts
function trackDimensionShift() {
    analytics.logEvent("dimension_shift", {
        timestamp: Date.now()
    });
}