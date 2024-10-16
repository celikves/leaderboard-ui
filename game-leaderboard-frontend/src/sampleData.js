const pantheonNames = [
  "Barış Şaraldı", "İsmail Bakır", "Furkan Atılgan", "Alperen Aydaş", "Alparslan İ.",
  "Osman Pekaydın", "Muhammet Ozdamar", "Muharrem Dedeoğlu", "Batuhan Köroğlu", 
  "Osman Dursun", "Muhammet Can Şanverdi", "Ahmet Ugur", "Utku Mert Degirmenci", 
  "Çağkan Çağlayanel", "Fulya Furuncuoglu", "Anı AKDEMİR", "Muhammed Bilal Bark", 
  "Uğur Akıncı", "Cahit Burak Küçüksütcü", "Setenay Ünügür", "Barış Türemiş", 
  "Necati Yasin Sezgin", "Hakan Demiral", "Mustafa Vardalı", "Yigit Kaan Cetin", 
  "Rüzgar Bayındır", "Emir Berkay ÖZKAN", "Dogacan Tugrul", "Furkan Yami", 
  "Hasan Emre Tonguç", "Kaan Sümer Kürkçüoğlu", "Onur Kurugol", "Kaya Dağlı", 
  "Serhat İşbilir", "Yiğitcan Öksüz", "Meriç Kıranoğlu", "Fatih Çil", 
  "Özlem Çetin Kuş", "Dorukhan Doruk", "Mustafa Tat", "Furkan Taylan Okay", 
  "Abdurrahim AKPINAR", "Şuheda Bakan", "Hüseyin Oğuz Kahveci", "Ufuk Şahin", 
  "Ayberk ESER", "İlknur Ercan", "Can Biçer", "Barış Runyun", "Zeki Özdemir", 
  "Kamil Can Atar", "Tolunay Kus", "Hasan Uğur ÇAKMAKÇIOĞLU", "Zehra Çakmak Ertürk", 
  "Onur Kaan Şahin", "S. Sercan Cengiz", "Yiğitcan Erden", "O. Doğukan Demirel", 
  "Pınar Yalçınkaya", "Ahmet Burhanettin Şan", "Birtan Gülmüş", "Hilal İpek", 
  "Şafak Akcan", "Mehmet Sarioglu", "Deniz Can Demir", "Büşra Kaya", 
  "Ceren Sakoğlu", "Mutlu KILIÇ", "Oğuz Han Dede", "Zümrüt Tanrıöven", 
  "Enes Koç", "Erdogan Cayir", "Altuğ Çataklı", "Mucahid GOK", "Mustafa Derin", 
  "Melih Başyildiz", "Bilal Bahadır Gökçe", "Ahmet Emre Gürcan", "Ayvaz Arık", 
  "Alp Eren Özdemir", "Bartu Baş", "Aysu Fenerci", "Eymen Güler", 
  "Bahar Karaca Erol", "Mehmetcan Öksüz", "Umut Cetin Sagdicoglu", "Mert G.", 
  "Tayfun SAKOĞLU", "Ivan Bylik", "Uygur Güvel", "Devrim Kutlu", 
  "Oğuzhan Ercan", "Gökberk İnan", "İdil Tufan", "Ida Marie Solli"
];

const sampleData = pantheonNames.map((name, i) => ({
  country: i % 2 === 0 ? 'Turkey' : 'Canada',
  username: name,
  rank: i + 1,
  money: Math.floor(Math.random() * 10000),
  dailyDiff: Math.floor(Math.random() * 11) - 5 
}));

export default sampleData;
