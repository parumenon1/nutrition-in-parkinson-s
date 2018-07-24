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

class MyView3 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
   
     }
      </style>
       <img src="./../images/food5.png" class="center" width="1500"  height="400">
       <div class="card">
        <h1>Diet Plan Suggestions</h1>
        <p>Food has the potential to influence the absorption of many medications.</p>

<p>For some people with Parkinson’s, food groups (carbohydrates, proteins) should be distributed equally throughout the day, but for others it may be helpful for each type of food to be split into different meals during the day, increasing the consumption of carbohydrates in every meal and restricting protein intake to the evening meal alone. Each individual’s needs and response to protein intake and therapy efficacy differ so it is important to talk to your doctor or an experienced dietitian before making any changes.</p>

<p>Three main meals and two snacks should be timed at set intervals to maximise the effectiveness of prescribed medication, with the following proportions of total daily calories:</p> 

<li>Breakfast 20%;</li>
<li>Lunch and dinner 35% each;</li>
<li>Snacks 5% each.</li>
<p>Breakfast could be coffee with a slice of bread, preferably wholemeal, with jam or honey.</p>

<p>Snacks could be based on fruit or complex carbohydrates such as rusks or crackers.</p>

<p>Lunch could consist of a starter of pasta or rice or cereals such as spelt, barley or oats with no added protein (meat, fish, eggs, cheese or pulses), accompanied by a side dish of cooked and/or raw vegetables, extra virgin olive oil and fruit.</p>

<p>Dinner could consist of protein (meat, fish, eggs, pulses or cheese), accompanied by vegetables, fruit and bread or potatoes or pasta and pulse starters.</p>

<p>Protein intake should not exceed 0.8 g per kilo of ideal weight. For some people this should be restricted to the evening meal alone although this will mean that night-time movement is limited.</p>
</div>
These suggestions are only guidelines and you must consult you doctor before making any major changes.
<p>Reference: "My perfect dish" Endorsed by EPDA</p>
    `;
    }
}

window.customElements.define('my-view3', MyView3);
