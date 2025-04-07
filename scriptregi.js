//image: "kep",
let questions = [
     {
        question: "Hány összetevőből áll a hagyományos Mojito koktél ?",    //1
        answers: ["5", "4", "6", "3"],
        correctAnswer: 0, 
    },
    {
        question: "Hány kalória van egy kiló csirkemellben ?",
        answers: ["1000 kcal", "1200 kcal", "1400 kcal", "1600 kcal"],      //2
        correctAnswer: 1
    },
    {
        question: "Melyik betegség okozója a C-vitamin hiány ?",
        answers: ["májelégtelenség", "skorbut", "fekete himlő", "farkasvakság"],      //2
        correctAnswer: 1
    },
    {
        question: "Melyik egy mesterséges nyelv az alábbiak közül ?",
        answers: ["dothraki", "tamil", "manysi", "breton"],      //2
        correctAnswer: 0
    },
    {
        question: "Milyen ˝farkú˝ cserép létezik az alábbik közül ?",
        answers: ["tehén", "hód", "gyík", "ló"],      //2
        correctAnswer: 1
    },
    {
        question: "Milyen fajta ételt kap, aki a currywurst nevű német specialitást kéri ?",
        answers: ["sültkolbászt fűszeres ketchuppal", "sajtos nokedlit", "savanyú káposztát", "kolbászos levest"],      //2
        correctAnswer: 0
    },
    {
        question: "Milyen állat a norvégiai lemming ?",
        answers: ["vízimadár", "rágcsáló", "párosujjú patás", "főemlős"],      //2
        correctAnswer: 1
    },
    {
        question: "Mi a flegori ?",
        answers: ["hordó", "terasz", "ruhateregető", "függönykarnis"],      //2
        correctAnswer: 2
    },
    {
        question: "Mi a neve a higany más fémekkel alkotott ötvözet ?",
        answers: ["amalgám", "analóg", "aszpartám", "agáma"],      //2
        correctAnswer: 0
    },
    
    {
        question: "Hol közlekedik a gondola ?",
        answers: ["levegőben", "föld alatt", "földön", "vízen"],      //2
        correctAnswer: 3
    },
    {
        question: "Melyik NEM egy létező szolmizációs hang az alábbiak közül ?",
        answers: ["mi", "sző", "ré", "dó"],      //2
        correctAnswer: 1
    },
    {
        question: "Milyen mackók szerepeltek a Comedy Central 2008-ban indult bábjátéksorozatában ?",
        answers: ["puffogós", "szotyizós", "susogós", "gurulós"],      //2
        correctAnswer: 2
    },
    {
        question: "Melyik országból származik a ravioli nevű tésztaétel ?",
        answers: ["Spanyolország", "Franciaország", "Svájc", "Olaszország"],      //2
        correctAnswer: 3
    },
    {
        question: "Mi a gyárilag írt CD-lemez megnevezése ?",
        answers: ["CD-RAM", "CD-RW", "CD-R", "CD-ROM"],      //2
        correctAnswer: 1
    },
    {
        question: "Mi a placebo ?",
        answers: ["kis fakunyhó", "négyszögletű tér", "erjesztett ital", "hatóanyagmentes gyógyszer"],      //2
        correctAnswer: 3
    },
    {
        question: "Milyen eredetű étel a rokfort sajt ?",
        answers: ["Görög", "Francia", "Magyar", "Olasz"],      //2
        correctAnswer: 1
    },
    {
        question: "Hogy nevezik másképp, amikor megnyomjuk a gombot a fényképezőgépen ?",
        answers: ["fókuszálás", "exitálás", "exponálás", "zoomolás"],      //2
        correctAnswer: 2
    },
    {
        question: "Mi a pilács ?",
        answers: ["kerítés", "kantár", "pacsirta", "lámpa"],      //2
        correctAnswer: 3
    },
    {
        question: "Mi a cibere ?",
        answers: ["A húsleves tetején lévő zsiradék", "összeérlelt rodhadt/túlérett gyümölcsök", "A lekvárfőzéskor levet ereszt a gyümölcs", "megpakolt táska/bőrönd"],      //2
        correctAnswer: 2
    },
    {
        question: "Mi a szőkekóla ?",
        answers: ["narancs üdítő", "gyömbér üdítő", "szőke színű kóla", "szőke hajú ember kólát iszik"],      //2
        correctAnswer: 0
    },
    {
        question: "Milyen szög a 120°-os szög ?",
        answers: ["derékszög", "tompaszög", "hegyesszög", "homorúszög"],      //2
        correctAnswer: 1
    },
    {
        question: "Melyik versben szerepelnek ezek a szavak? Évek, arcképed, elsuhant, nyakkendő, összetépett ?",
        answers: ["Ady Endre: Hazamegyek a falumba", "Ady Endre: Elbocsátó, szép üzenet", "Juhász Gyula: Anna örök", "Radnóti Miklós: Levél a hitveshez"],      //2
        correctAnswer: 2
    },
    {
        question: "Milyen színű a kecsleméti Cifrapalota ablaka ?",
        answers: ["zöld", "kék", "piros", "sárga"],      //2
        correctAnswer: 0 
    },
    {
        question: "Mit jelent az ablaktőc ?",
        answers: ["ablakkeret", "ablakkilincs", "ablaküveg", "ablakpárkány"],      //2
        correctAnswer: 3
    },
    {
        question: "Milyen falatnak nevezik a sült vagy főtt baromfi farát, farcsíkját ?",
        answers: ["pápa", "báró", "püspök", "érsek"],      //2
        correctAnswer: 2
    },
    {
        question: "Mi a pacuha ?",
        answers: ["széttépett rongy", "rendezetlen ágy", "fészer", "rendetlen öltözékű"],      //2
        correctAnswer: 3
    },
    {
        question: "Melyik görög mitológiai alak az alábbiak közül ?",
        answers: ["Flora", "Prométheusz", "Pluto", "Vesta"],      //2
        correctAnswer: 1
    },
    {
        question: "Mi a híres magyar sportoló keresztneve ? Mohamed...",
        answers: ["Aida", "Danuta", "Olga", "Anita"],      //2
        correctAnswer: 0
    },
    {
        question: "Melyik ország fővárosa Pozsony ?",
        answers: ["Szlovénia", "Horvátország", "Szlovákia", "Lengyelország"],      //2
        correctAnswer: 2
    },
    {
        question: "Hogyan írjuk helyesen ?",
        answers: ["turós palacsinta", "túros palacsinta", "túróspalacsinta", "túrós palacsinta"],      //2
        correctAnswer: 3
    },
    {
        question: "Kit játszott Orlando Bloom a Gyűrűk Ura trilógiában ?",
        answers: ["Csavardi Samu", "Legolas", "Galadriel", "Gandalf"],      //2
        correctAnswer: 1 
    },
    {
        question: "Melyik desszert az alábbi olasz ételek közül ?",
        answers: ["minestrone", "cannelloni", "panna cotta", "frittata"],      //2
        correctAnswer: 2
    },
    {
        question: "Mi a konfitálás ?",
        answers: ["Zsír nélkül sütés", "Lassú tűzön párolás", "Bő zsírban hirtelen sütés", "Bő zsírban, lehetőleg saját zsírjában, alacsony hőmérsékleten, lassan sütés"],      //2
        correctAnswer: 3
    },
    {
        question: "Minek a vegyjele a Cu ?",
        answers: ["réz", "ezüst", "cink", "kén"],      //2
        correctAnswer: 0
    },
    {
        question: "Hogy nevezik másképpen a Morse-abc rövid jelét ?",
        answers: ["mi", "ti", "fisz", "tá"],      //2
        correctAnswer: 1
    },
    {
        question: "Milyen pénznemet használtak Ausztriában az euró bevezetése előtt ?",
        answers: ["Márka", "Dollár", "Schilling", "Font"],      //2
        correctAnswer: 2
    },
    {
        question: "Melyik film szereplője szeretne gombás hamburgert (majd inkább hot dogot) enni ?",
        answers: ["Ízlések és pofonok", "Kisasszonyok", "Üvegtigris", "Nyugati nyaralás"],      //2
        correctAnswer: 1
    },
    {
        question: "Melyik mondás a helyes ?",
        answers: ["Dobbal nem lehet egeret fogni", "Dobbal nem lehet gitárt fogni", "Dobbal nem lehet nyulat fogni", "Dobbal nem lehet verebet fogni"],      //2
        correctAnswer: 3
    },
    {
        question: "Kiről vagy miről kapta a nevét a rigó jancsi nevű sütemény ?",
        answers: ["Rigó János cigányprímásról", "egy népmesében szereplő rigóról", "Dobos József cukrászmester egyetlen fiáról", "a rigókról, mivel kezdetben rigótojással készült"],      //2
        correctAnswer: 0
    },
    {
        question: "Mi a pecu?",
        answers: ["éléskamra", "hálószoba", "főzőfülke", "fészer"],      //2
        correctAnswer: 3
    },
    {
        question: "Mi a góré?",
        answers: ["kukorica, takarmány tároló helye", "szüretelt gyümölcsök tároló helye", "disznósól, fáskamra","Ezek közül egyik sem"],      //2
        correctAnswer: 0
    },
     {
        question: "A klasszikus szabványosított EPAL eur raklap 78 szögből, kilenc tömbből és összesen hány deszkából áll?",    //1
        answers: ["11", "12", "13", "14"],
        correctAnswer: 1, 
    },
    {
        question: "Melyik tenger kapta a nevét arról a mitológiai királyról, aki állítólag belevetette magát?",
        answers: ["Adriai-tenger", "Égei-tenger", "Kaszpi-tenger", "Jón-tenger"],      //2
        correctAnswer: 2,
        
    },
    {
        question: "Melyik kémiai elem teszi ki az emberi test több mint felét?",    //3
        answers: ["Oxigén", "Vas", "Kálcium", "Szénhidrát"],
        correctAnswer: 0,
        
    },
    {
        question: "Mikor lett a nagyar országgyűlések itézményes székhelye pozsony?",
        answers: ["a tatárjárást követő évben", "A mohácsi vész évében", "1844-es nyelvtörvény után", "Mária Terézia megkoronázása után"],      //4
        correctAnswer: 2,
        
    },
    {
        question: "Hány kockából áll egy rubikkocka?",    //5
        answers: ["28", "32", "24", "26"],
        correctAnswer: 3, 
    },
    {
        question: "Melyik bolygó kapta a nevét a római főistenről?",
        answers: ["Vénusz", "Jupiter", "Zeusz", "Szaturnusz"],      //6
        correctAnswer: 1,
        
    },
    {
        question: "Ki irta az egri csillagokat?",    //7
        answers: ["Gárdonyi Géza", "Jókai Mór", "Móricz Zsigmond", "Mikszáth Kálmán"],
        correctAnswer: 0, 
    },
    {
        question: "Melyik NEM tartozik a  Nagy-tavak közé Észak-Amerikában?",
        answers: ["Huron-tó", "Erie-tó", "Huggyan-tó", "Ontario-tó"],      //8
        correctAnswer: 2,
        
    },
    {
        question: "Melyik ország fővárosa Wellington?",    //9
        answers: ["Ausztália", "Új-Záland", "Dél-Amerika", "Kanada"],
        correctAnswer: 1, 
    },
    {
        question: "Melyik mester gyárt kereket?",
        answers: ["kádár", "bodnár", "bognár", "gúnár"],      //10
        correctAnswer: 2,
        
    },
    {
        question: "Melyik filmben játszik együtt Bud Spencer és Terence Hill?",    //11
        answers: ["Banános Joe", "Sheriff az égből", "Én a vizilovakkal vagyok", "Nevem: Senki"],
        correctAnswer: 2, 
    },
    {
        question: "Folytassa: „Szita szita péntek, szerelem csütörtök”?",
        answers: ["vagyon, de mi haszna vagyon", "De ékes a lány dereka", "Ice-ruca Rebeka", "dobszerda"],      //12
        correctAnswer: 3,
        
    },
    {
        question: "Mi a kenyérlángos népies elnevezése?",    //13
        answers: ["kandalló", "pantalló", "lángoló", "langalló"],
        correctAnswer: 3, 
    },
    {
        question: "Melyik ezek közül egy létező főváros neve?",
        answers: ["Bili", "Dili", "Duli", "Buli"],      //14
        correctAnswer: 1,
        
    },
    {
        question: "Ezek közül mi készülhet kasmírból?",    //15
        answers: ["tükör", "kendő", "üveg", "fésű"],
        correctAnswer: 1, 
    },
    {
        question: "Kik hívják sejknek a vezetőiket?",
        answers: ["Indiánok", "Kirgizek", "Arabok", "Busmanok"],      //16
        correctAnswer: 2,
        
    },
    {
        question: "Az Üvegtigris cimű filmben minek volt a tulajdonosa Rudolf Péter?",    //17
        answers: ["hotel", "éllatkert", "büféautó", "üveggyár"],
        correctAnswer: 2, 
    },
    {
        question: "Mely országok találhatók a korábbi Núbia területén?",
        answers: ["Nigéria-Kamerun", "India-Pakisztán", "Egyiptom-Szudán", "Irán-Irak"],      //18
        correctAnswer: 2,
        
    },
    {
        question: "Hol található a híres Copacabana?",    //19
        answers: ["Rio de Janeiro", "Buenos Aires", "Donilio´s suverijo", "Mexikóváros"],
        correctAnswer: 0, 
    },
    {
        question: "Milyen állat a zöldfátyolka?",
        answers: ["rovar", "hal", "madár", "egysejtű"],      //20
        correctAnswer: 0,
        
    },

//20  -------------------------------------------------------------------------------------


{
    question: "Melyik levesben NEM található répa?",    
    answers: ["minestrone", "korhelyleves", "borscs", "húsleves"],
    correctAnswer: 1, 
},
{
    question: "Hány perc ÖSSZESEN A hobbit és A gyűrűk ura? (bővített változatai)",
    answers: ["892 perc", "1032 perc", "1258 perc", "1721 perc"],      
    correctAnswer: 2,
    
},
{
    question: "A legenda szerint hogyan vált halhatatlanná Siegfried?",    
    answers: ["megfürdött az alvilág tavában", "egyezséget kötött a halál istenével", "Kezet fogott Jézussal", "Sárkányvérben fürdött"],
    correctAnswer: 3, 
},
{
    question: "Mit tanul a kisdiák, akinek az írást oktatják?",
    answers: ["A betüvetést", "A betüszántást", "A  betüszedést", "A betüöntést"],      
    correctAnswer: 0,
    
},
{
    question: "Melyik egy főzőedény neve az alábbiak közül?",   
    answers: ["Bojár", "Kukta", "Bukta", "Bojtár"],
    correctAnswer: 1, 
},
{
    question: "Milyen ´cirkusz´ volt egy vásári mutatvány elnevezése? ",
    answers: ["Sóska", "Bolha", "sáska", "Szúnyog"],      
    correctAnswer: 1,
    
},
{
    question: "Melyik gyümölcs neve jelöl egy paprikafajtát?",   
    answers: ["Cseresznye", "Meggy", "Málna", "Szamóca"],
    correctAnswer: 0, 
},
{
    question: "Melyik ország híres sajtfélesége a feta?",
    answers: ["Thai", "Francia", "Olasz", "Görög"],      
    correctAnswer: 3,
    
},
{
    question: "Melyiket fogyaszthatják azok, akik lakto-vegetáriánusok?",    
    answers: ["Sajt", "Tojás", "Vörös hús", "Fehér hús"],
    correctAnswer: 0, 
},
{
    question: "Mi a tengeri hajózásban a sebesség mértékegysége?",
    answers: ["csomó", "hurok", "görcs", "gubanc"],      
    correctAnswer: 0,
    
},
{
    question: "Mi történik a Harry Potter történetében a 9 és 3/4 vágányon?",    
    answers: ["Innen nyílik a föld alatti alagút", "Itt él Harry", "Innen nyílik a varázslók kapuja", "Innen indul a vonat a Roxfortba"],
    correctAnswer: 3, 
},
{
    question: "Mit tudunk csinálni az operettel?",
    answers: ["becsomagolni", "vezetni sofőrként", "megenni egy étteremben", "megnézni színházban"],      
    correctAnswer: 3,
    
},
{
    question: "Melyik közmondásból hiányzik a „kecske?”  ",    
    answers: ["Ha... nincs, jó a szamár is.", "Láttam én már karón...t.", "A ... is jóllakik,  a káposzta is megmarad.", "Jó ... holtig tanul."], 
    correctAnswer: 2, 
},
{
    question: "Melyik állatnak van a legtöbb lába ezek közül?",
    answers: ["zöld anakonda", "nandu", "hangyász", "sügér"],      
    correctAnswer: 2,
    
},
{
    question: "Ezek közül 3 bor 1 sajtféle, melyik a sajt?",    
    answers: ["kékfrankos", "hárslevelű", "feta", "bikavér"],
    correctAnswer: 2, 
},
{
    question: "Melyik ital nem hungarikum ezek közül?",
    answers: ["Márka meggy", "Szatmári szilvapálinka", "Kecskeméti barackpálinka", "Törley pezsgő"],     
    correctAnswer: 0,
    
},
{
    question: "Miből készül általában a mákos guba?",    
    answers: ["ostyából", "szikkadt kifliből", "rozskenyérből", "piskótából"],
    correctAnswer: 1, 
},
{
    question: "Melyik a pacsuli szinonímája?",
    answers: ["illatszer", "világos", "limlom", "szamár"],      
    correctAnswer: 0,
    
},
{
    question: "Melyik égetett szeszt ízesítik anázissal?",    
    answers: ["Tequila", "Ouzo", "Grappa", "Calvados"],
    correctAnswer: 1, 
},
{
    question: "Melyik ország pénzneme a korona?",
    answers: ["Montenegró", "Liechtenstein", "Svéd", "Ukrajna"],      
    correctAnswer: 2,
    
},



//40  -------------------------------------------------------------------------------------



{
    question: "Mi az orosz hadsereg legmodernebb tankja?",    
    answers: ["T-90AM", "T-80BVM", "T-90A", "T-14 Armata"],
    correctAnswer: 3, 
},
{
    question: "Hogy hívták a medvét amit a lengyel hadsereg befogadott?",
    answers: ["Filip", "Iwan", "Wojtek", "GaweŁ"],      
    correctAnswer: 2,
    
},
{
    question: "Melyik igaz állítás Sztálinról?",    
    answers: ["Sztálin és a Szovjetunió miatt nyertek a szövetséges erők.", "Korrupció hatására megmentette a fiát fogságból.", "Orosz volt.", "Az egyik keze kisebb volt, mint a másik."],
    correctAnswer: 3, 
},
{
    question: "Micsoda Agartha?",
    answers: ["Egy legendás királyság, ami mítosz szerint a föld külső felszínén található.", "Egy matematikában használt szó; egy 16 fokú szög 1db szeletének a területét nevezzük így.", "Egy messzi galaxis.", "Egy márka."],      
    correctAnswer: 0,
    
},
{
    question: "Melyik nap lenne holnap, ha tegnap 5 nappal szerdát követő nap előtt voltunk?",   
    answers: ["Hétfő", "Kedd", "Péntek", "Vasárnap"],
    correctAnswer: 1, 
},
{
    question: "Mikor jelent meg a GTA V? ",
    answers: ["2011", "2013", "2009", "2015"],      
    correctAnswer: 1,
    
},
{
    question: "Melyik évben jelent meg az első CS?",   
    answers: ["1999", "2001", "2007", "2010"],
    correctAnswer: 0, 
},

{
    question: "Folytasd : „-Nem volt már elég? -Nem, nem, nekem nem. -... ” ",    
    answers: ["-De ezért ez mégis csak 12 év.", "-Pedig most vége lesz", "-Tényleg nem volt még elég? -NEM.", "-Örökké? - Örökké."],
    correctAnswer: 3, 
},
{
    question: "Mit keres Huth Gergely, a Pesti Srácok főszerkesztője a Fidesz pártgyűlésén?",
    answers: ["Párt tag", "Cikket ír", "Senki sem tudja", "Mi nem tudjuk"],      
    correctAnswer: 3,
    
},
{
    question: "Milyen foglalkozása volt Volodimir Zelenszkij ukrán elnöknek megválasztása előtt?",    
    answers: ["Övé az összes Roshen gyár", "Jogász", "Színész/Humorista", "Közgazdász"], 
    correctAnswer: 2, 
},
{
    question: "Milyen foglalkozása volt Vlagyimir Putyin orosz elnöknek megválasztása előtt?",
    answers: ["Színész/humorista", "Közgazdász", "KGB ügynök", "Övé az összes Roshen gyár"],      
    correctAnswer: 2,
    
},
{
    question: "Ki írta a A játékos (1866) című regényt?",    
    answers: ["Edgar Allan Poe", "William Shakespeare", "Fjodor Dosztojevszkij", "Lev Tolsztoj"],
    correctAnswer: 2, 
},
{
    question: "Ki NEM volt tagja a Nirvana nevű együttesnek?",
    answers: ["Thome Yorke", "Dave Grohl", "Krist Novoselic", "Kurt Cobain"],     
    correctAnswer: 0,
    
},
{
    question: "Hány Grammy díjat birtokol Kendrick Lamar amerikai rapper?",    
    answers: ["19", "22", "2", "9"],
    correctAnswer: 1, 
},
{
    question: "Mikor jelent meg az első Toy Story?",
    answers: ["1995", "1997", "1999", "2001"],      
    correctAnswer: 0,
    
},
{
    question: "Mi a cselló más néven?",    
    answers: ["Gordon", "Gordonka", "Óriás hegedű", "Bőgő"],
    correctAnswer: 1, 
},
{
    question: "Milyen húrkiosztása van egy normális brácsának?",
    answers: ["E A D G mint egy basszusgitárnak", "G D A E mint egy hegedűnek", "C G D A mint egy csellónak", "Valami más"],      
    correctAnswer: 2,
    
},



//60  -------------------------------------------------------------------------------------



{
    question: "Melyik a legmélyebb hang egy 88 billentyűs (teljes) zongorán?",    
    answers: ["A", "H", "C", "D"],
    correctAnswer: 0, 
},
{
    question: "Milyen hanggal kezdődik a Rush E nevezetű orosz zenei darab?",
    answers: ["E", "F", "H", "C"],      
    correctAnswer: 0,
    
},
{
    question: "Ha egyszerre szólaltatunk meg egy H hangot egy Bé hanggal, akkor disszonáns lesz?",    
    answers: ["Talán", "Attól függ", "Igen", "Nem"],
    correctAnswer: 2, 
},
{
    question: "Melyik állat képes a hátán aludni a vízen lebegve?",
    answers: ["Vidra", "Delfin", "Pingvin", "Krokodil"],
    correctAnswer: 0
},

//----------------------------------------------------

{
    question: "Ki ő?",    
    answers: ["Lirili Lárilá", "Tralalelo Tralala", "Bombardilo Crocodilo", "Thung Thung Thung Thung Sahur"],
    correctAnswer: 1,
    image: "https://fbi.cults3d.com/uploaders/38055520/illustration-file/b00d517e-0d7d-444e-b3a7-d438fc795372/trataCapture.png", 
},

{
    question: "Ki játsza Steve-t az Egy Minecraft filmben?",    
    answers: ["Jason Momoa", "Steve Alex", "Jack Black", "Black Jack"],
    correctAnswer: 2, 
},


{
    question: "Mi Jayce passive ability neve?(angolul)",    
    answers: ["Hextech Protobelt", "Hextech Chest", "Hextech Gunblade", "Hextech Capacitor"],
    correctAnswer: 3,
},
{
    question: "Ki kap goldot Pyke ultijabol?",
    answers: ["Pyke", "Baron", "Az összes Ally aki assistolt", "Utolsó ally aki assistolt"],      
    correctAnswer: 3,
    
},
{

    //asdasdasd
    question: "Mik Jhin eternáljai?",    
    answers: ["Electrocute/Conqueror/Fleat Footwork", "Conversa Particular/Juntos par Sempre/Tempestade Metaleira", "Bottoms up/Catastrophic Casks/Cask cracker", "Grand Finales/Tempo/Fourth Act Surprise"],
    correctAnswer: 3, 
},
{
    question: " Mekkora a 2024-es F1 autók minimális tömege versenyképes állapotban, pilóta nélkül?",
    answers: ["768 kg", "778 kg", "788 kg", "798 kg"],
    correctAnswer: 3,
},



//-----

{
    question: "Mikor jött ki a Reksai rework",    
    answers: ["2011", "2015", "2017 ", "2019"],
    correctAnswer: 2,
},
{
    question: "Melyik a legdrágább skin a lolban?",
    answers: ["Fekete Alistár", "Silver Kayle", "Signature Immortalized Legend Ahri", "PAX Twisted Fate"],      
    correctAnswer: 2,
    
},
{
    question: "Melyik a második szó ABC sorrendbe ezek közül?",    
    answers: ["Szertartás", "Szívroham", "Monohidrát", "Faház"],
    correctAnswer: 2, 
},
{
    question: "Ki volt Vándor? (A gyűrűk urából)",
    answers: ["Legolas", "Aragorn", "Frodo", "Thorin"],
    correctAnswer: 1,
},

{
    question: "Ki írta Az élet kapuja cimű történelmi regényt?",    
    answers: ["Ady Endre", "Herczeg Frenec", "Kesztesi Károly", "Babits Mihály"],
    correctAnswer: 1,
},
{
    question: "Hány lapból áll egy hagyományos A4-es füzet?",
    answers: ["Nincs ilyen", "32-62", "64-80", "82-112"],      
    correctAnswer: 1,
    
},
{
    question: "Melyik az a Vitamin ami javítja a látásodat?",    
    answers: ["A", "K", "D", "B6"],
    correctAnswer: 0, 
},
{
    question: "Miből készül a radír?",
    answers: ["Sztirol-butadién", "Polietilén", "Poliamid", "Polisztirol"],
    correctAnswer: 0,
},

//----------------------------------------------------

{
    question: "Hány gépterem van a gépészbe?",    
    answers: ["7", "8", "9 ", "10"],
    correctAnswer: 2,
},
{
    question: "Mennyi percben 8 nap, 13 óra és 24 perc?",
    answers: ["8173 perc", "10351 perc", "12324 perc", "17412 perc"],      
    correctAnswer: 2,
    
},
{
    question: "Legkevesebb hány bankjegyből lehet kifizetni 47550Ft-ot?",    
    answers: ["9", "5", "6", "8"],
    correctAnswer: 2, 
},
{
    question: "Ha a fekvenyomó padnál az egyik rúd mindkét oldalán van egy-egy: 20kg, 10kg és 5kg tárcsa, hány kg-al nyom fekve az illető?",
    answers: ["70kg", "90kg", "120kg", "35kg"],
    correctAnswer: 1,
},

{
    question: "Melyek a tökéletes számok?",    
    answers: ["amelyeknek primtényezős alakjai megegyeznek", "olyan számok, amelyek egyenlőek az osztóik összegével", "amelyek reciprokjai megegyezik az abszolút értékével.", "melyeknek összesen 2 osztója van"],
    correctAnswer: 1,
},
{
    question: "Mi a LAN röviditése?",
    answers: ["Large Area Network", "Local Area Network", "Last Active Node", "Long Access Network"],      
    correctAnswer: 1,
    
},
{
    question: "Melyik szót írtuk helytelenül?",    
    answers: ["Kiválósság", "Hozzájárulhatóság", "Előreláthatóság", "Szabadalmi jogsértés"],
    correctAnswer: 0, 
},
{
    question: "Mikor jelent meg az Apex legends?",
    answers: ["2019", "2020", "2021", "2022"],
    correctAnswer: 0,
},




{
    question: "Mennyi pénzt zsebelt be a Respawn a COD szériával?",    
    answers: ["Kb 842 Millió dollárt", "Kb 1,5 milliárd dollár", "Kb 3,6 milliárd dollár ", "Ezek közül egyik sem"],
    correctAnswer: 3,
},
{
    question: "Melyik magyar youtuber érte el leghamarabb az 1M feliratkozót?",
    answers: ["Videómánia", "Pamkutya", "VamosART", "Alex Csigér"],      
    correctAnswer: 2,
    
},
{
    question: "Mikor volt az őszi rózsás forradalom?",    
    answers: ["1912", "1922", "1918", "1945"],
    correctAnswer: 2, 
},
{
    question: "Hol található a csukjás izom?",
    answers: ["A felkarod részében", "A nyak/vállak között", "A tarkódban", "A combod egy részében"],
    correctAnswer: 1,
},

{
    question: "Hogy hívják a reszkessetek betörők főszereplőjét?",    
    answers: ["Dabiel", "Kevin", "George", "Amadeus"],
    correctAnswer: 1,
},
{
    question: "Milyen állat Maja a német rajzfilmsorozatban?",
    answers: ["Medve", "Méhecske", "Kutya", "Macska"],      
    correctAnswer: 1,
    
},
{
    question: "Folytasd: Pont, pont vesszőcske, készen van a...?",    
    answers: ["fejecske", "tejecske", "fecske", "kemence"],
    correctAnswer: 0, 
},
{
    question: "Az alábbiak közül az egyik egy borféle, melyik az?",
    answers: ["aszú", "zserbó", "serrano", "hulidera"],
    correctAnswer: 0,
},


{
    question: "Melyik közmondásból hiányzik az Eb szó?",    
    answers: ["ne fesd az ...t a falra!", "ágyuval lő ...re.", "...utat nyer.", "Késő bánat... gondolat."],
    correctAnswer: 3,
},
{
    question: "Melyik része a testünknek nem nő sohasem?",
    answers: ["száj", "orr", "szem", "fül"],      
    correctAnswer: 2,
    
},
{
    question: "Mennyi szín van a szivárványban?",    
    answers: ["4", "5", "7", "9"],
    correctAnswer: 2, 
},
{
    question: "Mi a fővárosa Bosznia-Hercegovinának?",
    answers: ["Koppenhága", "Szarajevó", "Belgrád", "Isztambul"],
    correctAnswer: 1,
},

{
    question: "Melyik ország zászlaja ez?",    
    answers: ["Kenya", "Szudán", "Szomália", "Egypt"],
    correctAnswer: 0,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1024px-Flag_of_Kenya.svg.png",
},
{
    question: "Dark Souls 3-ban mi a neve annak a helynek, ahol Champion Gundyr ellen kell harcolni?",
    answers: ["Grand Archives", "Untended Graves", "Farron Keep", "Cemetery of Ash"],      
    correctAnswer: 1,
    
},
{
    question: "Dark Souls 1-ben milyen tárgy kell ahhoz, hogy belépj a Painted World of Ariamis területre?",    
    answers: ["Peculiar Doll", "Crest of Artorias", "Broken Pendant", "Lordvessel"],
    correctAnswer: 0, 
},
{
    question: "Dark Souls 1-ben melyik kovács található Anor Londo-ban?",
    answers: ["Giant Blacksmith ", "Vamos", "Rickert of Vinheim", "Andre of Astora"],
    correctAnswer: 0,
},












{
    question: "Melyik magyar youtuber érte el leghamarabb az 1M feliratkozót?",
    answers: ["Heath Ledgar", "Jim Carrey", "George Clooney", "Tom Hanks"],      
    correctAnswer: 1,
    
},

{
    question: "Melyik film főgonosza ő?",
    answers: ["Démonok között", "Aki bújt aki nem", "Freddy vs Jason", "Halálos kitérő"],
    correctAnswer: 1,
    image:"https://static.wikia.nocookie.net/listofdeaths/images/4/4e/The_Creeper.jpg/revision/latest?cb=20230401215850",
},

{
    question: "Melyik játékban szerepel Senator Steven Armstrong?",    
    answers: ["Metal Gear Rising Revengeance", "Halo ", "Steven happy life", "Dead Space"],
    correctAnswer: 0,
},
{
    question: "Melyik a legrégebbi szabolcsi település?",
    answers: ["Szabolcs", "Nagyodobos", "Beregdaróc", "Sárospatak"],      
    correctAnswer: 0,
    
},
{
    question: "A tengerszinttől számítva kb. hány kilóméterre van a Föld magja?",    
    answers: ["2800 ", "4500 ", "5600 ", "6300"],
    correctAnswer: 3, 
},
{
    question: "Melyik volt az első Disney film?",
    answers: ["Hamupipőke ", "Bambi", "Pinokkió ", "Hófehérke és a hét törp"],
    correctAnswer: 3,
},


{
    question: "Mikor jelent meg az első Doom?",    
    answers: ["1989", "1991", "1992", "1993 "],
    correctAnswer: 3,
},
{
    question: "Melyik a legdélibb ázsiai ország? ",
    answers: ["Tanzánia ", "Thaiföld ", "Malajzia", "Indonézia "],      
    correctAnswer: 3,
    
},
{
    question: "Melyik egy japán rövidital neve?",    
    answers: ["mascka", "szeppuku", "busidó", "szaké"],
    correctAnswer: 3, 
},
{
    question: "Mi a 40 római számmal?",
    answers: ["XL", "XXC", "CL", "DX"],
    correctAnswer: 0,
},

{
    question: "Melyik kontinens országa Kirgizisztán?",    
    answers: ["Ázsia", "Dél-Amerika", "Európa", "Afrika"],
    correctAnswer: 0,
},
{
    question: "Hol található szatmárcseke?",
    answers: ["Szabolcs", "Hajdú-Bihar", "Fejér", "Ma már románihához tartozik"],      
    correctAnswer: 0,
    
},
{
    question: "Mi a műfaja a Szophoklész művének az Oidipusznak?",    
    answers: ["Tragédia", "Dráma", "Regény", "Epigramma"],
    correctAnswer: 0, 
},
{
    question: "Hogyan  írjuk helyesen az ismert fizikus nevét?",
    answers: ["Eötvös Loránd", "Eötvös Lóránt", "Eötvös Lóránd", "Eötvös loránt"],
    correctAnswer: 0,
},

{
    question: "Melyik ország fővárosa Jakarta?", 
    answers: ["Malajzia", "Indonézia", "Fülöp-szigetek", "Thaiföld"], 
    correctAnswer: 1
  },

  {
    question: "Melyik bolygónak van a legnagyobb holdja?", 
    answers: ["Föld", "Mars", "Jupiter", "Saturnus"], 
    correctAnswer: 2
  },

  {
    question: "Ki írta a 'Harry Potter' könyvsorozatot?", 
    answers: ["J.R.R. Tolkien", "George R. R. Martin", "J.K. Rowling", "Dan Brown"], 
    correctAnswer: 2
  },
  {
    question: "Milyen sportot űznek a 'Wimbledon' versenyen?", 
    answers: ["Krikett", "Röplabda", "Tenisz", "Ping-pong"], 
    correctAnswer: 2
  },

  {
    question: "Mi az Antarktisz hivatalos neve?", 
    answers: ["Déli sarkvidék", "Antarktikai régió", "Déli földrész", "Északi pólus"], 
    correctAnswer: 0
  },

  {
    question: "Mi a legnagyobb édesvízű tó a világon?", 
    answers: ["Huron-tó", "Tanganika-tó", "Felső-tó", "Baikal-tó"], 
    correctAnswer: 3
  },

  

  {
    question: "Melyik Vandal skin ez?", 
    answers: ["Origin", "Magepunk", "Prelude to chaos", "Kurunami"], 
    correctAnswer: 2,
    image:"https://static.wikia.nocookie.net/valorant/images/a/a8/Prelude_to_Chaos_Vandal.png/revision/latest?cb=20230711202455",
  },

  {
    question: "Mi ennek a skinnek a neve?", 
    answers: ["Autumn", "Asiimov", "Print stream", "Fire serpent"], 
    correctAnswer: 1,
    image:"https://www.csgodatabase.com/images/skins/P90_Asiimov.png",
  },

  {
    question: "Kinek az ability-e ez?", 
    answers: ["Cho'Gath", "Gangplank", "Miss Fortune", "Milio"], 
    correctAnswer: 1,
    image:"https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Gangplank_Parrrley.png/revision/latest/thumbnail/width/360/height/360?cb=20240812215835",
  },

  {
    question: "Melyik hős abilityje ez?", 
    answers: ["Skarner", "Malphite", "Leona", "Amumu"], 
    correctAnswer: 3,
    image:"https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Amumu_Bandage_Toss_WR.png/revision/latest/thumbnail/width/360/height/360?cb=20240828211439",
  },

   {
    question: "Melyik Vandal skin ez?", 
    answers: ["Origin", "Magepunk", "Prelude to chaos", "Kurunami"], 
    correctAnswer: 2,
    image:"https://static.wikia.nocookie.net/valorant/images/a/a8/Prelude_to_Chaos_Vandal.png/revision/latest?cb=20230711202455",
  },

  {
    question: "Ki ő?",    
    answers: ["Rihanna", "Beyoncé", "Lady Gaga", "Taylor Swift"],
    correctAnswer: 1,
    image:"https://imageio.forbes.com/specials-images/imageserve/6760517984921923e8effbcd/0x0.jpg?format=jpg&crop=1736,1737,x834,y79,safe&height=416&width=416&fit=bounds",
},
{
    question: "Melyik híres játék inventory-a ez?",    
    answers: ["World of Warcraf", "Dayz", "Terraria", "Path of Exile"],
    correctAnswer: 2, 
    image:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/terraria/d/db/Inventory.png",
},
    {
        question: "Ki ő?",
        answers: ["Bambuzini Gusinie", "Trullimero Trullicina", "Tree tres Footies", "Brr Brr Patapim"],      
        correctAnswer: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoN58x5xuBbHjFCn6NcjmOONCqlVUtJbMvg&s",
        
    },

    {
        question: "Mi a neve ennek a híres Yu-Gu-Oh kártyának?",
        answers: ["Monster Reborn", "Pot of Greed", "Avatar of the pot", "Magikuriboh"],
        correctAnswer: 1,
        image: "https://preview.redd.it/poll-pot-of-greed-v0-05scgzq44p6b1.png?width=375&format=png&auto=webp&s=ff6b5612c9305c8f4e3f945f24b91f388d4cc952",
    },
];


questions = removeDuplicates(questions);

let currentQuestionIndex = 0;
let lives = 3;
const maxLives = 5;
let usedFelezes = false;
let usedTipp = false;
let usedTelefon = false;
let usedExtraLife = false;
let felezesCount = -2;
let telefonCount = -2;
let tippCount = -2;
const maxLifelineUses = 3;
const maxNormalQuestions = 20;

function startGame() {
    currentQuestionIndex = 0;
    lives = 3;  // Kezdő élet
    usedExtraLife = false;  // Az extra élet kezdetben nem használt
    shuffleQuestions(questions); 
    updateLives(); // Frissíti az életeket
    kerdesekmegjelen(); // Megjeleníti az első kérdést
}


function updateLifelineButtons() {
    
    document.getElementById("felezesButton").innerText = `50-50 (${maxLifelineUses - felezesCount})`;
    document.getElementById("telefonButton").innerText = `Telefon (${maxLifelineUses - telefonCount})`;
    document.getElementById("tippButton").innerText = `Tipp (${maxLifelineUses - tippCount})`;
}


function removeDuplicates(array) {
    const uniqueQuestions = [];
    const seenQuestions = new Set();

    array.forEach(questionObj => {
        if (!seenQuestions.has(questionObj.question)) {
            uniqueQuestions.push(questionObj);
            seenQuestions.add(questionObj.question);
        }
    });

    return uniqueQuestions;
}

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function kerdesekmegjelen() {
    if (currentQuestionIndex >= questions.length) {
        ujjatek();
        return;
    }

    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("questionNumber");
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];
    const imageElement = document.getElementById("questionImage");

    const currentQuestion = questions[currentQuestionIndex];

    // Ha nem találjuk a kérdést, ne próbáljuk meg renderelni
    if (!currentQuestion) {
        console.error("Nem található kérdés a currentQuestionIndex alapján!");
        return;
    }

    questionElement.innerText = currentQuestion.question;
    questionNumberElement.innerText = `Kérdés ${currentQuestionIndex + 1} / ${questions.length}`;

    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block";
    } else {
        imageElement.style.display = "none";
    }

    currentQuestion.answers.forEach((answer, index) => {
        const element = answerElements[index];
        element.innerText = answer;
        element.classList.remove("correct", "incorrect");
        element.style.pointerEvents = "auto";
        element.style.backgroundColor = "#ffffff";
        element.style.border = "5px ridge rgb(79, 150, 197)";
        element.style.display = "block";

        element.onclick = () => {
            checkAnswer(index);
        };
    });
}

function checkAnswer(selectedAnswerIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];

    answerElements.forEach(element => {
        element.style.pointerEvents = "none";
    });

    if (selectedAnswerIndex === correctAnswer) {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "limegreen";

        // Ha elérjük a kérdések számát, ami az extra életet adja
        const lifeQuestionIndices = [19, 39, 59, 79, 99, 119, 139, 159]; // A kérdések indexei, ahol életet adunk

        if (lifeQuestionIndices.includes(currentQuestionIndex) && lives < maxLives) {
            lives++; 
            updateLives(); 
        }

        // Ha az utolsó kérdést válaszoltuk meg
        if (currentQuestionIndex === questions.length - 1) {
            endGame(true); 
        } else {
            setTimeout(() => {
                currentQuestionIndex++;
                kerdesekmegjelen();
            }, 1000);
        }
    } else {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "red";

        // Ha elértük az utolsó kérdést, vége a játéknak
        if (currentQuestionIndex === questions.length - 1) {
            endGame(false); 
        } else {
            setTimeout(() => {
                lives--;
                updateLives();

                if (lives <= 0) {
                    endGame(false); 
                } else {
                    currentQuestionIndex++;
                    kerdesekmegjelen();
                }
            }, 1000);
        }
    }
}

function updateLives() {
    for (let i = 1; i <= maxLives; i++) {
        const lifeElement = document.getElementById(`life${i}`);
        lifeElement.style.visibility = i <= lives ? "visible" : "hidden";
    }
}


function useLifeline(type) {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];

    if (type === "felezes" && felezesCount < maxLifelineUses) {
    
        const incorrectAnswers = [0, 1, 2, 3].filter(i => i !== correctAnswerIndex);
        const answersToRemove = incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
        answersToRemove.forEach(index => {
            document.getElementById(`answer${index}`).style.display = "none";
        });
        felezesCount++;
        if (felezesCount >= maxLifelineUses) {
            document.getElementById("felezesButton").disabled = true;
        }
    }

    if (type === "telefon" && telefonCount < maxLifelineUses) {

        document.getElementById(`answer${correctAnswerIndex}`).style.backgroundColor = "green";
        telefonCount++;
        if (telefonCount >= maxLifelineUses) {
            document.getElementById("telefonButton").disabled = true;
        }
    }

    if (type === "tipp" && tippCount < maxLifelineUses) {
        let userTip = prompt("Adj meg egy számot: (1-4)!");
        let userIndex = parseInt(userTip) - 1; 

        if (userIndex >= 0 && userIndex < 4) {
            if (userIndex === correctAnswerIndex) {
                document.getElementById(`answer${userIndex}`).style.backgroundColor = "green"; 
            } else {
                document.getElementById(`answer${userIndex}`).style.backgroundColor = "red"; 
            }
            tippCount++;
            if (tippCount >= maxLifelineUses) {
                document.getElementById("tippButton").disabled = true;
            }
        }
    }

    updateLifelineButtons(); // Frissíti a gombok feliratát a használat után
}
function useExtraLife() {
    if (!usedExtraLife && lives < maxLives) { // Csak akkor adjunk extra életet, ha még nem használták és kevesebb mint 5 életük van
        lives++; // Hozzáadunk egy életet
        updateLives(); // Frissítjük az élet mutatót
        usedExtraLife = true; // Jelöljük, hogy használták
        document.getElementById("extraLifeButton").disabled = true; // Letiltjuk az extra élet gombot
    }

    updateLifelineButtons(); // Frissíti a gombok feliratát
}
    

function endGame(won) {
    if (won) {
        window.location.href = "gratulation.html";
    } else {

        
        window.location.href = "loser.html"; 
    }
}

function ujjatek() {
    currentQuestionIndex = 0;
    lives = maxLives;
    usedFelezes = false;
    usedTipp = false;
    usedTelefon = false;
    usedExtraLife = false;
    updateLives();
    startGame();
}


window.onload = function () {
    updateLives();
    updateLifelineButtons(); 
    startGame(); 
};
