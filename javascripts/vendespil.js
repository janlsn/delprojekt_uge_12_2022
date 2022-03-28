"use strict";

const $ = function (foo)
{
  return document.getElementById(foo);
}
let count = 0;
let gameEnd = 0;
const temp = [];
const temp2 = [];
let points = 0;
let noPoints = 0;
const createPage = function() {
    const arr = [];
    for (let i = 0; i < 2; i++)
    {
      for (let j = 0; j < 50; j++)
      {
        arr.push(j);
      }
    }

    arr.sort(() => Math.random() - 0.5);
    localStorage.setItem("Bruger", 0);
    localStorage.getItem("Bruger");
    $("po").textContent = localStorage.getItem("Bruger");
    let b = $('bod');                               // points to body
    for (let i = 0; i < 100; i++) {
        let d = document.createElement('div');
        d.style.textAlign = 'center';
        d.style.verticalAlign = 'middle';
        d.style.fontSize = '40px';
        d.style.border = "none";
        d.style.backgroundColor = 'silver';
        d.setAttribute('id', "v"+i);              // ref to stylesheet
        b.appendChild(d);
        d.addEventListener('click', function cl(e)
        {
          if (!(e.target.innerText != ""))
          {
            count++;
            if (e.target.innerText === "" && count <= 2)
            {
              e.target.innerText = arr[i];
              temp.push(arr[i]);
              temp2.push("v"+i);
              if (temp.length === 1)
              {
               $(temp2[0]).addEventListener('click', function(event){
                  event.preventDefault();
                 });
              }
              if (temp.length === 2)
              {
                $(temp2[1]).addEventListener('click', function(event){
                  event.preventDefault();
                 });
                $("btn1").disabled = false;
                if (temp[0] === temp[1])
                {
                  $(temp2[0]).style.pointerEvents = 'none';
                  $(temp2[1]).style.pointerEvents = 'none';
                  $("text").textContent = "Tillykke, du havde to ens kort!";
                  points++;
                  localStorage.setItem("Bruger", points);
                  $("po").textContent = localStorage.getItem("Bruger");
                }
                else
                {
                  $("text").textContent = "Desværre, du havde ikke to ens kort!"
                  noPoints++;
                }
              }
            }
          }
        });
    }
$('btn1').addEventListener('click', function()
{
      count = 0;
      $("btn1").disabled = true;
      if (temp[0] === temp[1])
      {
        $(temp2[0]).style.backgroundColor = "black";
        $(temp2[1]).style.backgroundColor = "black";
        gameEnd++;
      }
      $(temp2[0]).textContent = "";
      $(temp2[1]).textContent = "";
      temp.length = 0;
      temp2.length = 0;
      $("text").textContent = "";
      if (gameEnd === 50)
      {
        let allAttempts = points + noPoints;
        alert("Der er ikke flere kort på bordet, og du brugte " + allAttempts + " forsøg på at få de 50 stik!");
        localStorage.removeItem("Bruger");
        location.reload();
      }
 });
  $("btn1").disabled = true;
}
window.addEventListener('load', createPage);