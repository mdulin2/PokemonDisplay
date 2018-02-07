
/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {

    var queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, (tabs) => {
        // exactly one tab.
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    getCurrentTabUrl((url) => {
        var dropdown = document.getElementById('dropdown');
        var poke = document.getElementById('Pokemon');
        poke.addEventListener('click', () => {
            pokemon = getPicture();

            document.body.innerHTML ='';
            document.body.innerHTML = "You choose...<img src='" + pokemon +"' alt = 'test'>";
            
        });
    });
});

//https://pokemondb.net/pokedex/mr-mime

function getPicture(){
  val = Math.floor(Math.random() * 162 );
  if(158 < val){
	  // I will put stupid images of everyone in the club here.
	  var friends = ["./andrew.jpg"];
	  friends.push("./Evan.jpg");
	  friends.push("./kate.jpg");
	  return friends[val-159];
  }
  var Poke = ["bulbasaur"];
  Poke.push("ivysaur");
  Poke.push("venusaur");
  Poke.push("charmander");
  Poke.push("charmeleon");
  Poke.push("charizard");
  Poke.push("squirtle");
  Poke.push("wartortle");
  Poke.push("caterpie");
  Poke.push("metapod");
  Poke.push("Butterfree");
  Poke.push("Weedle");
  Poke.push("Kakuna");
  Poke.push("Beedrill");
  Poke.push("Pidgey");
  Poke.push("Pidgeotto");
  Poke.push("Pidgeot");
  Poke.push("Rattata");
  Poke.push("Raticate");
  Poke.push("Spearow");
  Poke.push("Fearow");
  Poke.push("Ekans");
  Poke.push("Arbok");
  Poke.push("Pikachu");
  Poke.push("Raichu");
  Poke.push("Sandshrew");
  Poke.push("Sandslash");
  Poke.push("nidoran-f");
  Poke.push("Nidorina");
  Poke.push("Nidoqueen");
  Poke.push("nidoran-m");
  Poke.push("nidorino");
  Poke.push("Nidoking");
  Poke.push("Clefairy");
  Poke.push("Clefable");
  Poke.push("Vulpix");
  Poke.push("ninetales");
  Poke.push("jigglypuff");
  Poke.push("wigglytuff");
  Poke.push("zubat");
  Poke.push("golbat");
  Poke.push("crobat");
  Poke.push("oddish");
  Poke.push("Gloom");
  Poke.push("Vileplume");
  Poke.push("Paras");
  Poke.push("parasect");
  Poke.push("venonat");
  Poke.push("venomonth");
  Poke.push("diglett");
  Poke.push("dugtrio");
  Poke.push("meowth");
  Poke.push("persian");
  Poke.push("Psyduck");
  Poke.push("Golduck");
  Poke.push("mankey");
  Poke.push("primeape");
  Poke.push("Growlithe");
  Poke.push("Arcanine");
  Poke.push("Poliwag");
  Poke.push("Poliwhirl");
  Poke.push("Poliwrath");
  Poke.push("Abra");
  Poke.push("Kadabra");
  Poke.push("Alakazam");
  Poke.push("Machop");
  Poke.push("Machoke");
  Poke.push("Machamp");
  Poke.push("Bellsprout");
  Poke.push("Weepinbell");
  Poke.push("Victreebel");
  Poke.push("Tentacool");
  Poke.push("Tentacruel");
  Poke.push("Geodude");
  Poke.push("Graveler");
  Poke.push("Golem");
  Poke.push("Ponyta");
  Poke.push("Rapidash");
  Poke.push("Slowpoke");
  Poke.push("Slowbro");
  Poke.push("Magnemite");
  Poke.push("Magneton");
  Poke.push("Farfetchd");
  Poke.push("Duduo");
  Poke.push("Dodrio");
  Poke.push("Seel");
  Poke.push("Dewgong");
  Poke.push("Grimer");
  Poke.push("Muk");
  Poke.push("Shellder");
  Poke.push("Cloyster");
  Poke.push("Gastly");
  Poke.push("Haunter");
  Poke.push("Gengar");
  Poke.push("Onix");
  Poke.push("Drowzee");
  Poke.push("Hypno");
  Poke.push("Krabby");
  Poke.push("Kingler");
  Poke.push("Voltorb");
  Poke.push("Electrode");
  Poke.push("Exeggcute");
  Poke.push("Exeggutor");
  Poke.push("Cubone");
  Poke.push("Marowak");
  Poke.push("Hitmonlee");
  Poke.push("Hitmonchan");
  Poke.push("Likitung");
  Poke.push("Koffing");
  Poke.push("Weezing");
  Poke.push("Rhyhorn");
  Poke.push("Rhydon");
  Poke.push("Chansey");
  Poke.push("Tangela");
  Poke.push("Kangaskhan");
  Poke.push("Horsea");
  Poke.push("Seadra");
  Poke.push("Kingdra");
  Poke.push("Goldeen");
  Poke.push("Seaking");
  Poke.push("Staryu");
  Poke.push("Starmie");
  Poke.push("mr-mine");
  Poke.push("scyther");
  Poke.push("Jynx");
  Poke.push("Electabuzz");
  Poke.push("Magmar");
  Poke.push("Pinsir");
  Poke.push("Tauros");
  Poke.push("Magikarp");
  Poke.push("Gyarados");
  Poke.push("Lapras");
  Poke.push("Ditto");
  Poke.push("Eevee");
  Poke.push("vaporeon");
  Poke.push("jolteon");
  Poke.push("Flareon");
  Poke.push("Porygon");
  Poke.push("Omanyte");
  Poke.push("Omastar");
  Poke.push("Kabuto");
  Poke.push("Kabutops");
  Poke.push("Aerodactyl");
  Poke.push("Snorlax");
  Poke.push("Articuno");
  Poke.push("Zapdos");
  Poke.push("Moltres");
  Poke.push("Dratini");
  Poke.push("Dragonair");
  Poke.push("Dragonite");
  Poke.push("Mewtwo");
  Poke.push("Mew");
  Poke.push("Umbreon");
  Poke.push("Espeon");
  Poke.push("Entei");
  Poke.push("Raikou");
  Poke.push("Suicune");
  Poke.push("Lucario");
  Poke.push("Pichu");
  console.log(val);
  
  URL = "https://img.pokemondb.net/artwork/" + Poke[val].toLowerCase() +".jpg";
  console.log(URL);
  return URL;
}
