const info = {
  name: 'Jessica',
  fullName: 'Jessica Wang',
  about: 'About',
  work: 'Work',
  project: 'Project',
  contact: 'Contact',
  job: 'A creative front-end developer with a passion for learning.'

};


const me = {
  heading: 'me',
  content:
    `As a frontend developer, I collaborate with UI/UX designer, PM and backend developer to develop a dialysis system using AngularJS and Angular. I make sure every piece of code that I write is readable and maintainable.
    \r\n
    My role is to handle all the ui interface, integrate backend APIs, ensuring websites are accessible across many platforms (laptops and smartphones).
    Our mobile system also provides bluetooth, NFC and scan barcodes in frontend. I can easily and efficiently communicate with colleagues who are on the customer side, to solve those mobile device problems.
    Because the Angular framework has more efficiency, I rewrote the AngularJS code with the new framework on some features.
    Nowadays user experience is an important part of the frontend development. I always proactively communicate with the PM and make it better.
    I work with chariness and responsibility, no matter what the challenges might be awaiting ahead of me, I will make my best efforts to resolve them.
    `
};

const work = {
  heading: 'Work Experiences',
  experiences: [
    {
      title: 'Software Engineer',
      company: 'Smart eCare (悅康科技)',
      year: 'Oct.2017 - Present',
      contents: {
        // 提供醫療人員居家訪視之排班接單紀錄功能，訪視時提供病患住家定位服務，訪視完畢記錄病情簽名等功能。
        'Homedical (醫生到我家)：': 'AngularJS, HTML, CSS, Firebase',
        'Dialysis System：': 'Angular, AngularJS, HTML, CSS, MongoDB, ECharts, Bootstrap'
      }
    },
    {
      title: 'Software Engineer',
      company: 'JGALLOP (工樂行動科技)',
      year: 'Mar.2017 - Sep.2017',
      contents: {
        'Web：': 'Javascript, AJAX, Google Map API, Chart.js, Google Charts',
        'App：': 'Swift3, Camera, QRCode, UI-hard code',
        'Design：': 'Sketch, Zeplin'
      }
    },
    {
      title: 'Research Assistant',
      company: 'Academia Sinica, NCGM', // '中央研究院 基因體中心'
      year: 'Jun.2014 - Apr.2016',
      contents: {
        '': 'As research assistant, it has allowed me to fully utilized my analytical and quantitative reasoning that have been taught during my study. The reserch of circulating tumor cells (CTCs) can improve the prognosis of cancer stages. This technique is successfully transferred to a company (CellMax Life). Due to my proficiency in this technique, I assisted them to set up the CTCs detection system.'// 'The reserch of circulating tumor cells (CTCs)', // 循環腫瘤細胞偵測相關研究
      }
    }
  ],
};

const education = {
  heading: 'Education',
  educations: [
    {
      qualification: 'Master\'s Degree',
      school: 'NATIONAL CHIAO TUNG UNIVERSITY 交通大學',
      location: 'Hsinchu, Taiwan',
      year: '2011 - 2013',
      major: 'M.S., Molecular Medicine and Bioengineering',
    },
    {
      qualification: 'Bachelor\'s Degree',
      school: 'KAOHSIUNG MEDICAL UNIVERSITY 高雄醫學大學',
      location: 'Kaohsiung, Taiwan',
      year: '2008 - 2011',
      major: 'B.S., Biotechnology',
    },
    {
      qualification: 'Specialized Degree',
      school: 'UCOM Training Center 恆逸資訊',
      year: 'Jun. 2016 - Oct.2016',
      major: '智慧型手機應用程式設計實務班 (414hr)',
      courses: [
        '手機程式設計基本概論',
        'Java程式語言與物件導向程式設計',
        'Google Android程式實戰演練-Android SDK',
        'iPhone Objective-C程式語言課程',
        'iPhone Swift程式語言課程',
        'iPhone App應用程式開發-使用Objective-C及Swift語言',
        '使用者介面視覺構成解析與優化',
        'JavaScript與jQuery網頁互動實作',
        'HTML5與CSS3網站開發實務',
        '跨平台手機App開發實務',
      ],
    },
  ],
};

const skill = {
  heading: 'Skill',
  content: '',
  imageName: [
    'html5-48',
    'css3-48',
    'javascript-48',
    'firebase-48',
    'angularjs-48',
    'vuejs-48',
    'bootstrap-48',
    'angular-48',
    'sass-48'
  ]
};


const project = {
  items: [
    {
      projectName: 'Homedical 醫生到我家 | Web / App',
      projectImage: 'homedical.png',
      projectContent: 'Homedical is a system providing patients to see a doctor at home. We have two applications (web and mobile). The web application offers the medical experts to manage the members’ data or assign shifts to the doctors. The mobile application is for doctors to check the shifts, to contact the patients. It can also show the patient’s location, offer doctors to write the medical records, and so on. This system develops only by frontend, and using firebase as our database.',
      // projectContent: 'Homedical 是一個 "居家照護醫療" 系統。Web 部分：醫療人員個人管理後台、營運中心管理後台。App部分：醫療人員操作介面。醫療院所使用 Web 版的中心管理後台，約診、排班、派單給醫療人員，全方位掌控醫療人員出勤狀況，地圖定位，所有病情資料的紀錄等功能。醫療人員則使用手機版 App ，提供定位、撥電話、接單、病情紀錄、簽名、行事曆等功能。全系統使用Firebase做資料庫使用。',
      isImgLeft: true,
    },
    {
      projectName: 'Dialysis System | Web / App', // 血液透析系統
      projectImage: 'dialysissystem.png',
      projectContent: 'This system provides medical experts a digital working environment. It was written with AngularJS and Angular material. Collaborate with the UI/UX designer, back-end developer and PM. We customized different hospital’s dialysis system. ',
      // projectContent: '根據 "血液透析" 醫療流程規劃給專業醫療人員使用的系統，配合設計師使用 Angular material 刻畫前端畫面，撰寫前端操作使用邏輯，與後台串接 Api，配合不同院所需求客制個別專案。',
      isImgLeft: false,
    },
    {
      projectName: 'PaPaLewis management system | Web', // PaPaLewis 管理後台
      projectImage: 'papalewis.png',
      projectContent: 'A coffee store management system, it can manage store\'s profile, consumption records, coffee beans, etc. This system did not use any front end framework.',// '咖啡店後台管理系統，純 JavaScript，無 Framework。提供商家資料、消費者、咖啡豆等資料管理。',
      isImgLeft: true,
    },
    {
      projectName: 'ismartboss | iOS App (Swift3)', // 發票掃描
      projectImage: 'ismartboss.png',
      projectContent: 'Scan QR code on invoices, and analyzing it consumption records.',// '掃描發票 QRCode，解析 QRCode 內容，紀錄消費清單。',
      isImgLeft: false,
    },
    {
      projectName: 'Travobook | Android App (Java)', // 旅書
      projectImage: 'travobook.png',
      projectContent: 'Travobook can let user remember, share, and route on their fascinating journey.', // '旅遊紀錄，可拍照筆記心情。',
      isImgLeft: true,
    },
    {
      projectName: 'Instagrom | iOS App (Swift3)',
      projectImage: 'instagrom.png',
      projectContent: 'This app is just like the Instagram. You can note and post a beautiful photo and share it.', // '仿照 Instagram，可拍照筆記。',
      isImgLeft: false,
    },
  ]
  
};

const contact = {
    title: 'Contact',
    message: 'Please feel free to contact me.',
    email: 'chienfang0611@gmail.com',
    phone: '+886933302134',
    // github: 'GitHub'
};

const projectImg = {
  imageItems: {
    homedical: [
      'homedical-login.png',
      'homedical-login2.png',
      'homedical-map.png',
      'homedical-request.png',
      'homedical-user.png',
      'homedical-userDetail.png',
      'homedical-history.png',
      'homedical-file.png',
      'homedical-todayShift.png',
      'homedical-assign.png',
      'homedical-assignDialog.png',
      'homedical-app-1.png',
      'homedical-app-2.png'
    ],
    dialysis: [
      'dialysis-patient.png',
      'dialysis-summary.png',
      'dialysis-form.png',
      'dialysis-todayBed.png',
      'dialysis-bloodPresure.png',
      'dialysis-lab-1.png',
      'dialysis-lab-2.png',
      'dialysis-charge.png',
      'dialysis-calender.png',
      'dialysis-shift.png',
      'dialysis-arrangeBed.png',
      'dialysis-report.png',
      'dialysis-barcode-1.png',
      'dialysis-barcode-2.png'
    ],
    papaLewis: [
      'papaLewis-login.png',
      'papaLewis-shopAccount.png',
      'papaLewis-shop.png',
      'papaLewis-coffee.png',
      'papaLewis-productList.png',
      'papaLewis-map.png',
      'papaLewis-product.png',
      'papaLewis-productDetail.png',
      'papaLewis-management.png',
      'papaLewis-order.png',
      'papaLewis-info.png',
      'papaLewis-cancel.png',
    ],
    ismartboss: [
      'ismartboss-1.png',
      'ismartboss-2.png',
      'ismartboss-3.png'
    ],
    travobook: [
      'travobook-1.png',
      'travobook-2.png',
      'travobook-3.png'
    ],
    instagrom: [
      'instagrom-1.png',
      'instagrom-2.png'
    ]
  }
  
};

// const projectImg = {
// 	imageItems: [
// 		{
// 			url: 'homedical-login.png',
// 		},
// 		{
// 			url: 'homedical-login2.png',
// 		},
// 		{
// 			url: 'homedical-map.png',
//     },
//     {
// 			url: 'homedical-request.png',
// 		},
//     {
// 			url: 'homedical-user.png',
// 		},
// 		{
// 			url: 'homedical-userDetail.png',
//     },
//     {
// 			url: 'homedical-history.png',
// 		},
// 		{
// 			url: 'homedical-file.png',
//     },
//     {
// 			url: 'homedical-todayShift.png',
//     },
//     {
// 			url: 'homedical-assign.png',
//     },
//     {
// 			url: 'homedical-assignDialog.png',
//     },
//     {
// 			url: 'homedical-app-1.png',
//     },
//     {
// 			url: 'homedical-app-2.png',
//     },
// 	]
	


// };



export { info, me, work, education, skill, project, contact, projectImg };
