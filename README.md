# SeydanurKinay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Kurulum ve Baslangic
Repostory yuklendikten sonra `ng serve` komutu ile projeyi baslatiniz.

## Sistem
* Proje başlangıcında Angular'ın APP_INITIALIZER event'inde araya girerek bir http request'i ile kullanmayı hedeflediğim api'den `AppInitService.createToken()` metodu ile token bilgisi aldım ve localStorage'a yazdım. Bu işlem başarıyla tamamlandıysa proje yüklenmeye devam edecek şekilde tasarladım. Böylece daha sonraki tüm request'lerde oluşturduğum `AuthInterceptor` yardımı ile bu token'ı http isteğine parametre ve/veya header olarak dahil edebildim. (Mevcut kullandığım web serviste bu özelliğe ihtiyaç olmadı ancak böyle bir opsiyon olduğunu sizlere gösterebilmek amacıyla bu özelliği dahil ettim. Yorum satırlarını inceleyebilirsiniz.)
* `DefaultLayoutModule` sistemin ön tanımlı layout'unu kapsıyor. Bu tip arttırılarak her sayfa için farklı görünümler elde edilebilir. 
* Routing Modülü üzerinde tanımlı olmayan bir istek geldiğinde `404` yönlendirmesi yapmak üzere `NotFoundComponent` oluşturuldu ve `AppRoutingModule` üzerinde gerekli tanımlama yapıldı.
* `HomeModule` deki movie listesinde uzun metinleri kısaltmak üzere `TruncatePipe` oluşturdum.
* Liste ekranında sayfalama için `Infinity Scroll` özelliği kullandım.
* Uygulama üzerinde service worker etkinleştirilmiştir. Bu özellik ile uygulamaya windows veya android cihazlardan chrome tarayıcısıyla giriş yapıldığında tarayıcı uygulamayı kurmak istermisiniz bildirimi gösterecek. Eğer kurulum yapılırsa windows cihazlarda masaüstü kısayolu oluşturacak android cihazlardaysa uygulama listesine direkt olarak web sayfasını açan bir kısayol ekleyecektir. Bu yöntemle push notification gönderilebilir yada gönderilen http (get) isteklerinin response'ları cache edilebilir ve backend yada frontend offline durumda olsa da service-worker içerisinde belirtilen cache süresi boyunca online gibi gösterilebilir. Bu özelliği etkinleştirmedim ancak service worker bize böyle seçenekler sunmaktadır.
 
