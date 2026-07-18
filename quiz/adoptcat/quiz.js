const resultIds = [
  "blackCat",
  "calico",
  "greyTabby",
  "maineCoon",
  "orangeCat",
  "ragdoll",
  "britishShorthair",
  "siamese",
  "tuxedo",
  "whiteCat"
];

const spriteClass = {
  blackCat: "black-cat",
  calico: "calico",
  greyTabby: "grey-tabby",
  maineCoon: "maine-coon",
  orangeCat: "orange-cat",
  ragdoll: "ragdoll",
  britishShorthair: "british-shorthair",
  siamese: "siamese",
  tuxedo: "tuxedo",
  whiteCat: "white-cat"
};

const resultAnimation = {
  blackCat: "sitting",
  calico: "grooming",
  greyTabby: "running",
  maineCoon: "walking",
  orangeCat: "petting",
  ragdoll: "sleeping",
  britishShorthair: "sitting",
  siamese: "grooming",
  tuxedo: "walking",
  whiteCat: "sleeping"
};

const questions = [
  {
    id: "afternoon",
    answers: [
      { id: "quiet", scores: { blackCat: 3, whiteCat: 2, britishShorthair: 1 } },
      { id: "explore", scores: { greyTabby: 3, maineCoon: 2, orangeCat: 1 } },
      { id: "party", scores: { siamese: 3, tuxedo: 2, calico: 1 } },
      { id: "admired", scores: { britishShorthair: 3, ragdoll: 2, whiteCat: 1 } }
    ]
  },
  {
    id: "partyRole",
    answers: [
      { id: "mystery", scores: { blackCat: 3, whiteCat: 1, tuxedo: 1 } },
      { id: "storyteller", scores: { orangeCat: 3, siamese: 2, tuxedo: 1 } },
      { id: "snacks", scores: { ragdoll: 3, maineCoon: 2, britishShorthair: 1 } },
      { id: "entrance", scores: { tuxedo: 3, calico: 2, whiteCat: 1 } }
    ]
  },
  {
    id: "comfort",
    answers: [
      { id: "blanket", scores: { ragdoll: 3, whiteCat: 2, britishShorthair: 1 } },
      { id: "box", scores: { orangeCat: 3, greyTabby: 2, calico: 1 } },
      { id: "window", scores: { maineCoon: 3, greyTabby: 2, blackCat: 1 } },
      { id: "chair", scores: { britishShorthair: 3, tuxedo: 2, siamese: 1 } }
    ]
  },
  {
    id: "affection",
    answers: [
      { id: "loyal", scores: { blackCat: 3, maineCoon: 2, britishShorthair: 1 } },
      { id: "talk", scores: { siamese: 3, tuxedo: 2, calico: 1 } },
      { id: "clingy", scores: { ragdoll: 3, orangeCat: 2, whiteCat: 1 } },
      { id: "tease", scores: { calico: 3, orangeCat: 2, greyTabby: 1 } }
    ]
  },
  {
    id: "routine",
    answers: [
      { id: "snacks", scores: { orangeCat: 3, maineCoon: 1, ragdoll: 1 } },
      { id: "supervise", scores: { siamese: 3, calico: 2, tuxedo: 1 } },
      { id: "observe", scores: { blackCat: 3, whiteCat: 2, britishShorthair: 1 } },
      { id: "pretend", scores: { britishShorthair: 3, tuxedo: 2, calico: 1 } }
    ]
  },
  {
    id: "friends",
    answers: [
      { id: "gentle", scores: { maineCoon: 3, ragdoll: 2, whiteCat: 1 } },
      { id: "funny", scores: { orangeCat: 3, tuxedo: 2, greyTabby: 1 } },
      { id: "stylish", scores: { tuxedo: 3, calico: 2, siamese: 1 } },
      { id: "calm", scores: { britishShorthair: 3, blackCat: 2, ragdoll: 1 } }
    ]
  },
  {
    id: "adventure",
    answers: [
      { id: "rooftop", scores: { blackCat: 3, greyTabby: 2, tuxedo: 1 } },
      { id: "cottage", scores: { ragdoll: 3, maineCoon: 2, orangeCat: 1 } },
      { id: "royal", scores: { britishShorthair: 3, whiteCat: 2, siamese: 1 } },
      { id: "kitchen", scores: { orangeCat: 3, siamese: 2, calico: 1 } }
    ]
  },
  {
    id: "attention",
    answers: [
      { id: "gentle", scores: { whiteCat: 3, ragdoll: 2, blackCat: 1 } },
      { id: "all", scores: { siamese: 3, orangeCat: 2, tuxedo: 1 } },
      { id: "trusted", scores: { blackCat: 3, britishShorthair: 2, calico: 1 } },
      { id: "nearby", scores: { maineCoon: 3, greyTabby: 2, britishShorthair: 1 } }
    ]
  },
  {
    id: "power",
    answers: [
      { id: "readRoom", scores: { blackCat: 3, siamese: 2, whiteCat: 1 } },
      { id: "laugh", scores: { orangeCat: 3, tuxedo: 2, calico: 1 } },
      { id: "innocent", scores: { calico: 3, greyTabby: 2, orangeCat: 1 } },
      { id: "safe", scores: { maineCoon: 3, ragdoll: 2, britishShorthair: 1 } }
    ]
  },
  {
    id: "motto",
    answers: [
      { id: "boundaries", scores: { britishShorthair: 3, whiteCat: 2, blackCat: 1 } },
      { id: "thoughts", scores: { siamese: 3, calico: 2, tuxedo: 1 } },
      { id: "adventure", scores: { greyTabby: 3, maineCoon: 2, orangeCat: 1 } },
      { id: "mystery", scores: { blackCat: 3, tuxedo: 2, whiteCat: 1 } }
    ]
  }
];

const translations = {
  en: {
    quiz: {
      eyebrow: "Desktop pet quiz",
      title: "Which adoptable cat are you?",
      language: "Language",
      intro: "Answer 10 tiny personality questions and meet the desktop cat that matches your vibe.",
      start: "Start quiz",
      home: "Panduck home"
    },
    result: {
      eyebrow: "Your cat match",
      adoptCta: "Adopt this desktop cat",
      restart: "Try again",
      adopt: "Why not adopt one today? This cat is ready to loaf, blink, and keep you company on your desktop.",
      share: "I got {cat} on the Panduck cat quiz."
    },
    questions: {
      afternoon: {
        text: "Your perfect afternoon is...",
        answers: {
          quiet: "Curled up somewhere quiet with soft light",
          explore: "Exploring a new place with someone you like",
          party: "Hosting, chatting, playing, causing a little scene",
          admired: "Doing your own thing while everyone admires you from a respectful distance"
        }
      },
      partyRole: {
        text: "At a party, you are usually...",
        answers: {
          mystery: "The mysterious one people want to know more about",
          storyteller: "The loud funny one telling stories",
          snacks: "The calm friend sitting with the snacks",
          entrance: "The stylish one who appears exactly when needed"
        }
      },
      comfort: {
        text: "Pick a comfort object.",
        answers: {
          blanket: "A velvet blanket",
          box: "A cardboard box",
          window: "A sunny windowsill",
          chair: "A dramatic throne-like chair"
        }
      },
      affection: {
        text: "How do you show affection?",
        answers: {
          loyal: "Quiet loyalty",
          talk: "Constant talking and checking in",
          clingy: "Full-body cozy clinginess",
          tease: "Playful teasing"
        }
      },
      routine: {
        text: "Someone changes your routine. You...",
        answers: {
          snacks: "Adapt easily if snacks are involved",
          supervise: "Complain loudly, then supervise",
          observe: "Retreat and observe first",
          pretend: "Pretend you do not care, but absolutely care"
        }
      },
      friends: {
        text: "Your friends would describe you as...",
        answers: {
          gentle: "Gentle and reliable",
          funny: "Funny and chaotic",
          stylish: "Stylish and clever",
          calm: "Calm and hard to impress"
        }
      },
      adventure: {
        text: "Choose your adventure.",
        answers: {
          rooftop: "A moonlit rooftop",
          cottage: "A cozy cottage",
          royal: "A royal drawing room",
          kitchen: "A noisy kitchen full of people"
        }
      },
      attention: {
        text: "What kind of attention do you like?",
        answers: {
          gentle: "Gentle attention, not too much",
          all: "All of it, immediately",
          trusted: "Affection from trusted people only",
          nearby: "Nearby companionship without being picked up"
        }
      },
      power: {
        text: "Your secret power is...",
        answers: {
          readRoom: "Reading the room instantly",
          laugh: "Making everyone laugh",
          innocent: "Looking innocent after causing trouble",
          safe: "Making people feel safe"
        }
      },
      motto: {
        text: "Pick your life motto.",
        answers: {
          boundaries: "Soft life, strong boundaries.",
          thoughts: "I have thoughts, and you will hear them.",
          adventure: "Adventure first, nap later.",
          mystery: "I am beauty. I am mystery. I may knock this over."
        }
      }
    },
    cats: {
      blackCat: { name: "Black Cat", description: "You are quiet magic: observant, loyal, and a little impossible to fully understand. People feel special when you choose them." },
      calico: { name: "Calico", description: "You are colorful confidence with opinions. Sweet, bold, surprising, and absolutely not interested in being predictable." },
      greyTabby: { name: "Grey Tabby", description: "You are clever curiosity. You like movement, puzzles, windows, little missions, and knowing what every room is doing." },
      maineCoon: { name: "Maine Coon", description: "You are the gentle giant of the friend group: steady, warm, outdoorsy-at-heart, and quietly protective." },
      orangeCat: { name: "Orange Cat", description: "You are sunshine with a suspiciously chaotic plan. Warm, funny, snack-motivated, and impossible to stay mad at." },
      ragdoll: { name: "Ragdoll", description: "You are soft trust. Calm, affectionate, and happiest when the world slows down enough for a good cuddle." },
      britishShorthair: { name: "British Shorthair", description: "You are plush dignity. Composed, independent, deeply comfortable, and much more affectionate than your face admits." },
      siamese: { name: "Siamese", description: "You are dramatic brilliance. Social, vocal, smart, and very ready to explain exactly what should happen next." },
      tuxedo: { name: "Tuxedo", description: "You are formal mischief. Charming, theatrical, clever, and somehow always dressed for the most interesting part of the day." },
      whiteCat: { name: "White Cat", description: "You are serene moonlight. Elegant, sensitive, dreamy, and full of soft boundaries that deserve respect." }
    }
  },
  th: {
    quiz: {
      eyebrow: "ควิซเดสก์ท็อปเพ็ต",
      title: "คุณเป็นแมวที่น่ารับเลี้ยงแบบไหน?",
      language: "ภาษา",
      intro: "ตอบคำถามบุคลิกภาพสั้น ๆ 10 ข้อ แล้วพบกับแมวเดสก์ท็อปที่เข้ากับไวบ์ของคุณ",
      start: "เริ่มควิซ",
      home: "หน้าแรก Panduck"
    },
    result: {
      eyebrow: "แมวที่เข้ากับคุณ",
      adoptCta: "รับเลี้ยงแมวเดสก์ท็อปตัวนี้",
      restart: "เล่นอีกครั้ง",
      adopt: "ทำไมไม่รับเลี้ยงสักตัววันนี้เลยล่ะ? แมวตัวนี้พร้อมมานอนก้อน กะพริบตา และอยู่เป็นเพื่อนบนหน้าจอของคุณ",
      share: "ฉันได้ {cat} จากควิซแมวของ Panduck"
    },
    questions: {
      afternoon: {
        text: "บ่ายที่สมบูรณ์แบบของคุณคือ...",
        answers: {
          quiet: "ขดตัวอยู่ในมุมเงียบ ๆ ที่มีแสงนุ่ม ๆ",
          explore: "ไปสำรวจที่ใหม่กับคนที่คุณชอบ",
          party: "ชวนคุย เล่นสนุก และสร้างเรื่องนิดหน่อย",
          admired: "ทำสิ่งของตัวเองไป พร้อมให้ทุกคนชื่นชมจากระยะที่เหมาะสม"
        }
      },
      partyRole: {
        text: "เวลาอยู่ในงานปาร์ตี้ คุณมักจะเป็น...",
        answers: {
          mystery: "คนลึกลับที่คนอื่นอยากรู้จักมากขึ้น",
          storyteller: "คนตลกเสียงดังที่เล่าเรื่องเก่ง",
          snacks: "เพื่อนใจเย็นที่นั่งอยู่ใกล้ขนม",
          entrance: "คนมีสไตล์ที่โผล่มาได้ถูกจังหวะเสมอ"
        }
      },
      comfort: {
        text: "เลือกของที่ทำให้รู้สึกสบายใจ",
        answers: {
          blanket: "ผ้าห่มกำมะหยี่",
          box: "กล่องกระดาษ",
          window: "ขอบหน้าต่างที่มีแดดอุ่น",
          chair: "เก้าอี้ที่เหมือนบัลลังก์เล็ก ๆ"
        }
      },
      affection: {
        text: "คุณแสดงความรักยังไง?",
        answers: {
          loyal: "อยู่ข้าง ๆ แบบเงียบ ๆ",
          talk: "คุยและเช็กอินตลอด",
          clingy: "กอดแน่นแบบนุ่มฟูทั้งตัว",
          tease: "แหย่เล่นด้วยความรัก"
        }
      },
      routine: {
        text: "มีคนเปลี่ยนกิจวัตรของคุณ คุณจะ...",
        answers: {
          snacks: "ปรับตัวได้ ถ้ามีขนม",
          supervise: "บ่นเสียงดัง แล้วคุมสถานการณ์ต่อ",
          observe: "ถอยไปสังเกตก่อน",
          pretend: "ทำเหมือนไม่สน แต่จริง ๆ สนมาก"
        }
      },
      friends: {
        text: "เพื่อน ๆ จะบอกว่าคุณเป็นคน...",
        answers: {
          gentle: "อ่อนโยนและไว้ใจได้",
          funny: "ตลกและวุ่นวายนิด ๆ",
          stylish: "มีสไตล์และฉลาด",
          calm: "นิ่งและทำให้ประทับใจยาก"
        }
      },
      adventure: {
        text: "เลือกการผจญภัยของคุณ",
        answers: {
          rooftop: "ดาดฟ้าใต้แสงจันทร์",
          cottage: "คอตเทจอบอุ่น",
          royal: "ห้องรับแขกแบบราชวงศ์",
          kitchen: "ครัวเสียงดังที่เต็มไปด้วยผู้คน"
        }
      },
      attention: {
        text: "คุณชอบความสนใจแบบไหน?",
        answers: {
          gentle: "สนใจแบบนุ่มนวล ไม่เยอะเกินไป",
          all: "ทั้งหมด เดี๋ยวนี้เลย",
          trusted: "ความรักจากคนที่ไว้ใจเท่านั้น",
          nearby: "อยู่ใกล้ ๆ เป็นเพื่อนกัน แต่ไม่ต้องอุ้ม"
        }
      },
      power: {
        text: "พลังลับของคุณคือ...",
        answers: {
          readRoom: "อ่านบรรยากาศได้ทันที",
          laugh: "ทำให้ทุกคนหัวเราะ",
          innocent: "ทำหน้าใสซื่อหลังจากก่อเรื่อง",
          safe: "ทำให้คนอื่นรู้สึกปลอดภัย"
        }
      },
      motto: {
        text: "เลือกคติประจำใจ",
        answers: {
          boundaries: "ชีวิตนุ่ม ๆ แต่ขอบเขตชัดเจน",
          thoughts: "ฉันมีความคิดเห็น และคุณจะได้ฟัง",
          adventure: "ผจญภัยก่อน ค่อยนอนทีหลัง",
          mystery: "ฉันคืองานศิลป์ ฉันคือลึกลับ และฉันอาจปัดของตก"
        }
      }
    },
    cats: {
      blackCat: { name: "แมวดำ", description: "คุณคือเวทมนตร์เงียบ ๆ ช่างสังเกต ซื่อสัตย์ และอ่านยากนิดหน่อย ใครที่คุณเลือกจะรู้สึกพิเศษมาก" },
      calico: { name: "แมวสามสี", description: "คุณคือความมั่นใจหลากสี มีความเห็นชัดเจน น่ารัก กล้า และไม่คิดจะเดาง่าย" },
      greyTabby: { name: "แมวลายเทา", description: "คุณคือความอยากรู้อยากเห็นที่ฉลาด ชอบการเคลื่อนไหว ปริศนา หน้าต่าง และภารกิจเล็ก ๆ" },
      maineCoon: { name: "เมนคูน", description: "คุณคือยักษ์ใจดีของกลุ่มเพื่อน มั่นคง อบอุ่น รักธรรมชาติในใจ และคอยปกป้องอย่างเงียบ ๆ" },
      orangeCat: { name: "แมวส้ม", description: "คุณคือแสงแดดที่มีแผนป่วน ๆ อบอุ่น ตลก รักขนม และโกรธไม่ลงจริง ๆ" },
      ragdoll: { name: "แร็กดอลล์", description: "คุณคือความไว้ใจที่นุ่มฟู ใจเย็น ขี้อ้อน และมีความสุขที่สุดเมื่อโลกช้าลงพอให้กอดกัน" },
      britishShorthair: { name: "บริติช ชอร์ตแฮร์", description: "คุณคือศักดิ์ศรีที่นุ่มเหมือนตุ๊กตา สุขุม รักอิสระ สบายกับตัวเอง และขี้รักกว่าหน้าตาบอก" },
      siamese: { name: "วิเชียรมาศ", description: "คุณคือความฉลาดแบบมีดราม่า เข้าสังคมเก่ง ช่างพูด และพร้อมอธิบายว่าทุกอย่างควรเป็นยังไง" },
      tuxedo: { name: "แมวทักซิโด้", description: "คุณคือความซนในชุดทางการ มีเสน่ห์ ชอบเล่นใหญ่ ฉลาด และเหมือนแต่งตัวพร้อมไปอยู่ในฉากสำคัญเสมอ" },
      whiteCat: { name: "แมวขาว", description: "คุณคือแสงจันทร์สงบ สง่างาม อ่อนไหว ช่างฝัน และมีขอบเขตนุ่ม ๆ ที่ควรได้รับการเคารพ" }
    }
  },
  es: {
    quiz: {
      eyebrow: "Quiz de mascota de escritorio",
      title: "Que gato adoptable eres?",
      language: "Idioma",
      intro: "Responde 10 preguntas pequenas de personalidad y conoce al gato de escritorio que combina con tu vibra.",
      start: "Empezar quiz",
      home: "Inicio Panduck"
    },
    result: {
      eyebrow: "Tu gato ideal",
      adoptCta: "Adoptar este gato de escritorio",
      restart: "Intentar otra vez",
      adopt: "Por que no adoptar uno hoy? Este gato esta listo para descansar, parpadear y hacerte compania en tu escritorio.",
      share: "Me salio {cat} en el quiz de gatos de Panduck."
    },
    questions: {
      afternoon: {
        text: "Tu tarde perfecta es...",
        answers: {
          quiet: "Acurrucarte en un lugar tranquilo con luz suave",
          explore: "Explorar un lugar nuevo con alguien que te gusta",
          party: "Organizar, hablar, jugar y armar una pequena escena",
          admired: "Hacer lo tuyo mientras todos te admiran desde una distancia respetuosa"
        }
      },
      partyRole: {
        text: "En una fiesta, normalmente eres...",
        answers: {
          mystery: "La persona misteriosa que todos quieren conocer",
          storyteller: "La persona graciosa y ruidosa que cuenta historias",
          snacks: "La amistad tranquila sentada junto a los snacks",
          entrance: "La persona con estilo que aparece justo a tiempo"
        }
      },
      comfort: {
        text: "Elige un objeto de confort.",
        answers: {
          blanket: "Una manta de terciopelo",
          box: "Una caja de carton",
          window: "Una ventana soleada",
          chair: "Una silla dramatica tipo trono"
        }
      },
      affection: {
        text: "Como muestras carino?",
        answers: {
          loyal: "Lealtad silenciosa",
          talk: "Hablar y revisar que todo este bien",
          clingy: "Apego suave de cuerpo completo",
          tease: "Bromas juguetonas"
        }
      },
      routine: {
        text: "Alguien cambia tu rutina. Tu...",
        answers: {
          snacks: "Te adaptas si hay snacks",
          supervise: "Te quejas fuerte y luego supervisas",
          observe: "Te retiras y observas primero",
          pretend: "Finges que no importa, pero si importa"
        }
      },
      friends: {
        text: "Tus amigos dirian que eres...",
        answers: {
          gentle: "Amable y confiable",
          funny: "Gracioso y caotico",
          stylish: "Con estilo e inteligente",
          calm: "Calma y dificil de impresionar"
        }
      },
      adventure: {
        text: "Elige tu aventura.",
        answers: {
          rooftop: "Una azotea bajo la luna",
          cottage: "Una casita acogedora",
          royal: "Un salon real",
          kitchen: "Una cocina ruidosa llena de gente"
        }
      },
      attention: {
        text: "Que tipo de atencion te gusta?",
        answers: {
          gentle: "Atencion suave, no demasiada",
          all: "Toda, inmediatamente",
          trusted: "Carino solo de personas de confianza",
          nearby: "Compania cerca, sin que te levanten"
        }
      },
      power: {
        text: "Tu poder secreto es...",
        answers: {
          readRoom: "Leer el ambiente al instante",
          laugh: "Hacer reir a todos",
          innocent: "Parecer inocente despues de causar problemas",
          safe: "Hacer que la gente se sienta segura"
        }
      },
      motto: {
        text: "Elige tu lema.",
        answers: {
          boundaries: "Vida suave, limites firmes.",
          thoughts: "Tengo opiniones, y las vas a escuchar.",
          adventure: "Aventura primero, siesta despues.",
          mystery: "Soy belleza. Soy misterio. Puede que tire esto."
        }
      }
    },
    cats: {
      blackCat: { name: "Gato Negro", description: "Eres magia silenciosa: observas, eres leal y un poco imposible de entender del todo. La gente se siente especial cuando la eliges." },
      calico: { name: "Gato Calico", description: "Eres confianza llena de color y opiniones. Dulce, valiente, sorprendente y nada interesada en ser predecible." },
      greyTabby: { name: "Gato Atigrado Gris", description: "Eres curiosidad inteligente. Te gustan el movimiento, los acertijos, las ventanas y saber que pasa en cada cuarto." },
      maineCoon: { name: "Maine Coon", description: "Eres el gigante amable del grupo: estable, calido, con alma aventurera y protector en silencio." },
      orangeCat: { name: "Gato Naranja", description: "Eres sol con un plan sospechosamente caotico. Calido, gracioso, motivado por snacks e imposible de odiar." },
      ragdoll: { name: "Ragdoll", description: "Eres confianza suave. Calma, carinosa y feliz cuando el mundo baja la velocidad para un buen abrazo." },
      britishShorthair: { name: "British Shorthair", description: "Eres dignidad de peluche. Compuesta, independiente, comoda contigo misma y mas afectuosa de lo que tu cara admite." },
      siamese: { name: "Siames", description: "Eres brillantez dramatica. Sociable, vocal, inteligente y lista para explicar exactamente que debe pasar." },
      tuxedo: { name: "Gato Tuxedo", description: "Eres travesura formal. Encanto, teatro, inteligencia y siempre vestida para la parte mas interesante del dia." },
      whiteCat: { name: "Gato Blanco", description: "Eres luz de luna serena. Elegante, sensible, sonadora y llena de limites suaves que merecen respeto." }
    }
  },
  zh: {
    quiz: {
      eyebrow: "桌面宠物测验",
      title: "你是哪一种可领养猫咪？",
      language: "语言",
      intro: "回答 10 个小小的性格问题，找到最适合你气质的桌面猫咪。",
      start: "开始测验",
      home: "Panduck 首页"
    },
    result: {
      eyebrow: "你的猫咪匹配",
      adoptCta: "领养这只桌面猫",
      restart: "再玩一次",
      adopt: "今天为什么不领养一只呢？这只猫已经准备好在你的桌面上趴着、眨眼、陪你度过一天。",
      share: "我在 Panduck 猫咪测验里得到了 {cat}。"
    },
    questions: {
      afternoon: {
        text: "你理想的下午是...",
        answers: {
          quiet: "在安静柔和的光线里蜷起来",
          explore: "和喜欢的人一起探索新地方",
          party: "招待大家、聊天、玩闹，制造一点小场面",
          admired: "做自己的事，同时让大家保持礼貌距离欣赏你"
        }
      },
      partyRole: {
        text: "在派对上，你通常是...",
        answers: {
          mystery: "让人想更了解的神秘角色",
          storyteller: "大声讲故事的搞笑担当",
          snacks: "坐在零食旁边的安静朋友",
          entrance: "总在刚好时机出现的有型人物"
        }
      },
      comfort: {
        text: "选一个让你安心的东西。",
        answers: {
          blanket: "天鹅绒毯子",
          box: "纸箱",
          window: "有阳光的窗台",
          chair: "像王座一样的椅子"
        }
      },
      affection: {
        text: "你怎么表达喜欢？",
        answers: {
          loyal: "安静地陪在身边",
          talk: "一直聊天和确认状态",
          clingy: "整个人软软地黏上去",
          tease: "用调皮的方式逗对方"
        }
      },
      routine: {
        text: "有人改变了你的日常。你会...",
        answers: {
          snacks: "如果有零食，就可以适应",
          supervise: "先大声抱怨，然后开始监督",
          observe: "先退后观察",
          pretend: "假装不在意，但其实很在意"
        }
      },
      friends: {
        text: "朋友会说你是...",
        answers: {
          gentle: "温柔可靠",
          funny: "有趣又有点混乱",
          stylish: "有品味又聪明",
          calm: "冷静，而且不容易被打动"
        }
      },
      adventure: {
        text: "选择你的冒险。",
        answers: {
          rooftop: "月光下的屋顶",
          cottage: "温暖的小屋",
          royal: "华丽的会客厅",
          kitchen: "热闹又吵的厨房"
        }
      },
      attention: {
        text: "你喜欢哪种关注？",
        answers: {
          gentle: "温柔一点，不要太多",
          all: "全部，现在马上",
          trusted: "只接受信任的人表达亲近",
          nearby: "陪在附近就好，不一定要抱起来"
        }
      },
      power: {
        text: "你的隐藏能力是...",
        answers: {
          readRoom: "瞬间读懂气氛",
          laugh: "让所有人笑出来",
          innocent: "闯祸后看起来很无辜",
          safe: "让别人感到安心"
        }
      },
      motto: {
        text: "选择你的人生座右铭。",
        answers: {
          boundaries: "生活要柔软，边界要清楚。",
          thoughts: "我有想法，而且你会听到。",
          adventure: "先冒险，后午睡。",
          mystery: "我是美。我是谜。我可能会把这个推下去。"
        }
      }
    },
    cats: {
      blackCat: { name: "黑猫", description: "你是安静的魔法：敏锐、忠诚，又有一点难以完全看透。被你选择的人会觉得自己很特别。" },
      calico: { name: "三花猫", description: "你是色彩丰富的自信，观点鲜明。甜、勇敢、出人意料，而且绝不想被预测。" },
      greyTabby: { name: "灰虎斑", description: "你是聪明的好奇心。你喜欢移动、谜题、窗边和掌握每个房间发生的事。" },
      maineCoon: { name: "缅因猫", description: "你是朋友里的温柔巨人：稳定、温暖，心里向往户外，也会默默保护别人。" },
      orangeCat: { name: "橘猫", description: "你是带着可疑混乱计划的阳光。温暖、搞笑、容易被零食驱动，让人气不起来。" },
      ragdoll: { name: "布偶猫", description: "你是柔软的信任。冷静、亲近人，最喜欢世界慢下来，好好抱一抱。" },
      britishShorthair: { name: "英国短毛猫", description: "你是毛绒绒的体面。沉稳、独立、很自在，而且比表情看起来更有爱。" },
      siamese: { name: "暹罗猫", description: "你是带戏剧感的聪明。爱社交、爱表达、反应快，并且准备好说明下一步该怎么做。" },
      tuxedo: { name: "燕尾服猫", description: "你是正式打扮的淘气。迷人、会演、聪明，好像永远穿好了衣服准备进入最有趣的一幕。" },
      whiteCat: { name: "白猫", description: "你是宁静月光。优雅、敏感、爱做梦，也有值得被尊重的柔软边界。" }
    }
  }
};

let lang = localStorage.getItem("panduck-cat-quiz-lang") || "en";
let currentQuestion = 0;
let scores = {};

const languageSelect = document.querySelector("#language-select");
const introScreen = document.querySelector("#intro-screen");
const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const questionTitle = document.querySelector("#question-title");
const answerGrid = document.querySelector("#answer-grid");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const resultAdopt = document.querySelector("#result-adopt");
const resultSprite = document.querySelector("#result-sprite");
const shareText = document.querySelector("#share-text");

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[lang]) || path;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  if (questionScreen.classList.contains("active")) renderQuestion();
  if (resultScreen.classList.contains("active")) renderResult(bestResult());
}

function showScreen(screen) {
  [introScreen, questionScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function resetScores() {
  scores = Object.fromEntries(resultIds.map((id) => [id, 0]));
}

function startQuiz() {
  resetScores();
  currentQuestion = 0;
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const text = translations[lang].questions[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressLabel.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionTitle.textContent = text.text;
  answerGrid.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = text.answers[answer.id];
    button.addEventListener("click", () => chooseAnswer(answer));
    answerGrid.append(button);
  });
}

function chooseAnswer(answer) {
  Object.entries(answer.scores).forEach(([id, value]) => {
    scores[id] += value;
  });

  currentQuestion += 1;
  if (currentQuestion >= questions.length) {
    renderResult(bestResult());
    showScreen(resultScreen);
    return;
  }
  renderQuestion();
}

function bestResult() {
  return resultIds.reduce((best, id) => {
    if (scores[id] > scores[best]) return id;
    return best;
  }, resultIds[0]);
}

function renderResult(id) {
  const cat = translations[lang].cats[id];
  resultTitle.textContent = cat.name;
  resultDescription.textContent = cat.description;
  resultAdopt.textContent = translations[lang].result.adopt;
  shareText.textContent = translations[lang].result.share.replace("{cat}", cat.name);
  resultSprite.className = `sprite cat-animation result-sprite ${spriteClass[id]}`;
  resultSprite.alt = cat.name;
  window.setCatAnimation?.(resultSprite, id, resultAnimation[id] || "sitting");
}

languageSelect.value = lang;
languageSelect.addEventListener("change", (event) => {
  lang = event.target.value;
  localStorage.setItem("panduck-cat-quiz-lang", lang);
  applyLanguage();
});

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", () => {
  showScreen(introScreen);
  resetScores();
});

resetScores();
applyLanguage();
