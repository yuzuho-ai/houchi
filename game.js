// =====================================
// 美少女放置RPG - ゲームシステム
// =====================================

// キャラクター定義
const characterDatabase = [
    // ★3 レア
    { id: 'c001', name: 'アリス', rarity: 3, element: 'fire', baseAtk: 50, baseDef: 30, baseHp: 200, avatar: '👧', color: '#ff6b6b', skill: '炎の剣' },
    { id: 'c002', name: 'ルナ', rarity: 3, element: 'water', baseAtk: 40, baseDef: 40, baseHp: 220, avatar: '👱‍♀️', color: '#4ecdc4', skill: '水の盾' },
    { id: 'c003', name: 'ミア', rarity: 3, element: 'wind', baseAtk: 55, baseDef: 25, baseHp: 180, avatar: '👩', color: '#95e1d3', skill: '風の刃' },
    { id: 'c004', name: 'ソフィア', rarity: 3, element: 'earth', baseAtk: 35, baseDef: 50, baseHp: 250, avatar: '👩‍🦰', color: '#dda15e', skill: '大地の守り' },
    // ★4 Sレア
    { id: 'c005', name: 'エレナ', rarity: 4, element: 'fire', baseAtk: 80, baseDef: 45, baseHp: 300, avatar: '👸', color: '#ff4757', skill: '紅蓮の炎' },
    { id: 'c006', name: 'アクア', rarity: 4, element: 'water', baseAtk: 65, baseDef: 60, baseHp: 350, avatar: '🧝‍♀️', color: '#3742fa', skill: '蒼海の波' },
    { id: 'c007', name: 'セレス', rarity: 4, element: 'wind', baseAtk: 85, baseDef: 40, baseHp: 280, avatar: '🧚‍♀️', color: '#2ed573', skill: '翠風の舞' },
    { id: 'c008', name: 'テラ', rarity: 4, element: 'earth', baseAtk: 55, baseDef: 75, baseHp: 400, avatar: '👰', color: '#ff7f50', skill: '岩壁の護り' },
    // ★5 SSレア
    { id: 'c009', name: 'フレイア', rarity: 5, element: 'fire', baseAtk: 120, baseDef: 60, baseHp: 450, avatar: '👑', color: '#ff2e63', skill: '神炎覇斬' },
    { id: 'c010', name: 'ネプチューン', rarity: 5, element: 'water', baseAtk: 100, baseDef: 80, baseHp: 500, avatar: '🧜‍♀️', color: '#1e90ff', skill: '深淵の津波' },
    { id: 'c011', name: 'シルフィード', rarity: 5, element: 'wind', baseAtk: 130, baseDef: 50, baseHp: 420, avatar: '🦋', color: '#00d9ff', skill: '天空裂破' },
    { id: 'c012', name: 'ガイア', rarity: 5, element: 'earth', baseAtk: 90, baseDef: 100, baseHp: 600, avatar: '👼', color: '#ffa502', skill: '大地母神の抱擁' },
];

// 装備定義
const equipmentDatabase = {
    weapon: [
        { id: 'w001', name: '銅の剣', rarity: 1, atk: 5, def: 0, hp: 0 },
        { id: 'w002', name: '鉄の剣', rarity: 2, atk: 15, def: 0, hp: 0 },
        { id: 'w003', name: '鋼の剣', rarity: 3, atk: 30, def: 5, hp: 0 },
        { id: 'w004', name: 'ミスリルソード', rarity: 4, atk: 60, def: 10, hp: 50 },
        { id: 'w005', name: '聖剣エクスカリバー', rarity: 5, atk: 120, def: 20, hp: 100 },
    ],
    armor: [
        { id: 'a001', name: '布の服', rarity: 1, atk: 0, def: 5, hp: 10 },
        { id: 'a002', name: '革の鎧', rarity: 2, atk: 0, def: 15, hp: 30 },
        { id: 'a003', name: '鉄の鎧', rarity: 3, atk: 5, def: 35, hp: 60 },
        { id: 'a004', name: 'ミスリルメイル', rarity: 4, atk: 10, def: 70, hp: 120 },
        { id: 'a005', name: '女神の聖衣', rarity: 5, atk: 30, def: 140, hp: 250 },
    ],
    accessory: [
        { id: 'ac001', name: '木のお守り', rarity: 1, atk: 2, def: 2, hp: 5 },
        { id: 'ac002', name: '銀のネックレス', rarity: 2, atk: 5, def: 5, hp: 15 },
        { id: 'ac003', name: 'ルビーのリング', rarity: 3, atk: 15, def: 10, hp: 30 },
        { id: 'ac004', name: '魔法のティアラ', rarity: 4, atk: 30, def: 25, hp: 80 },
        { id: 'ac005', name: '竜王の首飾り', rarity: 5, atk: 60, def: 50, hp: 150 },
    ]
};

// 敵定義
const enemyTypes = [
    { name: 'スライム', avatar: '🟢', baseHp: 50, baseAtk: 10, baseDef: 5 },
    { name: 'ゴブリン', avatar: '👺', baseHp: 80, baseAtk: 15, baseDef: 8 },
    { name: 'オーク', avatar: '👹', baseHp: 120, baseAtk: 25, baseDef: 15 },
    { name: 'スケルトン', avatar: '💀', baseHp: 100, baseAtk: 30, baseDef: 10 },
    { name: 'ゴースト', avatar: '👻', baseHp: 90, baseAtk: 35, baseDef: 5 },
    { name: 'ワーウルフ', avatar: '🐺', baseHp: 150, baseAtk: 40, baseDef: 20 },
    { name: 'ドラゴン', avatar: '🐉', baseHp: 300, baseAtk: 60, baseDef: 40 },
    { name: 'デーモン', avatar: '😈', baseHp: 250, baseAtk: 70, baseDef: 35 },
    { name: 'リッチ', avatar: '🧙', baseHp: 200, baseAtk: 80, baseDef: 25 },
    { name: '魔王', avatar: '👿', baseHp: 500, baseAtk: 100, baseDef: 60 },
];

// ゲーム状態
let gameState = {
    gold: 1000,
    gems: 100,
    stageLevel: 1,
    maxStageCleared: 0,
    characters: [],
    inventory: [],
    selectedParty: [],
    battleState: null,
    lastSaveTime: Date.now(),
    totalPlayTime: 0,
    settings: {
        autoBattle: true
    }
};

// 現在の戦闘状態
let currentBattle = {
    enemy: null,
    enemyCurrentHp: 0,
    partyCurrentHp: [],
    battleLog: [],
    isActive: false,
    battleTimer: null
};

// UI状態
let currentScreen = 'battle';

// =====================================
// ユーティリティ関数
// =====================================

function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.floor(num).toLocaleString();
}

function getRarityStars(rarity) {
    return '★'.repeat(rarity);
}

function getRarityColor(rarity) {
    const colors = {
        1: '#9e9e9e',
        2: '#4caf50',
        3: '#2196f3',
        4: '#9c27b0',
        5: '#ff9800'
    };
    return colors[rarity] || '#ffffff';
}

function getElementEmoji(element) {
    const emojis = {
        fire: '🔥',
        water: '💧',
        wind: '🌪️',
        earth: '🌍'
    };
    return emojis[element] || '⭐';
}

function calculateExpForLevel(level) {
    return Math.floor(100 * Math.pow(1.5, level - 1));
}

// =====================================
// キャラクター管理
// =====================================

function createCharacterInstance(charData) {
    return {
        uniqueId: Date.now() + Math.random().toString(36).substr(2, 9),
        characterId: charData.id,
        name: charData.name,
        rarity: charData.rarity,
        element: charData.element,
        avatar: charData.avatar,
        color: charData.color,
        skill: charData.skill,
        level: 1,
        exp: 0,
        baseAtk: charData.baseAtk,
        baseDef: charData.baseDef,
        baseHp: charData.baseHp,
        equipment: {
            weapon: null,
            armor: null,
            accessory: null
        }
    };
}

function getCharacterStats(char) {
    const levelBonus = (char.level - 1) * 0.1;
    let atk = Math.floor(char.baseAtk * (1 + levelBonus));
    let def = Math.floor(char.baseDef * (1 + levelBonus));
    let hp = Math.floor(char.baseHp * (1 + levelBonus));

    // 装備ボーナス
    ['weapon', 'armor', 'accessory'].forEach(slot => {
        if (char.equipment[slot]) {
            const equip = gameState.inventory.find(e => e.uniqueId === char.equipment[slot]);
            if (equip) {
                atk += equip.atk;
                def += equip.def;
                hp += equip.hp;
            }
        }
    });

    return { atk, def, hp };
}

function addExpToCharacter(char, exp) {
    char.exp += exp;
    let leveledUp = false;
    
    while (char.exp >= calculateExpForLevel(char.level) && char.level < 100) {
        char.exp -= calculateExpForLevel(char.level);
        char.level++;
        leveledUp = true;
    }
    
    return leveledUp;
}

// =====================================
// ガチャシステム
// =====================================

function doGacha(type) {
    const costs = {
        single: { gems: 30 },
        ten: { gems: 270 }
    };

    const cost = costs[type];
    if (gameState.gems < cost.gems) {
        showNotification('💎 ジェムが足りません！', 'error');
        return null;
    }

    gameState.gems -= cost.gems;
    const count = type === 'ten' ? 10 : 1;
    const results = [];

    for (let i = 0; i < count; i++) {
        const rarity = getGachaRarity(type === 'ten' && i === 9); // 10連最後は★4確定
        const candidates = characterDatabase.filter(c => c.rarity === rarity);
        const selected = candidates[Math.floor(Math.random() * candidates.length)];
        const newChar = createCharacterInstance(selected);
        gameState.characters.push(newChar);
        results.push(newChar);
    }

    saveGame();
    return results;
}

function getGachaRarity(guaranteed4Star = false) {
    const rand = Math.random() * 100;
    
    if (guaranteed4Star) {
        // ★4以上確定
        if (rand < 5) return 5;  // 5%
        return 4;  // 95%
    }
    
    // 通常確率
    if (rand < 2) return 5;      // 2%
    if (rand < 12) return 4;     // 10%
    return 3;                     // 88%
}

// =====================================
// 装備システム
// =====================================

function createEquipmentDrop(stageLevel) {
    const rarityChance = Math.random() * 100;
    let rarity;
    
    if (stageLevel >= 50 && rarityChance < 1) rarity = 5;
    else if (stageLevel >= 30 && rarityChance < 5) rarity = 4;
    else if (stageLevel >= 15 && rarityChance < 15) rarity = 3;
    else if (stageLevel >= 5 && rarityChance < 40) rarity = 2;
    else rarity = 1;

    const types = ['weapon', 'armor', 'accessory'];
    const type = types[Math.floor(Math.random() * types.length)];
    const baseEquip = equipmentDatabase[type].find(e => e.rarity === rarity);
    
    if (!baseEquip) return null;

    // ランダムボーナス
    const bonus = Math.floor(stageLevel / 10);
    
    return {
        uniqueId: Date.now() + Math.random().toString(36).substr(2, 9),
        ...baseEquip,
        type: type,
        atk: baseEquip.atk + Math.floor(Math.random() * bonus * 2),
        def: baseEquip.def + Math.floor(Math.random() * bonus * 2),
        hp: baseEquip.hp + Math.floor(Math.random() * bonus * 5)
    };
}

function equipItem(characterUniqueId, equipmentUniqueId) {
    const char = gameState.characters.find(c => c.uniqueId === characterUniqueId);
    const equip = gameState.inventory.find(e => e.uniqueId === equipmentUniqueId);
    
    if (!char || !equip) return false;

    // 他のキャラから装備を外す
    gameState.characters.forEach(c => {
        if (c.equipment[equip.type] === equipmentUniqueId) {
            c.equipment[equip.type] = null;
        }
    });

    char.equipment[equip.type] = equipmentUniqueId;
    saveGame();
    return true;
}

function unequipItem(characterUniqueId, slot) {
    const char = gameState.characters.find(c => c.uniqueId === characterUniqueId);
    if (!char) return false;
    
    char.equipment[slot] = null;
    saveGame();
    return true;
}

function sellEquipment(equipmentUniqueId) {
    const index = gameState.inventory.findIndex(e => e.uniqueId === equipmentUniqueId);
    if (index === -1) return false;

    const equip = gameState.inventory[index];
    const sellPrice = equip.rarity * 100;
    
    // 装備中か確認
    const equipped = gameState.characters.find(c => 
        c.equipment.weapon === equipmentUniqueId ||
        c.equipment.armor === equipmentUniqueId ||
        c.equipment.accessory === equipmentUniqueId
    );
    
    if (equipped) {
        showNotification('装備中のアイテムは売却できません', 'error');
        return false;
    }

    gameState.gold += sellPrice;
    gameState.inventory.splice(index, 1);
    saveGame();
    showNotification(`${equip.name}を${sellPrice}Gで売却しました`, 'success');
    return true;
}

// =====================================
// 戦闘システム
// =====================================

function createEnemy(stageLevel) {
    const enemyIndex = Math.min(Math.floor(stageLevel / 10), enemyTypes.length - 1);
    const baseEnemy = enemyTypes[enemyIndex];
    const levelMultiplier = 1 + (stageLevel - 1) * 0.15;

    return {
        name: `Lv.${stageLevel} ${baseEnemy.name}`,
        avatar: baseEnemy.avatar,
        level: stageLevel,
        maxHp: Math.floor(baseEnemy.baseHp * levelMultiplier),
        atk: Math.floor(baseEnemy.baseAtk * levelMultiplier),
        def: Math.floor(baseEnemy.baseDef * levelMultiplier),
        expReward: Math.floor(20 * levelMultiplier),
        goldReward: Math.floor(10 * levelMultiplier)
    };
}

function startBattle() {
    if (gameState.selectedParty.length === 0) {
        showNotification('パーティにキャラを編成してください！', 'error');
        return;
    }

    currentBattle.enemy = createEnemy(gameState.stageLevel);
    currentBattle.enemyCurrentHp = currentBattle.enemy.maxHp;
    currentBattle.partyCurrentHp = gameState.selectedParty.map(uniqueId => {
        const char = gameState.characters.find(c => c.uniqueId === uniqueId);
        return char ? getCharacterStats(char).hp : 0;
    });
    currentBattle.battleLog = [];
    currentBattle.isActive = true;

    addBattleLog(`${currentBattle.enemy.name}が現れた！`);
    
    if (currentBattle.battleTimer) {
        clearInterval(currentBattle.battleTimer);
    }
    currentBattle.battleTimer = setInterval(battleTick, 1000);
    
    renderBattleScreen();
}

function battleTick() {
    if (!currentBattle.isActive) return;

    // パーティの攻撃
    let totalDamage = 0;
    gameState.selectedParty.forEach((uniqueId, index) => {
        if (currentBattle.partyCurrentHp[index] <= 0) return;
        
        const char = gameState.characters.find(c => c.uniqueId === uniqueId);
        if (!char) return;
        
        const stats = getCharacterStats(char);
        const damage = Math.max(1, stats.atk - currentBattle.enemy.def / 2);
        totalDamage += damage;
    });

    currentBattle.enemyCurrentHp -= totalDamage;
    if (totalDamage > 0) {
        addBattleLog(`パーティの攻撃！ ${formatNumber(totalDamage)}ダメージ！`);
    }

    // 敵撃破チェック
    if (currentBattle.enemyCurrentHp <= 0) {
        victoryBattle();
        return;
    }

    // 敵の反撃
    const aliveIndices = currentBattle.partyCurrentHp
        .map((hp, i) => hp > 0 ? i : -1)
        .filter(i => i !== -1);
    
    if (aliveIndices.length > 0) {
        const targetIndex = aliveIndices[Math.floor(Math.random() * aliveIndices.length)];
        const targetChar = gameState.characters.find(c => c.uniqueId === gameState.selectedParty[targetIndex]);
        const targetStats = getCharacterStats(targetChar);
        const enemyDamage = Math.max(1, currentBattle.enemy.atk - targetStats.def / 2);
        
        currentBattle.partyCurrentHp[targetIndex] -= enemyDamage;
        addBattleLog(`${currentBattle.enemy.name}の攻撃！ ${targetChar.name}に${formatNumber(enemyDamage)}ダメージ！`);

        // 全滅チェック
        if (currentBattle.partyCurrentHp.every(hp => hp <= 0)) {
            defeatBattle();
            return;
        }
    }

    renderBattleScreen();
}

function victoryBattle() {
    currentBattle.isActive = false;
    if (currentBattle.battleTimer) {
        clearInterval(currentBattle.battleTimer);
    }

    const enemy = currentBattle.enemy;
    gameState.gold += enemy.goldReward;
    
    // 経験値分配
    const expPerChar = Math.floor(enemy.expReward / gameState.selectedParty.length);
    gameState.selectedParty.forEach(uniqueId => {
        const char = gameState.characters.find(c => c.uniqueId === uniqueId);
        if (char) {
            const leveledUp = addExpToCharacter(char, expPerChar);
            if (leveledUp) {
                addBattleLog(`🎉 ${char.name}がレベルアップ！ Lv.${char.level}`);
            }
        }
    });

    // ドロップ
    if (Math.random() < 0.3) { // 30%でドロップ
        const drop = createEquipmentDrop(gameState.stageLevel);
        if (drop) {
            gameState.inventory.push(drop);
            addBattleLog(`📦 ${drop.name}を獲得！`);
        }
    }

    addBattleLog(`⚔️ ${enemy.name}を倒した！`);
    addBattleLog(`💰 ${enemy.goldReward}G獲得！ ⭐ ${expPerChar}EXP獲得！`);

    // ステージ進行
    if (gameState.stageLevel > gameState.maxStageCleared) {
        gameState.maxStageCleared = gameState.stageLevel;
    }
    gameState.stageLevel++;

    saveGame();
    renderBattleScreen();

    // 自動戦闘
    if (gameState.settings.autoBattle) {
        setTimeout(startBattle, 1500);
    }
}

function defeatBattle() {
    currentBattle.isActive = false;
    if (currentBattle.battleTimer) {
        clearInterval(currentBattle.battleTimer);
    }

    addBattleLog(`💀 パーティが全滅した...`);
    
    // ステージを1つ戻す
    if (gameState.stageLevel > 1) {
        gameState.stageLevel = Math.max(1, gameState.stageLevel - 1);
    }

    saveGame();
    renderBattleScreen();

    // 自動戦闘で再挑戦
    if (gameState.settings.autoBattle) {
        setTimeout(startBattle, 3000);
    }
}

function addBattleLog(message) {
    currentBattle.battleLog.unshift({
        time: new Date().toLocaleTimeString(),
        message: message
    });
    if (currentBattle.battleLog.length > 50) {
        currentBattle.battleLog.pop();
    }
}

// =====================================
// パーティ編成
// =====================================

function addToParty(characterUniqueId) {
    if (gameState.selectedParty.length >= 4) {
        showNotification('パーティは最大4人までです', 'error');
        return false;
    }
    if (gameState.selectedParty.includes(characterUniqueId)) {
        showNotification('既にパーティに編成されています', 'error');
        return false;
    }
    
    gameState.selectedParty.push(characterUniqueId);
    saveGame();
    return true;
}

function removeFromParty(characterUniqueId) {
    const index = gameState.selectedParty.indexOf(characterUniqueId);
    if (index !== -1) {
        gameState.selectedParty.splice(index, 1);
        saveGame();
        return true;
    }
    return false;
}

// =====================================
// セーブ/ロード
// =====================================

function saveGame() {
    gameState.lastSaveTime = Date.now();
    localStorage.setItem('bishojoBattleSave', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('bishojoBattleSave');
    if (saved) {
        const loaded = JSON.parse(saved);
        gameState = { ...gameState, ...loaded };
        
        // オフライン報酬計算
        const offlineTime = Date.now() - gameState.lastSaveTime;
        if (offlineTime > 60000) { // 1分以上
            calculateOfflineRewards(offlineTime);
        }
    }
}

function calculateOfflineRewards(offlineTime) {
    const hours = offlineTime / 3600000;
    const maxHours = 12; // 最大12時間分
    const effectiveHours = Math.min(hours, maxHours);
    
    // パーティの戦力に基づいて報酬計算
    let partyPower = 0;
    gameState.selectedParty.forEach(uniqueId => {
        const char = gameState.characters.find(c => c.uniqueId === uniqueId);
        if (char) {
            const stats = getCharacterStats(char);
            partyPower += stats.atk + stats.def + stats.hp / 10;
        }
    });

    if (partyPower > 0) {
        const goldEarned = Math.floor(partyPower * effectiveHours * 10);
        const expEarned = Math.floor(partyPower * effectiveHours * 2);
        
        gameState.gold += goldEarned;
        
        gameState.selectedParty.forEach(uniqueId => {
            const char = gameState.characters.find(c => c.uniqueId === uniqueId);
            if (char) {
                addExpToCharacter(char, Math.floor(expEarned / gameState.selectedParty.length));
            }
        });

        showOfflineBonus(goldEarned, expEarned, effectiveHours);
    }
}

function resetGame() {
    if (confirm('本当にリセットしますか？すべてのデータが消えます。')) {
        localStorage.removeItem('bishojoBattleSave');
        location.reload();
    }
}

// =====================================
// UI レンダリング
// =====================================

function showScreen(screenName) {
    currentScreen = screenName;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${screenName}-screen`)?.classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-screen="${screenName}"]`)?.classList.add('active');

    switch(screenName) {
        case 'battle':
            renderBattleScreen();
            break;
        case 'party':
            renderPartyScreen();
            break;
        case 'gacha':
            renderGachaScreen();
            break;
        case 'inventory':
            renderInventoryScreen();
            break;
    }
}

function renderBattleScreen() {
    const screen = document.getElementById('battle-screen');
    if (!screen) return;

    const partyHtml = gameState.selectedParty.map((uniqueId, index) => {
        const char = gameState.characters.find(c => c.uniqueId === uniqueId);
        if (!char) return '';
        
        const stats = getCharacterStats(char);
        const currentHp = currentBattle.partyCurrentHp[index] || stats.hp;
        const hpPercent = Math.max(0, (currentHp / stats.hp) * 100);
        
        return `
            <div class="party-member" style="border-color: ${char.color}">
                <div class="member-avatar">${char.avatar}</div>
                <div class="member-info">
                    <div class="member-name">${char.name} Lv.${char.level}</div>
                    <div class="hp-bar">
                        <div class="hp-fill" style="width: ${hpPercent}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const enemy = currentBattle.enemy;
    const enemyHpPercent = enemy ? Math.max(0, (currentBattle.enemyCurrentHp / enemy.maxHp) * 100) : 100;

    const battleLogHtml = currentBattle.battleLog.slice(0, 5).map(log => 
        `<div class="log-entry">${log.message}</div>`
    ).join('');

    screen.innerHTML = `
        <div class="battle-header">
            <div class="stage-info">
                <span>📍 ステージ ${gameState.stageLevel}</span>
                <span>🏆 最高: ${gameState.maxStageCleared}</span>
            </div>
        </div>

        <div class="battle-arena">
            <div class="party-side">
                ${partyHtml || '<div class="no-party">パーティを編成してください</div>'}
            </div>
            
            <div class="vs-divider">⚔️</div>
            
            <div class="enemy-side">
                ${enemy ? `
                    <div class="enemy-container">
                        <div class="enemy-avatar ${currentBattle.enemyCurrentHp <= 0 ? 'defeated' : ''}">${enemy.avatar}</div>
                        <div class="enemy-name">${enemy.name}</div>
                        <div class="enemy-hp-bar">
                            <div class="hp-fill enemy" style="width: ${enemyHpPercent}%"></div>
                        </div>
                        <div class="enemy-hp-text">${formatNumber(Math.max(0, currentBattle.enemyCurrentHp))} / ${formatNumber(enemy.maxHp)}</div>
                    </div>
                ` : '<div class="no-enemy">戦闘待機中...</div>'}
            </div>
        </div>

        <div class="battle-log">
            ${battleLogHtml || '<div class="log-entry">戦闘を開始してください</div>'}
        </div>

        <div class="battle-controls">
            <button class="btn btn-primary" onclick="startBattle()" ${currentBattle.isActive ? 'disabled' : ''}>
                ${currentBattle.isActive ? '戦闘中...' : '⚔️ 戦闘開始'}
            </button>
            <label class="auto-battle-toggle">
                <input type="checkbox" ${gameState.settings.autoBattle ? 'checked' : ''} onchange="toggleAutoBattle(this.checked)">
                <span>自動戦闘</span>
            </label>
        </div>
    `;
}

function renderPartyScreen() {
    const screen = document.getElementById('party-screen');
    if (!screen) return;

    const partySlots = [0, 1, 2, 3].map(index => {
        const uniqueId = gameState.selectedParty[index];
        const char = uniqueId ? gameState.characters.find(c => c.uniqueId === uniqueId) : null;
        
        if (char) {
            const stats = getCharacterStats(char);
            const expNeeded = calculateExpForLevel(char.level);
            const expPercent = (char.exp / expNeeded) * 100;
            
            return `
                <div class="party-slot filled" style="border-color: ${char.color}">
                    <div class="slot-avatar">${char.avatar}</div>
                    <div class="slot-info">
                        <div class="slot-name">${getRarityStars(char.rarity)} ${char.name}</div>
                        <div class="slot-level">Lv.${char.level}</div>
                        <div class="exp-bar">
                            <div class="exp-fill" style="width: ${expPercent}%"></div>
                        </div>
                        <div class="slot-stats">
                            ⚔️${stats.atk} 🛡️${stats.def} ❤️${stats.hp}
                        </div>
                    </div>
                    <button class="btn btn-small btn-danger" onclick="removeFromParty('${char.uniqueId}'); renderPartyScreen();">外す</button>
                </div>
            `;
        }
        
        return `<div class="party-slot empty">空きスロット</div>`;
    }).join('');

    const characterListHtml = gameState.characters
        .filter(c => !gameState.selectedParty.includes(c.uniqueId))
        .sort((a, b) => b.rarity - a.rarity || b.level - a.level)
        .map(char => {
            const stats = getCharacterStats(char);
            return `
                <div class="character-card" style="border-color: ${getRarityColor(char.rarity)}">
                    <div class="card-avatar">${char.avatar}</div>
                    <div class="card-info">
                        <div class="card-name" style="color: ${getRarityColor(char.rarity)}">${getRarityStars(char.rarity)} ${char.name}</div>
                        <div class="card-element">${getElementEmoji(char.element)} ${char.element}</div>
                        <div class="card-level">Lv.${char.level}</div>
                        <div class="card-stats">⚔️${stats.atk} 🛡️${stats.def} ❤️${stats.hp}</div>
                    </div>
                    <button class="btn btn-small btn-primary" onclick="addToParty('${char.uniqueId}'); renderPartyScreen();">編成</button>
                </div>
            `;
        }).join('');

    screen.innerHTML = `
        <h2>🎮 パーティ編成</h2>
        <div class="party-slots">
            ${partySlots}
        </div>
        
        <h3>📋 所持キャラクター (${gameState.characters.length})</h3>
        <div class="character-list">
            ${characterListHtml || '<div class="no-characters">キャラクターがいません。ガチャを引きましょう！</div>'}
        </div>
    `;
}

function renderGachaScreen() {
    const screen = document.getElementById('gacha-screen');
    if (!screen) return;

    screen.innerHTML = `
        <h2>🎰 ガチャ</h2>
        <div class="gacha-banner">
            <div class="banner-title">✨ ピックアップガチャ ✨</div>
            <div class="banner-chars">
                ${characterDatabase.filter(c => c.rarity === 5).map(c => c.avatar).join(' ')}
            </div>
            <div class="banner-rates">
                <span>★5: 2%</span>
                <span>★4: 10%</span>
                <span>★3: 88%</span>
            </div>
        </div>
        
        <div class="gacha-buttons">
            <button class="btn btn-gacha single" onclick="performGacha('single')">
                <span class="gacha-label">単発ガチャ</span>
                <span class="gacha-cost">💎 30</span>
            </button>
            <button class="btn btn-gacha ten" onclick="performGacha('ten')">
                <span class="gacha-label">10連ガチャ</span>
                <span class="gacha-cost">💎 270</span>
                <span class="gacha-bonus">★4以上1体確定！</span>
            </button>
        </div>

        <div class="gems-display">
            所持ジェム: 💎 ${formatNumber(gameState.gems)}
        </div>

        <div id="gacha-results"></div>
    `;
}

function performGacha(type) {
    const results = doGacha(type);
    if (!results) return;

    const resultsContainer = document.getElementById('gacha-results');
    if (!resultsContainer) return;

    const resultsHtml = results.map(char => `
        <div class="gacha-result-card" style="border-color: ${getRarityColor(char.rarity)}; animation-delay: ${Math.random() * 0.5}s">
            <div class="result-rarity" style="color: ${getRarityColor(char.rarity)}">${getRarityStars(char.rarity)}</div>
            <div class="result-avatar">${char.avatar}</div>
            <div class="result-name">${char.name}</div>
            <div class="result-element">${getElementEmoji(char.element)}</div>
        </div>
    `).join('');

    resultsContainer.innerHTML = `
        <h3>🎊 ガチャ結果</h3>
        <div class="gacha-results-grid">
            ${resultsHtml}
        </div>
    `;

    // ジェム表示更新
    document.querySelector('.gems-display').innerHTML = `所持ジェム: 💎 ${formatNumber(gameState.gems)}`;
    updateHeader();
}

function renderInventoryScreen() {
    const screen = document.getElementById('inventory-screen');
    if (!screen) return;

    const sortedInventory = [...gameState.inventory].sort((a, b) => b.rarity - a.rarity);

    const inventoryHtml = sortedInventory.map(equip => {
        const equippedBy = gameState.characters.find(c => 
            c.equipment.weapon === equip.uniqueId ||
            c.equipment.armor === equip.uniqueId ||
            c.equipment.accessory === equip.uniqueId
        );

        const typeEmoji = { weapon: '⚔️', armor: '🛡️', accessory: '💍' };
        
        return `
            <div class="inventory-item" style="border-color: ${getRarityColor(equip.rarity)}">
                <div class="item-icon">${typeEmoji[equip.type]}</div>
                <div class="item-info">
                    <div class="item-name" style="color: ${getRarityColor(equip.rarity)}">${getRarityStars(equip.rarity)} ${equip.name}</div>
                    <div class="item-stats">
                        ${equip.atk > 0 ? `⚔️+${equip.atk} ` : ''}
                        ${equip.def > 0 ? `🛡️+${equip.def} ` : ''}
                        ${equip.hp > 0 ? `❤️+${equip.hp}` : ''}
                    </div>
                    ${equippedBy ? `<div class="item-equipped">装備中: ${equippedBy.name}</div>` : ''}
                </div>
                ${!equippedBy ? `<button class="btn btn-small btn-danger" onclick="sellEquipment('${equip.uniqueId}'); renderInventoryScreen();">売却</button>` : ''}
            </div>
        `;
    }).join('');

    // キャラ別装備状況
    const equipmentStatusHtml = gameState.characters
        .filter(c => gameState.selectedParty.includes(c.uniqueId))
        .map(char => {
            const slots = ['weapon', 'armor', 'accessory'].map(slot => {
                const equipId = char.equipment[slot];
                const equip = equipId ? gameState.inventory.find(e => e.uniqueId === equipId) : null;
                const typeEmoji = { weapon: '⚔️', armor: '🛡️', accessory: '💍' };
                
                if (equip) {
                    return `
                        <div class="equip-slot filled" onclick="showEquipModal('${char.uniqueId}', '${slot}')">
                            <span class="slot-type">${typeEmoji[slot]}</span>
                            <span class="slot-name">${equip.name}</span>
                        </div>
                    `;
                }
                return `
                    <div class="equip-slot empty" onclick="showEquipModal('${char.uniqueId}', '${slot}')">
                        <span class="slot-type">${typeEmoji[slot]}</span>
                        <span class="slot-name">なし</span>
                    </div>
                `;
            }).join('');

            return `
                <div class="char-equipment">
                    <div class="char-header">
                        <span class="char-avatar">${char.avatar}</span>
                        <span class="char-name">${char.name}</span>
                    </div>
                    <div class="equip-slots">
                        ${slots}
                    </div>
                </div>
            `;
        }).join('');

    screen.innerHTML = `
        <h2>🎒 装備・アイテム</h2>
        
        <h3>👗 パーティの装備</h3>
        <div class="equipment-status">
            ${equipmentStatusHtml || '<div class="no-party-msg">パーティを編成してください</div>'}
        </div>
        
        <h3>📦 所持アイテム (${gameState.inventory.length})</h3>
        <div class="inventory-list">
            ${inventoryHtml || '<div class="no-items">アイテムがありません</div>'}
        </div>
    `;
}

function showEquipModal(characterUniqueId, slot) {
    const char = gameState.characters.find(c => c.uniqueId === characterUniqueId);
    if (!char) return;

    const availableEquips = gameState.inventory.filter(e => e.type === slot);
    const typeEmoji = { weapon: '⚔️', armor: '🛡️', accessory: '💍' };
    const typeName = { weapon: '武器', armor: '防具', accessory: 'アクセサリー' };

    const equipsHtml = availableEquips.map(equip => {
        const isEquipped = char.equipment[slot] === equip.uniqueId;
        return `
            <div class="modal-equip-item ${isEquipped ? 'equipped' : ''}" onclick="selectEquipment('${characterUniqueId}', '${equip.uniqueId}')">
                <div class="equip-rarity" style="color: ${getRarityColor(equip.rarity)}">${getRarityStars(equip.rarity)}</div>
                <div class="equip-name">${equip.name}</div>
                <div class="equip-stats">⚔️+${equip.atk} 🛡️+${equip.def} ❤️+${equip.hp}</div>
                ${isEquipped ? '<div class="equipped-badge">装備中</div>' : ''}
            </div>
        `;
    }).join('');

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'equip-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${typeEmoji[slot]} ${char.name}の${typeName[slot]}</h3>
                <button class="modal-close" onclick="closeEquipModal()">✕</button>
            </div>
            <div class="modal-body">
                <div class="modal-equip-item" onclick="unequipAndClose('${characterUniqueId}', '${slot}')">
                    <div class="equip-name">装備を外す</div>
                </div>
                ${equipsHtml || '<div class="no-equips">装備可能なアイテムがありません</div>'}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function selectEquipment(characterUniqueId, equipmentUniqueId) {
    equipItem(characterUniqueId, equipmentUniqueId);
    closeEquipModal();
    renderInventoryScreen();
}

function unequipAndClose(characterUniqueId, slot) {
    unequipItem(characterUniqueId, slot);
    closeEquipModal();
    renderInventoryScreen();
}

function closeEquipModal() {
    const modal = document.getElementById('equip-modal');
    if (modal) modal.remove();
}

// =====================================
// その他UI機能
// =====================================

function toggleAutoBattle(enabled) {
    gameState.settings.autoBattle = enabled;
    saveGame();
    
    if (enabled && !currentBattle.isActive && gameState.selectedParty.length > 0) {
        startBattle();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 2700);
}

function showOfflineBonus(gold, exp, hours) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'offline-modal';
    modal.innerHTML = `
        <div class="modal-content offline-bonus">
            <h2>🌙 おかえりなさい！</h2>
            <p>${hours.toFixed(1)}時間の放置報酬</p>
            <div class="offline-rewards">
                <div class="reward-item">💰 ${formatNumber(gold)} G</div>
                <div class="reward-item">⭐ ${formatNumber(exp)} EXP</div>
            </div>
            <button class="btn btn-primary" onclick="document.getElementById('offline-modal').remove()">受け取る</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateHeader() {
    const goldEl = document.getElementById('gold-display');
    const gemsEl = document.getElementById('gems-display');
    if (goldEl) goldEl.textContent = formatNumber(gameState.gold);
    if (gemsEl) gemsEl.textContent = formatNumber(gameState.gems);
}

// =====================================
// 初期化
// =====================================

function init() {
    loadGame();
    
    // 初回プレイ時は初期キャラを付与
    if (gameState.characters.length === 0) {
        const starterChar = characterDatabase.find(c => c.id === 'c001');
        if (starterChar) {
            const newChar = createCharacterInstance(starterChar);
            gameState.characters.push(newChar);
            gameState.selectedParty.push(newChar.uniqueId);
        }
    }

    // ナビゲーション設定
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showScreen(btn.dataset.screen);
        });
    });

    // 定期更新
    setInterval(() => {
        updateHeader();
    }, 100);

    // 自動保存
    setInterval(saveGame, 30000);

    // 初期画面表示
    showScreen('battle');
    updateHeader();

    // 自動戦闘開始
    if (gameState.settings.autoBattle && gameState.selectedParty.length > 0) {
        setTimeout(startBattle, 1000);
    }
}

// ページ離脱時に保存
window.addEventListener('beforeunload', saveGame);
window.addEventListener('visibilitychange', () => {
    if (document.hidden) saveGame();
});

// 初期化実行
document.addEventListener('DOMContentLoaded', init);
