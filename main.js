!function(){"use strict";new class{constructor(e){this.cells=e.querySelectorAll(".cell"),this.goblinHead=e.querySelector(".head"),this.activeCell=0,this.nextCell=0}nextTurn(){setInterval((()=>{for(;this.nextCell===this.activeCell;)this.nextCell=Math.floor(Math.random()*this.cells.length);this.activeCell=this.nextCell,this.cells[this.nextCell].appendChild(this.goblinHead)}),1e3)}}(document.querySelector(".field")).nextTurn()}();