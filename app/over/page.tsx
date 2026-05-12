export default function OverPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-6">
      <h1 className="font-display text-3xl text-ink md:text-4xl">Over de test</h1>
      <p className="mt-4 text-lg text-ink/80">
        Transparantie over waar deze tool vandaan komt — en wat hij wel en niet
        kan.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-2xl text-ink">Achtergrond</h2>
        <p className="text-ink/85">
          Het RIASEC-model is ontwikkeld door de Amerikaanse psycholoog John
          Holland in de jaren vijftig. Het verdeelt interesses grofweg in zes
          types: Realistisch, Intellectueel, Artistiek, Sociaal, Ondernemend en
          Conventioneel. Het model wordt breed gebruikt in studie- en
          loopbaanbegeleiding, altijd in combinatie met gesprek en context.
        </p>
        <p className="text-ink/85">
          Deze webapp gebruikt een verkorte zelfrapportagelijst met
          activiteitsitems. De uitkomst is een drielettercode die weergeeft welke
          types het sterkst aanwezig zijn in jouw antwoorden.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-2xl text-ink">Gebruik in het onderwijs</h2>
        <p className="text-ink/85">
          Docenten en decanen kunnen de tool klassikaal inzetten als
          gespreksstarter. De optionele groepscode helpt om anoniem te groeperen
          zonder persoonsgegevens te verzamelen. Bespreek de uitkomsten altijd in
          een veilige setting en benadruk dat het om zelfinzicht gaat, niet om
          etiketten.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-2xl text-ink">Beperkingen</h2>
        <p className="text-ink/85">
          De test meet vooral interesses en voorkeuren, niet alle
          competenties of omstandigheden. Culturele achtergrond, zelfvertrouwen
          en hoe je je op dat moment voelt, kunnen antwoorden beïnvloeden. Dit is
          geen officieel psychologisch instrument en geen selectietest voor
          opleidingen of banen.
        </p>
        <p className="text-ink/85">
          Gebruik de code als kompas, niet als eindstation — juist daar begint
          het echte gesprek.
        </p>
      </section>
    </div>
  );
}
