// script.js

// グローバル変数：講義データを格納する配列
let lectureList = [
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '笠原　一郎',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '飯塚　秀樹',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '宇治田　紀子',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '笠原　一郎',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '飯塚　秀樹',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '野田　恵子',
  },
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '笠原　一郎',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '飯塚　秀樹',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '宇治田　紀子',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '笠原　一郎',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '飯塚　秀樹',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '野田　恵子',
  },
  {
    'Lecture Name': '英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '宇治田　紀子',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '野田　恵子',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '上級英語読解（１）ａ',
    Schedule: '金３',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '宇治田　紀子',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金４',
    Instructor: '野田　恵子',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '上級英語読解（１）ｂ',
    Schedule: '金３',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｊ．フランシス',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ａ．ページ',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｉ．ヨハンセン',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｅ．ラインボルド',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｊ．フランシス',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ａ．ページ',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｉ．ヨハンセン',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｅ．ラインボルド',
  },
  {
    'Lecture Name': 'Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｊ．フランシス',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ａ．ページ',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｉ．ヨハンセン',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｅ．ラインボルド',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｊ．フランシス',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ａ．ページ',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｉ．ヨハンセン',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｅ．ラインボルド',
  },
  {
    'Lecture Name': 'Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｌ．ファージュ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｐ．バッデン',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火３',
    Instructor: 'Ｔ．オーツ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｌ．ファージュ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｐ．バッデン',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ａ',
    Schedule: '火４',
    Instructor: 'Ｔ．オーツ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｌ．ファージュ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｐ．バッデン',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火３',
    Instructor: 'Ｔ．オーツ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｌ．ファージュ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｐ．バッデン',
  },
  {
    'Lecture Name': 'Advanced Communicative English （1）ｂ',
    Schedule: '火４',
    Instructor: 'Ｔ．オーツ',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '山下　理恵子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '白石　光代',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '山下　理恵子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '白石　光代',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '山下　理恵子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '白石　光代',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '山下　理恵子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '白石　光代',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '叶澤　恵',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火２',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（２）ａ',
    Schedule: '火１',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火２',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '上級英語読解（２）ｂ',
    Schedule: '火１',
    Instructor: '牧野　美季',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水５',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水５',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水５',
    Instructor: 'Ｈ．Ａ．グレイアムマー',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水４',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水４',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （2）ａ',
    Schedule: '水４',
    Instructor: 'Ｈ．Ａ．グレイアムマー',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水５',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水５',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水５',
    Instructor: 'Ｈ．Ａ．グレイアムマー',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水４',
    Instructor: 'Ｆ．Ｓ．トパー',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水４',
    Instructor: 'Ｄ．ホンソン',
  },
  {
    'Lecture Name': 'Communicative English （2）ｂ',
    Schedule: '水４',
    Instructor: 'Ｈ．Ａ．グレイアムマー',
  },
  {
    'Lecture Name': 'Advanced Communicative English （2）ａ',
    Schedule: '水５',
    Instructor: 'Ｊ．ホソヤ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （2）ａ',
    Schedule: '水４',
    Instructor: 'Ｊ．ホソヤ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （2）ｂ',
    Schedule: '水５',
    Instructor: 'Ｊ．ホソヤ',
  },
  {
    'Lecture Name': 'Advanced Communicative English （2）ｂ',
    Schedule: '水４',
    Instructor: 'Ｊ．ホソヤ',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水５',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水５',
    Instructor: '永峰　博之',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水５',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水４',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水４',
    Instructor: '永峰　博之',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ａ',
    Schedule: '水４',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水５',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水５',
    Instructor: '永峰　博之',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水５',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水４',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水４',
    Instructor: '永峰　博之',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ ｂ',
    Schedule: '水４',
    Instructor: '河村　由美子',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ａ',
    Schedule: '水５',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ａ',
    Schedule: '水５',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ａ',
    Schedule: '水４',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ａ',
    Schedule: '水４',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ｂ',
    Schedule: '水５',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ｂ',
    Schedule: '水５',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ｂ',
    Schedule: '水４',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': '上級 ＴＯＥＩＣ ｂ',
    Schedule: '水４',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火４',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火４',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火５',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火５',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火４',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '火４',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '木５',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '木５',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '金２',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語読解（再）',
    Schedule: '金２',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語補講Ⅰ',
    Schedule: '火４',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語補講Ⅰ',
    Schedule: '火５',
    Instructor: '一色　かほる',
  },
  {
    'Lecture Name': '英語補講Ⅱ',
    Schedule: '火４',
    Instructor: '竹内　裕見子',
  },
  {
    'Lecture Name': '英語補講Ⅰ',
    Schedule: '木５',
    Instructor: '中村　理香',
  },
  {
    'Lecture Name': '英語補講Ⅱ',
    Schedule: '金２',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '英語補講Ⅲ',
    Schedule: '金４',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': '英語補講Ⅳ',
    Schedule: '金５',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': 'Communicative English（再）',
    Schedule: '金４',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': 'Communicative English（再）',
    Schedule: '金４',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': 'Communicative English（再）',
    Schedule: '金５',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': 'Communicative English（再）',
    Schedule: '金５',
    Instructor: 'Ｌ．カーン',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（再）',
    Schedule: '金５',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（再）',
    Schedule: '金５',
    Instructor: 'スウィニー　久美子',
  },
  {
    'Lecture Name': '独語（初級）ａ',
    Schedule: '月３、木３',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ａ',
    Schedule: '月２、木５',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ａ',
    Schedule: '火１、水３',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ａ',
    Schedule: '水４、木２',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ａ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '岡本　雅克　他',
  },
  {
    'Lecture Name': '独語（初級）ａ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '岡本　雅克　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ',
    Schedule: '月３、木３',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ',
    Schedule: '月２、木５',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ',
    Schedule: '火１、水３',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ',
    Schedule: '水４、木２',
    Instructor: '松澤　裕樹　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '岡本　雅克　他',
  },
  {
    'Lecture Name': '独語（初級）ｂ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '岡本　雅克　他',
  },
  {
    'Lecture Name': '独語（中級）ａ',
    Schedule: '月１',
    Instructor: '岡本　雅克',
  },
  {
    'Lecture Name': '独語（中級）ａ',
    Schedule: '月２',
    Instructor: '岡本　雅克',
  },
  {
    'Lecture Name': '独語（中級）ａ',
    Schedule: '木３',
    Instructor: '荻原　耕平',
  },
  {
    'Lecture Name': '独語（中級）ａ',
    Schedule: '金３',
    Instructor: '荻原　耕平',
  },
  {
    'Lecture Name': '独語（中級）ｂ',
    Schedule: '月１',
    Instructor: '岡本　雅克',
  },
  {
    'Lecture Name': '独語（中級）ｂ',
    Schedule: '月２',
    Instructor: '岡本　雅克',
  },
  {
    'Lecture Name': '独語（中級）ｂ',
    Schedule: '木３',
    Instructor: '荻原　耕平',
  },
  {
    'Lecture Name': '独語（中級）ｂ',
    Schedule: '金３',
    Instructor: '荻原　耕平',
  },
  {
    'Lecture Name': '仏語（初級）ａ',
    Schedule: '火２、木３',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '仏語（初級）ａ',
    Schedule: '月５、木２',
    Instructor: '伊藤　由利子',
  },
  {
    'Lecture Name': '仏語（初級）ａ',
    Schedule: '月３、水４',
    Instructor: '木村　正彦',
  },
  {
    'Lecture Name': '仏語（初級）ａ',
    Schedule: '月２、水２',
    Instructor: '江口　祥光',
  },
  {
    'Lecture Name': '仏語（初級）ａ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '別役　昌彦　他',
  },
  {
    'Lecture Name': '仏語（初級）ａ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '三枝　大修　他',
  },
  {
    'Lecture Name': '仏語（初級）ｂ',
    Schedule: '火２、木３',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '仏語（初級）ｂ',
    Schedule: '月５、木２',
    Instructor: '伊藤　由利子',
  },
  {
    'Lecture Name': '仏語（初級）ｂ',
    Schedule: '月３、水４',
    Instructor: '木村　正彦',
  },
  {
    'Lecture Name': '仏語（初級）ｂ',
    Schedule: '月２、水２',
    Instructor: '江口　祥光',
  },
  {
    'Lecture Name': '仏語（初級）ｂ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '別役　昌彦　他',
  },
  {
    'Lecture Name': '仏語（初級）ｂ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '三枝　大修　他',
  },
  {
    'Lecture Name': '仏語（中級）ａ',
    Schedule: '水３',
    Instructor: '江口　祥光',
  },
  {
    'Lecture Name': '仏語（中級）ａ',
    Schedule: '水１',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '仏語（中級）ａ',
    Schedule: '月２',
    Instructor: '木村　正彦',
  },
  {
    'Lecture Name': '仏語（中級）ａ',
    Schedule: '水２',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '仏語（中級）ｂ',
    Schedule: '水３',
    Instructor: '江口　祥光',
  },
  {
    'Lecture Name': '仏語（中級）ｂ',
    Schedule: '水１',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '仏語（中級）ｂ',
    Schedule: '月２',
    Instructor: '木村　正彦',
  },
  {
    'Lecture Name': '仏語（中級）ｂ',
    Schedule: '水２',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '仏語（中級）',
    Schedule: '水３',
    Instructor: '江口　祥光',
  },
  {
    'Lecture Name': '仏語（中級）',
    Schedule: '水１',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '仏語（中級）',
    Schedule: '月２',
    Instructor: '木村　正彦',
  },
  {
    'Lecture Name': '仏語（中級）',
    Schedule: '水２',
    Instructor: '福島　亮',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '水１、金１',
    Instructor: '黄　漢青　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '月５、水２',
    Instructor: '黄　漢青　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '木１、金１',
    Instructor: '費　燕　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '水１、金２',
    Instructor: '南　勇　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '月５、水２',
    Instructor: '南　勇　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '火２、木２',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '水１、木２',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ',
    Schedule: '水４、木３',
    Instructor: '戸井　久　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '陳　力衛　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '陳　力衛　他',
  },
  {
    'Lecture Name': '中国語（初級）ａ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '水１、金１',
    Instructor: '黄　漢青　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '月５、水２',
    Instructor: '黄　漢青　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '木１、金１',
    Instructor: '費　燕　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '水１、金２',
    Instructor: '南　勇　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '月５、水２',
    Instructor: '南　勇　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '火２、木２',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '水１、木２',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ',
    Schedule: '水４、木３',
    Instructor: '戸井　久　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ〈再履修〉',
    Schedule: '月５、木５',
    Instructor: '陳　力衛　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '陳　力衛　他',
  },
  {
    'Lecture Name': '中国語（初級）ｂ〈再履修〉',
    Schedule: '月４、木４',
    Instructor: '王　俊文　他',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '金３',
    Instructor: '王　克西',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '金１',
    Instructor: '呉　燕',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '水５',
    Instructor: '戸井　久',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '金２',
    Instructor: '張　明傑',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '金３',
    Instructor: '張　明傑',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '水２',
    Instructor: '劉　岸偉',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '水４',
    Instructor: '王　俊文',
  },
  {
    'Lecture Name': '中国語（中級）ａ',
    Schedule: '金２',
    Instructor: '呉　燕',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '金３',
    Instructor: '王　克西',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '金１',
    Instructor: '呉　燕',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '水５',
    Instructor: '戸井　久',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '金２',
    Instructor: '張　明傑',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '金３',
    Instructor: '張　明傑',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '水２',
    Instructor: '劉　岸偉',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '水４',
    Instructor: '王　俊文',
  },
  {
    'Lecture Name': '中国語（中級）ｂ',
    Schedule: '金２',
    Instructor: '呉　燕',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '火２',
    Instructor: '福島　章雄',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '木２',
    Instructor: '福島　章雄',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '木３',
    Instructor: '石川　智基',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '水４',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '水５',
    Instructor: '宇都宮　涼',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '月５',
    Instructor: '塚田　憲史',
  },
  {
    'Lecture Name': 'データ解析入門Ⅰ',
    Schedule: '金３',
    Instructor: '石川　智基',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '火２',
    Instructor: '福島　章雄',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '木２',
    Instructor: '福島　章雄',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '木３',
    Instructor: '石川　智基',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '水４',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '水５',
    Instructor: '宇都宮　涼',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '月５',
    Instructor: '塚田　憲史',
  },
  {
    'Lecture Name': 'データ解析入門Ⅱ',
    Schedule: '金３',
    Instructor: '石川　智基',
  },
  {
    'Lecture Name': '数学入門Ⅰ',
    Schedule: '金１',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学入門Ⅰ',
    Schedule: '金２',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学入門Ⅱ',
    Schedule: '金１',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学入門Ⅱ',
    Schedule: '金２',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '木１',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '水５',
    Instructor: '木村　剛',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '水３',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '月３',
    Instructor: '木村　剛',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '木３',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': 'データ分析Ⅰ',
    Schedule: '木２',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '木１',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '水５',
    Instructor: '木村　剛',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '水３',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '月３',
    Instructor: '木村　剛',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '木３',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': 'データ分析Ⅱ',
    Schedule: '木２',
    Instructor: '都留　信行',
  },
  {
    'Lecture Name': '民法概論',
    Schedule: '水３',
    Instructor: '森永　淑子',
  },
  {
    'Lecture Name': '商法概論',
    Schedule: '月３',
    Instructor: '堀井　拓也',
  },
  {
    'Lecture Name': '憲法',
    Schedule: '木１',
    Instructor: '久保　健助',
  },
  {
    'Lecture Name': '会社法Ⅰ',
    Schedule: '金３',
    Instructor: '山田　剛志',
  },
  {
    'Lecture Name': '会社法Ⅱ',
    Schedule: '月２',
    Instructor: '山田　剛志',
  },
  {
    'Lecture Name': '国際法Ⅰ',
    Schedule: '水２',
    Instructor: '川﨑　恭治',
  },
  {
    'Lecture Name': '国際法Ⅱ',
    Schedule: '火２',
    Instructor: '佐藤　量介',
  },
  {
    'Lecture Name': '行政法Ⅰ',
    Schedule: '金４',
    Instructor: '村上　裕章',
  },
  {
    'Lecture Name': '行政学',
    Schedule: '金３',
    Instructor: '打越　綾子',
  },
  {
    'Lecture Name': '労働基準法',
    Schedule: '木１',
    Instructor: '後藤　究',
  },
  {
    'Lecture Name': '労働組合法',
    Schedule: '木３',
    Instructor: '後藤　究',
  },
  {
    'Lecture Name': '国際取引法',
    Schedule: '金３',
    Instructor: '桑原　康行',
  },
  {
    'Lecture Name': '社会保障法',
    Schedule: '月２',
    Instructor: '新田　秀樹',
  },
  {
    'Lecture Name': '金融商品取引法',
    Schedule: '月２',
    Instructor: '山田　剛志',
  },
  {
    'Lecture Name': '商取引法',
    Schedule: '水１',
    Instructor: '堀井　拓也',
  },
  {
    'Lecture Name': '経済法Ⅰ',
    Schedule: '月４',
    Instructor: '山部　俊文',
  },
  {
    'Lecture Name': '経済法Ⅱ',
    Schedule: '月４',
    Instructor: '山部　俊文',
  },
  {
    'Lecture Name': '国際経済法',
    Schedule: '火３',
    Instructor: '佐藤　弥恵',
  },
  {
    'Lecture Name': '公務員法・行政組織法',
    Schedule: '金２',
    Instructor: '村上　裕章',
  },
  {
    'Lecture Name': '消費者法Ⅰ',
    Schedule: '金２',
    Instructor: '亀岡　倫史',
  },
  {
    'Lecture Name': '知的財産法',
    Schedule: '木２',
    Instructor: '鈴木　香織',
  },
  {
    'Lecture Name': '外国文化Ⅰａ',
    Schedule: '木４',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '外国文化Ⅰb',
    Schedule: '木４',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '外国文化Ⅰ',
    Schedule: '木４',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '外国文化Ⅱa',
    Schedule: '月５',
    Instructor: '松澤　裕樹',
  },
  {
    'Lecture Name': '外国文化Ⅱb',
    Schedule: '月５',
    Instructor: '松澤　裕樹',
  },
  {
    'Lecture Name': '外国文化ⅡＡ',
    Schedule: '月５',
    Instructor: '松澤　裕樹',
  },
  {
    'Lecture Name': '外国文化Ⅲa',
    Schedule: '月３',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '外国文化Ⅲb',
    Schedule: '月３',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '外国文化IIIＡ',
    Schedule: '月３',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '外国文化Ⅳa',
    Schedule: '水３',
    Instructor: '王　俊文',
  },
  {
    'Lecture Name': '外国文化Ⅳb',
    Schedule: '水３',
    Instructor: '王　俊文',
  },
  {
    'Lecture Name': '外国文化ⅣＡ',
    Schedule: '水３',
    Instructor: '王　俊文',
  },
  {
    'Lecture Name': '心理学ａ',
    Schedule: '木４',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '心理学ｂ',
    Schedule: '木４',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '心理学',
    Schedule: '木４',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': '数学Ⅰａ',
    Schedule: '金３',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学Ⅰｂ',
    Schedule: '金３',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学Ⅰ',
    Schedule: '金３',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学Ⅱａ',
    Schedule: '金４',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学Ⅱｂ',
    Schedule: '金４',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '数学Ⅱ',
    Schedule: '金４',
    Instructor: '船越　正太',
  },
  {
    'Lecture Name': '現代社会とスポーツ',
    Schedule: '金１',
    Instructor: '海老島　均',
  },
  {
    'Lecture Name': 'スポーツ産業論',
    Schedule: '金１',
    Instructor: '海老島　均',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（特級）Ⅰａ',
    Schedule: '金２',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（特級）Ⅰｂ',
    Schedule: '金２',
    Instructor: '新井　学',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（特級）Ⅱａ',
    Schedule: '水２',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': 'ＴＯＥＩＣ（特級）Ⅱｂ',
    Schedule: '水２',
    Instructor: '広田　善典',
  },
  {
    'Lecture Name': 'ＥＡＰ（English for Academic Purposes） ａ',
    Schedule: '木３',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': 'ＥＡＰ（English for Academic Purposes） ｂ',
    Schedule: '木３',
    Instructor: '木村　裕子',
  },
  {
    'Lecture Name': '中国語（特級）ａ',
    Schedule: '火２',
    Instructor: '陳　力衛',
  },
  {
    'Lecture Name': '中国語（特級）ｂ',
    Schedule: '火２',
    Instructor: '陳　力衛',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '木１',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '大西　美里',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: 'Ａ．モルタ',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '菅本　浩幸',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月３',
    Instructor: '大西　美里',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: '塚田　憲史',
  },
  {
    'Lecture Name': 'ミクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '木１',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '大石田　真弥',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: 'Ａ．モルタ',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '菅本　浩幸',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月３',
    Instructor: '大西　美里',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: '塚田　憲史',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月１',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': 'マクロ経済学入門・演習',
    Schedule: '月２',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': '経済学講義・演習Ⅰ',
    Schedule: '木１',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': '経済学講義・演習Ⅰ',
    Schedule: '月３',
    Instructor: '大西　美里',
  },
  {
    'Lecture Name': '経済と社会Ⅰ',
    Schedule: '火１',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': 'ミクロ経済学Ⅰ',
    Schedule: '木４',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': 'ミクロ経済学Ⅱ',
    Schedule: '木４',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': 'ミクロ経済学',
    Schedule: '木４',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': 'マクロ経済学Ⅰ',
    Schedule: '水１',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': 'マクロ経済学Ⅱ',
    Schedule: '水１',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': 'マクロ経済学',
    Schedule: '水１',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': '統計学',
    Schedule: '月３、木５',
    Instructor: '塚原　英敦',
  },
  {
    'Lecture Name': '経済学史Ⅰ',
    Schedule: '金３',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '経済学史Ⅱ',
    Schedule: '金３',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '経済学史',
    Schedule: '金３',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '市場と政府Ⅰ',
    Schedule: '水４',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '市場と政府Ⅱ',
    Schedule: '水４',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '社会経済史Ⅰ',
    Schedule: '月２',
    Instructor: '高見　純',
  },
  {
    'Lecture Name': '社会経済史Ⅱ',
    Schedule: '月２',
    Instructor: '高見　純',
  },
  {
    'Lecture Name': '社会経済史',
    Schedule: '月２',
    Instructor: '高見　純',
  },
  {
    'Lecture Name': '社会政策Ⅰ',
    Schedule: '水２',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '社会政策Ⅱ',
    Schedule: '水２',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '社会政策',
    Schedule: '水２',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '木３',
    Instructor: '福　博充',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '火１',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '火１',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '木４',
    Instructor: '柴田　香奈子',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '木４',
    Instructor: '福　博充',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '火１',
    Instructor: '杉本　義行',
  },
  {
    'Lecture Name': 'フレッシャーズ・セミナー',
    Schedule: '月２',
    Instructor: '大西　美里',
  },
  {
    'Lecture Name': '外国史概説A',
    Schedule: '木３',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '外国史概説B',
    Schedule: '木３',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '外国史概説',
    Schedule: '木３',
    Instructor: '竹田　泉　他',
  },
  {
    'Lecture Name': '社会問題入門',
    Schedule: '水３',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '社会科学入門',
    Schedule: '水３',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '社会科学概論',
    Schedule: '水３',
    Instructor: '森　周子　他',
  },
  {
    'Lecture Name': '経済数学Ⅰ',
    Schedule: '水１',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '経済数学Ⅱ',
    Schedule: '水１',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '経済数学',
    Schedule: '水１',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '経済統計論',
    Schedule: '月３、木５',
    Instructor: '塚原　英敦',
  },
  {
    'Lecture Name': '計量経済学Ⅰ',
    Schedule: '水２',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '計量経済学Ⅱ',
    Schedule: '水２',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '計量経済学',
    Schedule: '水２',
    Instructor: '小池　祐太',
  },
  {
    'Lecture Name': '経済思想史Ⅰ',
    Schedule: '木３',
    Instructor: '板井　広明',
  },
  {
    'Lecture Name': '経済思想史Ⅱ',
    Schedule: '木３',
    Instructor: '板井　広明',
  },
  {
    'Lecture Name': '経済思想史',
    Schedule: '木３',
    Instructor: '板井　広明',
  },
  {
    'Lecture Name': '金融論Ⅰ',
    Schedule: '月５',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': '金融論Ⅱ',
    Schedule: '月５',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': '国際金融論Ⅰ',
    Schedule: '木３',
    Instructor: '根本　忠宣',
  },
  {
    'Lecture Name': '国際金融論Ⅱ',
    Schedule: '木３',
    Instructor: '根本　忠宣',
  },
  {
    'Lecture Name': '財政学Ⅰ',
    Schedule: '火１',
    Instructor: '鞠　重鎬',
  },
  {
    'Lecture Name': '財政学Ⅱ',
    Schedule: '火３',
    Instructor: '鞠　重鎬',
  },
  {
    'Lecture Name': '公共経済学Ⅰ',
    Schedule: '水１',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': '公共経済学Ⅱ',
    Schedule: '水１',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': '医療経済論Ⅰ',
    Schedule: '水２',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': '医療経済論Ⅱ',
    Schedule: '水２',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': '国際貿易論Ⅰ',
    Schedule: '月４',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': '国際貿易論Ⅱ',
    Schedule: '月４',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': '開発経済学Ⅰ',
    Schedule: '金２',
    Instructor: '庄司　匡宏',
  },
  {
    'Lecture Name': '開発経済学Ⅱ',
    Schedule: '水５',
    Instructor: '和田　義郎',
  },
  {
    'Lecture Name': '食料・資源経済論Ⅰ',
    Schedule: '木１',
    Instructor: '中村　哲也',
  },
  {
    'Lecture Name': '食料・資源経済論Ⅱ',
    Schedule: '金３',
    Instructor: '中村　哲也',
  },
  {
    'Lecture Name': '環境経済学Ⅰ',
    Schedule: '月３',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '環境経済学Ⅱ',
    Schedule: '月３',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '日本経済史Ⅰ',
    Schedule: '月２',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '日本経済史Ⅱ',
    Schedule: '月２',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '日本経済史',
    Schedule: '月２',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '西洋経済史Ⅰ',
    Schedule: '木５',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '西洋経済史Ⅱ',
    Schedule: '木５',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '西洋経済史',
    Schedule: '木５',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '東洋経済史Ⅰ',
    Schedule: '月１',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '東洋経済史Ⅱ',
    Schedule: '月１',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '東洋経済史',
    Schedule: '月１',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '現代経済史Ⅰ',
    Schedule: '金２',
    Instructor: '杉山　里枝',
  },
  {
    'Lecture Name': '現代経済史Ⅱ',
    Schedule: '金２',
    Instructor: '杉山　里枝',
  },
  {
    'Lecture Name': '現代経済史',
    Schedule: '金２',
    Instructor: '杉山　里枝',
  },
  {
    'Lecture Name': '社会思想史Ⅰ',
    Schedule: '木２',
    Instructor: '鳴子　博子',
  },
  {
    'Lecture Name': '社会思想史Ⅱ',
    Schedule: '木２',
    Instructor: '鳴子　博子',
  },
  {
    'Lecture Name': '社会思想史',
    Schedule: '木２',
    Instructor: '鳴子　博子',
  },
  {
    'Lecture Name': '社会保障論Ⅰ',
    Schedule: '金１',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '社会保障論Ⅱ',
    Schedule: '金１',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '社会保障論',
    Schedule: '金１',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '社会デザイン論Ⅰ',
    Schedule: '月４',
    Instructor: '八木橋　慶一',
  },
  {
    'Lecture Name': '社会デザイン論Ⅱ',
    Schedule: '月４',
    Instructor: '八木橋　慶一',
  },
  {
    'Lecture Name': '社会デザイン論',
    Schedule: '月４',
    Instructor: '八木橋　慶一',
  },
  {
    'Lecture Name': '日本経済論Ａ',
    Schedule: '火４',
    Instructor: '田口　博之',
  },
  {
    'Lecture Name': '日本経済論Ⅰ',
    Schedule: '火４',
    Instructor: '田口　博之',
  },
  {
    'Lecture Name': '世界経済事情Ａ',
    Schedule: '火２',
    Instructor: '玉木　伸介',
  },
  {
    'Lecture Name': '世界経済事情Ⅰ',
    Schedule: '火２',
    Instructor: '玉木　伸介',
  },
  {
    'Lecture Name': '国際関係論Ⅰ',
    Schedule: '木４',
    Instructor: '石川　卓',
  },
  {
    'Lecture Name': '国際関係論Ⅱ',
    Schedule: '木４',
    Instructor: '石川　卓',
  },
  {
    'Lecture Name': '国際関係論',
    Schedule: '木４',
    Instructor: '石川　卓',
  },
  {
    'Lecture Name': '英経済書講読Ⅰ',
    Schedule: '木５',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '英経済書講読Ⅱ',
    Schedule: '木５',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '英経済書講読',
    Schedule: '木５',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '仏経済書講読A',
    Schedule: '月２',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '仏経済書講読B',
    Schedule: '月２',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '仏経済書講読',
    Schedule: '月２',
    Instructor: '三枝　大修',
  },
  {
    'Lecture Name': '中国経済書講読A',
    Schedule: '木２',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '経済理論特別講義Ａ',
    Schedule: '月３',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': '経済理論特別講義Ⅰ',
    Schedule: '月３',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': '経済理論特別講義B',
    Schedule: '月３',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': '経済理論特別講義Ⅱ',
    Schedule: '月３',
    Instructor: '磯山　啓明',
  },
  {
    'Lecture Name': '経済史特別講義B',
    Schedule: '水３',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '経済史特別講義Ⅱ',
    Schedule: '水３',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '塚原　英敦',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火３',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月５',
    Instructor: '矢島　猶雅',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月４',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月３',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '木２',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月４',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '金４',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月５',
    Instructor: '塚原　英敦',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月４',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '木３',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '木２',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月２',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '木４',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '青木　健',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月４',
    Instructor: '臼井　英之',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水３',
    Instructor: '大津　武',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水３',
    Instructor: '河口　洋行',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '森　周子',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月５',
    Instructor: '定行　泰甫',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月５',
    Instructor: '竹田　泉',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '金５',
    Instructor: '立川　潔',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '木３',
    Instructor: '塚原　英敦',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '木５',
    Instructor: '中田　真佐男',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '木５',
    Instructor: '花井　清人',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月３',
    Instructor: '林　幸司',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '木５',
    Instructor: '山重　芳子',
  },
  {
    'Lecture Name': 'ビジネス概論Ⅰ',
    Schedule: '火３',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': 'ビジネス概論Ⅱ',
    Schedule: '火３',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '経営学総論Ⅰ',
    Schedule: '水２',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '経営学総論Ⅰ',
    Schedule: '木２',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '経営学総論Ⅱ',
    Schedule: '水２',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '経営学総論Ⅱ',
    Schedule: '木２',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '経営学総論',
    Schedule: '水２',
    Instructor: '岩﨑　尚人　他',
  },
  {
    'Lecture Name': '経営学総論',
    Schedule: '木２',
    Instructor: '岩﨑　尚人　他',
  },
  {
    'Lecture Name': '会計学総論Ⅰ',
    Schedule: '月５',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '会計学総論Ⅰ',
    Schedule: '木１',
    Instructor: '内藤　高雄',
  },
  {
    'Lecture Name': '会計学総論Ⅰ',
    Schedule: '月２',
    Instructor: '伊東　良子',
  },
  {
    'Lecture Name': '会計学総論Ⅱ',
    Schedule: '月５',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '会計学総論Ⅱ',
    Schedule: '木１',
    Instructor: '内藤　高雄',
  },
  {
    'Lecture Name': '会計学総論Ⅱ',
    Schedule: '月２',
    Instructor: '伊東　良子',
  },
  {
    'Lecture Name': '基礎簿記',
    Schedule: '月２',
    Instructor: '伊東　良子',
  },
  {
    'Lecture Name': '商学総論Ⅰ',
    Schedule: '金１',
    Instructor: '小宮路　雅博',
  },
  {
    'Lecture Name': '商学総論Ⅰ',
    Schedule: '金２',
    Instructor: '小宮路　雅博',
  },
  {
    'Lecture Name': '商学総論Ⅱ',
    Schedule: '金１',
    Instructor: '鎌田　裕美',
  },
  {
    'Lecture Name': '商学総論Ⅱ',
    Schedule: '金２',
    Instructor: '鎌田　裕美',
  },
  {
    'Lecture Name': '経済学Ⅰ',
    Schedule: '月２',
    Instructor: '小原　拓也',
  },
  {
    'Lecture Name': '経済学Ⅰ',
    Schedule: '月３',
    Instructor: '小原　拓也',
  },
  {
    'Lecture Name': '経済学Ⅱ',
    Schedule: '月２',
    Instructor: '小原　拓也',
  },
  {
    'Lecture Name': '経済学Ⅱ',
    Schedule: '月３',
    Instructor: '小原　拓也',
  },
  {
    'Lecture Name': '企業会計論Ⅰ',
    Schedule: '金２',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '企業会計論Ⅱ',
    Schedule: '金２',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '企業会計論',
    Schedule: '金２',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '経営管理論Ⅰ',
    Schedule: '木２',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '経営管理論Ⅱ',
    Schedule: '木２',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '経営管理論',
    Schedule: '木２',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '経営史Ⅰ',
    Schedule: '木３',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '経営史Ⅱ',
    Schedule: '木３',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '経営史',
    Schedule: '木３',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': 'マーケティング論Ⅰ',
    Schedule: '月１',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': 'マーケティング論Ⅱ',
    Schedule: '月１',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': 'マーケティング総論',
    Schedule: '月１',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': '経営統計学Ⅰ',
    Schedule: '月５',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '経営統計学Ⅱ',
    Schedule: '月５',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '経営統計学',
    Schedule: '月５',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '経営数学Ⅰ',
    Schedule: '木５',
    Instructor: '藤江　遼',
  },
  {
    'Lecture Name': '経営数学Ⅱ',
    Schedule: '木５',
    Instructor: '藤江　遼',
  },
  {
    'Lecture Name': '財務会計論Ⅰ',
    Schedule: '木３',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '財務会計論Ⅱ',
    Schedule: '木３',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '財務会計論',
    Schedule: '木３',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '原価計算論',
    Schedule: '水２、水３',
    Instructor: '塘　誠',
  },
  {
    'Lecture Name': '財務管理論Ⅰ',
    Schedule: '月１',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '財務管理論Ⅱ',
    Schedule: '月１',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '財務管理論',
    Schedule: '月１',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': 'ビジネスライティングⅠ',
    Schedule: '水３',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': 'ビジネスライティングⅡ',
    Schedule: '水３',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': '経営英書講読Ⅰ',
    Schedule: '木１',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '経営英書講読Ⅱ',
    Schedule: '木１',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '英経営書講読Ⅰ',
    Schedule: '木１',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '英経営書講読Ⅱ',
    Schedule: '水３',
    Instructor: 'Ｃ．クルツ',
  },
  {
    'Lecture Name': '経営戦略論Ⅰ',
    Schedule: '木１',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '経営戦略論Ⅱ',
    Schedule: '木１',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '経営戦略論',
    Schedule: '木１',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '経営組織論Ⅰ',
    Schedule: '火３',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '経営組織論Ⅱ',
    Schedule: '火３',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '経営組織論',
    Schedule: '火３',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '人的資源論Ⅰ',
    Schedule: '木１',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': '人的資源論Ⅱ',
    Schedule: '木１',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': '人的資源論',
    Schedule: '木１',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': 'ベンチャービジネス論Ⅰ',
    Schedule: '木５',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': 'ベンチャービジネス論Ⅱ',
    Schedule: '木５',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': 'ベンチャービジネス論',
    Schedule: '木５',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '経営情報論Ⅰ',
    Schedule: '金２',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '経営情報論Ⅱ',
    Schedule: '金２',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '経営情報論',
    Schedule: '金２',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '消費者行動論',
    Schedule: '金５',
    Instructor: '金　春姫',
  },
  {
    'Lecture Name': 'マーケティング・サイエンス',
    Schedule: '月３',
    Instructor: '金　春姫',
  },
  {
    'Lecture Name': '商品開発論Ⅰ',
    Schedule: '月２',
    Instructor: '小具　龍史',
  },
  {
    'Lecture Name': '商品開発論Ⅱ',
    Schedule: '月２',
    Instructor: '小具　龍史',
  },
  {
    'Lecture Name': '商品開発論',
    Schedule: '月２',
    Instructor: '小具　龍史',
  },
  {
    'Lecture Name': 'サービス・マーケティング論Ⅰ',
    Schedule: '金３',
    Instructor: '鎌田　裕美',
  },
  {
    'Lecture Name': 'ツーリズム・マーケティング論Ⅰ',
    Schedule: '金４',
    Instructor: '鎌田　裕美',
  },
  {
    'Lecture Name': '管理会計論',
    Schedule: '水２、水３',
    Instructor: '塘　誠',
  },
  {
    'Lecture Name': '金融システム論Ⅰ',
    Schedule: '火３',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '金融システム論Ⅱ',
    Schedule: '火３',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '金融システム論',
    Schedule: '火３',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '会計監査論Ⅰ',
    Schedule: '木２',
    Instructor: '蟹江　章',
  },
  {
    'Lecture Name': '会計監査論Ⅱ',
    Schedule: '木２',
    Instructor: '蟹江　章',
  },
  {
    'Lecture Name': '会計監査論',
    Schedule: '木２',
    Instructor: '蟹江　章',
  },
  {
    'Lecture Name': '財務諸表分析Ⅰ',
    Schedule: '金１',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '財務諸表分析Ⅱ',
    Schedule: '金１',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '経営分析',
    Schedule: '金１',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': 'プログラミングと機械学習Ⅰ',
    Schedule: '月２',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': 'プログラミングと機械学習Ⅱ',
    Schedule: '月２',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '経営学特殊講義Ｅ',
    Schedule: '月４',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '経営学特殊講義Ⅴ',
    Schedule: '月４',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '経営学特殊講義Ｆ',
    Schedule: '木４',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '経営学特殊講義Ⅵ',
    Schedule: '木４',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '金　春姫　他',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '小宮路　雅博',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '塘　誠',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '２年次ゼミナール',
    Schedule: '火２',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '金３',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月３',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '火１',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月３',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '金３',
    Instructor: '金　春姫　他',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水３',
    Instructor: '小宮路　雅博',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月４',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '月３',
    Instructor: '塘　誠',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水４',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '３年次ゼミナール',
    Schedule: '水５',
    Instructor: '紺野　由希子',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '木２',
    Instructor: '相原　章',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '金４',
    Instructor: '羽根　佳祐',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '岩﨑　尚人',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月４',
    Instructor: '上田　晋一',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水１',
    Instructor: '海保　英孝',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '渡邊　隼史',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '金４',
    Instructor: '金　春姫　他',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水４',
    Instructor: '小宮路　雅博',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月５',
    Instructor: '境　新一',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月４',
    Instructor: '塘　誠',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '月４',
    Instructor: '中川　正悦郎',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '平野　創',
  },
  {
    'Lecture Name': '４年次ゼミナール（卒業論文を含む）',
    Schedule: '水５',
    Instructor: '増川　純一',
  },
  {
    'Lecture Name': '日本史概説ａ',
    Schedule: '月２',
    Instructor: '小沢　詠美子',
  },
  {
    'Lecture Name': '日本史概説ｂ',
    Schedule: '月２',
    Instructor: '小沢　詠美子',
  },
  {
    'Lecture Name': '人文地理学ａ',
    Schedule: '木４',
    Instructor: '今井　理雄',
  },
  {
    'Lecture Name': '人文地理学ｂ',
    Schedule: '木４',
    Instructor: '今井　理雄',
  },
  {
    'Lecture Name': '地理学講義ａ',
    Schedule: '月３',
    Instructor: '鈴木　重雄',
  },
  {
    'Lecture Name': '地理学講義ｂ',
    Schedule: '月３',
    Instructor: '鈴木　重雄',
  },
  {
    'Lecture Name': '地誌学ａ',
    Schedule: '月２',
    Instructor: '田中　絵里子',
  },
  {
    'Lecture Name': '地誌学ｂ',
    Schedule: '月２',
    Instructor: '田中　絵里子',
  },
  {
    'Lecture Name': '哲学講義ａ',
    Schedule: '金３',
    Instructor: '三浦　隼暉',
  },
  {
    'Lecture Name': '哲学講義ｂ',
    Schedule: '金３',
    Instructor: '三浦　隼暉',
  },
  {
    'Lecture Name': '倫理学講義ａ',
    Schedule: '金２',
    Instructor: '木山　裕登',
  },
  {
    'Lecture Name': '倫理学講義ｂ',
    Schedule: '金２',
    Instructor: '木山　裕登',
  },
  {
    'Lecture Name': '宗教学講義ａ',
    Schedule: '木２',
    Instructor: '土居　由美',
  },
  {
    'Lecture Name': '宗教学講義ｂ',
    Schedule: '木２',
    Instructor: '土居　由美',
  },
];

// グローバル変数：ユーザー登録済み講義データを格納する配列
let userLectureList = [
  {
    'Lecture Name': '英語読解（１）ａ',
    Schedule: '金４',
    Instructor: '笠原　一郎',
  },
  {
    'Lecture Name': '宗教学講義ｂ',
    Schedule: '木２',
    Instructor: '土居　由美',
  },
];

/**
 * 全角数字を半角に変換する関数
 * 例: "４" → "4"
 * @param {string} str - 変換したい文字列
 * @returns {string} - 半角に変換された文字列
 */
function convertToHalfWidth(str) {
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
}

// ① ページ読み込み時に lecture.json と userLecture.json をフェッチする
window.addEventListener('load', function () {
  // lecture.json の読み込み
  fetch('../data/lecture.json')
    .then((response) => response.json())
    .then((data) => {
      lectureList = data;
      console.log('lecture.jsonの読み込み完了:', lectureList);
    })
    .catch((error) => {
      console.error('lecture.jsonの読み込みエラー:', error);
    });

  // userLecture.json の読み込み
  fetch('../data/userLecture.json')
    .then((response) => response.json())
    .then((data) => {
      userLectureList = data;
      console.log('userLecture.jsonの読み込み完了:', userLectureList);
    })
    .catch((error) => {
      console.error('userLecture.jsonの読み込みエラー:', error);
    });
  // 読み込んだユーザー講義データを自動で時間割テーブルに反映
  userLectureList.forEach((item) => {
    autoRegisterLecture(item);
  });
});

// ② 検索ボタンのイベントリスナー
document.getElementById('searchLecture').addEventListener('click', function () {
  // 各フィルター項目の値を取得（前後の空白は削除）
  const filterLectureName = document.getElementById('filterLectureName').value.trim();
  const filterDay = document.getElementById('filterDay').value; // 未指定なら空文字
  const filterPeriod = document.getElementById('filterPeriod').value; // 未指定なら空文字
  const filterInstructor = document.getElementById('filterInstructor').value.trim();

  // lectureList から条件に合致するアイテムをフィルタリング
  const filtered = lectureList.filter((item) => {
    let match = true;
    // 講義名（部分一致）
    if (filterLectureName) {
      if (!item['Lecture Name'].includes(filterLectureName)) {
        match = false;
      }
    }
    // 曜日・時限の両方が指定された場合
    if (filterDay && filterPeriod) {
      if (item['Schedule'] !== filterDay + filterPeriod) {
        match = false;
      }
    } else if (filterDay) {
      // 曜日のみ指定の場合：Scheduleの先頭1文字が一致するか
      if (item['Schedule'].charAt(0) !== filterDay) {
        match = false;
      }
    } else if (filterPeriod) {
      // 時限のみ指定の場合：Scheduleの残りの文字列が一致するか
      if (item['Schedule'].substring(1) !== filterPeriod) {
        match = false;
      }
    }
    // 講師名（部分一致）
    if (filterInstructor) {
      if (!item['Instructor'].includes(filterInstructor)) {
        match = false;
      }
    }
    return match;
  });

  // 結果表示エリアのクリア
  const resultsDiv = document.getElementById('lectureResults');
  resultsDiv.innerHTML = '';

  if (filtered.length === 0) {
    resultsDiv.textContent = '該当する講義は見つかりませんでした。';
    return;
  }

  // フィルター結果をリスト状に表示
  filtered.forEach((item, index) => {
    // 各結果を囲む div を作成
    const div = document.createElement('div');
    div.className = 'lecture-item';

    // 講義名、Schedule、講師名を表示
    const info = document.createElement('p');
    info.textContent = `講義名: ${item['Lecture Name']}　｜　スケジュール: ${item['Schedule']}　｜　講師: ${item['Instructor']}`;
    div.appendChild(info);

    // 登録ボタンを作成（手動でその講義を時間割テーブルに反映）
    const regButton = document.createElement('button');
    regButton.textContent = '登録';
    regButton.addEventListener('click', function () {
      registerLecture(item);
    });
    div.appendChild(regButton);

    resultsDiv.appendChild(div);
  });
});

// ③ 登録ボタン（手動）のクリックで講義情報を時間割テーブルに追加する関数
function registerLecture(item) {
  // item["Schedule"] は例 "金４" なので、1文字目が曜日、残りが時限
  const scheduleStr = item['Schedule'];
  const day = scheduleStr.charAt(0); // 例: "金"
  let period = scheduleStr.substring(1); // 例: "４"（全角数字の場合もある）

  console.log('registerLecture: もとの時限文字列（全角可能性）:', period);

  // 全角数字を半角に変換
  period = convertToHalfWidth(period);
  console.log('registerLecture: 変換後の時限文字列（半角）:', period);

  // セルを取得（table内の data-day, data-period の属性が一致するセル）
  const selector = `#scheduleTable td[data-day="${day}"][data-period="${period}"]`;
  console.log('registerLecture: セレクタ:', selector);

  const cell = document.querySelector(selector);
  if (cell) {
    console.log('registerLecture: セルが見つかりました:', cell);
    // セルに講義名と講師名を改行して表示
    cell.innerHTML = item['Lecture Name'] + '<br>' + item['Instructor'];
    console.log('registerLecture: セルに登録された内容:', cell.innerHTML);
  } else {
    alert(`スケジュール ${item['Schedule']} のセルが見つかりません。`);
    console.error('registerLecture: セルが見つからない。');
  }
}

// ④ ユーザー登録済み講義データを自動で時間割テーブルに反映する関数
function autoRegisterLecture(item) {
  // item["Schedule"] は例 "金４" なので、1文字目が曜日、残りが時限
  const scheduleStr = item['Schedule'];
  const day = scheduleStr.charAt(0);
  let period = scheduleStr.substring(1);
  console.log('autoRegisterLecture: もとの時限文字列（全角可能性）:', period);

  // 全角数字を半角に変換
  period = convertToHalfWidth(period);
  console.log('autoRegisterLecture: 変換後の時限文字列（半角）:', period);

  // 対象のセルを特定するためのセレクタを作成
  const selector = `#scheduleTable td[data-day="${day}"][data-period="${period}"]`;
  console.log('autoRegisterLecture: セレクタ:', selector);

  const cell = document.querySelector(selector);
  if (cell) {
    // 講義名と講師名を改行して表示
    cell.innerHTML = item['Lecture Name'] + '<br>' + item['Instructor'];
    console.log('autoRegisterLecture: セルに登録された内容:', cell.innerHTML);
  } else {
    console.error(`autoRegisterLecture: スケジュール ${item['Schedule']} のセルが見つかりません。`);
  }
}

// ⑤ 「講義リスト生成」ボタンのイベントリスナー（リセットボタンの代替機能）
//     このボタンを押すと、時間割テーブルの内容を読み取り、講義リスト（JSON形式）を生成します。
document.getElementById('finalRegisterButton').addEventListener('click', function () {
  console.log('【講義リスト生成ボタン押下】時間割テーブルから講義リストを生成します。');

  // Step 1: 時間割テーブル内の全セルを取得
  const cells = document.querySelectorAll('#scheduleTable td');
  console.log('Step 1: 全てのセルを取得しました。セル数:', cells.length);

  let resultList = [];

  // Step 2: 各セルについて内容を確認
  cells.forEach((cell) => {
    const cellContent = cell.innerHTML.trim();
    if (cellContent !== '') {
      console.log('Step 2: セルに内容がありました。内容:', cellContent);

      // Step 3: セルの内容は "Lecture Name<br>Instructor" の形式と仮定し、分割する
      let parts = cellContent.split('<br>');
      parts = parts.map((part) => part.trim());
      console.log('Step 3: 分割後の内容:', parts);

      // Step 4: セルの data-day と data-period 属性からスケジュールを作成
      const day = cell.getAttribute('data-day');
      const period = cell.getAttribute('data-period');
      const schedule = day + period;
      console.log('Step 4: セルのスケジュール:', schedule);

      // Step 5: 講義オブジェクトを生成して配列に追加
      const lectureObj = {
        'Lecture Name': parts[0],
        Schedule: schedule,
        Instructor: parts[1] ? parts[1] : '',
      };
      resultList.push(lectureObj);
      console.log('Step 5: 講義オブジェクトを生成:', lectureObj);
    } else {
      console.log('Step 2: セルは空です。');
    }
  });

  // Step 6: 結果をコンソールに表示
  console.log('【最終結果】生成された講義リスト:', resultList);
});
