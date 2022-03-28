"use strict";
const $ = function(foo)
{
  return document.getElementById(foo);
};

let guesses = 0;

const guess_number = function(num, num2)
{
   if (num === parseInt(num2))
   {
     $("hg").textContent = "Korrekt, og du gættede nummeret på " + guesses + " forsøg. Genindlæs websiden for at prøve igen.";
     $("btn1").disabled = true;
   }
   else if (num2 < num)
   {
     $("hg").textContent = "Nummeret er for lavt";
     $("tl").textContent = "Prøv med et højere tal!";
     $("hgt").value = "";
     $("hgt").focus();
   }
   else
   {
     $("hg").textContent = "Nummeret er for højt";
     $("tl").textContent = "Prøv med et lavere tal!";
     $("hgt").value = "";
     $("hgt").focus();
   }
}

const go = function ()
{
   $('btn1').addEventListener('click', function(){
       num2 = $("hgt").value;
       guesses++;
       $("test2").textContent = guesses + ". " + "forsøg.";
       guess_number(num, num2);
   });
   
   let num = Math.floor(Math.random() * 1000) + 1;
   let num2 = "";
   $("hgt").focus();
   //$("test").textContent = num;
};

window.addEventListener('load', go);