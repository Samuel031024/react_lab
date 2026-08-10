export default function Contact() {
  return (
    <main>
      <h1>Kontakta oss</h1>
      <button 
        id="toggle-info-btn" 
        style={{ marginBotton: '20px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Visa/Dölj Kontaktuppgifter
      </button>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <img src="/Iphone/location.png" alt="Adress ikon" className="icon" />
            <p><strong>Adress:</strong><br />Fixiphone, Kungsgatan 53, 903 26 Umeå</p>
          </div>

          <div className="contact-item">
            <img src="/Iphone/bi_phone.png" alt="Telefon ikon" className="icon" />
            <p><strong>Telefon:</strong><br />090-1234567</p>
          </div>

          <div className="contact-item">
            <img src="/Iphone/mail.png" alt="E-post ikon" className="icon" />
            <p><strong>E-post:</strong><br />info@fixiphone.se</p>
          </div>
        </div>

        <div className="contact-form">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input type="text" id="name" name="name" placeholder="Ditt fullständiga namn" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-postadress</label>
              <input type="email" id="email" name="email" placeholder="Din e-postadress" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Ärende</label>
              <select id="subject" name="subject" defaultValue="reparation">
                <option value="reparation">Fråga om reparation</option>
                <option value="offert">Prisförfrågan/Offert</option>
                <option value="support">Teknisk support</option>
                <option value="annat">Övrigt</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Meddelande</label>
              <textarea id="message" name="message" rows="5" placeholder="Skriv ditt meddelande här..." required></textarea>
            </div>

            <button type="submit" className="submit-buttonn">Skicka meddelande</button>
          </form>
        </div>
      </div>
    </main>
  );
}