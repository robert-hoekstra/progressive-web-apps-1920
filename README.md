# Progressive Webapps
//Robuuste, toegankelijke websites ontwerpen en maken …

## Feedback punten
3 punten waar ik graag feedback over zou willen hebben:
* Manifest
* npm build, watch, run. What? Wat valt er precies onder tooling?
* Wat moet de service worker precies doen? Ik cache nu gewoon pagina's en css...

## Booky de OBA mascotte!
Een applicatie om informatie te verzamelen voor jouw werkstuk!

## Inhoudsopgave

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


### Statistiek

#### Voor optimalisatie

#### Na optimalisatie


### Live on Heroku
The applicatie staat live op heroku en wordt gedeployed vanuit deze repo: [https://github.com/robert-hoekstra/pwa](https://github.com/robert-hoekstra/pwa)
De applicatie kan gestart worden door op de link te klikken bovenaan de repo!

### Lokaal op eigen machine
Zorg ervoor dat npm en node geinstalleerd is op jouw device!

* clone repo
* cd docs
* npm install
* npm run
* navigeer naar localhost:3000 in de browser

### Node & NPM Installeren
[node](https://nodejs.org/en/)
[npm](https://docs.npmjs.com/cli/install)