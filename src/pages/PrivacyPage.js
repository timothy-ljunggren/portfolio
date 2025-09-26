import React, { useEffect } from 'react';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Timothy Ljunggren - Datenschutzerklärung';
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Datenschutzerklärung</h1>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-medium mb-3">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-medium mb-3">Datenerfassung auf dieser Website</h3>
          <p className="mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
            Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" 
            in dieser Datenschutzerklärung entnehmen.
          </p>

          <p className="mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <p className="mb-4">
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
            zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            <em> Hinweis: Diese Website verwendet keine Tracking-Tools oder Analytics.</em>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
          <p className="mb-4">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
            Website erfasst werden, werden auf den Servern des Hosters gespeichert. 
            Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und 
            Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
            sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-medium mb-3">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-medium mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            yournee GmbH<br />
            Kollonnenstr. 8<br />
            10827 Berlin<br />
            Deutschland<br /><br />
            Vertreten durch: Geschäftsführer Timothy Ljunggren<br /><br />
            Telefon: +49 1516 4581384<br />
            E-Mail: timothy@antimala.de
          </p>

          <h3 className="text-xl font-medium mb-3">Speicherdauer</h3>
          <p className="mb-4">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer 
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck 
            für die Datenverarbeitung entfällt.
          </p>

          <h3 className="text-xl font-medium mb-3">Ihre Rechte</h3>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie 
            diese Einwilligung jederzeit für die Zukunft widerrufen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-medium mb-3">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in 
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
            Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mb-4">
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. 
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h3 className="text-xl font-medium mb-3">Kontaktformular</h3>
          <p className="mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p className="mb-4">
            <strong>Verwendung von Formspree:</strong><br />
            Für die Übermittlung der Kontaktformular-Daten verwenden wir den Dienst Formspree 
            (Formspree Inc., USA). Die von Ihnen eingegebenen Daten werden über Formspree 
            an uns weitergeleitet. Formspree speichert diese Daten gemäß ihrer eigenen 
            Datenschutzrichtlinie. Weitere Informationen finden Sie unter:{" "} 
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">
              https://formspree.io/legal/privacy-policy/
            </a>
          </p>

          <h3 className="text-xl font-medium mb-3">Anfrage per E-Mail oder Telefon</h3>
          <p className="mb-4">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive 
            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke 
            der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Plugins und Tools</h2>
          
          <h3 className="text-xl font-medium mb-3">Keine Tracking-Tools</h3>
          <p className="mb-4">
            Diese Website verwendet bewusst keine Tracking-Tools wie Google Analytics, 
            Facebook Pixel oder ähnliche Dienste. Es werden keine Cookies zu Analysezwecken gesetzt.
          </p>

          <h3 className="text-xl font-medium mb-3">Social Media Links</h3>
          <p className="mb-4">
            Diese Website enthält Links zu sozialen Netzwerken (LinkedIn). Diese Links 
            sind als einfache Verlinkungen realisiert. Es werden keine Plugins oder 
            Widgets von sozialen Netzwerken eingebunden, die bereits beim Aufruf der 
            Website Daten an die jeweiligen Anbieter übertragen würden.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-sm text-gray-400">
            Stand: September 2025
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;