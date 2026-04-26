/* ============================================================
   أسماك الشاطئ — App Logic & Menu Data
   ============================================================ */

/* ================================================================
   COMPLETE MENU DATA
================================================================ */
const MENU_DATA = [
  {
    id: "takeaway",
    name: "منيو التيك أواي",
    icon: "🚗",
    desc: "طلبات التيك أواي والتوصيل",
    color: "rgba(212,168,83,0.15)",
    subcategories: [
      {
        name: "الأسماك",
        items: [
          { name: "بلطي",       desc: "سمك البلطي الطازج",                   price: "على حسب سعر اليوم", market: true },
          { name: "بوري",       desc: "سمك البوري الطازج",                   price: "على حسب سعر اليوم", market: true },
          { name: "قشر بياض",   desc: "قشر بياض طازج",                       price: "على حسب سعر اليوم", market: true },
          { name: "فيليه بلطي", desc: "فيليه سمك البلطي الطازج",            price: "على حسب سعر اليوم", market: true },
          { name: "سبيط",       desc: "سبيط بلدي طازج",                      price: "على حسب سعر اليوم", market: true },
          { name: "وقار بلدي",  desc: "سمك الوقار البلدي",                  price: "على حسب سعر اليوم", market: true },
          { name: "دنيس",       desc: "سمك الدنيس الطازج",                  price: "على حسب سعر اليوم", market: true },
          { name: "قاروص",      desc: "سمك القاروص الطازج",                 price: "على حسب سعر اليوم", market: true },
          { name: "ثعابين",     desc: "ثعابين البحر الطازجة",               price: "على حسب سعر اليوم", market: true },
          { name: "سهيله",      desc: "سمك السهيلة الطازج",                 price: "على حسب سعر اليوم", market: true },
          { name: "موسي",       desc: "سمك موسى الطازج",                    price: "على حسب سعر اليوم", market: true },
          { name: "بربوني",     desc: "سمك البربوني (سلطان إبراهيم)",       price: "على حسب سعر اليوم", market: true },
          { name: "مكرونة",     desc: "سمك المكرونة البلدي",                price: "على حسب سعر اليوم", market: true },
          { name: "لوت",        desc: "سمك اللوت الطازج",                   price: "على حسب سعر اليوم", market: true },
        ]
      },
      {
        name: "الشوربات",
        items: [
          { name: "شوربة سي فوود",        desc: "شوربة مأكولات بحرية متنوعة بالخضار والتوابل",   price: "240" },
          { name: "ملوخية بالجمبري",       desc: "ملوخية طازجة مطبوخة مع الجمبري",               price: "120" },
          { name: "شوربة فياجرا أحمر",     desc: "شوربة بالمأكولات البحرية الحمراء",             price: "50" },
          { name: "شوربة جمبري أحمر",      desc: "شوربة جمبري حمراء غنية بالنكهة",              price: "250" },
          { name: "شوربة جندوفلي",         desc: "شوربة الجندوفلي البحري اللذيذة",              price: "150" },
          { name: "شوربة بطارخ",           desc: "شوربة البطارخ الغنية بالنكهة",               price: "260" },
          { name: "شوربة الشيف",           desc: "تشكيلة الشيف المميزة من الشوربة البحرية",      price: "260" },
          { name: "شوربة مخلية",           desc: "شوربة مأكولات بحرية مخلية",                  price: "240" },
          { name: "ملوخية سادة",           desc: "ملوخية طازجة سادة",                           price: "70" },
        ]
      },
      {
        name: "أطباق الشاطئ",
        items: [
          { name: "طبق الشاطئ المميز",       desc: "فيليه + سبيط + جمبري",                         price: "280" },
          { name: "فيليه محشي سي فود",       desc: "فيليه سمك محشو بخليط مأكولات البحر",           price: "300" },
          { name: "كلماري محشي سي فود",      desc: "حبار محشو بخليط مأكولات البحر",               price: "300" },
          { name: "سالمون",                  desc: "سمك السالمون الفاخر",                          price: "950" },
          { name: "شيش طاووك الشاطئ",        desc: "شيش طاووك على الطريقة البحرية",               price: "200" },
          { name: "فيليه مشوي على الفحم",    desc: "فيليه سمك طازج مشوي على الفحم",               price: "200" },
          { name: "سبيط مشوي على الفحم",     desc: "سبيط بلدي مشوي على الفحم",                   price: "250" },
          { name: "كفتة جمبري",              desc: "كفتة مصنوعة من الجمبري الطازج",               price: "250" },
          { name: "كفتة سمك",               desc: "كفتة سمك طازجة مشوية",                        price: "200" },
        ]
      },
      {
        name: "الوجبات",
        items: [
          { name: "بوري + أرز",               desc: "١ بوري - أرز - عيش - سلطة",                                              price: "200" },
          { name: "بلطي + فيليه",             desc: "١ سمك بلطي - قطعة فيليه - أرز سادة - سلطة - عيش",                      price: "250" },
          { name: "بلطي + أرز",               desc: "١ سمك بلطي - أرز سادة - سلطة - عيش",                                    price: "140" },
          { name: "١/٤ فيليه + أرز",          desc: "١/٤ فيليه - أرز سادة - سلطة - عيش",                                     price: "200" },
          { name: "١/٤ فيليه أرز بالجمبري",   desc: "١/٤ فيليه - أرز بالجمبري - سلطة - عيش",                                 price: "250" },
          { name: "طاجن جمبري أو فيليه",      desc: "طاجن جمبري أو فيليه أو سبيط - أرز سادة - سلطة - عيش",                  price: "290" },
          { name: "٥ حبات جمبري",             desc: "٥ حبات جمبري - شيش فيليه - أرز سادة - سلطة - عيش",                     price: "250" },
          { name: "شوربة + ٢ شيش فيليه",      desc: "شوربة - ٢ شيش فيليه - أرز سادة - سلطة - عيش",                          price: "300" },
          { name: "وجبة ماكريل",              desc: "وجبة ماكريل - أرز سادة - سلطة - عيش",                                   price: "250" },
          { name: "وجبة مكس",                 desc: "بطارخ - سبيط - جمبري وفيليه - وكفتة - جمبري شوربة حمراء - سلطة",        price: "480" },
          { name: "فتة سي فود",               desc: "فتة مأكولات البحر اللذيذة",                                              price: "250-290" },
        ]
      },
      {
        name: "الجمبري",
        items: [
          { name: "جمبري وسط",             desc: "جمبري وسط طازج",           price: "1100" },
          { name: "جمبري فوق الوسط",       desc: "جمبري أكبر من الوسط",     price: "1300" },
          { name: "جمبري كبير",            desc: "جمبري كبير الحجم",         price: "2000" },
          { name: "جمبري جامبو",           desc: "جمبري جامبو فاخر",         price: "2500" },
          { name: "جمبري سويسي سوبر جامبو",desc: "أكبر أنواع الجمبري",      price: "3000" },
          { name: "جمبري لحم وسط",         desc: "جمبري لحم وسط",           price: "1300" },
          { name: "جمبري لحم كبير",        desc: "جمبري لحم كبير الحجم",    price: "1500" },
        ]
      },
      {
        name: "السلطات",
        items: [
          { name: "سلطة رنجة بالبصل",    desc: "سلطة رنجة طازجة مع البصل",               price: "95" },
          { name: "سلطة بطارخ",          desc: "سلطة بطارخ مميزة",                       price: "100" },
          { name: "سلطة جمبري",          desc: "سلطة جمبري طازجة",                       price: "150" },
          { name: "فتوش",                desc: "سلطة فتوش طازجة",                        price: "80" },
          { name: "تبولة",               desc: "سلطة تبولة بقدونس وبرغل",               price: "35" },
          { name: "سلطة جرجير",          desc: "سلطة جرجير طازجة",                       price: "80" },
          { name: "كافيار",              desc: "كافيار مميز",                            price: "45" },
          { name: "جميع المخللات والسلطات", desc: "طحينة - بابا غنوج - راهب - زبادي بالخيار - سلطة خضراء - باذنجان مخلل - توميه - طرشي بلدي - كولسلو", price: "30" },
        ]
      },
      {
        name: "القشريات",
        items: [
          { name: "بكلاويز",     desc: "ثوم وكرفس كريمة / خلطة إسكندراني",      price: "450" },
          { name: "كابوريا نتي", desc: "مشوي / مسلوقة / مخلية",                 price: "600" },
          { name: "جندوفلي",    desc: "خلطة إسكندراني / ثوم وكرفس / مسلوقة",  price: "500" },
          { name: "بلح البحر",  desc: "ثوم وكرفس / مسلوقة بالشوربة",           price: "600" },
          { name: "استاكوزا",   desc: "مشوي / مخلية",                          price: "2000" },
          { name: "بطارخ بلدي", desc: "بالزبدة - مقلي",                        price: "1400" },
        ]
      },
      {
        name: "الوليمة",
        items: [
          { name: "وليمة فردين",   desc: "١٢ جمبري - ٤ مقلي - ٤ جريل - ٤ بترفلاي - ٤ فيليه - ٤ كفتة - ١٠٠ جرام سبيط - ١ كابوريا - ٨ بلح البحر - مفروشة أرز - سلطات", price: "800" },
          { name: "وليمة ٤ أفراد", desc: "٢٤ جمبري - ٨ مقلي - ٨ جريل - ٨ بترفلاي - ٨ فيليه - ٨ كفتة - ٢٠٠ جرام سبيط - ٢ كابوريا - ١٦ بلح البحر - مفروشة أرز - سلطات", price: "1600" },
          { name: "صينية الشاطئ",  desc: "٢ بلطي مقلي - ٣٠٠ جرام جمبري مقلي - ٣٠٠ فيليه مقلي - ٢ كابوريا مشوي - ٢ شوربة حمراء - ٢ سلطة",                              price: "900" },
          { name: "صينية السعادة",  desc: "٢ بوري سنجاري - ٢ بلطي زيت وليمون - ١/٤ جمبري وسط مقلي - ١/٤ جمبري وسط جريل - ١/٤ جمبري وسط بترفلاي - ١٢ جندوفلي زيت وليمون - طاجن جمبري وسط أحمر - ١/٤ سبيط مقلي كرسبي - أرز سادة بعدد الأفراد - ٥ سلطة", price: "2000" },
          { name: "صينية الشيف رضا", desc: "سمكة بوري سنجاري + ٨ جمبري مقلي راس وديل + ٨ جمبري جريل + ٢ كابوريا كبير + رز + ٢ سلطة",                                    price: "850" },
        ]
      },
      {
        name: "أرز الشاطئ",
        items: [
          { name: "أرز بالجمبري الكبير المقلي",  desc: "أرز مع جمبري كبير مقلي",           price: "150-170" },
          { name: "أرز بالجمبري الكبير مدفون",   desc: "أرز بالجمبري مدفون",               price: "150-170" },
          { name: "أرز بالسي فود",               desc: "أرز مع خليط مأكولات البحر",        price: "180-250" },
          { name: "أرز بالسي فود بالمايونيز",    desc: "أرز سي فود مع صوص المايونيز",     price: "250-290" },
          { name: "مكرونة بالسي فود بالكريمة",   desc: "مكرونة مع مأكولات البحر والكريمة",price: "250-290" },
          { name: "مكرونة سي فود حمراء",         desc: "مكرونة مع صوص الطماطم الحمراء",  price: "250-290" },
          { name: "أرز صيادية بالخلطة",          desc: "أرز صيادية بالخلطة المميزة",       price: "40-50" },
          { name: "أرز مكس مشوي أو مقلي",        desc: "أرز مع مكس مشوي أو مقلي",         price: "200-250" },
          { name: "أرز أبيض بصوص الكاري والجمبري", desc: "أرز أبيض مع صوص الكاري والجمبري", price: "180" },
        ]
      },
      {
        name: "الساندويتشات",
        items: [
          { name: "ساندويتش سبيط",    desc: "ساندويتش سبيط مقلي هش",       price: "100" },
          { name: "ساندويتش جمبري",   desc: "ساندويتش جمبري مقلي لذيذ",    price: "100" },
          { name: "ساندويتش فيليه",   desc: "ساندويتش فيليه سمك",          price: "85" },
          { name: "ساندويتش كفتة",    desc: "ساندويتش كفتة سمك أو جمبري",  price: "100" },
          { name: "ساندويتش حواوشي",  desc: "حواوشي بحري مميز",            price: "110" },
        ]
      },
      {
        name: "الطواجن",
        items: [
          { name: "طاجن جمبري وسبيط بالكريمة",     desc: "طاجن جمبري وسبيط مع الكريمة",      price: "290" },
          { name: "طاجن جمبري (صلصة - كريمة)",     desc: "طاجن جمبري بالصلصة أو الكريمة",    price: "290" },
          { name: "طاجن سبيط (صلصة - كريمة)",      desc: "طاجن سبيط بالصلصة أو الكريمة",    price: "290" },
          { name: "طاجن فيليه",                     desc: "طاجن فيليه السمك",                 price: "250" },
          { name: "طاجن (١/٤ جمبري - ١/٤ سبيط)",   desc: "طاجن جمبري وسبيط مشترك",          price: "500" },
          { name: "طاجن كوكتيل",                    desc: "جمبري فيليه سبيط",                  price: "400" },
          { name: "طاجن فياجرا الشاطئ",             desc: "٣٥٠ جرام - طاجن فياجرا مميز",      price: "400" },
          { name: "طاجن بطارخ",                     desc: "طاجن البطارخ الفاخر",               price: "350" },
        ]
      },
    ]
  },
  {
    id: "hall-shrimp",
    name: "منيو الصالة — الجمبريات",
    icon: "🦐",
    desc: "أفخر أنواع الجمبري الطازج",
    color: "rgba(14,165,233,0.12)",
    subcategories: [
      {
        name: "الجمبريات",
        items: [
          { name: "جمبري وسط",       desc: "جمبري وسط طازج",         price: "1230" },
          { name: "جمبري كبير",      desc: "جمبري كبير الحجم",       price: "2000" },
          { name: "جمبري فوق الوسط", desc: "جمبري أكبر من الوسط",   price: "1350" },
          { name: "جمبري جامبو",     desc: "جمبري جامبو فاخر",       price: "3000" },
          { name: "جمبري لحم وسط",   desc: "جمبري لحم وسط",         price: "1450" },
          { name: "جمبري لحم كبير",  desc: "جمبري لحم كبير",        price: "1600" },
        ]
      }
    ]
  },
  {
    id: "hall-fish",
    name: "منيو الصالة — الأسماك",
    icon: "🐟",
    desc: "أسماك طازجة يومياً بأفضل الأسعار",
    color: "rgba(6,182,212,0.12)",
    subcategories: [
      {
        name: "الأسماك",
        items: [
          { name: "ثعابين",              desc: "ثعابين البحر الطازجة",             price: "950" },
          { name: "موسى",                desc: "سمك موسى الطازج",                  price: "1570" },
          { name: "بربوني (سلطان إبراهيم)", desc: "سمك البربوني سلطان إبراهيم",  price: "880" },
          { name: "قاروص",               desc: "سمك القاروص الطازج",              price: "950" },
          { name: "لوت",                 desc: "سمك اللوت الطازج",                price: "390" },
          { name: "وقار بلدي",           desc: "سمك الوقار البلدي الطازج",        price: "1450" },
          { name: "دنيس",                desc: "سمك الدنيس الطازج",               price: "950" },
          { name: "بوري",                desc: "سمك البوري الطازج",               price: "390" },
          { name: "بلطي",                desc: "سمك البلطي الطازج",               price: "210" },
          { name: "سبيط بلدي",           desc: "سبيط بلدي طازج",                  price: "785" },
          { name: "سهيلة",               desc: "سمك السهيلة الطازج",              price: "850" },
          { name: "مكرونة بلدي سويسي",   desc: "سمك المكرونة البلدي السويسي",    price: "315" },
        ]
      }
    ]
  },
  {
    id: "hall-soups",
    name: "منيو الصالة — الشوربات",
    icon: "🥣",
    desc: "شوربات بحرية غنية ودافئة",
    color: "rgba(239,68,68,0.1)",
    subcategories: [
      {
        name: "الشوربات",
        items: [
          { name: "شوربة سي فوود عادية",       desc: "شوربة مأكولات بحرية عادية",          price: "270" },
          { name: "شوربة جمبري فقط",           desc: "شوربة جمبري خاصة",                   price: "280" },
          { name: "ملوخية بالجمبري",           desc: "ملوخية طازجة مع الجمبري",            price: "135" },
          { name: "شوربة فياجرا حمراء",        desc: "شوربة فياجرا باللون الأحمر",         price: "50" },
          { name: "شوربة سي فود مخلية",        desc: "شوربة مأكولات بحرية مخلية",          price: "270" },
          { name: "شوربة الشيف (جمبري + بطارخ)", desc: "شوربة الشيف المميزة بالجمبري والبطارخ", price: "290" },
          { name: "شوربة جندوفلي",             desc: "شوربة الجندوفلي البحري",             price: "170" },
        ]
      }
    ]
  },
  {
    id: "hall-salads",
    name: "منيو الصالة — السلطات",
    icon: "🥗",
    desc: "سلطات طازجة ومتنوعة",
    color: "rgba(34,197,94,0.1)",
    subcategories: [
      {
        name: "السلطات",
        items: [
          { name: "طحينة",                    desc: "طحينة بلدية",                                 price: "35" },
          { name: "طماطم متبلة",              desc: "طماطم طازجة متبلة",                          price: "50" },
          { name: "كولسلو",                   desc: "كولسلو طازج",                                price: "35" },
          { name: "سلطة الشيف (جمبري + سبيط)", desc: "سلطة الشيف المميزة بالجمبري والسبيط",     price: "135" },
          { name: "سلطة رنجة بالبصل",         desc: "سلطة رنجة مع بصل طازج",                    price: "107" },
          { name: "بابا غنوج",                desc: "بابا غنوج مشوي",                            price: "35" },
          { name: "راهب",                     desc: "سلطة الراهب",                               price: "35" },
          { name: "توميه",                    desc: "توميه طازج",                                price: "35" },
          { name: "حمص بالطحينة",             desc: "حمص مع الطحينة",                            price: "35" },
          { name: "زبادي الخيار والنعناع",    desc: "زبادي بارد مع خيار ونعناع",                price: "35" },
          { name: "باذنجان مقلي طرنشاط",     desc: "باذنجان مقلي",                              price: "35" },
          { name: "بنجر",                     desc: "سلطة بنجر",                                price: "35" },
          { name: "سلطة خضراء بلدي",          desc: "سلطة خضراء بلدية",                         price: "45" },
          { name: "سلطة خضراء طرنشاط",       desc: "سلطة خضراء طرنشاط",                       price: "56" },
          { name: "سلطة فتوش",                desc: "سلطة فتوش طازجة",                          price: "90" },
          { name: "سلطة كافيار المميز",       desc: "سلطة كافيار فاخر",                         price: "95" },
        ]
      }
    ]
  },
  {
    id: "hall-crustaceans",
    name: "منيو الصالة — القشريات",
    icon: "🦞",
    desc: "قشريات بحرية فاخرة",
    color: "rgba(239,68,68,0.12)",
    subcategories: [
      {
        name: "القشريات",
        items: [
          { name: "استاكوزا",     desc: "مخلية بالجبنة الموزريلا - مشوية سنجاري بالزبدة",                  price: "2100" },
          { name: "كابوريا",      desc: "مشوي جريل - مسلوقة بالخلطة - مخلية",                             price: "670" },
          { name: "جندوفلي بلدي", desc: "إسكندراني بالخلطة - ثوم وكرفس بالكريمة - زيت وليمون",           price: "560" },
          { name: "بلح البحر",   desc: "ثوم وكرفس كريمة - ثوم وكرفس بدون كريمة",                        price: "670" },
          { name: "جندوفلي عرايس", desc: "ثوم وكرفس كريمة - زيت وليمون",                               price: "500" },
          { name: "سالمون",       desc: "زيت وليمون - مشوي جريل - مشوي بالزبدة",                         price: "1000" },
          { name: "بطارخ بلدي",  desc: "زيت وليمون - مشوي جريل - مشوي بالزبدة - طاجن",                  price: "1600" },
        ]
      }
    ]
  },
  {
    id: "hall-trays",
    name: "منيو الصالة — الصواني",
    icon: "🍱",
    desc: "صواني الأسماك الكاملة بالبطاطس",
    color: "rgba(168,85,247,0.1)",
    subcategories: [
      {
        name: "الصواني",
        items: [
          { name: "قاروص سنجاري بالبطاطس",    desc: "قاروص طازج بالبطاطس",      price: "1000" },
          { name: "وقار بلدي بالبطاطس",        desc: "وقار بلدي بالبطاطس",       price: "1500" },
          { name: "دنيس بالبطاطس",             desc: "دنيس طازج بالبطاطس",       price: "1000" },
          { name: "لوت سنجاري بالبطاطس",       desc: "لوت بالبطاطس",             price: "450" },
          { name: "ثعابين صينية بالبطاطس",     desc: "ثعابين البحر بالبطاطس",    price: "1000" },
          { name: "بوري سنجاري بالبطاطس",      desc: "بوري سنجاري بالبطاطس",    price: "450" },
        ]
      }
    ]
  },
  {
    id: "hall-dishes",
    name: "منيو الصالة — الأطباق",
    icon: "🍽️",
    desc: "أطباق متنوعة من مأكولات البحر",
    color: "rgba(245,158,11,0.1)",
    subcategories: [
      {
        name: "الأطباق",
        items: [
          { name: "فتة سي فود - خل وثوم",     desc: "فتة مأكولات البحر بالخل والثوم",           price: "325" },
          { name: "كلماري محشي سي فود",        desc: "حبار محشو بخليط مأكولات البحر",           price: "335" },
          { name: "فيليه محشي سي فود",         desc: "فيليه سمك محشو بمأكولات البحر",           price: "335" },
          { name: "شيش طاووك",                 desc: "شيش طاووك مشوي",                          price: "225" },
          { name: "طبق الشاطئ مقلي / مشوي",   desc: "فيليه - سبيط - جمبري",                   price: "315" },
          { name: "فيليه مشوي على الفحم",      desc: "فيليه طازج مشوي على الفحم",              price: "180" },
          { name: "سبيط مشوي على الفحم",       desc: "سبيط بلدي مشوي على الفحم",              price: "280" },
          { name: "كفتة جمبري",                desc: "مقلي - مشوي على الجريل - بالصوص",        price: "280" },
          { name: "كفتة سمك",                  desc: "مشوي على الجريل - بالصوص",               price: "225" },
          { name: "بسبوسة بطارخ",              desc: "بسبوسة مع البطارخ الفاخر",               price: "300" },
        ]
      }
    ]
  },
  {
    id: "hall-feast",
    name: "منيو الصالة — الوليمة",
    icon: "🎉",
    desc: "وليمات ضخمة للعائلة والمجموعات",
    color: "rgba(212,168,83,0.12)",
    subcategories: [
      {
        name: "الوليمة",
        items: [
          { name: "وليمة فردين",      desc: "١٢ جمبري - ٤ مقلي - ٤ جريل - ٤ بترفلاي - ٤ فيليه + ٤ كفتة + ١٠٠ جرام سبيط - ٥ بلح البحر - طحينة وبابا غنوج وراهب - روشة أرز + سلطات", price: "895" },
          { name: "وليمة أربع أفراد", desc: "٨ فيليه - ٨ كفتة - ٢٠٠ جرام سبيط + ٢ كابوريا + ١٦ بلح البحر + مفروشة أرز + سلطات طحينة وبابا غنوج وراهب", price: "1790" },
          { name: "صينية الشاطئ",     desc: "٢ بلطي مقلي - ٣٠٠ جرام جمبري مقلي - ٣٠٠ فيليه مقلي - ٢ كابوريا مشوي - ٢ شوربة حمراء - ٢ سلطة", price: "1000" },
          { name: "صينية السعادة",     desc: "٢ بوري سنجاري + ٢ بلطي زيت وليمون + ١/٤ جمبري وسط مقلي + ١ جمبري وسط جريل + ١ جمبري وسط بترفلاي + ١٢ جندوفلي زيت وليمون + طاجن جمبري وسبيط أحمر + سبيط ١/٤ مقلي كرسبي + أرز سادة بعدد أفراد + ٥ سلطة", price: "2240" },
          { name: "صينية الشيف رضا",   desc: "سمكة بوري سنجاري + ٨ جمبري مقلي راس وديل + ٨ جمبري جريل + ٢ كابوريا كبير + رز + ٢ سلطة", price: "950" },
        ]
      }
    ]
  },
  {
    id: "hall-rice",
    name: "منيو الصالة — أرز الشاطئ",
    icon: "🍚",
    desc: "أرز ومعكرونة بمأكولات البحر",
    color: "rgba(34,197,94,0.08)",
    subcategories: [
      {
        name: "أرز الشاطئ",
        items: [
          { name: "أرز جمبري مقلي",              desc: "أرز مع جمبري مقلي",              price: "160" },
          { name: "أرز جمبري مدفون",             desc: "أرز مع جمبري مدفون",            price: "160" },
          { name: "أرز سي فود",                  desc: "أرز مع مكس مأكولات البحر",       price: "280" },
          { name: "أرز سي فود مايونيز",          desc: "أرز سي فود مع صوص المايونيز",  price: "290" },
          { name: "أرز صيادية",                  desc: "أرز صيادية بالخلطة",            price: "50" },
          { name: "أرز مكس مشوي",                desc: "أرز مكس مشوي",                  price: "280" },
          { name: "أرز مكس مقلي",                desc: "أرز مكس مقلي",                  price: "280" },
          { name: "أرز جمبري مكسرات",            desc: "أرز مع جمبري والمكسرات",        price: "175" },
          { name: "فتة سي فود",                  desc: "فتة مأكولات البحر",              price: "325" },
          { name: "أرز أبيض كاري",               desc: "أرز أبيض مع صوص الكاري",        price: "200" },
          { name: "مكرونة سي فود كريمة",         desc: "مكرونة مع مأكولات البحر والكريمة", price: "325" },
          { name: "مكرونة سي فود حمراء",         desc: "مكرونة مع صوص الطماطم",         price: "325" },
        ]
      }
    ]
  },
];

/* ================================================================
   HELPERS — FLATTEN ALL ITEMS
================================================================ */
function flattenItems(category) {
  const items = [];
  category.subcategories.forEach(sub => {
    sub.items.forEach(item => {
      items.push({ ...item, categoryId: category.id, categoryName: category.name });
    });
  });
  return items;
}

function allItems() {
  return MENU_DATA.flatMap(cat => flattenItems(cat));
}

/* Icon map for items */
const ICON_MAP = {
  "جمبري": "🦐", "سبيط": "🦑", "كابوريا": "🦀", "استاكوزا": "🦞",
  "سالمون": "🐠", "بلطي": "🐟", "بوري": "🐡", "قاروص": "🐟",
  "دنيس": "🐟", "وقار": "🐟", "ثعابين": "🐍", "موسى": "🐡",
  "بربوني": "🐟", "لوت": "🐟", "سهيلة": "🐟", "مكرونة": "🍝",
  "شوربة": "🥣", "ملوخية": "🥬", "سلطة": "🥗", "تبولة": "🥗",
  "فتوش": "🥗", "أرز": "🍚", "طاجن": "🫕", "وليمة": "🎉",
  "صينية": "🍱", "ساندويتش": "🥪", "كفتة": "🍢", "فيليه": "🍽️",
  "بطارخ": "🥚", "كلماري": "🦑", "بلح البحر": "🐚", "جندوفلي": "🦐",
  "بكلاويز": "🦐", "فتة": "🍲", "طحينة": "🫙", "بابا غنوج": "🍆",
  "كافيار": "🥚", "شيش": "🍢", "كولسلو": "🥗", "بسبوسة": "🍮",
};

function getItemIcon(name) {
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (name.includes(key)) return icon;
  }
  return "🍽️";
}

/* ================================================================
   SPA ROUTER
================================================================ */
let currentPage = "home";
let currentCategoryId = null;

function navigate(page, categoryId = null) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active", "fade-in"));

  currentPage = page;
  currentCategoryId = categoryId;

  let targetId = `page-${page}`;
  if (page === "category") targetId = "page-category";

  const target = document.getElementById(targetId);
  if (target) {
    target.classList.add("active");
    setTimeout(() => target.classList.add("fade-in"), 10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update nav active states
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.dataset.page === page);
  });
  document.querySelectorAll(".bn-item").forEach(b => {
    b.classList.toggle("active", b.dataset.page === page);
  });

  // Render page content
  if (page === "category" && categoryId) {
    renderCategoryPage(categoryId);
  }
}

/* ================================================================
   NAV LINK LISTENERS
================================================================ */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

document.getElementById("hamburger").addEventListener("click", function() {
  this.classList.toggle("open");
  document.getElementById("navLinks").classList.toggle("open");
});

/* ================================================================
   NAVBAR SCROLL
================================================================ */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

/* ================================================================
   RENDER: HOME — POPULAR GRID
================================================================ */
function renderPopularGrid() {
  const grid = document.getElementById("popularGrid");
  if (!grid) return;

  // Show first 4 categories as preview
  const preview = MENU_DATA.slice(0, 4);
  grid.innerHTML = preview.map((cat, i) => `
    <div class="cat-card" onclick="navigate('category','${cat.id}')" style="animation-delay:${i*0.1}s">
      <div class="cat-img-area" style="background:linear-gradient(135deg,${cat.color},rgba(14,165,233,0.04))">
        <span>${cat.icon}</span>
      </div>
      <div class="cat-body">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="cat-count">${flattenItems(cat).length} صنف</span>
      </div>
      <span class="cat-arrow">←</span>
    </div>
  `).join("");
}

/* ================================================================
   RENDER: MENU PAGE — CATEGORIES GRID
================================================================ */
function renderCategoriesGrid() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = MENU_DATA.map((cat, i) => `
    <div class="cat-card" onclick="navigate('category','${cat.id}')" style="animation-delay:${i*0.07}s">
      <div class="cat-img-area" style="background:linear-gradient(135deg,${cat.color},rgba(14,165,233,0.04))">
        <span>${cat.icon}</span>
      </div>
      <div class="cat-body">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="cat-count">${flattenItems(cat).length} صنف</span>
      </div>
      <span class="cat-arrow">←</span>
    </div>
  `).join("");
}

/* ================================================================
   RENDER: CATEGORY PAGE
================================================================ */
function renderCategoryPage(categoryId) {
  const cat = MENU_DATA.find(c => c.id === categoryId);
  if (!cat) return;

  document.getElementById("categoryTitle").textContent = cat.name;
  document.getElementById("categoryDesc").textContent = cat.desc;

  const grid = document.getElementById("categoryItemsGrid");
  const items = flattenItems(cat);

  grid.innerHTML = items.map((item, i) => buildItemCard(item, i)).join("");
}

/* ================================================================
   BUILD ITEM CARD HTML
================================================================ */
function buildItemCard(item, index = 0) {
  const icon = getItemIcon(item.name);
  const priceDisplay = item.market
    ? `<span class="price-market">على حسب سعر اليوم</span>`
    : `<span class="item-price">${item.price}<span class="currency"> ج.م</span></span>`;

  return `
    <div class="item-card" onclick="openItemModal(${JSON.stringify(JSON.stringify(item))})" style="animation-delay:${Math.min(index,15)*0.05}s">
      <div class="item-img-area">${icon}</div>
      <div class="item-body">
        <h3>${item.name}</h3>
        <p class="item-desc">${item.desc || ""}</p>
        <div class="item-footer">
          ${priceDisplay}
          <span class="item-btn">←</span>
        </div>
      </div>
    </div>
  `;
}

/* ================================================================
   ITEM MODAL
================================================================ */
function openItemModal(itemJson) {
  const item = JSON.parse(itemJson);
  const icon = getItemIcon(item.name);

  document.getElementById("modalImgPlaceholder").textContent = icon;
  document.getElementById("modalCategory").textContent = item.categoryName || "";
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalDesc").textContent = item.desc || "مأكولات بحرية طازجة يومياً";

  const priceEl = document.getElementById("modalPrice");
  if (item.market) {
    priceEl.textContent = "السعر على حسب اليوم";
    priceEl.style.fontSize = "1rem";
  } else {
    priceEl.innerHTML = `${item.price} <span style="font-size:0.85rem;color:var(--text-muted);font-weight:600">ج.م</span>`;
    priceEl.style.fontSize = "1.6rem";
  }

  document.getElementById("itemModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  document.getElementById("itemModal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeModal(e) {
  if (e.target === document.getElementById("itemModal")) closeItemModal();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeItemModal();
});

/* ================================================================
   SEARCH
================================================================ */
function handleSearch() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsWrap = document.getElementById("searchResults");
  const catsView = document.getElementById("categoriesView");
  const grid = document.getElementById("searchResultsGrid");

  if (!query) {
    resultsWrap.style.display = "none";
    catsView.style.display = "block";
    grid.innerHTML = "";
    return;
  }

  const results = allItems().filter(item =>
    item.name.includes(query) || (item.desc && item.desc.includes(query))
  );

  resultsWrap.style.display = "block";
  catsView.style.display = "none";

  if (results.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>لا توجد نتائج</h3><p>جرب البحث بكلمة أخرى</p></div>`;
  } else {
    grid.innerHTML = results.map((item, i) => buildItemCard(item, i)).join("");
  }
}

/* ================================================================
   SCROLL ANIMATIONS (data-aos)
================================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

function initAOS() {
  document.querySelectorAll("[data-aos]").forEach(el => observer.observe(el));
  document.querySelectorAll(".feature-card").forEach(el => observer.observe(el));
}

/* ================================================================
   TOAST
================================================================ */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ================================================================
   INIT
================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderPopularGrid();
  renderCategoriesGrid();
  initAOS();

  // Render category page on first navigate to "category"
  // (handled in navigate())

  // Stagger feature cards
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
});
