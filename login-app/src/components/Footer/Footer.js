import React from "react";
import "./footer.scss";

function Footer() {
  return (
<div class="footer">
          <h2>&copy;<span>{new Date().getFullYear()} </span>Monotype Imaging Inc.</h2>
          <ul>
                <li><a class="trademarks" href="https://www.monotype.com/legal/trademarks" target="_blank">Trademarks</a></li>
                <li><a class="termsOfUse" href="https://www.monotype.com/legal/terms-use" target="_blank">Terms of Use</a></li>
                <li><a class="termsAndConditions" href="https://www.monotype.com/legal/terms-conditions-business" target="_blank">Terms and Conditions of Business</a></li>
                <li><a class="privacyPolicy" href="https://www.monotype.com/legal/privacy-policy" target="_blank">Privacy Policy</a></li>
                <li><a class="contact" href="https://www.monotype.com/company/contact" target="_blank">Contact</a></li>
              </ul>
    </div>
  );
}

export default Footer;
