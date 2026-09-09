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
    explanationSv: `Rätt svar är ”${question.answersSv[correct]}”. ${batchReasonSvByArea[officialArea]}`,
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
const allQuestions = [
  ...builtInQuestions.filter((question) => !allImportedQuestionIds.has(question.id)),
  ...verifiedPdfQuestions,
  ...reviewedBatchQuestions
];

const officialAreas = {
  vehicle: { ar: "معرفة المركبة والتحكم بها", sv: "Fordonskännedom och manövrering" },
  environment: { ar: "البيئة", sv: "Miljö" },
  safety: { ar: "السلامة المرورية", sv: "Trafiksäkerhet" },
  rules: { ar: "قواعد المرور", sv: "Trafikregler" },
  personal: { ar: "الظروف الشخصية", sv: "Personliga förutsättningar" }
};

const areaOrder = ["vehicle", "environment", "safety", "rules", "personal"];
const trainingQuestionIds = [
  ...verifiedPdfQuestions.map((question) => question.id),
  ...reviewedBatchQuestions.map((question) => question.id)
];
const questionById = new Map(allQuestions.map((question) => [question.id, question]));

function numericQuestionId(id) {
  return Number(id.replace(/\D/g, "")) || 0;
}

function buildMixedTests(questionIds, testCount = 18, questionsPerTest = 70) {
  if (questionIds.length !== testCount * questionsPerTest) {
    throw new Error(`Expected ${testCount * questionsPerTest} unique questions, found ${questionIds.length}`);
  }
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
  if (uniqueIds.size !== questionIds.length || testBuckets.some((bucket) => bucket.length !== questionsPerTest)) {
    throw new Error("Prov distribution must contain every question exactly once");
  }

  return testBuckets;
}

const mixedTestQuestionIds = buildMixedTests(trainingQuestionIds);

const testDefinitions = Array.from({ length: 18 }, (_, index) => ({
  id: `prov-${index + 1}`,
  type: "test",
  number: index + 1,
  available: true,
  preview: false,
  plannedQuestionCount: 70,
  requiredAreas: [...areaOrder],
  questionIds: mixedTestQuestionIds[index]
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

const activityDefinitions = [...testDefinitions, ...trainingDefinitions];

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
    brandSubtitle: "تدريب القيادة السويدية",
    sample: "1260 سؤالًا",
    install: "تثبيت التطبيق",
    dashboardEyebrow: "خطة التدريب",
    dashboardTitle: "اختبارات رخصة القيادة B",
    dashboardDescription: "18 اختبارًا متاحًا، وفي كل اختبار 70 سؤالًا مختلطًا من المجالات الخمسة.",
    testsLabel: "اختبارًا",
    questionsLabel: "سؤالًا لكل اختبار",
    areasLabel: "مجالات في كل اختبار",
    coverageKicker: "Träningsområde",
    coverageTitle: "كل اختبار يمزج المجالات الرسمية الخمسة",
    testsKicker: "اختر الاختبار",
    testsTitle: "Prov 1–18",
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
    bottomTests: "الاختبارات",
    bottomAreas: "المجالات",
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
    retryCollection: "إعادة التدريب"
  },
  sv: {
    brandSubtitle: "Svensk körkortsträning",
    sample: "1260 frågor",
    install: "Installera",
    dashboardEyebrow: "Träningsplan",
    dashboardTitle: "Kunskapsprov för B-körkort",
    dashboardDescription: "18 tillgängliga prov med 70 blandade frågor från de fem områdena i varje prov.",
    testsLabel: "prov",
    questionsLabel: "frågor per prov",
    areasLabel: "områden i varje prov",
    coverageKicker: "Träningsområde",
    coverageTitle: "Varje prov blandar de fem officiella områdena",
    testsKicker: "Välj prov",
    testsTitle: "Prov 1–18",
    sampleNote: "Alla prov är tillgängliga. Varje prov innehåller 70 frågor och täcker alla fem Träningsområden.",
    testsTab: "Prov 1–18",
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
    bottomTests: "Prov",
    bottomAreas: "Områden",
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
    retryCollection: "Träna igen"
  },
  both: {
    brandSubtitle: "تدريب القيادة · Svensk körkortsträning",
    sample: "1260 سؤالًا · frågor",
    install: "تثبيت · Installera",
    dashboardEyebrow: "خطة التدريب · Träningsplan",
    dashboardTitle: "اختبارات رخصة B · Kunskapsprov B",
    dashboardDescription: "18 اختبارًا، وفي كل اختبار 70 سؤالًا مختلطًا من المجالات الخمسة · 18 prov med 70 blandade frågor från alla fem områden.",
    testsLabel: "اختبارًا · prov",
    questionsLabel: "سؤالًا لكل اختبار · frågor per prov",
    areasLabel: "5 مجالات · 5 områden",
    coverageKicker: "Träningsområde",
    coverageTitle: "جميع المجالات في كل اختبار · Alla områden i varje prov",
    testsKicker: "اختر الاختبار · Välj prov",
    testsTitle: "Prov 1–18",
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
    bottomTests: "الاختبارات · Prov",
    bottomAreas: "المجالات · Områden",
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
    retryCollection: "إعادة التدريب · Träna igen"
  }
};

const STORAGE_KEY = "korklar-tests-v7";
let currentLanguage = localStorage.getItem("korklar-language") || "ar";
if (!interfaceText[currentLanguage]) currentLanguage = "ar";

const appState = {
  view: "home",
  dashboardTab: "tests",
  activeTestId: null,
  tests: {},
  mistakes: [],
  bookmarks: []
};

const elements = {
  brandSubtitle: document.querySelector("#brand-subtitle"),
  sampleBadge: document.querySelector("#sample-badge"),
  language: document.querySelector("#language-select"),
  install: document.querySelector("#install-button"),
  dashboardView: document.querySelector("#dashboard-view"),
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  dashboardEyebrow: document.querySelector("#dashboard-eyebrow"),
  dashboardTitle: document.querySelector("#dashboard-title"),
  dashboardDescription: document.querySelector("#dashboard-description"),
  testsLabel: document.querySelector("#tests-label"),
  questionsLabel: document.querySelector("#questions-label"),
  areasLabel: document.querySelector("#areas-label"),
  coverageKicker: document.querySelector("#coverage-kicker"),
  coverageTitle: document.querySelector("#coverage-title"),
  testsKicker: document.querySelector("#tests-kicker"),
  testsTitle: document.querySelector("#tests-title"),
  sampleNote: document.querySelector("#sample-note"),
  testsTab: document.querySelector("#tests-tab-button"),
  areasTab: document.querySelector("#areas-tab-button"),
  reviewTab: document.querySelector("#review-tab-button"),
  batchStatus: document.querySelector("#batch-status"),
  areaLegend: document.querySelector("#area-legend"),
  testGrid: document.querySelector("#test-grid"),
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
  bottomTests: document.querySelector("#bottom-tests-button"),
  bottomAreas: document.querySelector("#bottom-areas-button"),
  bottomMistakes: document.querySelector("#bottom-mistakes-button"),
  bottomSaved: document.querySelector("#bottom-saved-button"),
  bottomTestsLabel: document.querySelector("#bottom-tests-label"),
  bottomAreasLabel: document.querySelector("#bottom-areas-label"),
  bottomMistakesLabel: document.querySelector("#bottom-mistakes-label"),
  bottomSavedLabel: document.querySelector("#bottom-saved-label"),
  bottomMistakesCount: document.querySelector("#bottom-mistakes-count"),
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
  return { current: 0, responses: {}, bookmarks: [], completed: false, lastScore: 0 };
}

function normalizedCollectionIds(ids) {
  return [...new Set(Array.isArray(ids) ? ids : [])]
    .filter((id) => questionById.has(id))
    .sort((left, right) => numericQuestionId(left) - numericQuestionId(right));
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
    dashboardTab: appState.dashboardTab,
    activeTestId: appState.activeTestId,
    tests: appState.tests,
    mistakes: normalizedCollectionIds(appState.mistakes),
    bookmarks: normalizedCollectionIds(appState.bookmarks)
  }));
}

function restoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem("korklar-tests-v6"));
    if (!saved || typeof saved.tests !== "object" || Array.isArray(saved.tests)) return;
    appState.tests = saved.tests;
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
    if (["areas", "review", "mistakes", "saved"].includes(saved.dashboardTab)) appState.dashboardTab = saved.dashboardTab;
    if (getTestDefinition(saved.activeTestId)) appState.activeTestId = saved.activeTestId;
  } catch (_) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function renderInterfaceText() {
  document.documentElement.lang = currentLanguage === "sv" ? "sv" : "ar";
  document.documentElement.dir = currentLanguage === "sv" ? "ltr" : "rtl";
  elements.language.value = currentLanguage;
  elements.language.setAttribute("aria-label", currentLanguage === "sv" ? "Appens språk" : "لغة التطبيق");
  elements.brandSubtitle.textContent = textFor("brandSubtitle");
  elements.sampleBadge.textContent = textFor("sample");
  elements.install.textContent = textFor("install");
  elements.dashboardEyebrow.textContent = textFor("dashboardEyebrow");
  elements.dashboardTitle.textContent = textFor("dashboardTitle");
  elements.dashboardDescription.textContent = textFor("dashboardDescription");
  elements.testsLabel.textContent = textFor("testsLabel");
  elements.questionsLabel.textContent = textFor("questionsLabel");
  elements.areasLabel.textContent = textFor("areasLabel");
  elements.coverageKicker.textContent = textFor("coverageKicker");
  elements.coverageTitle.textContent = textFor("coverageTitle");
  elements.testsKicker.textContent = textFor("testsKicker");
  elements.testsTitle.textContent = textFor("testsTitle");
  elements.sampleNote.textContent = textFor("sampleNote");
  elements.testsTab.textContent = textFor("testsTab");
  elements.areasTab.textContent = textFor("areasTab");
  elements.reviewTab.textContent = textFor("reviewTab", pendingReviewQuestions.length);
  elements.batchStatus.textContent = textFor("batchStatus", trainingQuestionIds.length, pendingReviewQuestions.length - reviewedBatchQuestions.length);
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
  elements.bottomTestsLabel.textContent = textFor("bottomTests");
  elements.bottomAreasLabel.textContent = textFor("bottomAreas");
  elements.bottomMistakesLabel.textContent = textFor("bottomMistakes");
  elements.bottomSavedLabel.textContent = textFor("bottomSaved");
  elements.bottomNav.setAttribute("aria-label", currentLanguage === "sv" ? "Huvudnavigering" : "التنقل الرئيسي");
}

function activeBottomTab() {
  if (appState.view === "home") {
    return ["tests", "areas", "mistakes", "saved"].includes(appState.dashboardTab)
      ? appState.dashboardTab
      : "tests";
  }
  const activeTest = getTestDefinition();
  if (activeTest?.type === "area") return "areas";
  if (activeTest?.collectionKey === "mistakes") return "mistakes";
  if (activeTest?.collectionKey === "bookmarks") return "saved";
  return "tests";
}

function renderBottomNavigation() {
  const currentTab = activeBottomTab();
  const buttons = {
    tests: elements.bottomTests,
    areas: elements.bottomAreas,
    mistakes: elements.bottomMistakes,
    saved: elements.bottomSaved
  };
  Object.entries(buttons).forEach(([tab, button]) => {
    button.classList.toggle("active", tab === currentTab);
    if (tab === currentTab) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  elements.bottomMistakesCount.textContent = String(normalizedCollectionIds(appState.mistakes).length);
  elements.bottomMistakesCount.dataset.count = String(normalizedCollectionIds(appState.mistakes).length);
  elements.bottomSavedCount.textContent = String(normalizedCollectionIds(appState.bookmarks).length);
  elements.bottomSavedCount.dataset.count = String(normalizedCollectionIds(appState.bookmarks).length);
}

function makeAreaPill(areaKey, compact = false) {
  const pill = document.createElement("span");
  pill.className = `area-pill area-${areaKey}${compact ? " compact" : ""}`;
  pill.textContent = areaLabel(areaKey);
  return pill;
}

function renderAreaLegend() {
  elements.areaLegend.replaceChildren(...areaOrder.map((areaKey) => makeAreaPill(areaKey)));
}

function renderDashboard() {
  renderAreaLegend();
  elements.testGrid.replaceChildren();
  const showingAreas = appState.dashboardTab === "areas";
  const showingReview = appState.dashboardTab === "review";
  const showingMistakes = appState.dashboardTab === "mistakes";
  const showingSaved = appState.dashboardTab === "saved";
  const showingCollection = showingMistakes || showingSaved;
  const showingTests = !showingAreas && !showingReview && !showingCollection;
  elements.testsTab.classList.toggle("active", showingTests);
  elements.areasTab.classList.toggle("active", showingAreas);
  elements.reviewTab.classList.toggle("active", showingReview);
  elements.testsTab.setAttribute("aria-pressed", showingTests ? "true" : "false");
  elements.areasTab.setAttribute("aria-pressed", showingAreas ? "true" : "false");
  elements.reviewTab.setAttribute("aria-pressed", showingReview ? "true" : "false");
  elements.batchStatus.hidden = showingTests || showingCollection;
  elements.batchStatus.textContent = showingReview
    ? textFor("reviewStatus", reviewedBatchQuestions.length, pendingReviewQuestions.length)
    : textFor("batchStatus", trainingQuestionIds.length, pendingReviewQuestions.length - reviewedBatchQuestions.length);
  const headingKeys = showingMistakes
    ? ["mistakesKicker", "mistakesTitle", "mistakesNote"]
    : showingSaved
      ? ["savedKicker", "savedTitle", "savedNote"]
      : showingReview
    ? ["reviewKicker", "reviewTitle", "reviewNote"]
    : showingAreas
      ? ["areasKicker", "areasTitle", "areasNote"]
      : ["testsKicker", "testsTitle", "sampleNote"];
  elements.testsKicker.textContent = textFor(headingKeys[0]);
  elements.testsTitle.textContent = textFor(headingKeys[1]);
  elements.sampleNote.textContent = textFor(headingKeys[2]);
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
        ? trainingDefinitions
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
    const answered = answeredFor(questions, testState);
    const score = scoreFor(questions, testState);
    const isCompleted = questions.length > 0 && answered === questions.length;
    const card = document.createElement("article");
    card.className = `test-card${test.available ? " available" : " locked"}${isCompleted ? " completed" : ""}${test.type === "area" ? " area-training" : ""}`;

    const top = document.createElement("div");
    top.className = "test-card-top";
    const title = document.createElement("h3");
    title.textContent = test.type === "area"
      ? areaLabel(test.areaKey)
      : test.type === "collection"
        ? textFor(test.collectionKey === "mistakes" ? "mistakesTitle" : "savedTitle")
        : `Prov ${test.number}`;
    const badge = document.createElement("span");
    badge.className = `test-status-badge ${test.available ? "preview" : "coming"}`;
    badge.textContent = test.type === "area"
      ? textFor("areaPractice")
      : test.type === "collection"
        ? textFor("collectionPractice")
      : test.available
        ? textFor("preview")
        : textFor("coming");
    top.append(title, badge);

    const details = document.createElement("div");
    details.className = "test-details";
    const questionCount = document.createElement("span");
    questionCount.textContent = test.type === "area"
      ? textFor("areaQuestions", questions.length)
      : test.type === "collection"
        ? textFor("collectionQuestions", questions.length)
      : test.available
        ? textFor("previewQuestions", questions.length)
        : textFor("plannedQuestions", test.plannedQuestionCount);
    const coverage = document.createElement("span");
    coverage.textContent = test.type === "area"
      ? `✓ ${areaLabel(test.areaKey)}`
      : test.type === "collection"
        ? test.requiredAreas.map((areaKey) => areaLabel(areaKey)).join(" · ")
        : `✓ ${textFor("allFive")}`;
    details.append(questionCount, coverage);

    const visual = document.createElement("div");
    if (test.type === "area" || test.type === "collection") {
      visual.className = test.type === "area" ? `area-card-symbol area-${test.areaKey}` : "area-card-symbol";
      visual.textContent = test.type === "area" ? areaSymbols[test.areaKey] : (test.collectionKey === "mistakes" ? "↻" : "★");
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
    else if (isCompleted) progressText.textContent = textFor("completed", score, questions.length);
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
      : isCompleted
        ? textFor("showResult")
        : answered > 0
          ? textFor("continue")
          : textFor(test.type === "area" ? "startArea" : test.type === "collection" ? "startCollection" : "start");
    if (test.available) button.addEventListener("click", () => openTest(test.id, isCompleted));

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
  const isCollectionTraining = test.type === "collection";
  const collectionTitle = isCollectionTraining
    ? textFor(test.collectionKey === "mistakes" ? "mistakesTitle" : "savedTitle")
    : "";
  elements.activeTestTitle.textContent = isAreaTraining
    ? areaLabel(test.areaKey)
    : isCollectionTraining
      ? collectionTitle
      : `Prov ${test.number}`;
  elements.backHome.textContent = textFor(isAreaTraining ? "backAreas" : isCollectionTraining ? "backCollection" : "backHome");
  elements.previewLabel.textContent = textFor(isAreaTraining ? "areaPractice" : isCollectionTraining ? "activeCollection" : "activePreview");
  elements.sampleCount.textContent = questions.length;
  elements.sampleSizeLabel.textContent = textFor(isAreaTraining ? "areaSize" : isCollectionTraining ? "collectionSize" : "previewSize");
  elements.category.textContent = areaLabel(question.officialArea);
  elements.category.className = `category-pill area-${question.officialArea}`;
  elements.topic.textContent = currentLanguage === "sv"
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

    if (response !== null) {
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

  if (response === null) {
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
    const explanation = document.createElement("p");
    appendMachineTranslatedContent(explanation, question, question.explanation, question.explanationSv);
    const source = document.createElement("a");
    source.className = "source-link";
    source.href = question.sourceUrl;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = `${textFor("source")}: ${question.sourceLabel}`;
    elements.feedback.append(result, explanation, source);
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
  const score = scoreFor(questions, testState);
  const isAreaTraining = test.type === "area";
  const isCollectionTraining = test.type === "collection";
  const collectionTitle = isCollectionTraining
    ? textFor(test.collectionKey === "mistakes" ? "mistakesTitle" : "savedTitle")
    : "";
  elements.resultKicker.textContent = textFor(isAreaTraining
    ? "resultAreaKicker"
    : isCollectionTraining
      ? "resultCollectionKicker"
      : "resultKicker");
  elements.resultTitle.textContent = isAreaTraining
    ? textFor("resultAreaTitle", areaLabel(test.areaKey))
    : isCollectionTraining
      ? textFor("resultCollectionTitle", collectionTitle)
      : textFor("resultTitle", test.number);
  elements.resultScore.textContent = `${score} / ${questions.length}`;
  elements.resultMessage.textContent = textFor("resultMessage", answered, questions.length);
  elements.retry.textContent = isAreaTraining
    ? textFor("retryArea")
    : isCollectionTraining
      ? textFor("retryCollection")
      : textFor("retry", test.number);
  elements.areaResults.replaceChildren();

  test.requiredAreas.forEach((areaKey) => {
    const areaQuestions = questions.filter((question) => question.officialArea === areaKey);
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
  if (test.type === "collection") testState.collectionQuestionIds = [...test.questionIds];
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
  if (Object.prototype.hasOwnProperty.call(testState.responses, question.id)) return;
  testState.responses[question.id] = index;
  if (index === question.correct) {
    appState.mistakes = appState.mistakes.filter((id) => id !== question.id);
  } else if (!appState.mistakes.includes(question.id)) {
    appState.mistakes.push(question.id);
  }
  saveState();
  renderQuiz();
}

function finishTest() {
  const questions = activeQuestions();
  const testState = getTestState();
  const answered = answeredFor(questions, testState);
  testState.lastScore = scoreFor(questions, testState);
  testState.completed = answered === questions.length;
  appState.view = "result";
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetActiveTest() {
  if (!appState.activeTestId) return;
  appState.tests[appState.activeTestId] = blankTestState();
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

elements.resultHome.addEventListener("click", () => {
  appState.view = "home";
  saveState();
  renderApp();
});

elements.review.addEventListener("click", () => {
  getTestState().current = 0;
  appState.view = "quiz";
  saveState();
  renderApp();
});

elements.retry.addEventListener("click", resetActiveTest);

elements.testsTab.addEventListener("click", () => {
  appState.dashboardTab = "tests";
  saveState();
  renderApp();
});

elements.areasTab.addEventListener("click", () => {
  appState.dashboardTab = "areas";
  saveState();
  renderApp();
});

elements.reviewTab.addEventListener("click", () => {
  appState.dashboardTab = "review";
  saveState();
  renderApp();
});

function openBottomTab(tab) {
  appState.view = "home";
  appState.dashboardTab = tab;
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

elements.bottomTests.addEventListener("click", () => openBottomTab("tests"));
elements.bottomAreas.addEventListener("click", () => openBottomTab("areas"));
elements.bottomMistakes.addEventListener("click", () => openBottomTab("mistakes"));
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
