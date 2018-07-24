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

class MyView1 extends PolymerElement {
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
        table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 30%;
        }

        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }

       tr:nth-child(even) {
       background-color: #dddddd;
        }
       </style>
        <div class="card">
        <h1>WEIGHT CHANGE % CALCULATOR</h1>
        <font size="5">Weight recorded last time(lbs):</font><br> <input class="input" type="number" id="oldweight"><br>
        <font size="5">Current weight(lbs):</font><br> <input class="input" height="80" type="number" id="newweight"><br>
        <br><input class="click" type="button" id="button" value="Submit" on-click="initiate"/><br>
        <br><input class="input"  id="output" disabled placeholder="%Weight Loss"><br>
        <br><input class="click" type="button" id="button" value="Clear" on-click="finish"/><br>
        <br><font size="5">Assessment of Weight Change</font><br>
        
<table>
  <tr>
    <th>TIME FRAME</th>
    <th>SIGNIFICANT WEIGHT LOSS</th>
  </tr>
  <tr>
    <td>1 WEEK</td>
    <td>GREATER THAN OR EQUAL TO 1-2%</td>
  </tr>
  <tr>
    <td>1 MONTH</td>
    <td>GREATER THAN OR EQUAL TO 5%</td>
  </tr>
  <tr>
    <td>3 MONTHS</td>
    <td>GREATER THAN OR EQUAL TO 7.5%</td>
  </tr>
  <tr>
    <td>6 MONTHS</td>
    <td>GREATER THAN OR EQUAL TO 10%</td>
  </tr>
</table><br>
     <font size="5"> Why should Parkinson's Patients keep a track of weight change:</font><br>
     <font size="4.5"> Since most of Parkinson's patients are elderly and symptoms of bradykinesia, difficulty in chewing
     and swallowing, dyskinsesia, increased calorie need can contribute to weightloss. Side effects of medications include 
     nausea, vomiting, loss of appetite, constipation, hallucinations, and confusion which could also be a factor to loss of weight.</font>
     </div> 
     <b>Reference:</b>
     <p> "Good Nutrition and Parkinsons Disease" by American Parkinson Disease Association.</p>
    `;
    }

    initiate() {

        var weight1 = this.shadowRoot.getElementById('oldweight').value;
        var weight2 = this.shadowRoot.getElementById('newweight').value;
        if (weight1 > weight2) {
            this.shadowRoot.getElementById('output').value = ((weight1 - weight2) / weight1) * 100;
        }
        else {
            this.shadowRoot.getElementById('output').value = "No weight loss";
        }
    }

    finish() {
        this.shadowRoot.getElementById('oldweight').value = "";
        this.shadowRoot.getElementById('newweight').value = "";
        this.shadowRoot.getElementById('output').value = "";
    }
}

window.customElements.define('my-view1', MyView1);
