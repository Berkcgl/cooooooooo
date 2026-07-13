import { createFileRoute } from "@tanstack/react-router";
import { Ticker } from "@/components/site/Ticker";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Gizlilik Politikası (KVKK) | Cihan Özhan";
const DESC =
  "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Agentic AI Masterclass başvuruları için hazırlanan aydınlatma ve açık rıza metni.";

export const Route = createFileRoute("/gizlilik-politikasi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
});

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-xl font-bold tracking-tight text-ink-900 md:text-2xl">
      {children}
    </h2>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-ink-700">{children}</p>;
}

function PrivacyPolicy() {
  return (
    <>
      <Ticker />
      <SiteHeader />
      <main className="pt-28 pb-24 md:pt-32">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">KVKK</span>
          <h1 className="display-2 mt-4 text-ink-900 text-balance">
            Gizlilik Politikası (KVKK)
          </h1>

          <SectionTitle>KVKK Metni</SectionTitle>
          <Para>
            Bu aydınlatma metni 6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") 10.
            maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar
            Hakkında Tebliğ çerçevesinde "Veri Sorumlusu" sıfatıyla Cihan Özhan tarafından
            hazırlanmıştır.
          </Para>
          <Para>
            Bu metnin amacı; Agentic AI Masterclass eğitimine başvurmak amacıyla yapmış olduğunuz
            başvurular esnasında veya eğitimden yararlanırken paylaşmış olduğunuz veya Cihan Özhan
            tarafından toplanmış olan kişisel verilerinizin (adınız, telefon numaranız,
            fotoğrafınız, özgeçmişiniz, e-posta adresiniz, aldığınız eğitimler, çalıştığınız işyeri
            gibi kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi)
            ("Kişisel veriler") işlenmesine ve bunlara dair haklarınıza dair aydınlatma
            yükümlülüğünün yerine getirilmesidir.
          </Para>

          <SectionTitle>1. Kişisel Verilerin İşlenme Amaçları</SectionTitle>
          <Para>Kişisel verileriniz şu amaçlarla kullanılmaktadır:</Para>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-700">
            {[
              "Web sitesi/başvuru formu üzerinden başvuranın kimlik bilgilerini teyit etmek,",
              "İletişim için adres ve diğer gerekli bilgileri kaydetmek,",
              "İletişime geçmek, eğitimle ilgili gerekli bilgilendirmeleri yapabilmek,",
              "Elektronik (internet/mobil vs.) veya kâğıt ortamında işleme dayanak olacak tüm kayıt ve belgeleri düzenlemek,",
              "Kamu güvenliğine ilişkin hususlarda talep halinde ve mevzuat gereği kamu görevlilerine bilgi verebilmek,",
              "Eğitime katılan öğrencilerin veya adayların memnuniyet ve beğenilerini artırmak, elektronik ortamda ve/veya fiziki ortamda eğitimler düzenlemek,",
              "Anlaşmalı kurumlar, çözüm ortakları ve üyesi olunan üçüncü kişi konumunda bulunan internet mecraları ve dijital programlar aracılığıyla takipçilere öneri sunabilmek, hizmetler hakkında bilgilendirebilmek,",
              "Kullanıcıların şikâyet ve önerilerini değerlendirebilmek,",
              "Yasal yükümlülükleri yerine getirebilmek ve yürürlükteki mevzuattan doğan hakları kullanabilmek,",
              "Dolandırıcılık ve diğer yasa dışı faaliyetlerin önüne geçebilmek.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <SectionTitle>
            2. Kişisel Verilerin Toplanma Yöntemleri ile Hukuki Sebepleri
          </SectionTitle>
          <Para>
            Kişisel veriler, yukarıda belirtilen amaçlarla, sözleşmeler ve kanunlardan doğan
            mesuliyetlerin eksiksiz ve doğru bir şekilde yerine getirilebilmesi hukuki sebeplerine
            dayanılarak toplanmaktadır. Bu hukuki sebeplerle toplanan kişisel veriler, Kanun
            tarafından öngörülen temel ilkelere uygun olarak, Kanun'un 5. ve 6. maddelerinde
            belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu metinde belirtilen
            amaçlarla da işlenebilmekte ve aktarılabilmektedir.
          </Para>
          <Para>
            Kişisel veriler sadece kesin, açık ve yasal amaçlar dâhilinde toplanacak, yukarıda
            ilgili bölümde açıklanan kişisel verilerin işlenme amaçlarının gerektirdiği süreler
            boyunca saklanabilecek olup Kanun'da ve burada belirtilen çerçevede toplandıkları
            amaçlarla bağdaşmaz bir şekilde işlenmeyecek ve işlenmesini gerektiren sebeplerin
            ortadan kalkması hâlinde, kanunen saklama mecburiyeti bulunan haller saklı olmak üzere,
            resen veya ilgili kişinin talebi üzerine silinecek veya yok edilecek veya anonim hale
            getirilecektir.
          </Para>

          <SectionTitle>
            3. Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
          </SectionTitle>
          <Para>
            Kişisel veriler, yukarıda belirtilen veri işleme amaçlarını gerçekleştirmek üzere;
            hukuki uyum süreci, hukuki, mali, vergisel vb. denetimler amaçlarıyla iç ve dış
            denetçilere ve anlaşmalı bağımsız denetim firmalarına, hukuk danışmanlarına, sair
            danışmanlık, destek veya hizmet alınan veya alınması planlanan üçüncü kişilere (çeşitli
            ülkelerde sunucuları bulunabilecek bulut bilişim hizmeti sağlayıcıları da dâhil),
            kanunen yetkili kurum ve kuruluşlara ve özel kişilere, Kanun'un 8. ve 9. maddelerinde
            belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecek,
            yurtiçinde veya yurtdışında işlenebilecek, eğitimin bilinirliğini ve faydasını artırmak
            amacıyla reklam/pazarlama çalışmalarında kullanılabilecek, kâğıt üzerinde veya
            elektronik ortamda gerçekleştirilecek iş ve işlemlere dayanak olacak bilgi ve belgelerin
            düzenlenmesinde kullanılabilecek ve internet ortamında yayınlanmak suretiyle sair
            mecralar üzerinden de paylaşılabilecektir.
          </Para>

          <SectionTitle>4. Kişisel Verilere İlişkin Sahip Olunan Haklar</SectionTitle>
          <Para>
            Kanun'un 11. maddesi gereği, kişisel veri sahipleri{" "}
            <a
              href="mailto:cihan.ozhan@hotmail.com"
              className="font-medium text-brand hover:underline"
            >
              cihan.ozhan@hotmail.com
            </a>{" "}
            adresine başvurarak kendileriyle ilgili;
          </Para>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-700">
            {[
              "Kişisel verilerinin işlenip işlenmediğini öğrenme,",
              "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,",
              "Kişisel verilerinin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
              "Yurt içinde veya yurt dışında kişisel verilerinin aktarıldığı üçüncü kişileri bilme,",
              "Kişisel verilerinin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,",
              "Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinin silinmesini/yok edilmesini isteme,",
              "Yukarıdaki bentler uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
              "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhlerine bir sonucun ortaya çıkmasına itiraz etme,",
              "Kişisel verilerinin Kanun'a aykırı olarak işlenmesi sebebiyle zarara uğramaları halinde giderilmesini talep etme,",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Para>haklarına sahiptirler.</Para>

          <SectionTitle>Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni</SectionTitle>
          <Para>
            Yukarıda yer alan ve Cihan Özhan tarafından açıklanan 6698 sayılı Kişisel Verilerin
            Korunması Kanunu'na ilişkin aydınlatma metninin tamamını okudum, anladım ve kişisel
            verilerimin yukarıda belirtilen amaçlar çerçevesinde işlenmesi konusunda
            bilgilendirildim.
          </Para>
          <Para>
            Bu kapsamda; adım, telefon numaram, fotoğrafım, özgeçmişim, e-posta adresim, aldığım
            eğitimler, çalıştığım işyeri gibi kişisel verilerimin 6698 sayılı Kişisel Verilerin
            Korunması Kanunu'na uygun olarak Cihan Özhan tarafından, eğitimin bilinirliğini ve
            faydasını artırmak ve tanıtımını yapmak amacıyla reklam/pazarlama çalışmalarında
            kullanılmak üzere kaydedilmesine, kâğıt üzerinde veya elektronik ortamda
            gerçekleştirilecek iş ve işlemlere dayanak olacak bilgi ve belgelerin düzenlenmesinde
            kullanılmasına, internet ortamında yayınlanmasına, LinkedIn, Instagram gibi sosyal
            mecralarda bildirilerde kullanılmasına, fotoğraf ve video görüntülerimin sosyal medya ve
            basılı yayın üzerinden paylaşılmasına, ürün ve hizmetlerin tanıtımı ve pazarlaması
            amacıyla eğitim, iletişim, fotoğraf ve video görüntülerimin işlenmesine ve
            reklam/pazarlama unsuru haline getirilerek yayınlanmasına, bu gibi amaçların
            gerçekleştirilmesi için her türlü kanal aracılığıyla Aydınlatma Metninde yer alan
            bilgiler ışığında işlenmesine ve kanuni ya da hizmete ve/veya iş ilişkisine bağlı fiili
            gereklilikler halinde Aydınlatma Metninde belirtilen kişiler ile paylaşılmasına,
            internette yayınlanmasına, yurtdışına aktarılmasına, konu hakkında tereddüde yer
            vermeyecek şekilde aydınlatılmış ve bilgi sahibi olarak, açık rızamla, özgür irademle
            onay veriyorum.
          </Para>
          <Para>
            Yukarıda yer alan işbu açık rıza metnini bu internet sitesini/başvuru formunu
            kullandığınız takdirde onaylamış sayılacaksınız.
          </Para>
          <Para>
            Kanun'da yer verilen hükümlere uygun olarak, sağlayacağınız kişisel verileriniz
            işlenmekte, aksi Kanun'da öngörülmedikçe de işlenmesini gerektiren hukuki sebepler devam
            ettiği müddetçe saklanmaktadır.
          </Para>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
