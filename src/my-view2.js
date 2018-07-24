/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
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
    width: 90%;
     }
     
      </style>
 <img src="./../images/food2.jpg" class="center"  height="500">
 <div class="card">
 <h1>Major Food Categories- Carbohydrates, Fats and Fiber</h1>
 <b>Carbohydrates:</b> 
 <p>Sugars in themselves do not interfere with prescribed medications, although they appear, in some cases, to affect their transport to the brain, as a result of increased secretion of insulin which reduces the level of circulating amino acids.
 A balanced diet of carbohydrates and proteins improves motor performance </p>
 <b>Fats:</b>
 <p>The intake of fats should be controlled, as they slow down gastric emptying and therefore prolong the absorption time of medication. 
 Diet high in fat exacerbate progression by exhibiting increased Dopaminergic depletion. 
 In addition, a diet rich in saturated fats increases cholesterol and the risk of cerebrovascular disease. Monosaturated fats (olive oil) and polyunsaturated fats (fish and dried fruit) are preferable because of their  protective role.</p>
 <b>Fiber:</b>
 <p>This is a fundamental component of the diet of someone with Parkinson’s and at least 30-35 g of fiber should be eaten daily in order to reduce constipation. Fibre should preferably be insoluble (bran) as this speeds up gastric emptying and passage through the intestine.</p>
 </div>
 <div class="card">
 <h1>Nutrition Recommendations- Early-Mid, Advanced and End  Stages</h1>
 
    <div class="card">
    <b>EARLY-MID STAGE</b>
    <p>There is no specific kind of diet required in early-mid stages. 
    It is advised to eat a healthy and well balanced diet.</p>
    <p>Most Parkinson's patients experience constipation. It is advised to eat high fiber food like lentils, fruits, artichoke, broccoli(atleast 30-35gm/day)
    and drink six to eight 8 ounce glasses of water per day. Warm liquid consumption in morning can help stimulate bowel movements</p>
    <p>Monitoring od weight and blood pressure should be done on regular basis and should be informed to physician in cases that doesn't seem common</p>
    </div>
    <div class="card">
    <b>ADVANCED STAGE</b>
    <p>If patient cannot maintain weight through oral diet alone, Oral Nutrition Support should be provided.
     Food Fortification, High energy and small energy dense meals should be explored first before Oral Nutrition Support.</p>
    <p>Special attention should be given if patient is on Puree diets due to swallowing dificulties as it could provide varying 
    nutritional adequacy and can be unpalatable though not prepared imaginatively.</p>
    <p>Swallowing difficulties need to be addressed promptly to prevent weightloss and malnutrition.
    Dysphagia can occur in later stages. All of these can lead to need of expert assessment from speech and language 
    therapist regarding food texture modification.</p>
    <p>In cases of severe swallowing difficulties, Active Nutritional Support via enteral route could be considered.</p>
    <p>Calcium and VitaminD intake should be strictly monitored as there is risk of osteoporosis. 1000-1500MG Calcium and
    10-15mcg VitaminD should be taken on daily basis. Various researches as propose that dietary regulation of VitaminD can 
    slow Parkinson's progression but also pose a risk if consumed in very high quantities </p>
    <p>Prevalence of Orthostatic hypotension may be experienced by 50% Parkinsons Patients. Orthostatic Hypotension  is a Sudden
    fall in blood pressure that occurs when person assumes a standing position. For such patients it is advised to:
    <li>Avoid large meals</li>
    <li>Reduce carbohydrate intake specially sugars</li>
    <li>Increase salt intake</li>
    <li>Increase fluid intake</li></p>
    <p>It is also important to address the timing of Levodopa medication around melatimes to ensure the dietary 
     protein doesn't interfere with absorption pf Levodopa. It is advised to have a 40min delay between taking
     Levodopa and eating a meal.</p>
     <p>Iron supplements can also decrease absorption of levodopa so they should be separated from medications by at least two hours.</p>
     <p> Antioxidant rick foods like artichokes, okra, kale, bell peppers, potatoes, berries, pears, apples, grapes, grains
  , eggs,  kidney beans, edamame, lentils, pecans, walnuts, hazelnuts can be consumed</p>
  <p>Some beverages such as red wine, coffee and tea are usually permitted.</p>
    </div>
    <div class="card"> 
    <b>END STAGE</b>
    <p>Artificial Nutrition should be withdrawn if it is causing discomfort </p> 
    <p>You may be asked to reduce the volume of enteral feeds to prevent fluid overload</p>
    <p>Oral Nutrition should always be offered but not forced to avoid risk of chocking</p>
    <p>Body weight and patient condition should be monitored continuously</p>
    </div>
   
 </div>
 <b>References:</b>
 <p>1. E.Sedli et al "The emerging role of nutrition in Parkinson's Diease".</p> 
 <p>2.The British Dietetic Association "Best Practices guideline for dietitians on the management of Parkinson's Disease".</p> 
 <p>3.I.Sleemsn et al "The Role of Vitamin D in Disease Progression in Early Parkinson's Disease".</p>  
    `;
  }
}

window.customElements.define('my-view2', MyView2);
