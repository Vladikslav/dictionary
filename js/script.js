const terms = [
  {
    key: 'А',
    items: [
      {
        term: 'Абулия',
        description: '<p><dfn>Абули́я</dfn> (<a href="#">др.-греч.</a> ἀ- — отрицательная частица и βουλή — воля) — медицинский термин из области <a href="#">неврологии</a> и <a href="#">психиатрии</a>, обозначающий состояние патологического отсутствия <a href="#">воли</a>, при котором пациент не способен выполнить действие, необходимость которого осознаётся, не способен принять необходимое решение. При данном состоянии больные ощущают отсутствие желаний (частичное или полное) ко всякой деятельности. Менее тяжёлым состоянием понижения волевой активности является гипобулия. Абулия, по уровню снижения мотивации, находится между более лёгким состоянием апатии и более тяжёлым состоянием акинетического мутизма. Сочетание абулии с обездвиженностью называется абулически-акинетическим синдромом, а с апатией — апатико-абулическим, также известным как <a href="#">апато-абулический</a>.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Абстиненция',
        description: '<p><dfn>Абстине́нция</dfn> (от <a href="#">нем.</a> <i>Abstinenz</i> и <a href="#">лат.</a> <i>Abstinentia</i>: воздержность, задержка, задержание, воздержание, воздержанность, а также пост, голодание, бескорыстие, честность) — в отличие от традиционного, <a href="#">наркологического</a> значения термина, в <a href="#">психоанализе</a> употребляется для описания состояния больных истерией страха и неврозом навязчивых состояний в процессе психоаналитической терапии. Абстиненция рассматривается не как патогенный фактор, а скорее как фактор, поддерживающий оптимальный уровень <a href="#">фрустрации</a>, необходимый для достижения терапевтического эффекта.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Авторитетность',
        description: '<p>Имеющий <a href="#">авторитет</a>, заслуживающий признания, доверия и уважения.</p><p>Как видите, работа даже такого бесспорно авторитетного режиссёра, как Станиславский, подвергалась некоторому сомнению со стороны критики. Блейхман отвечал без лишних слов: Совет для анархистов совершенно не авторитетен; если к его решению присоединятся большевики, то это ничего не значит, Совет в целом служит буржуазии и помещикам; никаких определённых намерений у анархистов на завтра нет; участвовать в манифестации они будут ― со своими чёрными знамёнами, а насчет того, будут ли с оружием, то, может быть, пойдут без оружия, а может быть, и с оружием.</p>',
        cite: 'Н. Н. Суханов, «Записки о революции / Книга 4», 1918–1921 г. (цитата из Национального корпуса русского языка, см. Список литературы)',
      },
      {
        term: 'Адаптация',
        description: '<p><dfn>Адапта́ция</dfn> (лат. adapto «приспособляю») — приспособление строения и функций организма, его органов и клеток к условиям внешней среды. Процессы адаптации направлены на сохранение <a href="#">гомеостаза</a>.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Аддикция',
        description: '<p><dfn>Адди́кция</dfn> (<a href="#">англ.</a> <i>addiction</i> — зависимость, пагубная привычка, привыкание), в широком смысле, — ощущаемая человеком навязчивая потребность в определённой деятельности. Термин часто употребляется для таких явлений, как лекарственная зависимость, наркомания, но теперь больше применяется не к химическим, а к психологическим зависимостям, например, поведенческим, примерами которых могут служить: интернет-зависимость, игромания, шопоголизм, психогенное переедание, фанатизм, зависимость от порнографии и т. п.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Акцентуация',
        description: '<p><dfn>Акцентуа́ция</dfn>, акцентуа́ция хара́ктера, акцентуа́ция ли́чности, акцентуи́рованная ли́чностная черта́ (от <a href="#">лат.</a> <i>accentus</i> — ударение) — находящаяся в пределах клинической нормы особенность характера (в других источниках — личности), при которой отдельные его черты чрезмерно усилены, вследствие чего обнаруживается избирательная уязвимость в отношении одних психогенных воздействий при сохранении хорошей устойчивости к другим. Акцентуации не являются психическими расстройствами, но по ряду своих свойств схожи с расстройствами личности, что позволяет делать предположения о наличии между ними связи.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Альтруизм',
        description: '<p><dfn>Альтруи́зм</dfn> (<a href="#">лат.</a> <i>Alter</i> — другой, другие) — понятие, которым осмысляется активность, связанная с бескорыстной заботой о благополучии других; соотносится с понятием самоотверженность — то есть с приношением в жертву своих выгод в пользу блага другого человека, других людей или в целом — ради общего блага.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Апперцепция',
        description: '<p><dfn>Апперцепция</dfn> (<a href="#">лат.</a> <i>ad</i> — к и <a href="#">лат.</a> <a>perceptio</a> — восприятие) — это процесс, в результате которого элементы сознания становятся ясными и отчетливыми.</p><p>Это одно из фундаментальных свойств <a href="#">психики человека</a>.</p><p>Данное свойство выражается в том, что человек воспринимает предметы и явления внешнего мира обусловленно - в тесной взаимосвязи друг с другом. Человек осознает то, как он воспринимает внешний мир. Данное восприятие зависит от запаса определенных знаний и опыта, а также от конкретного психического состояния его <a href="#">личности</a>. Восприятие внешнего мира обусловлено особенностями общего содержания психической жизни в целом.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Атрибуция',
        description: '<p><dfn>Атрибуция</dfn> (<a href="#">лат.</a> <i>attributio</i> — приписывание) — психологический термин, обозначающий механизм объяснения причин поведения другого человека.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Аффилиация',
        description: '<p><dfn>Аффилиация</dfn> (аффиляция, <a href="#">англ.</a> <i>affiliation</i> — «соединение, связь» от позднелатинского filialis — <a href="#">«сыновний»</a>) — это стремление быть в обществе других людей, потребность человека в создании тёплых, доверительных, эмоционально значимых отношений с другими людьми. Стремление к сближению с людьми, <a href="#">дружба</a>, <a href="#">любовь</a>, <a href="#">общение</a> — всё это попадает под понятие аффилиация. Формирование данной потребности обусловлено характером взаимоотношений с родителями и сверстниками в раннем детстве и может нарушаться при ситуациях, сопряжённых с тревогой, неуверенностью в себе и приводящих к возникновению чувства одиночества, беспомощности.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Б',
    items: [
      {
        term: 'Базальные эмоции',
        description: '<p><dfn>Базальные эмоции</dfn> — теоретический конструкт, объединяющий эмоции минимального набора, на базе которых формируется все многообразие эмоциональных процессов и состояний. К подобным эмоциям относят эмоции радости, горя (печали), страха, гнева, удивления, отвращения.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Бионика',
        description: '<p><dfn>Био́ника</dfn> (от <a href="#">др.-греч.</a> βίον «живущее») — прикладная наука о применении в технических устройствах и системах принципов организации, свойств, функций и структур живой природы, то есть формах живого в природе и их промышленных аналогах.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'В',
    items: [],
  },
  {
    key: 'Г',
    items: [],
  },
  {
    key: 'Д',
    items: [],
  },
  {
    key: 'Е',
    items: [],
  },
  {
    key: 'Ж',
    items: [],
  },
  {
    key: 'И',
    items: [],
  },
  {
    key: 'К',
    items: [],
  },
  {
    key: 'Л',
    items: [],
  },
  {
    key: 'М',
    items: [],
  },
  {
    key: 'Н',
    items: [],
  },
  {
    key: 'О',
    items: [],
  },
  {
    key: 'П',
    items: [
      {
        term: 'Память',
        description: '<p><dfn>Па́мять</dfn> — это общее обозначение комплекса познавательных способностей и высших психических функций, относящихся к накоплению, сохранению и воспроизведению знаний, умений и навыков.</p><p>Память в разных формах и видах присуща всем высшим животным. Способность к памяти и обучению все животные унаследовали у общего предка, который жил примерно 600 миллионов лет назад. Наиболее развитый уровень памяти характерен для человека.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Паника',
        description: '<p><dfn>Па́ника</dfn> — внезапное чувство <a href="#">страха</a>, настолько сильное, что подавляет <a href="#">логическое мышление</a>. Паника может возникать у отдельных людей или проявляться в больших группах как массовая паника.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Персонализация',
        description: '<p><dfn>Персонализация</dfn> (<a href="#">лат.</a> <i>persona</i> – личность) – процесс осознания субъектом собственной личности как общественно значимой, результатом чего выступает его активная деятельность, нацеленная на трансляцию другим своей индивидуальности. Персонализация, иными словами, – это потребность индивида в проявлении своей личности.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Р',
    items: [],
  },
  {
    key: 'С',
    items: [],
  },
  {
    key: 'Т',
    items: [],
  },
  {
    key: 'У',
    items: [],
  },
  {
    key: 'Ф',
    items: [],
  },
  {
    key: 'Х',
    items: [],
  },
  {
    key: 'Ч',
    items: [],
  },
  {
    key: 'Ш',
    items: [],
  },
  {
    key: 'Э',
    items: [],
  },
  {
    key: 'Ю',
    items: [],
  },
];
const navContainer = document.querySelector('.site-nav');
const glossaryContainer = document.querySelector('.glossary');
const modalContainer = document.querySelector('.modal');
const navItemsClickHandler = (evt) => {
  const element = evt.target.closest('a');
  if (!element) { return; }
  evt.preventDefault();
  const blockId = element.getAttribute('href');
  if (blockId && blockId !== '#') {
    const block = document.querySelector(blockId);
    if (block) {
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};
const closeModalHandler = () => {
  modalContainer.classList.remove('shown');
}
const createModalPopupContent = ({ description, cite }) => {
  return `
  <div class="modal-popup">
    <button class="close-button" type="button">
      <span class="visually-hidden">Закрыть окно</span>
    </button>
    <div class="modal-content">
      <p>${description}</p>
      <cite>${cite}</cite>
    </div>
  </div>
  `
};
const glossaryClickHandler = (evt) => {
  const element = evt.target.closest('a');
  if (!element) { return; }
  evt.preventDefault();
  const { value } = element.dataset;
  const glossaryGroups = terms.find(({ key }) => value.toUpperCase().indexOf(key.toUpperCase()) === 0);
  if (glossaryGroups && glossaryGroups.items) {
    const glossaryCurrent = glossaryGroups.items.find(({ term }) => term === value);
    if (glossaryCurrent) {
      const glossaryString = createModalPopupContent(glossaryCurrent);
      modalContainer.classList.add('shown');
      addChildElementFromString(modalContainer, glossaryString);
      const modalCloseButton = modalContainer.querySelector('.close-button');
      modalCloseButton.addEventListener('click', closeModalHandler);
    }
  }
}
const createNavItemString = ({ key, items }) => {
  return `
    <li class="site-nav-item">
      <a class="site-nav-link" ${items.length > 0 ? `href="#${key.toLowerCase()}"` : ''}>${key}</a>
    </li>
  `;
};
const createGlossaryString = ({ key, items }) => {
  return `
  ${items.length > 0 ?
      `<section class="glossary-section">
      <h2 id="${key.toLowerCase()}">${key}</h2>
      <ul class="glossary-list">
        ${items.map(({ term }) => `<li class="glossary-item"><a href="#" data-value="${term}">${term}</a></li>`).join('')}
      </ul>
    </section>`: ''} `;
};

const addChildElementFromString = (parent, domString) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeend', domString);
};
const render = () => {
  const navElementsString = terms.map(createNavItemString).join('');
  const glossaryElementsString = terms.map(createGlossaryString).join('');
  addChildElementFromString(navContainer, navElementsString);
  addChildElementFromString(glossaryContainer, glossaryElementsString);
};
const init = () => {
  render();
  glossaryContainer.addEventListener('click', glossaryClickHandler);
  navContainer.addEventListener('click', navItemsClickHandler);
};

init();
