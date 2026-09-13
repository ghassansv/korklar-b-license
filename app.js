const builtInQuestions = [
  {
    id: "q001",
    officialArea: "safety",
    topicSv: "Defensiv körning",
    topicAr: "القيادة الدفاعية",
    category: "Fas A",
    text: "Hur kan du som förare bäst bidra till ökad trafiksäkerhet?",
    answers: [
      "Genom att köra defensivt.",
      "Genom att träna upp reaktionsförmågan.",
      "Genom att köra nya och säkra bilar.",
      "Genom att undvika att köra under mörker."
    ],
    textAr: "كيف يمكنك، بصفتك سائقًا، أن تساهم بأفضل طريقة في زيادة السلامة المرورية؟",
    answersAr: [
      "بالقيادة بأسلوب دفاعي.",
      "بتدريب سرعة رد الفعل.",
      "بقيادة سيارات جديدة وآمنة.",
      "بتجنب القيادة في الظلام."
    ],
    correct: 0,
    explanation: "تنص القاعدة الأساسية في الفصل 2، المادة 1 من قانون المرور السويدي على وجوب القيادة بالعناية والحذر اللازمين لتجنب الحوادث. القيادة الدفاعية تحقق ذلك لأنها تعني توقّع أخطاء الآخرين وترك هامش أمان.",
    explanationSv: "Grundregeln i trafikförordningen 2 kap. 1 § kräver den omsorg och varsamhet som behövs för att undvika trafikolyckor. Defensiv körning innebär att förutse andras misstag och behålla en säkerhetsmarginal.",
    sourceLabel: "Trafikförordningen 2 kap. 1 §",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/"
  },
  {
    id: "q019",
    officialArea: "personal",
    topicSv: "Impulsivt beteende",
    topicAr: "السلوك المندفع",
    category: "Fas A",
    text: "Varför är impulsiva förare ofta trafikfarliga?",
    answers: [
      "Därför att de ofta visar ett aggressivt beteende i trafiken",
      "Därför att de ofta gör manövrar i trafiken utan att tänka på konsekvenserna",
      "Därför att de ofta kör fortare än andra trafikanter"
    ],
    textAr: "لماذا يشكل السائقون المندفعون خطرًا في حركة المرور غالبًا؟",
    answersAr: [
      "لأنهم يظهرون سلوكًا عدوانيًا في المرور غالبًا",
      "لأنهم ينفذون مناورات دون التفكير في عواقبها غالبًا",
      "لأنهم يقودون أسرع من مستخدمي الطريق الآخرين غالبًا"
    ],
    correct: 1,
    explanation: "الاندفاع يجعل السائق يتصرف قبل تقييم المخاطر والنتائج. ويضع Trafikverket تأثير الأفعال المندفعة ضمن قسم الظروف الشخصية لأنها قد تضر بالسلامة المرورية.",
    explanationSv: "Impulsivitet gör att föraren kan agera innan risker och följder har bedömts. Trafikverket placerar hur impulsiva handlingar påverkar säkerheten inom området personliga förutsättningar.",
    sourceLabel: "Trafikverket: Personliga förutsättningar",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  {
    id: "q002",
    category: "Fas A",
    text: "Vad innebär detta vägmärke?",
    answers: [
      "Vägen är ofta i dåligt skick",
      "Högsta tillåtna hastighet är 50 km/h",
      "Det är en privat väg och enbart boende får köra här",
      "Trafik från denna väg ska alltid lämna företräde i korsning med allmän väg"
    ],
    correct: 0,
    image: "./assets/loftbacken-sign.webp",
    imageAlt: "Ortsskylt med texten Loftbacken"
  },
  {
    id: "q101",
    officialArea: "rules",
    topicSv: "Släp och behörighet",
    topicAr: "المقطورة وفئة الرخصة",
    category: "Fas A",
    text: "Vilken körkortsbehörighet måste du minst ha för att få köra denna fordonskombination?",
    answers: ["B-behörighet", "Utökad B-behörighet", "BE-behörighet"],
    textAr: "ما أقل فئة من رخصة القيادة تحتاجها لقيادة هذه المجموعة من السيارة والمقطورة؟",
    answersAr: ["رخصة B", "رخصة B الموسعة (B96)", "رخصة BE"],
    correct: 2,
    image: "./assets/vehicle-weights.webp",
    imageAlt: "Vikter för dragbil och släpvagn",
    imageAltAr: "بيانات أوزان السيارة والمقطورة",
    imageCaptionAr: "السيارة: الوزن الفارغ 2000 كغ، الحمولة 1000 كغ، الوزن الإجمالي 3000 كغ. المقطورة: 700، 800، 1500 كغ.",
    explanation: "الوزن الإجمالي للسيارة والمقطورة هو 4500 كغ. رخصة B العادية تسمح عادةً حتى 3500 كغ، وB96 حتى 4250 كغ، ولذلك يلزم هنا تصريح BE.",
    explanationSv: "Bilens och släpets sammanlagda totalvikt är 4 500 kg. B-behörighet räcker normalt till 3 500 kg och B96 till 4 250 kg. Därför krävs BE för den här kombinationen.",
    sourceLabel: "Transportstyrelsen: Personbil med släp",
    sourceUrl: "https://www.transportstyrelsen.se/personbil-med-slap/"
  },
  {
    id: "q102",
    officialArea: "rules",
    topicSv: "Förarens skyldigheter",
    topicAr: "واجبات السائق",
    category: "Fas A",
    text: "För vem är du skyldig att på tillsägelse uppvisa ditt körkort?",
    answers: [
      "Personal från Räddningsverket",
      "Personal från Länsstyrelsen",
      "Bilinspektör från Polisen",
      "Personal från Bilprovningen"
    ],
    textAr: "لمن يجب عليك إبراز رخصة القيادة عند طلبها؟",
    answersAr: [
      "موظف من وكالة خدمات الإنقاذ",
      "موظف من مجلس إدارة المحافظة",
      "مفتش مركبات من الشرطة",
      "موظف من شركة فحص المركبات"
    ],
    correct: 2,
    explanation: "وفق الفصل 3، المادة 15 من قانون رخص القيادة، يجب تسليم الرخصة للفحص عندما يطلبها شرطي أو مفتش مركبات (bilinspektör).",
    explanationSv: "Enligt körkortslagen 3 kap. 15 § ska körkortet överlämnas för kontroll när en polisman eller bilinspektör begär det.",
    sourceLabel: "Körkortslagen 3 kap. 15 §",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/korkortslag-1998488_sfs-1998-488/"
  },
  {
    id: "q201",
    category: "Fas A",
    text: "Vad står förkortningen LABC för?",
    answers: [
      "Larma, andning, blödning och chock",
      "Livsfarligt läge, andning, blödning och chock",
      "Lägeskontroll, andning, blödning och chock"
    ],
    correct: 1
  },
  {
    id: "q202",
    category: "Fas A",
    text: "När är du skyldig att använda ljussignalen?",
    answers: [
      "Alltid vid omkörning inom tättbebyggt område",
      "När det behövs för att avvärja en fara under mörker",
      "Endast vid omkörning av cyklister som cyklar i bredd"
    ],
    correct: 1
  },
  {
    id: "q301",
    officialArea: "rules",
    topicSv: "Parkering",
    topicAr: "الوقوف",
    category: "Fas B",
    text: "Vem får parkera på P-platser markerade enligt skyltarna?",
    answers: [
      "Endast rullstolsburna",
      "Rörelsehindrade med särskilt tillstånd",
      "Jag får parkera här om jag har en äldre rörelsehindrad passagerare i bilen"
    ],
    textAr: "من يُسمح له بالوقوف في الأماكن المعلّمة بهذه اللوحات؟",
    answersAr: [
      "مستخدمو الكراسي المتحركة فقط",
      "الأشخاص ذوو الإعاقة الذين يحملون تصريحًا خاصًا",
      "يمكنني الوقوف هنا إذا كان معي راكب مسن ذو قدرة حركية محدودة"
    ],
    correct: 1,
    image: "./assets/accessible-parking.webp",
    imageAlt: "Parkeringsplatser för rörelsehindrade",
    imageAltAr: "أماكن وقوف مخصصة للأشخاص ذوي الإعاقة",
    explanation: "هذه الأماكن محجوزة للأشخاص ذوي الإعاقة الذين لديهم تصريح وقوف خاص. وجود راكب مسن أو استخدام كرسي متحرك وحده لا يمنح حق الوقوف دون التصريح.",
    explanationSv: "Platserna är reserverade för rörelsehindrade som har ett särskilt parkeringstillstånd. En äldre passagerare eller användning av rullstol ger inte i sig rätt att parkera där utan tillstånd.",
    sourceLabel: "Transportstyrelsen: Parkeringstillstånd",
    sourceUrl: "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/parkeringstillstand-for-rorelsehindrade/"
  },
  {
    id: "q302",
    officialArea: "rules",
    topicSv: "Vägmarkeringar",
    topicAr: "خطوط الطريق",
    category: "Fas B",
    text: "Lastbilen har stannat på bron. Får du köra över den heldragna linjen i denna situation?",
    answers: ["Ja", "Nej"],
    textAr: "توقفت الشاحنة فوق الجسر. هل يجوز لك عبور الخط المتصل في هذه الحالة؟",
    answersAr: ["نعم", "لا"],
    correct: 0,
    image: "./assets/bridge-line.webp",
    imageAlt: "En lastbil står stilla på en bro med heldragen linje",
    imageAltAr: "شاحنة متوقفة فوق جسر بجانب خط متصل",
    explanation: "الأصل هو عدم عبور الخط المتصل. لكن الفصل 3، المادة 11 يسمح بعبوره بحذر خاص عندما يكون ذلك ضروريًا لتجاوز عائق على الطريق، والشاحنة المتوقفة هنا عائق.",
    explanationSv: "Huvudregeln är att en heldragen linje inte får korsas. Trafikförordningen 3 kap. 11 § tillåter dock att den korsas med särskild försiktighet när det behövs för att passera ett hinder på vägen.",
    sourceLabel: "Trafikförordningen 3 kap. 11 §",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/"
  },
  {
    id: "q401",
    officialArea: "rules",
    topicSv: "Vägmärken och moped",
    topicAr: "الإشارات ودراجات moped",
    category: "Fas B",
    text: "Man separerar trafiken för att minska olyckorna. Vad är sant om området där detta märke är uppsatt?",
    answers: [
      "Det är en gemensam bana för gång- och cykeltrafik samt trafik med klass 2-moped",
      "Banan är endast avsedd för gående och cyklister"
    ],
    textAr: "يُفصل مستخدمو الطريق لتقليل الحوادث. ما الصحيح بشأن المنطقة التي وُضعت عندها هذه العلامة؟",
    answersAr: [
      "إنه مسار مشترك للمشاة والدراجات ودراجات moped من الفئة الثانية",
      "المسار مخصص للمشاة وراكبي الدراجات فقط"
    ],
    correct: 0,
    image: "./assets/shared-path.webp",
    imageAlt: "Påbudsmärke för gemensam gång- och cykelbana",
    imageAltAr: "علامة مسار مشترك للمشاة والدراجات",
    explanation: "العلامة D6 تعني مسارًا مشتركًا للمشاة والدراجات. وتوضح قواعد Transportstyrelsen أن الدراجة النارية الخفيفة من الفئة الثانية تتبع قواعد الدراجة وتسير على مسار الدراجات ما لم توجد لوحة «Ej moped».",
    explanationSv: "Märke D6 anger en gemensam gång- och cykelbana. En tvåhjulig moped klass II ska följa cykelreglerna och använda cykelbanan, om inte en tilläggstavla anger ”Ej moped”.",
    sourceLabel: "Transportstyrelsen: Moped klass II",
    sourceUrl: "https://www.transportstyrelsen.se/moped-klass-ii"
  },
  {
    id: "q402",
    officialArea: "rules",
    topicSv: "Trafiksignaler",
    topicAr: "الإشارات الضوئية",
    category: "Fas B",
    text: "Du närmar dig en korsning med denna trafiksignal och tänker svänga till höger. Hur ska du göra?",
    answers: [
      "Jag ska vänta tills båda trafiksignalerna lyser grönt",
      "Jag får svänga trots den röda signalen",
      "Jag ska vänta tills den röda signalen släcks"
    ],
    textAr: "تقترب من تقاطع بهذه الإشارة وتريد الانعطاف يمينًا. كيف تتصرف؟",
    answersAr: [
      "أنتظر حتى تصبح الإشارتان خضراوين",
      "يمكنني الانعطاف رغم الإشارة الحمراء",
      "أنتظر حتى تنطفئ الإشارة الحمراء"
    ],
    correct: 1,
    image: "./assets/right-turn-signal.webp",
    imageAlt: "Korsning med röd signal och grön högersvängspil",
    imageAltAr: "تقاطع بإشارة حمراء وسهم أخضر للانعطاف يمينًا",
    explanation: "السهم الأخضر يسمح بالحركة في الاتجاه الذي يشير إليه. لذلك يمكن الانعطاف يمينًا رغم بقاء الإشارة الرئيسية حمراء، مع الاستمرار في مراعاة السلامة والمشاة.",
    explanationSv: "En grön pil gäller för den färdriktning som pilen visar. Du får därför svänga åt höger trots att huvudsignalen är röd, men måste fortfarande köra varsamt och ta hänsyn till andra trafikanter.",
    sourceLabel: "Transportstyrelsen: Grön pil",
    sourceUrl: "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/trafiksignaler/gron/"
  },
  {
    id: "q501",
    category: "Fas C",
    text: "Vilken är den vanligaste olyckstypen vid sväng till vänster från större landsväg?",
    answers: [
      "Kollision med fordon som kommer framifrån",
      "Kollision med fordon som kommer bakifrån",
      "Kollision med fordon som kommer från höger",
      "Kollision med fordon som kommer från vänster"
    ],
    correct: 1
  },
  {
    id: "q502",
    category: "Fas C",
    text: "Vilken lampa lyser om krockkuddssystemet inte fungerar?",
    answers: ["Lampa nr 1", "Lampa nr 2", "Lampa nr 9", "Lampa nr 10"],
    correct: 1,
    image: "./assets/airbag-warning.webp",
    imageAlt: "Instrumentpanel med numrerade varningslampor"
  },
  {
    id: "q601",
    category: "Fas C",
    text: "Vad gäller när du med din bil bogserar en annan bil?",
    answers: [
      "Hastigheten får vara högst 30 km/h",
      "Jag måste ha körkort med minst behörigheten BE",
      "Dragstången eller bogserlinan mellan bilarna får vara högst 2 meter lång"
    ],
    correct: 0
  },
  {
    id: "q602",
    category: "Fas C",
    text: "När är det svårast att bedöma avstånd och hastighet till mötande fordon?",
    answers: [
      "Vid körning i dagsljus på rak väg",
      "Vid körning i dagsljus på kurvig väg med fri sikt genom kurvorna",
      "Vid körning i mörker på rak väg",
      "Vid körning i mörker på kurvig väg med fri sikt genom kurvorna"
    ],
    correct: 2
  },
  {
    id: "q701",
    category: "Fas Fordon",
    text: "Efter tvättning av bilen tar bromsarna ofta ojämnt. Hur kan detta fel enklast avhjälpas?",
    answers: [
      "Genom att man blåser varmluft på bromsarna",
      "Genom några inbromsningar i låg fart"
    ],
    correct: 1
  },
  {
    id: "q702",
    officialArea: "vehicle",
    topicSv: "Däck",
    topicAr: "الإطارات",
    category: "Fas Fordon",
    text: "Vilket däck tyder på felaktig framvagnsinställning/hjulinställning?",
    answers: ["Däck A", "Däck B", "Däck C", "Däck D"],
    textAr: "أي إطار يدل على وجود خلل في ضبط المحور الأمامي أو محاذاة العجلات؟",
    answersAr: ["الإطار A", "الإطار B", "الإطار C", "الإطار D"],
    correct: 1,
    image: "./assets/tire-wear.webp",
    imageAlt: "Fyra däck märkta A, B, C och D",
    imageAltAr: "أربعة إطارات تحمل الحروف A وB وC وD",
    explanation: "التآكل غير المتساوي على جانب واحد من الإطار B يشير إلى أن زوايا العجلات أو المحور الأمامي غير مضبوطة. هذا يؤثر في تماسك السيارة وتوجيهها ويجب فحصه.",
    explanationSv: "Det ensidiga och ojämna slitaget på däck B tyder på fel i hjul- eller framvagnsinställningen. Felet kan påverka bilens väggrepp och styrning och bör kontrolleras.",
    sourceLabel: "Trafikverket: Fordonskännedom och manövrering",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  {
    id: "q801",
    officialArea: "rules",
    topicSv: "Trafikförsäkring",
    topicAr: "التأمين المروري",
    category: "Fas Fordon",
    text: "Du köper en begagnad bil, vad måste du alltid göra?",
    answers: [
      "Teckna trafikförsäkring",
      "Besiktiga katalysatorn",
      "En registreringsbesiktning",
      "En kontrollbesiktning"
    ],
    textAr: "عندما تشتري سيارة مستعملة، ما الإجراء الذي يجب عليك القيام به دائمًا؟",
    answersAr: [
      "إبرام تأمين مروري إلزامي",
      "فحص المحوّل الحفاز",
      "إجراء فحص تسجيل",
      "إجراء فحص دوري"
    ],
    correct: 0,
    explanation: "تنص المادة 2 من قانون أضرار المرور على وجوب وجود تأمين مروري للمركبة المسجلة وغير الموقوفة. ويجب على المالك الجديد ترتيب التأمين من يوم انتقال الملكية إذا كانت السيارة قيد الاستخدام.",
    explanationSv: "Enligt 2 § trafikskadelagen ska ett registrerat fordon som inte är avställt ha trafikförsäkring. Den nya ägaren ska ordna försäkringen från ägarbytesdagen om bilen är i trafik.",
    sourceLabel: "Trafikskadelagen 2 §",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikskadelag-19751410_sfs-1975-1410/"
  },
  {
    id: "q802",
    category: "Fas Fordon",
    text: "Vilken är bästa handfattningen för att kunna göra en säker undanmanöver?",
    answers: ["Bild A", "Bild B", "Bild C"],
    correct: 0,
    image: "./assets/steering-grip.webp",
    imageAlt: "Tre bilder som visar olika handfattningar på ratten"
  },
  {
    id: "q901",
    category: "Repetition 1",
    text: "Vilket körsätt är bränslesnålast och bäst för miljön?",
    answers: [
      "Jag använder farthållaren så ofta jag kan",
      "Jag kör alltid med högt motorvarv",
      "Jag kör alltid med låg växel i uppförsbacke",
      "Jag kör alltid med hög växel i nedförsbacke"
    ],
    correct: 0
  },
  {
    id: "q902",
    officialArea: "rules",
    topicSv: "Förbudsmärken",
    topicAr: "علامات المنع",
    category: "Repetition 1",
    text: "Vad innebär vägmärket?",
    answers: [
      "Märket förbjuder all trafik med cykel och moped klass II",
      "Märket förbjuder endast trafik med cykel",
      "Märket förbjuder endast trafik med moped klass I",
      "Märket förbjuder endast trafik med moped klass II"
    ],
    textAr: "ما معنى علامة المرور هذه؟",
    answersAr: [
      "تحظر مرور الدراجات ودراجات moped من الفئة الثانية",
      "تحظر مرور الدراجات فقط",
      "تحظر مرور دراجات moped من الفئة الأولى فقط",
      "تحظر مرور دراجات moped من الفئة الثانية فقط"
    ],
    correct: 0,
    image: "./assets/cycle-moped-ban.webp",
    imageAlt: "Förbudsmärke med cykel och moped",
    imageAltAr: "علامة تمنع مرور الدراجات ودراجات moped",
    explanation: "العلامة C10 تحظر حركة الدراجات والدراجات النارية الخفيفة من الفئة الثانية. لذلك فهي لا تخص الدراجات وحدها ولا الفئة الأولى وحدها.",
    explanationSv: "Förbudsmärke C10 förbjuder trafik med både cykel och moped klass II. Det gäller alltså inte enbart cykel eller enbart en mopedklass.",
    sourceLabel: "Transportstyrelsen: Vägmärken C10",
    sourceUrl: "https://www.transportstyrelsen.se/globalassets/global/publikationer-och-rapporter/vag/vagmarken/ts_poster70x100_2021-10-01_webb.pdf"
  },
  {
    id: "q1001",
    category: "Repetition 1",
    text: "Vid vilket tillfälle är det olämpligt att använda helljus?",
    answers: [
      "När jag har stannat i en parkeringsficka på landsväg",
      "När jag kör på landsväg i mörker utan möte",
      "När jag gör en omkörning",
      "När jag kör i mörker och möter gående"
    ],
    correct: 0
  },
  {
    id: "q1002",
    officialArea: "environment",
    topicSv: "Avgaser och körsätt",
    topicAr: "العوادم وأسلوب القيادة",
    category: "Repetition 1",
    text: "Vad är sant beträffande bilavgaser?",
    answers: [
      "Katalysatorn renar avgaserna från alla giftiga ämnen",
      "Problemen kan endast minskas genom ny teknik",
      "Vårt körsätt kan minska avgasutsläppen"
    ],
    textAr: "ما العبارة الصحيحة بشأن عوادم السيارات؟",
    answersAr: [
      "يُنقّي المحوّل الحفاز العادم من جميع المواد السامة",
      "لا يمكن تقليل المشكلة إلا باستخدام تقنية جديدة",
      "يمكن لطريقة قيادتنا أن تقلل انبعاثات العادم"
    ],
    correct: 2,
    explanation: "أسلوب القيادة يؤثر في استهلاك الوقود والانبعاثات. التسارع الهادئ، التخطيط المسبق والحفاظ على سرعة مناسبة تقلل استهلاك الوقود، بينما لا يزيل المحوّل الحفاز جميع المواد الضارة.",
    explanationSv: "Körsättet påverkar både bränsleförbrukning och utsläpp. Jämn acceleration, framförhållning och lämplig hastighet minskar förbrukningen, medan katalysatorn inte tar bort alla skadliga ämnen.",
    sourceLabel: "Trafikverket: Miljö",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  {
    id: "q1101",
    officialArea: "rules",
    topicSv: "Vägarbete",
    topicAr: "أعمال الطريق",
    category: "Vägmärken",
    text: "Var används detta vägmärke?",
    answers: ["I kurva", "Vid avfart från motorväg", "Vid vägarbete"],
    textAr: "أين تُستخدم هذه العلامة؟",
    answersAr: ["في المنعطفات", "عند مخرج الطريق السريع", "عند أعمال الطريق"],
    correct: 2,
    image: "./assets/roadwork-barrier.webp",
    imageAlt: "Röd och gul markeringsskärm",
    imageAltAr: "حاجز تحذيري بألوان حمراء وصفراء",
    explanation: "هذه شاشة تحديد عائق من النوع X2. يوضح قانون علامات الطريق أنها تعني أن المرور مقيّد بسبب عائق، وأن الخلفية الحمراء تُستخدم عند أعمال الطريق أو عند وجود وضع مؤقت مشابه.",
    explanationSv: "Detta är en markeringsskärm för hinder, X2. Vägmärkesförordningen anger att röd botten används vid vägarbete eller en liknande tillfällig situation.",
    sourceLabel: "Vägmärkesförordningen: X2",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/vagmarkesforordning-200790_sfs-2007-90/"
  },
  {
    id: "q1102",
    category: "Vägmärken",
    text: "Vad innebär detta vägmärke?",
    answers: [
      "Jag måste köra i vänster körfält vid färd rakt fram",
      "Om det högra fältet är fritt från annan trafik får jag använda det vid färd rakt fram",
      "Tack vare märket minskar risken för påkörning bakifrån när jag svänger till vänster"
    ],
    correct: 0,
    image: "./assets/lane-direction.webp",
    imageAlt: "Körfältsmärke som visar tillåtna färdriktningar"
  }
];

const batchSourceByArea = {
  vehicle: {
    sourceLabel: "Trafikverket: Kunskapsprov för B-körkort",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  environment: {
    sourceLabel: "Trafikverket: Kunskapsprov för B-körkort",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  safety: {
    sourceLabel: "Trafikverket: Kunskapsprov för B-körkort",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  },
  rules: {
    sourceLabel: "Trafikförordningen (1998:1276)",
    sourceUrl: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/trafikforordning-19981276_sfs-1998-1276/"
  },
  personal: {
    sourceLabel: "Trafikverket: Kunskapsprov för B-körkort",
    sourceUrl: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/"
  }
};

const batchReasonSvByArea = {
  vehicle: "Svaret följer den fordonskunskap och manövrering som prövas för B-behörighet.",
  environment: "Svaret minskar normalt bränsleförbrukning, utsläpp eller annan miljöpåverkan.",
  safety: "Svaret ger mer tid, avstånd eller uppmärksamhet för att förebygga en olycka.",
  rules: "Svaret följer trafikregeln eller vägmärkets anvisning i situationen.",
  personal: "Svaret beskriver hur människans omdöme, uppmärksamhet eller förmåga påverkar körningen."
};

const batchReasonArByArea = {
  vehicle: "لأنها تتعلق بسلامة المركبة أو تجهيزاتها أو التحكم بها.",
  environment: "لأنها تقلل استهلاك الطاقة أو الانبعاثات أو الأثر البيئي.",
  safety: "لأنها تمنح وقتًا أو مسافة أو رؤية أفضل لتقليل خطر الحوادث.",
  rules: "لأنها تتوافق مع قاعدة المرور أو دلالة العلامة في هذا الموقف.",
  personal: "لأنها توضّح أثر الانتباه أو الحكم أو الحالة الجسدية والنفسية في القيادة."
};

const batchRawQuestions = Array.isArray(window.KORKLAR_BATCH_1_RAW) ? window.KORKLAR_BATCH_1_RAW : [];
const batchArabic = window.KORKLAR_BATCH_1_AR || {};
const batchReviewArabic = window.KORKLAR_BATCH_1_REVIEW_AR || {};
const remainingEnrichedQuestions = Array.isArray(window.KORKLAR_REMAINING_ENRICHED)
  ? window.KORKLAR_REMAINING_ENRICHED
  : [];
const resolvedReviewDefaults = window.KORKLAR_RESOLVED_REVIEW || {};
const cleanupSourceOverrides = window.KORKLAR_CLEANUP_SOURCE || {};
const arabicOverrides = {
  ...(window.KORKLAR_PROV1_GPT_AR || {}),
  ...(window.KORKLAR_PROV2_GPT_AR || {}),
  ...(window.KORKLAR_RULES100_GPT_AR || {}),
  ...(window.KORKLAR_CLEANUP_AR || {}),
  ...(window.KORKLAR_SAMPLE_TEN_AR || {})
};
const REVIEW_STORAGE_KEY = "korklar-batch1-review-v1";

function loadReviewDecisions() {
  try {
    const saved = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY));
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (_) {
    localStorage.removeItem(REVIEW_STORAGE_KEY);
    return {};
  }
}

const reviewDecisions = { ...resolvedReviewDefaults, ...loadReviewDecisions() };
const pendingBatchQuestions = batchRawQuestions.filter((question) => !question.verifiedFromPdfGreen);
const pendingReviewQuestions = [
  ...pendingBatchQuestions.map((question) => ({
    ...question,
    textAr: batchReviewArabic[question.id]?.textAr || question.textSv,
    answersAr: batchReviewArabic[question.id]?.answersAr || question.answersSv,
    reviewImage: `./assets/batch1/review-${question.id}.jpg`,
    machineTranslated: false
  })),
  ...remainingEnrichedQuestions
    .filter((question) => !question.verifiedFromPdfGreen)
    .map((question) => ({ ...question, machineTranslated: true }))
];

function buildBatchQuestion(question, metadata, officialArea, correct, manualExplanation = "") {
  const [topicSv, topicAr, textAr, answersAr, verifiedExplanation] = metadata;
  if (!batchSourceByArea[officialArea]) throw new Error(`Unknown area for ${question.id}`);
  if (!Array.isArray(answersAr) || answersAr.length !== question.answersSv.length) {
    throw new Error(`Arabic answer count does not match ${question.id}`);
  }
  const source = batchSourceByArea[officialArea];
  const selectedArabicAnswer = answersAr[correct];
  const trimmedManualExplanation = typeof manualExplanation === "string" ? manualExplanation.trim() : "";
  const explanationAr = trimmedManualExplanation
    ? (trimmedManualExplanation.startsWith("الإجابة هي")
      ? trimmedManualExplanation
      : `الإجابة هي «${selectedArabicAnswer}». ${trimmedManualExplanation}`)
    : (verifiedExplanation || `الإجابة هي «${selectedArabicAnswer}». ${batchReasonArByArea[officialArea]}`);
  return {
    id: question.id,
    officialArea,
    topicSv,
    topicAr,
    category: question.sourceFile || "Alla frågor",
    text: question.textSv,
    textAr,
    answers: question.answersSv,
    answersAr,
    correct,
    image: question.image,
    imageAlt: `Bild till fråga ${question.sourcePage}`,
    imageAltAr: `صورة السؤال ${question.sourcePage}`,
    explanation: explanationAr,
    explanationSv: question.explanationSv || `Rätt svar är ”${question.answersSv[correct]}”. ${batchReasonSvByArea[officialArea]}`,
    sourceLabel: source.sourceLabel,
    sourceUrl: source.sourceUrl,
    sourceFile: question.sourceFile,
    sourcePage: question.sourcePage,
    globalNumber: question.globalNumber,
    reviewImage: question.reviewImage,
    machineTranslated: Boolean(question.machineTranslated),
    verifiedFromPdfGreen: question.verifiedFromPdfGreen,
    manuallyReviewed: !question.verifiedFromPdfGreen
  };
}

const batchQuestions = batchRawQuestions
  .filter((question) => question.verifiedFromPdfGreen)
  .map((question) => {
    const metadata = batchArabic[question.id];
    if (!metadata) throw new Error(`Arabic metadata is missing for ${question.id}`);
    const [officialArea, topicSv, topicAr, textAr, answersAr, explanation] = metadata;
    return buildBatchQuestion(
      question,
      [topicSv, topicAr, textAr, answersAr, explanation],
      officialArea,
      question.correct
    );
  });

const remainingVerifiedQuestions = remainingEnrichedQuestions
  .filter((question) => question.verifiedFromPdfGreen)
  .map((question) => buildBatchQuestion(
    { ...question, machineTranslated: true },
    [question.topicSv, question.topicAr, question.textAr, question.answersAr, question.explanation],
    question.officialArea,
    question.correct
  ));

const reviewedBatchQuestions = pendingReviewQuestions.flatMap((question) => {
  const decision = reviewDecisions[question.id];
  if (!decision || !batchSourceByArea[decision.officialArea]) return [];
  const correct = Number(decision.correct);
  if (!Number.isInteger(correct) || correct < 0 || correct >= question.answersSv.length) return [];
  return [buildBatchQuestion(
    question,
    ["Manuell granskning", "مراجعة يدوية", question.textAr, question.answersAr, ""],
    decision.officialArea,
    correct,
    typeof decision.explanationAr === "string" ? decision.explanationAr.trim() : ""
  )];
});

const allImportedQuestionIds = new Set([
  ...batchRawQuestions,
  ...remainingEnrichedQuestions
].map((question) => question.id));
const verifiedPdfQuestions = [...batchQuestions, ...remainingVerifiedQuestions];
function applyArabicOverride(question) {
  const override = arabicOverrides[question.id];
  if (!override) return question;
  if (!Array.isArray(override.answersAr) || override.answersAr.length !== question.answers.length) {
    throw new Error(`Arabic answer count does not match ${question.id}`);
  }
  return {
    ...question,
    textAr: override.textAr,
    answersAr: override.answersAr,
    explanation: override.answerReasonsAr?.[question.correct] || override.explanation,
    answerReasonsAr: override.answerReasonsAr,
    learningSource: override.learningSource,
    contentNoteAr: override.contentNoteAr,
    machineTranslated: false,
    gptTranslated: true
  };
}

function applySourceCleanup(question) {
  const override = cleanupSourceOverrides[question.id];
  if (!override) return question;
  if (override.answers && override.answers.length !== question.answers.length) {
    throw new Error(`Swedish answer count does not match ${question.id}`);
  }
  return {
    ...question,
    text: override.text || question.text,
    answers: override.answers || question.answers,
    image: Object.prototype.hasOwnProperty.call(override, "image") ? override.image : question.image
  };
}

const assembledQuestions = [
  ...builtInQuestions.filter((question) => !allImportedQuestionIds.has(question.id)),
  ...verifiedPdfQuestions,
  ...reviewedBatchQuestions
].map(applyArabicOverride);

function numericIdValue(id) {
  return Number(String(id).replace(/\D/g, "")) || 0;
}

function normalizedQuestionPart(value) {
  return String(value || "")
    .toLocaleLowerCase("sv-SE")
    .normalize("NFKC")
    .replace(/[^a-zåäö0-9]+/g, " ")
    .trim();
}

function duplicateSignature(question) {
  const answers = question.answers.map(normalizedQuestionPart).sort().join("|");
  const correctAnswer = normalizedQuestionPart(question.answers[question.correct]);
  return `${normalizedQuestionPart(question.text)}||${answers}||${correctAnswer}`;
}

function questionContentQuality(question) {
  const genericExplanation = /وترتبط بسلامة المركبة|وهي التي تتوافق|لأنها تمنح وقتًا|لأنها تصف أثر|تقلل استهلاك الطاقة/.test(question.explanation || "");
  return (question.gptTranslated ? 20 : 0)
    + (Array.isArray(question.answerReasonsAr) ? 10 : 0)
    + (genericExplanation ? 0 : 5)
    + (question.contentNoteAr ? 2 : 0);
}

function deduplicateQuestions(questions) {
  const bestBySignature = new Map();
  questions.forEach((question) => {
    const signature = duplicateSignature(question);
    const current = bestBySignature.get(signature);
    if (!current
      || questionContentQuality(question) > questionContentQuality(current)
      || (questionContentQuality(question) === questionContentQuality(current)
        && numericIdValue(question.id) < numericIdValue(current.id))) {
      bestBySignature.set(signature, question);
    }
  });
  return [...bestBySignature.values()].sort((left, right) => numericIdValue(left.id) - numericIdValue(right.id));
}

const correctedAreaIds = {
  rules: ["q028", "q061", "q081", "q095", "q101", "q167", "q179", "q183", "q213", "q285", "q401", "q437", "q443", "q464", "q467", "q498", "q542", "q609", "q639", "q668", "q713", "q871", "q879", "q945", "q982", "q1011", "q1025", "q1026", "q1029", "q1047", "q1057", "q1172"],
  vehicle: ["q020", "q096", "q141", "q202", "q447", "q484", "q560", "q634", "q643", "q659", "q667", "q686", "q694", "q697", "q741", "q761", "q769", "q776", "q794", "q798", "q855", "q895", "q923", "q970", "q1194", "q1225", "q1239"],
  safety: ["q122", "q163", "q185", "q200", "q215", "q239", "q240", "q241", "q247", "q322", "q438", "q439", "q459", "q471", "q486", "q488", "q505", "q506", "q533", "q536", "q579", "q864", "q950", "q1022", "q1131", "q1154"],
  environment: ["q435"],
  personal: ["q117", "q126", "q136", "q160", "q169", "q510", "q553", "q859"]
};
const childRestraintQuestionIds = new Set(["q473", "q576", "q598", "q887", "q941"]);
const correctedAreaById = new Map(Object.entries(correctedAreaIds)
  .flatMap(([areaKey, ids]) => ids.map((id) => [id, areaKey])));
childRestraintQuestionIds.forEach((id) => correctedAreaById.set(id, "rules"));
const stageFiveAreaIds = {
  vehicle: ["q456", "q568", "q586", "q632", "q651", "q679", "q687", "q688", "q692", "q698", "q701", "q718", "q728", "q750", "q802", "q805", "q835", "q839", "q870"],
  safety: ["q119", "q198", "q210", "q422", "q448", "q458", "q478", "q557", "q565", "q580", "q594", "q611", "q889", "q1205", "q1233"],
  personal: ["q118", "q130", "q144", "q152", "q429", "q465", "q582", "q988", "q1008"]
};
Object.entries(stageFiveAreaIds).forEach(([areaKey, ids]) =>
  ids.forEach((id) => correctedAreaById.set(id, areaKey)));
const stageSixAreaIds = {
  rules: ["q267", "q663"],
  vehicle: ["q647", "q675"],
  environment: ["q569"],
  safety: ["q515", "q616"]
};
Object.entries(stageSixAreaIds).forEach(([areaKey, ids]) =>
  ids.forEach((id) => correctedAreaById.set(id, areaKey)));
const stageSevenAreaIds = {
  rules: ["q026", "q057", "q195", "q248", "q265", "q412", "q455", "q983", "q1024", "q1207"],
  vehicle: ["q758", "q1019"],
  safety: ["q109", "q208"],
  personal: ["q424", "q1020"]
};
Object.entries(stageSevenAreaIds).forEach(([areaKey, ids]) =>
  ids.forEach((id) => correctedAreaById.set(id, areaKey)));
const stageEightAreaIds = {
  vehicle: ["q613", "q656"],
  rules: ["q636", "q735"]
};
Object.entries(stageEightAreaIds).forEach(([areaKey, ids]) =>
  ids.forEach((id) => correctedAreaById.set(id, areaKey)));
const stageNineAreaIds = {
  rules: ["q296", "q1069"]
};
Object.entries(stageNineAreaIds).forEach(([areaKey, ids]) =>
  ids.forEach((id) => correctedAreaById.set(id, areaKey)));
const reviewedSemanticDuplicateIds = new Set(["q1164"]);
const allQuestions = deduplicateQuestions(
  deduplicateQuestions(assembledQuestions).map(applySourceCleanup)
).filter((question) => !reviewedSemanticDuplicateIds.has(question.id)).map((question) => {
  const correctedArea = correctedAreaById.get(question.id);
  return correctedArea && question.officialArea !== correctedArea
    ? { ...question, officialArea: correctedArea }
    : question;
});

const officialAreas = {
  vehicle: { ar: "معرفة المركبة والتحكم بها", sv: "Fordonskännedom och manövrering" },
  environment: { ar: "البيئة", sv: "Miljö" },
  safety: { ar: "السلامة المرورية", sv: "Trafiksäkerhet" },
  rules: { ar: "قواعد المرور", sv: "Trafikregler" },
  personal: { ar: "الظروف الشخصية", sv: "Personliga förutsättningar" }
};

const areaOrder = ["vehicle", "environment", "safety", "rules", "personal"];
const trainingQuestionIds = allQuestions.map((question) => question.id);
const questionById = new Map(allQuestions.map((question) => [question.id, question]));

const trainingTopicCatalog = {
  vehicle: [
    { id: "loads-trailers", sv: "Last, vikt och släp", ar: "الحمولة والأوزان والمقطورات", icon: "⚖", match: /släp|släpvagn|last|lastning|lastsäkr|kultryck|axeltryck|boggitryck|bruttovikt|tjänstevikt|totalvikt|maximilast|dragkrok|kopplingsanordning/ },
    { id: "tyres-grip", sv: "Däck och väggrepp", ar: "الإطارات والتماسك", icon: "◉", match: /däck|dubbdäck|vinterdäck|mönsterdjup|lufttryck|friktion|snökedj|reservhjul|punktering|nödhjul/ },
    { id: "brakes-driving", sv: "Bromsar och manövrering", ar: "الفرامل والتحكم بالمركبة", icon: "◫", match: /broms|abs|sladd|styrning|styrservo|koppling|växel|motorbroms|parkeringsbroms|färdbroms|start i backe/ },
    { id: "lighting-visibility", sv: "Belysning och sikt", ar: "الإضاءة والرؤية", icon: "☀", match: /belysning|helljus|halvljus|dimljus|bakljus|parkeringsljus|lykta|strålkast|reflex|vindruta|vindrutetork|spolarvätska/ },
    { id: "safety-systems", sv: "Bälte och säkerhetssystem", ar: "حزام الأمان وأنظمة الحماية", icon: "✚", match: /säkerhetsbälte|bilbälte|bältet|airbag|krockkudde|nackskydd|krocksäker/ },
    { id: "maintenance-inspection", sv: "Underhåll och kontroll", ar: "الصيانة وفحص المركبة", icon: "⌁", match: /besikt|service|motorolja|oljenivå|batteri|kylvätska|kylsystem|avgassystem|varningslampa|instrumentpanel|katalysator|framhjul|obalanser|hjulbalans/ },
    { id: "vehicle-basics", sv: "Fordon och teknik", ar: "المركبات والتقنيات الأساسية", icon: "🚗", match: /fordon|personbil|lastbil|motorcykel|moped|fyrhjulsdrift|framhjulsdrift|bakhjulsdrift|registreringsbevis|trafikförsäkring/ },
    { id: "other", sv: "Övrig fordonskunskap", ar: "معارف أخرى عن المركبة", icon: "＋" }
  ],
  environment: [
    { id: "emissions-climate", sv: "Avgaser och klimat", ar: "العوادم والمناخ", icon: "☁", match: /avgas|utsläpp|koldioxid|koloxid|kväveoxid|kolväte|växthuseffekt|ozon|försurning|luftförorening|partiklar|bensen/ },
    { id: "fuel-energy", sv: "Bränslen och energi", ar: "الوقود والطاقة", icon: "⛽", match: /bränsle|bensin|diesel|etanol|biobränsle|biodrivmedel|elbil|förnybar|fossil/ },
    { id: "eco-driving", sv: "Miljövänlig körning", ar: "القيادة الاقتصادية والصديقة للبيئة", icon: "↗", match: /bränsleförbruk|kallstart|motorvärmare|växla|tomgång|eco|miljövän|sparsam|körsätt|arbetstemperatur/ },
    { id: "noise-nature", sv: "Buller och natur", ar: "الضوضاء والطبيعة", icon: "♧", match: /buller|ljudnivå|natur|terrängkör|miljözon|djur/ },
    { id: "transport-choice", sv: "Resor, bilvård och fordonsval", ar: "اختيار النقل والعناية بالمركبة", icon: "♻", match: /samåk|kollektiv|transport|fordonsval|återvinn|skrota|biltvätt|tvätta|färdmedel|trafikmiljö|begagnad bil/ },
    { id: "other", sv: "Övrigt om miljö", ar: "موضوعات بيئية أخرى", icon: "＋" }
  ],
  safety: [
    { id: "speed-distance", sv: "Hastighet och säkerhetsmarginaler", ar: "السرعة ومسافات الأمان", icon: "↔", match: /hastighet|fart|km\/h|bromssträcka|reaktionssträcka|stoppsträcka|avstånd|tresekund|säkerhetsmarginal/ },
    { id: "road-conditions", sv: "Väder, mörker och väglag", ar: "الطقس والظلام وحالة الطريق", icon: "☂", match: /mörker|dimma|halka|väglag|regn|snö|isigt|bländ|sikt|vinter|motljus/ },
    { id: "risk-awareness", sv: "Riskmedveten och defensiv körning", ar: "إدراك المخاطر والقيادة الدفاعية", icon: "◈", match: /defensiv|risk|uppmärksam|blick|avsök|handlingsbered|fara|överrask|grundregel|påkörning|vägren|svänga/ },
    { id: "vulnerable-road-users", sv: "Oskyddade trafikanter", ar: "مستخدمو الطريق غير المحميين", icon: "♙", match: /barn|gående|fotgäng|cykel|cyklist|moped|motorcyk|övergångsställe|cykelöverfart|skol|häst|ryttare/ },
    { id: "accidents-first-aid", sv: "Olyckor och första hjälpen", ar: "الحوادث والإسعافات الأولية", icon: "✚", match: /olyck|skadas svårt|första hjälpen|skadad|blöd|chock|brand|larm|112|vilt|älg|djur|försäkring|diket|samåk/ },
    { id: "other", sv: "Övrig trafiksäkerhet", ar: "موضوعات أخرى في السلامة المرورية", icon: "＋" }
  ],
  rules: [
    { id: "children-passengers", sv: "Barn och bilbarnstolar", ar: "الأطفال ومقاعد السيارة", icon: "♟", match: /barn|bilbarnstol|babyskydd|bälteskudde|barn.*bälte/ },
    { id: "passenger-seats", sv: "Passagerare och sittplatser", ar: "الركاب والمقاعد", icon: "♙", match: /passagerarplatser|passagerare din bil|passagerare får samtidigt|passagerare får färdas/ },
    { id: "parking-stopping", sv: "Stannande och parkering", ar: "التوقف وركن السيارة", icon: "P", match: /parkering\b|parkera|parkerat|parkerings(?!ljus|broms)|stoppförbud|förbud att stanna|p-skiva|datumparkering|lastplats|stanna vid vägkanten|tänkt stanna/ },
    { id: "signs-plates", sv: "Vägmärken och tilläggstavlor", ar: "إشارات المرور واللوحات الإضافية", icon: "△", match: /vägmärk|märkeskombination|\bmärke(?:t|n|na)?\b|skylt|tilläggstavl|vägvis|lokaliseringsmärke|anvisningsmärke|varningsmärke|förbudsmärke|påbudsmärke/ },
    { id: "priority-intersections", sv: "Väjningsregler och korsningar", ar: "قواعد الأولوية والتقاطعات", icon: "◇", match: /väjningsplikt|högerregel|utfartsregel|huvudled|stopplikt|företräde|korsning|cirkulationsplats|rondell|köra ut på en väg från en parkeringsplats/ },
    { id: "speed-roads", sv: "Hastighet och olika vägar", ar: "السرعة وأنواع الطرق", icon: "70", match: /hastighet|km\/h|motorväg|motortrafikled|tättbebyggt|landsväg|bashastighet/ },
    { id: "position-turning", sv: "Placering, körfält och sväng", ar: "التموضع والمسارات والانعطاف", icon: "↱", match: /körfält|placering|sväng|vända|u-sväng|backning|backa|körriktning|filbyte|ge tecken/ },
    { id: "overtaking-meeting", sv: "Omkörning och möte", ar: "التجاوز والتقابل", icon: "⇄", match: /kör om|omkör|mötande|mötesplats|möte med/ },
    { id: "road-users", sv: "Gående, cykel, moped och buss", ar: "المشاة والدراجات والموبيد والحافلات", icon: "♙", match: /gående|fotgäng|cykel|cyklist|moped|motorcyk|övergångsställe|cykelöverfart|buss|häst|ryttare/ },
    { id: "railway", sv: "Järnväg och spårtrafik", ar: "السكك الحديدية والترام", icon: "╫", match: /järnväg|plankorsning|spårvagn|spårområde|tåg/ },
    { id: "licence-duties", sv: "Körkort och förarens skyldigheter", ar: "رخصة القيادة وواجبات السائق", icon: "▣", match: /körkort|behörighet|övningskör|handledare|polis|skyldighet|skyldig|ägarbyte|trafikolycka|utryckningsfordon|blåljus|trafikförsäkring/ },
    { id: "road-markings-signals", sv: "Vägmarkeringar och trafiksignaler", ar: "علامات سطح الطريق والإشارات الضوئية", icon: "═", match: /vägmarkering|mittmarkering|markeringar av vägens mitt|mittlinje|heldragna? linje|linjen i vägens mitt|trafiksignal|gult ljus|vägtransportledare|vägarbete|lokala trafikföreskrift|när får du köra|vilket eller vilka håll|fortsätta rakt fram/ },
    { id: "vehicle-load-rules", sv: "Fordonskrav, last och registrering", ar: "متطلبات المركبة والحمولة والتسجيل", icon: "▤", match: /krockkudd|färdbroms|abs-broms|kylsystem|bromsvätska|bromskrets|säkring|motortemperatur|utskjutande last|korrekt lastat|ägarbyte|fri höjd|dimljus|motorbroms|högtryckstvätt|tvättning av bilen|hur mycket bagage.*lasta|lastad med/ },
    { id: "safe-driving-rules", sv: "Säker körning och risker", ar: "القيادة الآمنة والمخاطر", icon: "◈", match: /fästa blicken|personlig mognad|egenskaper hos en förare|defensiv körning|väggrepp|halkrisk|vinterväglag|vattenplaning|säkert genom en kurva|direktseende|periferiseende|unga män|omkommer|informationen.*synen|förares syn|säker undanmanöver|plötsligt stannat|största risken/ },
    { id: "other", sv: "Övriga trafikregler", ar: "قواعد مرور أخرى", icon: "＋" }
  ],
  personal: [
    { id: "alcohol-drugs", sv: "Alkohol, droger och läkemedel", ar: "الكحول والمخدرات والأدوية", icon: "!", match: /alkohol|rattfyll|promille|droger|narkotika|läkemedel|medicin/ },
    { id: "fatigue-stress", sv: "Trötthet, stress och distraktion", ar: "التعب والتوتر والتشتت", icon: "☾", match: /trött|sömn|stress|distraktion|mobiltelefon|mobilen|uppmärksamhet/ },
    { id: "perception-reaction", sv: "Syn, hörsel och reaktion", ar: "النظر والسمع ورد الفعل", icon: "◎", match: /syn|seende|hörsel|reaktion|mörkerseende|perifer|mötespunkt|fartblind/ },
    { id: "learning-experience", sv: "Inlärning, erfarenhet och ålder", ar: "التعلّم والخبرة والعمر", icon: "◇", match: /inlärning|erfaren|övning|äldre|unga förare|nybliven|körvana|utbildning/ },
    { id: "attitudes-behaviour", sv: "Attityder och beteende", ar: "السلوك والمواقف أثناء القيادة", icon: "◌", match: /impulsiv|aggressiv|grupptryck|självkännedom|överskatt|underskatt|attityd|beteende|riskbenägen|manliga|kvinnliga|trafiksäkerhet/ },
    { id: "other", sv: "Övriga personliga förutsättningar", ar: "ظروف شخصية أخرى", icon: "＋" }
  ]
};

function topicSearchText(question) {
  const label = String(question.topicSv || "");
  const genericLabels = new Set(["Manuell granskning", ...Object.values(officialAreas).map((area) => area.sv)]);
  return [question.text, genericLabels.has(label) ? "" : label].join(" ").toLocaleLowerCase("sv-SE");
}

const reviewedTopicById = {
  q1261: "overtaking-meeting",
  q020: "lighting-visibility",
  q022: "position-turning",
  q025: "railway",
  q028: "railway",
  q061: "railway",
  q065: "priority-intersections",
  q096: "lighting-visibility",
  q116: "railway",
  q141: "lighting-visibility",
  q153: "priority-intersections",
  q155: "railway",
  q156: "other",
  q179: "priority-intersections",
  q183: "licence-duties",
  q194: "priority-intersections",
  q200: "speed-distance",
  q202: "lighting-visibility",
  q213: "parking-stopping",
  q227: "other",
  q230: "position-turning",
  q231: "road-users",
  q234: "parking-stopping",
  q239: "vulnerable-road-users",
  q241: "risk-awareness",
  q246: "other",
  q261: "parking-stopping",
  q264: "position-turning",
  q271: "licence-duties",
  q270: "parking-stopping",
  q324: "parking-stopping",
  q331: "road-markings-signals",
  q322: "risk-awareness",
  q336: "licence-duties",
  q344: "road-markings-signals",
  q371: "other",
  q402: "road-markings-signals",
  q460: "position-turning",
  q464: "overtaking-meeting",
  q484: "lighting-visibility",
  q488: "vulnerable-road-users",
  q498: "licence-duties",
  q506: "risk-awareness",
  q541: "road-users",
  q560: "vehicle-basics",
  q561: "overtaking-meeting",
  q573: "speed-roads",
  q643: "vehicle-basics",
  q667: "vehicle-basics",
  q697: "vehicle-basics",
  q761: "vehicle-basics",
  q794: "maintenance-inspection",
  q841: "position-turning",
  q855: "vehicle-basics",
  q859: "perception-reaction",
  q861: "priority-intersections",
  q862: "licence-duties",
  q873: "licence-duties",
  q879: "position-turning",
  q884: "licence-duties",
  q895: "vehicle-basics",
  q914: "parking-stopping",
  q923: "vehicle-basics",
  q947: "priority-intersections",
  q994: "lighting-visibility",
  q1011: "licence-duties",
  q1043: "signs-plates",
  q1060: "signs-plates",
  q1118: "railway",
  q1128: "railway",
  q1140: "road-markings-signals",
  q1172: "licence-duties",
  q1177: "parking-stopping",
  q1199: "parking-stopping",
  q924: "signs-plates",
  q1251: "signs-plates"
};
const stageFiveTopicById = {
  q045: "licence-duties", q046: "position-turning", q059: "railway",
  q118: "perception-reaction", q119: "speed-distance", q130: "other",
  q144: "attitudes-behaviour", q152: "attitudes-behaviour", q184: "priority-intersections",
  q198: "risk-awareness", q199: "priority-intersections", q210: "risk-awareness",
  q224: "road-markings-signals", q226: "road-markings-signals", q249: "road-users",
  q288: "licence-duties", q329: "parking-stopping", q396: "licence-duties",
  q422: "road-conditions", q429: "perception-reaction", q448: "risk-awareness",
  q456: "safety-systems", q458: "road-conditions", q465: "perception-reaction",
  q478: "risk-awareness", q557: "risk-awareness", q565: "road-conditions",
  q568: "brakes-driving", q580: "road-conditions", q582: "perception-reaction",
  q586: "lighting-visibility", q594: "accidents-first-aid", q611: "road-conditions",
  q632: "loads-trailers", q651: "brakes-driving", q657: "signs-plates",
  q679: "brakes-driving", q687: "vehicle-basics", q688: "maintenance-inspection",
  q692: "loads-trailers", q698: "brakes-driving", q701: "brakes-driving",
  q718: "maintenance-inspection", q728: "maintenance-inspection", q750: "brakes-driving",
  q802: "brakes-driving", q805: "loads-trailers", q835: "loads-trailers",
  q839: "brakes-driving", q870: "loads-trailers", q889: "risk-awareness",
  q909: "signs-plates", q988: "perception-reaction", q1008: "attitudes-behaviour",
  q1026: "signs-plates", q1029: "road-markings-signals", q1063: "signs-plates",
  q1067: "signs-plates", q1086: "signs-plates", q1095: "signs-plates",
  q1157: "licence-duties", q1205: "accidents-first-aid", q1233: "risk-awareness"
};
const stageSixTopicById = {
  q267: "licence-duties", q442: "tyres-grip", q515: "road-conditions",
  q569: "emissions-climate", q571: "tyres-grip", q616: "road-conditions",
  q620: "maintenance-inspection", q631: "maintenance-inspection",
  q647: "vehicle-basics", q654: "maintenance-inspection", q663: "licence-duties",
  q673: "maintenance-inspection", q675: "vehicle-basics", q774: "brakes-driving",
  q780: "maintenance-inspection", q1160: "safety-systems"
};
const stageSevenTopicById = {
  q026: "other", q053: "risk-awareness", q057: "priority-intersections",
  q108: "other", q109: "speed-distance", q137: "road-conditions",
  q195: "other", q208: "vulnerable-road-users", q215: "vulnerable-road-users",
  q228: "vulnerable-road-users", q248: "road-users", q265: "road-users",
  q294: "vulnerable-road-users", q412: "road-users", q424: "perception-reaction",
  q426: "risk-awareness", q455: "position-turning", q508: "road-conditions",
  q533: "vulnerable-road-users", q536: "road-conditions", q543: "accidents-first-aid",
  q547: "road-conditions", q567: "risk-awareness", q579: "vulnerable-road-users",
  q625: "accidents-first-aid", q758: "loads-trailers", q867: "accidents-first-aid",
  q983: "road-markings-signals", q1019: "lighting-visibility",
  q1020: "perception-reaction", q1024: "road-markings-signals",
  q1207: "licence-duties"
};
const stageEightTopicById = {
  q042: "eco-driving", q140: "eco-driving", q446: "eco-driving",
  q462: "eco-driving", q477: "eco-driving", q523: "eco-driving",
  q538: "eco-driving", q613: "maintenance-inspection", q635: "emissions-climate",
  q636: "licence-duties", q656: "maintenance-inspection", q670: "emissions-climate", q703: "emissions-climate",
  q716: "emissions-climate", q735: "licence-duties", q775: "eco-driving",
  q811: "emissions-climate", q896: "emissions-climate", q901: "eco-driving",
  q952: "emissions-climate", q987: "eco-driving", q1006: "eco-driving",
  q1034: "eco-driving", q1142: "eco-driving", q1158: "emissions-climate",
  q1244: "emissions-climate", q463: "transport-choice", q550: "emissions-climate"
};
const stageNineTopicById = {
  q117: "attitudes-behaviour", q124: "perception-reaction",
  q130: "learning-experience", q160: "perception-reaction",
  q169: "learning-experience", q170: "attitudes-behaviour",
  q296: "signs-plates", q510: "attitudes-behaviour",
  q1069: "signs-plates"
};

function trainingTopicForQuestion(question) {
  const catalog = trainingTopicCatalog[question.officialArea] || [];
  const reviewedTopicId = stageNineTopicById[question.id]
    || stageEightTopicById[question.id]
    || stageSevenTopicById[question.id]
    || stageSixTopicById[question.id]
    || stageFiveTopicById[question.id]
    || reviewedTopicById[question.id];
  if (reviewedTopicId) {
    const reviewedTopic = catalog.find((topic) => topic.id === reviewedTopicId);
    if (reviewedTopic) return reviewedTopic;
  }
  if (["q598", "q941"].includes(question.id)) return catalog.find((topic) => topic.id === "children-passengers");
  if (question.id === "q1018") return catalog.find((topic) => topic.id === "priority-intersections");
  if (question.officialArea === "rules" && /vägmärk|\bmärke(?:t|n|na)?\b|skylt|tilläggstavl/i.test(question.text)) {
    const parkingOptions = question.answers.filter((answer) => /parkera|parkering|parkerings(?!ljus|broms)/i.test(answer));
    if (parkingOptions.length >= Math.ceil(question.answers.length / 2)) {
      return catalog.find((topic) => topic.id === "parking-stopping");
    }
  }
  const searchable = topicSearchText(question);
  const explicitTopic = catalog.find((topic) => topic.match?.test(searchable));
  if (explicitTopic) return explicitTopic;
  const threshold = Math.max(2, Math.ceil(question.answers.length * 0.6));
  const answerTopic = catalog.find((topic) => topic.match
    && question.answers.filter((answer) => topic.match.test(answer.toLocaleLowerCase("sv-SE"))).length >= threshold);
  return answerTopic || catalog.find((topic) => topic.id === "other");
}

function topicLabel(areaKey, topicKey) {
  const topic = trainingTopicCatalog[areaKey]?.find((item) => item.id === topicKey);
  if (!topic) return "";
  if (currentLanguage === "ar") return topic.ar;
  if (currentLanguage === "sv") return topic.sv;
  return `${topic.ar} · ${topic.sv}`;
}

function numericQuestionId(id) {
  return Number(id.replace(/\D/g, "")) || 0;
}

function buildMixedTests(questionIds, testCount = Math.floor(questionIds.length / 70), questionsPerTest = 70) {
  const testBuckets = Array.from({ length: testCount }, () => []);
  const availableQuestions = questionIds
    .map((id) => questionById.get(id))
    .filter(Boolean);

  const remainingByArea = new Map(areaOrder.map((areaKey) => [
    areaKey,
    availableQuestions
      .filter((question) => question.officialArea === areaKey)
      .sort((left, right) => numericQuestionId(left.id) - numericQuestionId(right.id))
  ]));

  // Seed every test with one question from every official area.
  testBuckets.forEach((bucket) => {
    areaOrder.forEach((areaKey) => {
      const question = remainingByArea.get(areaKey).shift();
      if (!question) throw new Error(`Not enough questions in ${areaKey} to cover every test`);
      bucket.push(question.id);
    });
  });

  // Distribute each remaining question once. Round-robin capacity makes every test exactly 70.
  const remainingPool = areaOrder
    .flatMap((areaKey) => remainingByArea.get(areaKey))
    .sort((left, right) => numericQuestionId(left.id) - numericQuestionId(right.id));
  let testCursor = 0;
  remainingPool.forEach((question) => {
    if (testBuckets.every((bucket) => bucket.length >= questionsPerTest)) return;
    while (testBuckets[testCursor].length >= questionsPerTest) {
      testCursor = (testCursor + 1) % testCount;
    }
    testBuckets[testCursor].push(question.id);
    testCursor = (testCursor + 1) % testCount;
  });

  testBuckets.forEach((bucket, testIndex) => {
    bucket.sort((left, right) => {
      const leftKey = (numericQuestionId(left) * 53 + (testIndex + 1) * 97) % 1543;
      const rightKey = (numericQuestionId(right) * 53 + (testIndex + 1) * 97) % 1543;
      return leftKey - rightKey || numericQuestionId(left) - numericQuestionId(right);
    });
  });

  const uniqueIds = new Set(testBuckets.flat());
  if (uniqueIds.size !== testCount * questionsPerTest || testBuckets.some((bucket) => bucket.length !== questionsPerTest)) {
    throw new Error("Prov distribution must contain every question exactly once");
  }

  return testBuckets;
}

const mixedTestQuestionIds = buildMixedTests(trainingQuestionIds);

const testDefinitions = mixedTestQuestionIds.map((questionIds, index) => ({
  id: `prov-${index + 1}`,
  type: "test",
  number: index + 1,
  available: true,
  preview: false,
  plannedQuestionCount: 70,
  requiredAreas: [...areaOrder],
  questionIds
}));

const trainingDefinitions = areaOrder.map((areaKey) => ({
  id: `area-${areaKey}`,
  type: "area",
  areaKey,
  available: true,
  preview: true,
  requiredAreas: [areaKey],
  questionIds: trainingQuestionIds.filter((id) => questionById.get(id)?.officialArea === areaKey)
}));

const topicDefinitions = areaOrder.flatMap((areaKey) => trainingTopicCatalog[areaKey]
  .map((topic) => ({
    id: `topic-${areaKey}-${topic.id}`,
    type: "topic",
    areaKey,
    topicKey: topic.id,
    icon: topic.icon,
    available: true,
    preview: true,
    requiredAreas: [areaKey],
    questionIds: trainingQuestionIds.filter((id) => {
      const question = questionById.get(id);
      return question?.officialArea === areaKey && trainingTopicForQuestion(question)?.id === topic.id;
    })
  }))
  .filter((topic) => topic.questionIds.length));

const activityDefinitions = [...testDefinitions, ...trainingDefinitions, ...topicDefinitions];

function questionsForTest(test) {
  return test.questionIds.map((id) => questionById.get(id)).filter(Boolean);
}

function coversEveryArea(test) {
  const coveredAreas = new Set(questionsForTest(test).map((question) => question.officialArea));
  return test.requiredAreas.every((area) => coveredAreas.has(area));
}

activityDefinitions.filter((test) => test.available).forEach((test) => {
  if (!coversEveryArea(test)) throw new Error(`${test.id} must include every official Träningsområde`);
});

const interfaceText = {
  ar: {
    landingKicker: "اختر طريقة الدراسة",
    landingTitle: "كيف تريد أن تبدأ؟",
    trainingCardTitle: "Träna",
    trainingCardNote: "تدرّب حسب المجال واعرف فورًا هل إجابتك صحيحة ولماذا.",
    examCardTitle: "Prova",
    examCardNote: "أجب عن 70 سؤالًا ثم شاهد النتيجة في النهاية.",
    passed: "ناجح",
    failed: "غير ناجح",
    brandSubtitle: "تدريب القيادة السويدية",
    sample: "810 أسئلة فريدة",
    install: "تثبيت التطبيق",
    dashboardEyebrow: "خطة التدريب",
    dashboardTitle: "اختبارات رخصة القيادة B",
    dashboardDescription: "11 اختبارًا متاحًا، وفي كل اختبار 70 سؤالًا فريدًا مختلطًا من المجالات الخمسة.",
    testsLabel: "اختبارًا",
    questionsLabel: "سؤالًا لكل اختبار",
    areasLabel: "مجالات في كل اختبار",
    coverageKicker: "Träningsområde",
    coverageTitle: "كل اختبار يمزج المجالات الرسمية الخمسة",
    testsKicker: "اختر الاختبار",
    testsTitle: "Prov 1–11",
    sampleNote: "جميع الاختبارات متاحة الآن. كل Prov يضم 70 سؤالًا ويغطي مجالات Träningsområde الخمسة.",
    testsTab: "الاختبارات · Prov",
    areasTab: "التدريب حسب المجال",
    reviewTab: (total) => `المراجعة (${total})`,
    areasKicker: "اختر Träningsområde",
    areasTitle: "تدرّب على مجال محدد",
    areasNote: "اختر مجالًا لعرض أسئلته فقط. يُحفظ التقدم والنتيجة لكل مجال بشكل مستقل.",
    batchStatus: (imported, pending) => `تمت إضافة ${imported} سؤالًا إلى المجالات · ${pending} قيد المراجعة`,
    reviewKicker: "مراجعة الأسئلة",
    reviewTitle: "الأسئلة التي حُسمت بعد المراجعة",
    reviewNote: "تم تحديد الإجابة الصحيحة والمجال لكل سؤال. يمكنك تعديل أي قرار عند الحاجة.",
    reviewStatus: (done, total) => `تمت مراجعة ${done} من ${total}`,
    reviewQuestion: (page) => `السؤال ${page} · صفحة PDF رقم ${page}`,
    reviewOpenPage: "اضغط على الصورة لفتح صفحة PDF بالحجم الكامل",
    needsReview: "يحتاج مراجعة",
    reviewedAdded: "تمت إضافته",
    correctAnswerLabel: "حدد الإجابة الصحيحة",
    reviewAreaLabel: "اختر Träningsområde الصحيح",
    chooseArea: "اختر المجال",
    reviewExplanationLabel: "شرح قصير للطالب (اختياري)",
    reviewExplanationPlaceholder: "لماذا هذه الإجابة صحيحة؟",
    saveReview: "اعتماد وإضافة السؤال",
    updateReview: "تحديث القرار",
    areaPractice: "تدريب حسب المجال",
    areaQuestions: (count) => count === 1 ? "سؤال واحد متاح الآن" : `${count} أسئلة متاحة الآن`,
    startArea: "ابدأ التدريب",
    chooseTopics: "اختر موضوعًا",
    topicPractice: "تدريب حسب الموضوع",
    topicQuestions: (count) => `${count} أسئلة في هذا الموضوع`,
    startTopic: "ابدأ الموضوع",
    backToAreas: "← المجالات",
    backToTopics: "← موضوعات المجال",
    topicSize: "أسئلة الموضوع",
    preview: "70 سؤالًا",
    coming: "قريبًا",
    allFive: "جميع المجالات الخمسة",
    previewQuestions: (count) => `${count} سؤالًا`,
    plannedQuestions: (count) => `${count} سؤالًا مخططًا`,
    notStarted: "لم يبدأ",
    inProgress: (answered, total) => `قيد التقدم · ${answered}/${total}`,
    completed: (score, total) => `مكتمل · ${score}/${total}`,
    start: "ابدأ الاختبار",
    continue: "متابعة",
    showResult: "عرض النتيجة",
    comingButton: "بعد إضافة الأسئلة",
    backHome: "← الاختبارات",
    backAreas: "← المجالات",
    progress: "تقدمك",
    correct: "صحيحة",
    incorrect: "خاطئة",
    saved: "محفوظة",
    previewSize: "أسئلة الاختبار",
    areaSize: "أسئلة المجال",
    reset: "إعادة الاختبار",
    activePreview: "اختبار مختلط",
    previous: "السابق",
    next: "التالي",
    result: "النتيجة",
    save: "☆ حفظ",
    savedButton: "★ محفوظ",
    source: "المصدر الرسمي",
    question: (current, total) => `السؤال ${current} من ${total}`,
    correctResult: "إجابة صحيحة! أحسنت.",
    wrongResult: (answer) => `إجابة غير صحيحة. الإجابة الصحيحة: ${answer}`,
    resultKicker: "نتيجة الاختبار",
    resultTitle: (number) => `نتيجة Prov ${number}`,
    resultAreaKicker: "نتيجة التدريب حسب المجال",
    resultAreaTitle: (area) => `نتيجة ${area}`,
    resultMessage: (answered, total) => `أجبت عن ${answered} من ${total}`,
    areaResultTitle: "النتيجة حسب Träningsområde",
    resultHome: "الصفحة الرئيسية",
    review: "مراجعة الإجابات",
    retry: (number) => `إعادة Prov ${number}`,
    retryArea: "إعادة تدريب المجال",
    bottomHome: "الرئيسية",
    bottomTests: "الاختبارات",
    bottomAreas: "التدريب",
    bottomMistakes: "الأخطاء",
    bottomSaved: "المحفوظة",
    mistakesKicker: "تدريب ذكي",
    mistakesTitle: "تدرّب على إجاباتك الخاطئة",
    mistakesNote: "تظهر هنا الأسئلة التي أخطأت فيها، وتُزال عندما تجيب عنها بصورة صحيحة.",
    mistakesEmptyTitle: "لا توجد أخطاء للمراجعة",
    mistakesEmptyNote: "ابدأ أحد الاختبارات، وستُجمع الإجابات الخاطئة هنا تلقائيًا.",
    savedKicker: "قائمتك",
    savedTitle: "الأسئلة المحفوظة",
    savedNote: "احفظ أي سؤال أثناء التدريب لتعود إليه سريعًا من هنا.",
    savedEmptyTitle: "لا توجد أسئلة محفوظة",
    savedEmptyNote: "اضغط «☆ حفظ» داخل أي سؤال ليظهر في هذه القائمة.",
    collectionPractice: "تدريب مخصص",
    collectionQuestions: (count) => `${count} سؤالًا`,
    startCollection: "ابدأ التدريب",
    backCollection: "← القائمة",
    collectionSize: "أسئلة القائمة",
    activeCollection: "تدريب مخصص",
    resultCollectionKicker: "نتيجة التدريب المخصص",
    resultCollectionTitle: (title) => `نتيجة ${title}`,
    retryCollection: "إعادة التدريب",
    searchPlaceholder: "ابحث بالكلمات أو برقم السؤال، مثل q067...",
    searchButtonLabel: "🔍 بحث",
    searchTitle: "نتائج البحث",
    searchNoResults: "لا توجد أسئلة مطابقة لكلمة البحث."
  },
  sv: {
    landingKicker: "Välj studiesätt",
    landingTitle: "Hur vill du börja?",
    trainingCardTitle: "Träna",
    trainingCardNote: "Träna per område och få svar och förklaring direkt.",
    examCardTitle: "Prova",
    examCardNote: "Besvara 70 frågor och se resultatet när du lämnar in.",
    passed: "Godkänd",
    failed: "Inte godkänd",
    brandSubtitle: "Svensk körkortsträning",
    sample: "810 unika frågor",
    install: "Installera",
    dashboardEyebrow: "Träningsplan",
    dashboardTitle: "Kunskapsprov för B-körkort",
    dashboardDescription: "11 tillgängliga prov med 70 unika, blandade frågor från de fem områdena i varje prov.",
    testsLabel: "prov",
    questionsLabel: "frågor per prov",
    areasLabel: "områden i varje prov",
    coverageKicker: "Träningsområde",
    coverageTitle: "Varje prov blandar de fem officiella områdena",
    testsKicker: "Välj prov",
    testsTitle: "Prov 1–11",
    sampleNote: "Alla prov är tillgängliga. Varje prov innehåller 70 frågor och täcker alla fem Träningsområden.",
    testsTab: "Prov 1–11",
    areasTab: "Träna per område",
    reviewTab: (total) => `Granska (${total})`,
    areasKicker: "Välj Träningsområde",
    areasTitle: "Träna på ett särskilt område",
    areasNote: "Välj ett område för att bara visa dess frågor. Framsteg och resultat sparas separat för varje område.",
    batchStatus: (imported, pending) => `${imported} frågor har lagts till i områdena · ${pending} granskas`,
    reviewKicker: "Frågegranskning",
    reviewTitle: "Frågor som har lösts efter granskning",
    reviewNote: "Rätt svar och område har valts för varje fråga. Du kan ändra ett beslut vid behov.",
    reviewStatus: (done, total) => `${done} av ${total} frågor granskade`,
    reviewQuestion: (page) => `Fråga ${page} · PDF-sida ${page}`,
    reviewOpenPage: "Klicka på bilden för att öppna PDF-sidan i full storlek",
    needsReview: "Behöver granskas",
    reviewedAdded: "Tillagd",
    correctAnswerLabel: "Välj rätt svar",
    reviewAreaLabel: "Välj rätt Träningsområde",
    chooseArea: "Välj område",
    reviewExplanationLabel: "Kort förklaring till eleven (valfri)",
    reviewExplanationPlaceholder: "Varför är svaret rätt?",
    saveReview: "Godkänn och lägg till",
    updateReview: "Uppdatera beslut",
    areaPractice: "Träning per område",
    areaQuestions: (count) => `${count} frågor tillgängliga nu`,
    startArea: "Starta träningen",
    chooseTopics: "Välj ett ämne",
    topicPractice: "Träning per ämne",
    topicQuestions: (count) => `${count} frågor i ämnet`,
    startTopic: "Starta ämnet",
    backToAreas: "← Områden",
    backToTopics: "← Ämnen i området",
    topicSize: "Frågor i ämnet",
    preview: "70 frågor",
    coming: "Kommer snart",
    allFive: "Alla fem områden",
    previewQuestions: (count) => `${count} frågor`,
    plannedQuestions: (count) => `${count} planerade frågor`,
    notStarted: "Inte påbörjat",
    inProgress: (answered, total) => `Pågår · ${answered}/${total}`,
    completed: (score, total) => `Klart · ${score}/${total}`,
    start: "Starta provet",
    continue: "Fortsätt",
    showResult: "Visa resultat",
    comingButton: "När frågorna lagts till",
    backHome: "← Alla prov",
    backAreas: "← Alla områden",
    progress: "Dina framsteg",
    correct: "Rätt",
    incorrect: "Fel",
    saved: "Sparade",
    previewSize: "Frågor i provet",
    areaSize: "Frågor i området",
    reset: "Börja om",
    activePreview: "Blandat prov",
    previous: "Föregående",
    next: "Nästa",
    result: "Resultat",
    save: "☆ Spara",
    savedButton: "★ Sparad",
    source: "Officiell källa",
    question: (current, total) => `Fråga ${current} av ${total}`,
    correctResult: "Rätt svar! Bra jobbat.",
    wrongResult: (answer) => `Fel svar. Rätt svar är: ${answer}`,
    resultKicker: "Provresultat",
    resultTitle: (number) => `Resultat för Prov ${number}`,
    resultAreaKicker: "Resultat för områdesträning",
    resultAreaTitle: (area) => `Resultat: ${area}`,
    resultMessage: (answered, total) => `Du svarade på ${answered} av ${total}`,
    areaResultTitle: "Resultat per Träningsområde",
    resultHome: "Startsidan",
    review: "Granska svar",
    retry: (number) => `Gör om Prov ${number}`,
    retryArea: "Träna området igen",
    bottomHome: "Hem",
    bottomTests: "Prov",
    bottomAreas: "Träna",
    bottomMistakes: "Fel",
    bottomSaved: "Sparade",
    mistakesKicker: "Smart träning",
    mistakesTitle: "Träna på dina fel",
    mistakesNote: "Frågor du svarat fel på samlas här och tas bort när du svarar rätt.",
    mistakesEmptyTitle: "Inga fel att repetera",
    mistakesEmptyNote: "Starta ett prov så samlas felaktiga svar automatiskt här.",
    savedKicker: "Din lista",
    savedTitle: "Sparade frågor",
    savedNote: "Spara en fråga under träningen för att snabbt hitta den här.",
    savedEmptyTitle: "Inga sparade frågor",
    savedEmptyNote: "Tryck på ”☆ Spara” i en fråga så visas den här.",
    collectionPractice: "Anpassad träning",
    collectionQuestions: (count) => `${count} frågor`,
    startCollection: "Starta träningen",
    backCollection: "← Listan",
    collectionSize: "Frågor i listan",
    activeCollection: "Anpassad träning",
    resultCollectionKicker: "Resultat för anpassad träning",
    resultCollectionTitle: (title) => `Resultat: ${title}`,
    retryCollection: "Träna igen",
    searchPlaceholder: "Sök med ord eller frågenummer, till exempel q067...",
    searchButtonLabel: "🔍 Sök",
    searchTitle: "Sökresultat",
    searchNoResults: "Inga frågor matchar sökordet."
  },
  both: {
    landingKicker: "اختر طريقة الدراسة · Välj studiesätt",
    landingTitle: "كيف تريد أن تبدأ؟ · Hur vill du börja?",
    trainingCardTitle: "Träna · التدريب",
    trainingCardNote: "تدريب حسب المجال مع تصحيح فوري · Träna per område med direkt återkoppling.",
    examCardTitle: "Prova · الاختبار",
    examCardNote: "70 سؤالًا والنتيجة بعد التسليم · 70 frågor, resultat efter inlämning.",
    passed: "ناجح · Godkänd",
    failed: "غير ناجح · Inte godkänd",
    brandSubtitle: "تدريب القيادة · Svensk körkortsträning",
    sample: "810 أسئلة فريدة · unika frågor",
    install: "تثبيت · Installera",
    dashboardEyebrow: "خطة التدريب · Träningsplan",
    dashboardTitle: "اختبارات رخصة B · Kunskapsprov B",
    dashboardDescription: "11 اختبارًا، وفي كل اختبار 70 سؤالًا فريدًا مختلطًا · 11 prov med 70 unika, blandade frågor.",
    testsLabel: "اختبارًا · prov",
    questionsLabel: "سؤالًا لكل اختبار · frågor per prov",
    areasLabel: "5 مجالات · 5 områden",
    coverageKicker: "Träningsområde",
    coverageTitle: "جميع المجالات في كل اختبار · Alla områden i varje prov",
    testsKicker: "اختر الاختبار · Välj prov",
    testsTitle: "Prov 1–11",
    sampleNote: "جميع الاختبارات متاحة، 70 سؤالًا في كل Prov · Alla prov är tillgängliga med 70 frågor.",
    testsTab: "الاختبارات · Prov",
    areasTab: "حسب المجال · Per område",
    reviewTab: (total) => `المراجعة · Granska (${total})`,
    areasKicker: "اختر المجال · Välj Träningsområde",
    areasTitle: "تدريب مجال محدد · Träna per område",
    areasNote: "اختر مجالًا لعرض أسئلته فقط · Välj ett område för att visa bara dess frågor.",
    batchStatus: (imported, pending) => `تمت إضافة ${imported} سؤالًا · ${imported} frågor tillagda · ${pending} قيد المراجعة`,
    reviewKicker: "مراجعة الأسئلة · Frågegranskning",
    reviewTitle: "الأسئلة المحسومة · Granskade frågor",
    reviewNote: "تم اختيار الإجابة والمجال ويمكن تعديلهما · Svar och område är valda och kan ändras.",
    reviewStatus: (done, total) => `${done}/${total} تمت مراجعتها · granskade`,
    reviewQuestion: (page) => `السؤال ${page} · Fråga ${page}`,
    reviewOpenPage: "اضغط للتكبير · Klicka för full storlek",
    needsReview: "مراجعة · Granska",
    reviewedAdded: "تمت الإضافة · Tillagd",
    correctAnswerLabel: "الإجابة الصحيحة · Rätt svar",
    reviewAreaLabel: "المجال الصحيح · Rätt område",
    chooseArea: "اختر · Välj område",
    reviewExplanationLabel: "شرح قصير · Kort förklaring",
    reviewExplanationPlaceholder: "لماذا الجواب صحيح؟ · Varför är svaret rätt?",
    saveReview: "اعتماد وإضافة · Godkänn",
    updateReview: "تحديث · Uppdatera",
    areaPractice: "حسب المجال · Per område",
    areaQuestions: (count) => `${count} أسئلة · frågor`,
    startArea: "ابدأ التدريب · Starta",
    chooseTopics: "اختر موضوعًا · Välj ett ämne",
    topicPractice: "تدريب حسب الموضوع · Träning per ämne",
    topicQuestions: (count) => `${count} أسئلة · frågor i ämnet`,
    startTopic: "ابدأ · Starta ämnet",
    backToAreas: "← المجالات · Områden",
    backToTopics: "← موضوعات المجال · Ämnen",
    topicSize: "أسئلة الموضوع · Ämnesfrågor",
    preview: "70 سؤالًا · frågor",
    coming: "قريبًا · Kommer snart",
    allFive: "المجالات الخمسة · Alla fem områden",
    previewQuestions: (count) => `${count} سؤالًا · frågor`,
    plannedQuestions: (count) => `${count} سؤالًا · planerade frågor`,
    notStarted: "لم يبدأ · Inte påbörjat",
    inProgress: (answered, total) => `قيد التقدم · Pågår ${answered}/${total}`,
    completed: (score, total) => `مكتمل · Klart ${score}/${total}`,
    start: "ابدأ · Starta",
    continue: "متابعة · Fortsätt",
    showResult: "النتيجة · Visa resultat",
    comingButton: "بعد إضافة الأسئلة · Frågor kommer",
    backHome: "← الاختبارات · Alla prov",
    backAreas: "← المجالات · Alla områden",
    progress: "تقدمك · Framsteg",
    correct: "صحيحة · Rätt",
    incorrect: "خاطئة · Fel",
    saved: "محفوظة · Sparade",
    previewSize: "أسئلة الاختبار · Provfrågor",
    areaSize: "أسئلة المجال · Områdesfrågor",
    reset: "إعادة الاختبار · Börja om",
    activePreview: "اختبار مختلط · Blandat prov",
    previous: "السابق · Föregående",
    next: "التالي · Nästa",
    result: "النتيجة · Resultat",
    save: "☆ حفظ · Spara",
    savedButton: "★ محفوظ · Sparad",
    source: "المصدر الرسمي · Officiell källa",
    question: (current, total) => `السؤال ${current}/${total} · Fråga ${current}/${total}`,
    correctResult: "إجابة صحيحة! · Rätt svar!",
    wrongResult: (answer) => `إجابة غير صحيحة · Fel svar: ${answer}`,
    resultKicker: "نتيجة الاختبار · Provresultat",
    resultTitle: (number) => `Prov ${number} · النتيجة`,
    resultAreaKicker: "نتيجة المجال · Områdesresultat",
    resultAreaTitle: (area) => `${area} · النتيجة`,
    resultMessage: (answered, total) => `أجبت عن ${answered}/${total} · Besvarade ${answered}/${total}`,
    areaResultTitle: "النتيجة حسب المجال · Resultat per område",
    resultHome: "الرئيسية · Startsidan",
    review: "مراجعة · Granska svar",
    retry: (number) => `إعادة Prov ${number} · Gör om`,
    retryArea: "إعادة المجال · Träna igen",
    bottomHome: "الرئيسية · Hem",
    bottomTests: "الاختبارات · Prov",
    bottomAreas: "التدريب · Träna",
    bottomMistakes: "الأخطاء · Fel",
    bottomSaved: "المحفوظة · Sparade",
    mistakesKicker: "تدريب ذكي · Smart träning",
    mistakesTitle: "تدريب الأخطاء · Träna på fel",
    mistakesNote: "تُجمع الأخطاء هنا وتُزال بعد الإجابة الصحيحة · Fel samlas här och tas bort efter rätt svar.",
    mistakesEmptyTitle: "لا توجد أخطاء · Inga fel",
    mistakesEmptyNote: "ابدأ اختبارًا أولًا · Starta ett prov först.",
    savedKicker: "قائمتك · Din lista",
    savedTitle: "الأسئلة المحفوظة · Sparade frågor",
    savedNote: "احفظ الأسئلة للعودة إليها · Spara frågor för snabb åtkomst.",
    savedEmptyTitle: "لا توجد محفوظات · Inga sparade frågor",
    savedEmptyNote: "اضغط زر الحفظ داخل السؤال · Tryck på spara i frågan.",
    collectionPractice: "تدريب مخصص · Anpassad träning",
    collectionQuestions: (count) => `${count} سؤالًا · frågor`,
    startCollection: "ابدأ · Starta",
    backCollection: "← القائمة · Listan",
    collectionSize: "أسئلة القائمة · Listfrågor",
    activeCollection: "تدريب مخصص · Anpassad träning",
    resultCollectionKicker: "نتيجة مخصصة · Anpassat resultat",
    resultCollectionTitle: (title) => `${title} · النتيجة`,
    retryCollection: "إعادة التدريب · Träna igen",
    searchPlaceholder: "ابحث بالكلمات أو برقم السؤال · Sök med ord eller frågenummer, t.ex. q067...",
    searchButtonLabel: "🔍 بحث · Sök",
    searchTitle: "نتائج البحث · Sökresultat",
    searchNoResults: "لا توجد أسئلة مطابقة لكلمة البحث. · Inga frågor matchar sökordet."
  }
};

const STORAGE_KEY = "korklar-tests-v7";
const QUESTION_SET_VERSION = 42;
let currentLanguage = localStorage.getItem("korklar-language") || "ar";
if (!interfaceText[currentLanguage]) currentLanguage = "ar";

const appState = {
  view: "landing",
  dashboardTab: "tests",
  selectedAreaKey: null,
  activeTestId: null,
  tests: {},
  mistakes: [],
  bookmarks: [],
  search: []
};

const elements = {
  landingView: document.querySelector("#landing-view"),
  landingKicker: document.querySelector("#landing-kicker"),
  landingTitle: document.querySelector("#landing-title"),
  trainingCardTitle: document.querySelector("#training-card-title"),
  trainingCardNote: document.querySelector("#training-card-note"),
  examCardTitle: document.querySelector("#exam-card-title"),
  examCardNote: document.querySelector("#exam-card-note"),
  startTraining: document.querySelector("#start-training-button"),
  startExams: document.querySelector("#start-exams-button"),
  brandSubtitle: document.querySelector("#brand-subtitle"),
  sampleBadge: document.querySelector("#sample-badge"),
  language: document.querySelector("#language-select"),
  install: document.querySelector("#install-button"),
  dashboardView: document.querySelector("#dashboard-view"),
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  testsTitle: document.querySelector("#tests-title"),
  backToAreas: document.querySelector("#back-to-areas-button"),
  testGrid: document.querySelector("#test-grid"),
  searchInput: document.querySelector("#search-input"),
  searchButton: document.querySelector("#search-button"),
  searchStatus: document.querySelector("#search-status"),
  backHome: document.querySelector("#back-home-button"),
  progressTitle: document.querySelector("#progress-title"),
  correctLabel: document.querySelector("#correct-label"),
  incorrectLabel: document.querySelector("#incorrect-label"),
  bookmarkLabel: document.querySelector("#bookmark-label"),
  sampleSizeLabel: document.querySelector("#sample-size-label"),
  sampleCount: document.querySelector("#sample-count"),
  miniAreaList: document.querySelector("#mini-area-list"),
  activeTestTitle: document.querySelector("#active-test-title"),
  previewLabel: document.querySelector("#preview-label"),
  category: document.querySelector("#category"),
  topic: document.querySelector("#topic"),
  number: document.querySelector("#question-number"),
  text: document.querySelector("#question-text"),
  questionCopy: document.querySelector("#question-copy"),
  answers: document.querySelector("#answers"),
  image: document.querySelector("#question-image"),
  imageCaption: document.querySelector("#image-caption"),
  media: document.querySelector("#media-wrap"),
  feedback: document.querySelector("#feedback"),
  previous: document.querySelector("#previous-button"),
  next: document.querySelector("#next-button"),
  reset: document.querySelector("#reset-button"),
  bookmark: document.querySelector("#bookmark-button"),
  progressLabel: document.querySelector("#progress-label"),
  progressBar: document.querySelector("#progress-bar"),
  correct: document.querySelector("#correct-count"),
  incorrect: document.querySelector("#incorrect-count"),
  bookmarkCount: document.querySelector("#bookmark-count"),
  resultKicker: document.querySelector("#result-kicker"),
  resultTitle: document.querySelector("#result-title"),
  resultScore: document.querySelector("#result-score"),
  resultMessage: document.querySelector("#result-message"),
  areaResultTitle: document.querySelector("#area-result-title"),
  areaResults: document.querySelector("#area-results"),
  resultHome: document.querySelector("#result-home-button"),
  review: document.querySelector("#review-button"),
  retry: document.querySelector("#retry-button"),
  bottomNav: document.querySelector("#mobile-bottom-nav"),
  bottomHome: document.querySelector("#bottom-home-button"),
  bottomTests: document.querySelector("#bottom-tests-button"),
  bottomAreas: document.querySelector("#bottom-areas-button"),
  bottomSaved: document.querySelector("#bottom-saved-button"),
  bottomHomeLabel: document.querySelector("#bottom-home-label"),
  bottomTestsLabel: document.querySelector("#bottom-tests-label"),
  bottomAreasLabel: document.querySelector("#bottom-areas-label"),
  bottomSavedLabel: document.querySelector("#bottom-saved-label"),
  bottomSavedCount: document.querySelector("#bottom-saved-count")
};

let installPrompt;

function textFor(key, ...args) {
  const value = interfaceText[currentLanguage][key];
  return typeof value === "function" ? value(...args) : value;
}

function appendLanguageContent(element, arabic, swedish) {
  element.replaceChildren();
  if (currentLanguage === "ar") {
    element.textContent = arabic;
    return;
  }
  if (currentLanguage === "sv") {
    element.textContent = swedish;
    return;
  }

  const primary = document.createElement("span");
  primary.className = "bilingual-primary";
  primary.dir = "rtl";
  primary.textContent = arabic;
  const secondary = document.createElement("span");
  secondary.className = "bilingual-secondary";
  secondary.dir = "ltr";
  secondary.textContent = swedish;
  element.append(primary, secondary);
}

function appendMachineTranslatedContent(element, question, arabic, swedish) {
  appendLanguageContent(element, arabic, swedish);
}

function displayedAnswer(question, index) {
  if (currentLanguage === "ar") {
    return question.answersAr[index];
  }
  if (currentLanguage === "sv") return question.answers[index];
  return `${question.answersAr[index]} · ${question.answers[index]}`;
}

function areaLabel(areaKey) {
  const area = officialAreas[areaKey];
  if (currentLanguage === "ar") return area.ar;
  if (currentLanguage === "sv") return area.sv;
  return `${area.ar} · ${area.sv}`;
}

function blankTestState() {
  return { current: 0, responses: {}, bookmarks: [], completed: false, reviewing: false, excludedIds: [], lastScore: 0 };
}

function ensureExamExclusions(test, testState) {
  if (test?.type !== "test") return;
  const valid = Array.isArray(testState.excludedIds)
    && testState.excludedIds.length === 5
    && testState.excludedIds.every((id) => test.questionIds.includes(id));
  if (valid) return;
  const shuffled = [...test.questionIds];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
  }
  testState.excludedIds = shuffled.slice(0, 5);
}

function scoredQuestions(questions, test, testState) {
  if (test?.type !== "test") return questions;
  const excluded = new Set(testState.excludedIds || []);
  return questions.filter((question) => !excluded.has(question.id));
}

function examPassed(score) {
  return score >= 52;
}

function normalizedCollectionIds(ids) {
  return [...new Set(Array.isArray(ids) ? ids : [])]
    .filter((id) => questionById.has(id))
    .sort((left, right) => numericQuestionId(left) - numericQuestionId(right));
}

function collectionTitleKey(collectionKey) {
  if (collectionKey === "mistakes") return "mistakesTitle";
  if (collectionKey === "bookmarks") return "savedTitle";
  return "searchTitle";
}

function collectionIcon(collectionKey) {
  if (collectionKey === "mistakes") return "↻";
  if (collectionKey === "bookmarks") return "★";
  return "🔍";
}

function collectionDefinition(collectionKey) {
  const id = `collection-${collectionKey}`;
  const snapshot = appState.tests[id]?.collectionQuestionIds;
  const useSnapshot = appState.activeTestId === id && appState.view !== "home" && Array.isArray(snapshot);
  const questionIds = normalizedCollectionIds(useSnapshot ? snapshot : appState[collectionKey]);
  const coveredAreas = areaOrder.filter((areaKey) =>
    questionIds.some((id) => questionById.get(id)?.officialArea === areaKey)
  );
  return {
    id,
    type: "collection",
    collectionKey,
    available: questionIds.length > 0,
    preview: true,
    requiredAreas: coveredAreas,
    questionIds
  };
}

function getTestDefinition(testId = appState.activeTestId) {
  if (testId === "collection-mistakes") return collectionDefinition("mistakes");
  if (testId === "collection-bookmarks") return collectionDefinition("bookmarks");
  if (testId === "collection-search") return collectionDefinition("search");
  return activityDefinitions.find((test) => test.id === testId) || null;
}

function getTestState(testId = appState.activeTestId, create = true) {
  if (!appState.tests[testId] && create) appState.tests[testId] = blankTestState();
  return appState.tests[testId] || blankTestState();
}

function activeQuestions() {
  const test = getTestDefinition();
  return test ? questionsForTest(test) : [];
}

function scoreFor(questions, testState) {
  return questions.filter((question) => testState.responses[question.id] === question.correct).length;
}

function answeredFor(questions, testState) {
  return questions.filter((question) => Object.prototype.hasOwnProperty.call(testState.responses, question.id)).length;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    questionSetVersion: QUESTION_SET_VERSION,
    dashboardTab: appState.dashboardTab,
    selectedAreaKey: appState.selectedAreaKey,
    activeTestId: appState.activeTestId,
    tests: appState.tests,
    mistakes: normalizedCollectionIds(appState.mistakes),
    bookmarks: normalizedCollectionIds(appState.bookmarks)
  }));
}

function restoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem("korklar-tests-v6"));
    if (!saved || !saved.tests || typeof saved.tests !== "object" || Array.isArray(saved.tests)) return;
    const legacyBookmarks = Object.values(saved.tests).flatMap((testState) =>
      Array.isArray(testState?.bookmarks) ? testState.bookmarks : []
    );
    const legacyMistakes = Object.values(saved.tests).flatMap((testState) =>
      Object.entries(testState?.responses || {})
        .filter(([id, answer]) => questionById.has(id) && answer !== questionById.get(id).correct)
        .map(([id]) => id)
    );
    appState.bookmarks = normalizedCollectionIds(saved.bookmarks || legacyBookmarks);
    appState.mistakes = normalizedCollectionIds(saved.mistakes || legacyMistakes);
    const sameQuestionSet = saved.questionSetVersion === QUESTION_SET_VERSION;
    appState.tests = sameQuestionSet
      ? saved.tests
      : Object.fromEntries(Object.entries(saved.tests)
        .filter(([id]) => id.startsWith("topic-"))
        .map(([id, state]) => [id, { ...state, current: 0, completed: false, reviewing: false }]));
    if (["areas", "saved"].includes(saved.dashboardTab)) appState.dashboardTab = saved.dashboardTab;
    if (areaOrder.includes(saved.selectedAreaKey)) appState.selectedAreaKey = saved.selectedAreaKey;
    if (saved.dashboardTab === "mistakes") appState.dashboardTab = "areas";
    if (sameQuestionSet && getTestDefinition(saved.activeTestId)) appState.activeTestId = saved.activeTestId;
  } catch (_) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function renderInterfaceText() {
  document.documentElement.lang = currentLanguage === "sv" ? "sv" : "ar";
  document.documentElement.dir = currentLanguage === "sv" ? "ltr" : "rtl";
  elements.language.value = currentLanguage;
  elements.language.setAttribute("aria-label", currentLanguage === "sv" ? "Appens språk" : "لغة التطبيق");
  elements.landingKicker.textContent = textFor("landingKicker");
  elements.landingTitle.textContent = textFor("landingTitle");
  elements.trainingCardTitle.textContent = textFor("trainingCardTitle");
  elements.trainingCardNote.textContent = textFor("trainingCardNote");
  elements.examCardTitle.textContent = textFor("examCardTitle");
  elements.examCardNote.textContent = textFor("examCardNote");
  elements.brandSubtitle.textContent = textFor("brandSubtitle");
  elements.sampleBadge.textContent = textFor("sample");
  elements.install.textContent = textFor("install");
  elements.testsTitle.textContent = textFor("testsTitle");
  elements.backHome.textContent = textFor("backHome");
  elements.progressTitle.textContent = textFor("progress");
  elements.correctLabel.textContent = textFor("correct");
  elements.incorrectLabel.textContent = textFor("incorrect");
  elements.bookmarkLabel.textContent = textFor("saved");
  elements.sampleSizeLabel.textContent = textFor("previewSize");
  elements.reset.textContent = textFor("reset");
  elements.previewLabel.textContent = textFor("activePreview");
  elements.resultKicker.textContent = textFor("resultKicker");
  elements.areaResultTitle.textContent = textFor("areaResultTitle");
  elements.resultHome.textContent = textFor("resultHome");
  elements.review.textContent = textFor("review");
  elements.bottomHomeLabel.textContent = textFor("bottomHome");
  elements.bottomTestsLabel.textContent = textFor("bottomTests");
  elements.bottomAreasLabel.textContent = textFor("bottomAreas");
  elements.bottomSavedLabel.textContent = textFor("bottomSaved");
  elements.searchInput.placeholder = textFor("searchPlaceholder");
  elements.searchInput.setAttribute("aria-label", textFor("searchPlaceholder"));
  elements.searchButton.textContent = textFor("searchButtonLabel");
  elements.bottomNav.setAttribute("aria-label", currentLanguage === "sv" ? "Huvudnavigering" : "التنقل الرئيسي");
}

function activeBottomTab() {
  if (appState.view === "landing") return "home";
  if (appState.view === "home") {
    return ["tests", "areas", "saved"].includes(appState.dashboardTab)
      ? appState.dashboardTab
      : "tests";
  }
  const activeTest = getTestDefinition();
  if (["area", "topic"].includes(activeTest?.type)) return "areas";
  if (activeTest?.collectionKey === "mistakes") return "areas";
  if (activeTest?.collectionKey === "bookmarks") return "saved";
  return "tests";
}

function renderBottomNavigation() {
  const currentTab = activeBottomTab();
  const buttons = {
    home: elements.bottomHome,
    tests: elements.bottomTests,
    areas: elements.bottomAreas,
    saved: elements.bottomSaved
  };
  Object.entries(buttons).forEach(([tab, button]) => {
    button.classList.toggle("active", tab === currentTab);
    if (tab === currentTab) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  elements.bottomSavedCount.textContent = String(normalizedCollectionIds(appState.bookmarks).length);
  elements.bottomSavedCount.dataset.count = String(normalizedCollectionIds(appState.bookmarks).length);
}

function makeAreaPill(areaKey, compact = false) {
  const pill = document.createElement("span");
  pill.className = `area-pill area-${areaKey}${compact ? " compact" : ""}`;
  pill.textContent = areaLabel(areaKey);
  return pill;
}



function renderDashboard() {
  if (appState.dashboardTab === "review") appState.dashboardTab = "tests";

  elements.testGrid.replaceChildren();
  const showingAreas = appState.dashboardTab === "areas";
  const showingTopics = showingAreas && areaOrder.includes(appState.selectedAreaKey);
  const showingReview = appState.dashboardTab === "review";
  const showingMistakes = false;
  const showingSaved = appState.dashboardTab === "saved";
  const showingCollection = showingMistakes || showingSaved;
  const showingTests = !showingAreas && !showingReview && !showingCollection;
  const headingKeys = showingMistakes
    ? ["mistakesKicker", "mistakesTitle", "mistakesNote"]
    : showingSaved
      ? ["savedKicker", "savedTitle", "savedNote"]
      : showingReview
    ? ["reviewKicker", "reviewTitle", "reviewNote"]
    : showingAreas
      ? ["areasKicker", "areasTitle", "areasNote"]
      : ["testsKicker", "testsTitle", "sampleNote"];
  elements.testsTitle.textContent = showingTopics
    ? areaLabel(appState.selectedAreaKey)
    : showingAreas
      ? textFor("areasTab")
      : showingTests
        ? textFor("bottomTests")
        : textFor(headingKeys[1]);
  elements.backToAreas.hidden = !showingTopics;
  elements.backToAreas.textContent = textFor("backToAreas");
  elements.testGrid.classList.toggle("review-grid", showingReview);
  if (showingReview) {
    renderReviewCards();
    return;
  }
  const definitions = showingMistakes
    ? [collectionDefinition("mistakes")]
    : showingSaved
      ? [collectionDefinition("bookmarks")]
      : showingAreas
        ? showingTopics
          ? topicDefinitions.filter((topic) => topic.areaKey === appState.selectedAreaKey)
          : [...trainingDefinitions, collectionDefinition("mistakes")]
        : testDefinitions;
  if (showingCollection && !definitions[0].questionIds.length) {
    const empty = document.createElement("div");
    empty.className = "collection-empty";
    const title = document.createElement("strong");
    title.textContent = textFor(showingMistakes ? "mistakesEmptyTitle" : "savedEmptyTitle");
    const note = document.createElement("span");
    note.textContent = textFor(showingMistakes ? "mistakesEmptyNote" : "savedEmptyNote");
    empty.append(title, note);
    elements.testGrid.append(empty);
    return;
  }
  const areaSymbols = { vehicle: "🚗", environment: "🌿", safety: "🛡", rules: "↔", personal: "👤" };

  definitions.forEach((test) => {
    const questions = questionsForTest(test);
    const testState = getTestState(test.id, false);
    if (test.type === "test" && appState.tests[test.id]) ensureExamExclusions(test, testState);
    const answered = answeredFor(questions, testState);
    const score = scoreFor(scoredQuestions(questions, test, testState), testState);
    const isCompleted = test.type === "test" ? Boolean(testState.completed) : questions.length > 0 && answered === questions.length;
    const card = document.createElement("article");
    card.className = `test-card${test.available ? " available" : " locked"}${isCompleted ? " completed" : ""}${test.type === "area" ? " area-training" : ""}${test.type === "topic" ? " topic-training" : ""}`;

    const top = document.createElement("div");
    top.className = "test-card-top";
    const title = document.createElement("h3");
    title.textContent = test.type === "area"
      ? areaLabel(test.areaKey)
      : test.type === "topic"
        ? topicLabel(test.areaKey, test.topicKey)
      : test.type === "collection"
        ? textFor(collectionTitleKey(test.collectionKey))
        : `Prov ${test.number}`;
    const badge = document.createElement("span");
    badge.className = `test-status-badge ${test.available ? "preview" : "coming"}`;
    badge.textContent = test.type === "area"
      ? textFor("areaPractice")
      : test.type === "topic"
        ? textFor("topicPractice")
      : test.type === "collection"
        ? textFor("collectionPractice")
      : test.available
        ? textFor("preview")
        : textFor("coming");
    top.append(title);
    if (!["area", "topic"].includes(test.type)) top.append(badge);

    const details = document.createElement("div");
    details.className = "test-details";
    const questionCount = document.createElement("span");
    questionCount.textContent = test.type === "area"
      ? textFor("areaQuestions", questions.length)
      : test.type === "topic"
        ? textFor("topicQuestions", questions.length)
      : test.type === "collection"
        ? textFor("collectionQuestions", questions.length)
      : test.available
        ? textFor("previewQuestions", questions.length)
        : textFor("plannedQuestions", test.plannedQuestionCount);
    const coverage = document.createElement("span");
    coverage.textContent = test.type === "area"
      ? `✓ ${areaLabel(test.areaKey)}`
      : test.type === "topic"
        ? `✓ ${areaLabel(test.areaKey)}`
      : test.type === "collection"
        ? test.requiredAreas.map((areaKey) => areaLabel(areaKey)).join(" · ")
        : `✓ ${textFor("allFive")}`;
    details.append(questionCount);
    if (!["area", "topic"].includes(test.type)) details.append(coverage);

    const visual = document.createElement("div");
    if (["area", "topic", "collection"].includes(test.type)) {
      visual.className = ["area", "topic"].includes(test.type) ? `area-card-symbol area-${test.areaKey}` : "area-card-symbol";
      visual.textContent = test.type === "area"
        ? areaSymbols[test.areaKey]
        : test.type === "topic"
          ? test.icon
          : collectionIcon(test.collectionKey);
      visual.setAttribute("aria-hidden", "true");
    } else {
      visual.className = "card-area-dots";
      test.requiredAreas.forEach((areaKey) => {
        const dot = document.createElement("span");
        dot.className = `area-dot area-${areaKey}`;
        dot.title = areaLabel(areaKey);
        visual.append(dot);
      });
    }

    const progressWrap = document.createElement("div");
    progressWrap.className = "card-progress";
    const progressText = document.createElement("span");
    if (!test.available) progressText.textContent = textFor("coming");
    else if (isCompleted) progressText.textContent = textFor("completed", score, scoredQuestions(questions, test, testState).length);
    else if (answered > 0) progressText.textContent = textFor("inProgress", answered, questions.length);
    else progressText.textContent = textFor("notStarted");
    const track = document.createElement("span");
    track.className = "card-progress-track";
    const fill = document.createElement("span");
    fill.style.width = `${questions.length ? (answered / questions.length) * 100 : 0}%`;
    track.append(fill);
    progressWrap.append(progressText, track);

    const button = document.createElement("button");
    button.type = "button";
    button.className = test.available ? "primary-button card-button" : "secondary-button card-button";
    button.disabled = !test.available;
    button.textContent = !test.available
      ? textFor("comingButton")
      : test.type === "area"
        ? textFor("chooseTopics")
      : isCompleted
        ? textFor("showResult")
        : answered > 0
          ? textFor("continue")
          : textFor(test.type === "area" ? "chooseTopics" : test.type === "topic" ? "startTopic" : test.type === "collection" ? "startCollection" : "start");
    if (test.available) button.addEventListener("click", () => {
      if (test.type === "area") {
        appState.selectedAreaKey = test.areaKey;
        saveState();
        renderApp();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      openTest(test.id, isCompleted);
    });

    card.append(top, details, visual, progressWrap, button);
    elements.testGrid.append(card);
  });
}

function renderReviewCards() {
  pendingReviewQuestions.forEach((question) => {
    const decision = reviewDecisions[question.id] || {};
    const reviewedQuestion = reviewedBatchQuestions.find((item) => item.id === question.id);
    const card = document.createElement("article");
    card.className = `review-card${reviewedQuestion ? " reviewed" : ""}`;
    card.id = `review-${question.id}`;

    const heading = document.createElement("div");
    heading.className = "review-card-heading";
    const displayNumber = question.globalNumber || Number(question.id.replace("q", ""));
    const title = document.createElement("h3");
    title.textContent = textFor("reviewQuestion", displayNumber);
    const badge = document.createElement("span");
    badge.className = `test-status-badge ${reviewedQuestion ? "reviewed" : "coming"}`;
    badge.textContent = textFor(reviewedQuestion ? "reviewedAdded" : "needsReview");
    heading.append(title, badge);

    const body = document.createElement("div");
    body.className = "review-card-body";
    const pageFigure = document.createElement("figure");
    pageFigure.className = "review-page";
    const pageLink = document.createElement("a");
    pageLink.href = question.reviewImage;
    pageLink.target = "_blank";
    pageLink.rel = "noreferrer";
    const pageImage = document.createElement("img");
    pageImage.src = pageLink.href;
    pageImage.alt = textFor("reviewQuestion", displayNumber);
    pageImage.loading = "lazy";
    pageLink.append(pageImage);
    const pageCaption = document.createElement("figcaption");
    pageCaption.textContent = textFor("reviewOpenPage");
    pageFigure.append(pageLink, pageCaption);

    const form = document.createElement("div");
    form.className = "review-form";
    const questionText = document.createElement("div");
    questionText.className = "review-question-text";
    appendMachineTranslatedContent(questionText, question, question.textAr, question.textSv);

    const answersField = document.createElement("fieldset");
    answersField.className = "review-answers";
    const answersLegend = document.createElement("legend");
    answersLegend.textContent = textFor("correctAnswerLabel");
    answersField.append(answersLegend);
    const answerInputs = question.answersSv.map((answerSv, index) => {
      const label = document.createElement("label");
      label.className = "review-answer";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `correct-${question.id}`;
      input.value = String(index);
      input.checked = Number(decision.correct) === index;
      const marker = document.createElement("strong");
      marker.textContent = String.fromCharCode(65 + index);
      const answerText = document.createElement("span");
      appendMachineTranslatedContent(answerText, question, question.answersAr[index], answerSv);
      label.append(input, marker, answerText);
      answersField.append(label);
      return input;
    });

    const areaControl = document.createElement("label");
    areaControl.className = "review-control";
    const areaCaption = document.createElement("span");
    areaCaption.textContent = textFor("reviewAreaLabel");
    const areaSelect = document.createElement("select");
    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = textFor("chooseArea");
    areaSelect.append(blankOption);
    areaOrder.forEach((areaKey) => {
      const option = document.createElement("option");
      option.value = areaKey;
      option.textContent = areaLabel(areaKey);
      option.selected = decision.officialArea === areaKey;
      areaSelect.append(option);
    });
    areaControl.append(areaCaption, areaSelect);

    const explanationControl = document.createElement("label");
    explanationControl.className = "review-control";
    const explanationCaption = document.createElement("span");
    explanationCaption.textContent = textFor("reviewExplanationLabel");
    const explanationInput = document.createElement("textarea");
    explanationInput.rows = 3;
    explanationInput.placeholder = textFor("reviewExplanationPlaceholder");
    explanationInput.value = typeof decision.explanationAr === "string" ? decision.explanationAr : "";
    explanationControl.append(explanationCaption, explanationInput);

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "primary-button review-save";
    saveButton.textContent = textFor(reviewedQuestion ? "updateReview" : "saveReview");
    const updateSaveState = () => {
      saveButton.disabled = !areaSelect.value || !answerInputs.some((input) => input.checked);
    };
    areaSelect.addEventListener("change", updateSaveState);
    answerInputs.forEach((input) => input.addEventListener("change", updateSaveState));
    updateSaveState();

    saveButton.addEventListener("click", () => {
      const selectedAnswer = answerInputs.find((input) => input.checked);
      if (!selectedAnswer || !areaSelect.value) return;
      reviewDecisions[question.id] = {
        correct: Number(selectedAnswer.value),
        officialArea: areaSelect.value,
        explanationAr: explanationInput.value.trim()
      };
      localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviewDecisions));
      Object.values(appState.tests).forEach((testState) => {
        if (testState?.responses) delete testState.responses[question.id];
        if (Array.isArray(testState?.bookmarks)) {
          testState.bookmarks = testState.bookmarks.filter((id) => id !== question.id);
        }
      });
      appState.mistakes = appState.mistakes.filter((id) => id !== question.id);
      appState.bookmarks = appState.bookmarks.filter((id) => id !== question.id);
      appState.dashboardTab = "review";
      saveState();
      window.location.reload();
    });

    form.append(questionText, answersField, areaControl, explanationControl, saveButton);
    body.append(pageFigure, form);
    card.append(heading, body);
    elements.testGrid.append(card);
  });
}

function renderMiniAreas(test, questions) {
  elements.miniAreaList.replaceChildren();
  test.requiredAreas.forEach((areaKey) => {
    const row = document.createElement("div");
    const label = makeAreaPill(areaKey, true);
    const count = document.createElement("strong");
    count.textContent = questions.filter((question) => question.officialArea === areaKey).length;
    row.append(label, count);
    elements.miniAreaList.append(row);
  });
}

function renderQuiz() {
  const test = getTestDefinition();
  const questions = activeQuestions();
  if (!test || !test.available || !questions.length) {
    appState.view = "home";
    renderApp();
    return;
  }

  const testState = getTestState();
  testState.current = Math.min(Math.max(testState.current || 0, 0), questions.length - 1);
  const question = questions[testState.current];
  const response = Object.prototype.hasOwnProperty.call(testState.responses, question.id)
    ? testState.responses[question.id]
    : null;

  const isAreaTraining = test.type === "area";
  const isTopicTraining = test.type === "topic";
  const isCollectionTraining = test.type === "collection";
  const isExam = test.type === "test";
  const revealAnswer = !isExam || testState.reviewing;
  elements.quizView.classList.toggle("exam-mode", isExam && !testState.reviewing);
  const collectionTitle = isCollectionTraining
    ? textFor(collectionTitleKey(test.collectionKey))
    : "";
  elements.activeTestTitle.textContent = isAreaTraining
    ? areaLabel(test.areaKey)
    : isTopicTraining
      ? topicLabel(test.areaKey, test.topicKey)
    : isCollectionTraining
      ? collectionTitle
      : `Prov ${test.number}`;
  elements.backHome.textContent = textFor(isTopicTraining ? "backToTopics" : isAreaTraining ? "backAreas" : isCollectionTraining ? "backCollection" : "backHome");
  elements.previewLabel.textContent = textFor(isTopicTraining ? "topicPractice" : isAreaTraining ? "areaPractice" : isCollectionTraining ? "activeCollection" : "activePreview");
  elements.sampleCount.textContent = questions.length;
  elements.sampleSizeLabel.textContent = textFor(isTopicTraining ? "topicSize" : isAreaTraining ? "areaSize" : isCollectionTraining ? "collectionSize" : "previewSize");
  elements.category.textContent = areaLabel(question.officialArea);
  elements.category.className = `category-pill area-${question.officialArea}`;
  elements.topic.textContent = isTopicTraining
    ? topicLabel(test.areaKey, test.topicKey)
    : currentLanguage === "sv"
      ? question.topicSv
      : currentLanguage === "ar"
        ? question.topicAr
        : `${question.topicAr} · ${question.topicSv}`;
  elements.number.textContent = textFor("question", testState.current + 1, questions.length);
  elements.questionCopy.dir = currentLanguage === "sv" ? "ltr" : "rtl";
  appendMachineTranslatedContent(elements.text, question, question.textAr, question.text);
  elements.answers.replaceChildren();

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", response === index ? "true" : "false");
    const dot = document.createElement("span");
    dot.className = "answer-dot";
    dot.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    appendMachineTranslatedContent(label, question, question.answersAr[index], answer);
    button.append(dot, label);

    if (response === index) button.classList.add("selected");

    if (response !== null && revealAnswer) {
      button.disabled = true;
      if (index === question.correct) button.classList.add("correct");
      if (index === response && response !== question.correct) button.classList.add("wrong");
    }

    button.addEventListener("click", () => answerQuestion(index));
    elements.answers.append(button);
  });

  if (question.image) {
    elements.image.src = question.image;
    elements.image.alt = currentLanguage === "sv" ? question.imageAlt : (question.imageAltAr || question.imageAlt);
    elements.imageCaption.textContent = currentLanguage === "sv" ? "" : (question.imageCaptionAr || "");
    elements.media.hidden = false;
  } else {
    elements.media.hidden = true;
    elements.image.removeAttribute("src");
    elements.imageCaption.textContent = "";
  }

  if (response === null || !revealAnswer) {
    elements.feedback.hidden = true;
  } else {
    const isCorrect = response === question.correct;
    elements.feedback.hidden = false;
    elements.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    elements.feedback.dir = currentLanguage === "sv" ? "ltr" : "rtl";
    elements.feedback.replaceChildren();
    const result = document.createElement("strong");
    result.textContent = isCorrect
      ? textFor("correctResult")
      : textFor("wrongResult", displayedAnswer(question, question.correct));
    const explanation = document.createElement("div");
    if (currentLanguage === "ar" && question.answerReasonsAr?.length === question.answers.length) {
      explanation.className = "answer-explanations";
      if (question.contentNoteAr) {
        result.textContent = "تنبيه: هذا السؤال يحتاج إلى تحديث";
        const note = document.createElement("p");
        note.className = "content-note";
        note.textContent = question.contentNoteAr;
        explanation.append(note);
      }
      const correctReason = document.createElement("section");
      correctReason.className = "answer-reason correct-reason";
      const heading = document.createElement("h3");
      heading.textContent = question.contentNoteAr ? "توضيح الإجابة المسجّلة" : "لماذا هذه الإجابة صحيحة؟";
      const answer = document.createElement("strong");
      answer.textContent = displayedAnswer(question, question.correct);
      const reason = document.createElement("p");
      reason.textContent = question.answerReasonsAr[question.correct];
      correctReason.append(heading, answer, reason);
      explanation.append(correctReason);


    } else {
      const paragraph = document.createElement("p");
      appendMachineTranslatedContent(paragraph, question, question.explanation, question.explanationSv);
      explanation.append(paragraph);
    }
    elements.feedback.append(result, explanation);
  }

  elements.previous.disabled = testState.current === 0;
  elements.previous.textContent = textFor("previous");
  elements.next.textContent = testState.current === questions.length - 1 ? textFor("result") : textFor("next");
  const isBookmarked = appState.bookmarks.includes(question.id);
  elements.bookmark.classList.toggle("active", isBookmarked);
  elements.bookmark.setAttribute("aria-pressed", isBookmarked ? "true" : "false");
  elements.bookmark.textContent = isBookmarked ? textFor("savedButton") : textFor("save");

  const answered = answeredFor(questions, testState);
  const correct = scoreFor(questions, testState);
  elements.progressLabel.textContent = `${testState.current + 1} / ${questions.length}`;
  elements.progressBar.style.width = `${((testState.current + 1) / questions.length) * 100}%`;
  elements.correct.textContent = correct;
  elements.incorrect.textContent = answered - correct;
  elements.bookmarkCount.textContent = appState.bookmarks.length;
  renderMiniAreas(test, questions);
}

function renderResult() {
  const test = getTestDefinition();
  const questions = activeQuestions();
  if (!test || !questions.length) {
    appState.view = "home";
    renderApp();
    return;
  }
  const testState = getTestState();
  const answered = answeredFor(questions, testState);
  const gradedQuestions = scoredQuestions(questions, test, testState);
  const score = scoreFor(gradedQuestions, testState);
  const isAreaTraining = test.type === "area";
  const isTopicTraining = test.type === "topic";
  const isCollectionTraining = test.type === "collection";
  const collectionTitle = isCollectionTraining
    ? textFor(collectionTitleKey(test.collectionKey))
    : "";
  elements.resultKicker.textContent = textFor(isAreaTraining || isTopicTraining
    ? "resultAreaKicker"
    : isCollectionTraining
      ? "resultCollectionKicker"
      : "resultKicker");
  elements.resultTitle.textContent = isAreaTraining
    ? textFor("resultAreaTitle", areaLabel(test.areaKey))
    : isTopicTraining
      ? textFor("resultAreaTitle", topicLabel(test.areaKey, test.topicKey))
    : isCollectionTraining
      ? textFor("resultCollectionTitle", collectionTitle)
      : textFor("resultTitle", test.number);
  elements.resultScore.textContent = `${score} / ${gradedQuestions.length}`;
  elements.resultMessage.textContent = test.type === "test"
    ? `${textFor(examPassed(score) ? "passed" : "failed")} · ${textFor("resultMessage", answered, questions.length)}`
    : textFor("resultMessage", answered, questions.length);
  elements.retry.textContent = isAreaTraining || isTopicTraining
    ? textFor("retryArea")
    : isCollectionTraining
      ? textFor("retryCollection")
      : textFor("retry", test.number);
  elements.areaResults.replaceChildren();

  test.requiredAreas.forEach((areaKey) => {
    const areaQuestions = gradedQuestions.filter((question) => question.officialArea === areaKey);
    const areaScore = scoreFor(areaQuestions, testState);
    const row = document.createElement("div");
    row.className = "area-result-row";
    const heading = document.createElement("div");
    heading.append(makeAreaPill(areaKey, true));
    const scoreText = document.createElement("strong");
    scoreText.textContent = `${areaScore} / ${areaQuestions.length}`;
    heading.append(scoreText);
    const track = document.createElement("span");
    track.className = "area-result-track";
    const fill = document.createElement("span");
    fill.className = `area-${areaKey}`;
    fill.style.width = `${areaQuestions.length ? (areaScore / areaQuestions.length) * 100 : 0}%`;
    track.append(fill);
    row.append(heading, track);
    elements.areaResults.append(row);
  });
}

function renderApp() {
  renderInterfaceText();
  renderBottomNavigation();
  elements.landingView.hidden = appState.view !== "landing";
  elements.dashboardView.hidden = appState.view !== "home";
  elements.quizView.hidden = appState.view !== "quiz";
  elements.resultView.hidden = appState.view !== "result";
  if (appState.view === "quiz") renderQuiz();
  else if (appState.view === "result") renderResult();
  else renderDashboard();
}

function openTest(testId, showSavedResult = false) {
  const test = getTestDefinition(testId);
  if (!test?.available || !coversEveryArea(test)) return;
  appState.activeTestId = testId;
  const testState = getTestState(testId);
  ensureExamExclusions(test, testState);
  testState.reviewing = false;
  if (test.type === "collection") {
    testState.collectionQuestionIds = [...test.questionIds];
    if (!showSavedResult && testState.completed) {
      testState.completed = false;
      const firstUnanswered = test.questionIds.findIndex((id) =>
        !Object.prototype.hasOwnProperty.call(testState.responses, id)
      );
      testState.current = Math.max(firstUnanswered, 0);
    }
  }
  appState.view = showSavedResult ? "result" : "quiz";
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function answerQuestion(index) {
  if (appState.view !== "quiz") return;
  const questions = activeQuestions();
  const testState = getTestState();
  const question = questions[testState.current];
  const test = getTestDefinition();
  if (testState.reviewing || testState.completed) return;
  if (test.type !== "test" && Object.prototype.hasOwnProperty.call(testState.responses, question.id)) return;
  testState.responses[question.id] = index;
  if (test.type !== "test" && index === question.correct) {
    appState.mistakes = appState.mistakes.filter((id) => id !== question.id);
  } else if (test.type !== "test" && !appState.mistakes.includes(question.id)) {
    appState.mistakes.push(question.id);
  }
  saveState();
  renderQuiz();
}

function finishTest() {
  const questions = activeQuestions();
  const testState = getTestState();
  const answered = answeredFor(questions, testState);
  if (answered < questions.length) {
    testState.current = questions.findIndex((question) => !Object.prototype.hasOwnProperty.call(testState.responses, question.id));
    saveState();
    renderQuiz();
    return;
  }
  const test = getTestDefinition();
  const gradedQuestions = scoredQuestions(questions, test, testState);
  testState.lastScore = scoreFor(gradedQuestions, testState);
  testState.completed = true;
  testState.reviewing = false;
  if (test.type === "test") {
    questions.forEach((question) => {
      if (testState.responses[question.id] === question.correct) appState.mistakes = appState.mistakes.filter((id) => id !== question.id);
      else if (!appState.mistakes.includes(question.id)) appState.mistakes.push(question.id);
    });
  }
  appState.view = "result";
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetActiveTest() {
  if (!appState.activeTestId) return;
  appState.tests[appState.activeTestId] = blankTestState();
  ensureExamExclusions(getTestDefinition(), appState.tests[appState.activeTestId]);
  appState.view = "quiz";
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

elements.previous.addEventListener("click", () => {
  const testState = getTestState();
  if (testState.current > 0) {
    testState.current -= 1;
    saveState();
    renderQuiz();
  }
});

elements.next.addEventListener("click", () => {
  const questions = activeQuestions();
  const testState = getTestState();
  if (testState.current < questions.length - 1) {
    testState.current += 1;
    saveState();
    renderQuiz();
    return;
  }
  finishTest();
});

elements.reset.addEventListener("click", resetActiveTest);

elements.bookmark.addEventListener("click", () => {
  const questions = activeQuestions();
  const testState = getTestState();
  const id = questions[testState.current].id;
  appState.bookmarks = appState.bookmarks.includes(id)
    ? appState.bookmarks.filter((savedId) => savedId !== id)
    : [...appState.bookmarks, id];
  saveState();
  renderQuiz();
});

elements.backHome.addEventListener("click", () => {
  appState.view = "home";
  saveState();
  renderApp();
});

elements.backToAreas.addEventListener("click", () => {
  appState.selectedAreaKey = null;
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.resultHome.addEventListener("click", () => {
  appState.view = "landing";
  saveState();
  renderApp();
});

function normalizeSearchText(value) {
  return String(value || "")
    .toLocaleLowerCase()
    .normalize("NFKC")
    .replace(/[ً-ْ]/g, "")
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");
}

function performSearch() {
  if (!elements.searchInput) return;
  const rawQuery = elements.searchInput.value.trim();
  if (elements.searchStatus) elements.searchStatus.hidden = true;
  if (!rawQuery) return;
  const query = normalizeSearchText(rawQuery);
  const exactQuestionNumber = /^q?0*(\d+)$/i.exec(rawQuery);
  const matches = allQuestions.filter((question) => {
    if (exactQuestionNumber) return numericQuestionId(question.id) === Number(exactQuestionNumber[1]);
    const haystack = normalizeSearchText([
      question.text,
      question.textAr,
      ...(Array.isArray(question.answers) ? question.answers : []),
      ...(Array.isArray(question.answersAr) ? question.answersAr : [])
    ].join(" "));
    return haystack.includes(query);
  });
  appState.search = matches.map((question) => question.id);
  if (!matches.length) {
    if (elements.searchStatus) {
      elements.searchStatus.hidden = false;
      elements.searchStatus.textContent = textFor("searchNoResults");
    }
    return;
  }
  appState.tests["collection-search"] = blankTestState();
  openTest("collection-search");
}

elements.searchButton?.addEventListener("click", performSearch);
elements.searchInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  performSearch();
});

elements.review.addEventListener("click", () => {
  getTestState().current = 0;
  getTestState().reviewing = true;
  appState.view = "quiz";
  saveState();
  renderApp();
});

elements.retry.addEventListener("click", resetActiveTest);

elements.startTraining.addEventListener("click", () => {
  appState.view = "home";
  appState.dashboardTab = "areas";
  appState.selectedAreaKey = null;
  saveState();
  renderApp();
});

elements.startExams.addEventListener("click", () => {
  appState.view = "home";
  appState.dashboardTab = "tests";
  saveState();
  renderApp();
});

function openBottomTab(tab) {
  appState.view = tab === "home" ? "landing" : "home";
  if (tab === "home") {
    saveState();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  appState.dashboardTab = tab;
  if (tab === "areas") appState.selectedAreaKey = null;
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

elements.bottomHome.addEventListener("click", () => openBottomTab("home"));
elements.bottomTests.addEventListener("click", () => openBottomTab("tests"));
elements.bottomAreas.addEventListener("click", () => openBottomTab("areas"));
elements.bottomSaved.addEventListener("click", () => openBottomTab("saved"));

elements.language.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem("korklar-language", currentLanguage);
  renderApp();
});

document.addEventListener("keydown", (event) => {
  if (appState.view !== "quiz") return;
  const questions = activeQuestions();
  const testState = getTestState();
  if (/^[1-4]$/.test(event.key)) {
    const answerIndex = Number(event.key) - 1;
    if (answerIndex < questions[testState.current].answers.length) answerQuestion(answerIndex);
  }
  if (event.key === "ArrowLeft") elements.next.click();
  if (event.key === "ArrowRight") elements.previous.click();
});

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;

  void Promise.resolve(context.registerTool({
    name: "get_driving_quiz_state",
    title: "Read driving-test app state",
    description: "Read the dashboard or current sample test state without changing it.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      if (appState.view !== "quiz") return { view: appState.view, testCount: testDefinitions.length };
      const questions = activeQuestions();
      const testState = getTestState();
      return {
        view: appState.view,
        testId: appState.activeTestId,
        questionNumber: testState.current + 1,
        questionCount: questions.length,
        question: currentLanguage === "sv" ? questions[testState.current].text : questions[testState.current].textAr,
        answered: answeredFor(questions, testState),
        correct: scoreFor(questions, testState)
      };
    }
  })).catch(() => {});

  void Promise.resolve(context.registerTool({
    name: "answer_current_driving_question",
    title: "Answer current driving question",
    description: "Choose an answer for the visible driving-theory question using a zero-based answer index.",
    inputSchema: {
      type: "object",
      properties: { answerIndex: { type: "integer", minimum: 0, maximum: 3 } },
      required: ["answerIndex"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (appState.view !== "quiz") throw new Error("Open an available test first");
      const questions = activeQuestions();
      const testState = getTestState();
      const question = questions[testState.current];
      if (!Number.isInteger(input?.answerIndex)) throw new Error("answerIndex must be an integer");
      if (input.answerIndex < 0 || input.answerIndex >= question.answers.length) throw new Error("answerIndex is outside the available answers");
      if (Object.prototype.hasOwnProperty.call(testState.responses, question.id)) throw new Error("The current question has already been answered");
      answerQuestion(input.answerIndex);
      return { questionNumber: testState.current + 1, selectedAnswer: input.answerIndex, correct: input.answerIndex === question.correct };
    }
  })).catch(() => {});
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  elements.install.hidden = false;
  elements.install.addEventListener("click", async () => {
    await installPrompt.prompt();
    installPrompt = undefined;
    elements.install.hidden = true;
  }, { once: true });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

restoreState();
renderApp();
registerWebMcpTools();
