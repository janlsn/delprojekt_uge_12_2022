"use strict";
const $ = function(foo)
{
  return document.getElementById(foo);
};


let num2 = 6;
let num3 = 0;
let count = 1;
let arrOut = [];
let points = 0;

const roll = function(arr)
{
     $("hg").textContent = arr;
     for (let x of arr)
     {
       if (x === 2 || x == 5)
       {
         arrOut.push(x);
         num2--;
       }
     }
     if (!(arr.includes(2)) && !(arr.includes(5)))
     {
       points++;
       $("test3").textContent = "Points: " + points;
     }
     if (num2 === 0)
     {
       $("btn1").disabled = true;
     }
     $("test").textContent = "2'ere eller eller 5'ere, som er taget ud af spillet: " + arrOut;
     $("test2").textContent = "Du har nu " + num2 + " terninger tilbage at slå med...";
     
     $("cid" + count).textContent = count + ". slag: " + arr;
     count++;
};

const go = function ()
{
   $('btn1').addEventListener('click', function(){
      const arr = [];
      for (let i = 0; i < num2; i++)
      {
        let num = Math.floor(Math.random() * 6) + 1;
        arr.push(num);
      }
      const r = document.createElement("tr");
      const c = document.createElement("td");
      c.setAttribute("id", "cid"+count);
      r.appendChild(c);
      t.appendChild(r);
      div.appendChild(t);
      roll(arr);
   });

   const div = document.getElementById("ttt");
   const t = document.createElement("table");
   
};

window.addEventListener('load', go);