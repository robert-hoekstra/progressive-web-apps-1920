# Progressive Webapps

## Booky de OBA mascotte!
Een applicatie om informatie te verzamelen voor jouw werkstuk!
[![Image from Gyazo](https://i.gyazo.com/14e4847d5d6dc835be68141553e6947e.png)](https://gyazo.com/14e4847d5d6dc835be68141553e6947e)

## Inhoudsopgave
- [Progressive Webapps](#progressive-webapps)
  * [Booky de OBA mascotte!](#booky-de-oba-mascotte-)
  * [Inhoudsopgave](#inhoudsopgave)
    + [Case](#case)
    + [Job Stories](#job-stories)
    + [Service Worker](#service-worker)
    + [Manifest.JSON](#manifestjson)
    + [Tooling](#tooling)
      - [Gulp](#gulp)
        * [Gulp Uglify](#gulp-uglify)
        * [Gulp ImageMin](#gulp-imagemin)
        * [Gulp Concat](#gulp-concat)
        * [Gulp Clean - CSS Clean](#gulp-clean---css-clean)
      - [Express Compression](#express-compression)
    + [Audit](#audit)
      - [Wat is HTTP/2?](#wat-is-http-2-)
    + [Live on Heroku](#live-on-heroku)
    + [Lokaal op eigen machine](#lokaal-op-eigen-machine)
    + [Node & NPM Installeren](#node---npm-installeren)

### Case
De gebruiker leert het OBA kennen door te navigeren door de OBA applicatie. De mascotte Booky helpt je op weg met verschillende elementen die komen kijken bij het maken van een werkstuk.

De leerling leert zo de basisprincipes van een werkstuk maar ook de functie van een bibliotheek en toegankelijkheid die het met zich meebrengt voor de leerling.

### Job Stories
When I .... I want to.... So I can...

Bovenstaande is het format voor een job story. Voor mijn user case heb ik een aantal Job Stories:

* Wanneer ik de applicatie start, wil ik de applicatie kunnen installeren zodat ik die later offline kan gebruiken
* Wanneer offline ben wil ik de applicatie kunnen gebruiken zodat ik niet niks kan doen
* Wanneer ik de applicatie al een keer heb gestart wil ik niet opnieuw alle afbeeldingen inladen zodat ik bespaar op snelheid en data]

### Service Worker
De service worker is een javascript tool die zichzelf installeert op het moment dat de gebruiker op de website komt met een actieve internet verbinding. Het voordeel van het gebruik van een service worker in deze applicatie is dat de applicatie ook gebruikt kan worden als de verbinding wegvalt. Door middel van de service worker kun je instellen welke pagina's en bestanden in de cache moeten komen. Je kunt met de service worker zelfs een 'applike' ervaring creeren in combinatie met een manifest.json. Door deze combinatie is het mogelijk om de applicatie te installeren als een progressive web app!

Een serviceworker heeft wel een paar eisen waar het aan moet voldoen wilt de SW geinstalleerd kunnen worden. Zo moet de applicatie geserveerd worden over een HTTPS verbinding. Een SSL certificaat is dus nodig. Met uizondering van de localhost.

### Manifest.JSON
Het Manifest.json is een bestand die verteld aan de browser hoe de progressive web app heet, welke versie het is en hoe de app eruit moet gaan zien als deze is geinstalleerd op het device van de gebruiker.

[App-Manifest](https://app-manifest.firebaseapp.com/) is een online generator tool die een manifest.json voor jou kan genereren. Het manifest bevat onder andere:

* App Name - De naam van jouw applicatie
* Short Name - Korte naam van de applicatie
* Theme Color - De kleur die bijvoorbeeld de native UI meekrijgt van het device
* Background Color - De achtergrondkleur van de applicatie
* Display Mode - Hoe de applicatie eruit komt te zien, met of zonder browser. Fullscreen of minimalistisch
* Orientation - Portrait of landscape mode
* Application Scope - de scope waar de applicatie zich bevind
* Start URL - de url binnen de scope waar de applicatie begint
* App icon - het icoontje dat men op het springboard van bijvoorbeeld een tablet of telefoon te zien krijgt.


### Tooling
Om de developer omgeving fijner te maken. Maar ook om de content op een zo efficient mogelijke manier aan te bieden. Heb ik gebruik gemaakt van tooling via de package.json. Maar ook via een gulp.js file.

Tooling is een fijne manier om processen te automatiseren met NPM pakketjes die je kan aansturen in je package.json.

#### Gulp
[![Image from Gyazo](https://i.gyazo.com/020bd63fc855af09890fdd34421e5557.png)](https://gyazo.com/020bd63fc855af09890fdd34421e5557)
Gulp is een toolkit om het build proces voor je automatiseren. Zo heb ik Gulp voor het eerst gebruikt in dit project en het bevat mij super goed! Gulp helpt mij door automatisch bestanden te optimaliseren en ze te schrijven in een aangwezen folder. In mijn geval de dist folder.

Gulp werkt door een gulpfile.js te maken. Hierin kun je gulp tasks definieren. In deze tasks definieer je een functie. Vaak bestaat deze functie uit een gulp.src dus een locatie waar de bestanden vandaan gehaald moeten worden. Dan een gulp.pipe, een functie die de data meeneemt en door een subfunctie stuurt zoals uglify, imagemin of concat. En vervolgens wordt het nieuwe bestand geschreven naar een locatie welke gedefinieerd wordt door gulp.dest.

##### Gulp Uglify
Gulp Uglify doet precies dat wat de naam al doet vermoeden. Het maakt jouw geschreven JavaScript super lelijk en onleesbaar. Maar dat maakt voor de eindgebruiker niet uit! En dat is precies waar het voor dient. De JavaScript kan nu sneller ingeladen worden en geparsed. 

##### Gulp ImageMin
Gulp ImageMin is een tool die er voor zorgt dat afbeeldingen door een compressie gaan. En vervolgens naar de dist folder worden geschreven. Door de bestandsgrootte van je afbeeldingen te verkleinen zorg je er voor dat de afbeeldingen sneller ingeladen kunnen worden.

##### Gulp Concat
Gulp concat is een tool die elke file in een folder combineert tot 1 file. In combinatie met uglify kun je zo een gecomprimeerde file maken die maar eenmalig ingeladen hoeft te worden.

##### Gulp Clean - CSS Clean
Gulp Css Clean is een tool die hetzelfde doet als uglify maar dan voor CSS. Je kunt ook aangeven met welke browser het compitabel moet zijn. Bijvoorbeeld voor ie8.

Ook dit heeft als voordeel dat de compressie dusdanig het bestand verkleint dat de laadtijden kleiner zijn dan normaal.

#### Express Compression
Express compression is een package die de volledige Express applicatie (images, templating, scrips etc) comprimeerd naar een kleinere bestandsgrootte om geserveerd te worden naar de gebruiker.
Kleinere bestanden == kortere laadtijden.

### Audit
De audit is hier te vinden [Lighthouse Audit](https://github.com/robert-hoekstra/progressive-web-apps-1920/blob/master/docs/LightHouse.pdf)
Om te kijken om de applicatie te optimaliseren heb ik gekeken naar verschillende oplossingen. Waaronder:

* Een Manifest.JSON
* Een Service Worker
* Instelling van de taal in htlm (lang=nl)
* Kleiner maken van JavaScript
* Kleiner maken van CSS
* Optimaliseren/comprimeren van afbeeldingen
* Werken met responsive waardes
* Werken met de juiste tags in zowel de Head als de Body
* Scripts in de tail inladen of met defer
* JavaScript server side laten renderen voor performance en voor ondersteuningissues.

Wat nog had gekund om nog een hogere score te behalen:
* HTTP/2 instellen voor meerdere requests over 1 lijn. Http/1 zit namelijk vast op 6 requests als maximum

#### Critical Render Path
De Critical Render path is de weg die de browser 'aflegt' vanaf de request naar de server tot het volledig serveren van de applicatie.

Om CRP te optimaliseren moet je begrijpen hoe het CRP werkt.

Het CRP kent een bepaalt aantal kenmerken zoals:
* HTML wordt als eerste ingeladen van top to bottom
* Alles resources die in de HTML worden aangevraagd zorgen er op dat moment voor dat de html stopt met laden tot de resource binnen is.
* Scripts kunnen het beste in de tail van het document worden opgenomen. Of met een async / defer om aan te geven dat het bestand niet synschroon geladen hoeft te worden voor de rendertree.

Je kunt het CRP optimaliseren om je bestanden dus in de juiste volgorde en semantiek te plaatsen.
Daarnaast kun je het CRP optimaliseren door je bestanden zo klein mogelijk te maken. Codeer dus DRY en gebruik de meest efficiente algoritmes. Wanneer je dat hebt gedaan kun je alle code samenvoegen en kleiner maken.

#### Wat is HTTP/2?
Http2 is een nieuw protocol dat door de meeste nieuwe browsers wordt ondersteund. Het is een technisch verhaal. Maar het komt er op neer dat HTTP/2 meer requests over de lijn kan sturen dan een HTTP/1.1 protocol kan. In essentie is het dus mogelijk om met HTTP/2 veel meer verbindingen gelijkmatig tot stand te laten komen.


* Een robot.txt file aanmaken om de applicatie beter te laten indexeren.

Een robot.txt file is een bestand die de crawler van Google helpt de website te indexeren.
In een robot.txt geef je aan welke locaties wel of niet geindixeerd mogen worden. In combinatie met een XML sitemap kan Google jouw website indexeren.

* Viewport beter maken voor het apparaat waar het op geserveerd wordt. 

De viewport wordt nu nog door het grid en de header uit zn maximum getrokken omdat deze niet is geoptimaliseerd voor hele kleine schermen.

### Client-Side vs Server-Side
Tijdens het vak heb ik geleerd om een volledige client side applicatie om te bouwen tot een server side applicatie. De applicatie is gemaakt in een nodejs omgeving met als framework Express 4.xx.

Het voordeel van SS tegen CS is dat je de volledige controle hebt over de applicatie. Je wilt in principe de controle op de server houden en de gebruiker alleen maar statische pagina's serveren. Statische pagina's die dynamisch reageren op de input van de gebruiker.

In mijn situatie heb ik er voor gekozen dat de gebruiker alleen maar JavaScript nodig heeft voor progressive enhanced onderdelen van de applicatie. Het opvragen, ophalen en presenteren van data gebeurt allemaal op de server. En dat is gaaf! Want dat betekend dat jouw gebruiker niet een apparaat nodig heeft dat JavaScript ondersteunt. Dat doet de server namelijk al voor je.

Als de gebruiker wel beschikt over client side JS dan hoort de gebruiker uitspraken van booky. En kan de gebruiker de font-size van de applicatie aanpassen.

Als de gebruiker zijn verbinding met het internet dreigt te verliezen krijgt hij daar een melding van binnen de applicatie en schakelt de applicatie over naar een offline ervaring via de service worker.

### Live on Heroku
The applicatie staat live op heroku en wordt gedeployed vanuit deze repo: [https://github.com/robert-hoekstra/pwa](https://github.com/robert-hoekstra/pwa)
De applicatie kan gestart worden door op de link te klikken bovenaan de repo!

### Lokaal op eigen machine
Zorg ervoor dat npm en node geinstalleerd is op jouw device!

* clone repo
* cd docs
* npm install
* npm run
* navigeer naar localhost:3500 in de browser

### Node & NPM Installeren
[node](https://nodejs.org/en/)
[npm](https://docs.npmjs.com/cli/install)