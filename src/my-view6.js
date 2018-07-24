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

class MyView6 extends PolymerElement {
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
    width: 70%;
     }
      </style>
      
      <div class="card">
      <img src="./../images/avoid.png" class="center"  height="200">
      <li>Cured, fermented or air-dried meats or fish</li>
      <li>Aged cheeses: aged cheddar or Swiss, blue cheeses, Camembert</li>
      <li>Fermented cabbage: sauerkraut, kimchi</li>
      <li>Soybean products, including soy sauce</li>
      <li>Red wine and tap beer</li>
      </div>
      <div class="card">
      <figure>
      <figcaption><b>Role of Nutrition in Parkinson's disease as in review article
      "The emerging role of nutrition in Parkinson's Disease" by E.Seidl, A.Jose, H.Bilyk and A Potashkin</b></figcaption>
      <fig><img src="./../images/food4.png" class="center"  height="400" width ="70"></fig>
      
      </figure>
      </div>
    `;
    }
}

window.customElements.define('my-view6', MyView6);
