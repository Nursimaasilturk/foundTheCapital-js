const wordList = [
  {
    word: "ankara",
    hint: "Türkiye'nin başkenti",
  },
  {
    word: "kabil",
    hint: "Afganistan'ın başkenti",
  },
  {
    word: "cezayir",
    hint: "Cezayir'in başkenti",
  },
  {
    word: "erivan",
    hint: "Ermenistan'ın başkenti",
  },
  {
    word: "viyana",
    hint: "Avusturya'nın başkenti",
  },
  {
    word: "nassau",
    hint: "Bahamalar'ın başkenti",
  },
  {
    word: "manama",
    hint: "Bahreyn'in başkenti",
  },
  {
    word: "bridgetown",
    hint: "Barbados'un başkenti",
  },
  {
    word: "brüksel",
    hint: "Belçika'nın başkenti",
  },
  {
    word: "saraybosna",
    hint: "Bosna-Hersek'in başkenti",
  },
  {
    word: "sofya",
    hint: "Bulgaristan'ın başkenti",
  },
  {
    word: "ottowa",
    hint: "Kanada'nın başkenti",
  },
  {
    word: "encemine",
    hint: "Çad'ın başkenti",
  },
  {
    word: "santiago",
    hint: "Şili'nin başkenti",
  },
  {
    word: "pekin",
    hint: "Çin'in başkenti",
  },
  {
    word: "bogota",
    hint: "Kolombiya'nın başkenti",
  },
  {
    word: "zagreb",
    hint: "Hırvatistan'ın başkenti",
  },
  {
    word: "havana",
    hint: "Küba'nın başkenti",
  },
  {
    word: "lefkoşa",
    hint: "Kıbrıs'ın başkenti",
  },
  {
    word: "prag",
    hint: "Çek Cumhuriyeti'nin başkenti",
  },
  {
    word: "kopenhag",
    hint: "Danimarka'nın başkenti",
  },
  {
    word: "cibuti",
    hint: "Cibuti'nin başkenti",
  },
  {
    word: "quito",
    hint: "Ekvador'un başkenti",
  },
  {
    word: "kahire",
    hint: "Mısır'ın başkenti",
  },
  {
    word: "tallinn",
    hint: "Estonya'nın başkenti",
  },
  {
    word: "suva",
    hint: "Fiji'in başkenti",
  },
  {
    word: "paris",
    hint: "Fransa'nın başkenti",
  },
  {
    word: "helsinki",
    hint: "Finlandiya'nın başkenti",
  },
  {
    word: "tiflis",
    hint: "Gürcistan'nın başkenti",
  },
  {
    word: "berlin",
    hint: "Almanya'nın başkenti",
  },
  {
    word: "atina",
    hint: "Yunanistan'ın başkenti",
  },
  {
    word: "budapeşte",
    hint: "Macaristan'ın başkenti",
  },
  {
    word: "reykjavik",
    hint: "İzlanda'nın başkenti",
  },
  {
    word: "delhi",
    hint: "Hindistan'ın başkenti",
  },
  {
    word: "cakarta",
    hint: "Endonezya'nın başkenti",
  },
  {
    word: "tahran",
    hint: "İran'ın başkenti",
  },
  {
    word: "bağdat",
    hint: "Irak'ın başkenti",
  },
  {
    word: "dublin",
    hint: "İrlanda'nın başkenti",
  },
  {
    word: "telaviv",
    hint: "İsrail'in başkenti",
  },
  {
    word: "roma",
    hint: "İtalya'nın başkenti",
  },
  {
    word: "kingston",
    hint: "Jamaika'nın başkenti",
  },
  {
    word: "tokyo",
    hint: "Japonya'nın başkenti",
  },
  {
    word: "amman",
    hint: "Ürdün'ün başkenti",
  },
  {
    word: "astana",
    hint: "Kazakistan'ın başkenti",
  },
  {
    word: "nairobi",
    hint: "Kenya'nın başkenti",
  },
  {
    word: "seul",
    hint: "Güney Kore'nin başkenti",
  },
  {
    word: "kuveyt",
    hint: "Kuveyt'in başkenti",
  },
  {
    word: "bişkek",
    hint: "Kırgızistan'ın başkenti",
  },
  {
    word: "riga",
    hint: "Letonya'nın başkenti",
  },
  {
    word: "beyrut",
    hint: "Lübnan'ın başkenti",
  },
  {
    word: "trablus",
    hint: "Libya'nın başkenti",
  },
  {
    word: "vilnius",
    hint: "Litvanya'nın başkenti",
  },
  {
    word: "üsküp",
    hint: "Makedonya'nın başkenti",
  },
  {
    word: "male",
    hint: "Maldivler'in başkenti",
  },
  {
    word: "kişinev",
    hint: "Moldova'nın başkenti",
  },
  {
    word: "ulanbatur",
    hint: "Moğolistan'ın başkenti",
  },
  {
    word: "rabat",
    hint: "Fas'ın başkenti",
  },
  {
    word: "katmandu",
    hint: "Nepal'in başkenti",
  },
  {
    word: "amsterdam",
    hint: "Hollanda'nın başkenti",
  },
  {
    word: "wellington",
    hint: "Yeni Zelanda'nın başkenti",
  },
  {
    word: "abuja",
    hint: "Nijerya'nın başkenti",
  },
  {
    word: "oslo",
    hint: "Norveç'in başkenti",
  },
  {
    word: "muskat",
    hint: "Umman'ın başkenti",
  },
  {
    word: "islamabad",
    hint: "Pakistan'ın başkenti",
  },
  {
    word: "lima",
    hint: "Peru'nun başkenti",
  },
  {
    word: "manila",
    hint: "Filipinler'in başkenti",
  },
  {
    word: "varşova",
    hint: "Polonya'nın başkenti",
  },
  {
    word: "lizbon",
    hint: "Portekiz'in başkenti",
  },
  {
    word: "doha",
    hint: "Katar'ın başkenti",
  },
  {
    word: "moskova",
    hint: "Rusya'nın başkenti",
  },
  {
    word: "riyad",
    hint: "Suudi Arabistan'ın başkenti",
  },
  {
    word: "dakar",
    hint: "Senegal'in başkenti",
  },
  {
    word: "belgrad",
    hint: "Sırbistan'ın başkenti",
  },
  {
    word: "singapur",
    hint: "Singapur'un başkenti",
  },
  {
    word: "madrid",
    hint: "İspanya'nın başkenti",
  },
  {
    word: "colombo",
    hint: "Sri Lanka'nın başkenti",
  },
  {
    word: "stokholm",
    hint: "İsveç'in başkenti",
  },
  {
    word: "bern",
    hint: "İsviçre'nin başkenti",
  },
  {
    word: "şam",
    hint: "Suriye'nin başkenti",
  },
  {
    word: "bangkok",
    hint: "Tayland'ın başkenti",
  },
  {
    word: "tunus",
    hint: "Tunus'un başkenti",
  },
  {
    word: "aşkabat",
    hint: "Türkmenistan'ın başkenti",
  },
  {
    word: "kiev",
    hint: "Ukrayna'nın başkenti",
  },
  {
    word: "londra",
    hint: "Birleşik Krallık'ın başkenti",
  },
  {
    word: "washington",
    hint: "ABD'nin başkenti",
  },
  {
    word: "taşkent",
    hint: "Özbekistan'ın başkenti",
  },
  {
    word: "sana",
    hint: "Yemen'in başkenti",
  },
  {
    word: "harare",
    hint: "Zimbabve'nin başkenti",
  },
  {
    word: "lusaka",
    hint: "Zambiya'nın başkenti",
  },
  {
    word: "caracas",
    hint: "Venezuela'nın başkenti",
  },
];
