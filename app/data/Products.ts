export type Coffee = {
  id: string;
  name: string;
  price: number;
  notes: string;
  limited: boolean;
  stripe: string;
  category: "classic" | "flavored" | "treat" | "tea";
};

export const COFFEES: Coffee[] = [
  {
    id: "after-dark",
    name: "After Dark Roast",
    notes: "Indonesian whole bean coffee • Earthy cocoa notes • Bold dark roast",
    price: 23,
    limited: false,
    stripe: "https://buy.stripe.com/3cI6oH3JE3cDfD1gs7efC0e",
   category: "classic",

  },
  {
    id: "la-buena-hora",
    name: "La Buena Hora",
    notes: "Mexican whole bean coffee • Smooth nutty flavor • Balanced medium roast",
    price: 23,
    limited: false,
    stripe: "https://buy.stripe.com/dRm14n6VQbJ962r6RxefC0h",
    category: "classic",

  },
  {
    id: "higher-ground",
    name: "Higher Ground",
    notes: "Organic Peru whole bean coffee • Smooth premium roast • Balanced finish",
    price: 22.99,
    limited: false,
    stripe: "https://buy.stripe.com/bJe9ATfsm6oP4Yn4JpefC0W",
    category: "classic",

  },
  {
    id: "anchor",
    name: "Anchor",
    notes: "Organic Guatemala whole bean coffee • Smooth balanced flavor • Medium roast",
    price: 22,
    limited: false,
    stripe: "https://buy.stripe.com/aFa8wP6VQeVl9eDdfVefC0g",
    category: "classic",

  },
  {
    id: "true-north",
    name: "True North",
    notes: "Signature whole bean blend • Bold balanced flavor • Smooth finish",
    price: 19.99,
    limited: false,
    stripe: "https://buy.stripe.com/eVqcN57ZU3cD8az0t9efC0X",
    category: "classic",

  },
  {
  id: "cafe-fuego",
  name: "Café Fuego",
  notes: "Espresso roast • Dark chocolate • Caramel • Smoky • Bold • Full-bodied",
  price: 21.99,
  limited: false,
  stripe: "https://buy.stripe.com/8x2dR97ZUbJ99eDb7NefC0Y",
  category: "classic",
},
  {
  id: "obsidian-king",
  name: "Obsidian King",
  notes: "Dark roast whole bean coffee • Bold smoky flavor • Rich smooth finish",
  price: 23.99,
  limited: false,
  stripe: "https://buy.stripe.com/9B64gz7ZUeVl76v5NtefC0Z",
  category: "classic",

},
{
  id: "desert-ember",
  name: "Desert Ember",
  notes: "Flavored whole bean coffee • Warm mocha-inspired flavor • Smooth finish",
  price: 21.99,
  limited: false,
  stripe: "https://buy.stripe.com/dRm3cv5RM9B1aiH5NtefC10",
  category: "flavored",
},
{
  id: "golden-hour-creme",
  name: "Golden Hour Crème",
  notes: "Vanilla crème flavored whole bean coffee • Smooth creamy finish",
  price: 21.99,
  limited: false,
  stripe: "https://buy.stripe.com/28E28r1Bw5kL2Qf6RxefC11",
  category: "flavored",
},

{
  id: "golden-barrel",
  name: "Golden Barrel",
  notes: "Whiskey Caramel Cream flavored whole bean coffee • Rich caramel, cream & whiskey notes • Warm, bold finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/6oU14n2FAfZpbmL1xdefC12",
  category: "flavored",
},
{
  id: "sunset-pecan",
  name: "Sunset Pecan",
  notes: "Caramel Pecan flavored whole bean coffee • Sweet caramel meets buttery pecan • Smooth nutty finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/6oUaEX2FAaF54Yn4JpefC13",
  category: "flavored",
},
{
  id: "sweet-escape",
  name: "Sweet Escape",
  notes: "Chocolate Caramel Turtle flavored whole bean coffee • Rich chocolate • Sweet caramel • Toasted pecans • Smooth, decadent finish",
  price: 21.99,
  limited: false,
  stripe: "https://buy.stripe.com/bJedR92FA7sTcqP8ZFefC14",
  category: "flavored",
},
{
  id: "sun-chaser",
  name: "Sun Chaser",
  notes: "Breakfast Blend whole bean coffee • Smooth, balanced flavor • Gentle sweetness • Clean, satisfying finish",
  price: 18.99,
  limited: false,
  stripe: "https://buy.stripe.com/cNi8wP1Bw5kL4Ynfo3efC15",
  category: "classic",
},
{
  id: "copper-canyon",
  name: "Copper Canyon",
  notes: "Brazilian whole bean coffee • Notes of toasted nuts • Milk chocolate • Naturally sweet finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/28EcN5a8228z3Uj5NtefC16",
  category: "classic",
},
{
  id: "desert-owl",
  name: "Desert Owl",
  notes: "Spotted Owl whole bean coffee • Smooth medium roast • Cocoa • Toasted nuts • Clean, satisfying finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/7sY6oHa82fZp9eDgs7efC17",
  category: "classic",
},
{
  id: "whiskey-hollow",
  name: "Whiskey Hollow",
  notes: "Chocolate Bourbon flavored whole bean coffee • Rich chocolate • Smooth bourbon-inspired flavor • Bold, velvety finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/dRm00j1Bw4gH9eDcbRefC18",
  category: "flavored",
},
{
  id: "sweet-trails",
  name: "Sweet Trails",
  notes: "Cookie Dough flavored whole bean coffee • Sweet • Creamy • Smooth, comforting finish",
  price: 19.99,
  limited: false,
  stripe: "https://buy.stripe.com/00w8wP2FA9B1eyX2BhefC19",
  category: "flavored",
},


  // TEAS (kept in the same array - totally fine)
  {
    id: "soft-horizon",
    name: "Soft Horizon",
    notes: "Whole leaf chamomile tea • Caffeine-free herbal blend • Smooth calming finish",
    price: 10,
    limited: false,
    stripe: "https://buy.stripe.com/9B628r3JE14v9eD1xdefC0a",
    category: "tea"
  },
  {
    id: "desert-current",
    name: "Desert Current",
    notes: "Whole leaf Moroccan mint green tea • Light caffeine • Crisp refreshing flavor",

    price: 10,
    limited: false,
    // ✅ FIXED: removed the comma at the end
    stripe: "https://buy.stripe.com/aFadR92FA28z1Mba3JefC0b",
    category: "tea"
  },
  {
  id: "golden-dunes-15",
  name: "Golden Dunes (1.5oz)",
  notes: "Whole leaf honeybush herbal tea • Smooth comforting flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/3cI00j7ZU00raiHcbRefC0s",
  category: "tea"
},
{
  id: "first-light-15",
  name: "First Light (1.5oz)",
  notes: "Whole leaf English breakfast tea • Bold energizing black tea blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/00wbJ15RM14vbmLa3JefC0q",
  category: "tea"
},
{
  id: "desert-heat-15",
  name: "Desert Heat (1.5oz)",
  notes: "Whole leaf ginger root herbal tea • Warming spicy flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/28EdR96VQ9B14Yn7VBefC0o",
  category: "tea"
},
{
  id: "moon-drift-15",
  name: "Moon Drift (1.5oz)",
  notes: "Whole leaf chamomile lavender tea • Caffeine-free herbal blend • Relaxing finish",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/eVqdR90xs3cD2Qffo3efC0n",
  category: "tea"
},
{
  id: "coastal-drift-15",
  name: "Coastal Drift (1.5oz)",
  notes: "Whole leaf Earl Grey tea • Smooth balanced black tea blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/28E5kD5RMcNdaiH8ZFefC0m",
  category: "tea"
},
{
  id: "desert-breeze-15",
  name: "Desert Breeze (1.5oz)",
  notes: "Whole leaf spearmint herbal tea • Cool refreshing flavor • Caffeine-free blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/dRmbJ13JE8wXgH50t9efC0w",
  category: "tea"
},
{
  id: "sunset-sangria",
  name: "Sunset Sangria",
  notes: "Whole leaf hibiscus fruit tea • Vibrant fruity flavor • Refreshing herbal blend",
  price: 10,
  limited: false,
  stripe: "https://buy.stripe.com/bJe7sL4NI7sT3UjejZefC0A",
  category: "tea"
},
{
  id: "desert-fuel",
  name: "Desert Fuel",
  notes: "Dark chocolate espresso beans • Bold crunch • Rich coffee bite",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/4gMaEX7ZUdRhaiHcbRefC0F",
  category: "treat"
},

{
  id: "golden-hour-bites",
  name: "Golden Hour Bites",
  notes: "Dark chocolate mocha centers • Smooth creamy filling • Sweet finish",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/4gM6oH3JEdRh62r8ZFefC0G",
  category: "treat"
},

{
  id: "sweet-escape-dough-bites",
  name: "Sweet Escape Dough Bites",
  notes: "Chocolate shell • Sweet brownie cookie dough center • Smooth dessert-style treat",
  price: 5,
  limited: false,
  stripe: "https://buy.stripe.com/8x25kD5RM6oP9eD1xdefC0K",
  category: "treat"
},

{
  id: "mocha-moon-drops",
  name: "Mocha Moon Drops",
  notes: "Chocolate shell • Coffee-filled center • Rich mocha flavor • Made for coffee lovers",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/aFa28r3JEfZpbmL1xdefC0J",
  category: "treat"
},
{
  id: "sunbaked-kisses",
  name: "Sunbaked Kisses",
  notes: "Snickerdoodle cookie dough bites • Soft cinnamon sugar flavor • Sweet, buttery finish",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/7sY9AT6VQ14v2Qffo3efC0S",
  category: "treat",
},
{
  id: "desert-pebbles",
  name: "Desert Pebbles",
  notes: "Crispy milk chocolate bites • Crunchy • Creamy milk chocolate • Perfect snack-size treat",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/7sY3cv4NI28z8az5NtefC0T",
  category: "treat",
},
{
  id: "desert-glow",
  name: "Desert Glow",
  notes: "Peanut butter toffee • Crunchy peanuts coated in rich peanut butter toffee • Sweet & salty",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/9B65kDcga3cD76vdfVefC0U",
  category: "treat",
},
{
  id: "desert-inferno",
  name: "Desert Inferno",
  notes: "Chili Lemon peanuts • Crunchy roasted peanuts • Zesty lemon • Bold chili pepper kick • Sweet, tangy & spicy",
  price: 6,
  limited: false,
  stripe: "https://buy.stripe.com/eVq3cva8200r62r5NtefC0V",
  category: "treat",
},

];

export const TEA_IDS = ["soft-horizon", "desert-current","golden-dunes-15","first-light-15","desert-heat-15","moon-drift-15","coastal-drift-15","desert-breeze-15","sunset-sangria"];

export const CLASSIC_COFFEES = COFFEES.filter((p) => p.category === "classic");
export const FLAVORED_COFFEES = COFFEES.filter((p) => p.category === "flavored");
export const TEAS = COFFEES.filter((p) => p.category === "tea");
export const CHOCOLATES = COFFEES.filter((p) => p.category === "treat");