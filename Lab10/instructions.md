## Laboration 10: Deck of Cards

Deck of Cards API låter oss dra kort från en eller flera kortlekar.
I response body så får man både vilket värde kortet har (suit och value) samt en URL till en bild på det dragna kortet.

Ni ska skriva en sida som visar ett kort i taget när användaren klickar på en knapp.

- Dokumentation:
  - http://deckofcardsapi.com/
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


1. Skapa en `<button></button>`.

2. Skapa en `<div></div>` där bilden på kortet ska skivas ut.

3. Skriv enJS-fil:
     - a. Använd denna URI för fetchen:
       - "https://deckofcardsapi.com/api/deck/new/draw/?count=1" 
     - b. Kolla i dokumentationen för att se hur du ska plocka ut URL:en till bilden på kortet från data.
     - c. Använd createElement, setAttribute, innerHTMLoch appendChildför att skapa ett image-element, sätta dess
        src-attribut, nollställa div-en och lägga till image-elementet till den.

4. Lägg till en eventListenersom lyssnar på knappen och kör ovanstående funktion vid klick.


## Extra
   Bygg ett kortspel :) Tag hjälp av dokumentationen för API:et. 
   Ni väljer själv vad ni bygger.
   Ett Blackjack-spel kanske?