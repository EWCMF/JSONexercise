# JSONexercise

---

### Opdatering 05/10/20
<p>Programmet er blevet dockerized. <br>
Der er en docker-compose.yml fil så programmet kan startes med kommandoen: docker-compose up når du er inde i projektets mappe. <br>
Fra Docker kører den på port 49162.</p>

---

### Opdatering 28/09/20
<p>Der er nu tre routes: index, lease og liste. <br>
Startsiden har nu to knapper til to routes: En der viser GET metode og en der viser POST. <br>
Listen er på liste route'en og er uændret fra før. Denne tilgås fra højre knap. <br>
Den venstre knap er til en ny lease route hvor data kan indtastes og derefter gemmes i den samlet JSON fil. <br>
Man kan derefter se den nye data på listen.</p>

---

Et Express project hvor json data bliver fodret til html. Det kører på localhost:3000 når programmet er startet. <br>
Løsningen er baseret på Dynamic HTML Table tutorial fra W3schools. <br>
Link: https://www.w3schools.com/js/js_json_html.asp

#### Eksempler på Kode:

Fra ./views/index.hbs

![Alt text](./billeder/billede1.PNG)

Fra ./public/data/samlet.json

![Alt text](./billeder/billede2.PNG)
