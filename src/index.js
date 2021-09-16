import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './MenuItem';

// Define the following variables:
//     * name for name of item assigned to 'House Blend'
//     * price for price of item assigned to 1.49
//     * description assigned to 'A smooth, <em>mild</em> blend of
//     coffees from Mexico, Bolivia and Guatemala.'

// Then replace the definition of menuItemElement1 below to use these variables so the output looks exactly the same:

let name = 'House Blend';
let price = 1.49;
let description =
  'A smooth, mild blend of coffees from Mexico, Bolivia and Guatemala.';

const menuItemElement1 = (
  <div>
    <h2>
      {name}, ${price}
    </h2>
    <p>{description}</p>
  </div>
);

// Copy/paste/modify the variables/definitions for menuItemElement2, menuItemElement3, and menuItemElement4 (BAD IDEA IN GENERAL!).  NOTE: We need to use let initially instead of const if we're changing the values of variables and then NO use of let after that.

let name2 = 'Mocha Cafe Latte';
let price2 = 2.35;
let description2 = 'Espresso, steamed milk and chocolate syrup.'

const menuItemElement2 = (
  <div>
    <h2>
      {name2}, ${price2}
    </h2>
    <p>{description2}</p>
  </div>
);

let name3 = 'Cappuccino';
let price3 = 1.89;
let description3 = 'A mixture of espresso, steamed milk and foam.'

const menuItemElement3 = (
  <div>
    <h2>
      {name3}, ${price3}
    </h2>
    <p>{description3}</p>
  </div>

);

let name4 = 'Chai Tea'
let price4 = 1.85;
let description4 = 'A spicy drink made with black tea, spices, milk and honey.'

const menuItemElement4 = (
  <div>
    <h2>
      {name4}, ${price4}
    </h2>
    <p>{description4}</p>
  </div>

);

// After you do this, add menuItemElement2, menuItemElement3, and menuItemElement4 in the definition of the menu element:

const menuElement = (
  <div>
    {menuItemElement1}
    {menuItemElement2}
    {menuItemElement3}
    {menuItemElement4}
  </div>
);

ReactDOM.render(menuElement, document.getElementById('root'));
