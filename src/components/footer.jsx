
export default function Footer() {
  return (
           <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-column contact-info">
              <div className="footer-row">
                <img src="/Iphone/location.png" alt="" className="icon" />
                <p><strong>Huvudkontor:</strong><br />Fixiphone, Kungsgatan 53, 903 26 Umeå</p>
              </div>
              <div className="footer-row">
                <img src="/Iphone/mail.png" alt="" className="icon" />
                <p>E-post: info@fixiphone.se</p>
              </div>
              <div className="footer-row">
                <img src="/Iphone/tele.png" alt="" className="icon" />
                <p>Telefonnummer: 010-1301380</p>
              </div>
              <div className="footer-row">
                <img src="/Iphone/export.png" alt="" className="icon" />
                <p>Leverans med</p>
              </div>
              <img src="/Iphone/fa7-brands_dhl.png" alt="DHL" className="dhl-footer-logo" />
            </div>

            <div className="footer-column">
              <h3>Våra butiker:</h3>
              <table className="footer-table">
                <tbody>
                  <tr>
                    <td>Gävle</td>
                    <td>Skellefteå</td>
                  </tr>
                  <tr>
                    <td>Västerås</td>
                    <td>Norrköping</td>
                  </tr>
                  <tr>
                    <td>Eskilstuna</td>
                    <td>Sundsvall</td>
                  </tr>
                  <tr>
                    <td>Umeå</td>
                    <td>Jönköping</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="footer-column">
              <h3>Tjänster</h3>
              <table className="footer-table">
                <tbody>
                  <tr><td>Reparera iPhone</td></tr>
                  <tr><td>Reparera iPad</td></tr>
                  <tr><td>Reparera Samsung</td></tr>
                </tbody>
              </table>
            </div>

            <div className="footer-column">
              <h3>Information</h3>
              <table className="footer-table">
                <tbody>
                  <tr><td>Om Oss</td></tr>
                  <tr><td>Kontakta Oss</td></tr>
                  <tr><td>GDPR Policy</td></tr>
                  <tr><td>Cookie Policy</td></tr>
                  <tr><td>Köpvillkor</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="footer-bottom-logo">
            <img src="/Iphone/fix.png" alt="Fixiphone Logga" />
          </div>
        </footer>
  );
}