const STORAGE_KEY = "sameFrequencyLifeData";

const STAGE_ORDER = ["baby", "junior", "adult"];
const STAGE_LABEL_MAP = {
  egg: "蛋",
  baby: "幼体",
  junior: "亚成体",
  adult: "成体"
};

function createStageForms(baseEmoji, teenEmoji, adultEmoji) {
  return {
    baby: {
      emoji: baseEmoji,
      sizeLabel: "小只",
      pattern: "花纹初现",
      body: "体型偏小",
      behavior: "刚学会观察环境，动作更谨慎。"
    },
    junior: {
      emoji: teenEmoji,
      sizeLabel: "中等",
      pattern: "花纹更清晰",
      body: "体型拉长",
      behavior: "活动更频繁，开始形成稳定习性。"
    },
    adult: {
      emoji: adultEmoji,
      sizeLabel: "成熟",
      pattern: "完整花纹",
      body: "体型稳定",
      behavior: "动作节律与真实习性趋于稳定。"
    }
  };
}

const ANIMAL_LIBRARY = [
  {
    id: "dog",
    name: "狗狗",
    family: "食肉目 犬科",
    level: "普通陪伴型",
    tag: "忠诚陪伴",
    egg: "🐶🥚",
    adultPreview: "长大后会是毛色更深、体型更匀称的成犬。",
    speciesName: "家犬",
    traitHint: "活泼加油",
    stageForms: createStageForms("🐶", "🐕", "🦮"),
    misunderstood: "有些人觉得它太闹，其实它只是想陪你一起动起来。",
    strengths: ["情绪表达直接，能及时给你回应和鼓励。", "陪伴感强，容易建立稳定安全感。", "每天的小互动，会变成长期的情感支持。"],
    habitats: ["多与人类共同生活。", "稳定作息和适量运动会让它更健康。", "文明养宠与责任照护，是最重要的保护方式。"],
    growthWords: "你每一次行动，都会被认真看见，它会一直为你摇尾巴。",
    protectTip: "领养代替购买，科学养护，是给它最踏实的爱。"
  },
  {
    id: "cat",
    name: "猫咪",
    family: "食肉目 猫科",
    level: "普通陪伴型",
    tag: "温柔治愈",
    egg: "🐱🥚",
    adultPreview: "成体会出现更明显的脸部线条和尾部花纹。",
    speciesName: "家猫",
    traitHint: "安静陪伴",
    stageForms: createStageForms("🐱", "🐈", "🐈‍⬛"),
    misunderstood: "很多人觉得猫咪冷淡，其实它在用自己的节奏表达在意。",
    strengths: ["情绪细腻，能敏锐感知环境变化。", "陪伴不打扰，适合慢节奏自我修复。", "规律感强，能帮助你建立稳定日常。"],
    habitats: ["常见于家庭与城市社区。", "安全、干净和可躲藏的空间会让它更安心。", "减少遗弃与不负责任喂养，是对它们最大的保护。"],
    growthWords: "你不必时时高能，平静地坚持，也很有力量。",
    protectTip: "请用长期责任对待每一次相遇，温柔也需要承诺。"
  },
  {
    id: "dung_beetle",
    name: "屎壳郎",
    family: "鞘翅目 金龟甲科",
    level: "小众被误解型",
    tag: "顾家负责",
    egg: "🪲🥚",
    adultPreview: "成体甲壳会更有金属光泽，体型厚实。",
    speciesName: "蜣螂",
    traitHint: "温柔顾家",
    stageForms: createStageForms("🪲", "🪲", "🪲"),
    misunderstood: "它常被误解为“脏”，但它其实在做生态清洁工作。",
    strengths: ["会认真准备育幼食物，照顾后代。", "夫妻协作度高，是典型的“默契家庭型”。", "看起来不起眼，却承担着重要生态角色。"],
    habitats: ["分布在草地、农田与半荒漠区域。", "化学污染会显著影响它们生存。", "减少农药依赖，能帮助它们继续维持土壤循环。"],
    growthWords: "你认真照顾生活的样子，也在悄悄守护很多美好。",
    protectTip: "尊重每一种小生命的价值，生态才能稳定运转。"
  },
  {
    id: "spider",
    name: "蜘蛛",
    family: "蜘蛛目",
    level: "小众被误解型",
    tag: "默默守护",
    egg: "🕸️🥚",
    adultPreview: "可解锁成体预览：可能成长为园蛛系或狼蛛系，体型与纹路差异明显。",
    speciesName: "蜘蛛",
    spiderBreeds: [
      {
        id: "orb_weaver",
        name: "园蛛系",
        preview: "成体体背有环纹，腹部更饱满，织网更规则。",
        adultLook: "圆腹+放射网"
      },
      {
        id: "wolf_spider",
        name: "狼蛛系",
        preview: "成体步足更粗壮，地面巡猎，条纹明显。",
        adultLook: "条纹背甲+强壮步足"
      }
    ],
    traitHint: "安静坚韧",
    stageForms: createStageForms("🕷️", "🕸️🕷️", "🕷️"),
    misunderstood: "不少人对蜘蛛有偏见，但多数蜘蛛对人类无害。",
    strengths: ["会稳定织网，靠耐心完成长期目标。", "天然控制蚊虫，是安静的生态守护者。", "遇到变化时，会迅速调整策略继续生存。"],
    habitats: ["常见于林地、灌丛和建筑边角。", "栖息环境被破坏后，数量会明显下降。", "减少滥用杀虫剂，有助于维持微生态平衡。"],
    growthWords: "那些你不声不响坚持下来的日子，都会变成你的网。",
    protectTip: "给它一点空间，也是在给生态留一个缓冲带。"
  },
  {
    id: "wolf",
    name: "狼",
    family: "食肉目 犬科",
    level: "坚韧努力型",
    tag: "独立坚持",
    egg: "🐺🥚",
    adultPreview: "成体会展现更厚的颈毛和更挺拔的体态。",
    speciesName: "灰狼",
    traitHint: "独立坚韧",
    stageForms: createStageForms("🐺", "🐺", "🐺"),
    misunderstood: "它常被贴上“凶狠”标签，但它更擅长团队协作与纪律。",
    strengths: ["目标感强，面对困难时执行力高。", "在群体中分工清晰，责任感明确。", "耐力出众，适合长期节奏的成长。"],
    habitats: ["主要分布于森林、草原和山地。", "栖息地破碎化会影响它们迁徙与繁衍。", "保护自然廊道能帮助它们稳定生存。"],
    growthWords: "你每一次不放弃，都在训练自己更强大的内核。",
    protectTip: "理解它们在生态中的角色，比标签更重要。"
  },
  {
    id: "bee",
    name: "蜜蜂",
    family: "膜翅目 蜜蜂科",
    level: "坚韧努力型",
    tag: "勤劳自律",
    egg: "🐝🥚",
    adultPreview: "成体会形成更明显黑黄条纹，飞行更稳定。",
    speciesName: "蜜蜂",
    traitHint: "勤劳稳定",
    stageForms: createStageForms("🐝", "🐝", "🐝"),
    misunderstood: "很多人只担心被蜇，却忽略了它们对授粉和食物系统的贡献。",
    strengths: ["节律稳定，执行任务专注高效。", "协作能力强，是典型的“共同成长型”。", "坚持日常微小行动，能产生巨大累计效果。"],
    habitats: ["常见于花源丰富的农田、草地和林地。", "农药与栖息地单一化会影响其种群。", "增加多样化植物种植，能更好支持它们生存。"],
    growthWords: "你每天的一点点努力，终会汇成甜的结果。",
    protectTip: "减少不必要喷药，让花和蜂都能被好好照顾。"
  }
];

const defaultGlobalData = {
  isNewUser: true,
  matchedAnimalId: "",
  profile: {
    matchSource: "",
    companyStyle: "",
    partnerTrait: "",
    animalPreference: "",
    traitSummary: ""
  },
  energy: 30,
  moodScore: 0,
  exp: 0,
  totalFocusMinutes: 0,
  focusSessions: 0,
  checkinCount: 0,
  reviewCount: 0,
  streakDays: 0,
  lastCheckinDate: "",
  lastReviewDate: "",
  hatchProgress: 0,
  hatchDone: false,
  growthStage: "egg",
  growthPoints: 0,
  rematchCount: 0,
  rematchFreeUsed: false,
  dailyGrowthRecord: {
    date: "",
    morningDone: false,
    focusDone: false,
    reviewDone: false
  },
  unlockedTruthCount: 0,
  unlockedHabitatCount: 0,
  seenHatchDoneCard: false,
  achievements: {
    firstFocus: false,
    streak3: false,
    hatchDone: false
  },
  plans: []
};

let globalData = { ...defaultGlobalData };

function loadGlobalData() {
  try {
    const cache = localStorage.getItem(STORAGE_KEY);
    if (!cache) return;
    const parsed = JSON.parse(cache);
    globalData = mergeGlobalData(parsed);
  } catch (err) {
    console.warn("loadGlobalData failed:", err);
  }
}

function mergeGlobalData(cache) {
  return {
    ...defaultGlobalData,
    ...cache,
    profile: {
      ...defaultGlobalData.profile,
      ...(cache.profile || {})
    },
    achievements: {
      ...defaultGlobalData.achievements,
      ...(cache.achievements || {})
    },
    dailyGrowthRecord: {
      ...defaultGlobalData.dailyGrowthRecord,
      ...(cache.dailyGrowthRecord || {})
    },
    plans: Array.isArray(cache.plans) ? cache.plans : []
  };
}

function saveGlobalData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(globalData));
  } catch (err) {
    console.warn("saveGlobalData failed:", err);
  }
}

function getCurrentAnimal() {
  const targetId = globalData.matchedAnimalId;
  const defaultAnimal = ANIMAL_LIBRARY[0];
  return ANIMAL_LIBRARY.find((item) => item.id === targetId) || defaultAnimal;
}

function getRandomAnimal() {
  const index = Math.floor(Math.random() * ANIMAL_LIBRARY.length);
  return ANIMAL_LIBRARY[index];
}

function getStageLabel(stageKey) {
  return STAGE_LABEL_MAP[stageKey] || "未知";
}

function canRematchFree() {
  return !globalData.rematchFreeUsed;
}

function rematchPartner(newAnimalId, profilePayload = {}) {
  const free = canRematchFree();
  globalData.rematchCount += 1;
  if (free) {
    globalData.rematchFreeUsed = true;
  } else {
    globalData.energy = Math.max(0, globalData.energy - 20);
  }
  assignPartner(newAnimalId, {
    ...profilePayload,
    matchSource: free ? "rematch_free" : "rematch_paid"
  });
  saveGlobalData();
  return { free };
}

function assignPartner(animalId, profilePayload = {}) {
  globalData.matchedAnimalId = animalId;
  globalData.isNewUser = false;
  globalData.profile = {
    ...globalData.profile,
    ...profilePayload
  };
  resetPetProgress(false);
  saveGlobalData();
}

function resetPetProgress(keepFreeChance) {
  globalData.hatchProgress = 0;
  globalData.hatchDone = false;
  globalData.growthStage = "egg";
  globalData.growthPoints = 0;
  globalData.unlockedTruthCount = 0;
  globalData.unlockedHabitatCount = 0;
  globalData.seenHatchDoneCard = false;
  globalData.dailyGrowthRecord = {
    date: "",
    morningDone: false,
    focusDone: false,
    reviewDone: false
  };
  if (!keepFreeChance) {
    globalData.rematchFreeUsed = false;
    globalData.rematchCount = 0;
  }
}

function getMoodInfo(score) {
  if (score >= 2) {
    return {
      text: "开心",
      line: "今天也有好好努力呀，我在和你一起变强！"
    };
  }
  if (score >= -1) {
    return {
      text: "普通",
      line: "我们慢慢来，稳定地前进就很好。"
    };
  }
  return {
    text: "低落",
    line: "没关系，休息一下也没关系，我一直都在。"
  };
}

function buildUnlockedList(sourceList, unlockedCount, hintPrefix) {
  const total = sourceList.length;
  const visible = [];
  for (let i = 0; i < total; i += 1) {
    if (i < unlockedCount) {
      visible.push({
        text: sourceList[i],
        locked: false
      });
    } else {
      visible.push({
        text: `???（${hintPrefix} ${i + 1}/${total}）`,
        locked: true
      });
    }
  }
  return visible;
}

function refreshPetData() {
  const mood = getMoodInfo(globalData.moodScore);
  const animal = getCurrentAnimal();
  const unlockedTruths = buildUnlockedList(animal.strengths, globalData.unlockedTruthCount, "继续专注可解锁");
  const unlockedHabitats = buildUnlockedList(animal.habitats, globalData.unlockedHabitatCount, "完成早起打卡可解锁");
  const stageKey = globalData.growthStage || "egg";
  const stageAppearance = animal.stageForms ? animal.stageForms[stageKey] : null;
  const eggView = stageKey === "egg" ? animal.egg : (stageAppearance ? stageAppearance.emoji : "🐣");

  document.getElementById('petAvatar').textContent = eggView;
  document.getElementById('growthStageText').textContent = getStageLabel(stageKey);
  document.getElementById('moodText').textContent = mood.text;
  document.getElementById('petLine').textContent = mood.line;
  document.getElementById('hatchProgressText').textContent = `${globalData.hatchProgress}%`;
  document.getElementById('hatchProgress').style.width = `${globalData.hatchProgress}%`;
  document.getElementById('totalFocusMinutes').textContent = `${globalData.totalFocusMinutes}分钟`;
  document.getElementById('animalName').textContent = animal.name;
  document.getElementById('unlockedCount').textContent = `${globalData.unlockedTruthCount + globalData.unlockedHabitatCount}槽位`;
  document.getElementById('rematchCost').textContent = canRematchFree() ? "首次免费" : "后续消耗20能量";

  const stageAppearanceEl = document.getElementById('stageAppearance');
  if (stageAppearance) {
    stageAppearanceEl.classList.remove('hidden');
    document.getElementById('pattern').textContent = stageAppearance.pattern;
    document.getElementById('body').textContent = stageAppearance.body;
    document.getElementById('behavior').textContent = stageAppearance.behavior;
  } else {
    stageAppearanceEl.classList.add('hidden');
  }
}

function openCard() {
  const animal = getCurrentAnimal();
  const unlockedTruths = buildUnlockedList(animal.strengths, globalData.unlockedTruthCount, "继续专注可解锁");
  const unlockedHabitats = buildUnlockedList(animal.habitats, globalData.unlockedHabitatCount, "完成早起打卡可解锁");

  document.getElementById('lifeTitle').textContent = `${animal.name} · 生命卡片`;
  document.getElementById('animalFamily').textContent = animal.family;
  document.getElementById('animalLevel').textContent = animal.level;
  document.getElementById('adultPreview').textContent = animal.adultPreview;
  document.getElementById('misunderstood').textContent = animal.misunderstood;
  document.getElementById('growthWords').textContent = animal.growthWords;
  document.getElementById('protectTip').textContent = animal.protectTip;

  const spiderBreedsTitle = document.getElementById('spiderBreedsTitle');
  const spiderBreeds = document.getElementById('spiderBreeds');
  if (animal.id === 'spider') {
    spiderBreedsTitle.classList.remove('hidden');
    spiderBreeds.innerHTML = '';
    animal.spiderBreeds.forEach(breed => {
      const div = document.createElement('div');
      div.className = 'detail';
      div.textContent = `- ${breed.name}：${breed.preview}`;
      spiderBreeds.appendChild(div);
    });
  } else {
    spiderBreedsTitle.classList.add('hidden');
    spiderBreeds.innerHTML = '';
  }

  const unlockedTruthsEl = document.getElementById('unlockedTruths');
  unlockedTruthsEl.innerHTML = '';
  unlockedTruths.forEach(item => {
    const div = document.createElement('div');
    div.className = `detail ${item.locked ? 'muted blur' : ''}`;
    div.textContent = `- ${item.text}`;
    unlockedTruthsEl.appendChild(div);
  });

  const unlockedHabitatsEl = document.getElementById('unlockedHabitats');
  unlockedHabitatsEl.innerHTML = '';
  unlockedHabitats.forEach(item => {
    const div = document.createElement('div');
    div.className = `detail ${item.locked ? 'muted blur' : ''}`;
    div.textContent = `- ${item.text}`;
    unlockedHabitatsEl.appendChild(div);
  });

  const cardReadyNote = document.getElementById('cardReadyNote');
  if (globalData.hatchDone) {
    cardReadyNote.classList.remove('hidden');
  } else {
    cardReadyNote.classList.add('hidden');
  }

  document.getElementById('overlay').classList.remove('hidden');
}

function closeCard() {
  document.getElementById('overlay').classList.add('hidden');
}

function rematchPet() {
  const randomAnimal = getRandomAnimal();
  const result = rematchPartner(randomAnimal.id, {
    traitSummary: randomAnimal.traitHint
  });
  const message = result.free
    ? `首次更换免费，你获得了新的宠物蛋：${randomAnimal.egg}`
    : `本次消耗20能量，你获得了新的宠物蛋：${randomAnimal.egg}`;
  alert(`已重新匹配\n${message}`);
  refreshPetData();
}

function init() {
  loadGlobalData();
  refreshPetData();
  
  document.getElementById('petAvatar').addEventListener('click', openCard);
  document.getElementById('rematchBtn').addEventListener('click', rematchPet);
  
  if (!globalData.matchedAnimalId) {
    const defaultAnimal = ANIMAL_LIBRARY[0];
    assignPartner(defaultAnimal.id, {
      traitSummary: defaultAnimal.traitHint
    });
    refreshPetData();
  }
}

window.onload = init;
window.closeCard = closeCard;