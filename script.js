/**
 * 同频生命 - 核心 JavaScript 逻辑 (Web 版)
 */

const STORAGE_KEY = "sameFrequencyLifeData_Web";

// 动物库数据
const ANIMAL_LIBRARY = [
  {
    id: "dog", name: "狗狗", family: "食肉目 犬科", level: "普通陪伴型", tag: "忠诚陪伴", egg: "🐶🥚",
    adultPreview: "长大后会是毛色更深、体型更匀称的成犬。",
    traitHint: "活泼加油",
    stageForms: {
      baby: { emoji: "🐶", sizeLabel: "小只", behavior: "刚学会观察环境，动作更谨慎。" },
      junior: { emoji: "🐕", sizeLabel: "中等", behavior: "活动更频繁，开始形成稳定习性。" },
      adult: { emoji: "🦮", sizeLabel: "成熟", behavior: "动作节律与真实习性趋于稳定。" }
    },
    strengths: ["情绪表达直接，能及时给你回应和鼓励。", "陪伴感强，容易建立稳定安全感。", "每天的小互动，会变成长期的情感支持。"],
    habitats: ["多与人类共同生活。", "稳定作息和适量运动会让它更健康。", "文明养宠与责任照护，是最重要的保护方式。"],
    growthWords: "你每一次行动，都会被认真看见，它会一直为你摇尾巴。"
  },
  {
    id: "cat", name: "猫咪", family: "食肉目 猫科", level: "普通陪伴型", tag: "温柔治愈", egg: "🐱🥚",
    adultPreview: "成体会出现更明显的脸部线条和尾部花纹。",
    traitHint: "安静陪伴",
    stageForms: {
      baby: { emoji: "🐱", sizeLabel: "小只", behavior: "刚学会观察环境，动作更谨慎。" },
      junior: { emoji: "🐈", sizeLabel: "中等", behavior: "活动更频繁，开始形成稳定习性。" },
      adult: { emoji: "🐈‍⬛", sizeLabel: "成熟", behavior: "动作节律与真实习性趋于稳定。" }
    },
    strengths: ["情绪细腻，能敏锐感知环境变化。", "陪伴不打扰，适合慢节奏自我修复。", "规律感强，能帮助你建立稳定日常。"],
    habitats: ["常见于家庭与城市社区。", "安全、干净和可躲藏的空间会让它更安心。", "减少遗弃与不负责任喂养，是对它们最大的保护。"],
    growthWords: "你不必时时高能，平静地坚持，也很有力量。"
  },
  {
    id: "snake", name: "小蛇", family: "有鳞目 蛇亚目", level: "小众被误解型", tag: "冷静自律", egg: "🐍🥚",
    adultPreview: "成体鳞片会更有质感，体态优雅。案例：INTJ 的冷静伙伴。",
    traitHint: "安静内敛",
    stageForms: {
      baby: { emoji: "🐍", sizeLabel: "小只", behavior: "安静潜伏。" },
      junior: { emoji: "🐍", sizeLabel: "中等", behavior: "规律蜕皮。" },
      adult: { emoji: "🐍", sizeLabel: "成熟", behavior: "极致专注。" }
    },
    strengths: ["极其安静，从不制造噪音或打扰。", "耐力惊人，能长时间专注待在自己的空间。", "低耗能且自律，是精神世界强大的象征。"],
    habitats: ["森林、草原、荒漠等多种环境。", "对温度和湿度敏感，需要精确的生存条件。", "保护它们就是保护生物多样性的重要一环。"],
    growthWords: "不张扬的坚持，往往拥有最震撼的力量。"
  },
  {
    id: "turtle", name: "陆龟", family: "龟鳖目 陆龟科", level: "稳定长久型", tag: "稳打稳扎", egg: "🐢🥚",
    adultPreview: "背甲会出现更漂亮的生长纹，体型厚实稳重。",
    traitHint: "踏实稳定",
    stageForms: {
      baby: { emoji: "🐢", sizeLabel: "小只", behavior: "动作缓慢。" },
      junior: { emoji: "🐢", sizeLabel: "中等", behavior: "有规律地进食。" },
      adult: { emoji: "🐢", sizeLabel: "成熟", behavior: "稳如泰山。" }
    },
    strengths: ["性格温和，从不急躁，能带给你内心的平静。", "寿命极长，是真正能陪伴你一生的长期伙伴。", "做事有自己的节奏，不受外界干扰。"],
    habitats: ["干燥的草原、灌木丛或林缘地带。", "受非法贸易和栖息地丧失威胁严重。", "选择人工繁育个体，不购买野生捕获个体。"],
    growthWords: "慢一点没关系，只要一直在前进就好。"
  },
  {
    id: "rabbit", name: "兔子", family: "兔形目 兔科", level: "温柔治愈型", tag: "敏感细腻", egg: "🐰🥚",
    adultPreview: "耳部肌肉更发达，毛发蓬松，眼神灵动。",
    traitHint: "温柔敏锐",
    stageForms: {
      baby: { emoji: "🐰", sizeLabel: "小只", behavior: "机警。" },
      junior: { emoji: "🐰", sizeLabel: "中等", behavior: "活泼。" },
      adult: { emoji: "🐰", sizeLabel: "成熟", behavior: "优雅。" }
    },
    strengths: ["感知力强，能敏锐察觉你的情绪波动。", "动作轻盈，陪伴感温润如水。", "好奇心重，能带你发现生活中微小的好。"],
    habitats: ["草原、灌木丛及人类居住区。", "需要宽敞且安全的活动空间。", "负责任的养护和科学喂养是给它最好的爱。"],
    growthWords: "你的温柔，本身就是一种强大的治愈力量。"
  },
  {
    id: "hamster", name: "仓鼠", family: "啮齿目 仓鼠科", level: "小巧勤奋型", tag: "专注自律", egg: "🐹🥚",
    adultPreview: "毛色更亮，脸颊饱满，运动能力增强。",
    traitHint: "勤劳专注",
    stageForms: {
      baby: { emoji: "🐹", sizeLabel: "小只", behavior: "忙碌。" },
      junior: { emoji: "🐹", sizeLabel: "中等", behavior: "囤积。" },
      adult: { emoji: "🐹", sizeLabel: "成熟", behavior: "有条理。" }
    },
    strengths: ["非常勤劳，总是在自己的跑轮上坚持不懈。", "生活规律，有极强的领地意识和秩序感。", "小巧精致，不占空间却能提供巨大的治愈。"],
    habitats: ["半干旱地区的草原、农田等。", "独居动物，需要独立且丰富的生存空间。", "科学喂养，避免随意弃养。"],
    growthWords: "每一个微小的努力，都在构建你大大的梦想。"
  },
  {
    id: "goldfish", name: "金鱼", family: "鲤形目 鲤科", level: "安静陪伴型", tag: "优雅从容", egg: "🐠🥚",
    adultPreview: "尾鳍更飘逸，体色纯正，游姿优雅。",
    traitHint: "安静从容",
    stageForms: {
      baby: { emoji: "🐠", sizeLabel: "小只", behavior: "游动。" },
      junior: { emoji: "🐟", sizeLabel: "中等", behavior: "优雅。" },
      adult: { emoji: "🐡", sizeLabel: "成熟", behavior: "从容。" }
    },
    strengths: ["极具观赏性，能显著缓解焦虑感。", "生活在水中的静谧感，能帮你进入深度思考。", "不需要高强度的互动，是最好的“背景陪伴”。"],
    habitats: ["淡水环境，经过人工长期选育。", "对水质和溶氧量有较高要求。", "维持良好的生态系统是它们健康的关键。"],
    growthWords: "在浮躁的世界里，保持一份内心的清澈与从容。"
  },
  {
    id: "parrot", name: "鹦鹉", family: "鹦形目", level: "互动沟通型", tag: "聪明活泼", egg: "🦜🥚",
    adultPreview: "羽色更加艳丽，模仿能力和互动性大幅提升。",
    traitHint: "聪明活跃",
    stageForms: {
      baby: { emoji: "🦜", sizeLabel: "小只", behavior: "好奇。" },
      junior: { emoji: "🦜", sizeLabel: "中等", behavior: "模仿。" },
      adult: { emoji: "🦜", sizeLabel: "成熟", behavior: "互动。" }
    },
    strengths: ["智商极高，能学习简单的指令和互动。", "情感表达丰富，能像家人一样给予反馈。", "性格乐观，能瞬间点亮你的居家氛围。"],
    habitats: ["热带和亚热带森林。", "需要大量的精神刺激和社交互动。", "拒绝非法野生鸟类贸易，支持合法养殖。"],
    growthWords: "勇敢表达自己，你的声音值得被世界听到。"
  },
  {
    id: "squirrel", name: "松鼠", family: "啮齿目 松鼠科", level: "灵动活力型", tag: "机敏有备", egg: "🐿️🥚",
    adultPreview: "大尾巴更蓬松，动作更敏捷，眼神机警。",
    traitHint: "机敏勤快",
    stageForms: {
      baby: { emoji: "🐿️", sizeLabel: "小只", behavior: "机警。" },
      junior: { emoji: "🐿️", sizeLabel: "中等", behavior: "灵活。" },
      adult: { emoji: "🐿️", sizeLabel: "成熟", behavior: "从容。" }
    },
    strengths: ["机警敏捷，总能快速应对环境的变化。", "有备无患，擅长储藏和规划未来的资源。", "充满活力，能带动你一起保持积极的状态。"],
    habitats: ["各种森林环境，也是城市公园的常客。", "树木和多样化的植被是它们赖以生存的家园。", "保护城市绿地，让它们有安身之所。"],
    growthWords: "未雨绸缪的智慧，让你在未来更加游刃有余。"
  }
];

const QUESTIONS = [
  {
    key: "zodiac", title: "1. 你的星座是？", type: "picker",
    options: [
      { label: "白羊座", value: "白羊" }, { label: "金牛座", value: "金牛" },
      { label: "双子座", value: "双子" }, { label: "巨蟹座", value: "巨蟹" },
      { label: "狮子座", value: "狮子" }, { label: "处女座", value: "处女" },
      { label: "天秤座", value: "天秤" }, { label: "天蝎座", value: "天蝎" },
      { label: "射手座", value: "射手" }, { label: "摩羯座", value: "摩羯" },
      { label: "水瓶座", value: "水瓶" }, { label: "双鱼座", value: "双鱼" }
    ]
  },
  {
    key: "mbti", title: "2. 你的 MBTI 人格类型是？", type: "picker",
    options: [
      { label: "INTJ - 建筑师", value: "INTJ" }, { label: "INFP - 调停者", value: "INFP" },
      { label: "INFJ - 提倡者", value: "INFJ" }, { label: "INTP - 逻辑学家", value: "INTP" },
      { label: "ENTJ - 指挥官", value: "ENTJ" }, { label: "ENTP - 辩论家", value: "ENTP" },
      { label: "ENFJ - 主人公", value: "ENFJ" }, { label: "ENFP - 竞选者", value: "ENFP" },
      { label: "ISTJ - 物流师", value: "ISTJ" }, { label: "ISFJ - 守卫者", value: "ISFJ" },
      { label: "ESTJ - 总经理", value: "ESTJ" }, { label: "ESFJ - 执政官", value: "ESFJ" },
      { label: "ISTP - 鉴赏家", value: "ISTP" }, { label: "ISFP - 探险家", value: "ISFP" },
      { label: "ESTP - 企业家", value: "ESTP" }, { label: "ESFP - 表演者", value: "ESFP" }
    ]
  },
  {
    key: "q1", title: "3. 在社交场合中，你通常处于哪种状态？",
    options: [
      { label: "A. 安静观察，更享受独处的充电时光", value: "A" },
      { label: "B. 积极互动，在与人交流中获取能量", value: "B" }
    ]
  },
  {
    key: "q2", title: "4. 面对一项新任务，你的起步方式是？",
    options: [
      { label: "A. 深思熟虑，制定出详细的计划再开始", value: "A" },
      { label: "B. 先做起来，在实践过程中不断调整方向", value: "B" }
    ]
  },
  {
    key: "q3", title: "5. 当朋友向你诉苦时，你下意识的反应是？",
    options: [
      { label: "A. 给予情感上的共鸣与温柔的安慰", value: "A" },
      { label: "B. 冷静分析问题，尝试给出务实的建议", value: "B" }
    ]
  },
  {
    key: "q4", title: "6. 你理想的学习或工作环境是怎样的？",
    options: [
      { label: "A. 绝对的安静，只有自己和当下的任务", value: "A" },
      { label: "B. 有一定的背景音或互动，不感到孤单", value: "B" }
    ]
  },
  {
    key: "q5", title: "7. 你是否愿意尝试去了解并接纳那些可能被大众误解的生物（如蛇）？",
    options: [
      { label: "A. 愿意，它们也有独特的魅力和温柔", value: "A" },
      { label: "B. 暂时不考虑，更倾向于外表亲和、有安全感的生物", value: "B" }
    ]
  }
];

class VirtualPetApp {
  constructor() {
    this.data = this.loadData();
    this.timer = null;
    this.currentQuizIndex = 0;
    this.quizAnswers = {};
    this.selectedReviewStatus = "";
    this.init();
  }

  loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const defaultData = {
      isNewUser: true,
      matchedAnimalId: "",
      energy: 30,
      moodScore: 0,
      exp: 0,
      totalFocusMinutes: 0,
      focusSessions: 0,
      streakDays: 0,
      reviewCount: 0,
      hatchProgress: 0,
      hatchDone: false,
      growthStage: "egg",
      growthPoints: 0,
      unlockedTruthCount: 0,
      unlockedHabitatCount: 0,
      lastCheckDate: "",
      dailyTask: { goal: "", totalTarget: 0, dailyMinutes: 0, currentProgress: 0, date: "" },
      plans: [],
      dailyGrowthRecord: { morningDone: false, focusDone: false, reviewDone: false, date: "" },
      reviewHistory: []
    };
    if (saved) {
      const parsed = JSON.parse(saved);
      // 检查跨天重置
      const today = this.getTodayStr();
      if (parsed.dailyTask && parsed.dailyTask.date !== today) {
        parsed.dailyTask.currentProgress = 0;
        parsed.dailyTask.date = today;
      }
      if (parsed.dailyGrowthRecord && parsed.dailyGrowthRecord.date !== today) {
        parsed.dailyGrowthRecord = { morningDone: false, focusDone: false, reviewDone: false, date: today };
      }
      return { ...defaultData, ...parsed };
    }
    return defaultData;
  }

  saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    this.updateUI();
  }

  getTodayStr() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  init() {
    // 初始化页面显示
    if (this.data.isNewUser) {
      this.showPage('match');
    } else {
      this.showPage('focus');
      document.getElementById('tab-bar').classList.remove('hidden');
    }

    // 绑定专注页面事件
    const durationOptions = document.getElementById('duration-options');
    durationOptions.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip')) {
        durationOptions.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('timer-display').innerText = `${e.target.dataset.minutes}:00`;
      }
    });

    const restOptions = document.getElementById('rest-options');
    restOptions.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip')) {
        restOptions.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
      }
    });

    // 绑定任务编辑器输入
    document.getElementById('input-daily-total').addEventListener('input', () => this.updateSuggestedMinutes());
    document.getElementById('input-daily-days').addEventListener('input', () => this.updateSuggestedMinutes());

    this.updateUI();
  }

  showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    // 更新导航栏状态
    document.querySelectorAll('.tab-item').forEach(item => {
      const tabText = item.querySelector('.tab-text').innerText;
      const mapping = { '专注': 'focus', '宠物': 'pet', '我的': 'mine' };
      if (mapping[tabText] === pageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    if (pageId === 'focus') {
      this.renderPlanList();
      this.updateCheckinStatus();
    }
    if (pageId === 'pet') this.refreshPetPage();
    if (pageId === 'mine') this.refreshMinePage();
  }

  updateCheckinStatus() {
    const daily = this.data.dailyGrowthRecord;
    const morningBtn = document.getElementById('morning-checkin-btn');
    const nightBtn = document.getElementById('night-review-btn');

    if (daily.morningDone) {
      morningBtn.innerText = "今日已完成喂食打卡";
      morningBtn.disabled = true;
    } else {
      morningBtn.innerText = "早起打卡喂食";
      morningBtn.disabled = false;
    }

    if (daily.reviewDone) {
      nightBtn.innerText = "今日复盘已完成";
      nightBtn.disabled = true;
    } else {
      nightBtn.innerText = "提交今日复盘";
      nightBtn.disabled = false;
    }
  }

  switchTab(tabId) {
    if (this.timer) {
      if (!confirm('正在专注/休息中，切换页面将停止计时，确定吗？')) return;
      this.stopTimer();
    }
    this.showPage(tabId);
  }

  // --- 匹配逻辑 ---
  startQuiz() {
    this.currentQuizIndex = 0;
    this.quizAnswers = {};
    document.getElementById('modal-quiz').classList.remove('hidden');
    this.renderQuizStep();
  }

  renderQuizStep() {
    const q = QUESTIONS[this.currentQuizIndex];
    document.getElementById('quiz-step').innerText = `第 ${this.currentQuizIndex + 1} / ${QUESTIONS.length} 题`;
    document.getElementById('quiz-question-title').innerText = q.title;
    
    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';

    if (q.type === 'picker') {
      const picker = document.createElement('div');
      picker.className = 'picker-container';
      const select = document.createElement('select');
      select.className = 'picker-select';
      select.innerHTML = '<option value="">请选择...</option>' + 
        q.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
      select.onchange = (e) => {
        this.quizAnswers[q.key] = e.target.value;
        this.updateQuizNextBtn();
      };
      picker.appendChild(select);
      container.appendChild(picker);
    } else {
      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        if (this.quizAnswers[q.key] === opt.value) btn.classList.add('selected');
        btn.innerText = opt.label;
        btn.onclick = () => {
          this.quizAnswers[q.key] = opt.value;
          this.renderQuizStep();
        };
        container.appendChild(btn);
      });
    }
    this.updateQuizNextBtn();
  }

  updateQuizNextBtn() {
    const q = QUESTIONS[this.currentQuizIndex];
    const btn = document.getElementById('quiz-next-btn');
    btn.disabled = !this.quizAnswers[q.key];
    btn.innerText = this.currentQuizIndex === QUESTIONS.length - 1 ? '完成匹配' : '下一题';
  }

  nextQuizStep() {
    if (this.currentQuizIndex < QUESTIONS.length - 1) {
      this.currentQuizIndex++;
      this.renderQuizStep();
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    const answers = this.quizAnswers;
    const userAnswersList = [answers.q1, answers.q2, answers.q3, answers.q4, answers.q5];
    const matchedId = this.calculateMatchResult(userAnswersList, answers.mbti, answers.zodiac);
    this.assignPartner(matchedId, "quiz");
  }

  randomPick() {
    const randomAnimal = ANIMAL_LIBRARY[Math.floor(Math.random() * ANIMAL_LIBRARY.length)];
    this.assignPartner(randomAnimal.id, "random");
  }

  calculateMatchResult(userAnswers, mbtiType, zodiac) {
    let petScores = { snake: 0, turtle: 0, rabbit: 0, cat: 0, hamster: 0, goldfish: 0, parrot: 0, dog: 0, squirrel: 0 };
    const mbtiMatch = {
      INTJ: { snake: 40, turtle: 30 }, INFP: { rabbit: 40, cat: 30 }, INFJ: { cat: 40, turtle: 30 }, INTP: { snake: 40, goldfish: 30 },
      ENTJ: { dog: 40, squirrel: 20 }, ENTP: { squirrel: 40, parrot: 30 }, ENFJ: { dog: 40, parrot: 30 }, ENFP: { dog: 40, parrot: 30 },
      ISTJ: { turtle: 40, goldfish: 30 }, ISFJ: { rabbit: 40, cat: 30 }, ESTJ: { dog: 40, hamster: 30 }, ESFJ: { dog: 40, rabbit: 30 },
      ISTP: { snake: 40, hamster: 30 }, ISFP: { cat: 40, goldfish: 30 }, ESTP: { dog: 40, squirrel: 30 }, ESFP: { dog: 40, parrot: 30 }
    };
    const weights = mbtiMatch[mbtiType] || { dog: 20 };
    Object.keys(weights).forEach(pet => petScores[pet] += weights[pet]);
    const elements = { water: ['巨蟹', '天蝎', '双鱼'], earth: ['金牛', '处女', '摩羯'], wind: ['双子', '天秤', '水瓶'], fire: ['白羊', '狮子', '射手'] };
    let element = 'fire';
    for (let key in elements) if (elements[key].includes(zodiac)) element = key;
    const zodiacBonus = { water: { cat: 20, rabbit: 20 }, earth: { turtle: 20, goldfish: 20 }, wind: { parrot: 20, squirrel: 15 }, fire: { dog: 20, squirrel: 15 } };
    Object.keys(zodiacBonus[element]).forEach(pet => petScores[pet] += zodiacBonus[element][pet]);
    userAnswers.forEach((ans, i) => {
      if (i === 0 && ans === 'A') { petScores.turtle += 10; petScores.goldfish += 10; petScores.snake += 5; }
      if (i === 0 && ans === 'B') { petScores.dog += 10; petScores.parrot += 10; petScores.squirrel += 5; }
      if (i === 4 && ans === 'B') petScores.snake -= 100;
    });
    return Object.entries(petScores).sort((a, b) => b[1] - a[1])[0][0];
  }

  assignPartner(animalId, source) {
    const animal = ANIMAL_LIBRARY.find(a => a.id === animalId);
    this.data.matchedAnimalId = animalId;
    this.data.isNewUser = false;
    this.data.hatchProgress = 0;
    this.data.hatchDone = false;
    this.data.growthStage = "egg";
    this.data.unlockedTruthCount = 0;
    this.data.unlockedHabitatCount = 0;
    this.saveData();

    document.getElementById('modal-quiz').classList.add('hidden');
    document.getElementById('modal-result').classList.remove('hidden');
    document.getElementById('result-emoji').innerText = animal.egg;
    document.getElementById('result-animal-name').innerText = animal.name;
    document.getElementById('result-desc').innerText = `你的专属伙伴是${animal.name}，它正等你一起成长！`;
    
    const science = document.getElementById('science-card');
    if (animalId === 'snake') {
      science.classList.remove('hidden');
      document.getElementById('science-text').innerText = "【深度科普】\n• 被误解的点：常被认为带有危险或冷冰冰。\n• 真实优点：它是天然的“静谧大师”，极低耗能且极其自律。\n• 温柔特质：它从不吵闹，只是在角落默默陪伴。";
    } else {
      science.classList.add('hidden');
    }
  }

  closeResultAndStart() {
    document.getElementById('modal-result').classList.add('hidden');
    document.getElementById('tab-bar').classList.remove('hidden');
    this.showPage('focus');
  }

  // --- 成长计划逻辑 (补全) ---
  togglePlanEditor() {
    const editor = document.getElementById('plan-editor');
    const btn = document.getElementById('plan-edit-btn');
    if (editor.classList.contains('hidden')) {
      editor.classList.remove('hidden');
      btn.innerText = "取消";
    } else {
      editor.classList.add('hidden');
      btn.innerText = "编辑";
    }
  }

  saveCustomPlan() {
    const title = document.getElementById('input-plan-title').value;
    const total = parseInt(document.getElementById('input-plan-total').value);
    const daily = parseInt(document.getElementById('input-plan-daily').value);
    const unit = document.getElementById('input-plan-unit').value;

    if (!title || isNaN(total) || isNaN(daily) || !unit) return alert('请填写完整计划信息');

    const newPlan = {
      id: Date.now().toString(),
      title,
      totalTarget: total,
      dailyTarget: daily,
      unit,
      totalProgress: 0,
      dailyProgress: 0,
      lastUpdateDate: this.getTodayStr(),
      isDone: false
    };

    this.data.plans.push(newPlan);
    this.saveData();
    this.togglePlanEditor();
    this.renderPlanList();
    
    // 清空输入
    document.getElementById('input-plan-title').value = '';
    document.getElementById('input-plan-total').value = '';
    document.getElementById('input-plan-daily').value = '';
    document.getElementById('input-plan-unit').value = '';
  }

  renderPlanList() {
    const container = document.getElementById('plan-list');
    container.innerHTML = '';
    const today = this.getTodayStr();

    this.data.plans.forEach(plan => {
      // 检查跨天重置每日进度
      if (plan.lastUpdateDate !== today) {
        plan.dailyProgress = 0;
        plan.isDone = false;
        plan.lastUpdateDate = today;
      }

      const percent = Math.min(100, Math.floor((plan.totalProgress / plan.totalTarget) * 100));
      const item = document.createElement('div');
      item.className = 'plan-item';
      item.innerHTML = `
        <div class="plan-info-top">
          <div class="plan-title-box">
            <span class="plan-title">${plan.title}</span>
            <span class="plan-badge">${plan.isDone ? '今日已达成' : '进行中'}</span>
          </div>
          <span class="plan-progress-text">${plan.totalProgress} / ${plan.totalTarget} ${plan.unit}</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${percent}%"></div>
        </div>
        <div class="plan-actions">
          <span class="plan-line">今日：${plan.dailyProgress} / ${plan.dailyTarget}</span>
          <div class="btn-group">
            <button class="quick-add-btn" onclick="app.addPlanProgress('${plan.id}')">+1 ${plan.unit}</button>
            <button class="quick-add-btn" style="color:var(--danger-color); margin-left:8px;" onclick="app.deletePlan('${plan.id}')">删除</button>
          </div>
        </div>
      `;
      container.appendChild(item);
    });
    
    this.updateGrowthSummary();
  }

  addPlanProgress(id) {
    const plan = this.data.plans.find(p => p.id === id);
    if (!plan) return;
    plan.totalProgress++;
    plan.dailyProgress++;
    if (plan.dailyProgress >= plan.dailyTarget) plan.isDone = true;
    this.saveData();
    this.renderPlanList();
  }

  deletePlan(id) {
    if (!confirm('确定删除此计划吗？')) return;
    this.data.plans = this.data.plans.filter(p => p.id !== id);
    this.saveData();
    this.renderPlanList();
  }

  updateGrowthSummary() {
    const daily = this.data.dailyGrowthRecord;
    const doneCount = (daily.morningDone ? 1 : 0) + (daily.focusDone ? 1 : 0) + (daily.reviewDone ? 1 : 0);
    const stage = this.getStageLabel(this.data.growthStage);
    document.getElementById('growth-summary-line').innerText = `成长阶段：${stage} ｜ 今日自律完成项：${doneCount} / 3`;
  }

  getStageLabel(stage) {
    const map = { egg: '蛋', baby: '幼年期', junior: '成长期', adult: '成熟期' };
    return map[stage] || stage;
  }

  // --- 早起打卡逻辑 (补全) ---
  morningCheckin() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour + minute / 60;

    if (currentTime < 4.5 || currentTime > 8) {
      return alert('打卡失败：请在 04:30 - 08:00 之间打卡。');
    }

    if (this.data.dailyGrowthRecord.morningDone) {
      return alert('今日已经打过卡了，明天再来吧！');
    }

    this.data.dailyGrowthRecord.morningDone = true;
    this.data.energy += 20;
    this.data.moodScore = Math.min(3, this.data.moodScore + 1);
    this.data.hatchProgress = Math.min(100, this.data.hatchProgress + 5);
    this.saveData();
    this.updateUI();
    this.renderPlanList();
    alert('早起打卡成功！能量+20，宠物心情变好了。');
  }

  // --- 今日复盘逻辑 (补全) ---
  submitNightReview() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 20 || hour > 23) {
      // return alert('复盘失败：请在 20:00 - 23:59 之间进行今日复盘。');
      // 为了测试方便，暂时不强限制，但提示
      console.log('非复盘时间段');
    }

    const q1 = document.getElementById('review-q1').value;
    const q2 = document.getElementById('review-q2').value;
    const q3 = document.getElementById('review-q3').value;
    const q4 = document.getElementById('review-q4').value;

    if (!q1 || !q2 || !q3 || !q4) return alert('请填写完整的复盘内容，每一个思考都很重要。');

    if (this.data.dailyGrowthRecord.reviewDone) {
      return alert('今日已经提交过复盘了。');
    }

    this.data.dailyGrowthRecord.reviewDone = true;
    this.data.exp += 30;
    this.data.reviewCount++;
    this.data.reviewHistory.push({
      date: this.getTodayStr(),
      type: 'night_review',
      content: { q1, q2, q3, q4 }
    });

    this.saveData();
    this.updateUI();
    this.renderPlanList();
    alert('复盘提交成功！经验值+30。');
    
    // 清空输入
    ['review-q1', 'review-q2', 'review-q3', 'review-q4'].forEach(id => document.getElementById(id).value = '');
  }

  // --- 专注逻辑 ---
  toggleDailyTaskEditor() {
    const editor = document.getElementById('daily-task-editor');
    const isEmpty = document.getElementById('daily-task-empty');
    const isInfo = document.getElementById('daily-task-info');
    const btn = document.getElementById('daily-task-edit-btn');
    
    if (editor.classList.contains('hidden')) {
      editor.classList.remove('hidden');
      isEmpty.classList.add('hidden');
      isInfo.classList.add('hidden');
      btn.innerText = "收起";
    } else {
      editor.classList.add('hidden');
      btn.innerText = this.data.dailyTask.goal ? "修改目标" : "设定目标";
      if (this.data.dailyTask.goal) isInfo.classList.remove('hidden');
      else isEmpty.classList.remove('hidden');
    }
  }

  updateSuggestedMinutes() {
    const total = parseInt(document.getElementById('input-daily-total').value) || 0;
    const days = parseInt(document.getElementById('input-daily-days').value) || 0;
    const preview = document.getElementById('split-preview');
    if (total > 0 && days > 0) {
      const suggested = Math.ceil(total / days);
      document.getElementById('suggested-minutes').innerText = suggested;
      preview.classList.remove('hidden');
    } else {
      preview.classList.add('hidden');
    }
  }

  saveDailyTask() {
    const goal = document.getElementById('input-daily-goal').value;
    const total = parseInt(document.getElementById('input-daily-total').value);
    const days = parseInt(document.getElementById('input-daily-days').value);
    if (!goal || !total || !days) return alert('请填写完整信息');

    this.data.dailyTask = {
      goal,
      totalTarget: total,
      dailyMinutes: Math.ceil(total / days),
      currentProgress: 0,
      date: this.getTodayStr()
    };
    this.saveData();
    this.toggleDailyTaskEditor();
  }

  startFocus() {
    const mins = parseInt(document.querySelector('#duration-options .chip.active').dataset.minutes);
    this.startTimer(mins, 'focus');
  }

  startRest() {
    const mins = parseInt(document.querySelector('#rest-options .chip.active').dataset.minutes);
    this.startTimer(mins, 'rest');
  }

  startTimer(minutes, type) {
    if (this.timer) return;
    let seconds = minutes * 60;
    this.updateTimerDisplay(seconds);
    document.getElementById('timer-tip').classList.remove('hidden');
    document.getElementById('timer-tip').innerText = type === 'focus' ? '专注中，请保持节奏。' : '休息中，陪伴在你身边。';
    document.getElementById('start-focus-btn').disabled = true;
    document.getElementById('start-rest-btn').disabled = true;

    this.timer = setInterval(() => {
      seconds--;
      this.updateTimerDisplay(seconds);
      if (seconds <= 0) {
        this.stopTimer();
        if (type === 'focus') this.handleFocusComplete(minutes);
        else alert('休息结束！');
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
    document.getElementById('timer-tip').classList.add('hidden');
    document.getElementById('start-focus-btn').disabled = false;
    document.getElementById('start-rest-btn').disabled = false;
  }

  updateTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    document.getElementById('timer-display').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  handleFocusComplete(minutes) {
    this.data.energy += 10;
    this.data.exp += 10;
    this.data.totalFocusMinutes += minutes;
    this.data.focusSessions += 1;
    if (this.data.dailyTask.goal) this.data.dailyTask.currentProgress += minutes;

    // 增加成长进度
    this.data.hatchProgress = Math.min(100, this.data.hatchProgress + 10);
    if (this.data.hatchProgress >= 100 && !this.data.hatchDone) {
      this.data.hatchDone = true;
      this.data.growthStage = "baby";
    } else if (this.data.hatchDone) {
      this.data.growthPoints += 10;
      if (this.data.growthPoints >= 240) this.data.growthStage = "adult";
      else if (this.data.growthPoints >= 120) this.data.growthStage = "junior";
    }

    // 解锁真相/栖息地
    const animal = ANIMAL_LIBRARY.find(a => a.id === this.data.matchedAnimalId);
    if (this.data.unlockedTruthCount < animal.strengths.length) this.data.unlockedTruthCount++;

    this.saveData();
    this.triggerReview(minutes);
  }

  triggerReview(minutes) {
    const feedbacks = ["这一段，没有断", "我看到你刚刚，没有离开", "你专注的样子，我也很喜欢", "我们又同步了一点点", "刚才的你，在闪闪发光"];
    document.getElementById('review-feedback-text').innerText = feedbacks[Math.floor(Math.random() * feedbacks.length)];
    const animal = ANIMAL_LIBRARY.find(a => a.id === this.data.matchedAnimalId);
    document.getElementById('review-pet-emoji').innerText = this.getPetEmoji(animal);
    
    document.getElementById('modal-review').classList.remove('hidden');
    document.getElementById('review-step-1').classList.remove('hidden');
    document.getElementById('review-step-2').classList.add('hidden');
    this.selectedReviewStatus = "";
    document.getElementById('review-next-btn').disabled = true;
    document.querySelectorAll('.review-option').forEach(opt => opt.classList.remove('selected'));
  }

  selectReviewStatus(status) {
    this.selectedReviewStatus = status;
    document.querySelectorAll('.review-option').forEach(opt => {
      if (opt.innerText === status) opt.classList.add('selected');
      else opt.classList.remove('selected');
    });
    document.getElementById('review-next-btn').disabled = false;
  }

  nextReviewStep() {
    document.getElementById('review-step-1').classList.add('hidden');
    document.getElementById('review-step-2').classList.remove('hidden');
  }

  finishReview() {
    const text = document.getElementById('review-input').value;
    this.data.reviewHistory.push({ date: this.getTodayStr(), status: this.selectedReviewStatus, text });
    this.data.reviewCount++;
    this.saveData();
    document.getElementById('modal-review').classList.add('hidden');
    alert('记录成功！');
  }

  // --- 宠物页面逻辑 ---
  refreshPetPage() {
    const animal = ANIMAL_LIBRARY.find(a => a.id === this.data.matchedAnimalId);
    if (!animal) return;
    document.getElementById('pet-emoji-main').innerText = this.getPetEmoji(animal);
    document.getElementById('pet-name-display').innerText = this.data.hatchDone ? animal.name : "宠物蛋";
    document.getElementById('pet-mood-text').innerText = this.data.moodScore >= 2 ? "开心" : "普通";
    document.getElementById('pet-line-display').innerText = animal.growthWords;
    
    const progress = this.data.hatchDone ? (this.data.growthPoints / 240 * 100) : this.data.hatchProgress;
    document.getElementById('growth-progress-fill').style.width = `${progress}%`;
    document.getElementById('growth-progress-text').innerText = `${Math.floor(progress)}%`;
  }

  getPetEmoji(animal) {
    if (!this.data.hatchDone) return animal.egg.split('')[0];
    const stage = this.data.growthStage;
    return animal.stageForms[stage].emoji;
  }

  openPetCard() {
    const animal = ANIMAL_LIBRARY.find(a => a.id === this.data.matchedAnimalId);
    document.getElementById('modal-pet-card').classList.remove('hidden');
    document.getElementById('pet-desc-full').innerText = animal.adultPreview;
    
    const truthList = document.getElementById('unlocked-truths');
    truthList.innerHTML = animal.strengths.map((s, i) => 
      `<li>${i < this.data.unlockedTruthCount ? s : '??? (继续专注解锁)'}</li>`).join('');
      
    const habitatList = document.getElementById('unlocked-habitats');
    habitatList.innerHTML = animal.habitats.map((h, i) => 
      `<li>${i < this.data.unlockedHabitatCount ? h : '??? (达成特定成就解锁)'}</li>`).join('');
  }

  closePetCard() {
    document.getElementById('modal-pet-card').classList.add('hidden');
  }

  rematchPet() {
    if (confirm('重新匹配将重置当前宠物的成长进度，确定吗？')) {
      this.data.isNewUser = true;
      this.closePetCard();
      this.showPage('match');
      document.getElementById('tab-bar').classList.add('hidden');
    }
  }

  // --- 我的页面逻辑 ---
  refreshMinePage() {
    document.getElementById('streak-days').innerText = this.data.streakDays;
    document.getElementById('total-focus-min').innerText = this.data.totalFocusMinutes;
    document.getElementById('total-sessions').innerText = this.data.focusSessions;
    document.getElementById('total-reviews').innerText = this.data.reviewCount;
  }

  resetData() {
    if (confirm('确定要清除所有本地数据并重新开始吗？此操作不可撤销。')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  }

  // --- UI 更新 ---
  updateUI() {
    // 全局数据更新
    const energyEls = document.querySelectorAll('#global-energy');
    energyEls.forEach(el => el.innerText = this.data.energy);
    
    const hatchEls = document.querySelectorAll('#global-hatch');
    hatchEls.forEach(el => el.innerText = this.data.hatchProgress);

    // 任务进度更新
    const task = this.data.dailyTask;
    const info = document.getElementById('daily-task-info');
    const empty = document.getElementById('daily-task-empty');
    const editBtn = document.getElementById('daily-task-edit-btn');

    if (task.goal) {
      info.classList.remove('hidden');
      empty.classList.add('hidden');
      editBtn.innerText = "修改目标";
      document.getElementById('display-task-goal').innerText = `🎯 ${task.goal}`;
      document.getElementById('display-task-split').innerText = `总目标：${task.totalTarget}分钟 ➔ 每日建议：${task.dailyMinutes}分钟`;
      document.getElementById('display-task-progress').innerText = `${task.currentProgress} / ${task.dailyMinutes} 分钟`;
      const percent = Math.min(100, (task.currentProgress / task.dailyMinutes * 100));
      document.getElementById('task-progress-fill').style.width = `${percent}%`;
    } else {
      info.classList.add('hidden');
      empty.classList.remove('hidden');
      editBtn.innerText = "设定目标";
    }
  }
}

// 启动应用
window.app = new VirtualPetApp();
