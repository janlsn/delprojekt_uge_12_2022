"use strict";
const $ = function(foo)
{
  return document.getElementById(foo);
};

let check = 1;
let guesses = 0;

const guess_word = function(line1)
{
   if ($("hgt").value === line1)
   {
     $("tl").textContent = "Korrekt, og du gættede ordet på " + guesses + " forsøg. Genindlæs websiden for at prøve igen.";
     $("btn1").disabled = true;
   }
   else
   {
     $("tl").textContent = "Prøv med et bogstav, inden du gætter videre!";
     check = 0;
     $("hgt").value = "";
     $("hgt").focus();
   }
}
const attempts = [];
const insert_letter = function(line1, line2)
{
   if (line1.includes($("hgt").value))
   {
     $("tl").textContent = "Gæt ordet!";
     let pos = 0;
     const temp = line2.split("");
     for (let x of line1)
     {
       if (x === $("hgt").value)
       {
         temp[pos] = x;
       }
       pos++;
     }
     $("hg").textContent = temp.join("");
     $("hgt").value = "";
     $("hgt").focus();
     check = 1;
   }
   else
   {
     attempts.push($("hgt").value);
     $("glt").textContent = attempts;
     $("tl").textContent = "Nej, prøv med et andet bogstav, inden du gætter videre!";
     $("hgt").value = "";
     $("hgt").focus();
   }
}

const click_button = function(line1, line2)
{
   if (check === 1)
   {
     guess_word(line1);
   }
   else
   {
     insert_letter(line1, line2)
   }
}

const clear = function()
{
   $("hgt").value = "";
   $("hgt").focus();
}

const go = function ()
{
   $('btn1').addEventListener('click', function(){
       line2 = $("hg").textContent;
       //let guess = $("guesses").value;
       //guess++;
       guesses++;
       //$("guesses").value = guess;
       $("test2").textContent = guesses + ". " + "forsøg.";
       click_button(line1, line2);
   });
   $('btn2').addEventListener('click', function(){
       clear();
   });
   const words = ["telefon", "kamera", "stol", "klaedeskab", "koeleskab", "stoleben", "seng", "landevej", "graesplaene", "computer", "printer", "lampe", "reol", "gulv", "sofabord", "spisebord", "dagligstue", "sovevaerelse", "vindue", "vindueskarm", "doerkarm", "racerbil", "baerbar", "skaerm", "kabel", "tastatur", "musemaatte", "domkirke", "torv", "legeplads", "mikroovn", "fryser", "fotograf", "kaffemaskine", "gulvtaeppe", "fjernsyn", "vaegtaeppe", "spand", "boerste", "karklud", "vandhane", "kurv", "basketball", "fodbold", "haandbold", "badminton", "tennis", "sejlskib", "havn", "lystbaadehavn"];
   let c = 0;
   let num = Math.floor(Math.random() * 50) + 1;
   let line1 = "";
   for (let x of words)
   {
      c++;
      if (c === num)
      {
        line1 = x;
        break;
      }
   }
   
   let line2 = "";
   for (let i = 0; i < line1.length; i++)
   {
     line2 += "-";
   }
   $("hg").textContent = line2;
   $("hgt").focus();
   //$("test").textContent = line1;
};

window.addEventListener('load', go);