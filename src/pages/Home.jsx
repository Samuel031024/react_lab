import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Home() {
	const [open, setOpen] = useState(false);
  return (
    <div>
      <main>
        <h1>Välj tillverkare</h1>
        
        <div className="image-row">
          <a href="huawei.html"><img src="/Logga_telefon/image_1.png" alt="Huawei_logga" /></a>
          <Link to="/iphone"><img src="/Logga_telefon/Rectangle_1.png" alt="Apple_logga" /></Link>
          <a href="oneplus.html"><img src="/Logga_telefon/image_2.png" alt="One_plus_logga" /></a>
          <a href="samsung.html"><img src="/Logga_telefon/image_3.png" alt="Samsung_logga" /></a>
        </div>

<div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
	<button onClick={() => setOpen(!open)}>
		{open ? 'stäng' : 'öppna'}
		</button>
		{open && (
            <div style={{ marginTop: '10px', color: '#333' }}>
              <p><strong>Medelande</strong></p>
            </div>
          )}
</div>

        <div className="tabell-text">
          <h2>Räkna ut kostnad</h2>
          <p id="random-promo" style={{ fontWeight: 'bold', color: '#007bff' }}></p>
        </div>

        <section className="tabell">
          <p>Få en uppskattning</p>
          <div className="input-group">
            <select name="brand" defaultValue="">
              <option value="" disabled>Välj telefon</option>
              <option value="iphone">iPhone</option>
              <option value="samsung">Samsung</option>
              <option value="huawei">Huawei</option>
              <option value="oneplus">OnePlus</option>
            </select>

            <select name="model" defaultValue="">
              <option value="" disabled>Välj modell</option>
              <option value="iphone13">iPhone 13</option>
              <option value="iphone14">iPhone 14</option>
              <option value="s22">Samsung S22</option>
            </select>

            <select name="damage" defaultValue="">
              <option value="" disabled>Välj skada</option>
              <option value="screen">Skärmbyte</option>
              <option value="battery">Batteribyte</option>
              <option value="water">Fuktskada</option>
              <option value="back">Baksida</option>
            </select>

            <select name="accessory" defaultValue="">
              <option value="" disabled>Produkt och tillbehör</option>
              <option value="none">Inga tillbehör</option>
              <option value="case">Skal/Fodral</option>
              <option value="protector">Skärmskydd</option>
            </select>
          </div>
          <button className="button-calc" type="button">Beräkna kostnad</button>
        </section>  

        <div className="garanti-text">
          <h2>Garanti</h2>
          <p> 
            Vi vill att du ska känna dig trygg med din reparation. Därför lämnar vi alltid 12 månaders garanti på både reservdelar och utfört arbete när du reparerar din telefon eller surfplatta hos oss.
            Vad täcker garantin?
            Garantin gäller för funktionsfel på den utbytta delen. Det innebär att om reservdelen slutar fungera av sig själv, eller om det uppstår problem med exempelvis touch-funktionen utan att telefonen utsatts för skada, så byter vi ut den kostnadsfritt.
            Reservdelar: Täcker fabrikationsfel på skärmar, batterier och andra komponenter.
            Arbete: Täcker eventuella fel som uppstått i samband med montering.
          </p>
          <p> Vad täcker garantin inte?
            Garantin gäller inte om felet har uppstått genom yttre påverkan eller handhavandefel efter reparationen. Exempel på detta är:
            Yttre åverkan: Sprickor i glaset, repor, böjd ram eller skador orsakade av att enheten tappats.
            Fuktskador: Om telefonen utsätts för vatten eller fukt upphör garantin att gälla.
            Mjukvarufel: Fel som orsakas av uppdateringar, virus eller appar.
            Tidigare skador: Följdfel som beror på skador som fanns på enheten innan reparationen (t.ex. skadat moderkort).
          </p>
        </div>
      </main>
    </div>
  );
}