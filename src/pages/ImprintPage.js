import React, { useEffect } from 'react';

const ImprintPage = () => {
  useEffect(() => {
    document.title = 'Timothy Ljunggren - Impressum';
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Impressum</h1>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="mb-4"><strong>yournee GmbH</strong><br/>Kollonnenstr. 8<br/>10827 Berlin<br/>Deutschland</p>
            
            <p className="mb-4"><strong>Vertreten durch:</strong><br />
            Geschäftsführer Timothy Ljunggren</p>
            
            <p className="mb-2">
              <strong>Telefon:</strong> 
              <a href="tel:+4915164581384" className="text-blue-400 hover:text-blue-300 ml-2">
                +49 1516 4581384
              </a>
            </p>
            <p className="mb-2">
              <strong>E-Mail:</strong> 
              <a href="mailto:timothy@antimala.de" className="text-blue-400 hover:text-blue-300 ml-2">
                timothy@antimala.de
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Redaktionell verantwortlich</h2>
          <p className="mb-4">Timothy Ljunggren, yournee GmbH (Anschrift siehe oben)</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br/>
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p className="mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
            wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
            die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
            den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p className="mb-4">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
            Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der 
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
            Links umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p className="mb-4">
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
            Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
            erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
            Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
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

export default ImprintPage;