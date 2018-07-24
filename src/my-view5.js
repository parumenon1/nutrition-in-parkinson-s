/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView5 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
         .input{
        height:35px;
        width:200px;
        font-size: large;
        }
         .click{
        height:40px;
        width:80px;
        font-size: large;
        }
      </style>

      <div class="card">
      <font size="4.5">7:1 Diet helps balance carbohydrates and proteins intake. Amount of protein and carbohydrates to
      be taken per day can be calculated with the following calculator. Amount of protein and carbohydrates taken at each meal can be 
      calculated from the food labels.</font>
      <h1>7:1 Calculator</h1>
      <font size="5">Current weight(Kgs):</font><br> <input class="input" height="80" type="number" id="weight"><br>
      <br><input class="click" type="button" id="button" value="Submit" on-click="initiate"/><br>
      <font size="5">Protein needed per day:</font><br><input class="input"  id="output1" disabled><font size="5">gms that gives</font><input class="input"  id="output3" disabled><font size="5">calories.</font><br>
      <font size="5">Carbs needed per day:</font><br><input class="input"  id="output2" disabled><font size="5">gms that gives</font><input class="input"  id="output4" disabled><font size="5">calories.</font><br>
      <br><input class="click" type="button" id="button" value="Clear" on-click="finish"/><br>
      </div>
      <div class="card">
        <h1>7:1 Diet</h1>
        <font size="4.5">It mainly refers to 7parts of carbohydrates to 1 part of protein consumed. The main advantage of 7:1 Diet is that it helps maintain stable levels of Large Neutral Amino
        Acids which in-turn allows predictable, consistent and optimal respose to Levodopa. The 7:1 diet when 
        compared to Protein Redistribution Diet, allows for normal daytime eating and more flexibility in meal
        planning. Dinner is probably the most difficult meal to plan because the average American dinner
        is high in protein. An alternative is to try to shift your normal diet closer to the 7:1 diet, for
        example, 5:1, and see if that makes a difference. Any major dietary modifications should be discussed
        with your doctor, and a registered dietitian should be consulted to evaluate your dietary
        needs to create an individualized meal plan.</font><br>
        <font size="4.5">
        <b>Sandwiches:</b>
         <li>Use thinly sliced cold cuts.</li>
         <li>Fill out sandwiches with more vegetables such as lettuce, tomatoes,cucumbers, onions, peppers, pickles, alfalfa sprouts, etc.</li>
         <li>Add pickles, onions, and/or celery to turkey salad, chicken salad, and egg salad sandwiches.</li>
        <b>Soups:</b>
         <li>Choose more vegetable soups instead of soups with meat.</li>
         <li>Choose more clear soups instead of cream-based soups.</li>
         <li>Add water instead of milk to condensed soups.</li>
         <li>Add rice, pasta, or vegetables to soups to make them more filing.</li>
        <b>Main Dishes:</b>
         <li>Make vegetables and grains 3/4 of your plate and limit meat to 1/4 .</li>
         <li>Use stronger tasting cheeses such as sharp cheddar, feta, and parmesan to your meal. Less will go farther.</li>
         <li>When making stir fry and pasta dishes, add more vegetables and cut meat in small pieces and mix in.</li>
         <li>For casseroles, decrease the amount of meat and increase the starch(pasta or rice).</li>
         </font>
        </div>
    `;
    }
    initiate(){

        this.shadowRoot.getElementById('output1').value = this.shadowRoot.getElementById('weight').value*0.8;
        this.shadowRoot.getElementById('output2').value = this.shadowRoot.getElementById('weight').value*0.8*7;
        this.shadowRoot.getElementById('output3').value = this.shadowRoot.getElementById('weight').value*0.8*4;
        this.shadowRoot.getElementById('output4').value = this.shadowRoot.getElementById('weight').value*0.8*7*4;

    }
    finish() {
        this.shadowRoot.getElementById('weight').value = "";
        this.shadowRoot.getElementById('output1').value = "";
        this.shadowRoot.getElementById('output2').value = "";
        this.shadowRoot.getElementById('output3').value = "";
        this.shadowRoot.getElementById('output4').value = "";
    }
}

window.customElements.define('my-view5', MyView5);
