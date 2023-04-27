const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic (CAR)',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (formerly Swaziland)',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia (formerly Macedonia)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City (Holy See)',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];
  
   
  
  const countryDropdown = document.getElementById('countryDropdown');
  for (let i = 0; i < countries.length; i++) {
    const option = document.createElement('option');
    option.text = countries[i];
    countryDropdown.add(option);
  }

                                    // computation sa add to cart
  
 const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const numberInput = document.getElementById("number");
const cartItems = document.querySelectorAll(".cart_item");

function updateCart() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const amount = parseInt(cartItems[i].querySelector(".amount").textContent);
    const subTotal = amount * numberInput.value;
    cartItems[i].querySelector(".total").textContent = `Total: ${subTotal}`;
    total += subTotal;
  }
  document.querySelector(".total").textContent = `Total: ${total}`;
}

minusBtn.addEventListener("click", () => {
  if (numberInput.value > 0) {
    numberInput.value--;
    updateCart();
  }
});

plusBtn.addEventListener("click", () => {
  numberInput.value++;
  updateCart();
});

numberInput.addEventListener("input", updateCart);


document.addEventListener("DOMContentLoaded", function() {
  let generateNewDivs = document.querySelectorAll(".generateNewDiv");
  let insertNewDivHere = document.getElementById("insertNewDivHere");
  let sumDisplay = document.getElementById("sumDisplay");
  let currentSum = 0;

    // function to add all the price in the cart items

    
  function updateTotalSum(price) {
    currentSum += price;
    sumDisplay.textContent = `$${currentSum.toFixed(2)}`;
  }

  function handleClick(event) {
    event.preventDefault();
    
    let price = parseFloat(event.target.closest('.card').querySelector('.p_list').textContent.replace('$',''));

    // let price = parseFloat(event.target.textContent);
    let displayPrice = !isNaN(price) && price >= 0 ? `${price.toFixed(2)}` : "0.00";

    let newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.innerHTML = `
      <div class="col col-6"><img src="" alt="affffa"></div>
      <div class="col col-6">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <span class="input-group-text">${displayPrice}</span>
        </div>
      </div>
    `;
    insertNewDivHere.appendChild(newRow);
    updateTotalSum(price);
  }

  generateNewDivs.forEach(function(generateNewDiv) {
    generateNewDiv.addEventListener("click", handleClick);
  });
});