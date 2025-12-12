// ゲーム状態
let gameState = {
    gold: 0,
    goldPerSecond: 1,
    totalGold: 0,
    totalClicks: 0,
    enemies: 0,
    lastSaveTime: Date.now(),
    upgrades: {},
    achievements: {}
};

// アップグレード定義
const upgrades = [
    {
        id: 'sword',
        name: '🗡️ 鋼の剣',
        desc: '攻撃力が上がり収入が増加',
        baseCost: 10,
        baseGps: 1,
        costMultiplier: 1.5
    },
    {
        id: 'shield',
        name: '🛡️ 鉄の盾',
        desc: '防御力が上がり収入が増加',
        baseCost: 50,
        baseGps: 5,
        costMultiplier: 1.6
    },
    {
        id: 'armor',
        name: '⚔️ 騎士の鎧',
        desc: '装備を強化して収入が増加',
        baseCost: 200,
        baseGps: 20,
        costMultiplier: 1.7
    },
    {
        id: 'horse',
        name: '🐴 軍馬',
        desc: '移動速度が上がり収入が増加',
        baseCost: 1000,
        baseGps: 100,
        costMultiplier: 1.8
    },
    {
        id: 'castle',
        name: '🏰 城',
        desc: '拠点を建設して収入が大幅増加',
        baseCost: 5000,
        baseGps: 500,
        costMultiplier: 2.0
    },
    {
        id: 'dragon',
        name: '🐉 ドラゴン',
        desc: 'ドラゴンを仲間にして収入爆増',
        baseCost: 25000,
        baseGps: 2500,
        costMultiplier: 2.2
    }
];

// 実績定義
const achievements = [
    { id: 'gold100', name: '💰', desc: '100ゴールド獲得', condition: () => gameState.totalGold >= 100 },
    { id: 'gold1000', name: '💎', desc: '1000ゴールド獲得', condition: () => gameState.totalGold >= 1000 },
    { id: 'gold10000', name: '👑', desc: '10000ゴールド獲得', condition: () => gameState.totalGold >= 10000 },
    { id: 'gold100000', name: '🌟', desc: '100000ゴールド獲得', condition: () => gameState.totalGold >= 100000 },
    { id: 'enemy10', name: '⚔️', desc: '10体の敵を倒す', condition: () => gameState.enemies >= 10 },
    { id: 'enemy100', name: '🏆', desc: '100体の敵を倒す', condition: () => gameState.enemies >= 100 },
    { id: 'enemy1000', name: '🎖️', desc: '1000体の敵を倒す', condition: () => gameState.enemies >= 1000 },
    { id: 'upgrade5', name: '📈', desc: 'アップグレード合計5回', condition: () => getTotalUpgrades() >= 5 },
    { id: 'upgrade25', name: '🚀', desc: 'アップグレード合計25回', condition: () => getTotalUpgrades() >= 25 },
    { id: 'upgrade100', name: '💫', desc: 'アップグレード合計100回', condition: () => getTotalUpgrades() >= 100 },
];

// DOM要素
const goldDisplay = document.getElementById('gold');
const gpsDisplay = document.getElementById('gold-per-sec');
const upgradesList = document.getElementById('upgrades-list');
const achievementsList = document.getElementById('achievements-list');
const battleProgress = document.getElementById('battle-progress');
const battleText = document.getElementById('battle-text');
const hero = document.getElementById('hero');
const enemy = document.getElementById('enemy');
const offlineBonus = document.getElementById('offline-bonus');
const offlineGold = document.getElementById('offline-gold');
const claimBonusBtn = document.getElementById('claim-bonus');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');

// 敵のリスト
const enemies = ['👹', '👻', '🧟', '🦇', '🐺', '🦂', '🕷️', '🐍', '💀', '👿', '🧛', '🧙‍♀️'];
let currentEnemy = enemies[0];
let battleTimer = 0;
const BATTLE_DURATION = 3000; // 3秒で1体倒す

// 初期化
function init() {
    loadGame();
    renderUpgrades();
    renderAchievements();
    checkOfflineProgress();
    
    // ゲームループ開始
    setInterval(gameLoop, 100);
    setInterval(saveGame, 30000); // 30秒ごとに自動保存
    
    // イベントリスナー
    saveBtn.addEventListener('click', () => {
        saveGame();
        showNotification('💾 保存しました！');
    });
    
    resetBtn.addEventListener('click', () => {
        if (confirm('本当にリセットしますか？すべてのデータが消えます。')) {
            localStorage.removeItem('idleQuestSave');
            location.reload();
        }
    });
    
    claimBonusBtn.addEventListener('click', () => {
        offlineBonus.style.display = 'none';
    });
}

// ゲームループ
function gameLoop() {
    // ゴールド加算
    const goldEarned = gameState.goldPerSecond / 10;
    gameState.gold += goldEarned;
    gameState.totalGold += goldEarned;
    
    // バトル進行
    battleTimer += 100;
    const progress = (battleTimer / BATTLE_DURATION) * 100;
    battleProgress.style.width = `${progress}%`;
    
    if (battleTimer >= BATTLE_DURATION) {
        defeatEnemy();
    }
    
    // UI更新
    updateUI();
    checkAchievements();
}

// 敵を倒す
function defeatEnemy() {
    battleTimer = 0;
    gameState.enemies++;
    
    // アニメーション
    hero.classList.add('attacking');
    enemy.classList.add('hit');
    
    setTimeout(() => {
        hero.classList.remove('attacking');
        enemy.classList.remove('hit');
        enemy.classList.add('dead');
        
        setTimeout(() => {
            enemy.classList.remove('dead');
            currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
            enemy.textContent = currentEnemy;
        }, 300);
    }, 300);
    
    battleText.textContent = `敵を倒した！ (合計: ${formatNumber(gameState.enemies)}体)`;
}

// UI更新
function updateUI() {
    goldDisplay.textContent = formatNumber(Math.floor(gameState.gold));
    gpsDisplay.textContent = formatNumber(gameState.goldPerSecond);
    
    // アップグレードボタンの状態更新
    upgrades.forEach(upgrade => {
        const btn = document.querySelector(`[data-upgrade="${upgrade.id}"]`);
        if (btn) {
            const cost = getUpgradeCost(upgrade);
            btn.disabled = gameState.gold < cost;
            btn.textContent = formatNumber(cost);
        }
    });
}

// アップグレード描画
function renderUpgrades() {
    upgradesList.innerHTML = '';
    
    upgrades.forEach(upgrade => {
        const level = gameState.upgrades[upgrade.id] || 0;
        const cost = getUpgradeCost(upgrade);
        const gps = upgrade.baseGps * (level + 1);
        
        const item = document.createElement('div');
        item.className = 'upgrade-item';
        item.innerHTML = `
            <div class="upgrade-info">
                <div class="upgrade-name">${upgrade.name}</div>
                <div class="upgrade-desc">${upgrade.desc}</div>
                <div class="upgrade-stats">Lv.${level} → +${formatNumber(gps)}/秒</div>
            </div>
            <button class="upgrade-btn" data-upgrade="${upgrade.id}">${formatNumber(cost)}</button>
        `;
        
        const btn = item.querySelector('.upgrade-btn');
        btn.addEventListener('click', () => buyUpgrade(upgrade));
        
        upgradesList.appendChild(item);
    });
}

// アップグレード購入
function buyUpgrade(upgrade) {
    const cost = getUpgradeCost(upgrade);
    
    if (gameState.gold >= cost) {
        gameState.gold -= cost;
        gameState.upgrades[upgrade.id] = (gameState.upgrades[upgrade.id] || 0) + 1;
        
        // GPS再計算
        calculateGoldPerSecond();
        
        // UI更新
        renderUpgrades();
        showNotification(`${upgrade.name} をアップグレード！`);
    }
}

// アップグレードコスト計算
function getUpgradeCost(upgrade) {
    const level = gameState.upgrades[upgrade.id] || 0;
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, level));
}

// GPS計算
function calculateGoldPerSecond() {
    let gps = 1; // 基本値
    
    upgrades.forEach(upgrade => {
        const level = gameState.upgrades[upgrade.id] || 0;
        gps += upgrade.baseGps * level;
    });
    
    gameState.goldPerSecond = gps;
}

// 実績描画
function renderAchievements() {
    achievementsList.innerHTML = '';
    
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = 'achievement';
        div.id = `achievement-${achievement.id}`;
        div.textContent = achievement.name;
        div.title = achievement.desc;
        
        if (gameState.achievements[achievement.id]) {
            div.classList.add('unlocked');
        }
        
        achievementsList.appendChild(div);
    });
}

// 実績チェック
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!gameState.achievements[achievement.id] && achievement.condition()) {
            gameState.achievements[achievement.id] = true;
            
            const elem = document.getElementById(`achievement-${achievement.id}`);
            if (elem) {
                elem.classList.add('unlocked');
            }
            
            showNotification(`🏆 実績解除: ${achievement.desc}`);
        }
    });
}

// 総アップグレード数
function getTotalUpgrades() {
    return Object.values(gameState.upgrades).reduce((sum, level) => sum + level, 0);
}

// オフライン進捗チェック
function checkOfflineProgress() {
    const timeDiff = Date.now() - gameState.lastSaveTime;
    const seconds = Math.floor(timeDiff / 1000);
    
    if (seconds > 60) { // 1分以上離れていた場合
        const earned = Math.floor(gameState.goldPerSecond * seconds * 0.5); // オフラインは50%効率
        
        if (earned > 0) {
            gameState.gold += earned;
            gameState.totalGold += earned;
            
            offlineGold.textContent = formatNumber(earned);
            offlineBonus.style.display = 'flex';
        }
    }
}

// 数値フォーマット
function formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + '兆';
    if (num >= 1e8) return (num / 1e8).toFixed(1) + '億';
    if (num >= 1e4) return (num / 1e4).toFixed(1) + '万';
    return Math.floor(num).toLocaleString();
}

// セーブ
function saveGame() {
    gameState.lastSaveTime = Date.now();
    localStorage.setItem('idleQuestSave', JSON.stringify(gameState));
}

// ロード
function loadGame() {
    const saved = localStorage.getItem('idleQuestSave');
    if (saved) {
        const loaded = JSON.parse(saved);
        gameState = { ...gameState, ...loaded };
        calculateGoldPerSecond();
    }
}

// 通知表示
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ページを離れる前に保存
window.addEventListener('beforeunload', saveGame);
window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveGame();
    }
});

// 初期化実行
init();
