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

class MyView4 extends PolymerElement {
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
        <img src="./../images/food6.png" class="center" width="1000"  height="500">
        <div class="card"><h1>Recipes by American Parkinson Disease Association </h1></div>
        <div class="card">
        <font size="4.5">
        <b>Easy Black Bean Quesadillas</b>
        <li>12 6-inch corn tortillas</li>
        <li>1 15-ounce can black beans, drained and rinsed</li>
        <li>1/2 tsp. chili powder, or to taste</li>
        <li>1 4-ounce can chopped green chilies</li>
        <li>4 ounces Monterey Jack cheese, shredded</li>
        <li>optional: chopped tomatoes, salsa, chopped peppers</li><br>
        Preheat oven to 425 degrees F.
        Mash beans lightly, adding chili powder. Combine well. Spread 2 heaping tablespoons on each
        of 6 tortillas.Top with chilies, and sprinkle with cheese.Top each prepared tortilla with another
        one; press down lightly. Bake for approximately 10 minutes, or until tortilla starts to crisp, and
        cheese melts. Top with salsa, peppers, and/or tomatoes if desired.<br>
        Makes 6 servings. 1 serving = 10g protein
        </font>
        </div>
        <div class="card">
        <font size="4.5">
        <b>Baked Stuffed Squash</b>
        <li>1/2 pound sweet turkey sausage, preferably bulk</li>
        <li>1 cup chopped apples</li>
        <li>1/2 cup chopped onion</li>
        <li>1/2 tsp. ground sage</li>
        <li>1/2 tsp. ground black pepper</li>
        <li>2 medium-size acorn squash</li><br>
        Preheat oven to 375 degrees F. In a bowl, mix together sausage meat (take out of casing if not
        bulk), apples, onion, sage, and pepper. Cut squash in half lengthwise; scoop out seeds and
        stringy portion. Fill squash with sausage mixture. Place in baking dish with a couple of tablespoons
        of water in the bottom; cover, and bake 50 to 60 minutes.<br>
        Yield: 4 servings. 1 serving = 1g protein
        </font>
        </div>
        <div class="card">
        <font size="4.5">
        <b>Pasta Salad</b>
        <li>1 cup cooked macaroni pasta</li>
        <li>1 small stalk (1/2 cup) broccoli, cut into 1 inch florets</li>
        <li>1 small stalk (1/2 cup) cauliflower, cut into 1 inch florets</li>
        <li>1 celery stalk, diced fine</li>
        <li>1 tbs. black olives slices</li>
        <li>1/2 cup sweet pepper, sliced</li>
        <li>1/2 cup chopped tomatoes</li>
        <li>1 tbs. freshly chopped flat-leaf parsley</li>
        <li>2 tbs. olive oil</li>
        <li>1 garlic clove, crushed</li>
        <li>A pinch of ground black pepper</li>
        <li>1 tsp. balsamic vinegar or wine vinegar</li><br>
        Directions:
        Cook the pasta as directed on the box (approximately 6-7 minutes). Drain and rinse pasta in
        water and add 1 tbs. of oil to coat the pasta. Heat the remaining oil in a pan and add all prepared
        vegetables, except parsley, at once. Cook quickly for 4 minutes so the vegetables retain
        crunchiness. Add pepper, salt, parsley and the pasta and cook for 1 more minute. Turn off the
        heat and add the vinegar and combine again. Serve hot.<br>
        Yield: 4 1-cup servings
        1 serving = 1.4g protein
        </font>
        </div>
        <div class="card">
        <font size="4.5">
        <b>Turkey Salad with Cranberry French Dressing</b><br>
        <b>Turkey Salad</b>
        <li>11/2 cups chopped cooked turkey breast without skin</li>
        <li>1 cup diced celery</li>
        <li>3 cups raw red delicious apples with skin</li>
        <li>1/4 cup coarsely chopped pecans</li>
        <li>3 tbs. regular mayonnaise</li>
        <b>Dressing</b>
        <li>1/2 cup jellied cranberry sauce</li>
        <li>1/8 tsp. paprika</li>
        <li>1/8 tsp. dry mustard</li>
        <li>1/8 tsp. pepper</li>
        <li>1tbs. vinegar</li>
        <li>2 tbs. vegetable oil</li>
       <br>
        Directions:
        Combine the turkey salad ingredients in a large bowl. Stir well. Cover and chill thoroughly. Serve
        with Cranberry French Dressing.
         Dressing: combine first four dressing ingredients in small bowl, stirring with a wire whisk until
        smooth. Gradually add the vinegar to the cranberry mixture, alternately with oil, beginning and
        ending with vinegar. Stir well with each addition.
        Eat plain or in a sandwich.<br>
        Yield: 121/2-cup servings with 1 tbs. dressing on each serving.<br>
        1 serving = 4.5g protein
        </font>
        </div>
         <div class="card">
        <font size="4.5">
        <b>Stuffed Peppers</b>
        <li>6 oz. macaroni</li>
        <li>2 tbs. vegetable oil</li>
        <li>1 onion, chopped</li>
        <li>1 clove garlic, crushed</li>
        <li>1 oz. mushrooms</li>
        <li>1 stick celery, chopped</li>
        <li>1 carrot, grated</li>
        <li>1 zucchini, chopped</li>
        <li>1 tbs. tomato puree</li>
        <li>1 slice bread, crumbed</li>
        <li>2 whole green peppers</li>
        Directions:
        Pre-heat oven to 190 degrees F,
        Cook the macaroni as directed on the package. Drain. Heat the oil in a pan and gently fry onion
        and garlic. Add the mushrooms, celery, carrot, and zucchini and fry for a few minutes until soft.
        Add the tomato puree and breadcrumbs. Combine the cooked pasta with the vegetables.
        Season. Cut the top off the peppers. Remove the core and seeds. Stuff with the filling and place
        in a heatproof dish with a little water. Bake in a pre-heated oven for approximately 20 minutes.<br>
        Microwave oven:
       These peppers can also be cooked in a microwave oven on medium/high for 12-15 minutes.<br>
        Yield: 2 servings, 1 serving = 4g protein
        </font>
        </div>
    `;
    }
}

window.customElements.define('my-view4', MyView4);
