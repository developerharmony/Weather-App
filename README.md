# Hava Durumu Uygulaması

Bu, React ve Tailwind CSS kullanılarak geliştirilmiş bir hava durumu uygulamasıdır. Kullanıcılar şehir adına göre veya konum izniyle hava durumu bilgilerini alabilir, 5 günlük tahminleri görüntüleyebilir ve sıcaklık grafiklerini görebilir. Uygulama, OpenWeatherMap API'sini kullanır ve arama geçmişi, tema desteği (açık, koyu, özel) gibi özellikler sunar.

## Özellikler
- **Konum Tabanlı Hava Durumu**: Kullanıcı siteye girdiğinde konum izniyle otomatik olarak hava durumu bilgisi alınır.
- **Şehir Arama**: Kullanıcılar şehir adına göre hava durumu arayabilir, arama geçmişi kaydedilir ve silinebilir.
- **Sıcaklık Grafiği**: 5 günlük sıcaklık tahmini, Chart.js ile görselleştirilir.
- **Tema Desteği**: Açık, koyu ve özel tema seçenekleri.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda uyumlu.
- **Footer**: Popüler şehirler ve sosyal medya bağlantıları içerir.

## Kullanılan Teknolojiler
- **Frontend**:
  - React: ^18.2.0 (Kullanıcı arayüzü oluşturmak için)
  - Tailwind CSS: ^3.4.0 (Stil ve responsive tasarım için)
  - Chart.js: ^4.4.0 ve react-chartjs-2: ^5.2.0 (Sıcaklık grafikleri için)
  - Font Awesome: ^6.4.0 (İkonlar için)
- **API**:
  - OpenWeatherMap API (Hava durumu verileri için)
- **Geliştirme Araçları**:
  - Node.js: v14 veya üstü (Proje çalıştırma ve bağımlılık yönetimi)
  - npm: v6 veya üstü (Bağımlılık kurulumu için)
  - Vite veya Create React App (Derleme ve geliştirme ortamı, projenize bağlı olarak)
- **Diğer**:
  - Local Storage (Arama geçmişi saklama)
  - Geolocation API (Konum tabanlı hava durumu)

## Desteklenen Tarayıcılar
Uygulama, modern web tarayıcılarında test edilmiştir ve aşağıdaki tarayıcılarda tam uyumludur:
- Google Chrome (son sürümler)
- Mozilla Firefox (son sürümler)
- Safari (son sürümler, macOS ve iOS)
- Microsoft Edge (son sürümler)

**Not**: Eski tarayıcılarda (örneğin, Internet Explorer 11) bazı özellikler (örneğin, Geolocation API veya Tailwind CSS'in belirli özellikleri) desteklenmeyebilir. En iyi deneyim için modern bir tarayıcı kullanmanız önerilir.

## Kurulum

### Ön Koşullar
- Node.js (v14 veya üstü)
- npm (v6 veya üstü)
- OpenWeatherMap API anahtarı ([buradan alın](https://openweathermap.org/api))

### Adımlar
1. **Depoyu Klonlayın**:
   ```bash
   git clone https://github.com/kullanici-adi/hava-durumu-uygulamasi.git
   cd hava-durumu-uygulamasi
   ```

2. **Bağımlılıkları Yükleyin**:
   ```bash
   npm install
   ```

3. **Ortam Değişkenlerini Ayarlayın**:
   Proje kök dizininde bir `.env` dosyası oluşturun ve OpenWeatherMap API anahtarınızı ekleyin:
   ```bash
   echo "REACT_APP_API_KEY=your-openweathermap-api-key" > .env
   ```

4. **Uygulamayı Başlatın**:
   ```bash
   npm start
   ```
   Uygulama, `http://localhost:3000` adresinde çalışacaktır.

## Kullanım
- Siteye girildiğinde, konum izni istenir. İzin verirseniz, bulunduğunuz konumun hava durumu bilgileri yüklenir.
- İzin vermezseniz, "Lütfen bir şehir seçiniz" mesajı görünür. Arama çubuğuna bir şehir adı yazarak veya popüler şehir butonlarından birini seçerek hava durumu bilgilerini alabilirsiniz.
- Arama geçmişinizi görüntüleyebilir, tek bir şehri veya tüm geçmişi silebilirsiniz.
- Sağ üstteki tema düğmesiyle tema değiştirebilirsiniz (açık, koyu, özel).

## Bağımlılıklar
- React: ^18.2.0
- Tailwind CSS: ^3.4.0
- Chart.js: ^4.4.0
- react-chartjs-2: ^5.2.0
- Font Awesome: ^6.4.0

## Lisans
Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## Katkıda Bulunanlar
- [Harmony](https://github.com/developerharmony)

## İletişim
Sorularınız veya önerileriniz için [GitHub Issues](https://github.com/kullanici-adi/Weather-App/issues) üzerinden iletişime geçebilirsiniz.

- GitHub: [developerharmony](https://github.com/developerharmony)
- E-posta: <a href="mailto:dev.harmony1@gmail.com">Bana Mail Gönderin</a>
