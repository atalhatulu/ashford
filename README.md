# Ashford

**Ashford**, tarayıcıda çalışan, LLM ve harici API kullanmayan prosedürel bir kasaba yaşam simülasyonudur. Kasaba sakinleri kendi ihtiyaçlarına göre karar verir; çalışır, dinlenir, sosyalleşir, borç alıp öder ve yaşanan olayları hatırlar.

> **Durum:** v1.0 deneysel prototip. Oyuncu şu anda kasabayı gözlemler, zamanı ilerletir ve seçili NPC ile konu bazlı konuşur. Serbest metin sohbeti ve olaylara doğrudan müdahale eden oyuncu seçimleri henüz uygulanmadı.

## Mevcut özellikler

- Ortak aile bağları ve başlangıçta bir miras anlaşmazlığı bulunan 10 NPC.
- Açlık, enerji, sosyal ihtiyaç, stres ve sağlık; kişilik özelliklerine göre olasılıklı davranış seçimi.
- Çalışma, uyku, yemek, dinlenme, ziyaret, sosyalleşme, borç alma/ödeme ve alışveriş.
- Güven, yakınlık ve çatışma üzerinden ilişkiler; tanıklık ile duyumu ayıran olay hafızası ve haber aktarımı.
- Para, mülk, borç ve değişen piyasa koşulları; yaşlanma, doğum, ölüm ve miras aktarımı.
- Selam, iş, geçmiş, aile, ilişkiler, haber, borç, miras ve kasaba konularında şablon tabanlı diyalog.
- Dünya tohumu (seed) ile tekrarlanabilir simülasyon; tarayıcıda kayıt ve JSON içe/dışa aktarma.

## Çalıştırma

Depoyu klonlayın veya indirin ve `index.html` dosyasını modern bir tarayıcıda açın. Derleme, sunucu veya API anahtarı gerekmez. `engine.js` dosyası `index.html` ile aynı klasörde olmalıdır.

Arayüzden zamanı 1 saat, 1 gün, 7 gün, 30 gün veya 1 yıl ilerletebilir; karakter seçip konuşabilir ve dünyayı kaydedebilirsiniz. Yeni dünya oluşturmak kaydedilmemiş ilerlemeyi siler.

## Dosya yapısı

```text
ashford/
├── index.html   # Arayüz ve tarayıcı etkileşimleri
├── engine.js    # Prosedürel simülasyon motoru
├── test.js      # Temel tutarlılık testleri
└── README.md
```

## Test

Node.js kuruluysa:

```bash
node test.js
```

Testler deterministik simülasyon, aile bağları, hafıza ve veri tutarlılığı, uzun süreli ilerleme ve JSON kayıt döngüsünü kapsar.

## Geliştirme yönü

Öncelik, test sayısından çok **oynanabilir içerik ve sonuç doğuran seçenekler**:

1. Oyuncunun sır saklama, dedikodu paylaşma, yüzleşme, yardım ve borç gibi sosyal seçimler yapması.
2. NPC'lerin kişilik, hafıza ve ilişkilerine göre farklı tepkiler vermesi; sonuçların sonraki olayları etkilemesi.
3. Daha zengin kişisel hedefler, geçmişler, alışkanlıklar, çatışmalar ve prosedürel olay zincirleri.
4. Kalabalık kasabalar için simülasyon ölçekleme.

Bunlar yol haritasıdır; mevcut v1.0 özellikleri değildir.

## Tasarım ilkeleri

NPC'ler oyuncudan bağımsız yaşar. Karakterler yalnızca yaşadıkları, tanık oldukları veya duydukları olayları bilir. Hikâyeler sabit görev dizilerinden değil, dünya durumu ve karakterlerin birbirini etkileyen kararlarından doğar.
