// // 1. ADIM: Fonksiyonu 'async' ile tanımlıyoruz.
// async function kullaniciVeGonderileriGetir() {
    
//     // 2. ADIM: Güvenlik Ağı. Hataları yakalamak için try-catch açıyoruz. 
//     // Çünkü artık zincirin sonundaki o ".catch()" komutu yok.
//     try {
        
//         let a = await console.log("1. İşlem başlıyor, kullanıcı aranıyor...");
//         console.log("beklerim")

//         // 3. ADIM: İLK DURAKLAMA
//         // fetch bize bir Promise (Söz) döner. "await" diyoruz ki: 
//         // "Kargocu sunucuya gidip o kutuyu (response) getirene kadar BURADA DUR."
//         const kullaniciKutusu = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         // 4. ADIM: KONTROL (Geçmişten hatırladığımız 404 tuzağı)
//         if (!kullaniciKutusu.ok) {
//             throw new Error("Kullanıcı bulunamadı!"); // Patlat ve catch'e fırlat!
//         }

//         // 5. ADIM: İKİNCİ DURAKLAMA
//         // Kutuyu açıp JSON'a çevirmek de zaman alır (Promise döner). 
//         // "Kutu açılana kadar YİNE DUR VE BEKLE" diyoruz.
//         const kullanici = await kullaniciKutusu.json();
        
//         console.log("2. Kullanıcı bulundu adı: " + kullanici.name);
        
//         // --- BİRİNCİ AŞAMA BİTTİ, ŞİMDİ İKİNCİ AŞAMA ---

//         console.log("3. Bu kullanıcının gönderileri aranıyor...");

//         // 6. ADIM: ÜÇÜNCÜ DURAKLAMA
//         // Az önce aldığımız kullanici.id'yi kullanarak yeni bir istek atıyoruz.
//         // "Gönderiler gelene kadar BURADA DUR."
//         const gonderiKutusu = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + kullanici.id);
        
//         if (!gonderiKutusu.ok) {
//             throw new Error("Gönderiler çekilemedi!");
//         }

//         // 7. ADIM: DÖRDÜNCÜ DURAKLAMA
//         // Gönderi kutusunu açmayı bekle.
//         const gonderiler = await gonderiKutusu.json();

//         console.log("4. Mutlu Son! Gönderiler de geldi: ", gonderiler);

//     } catch (hata) {
//         // 8. ADIM: HATA MERKEZİ
//         // Yukarıdaki 7 adımın HANGİSİNDE BİR KAZA OLURSA OLSUN (internet kopması, 404 vs.)
//         // Kod anında buraya ışınlanır.
//         console.log("SİSTEM DURDU: ", hata.message);
//     }
// }

// // 9. ADIM: Programı Başlat
// console.log("A. Ben ana programım, çalışmaya başladım.");
// kullaniciVeGonderileriGetir();
// console.log("B. Ben ana programım, beklemeyi sevmem devam ederim!");


const veriGetir = async () => {
    try{
        console.log("Veri aranmaya başladı.");
        const ourData = await fetch("jsosnlar/devir.json");
        if(!ourData.ok){
            throw new Error("Datamıza erişemedik hata kodu:"+ourData.status);
        }
        const comingData = await ourData.json();
        console.log("Datamız geldi:",comingData);
    }
    catch(error){
        console.log("Hata aldık ! Hatamız:",error.message);
    }
}

veriGetir();