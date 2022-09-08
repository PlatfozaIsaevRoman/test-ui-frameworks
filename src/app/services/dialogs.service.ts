import { Injectable } from '@angular/core';

export class Agent {
  ID: number;

  Name: string;

  Phone: string;

  Picture: string;
}

export class House {
  ID: number;

  Address: string;

  City: string;

  State: string;

  ZipCode: string;

  Price: number;

  Image: string;

  Features: string;

  Favorite?: boolean;

  Agent: Agent;
}

const houses: House[] = [{
  ID: 1,
  Favorite: false,
  Address: '652 Avonwick Gate',
  City: 'Toronto',
  State: 'ON',
  ZipCode: 'M3A25',
  Price: 780000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/1.jpg',
  Features: 'Dishwasher, Disposal, Separate laundry room, 3/4 bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Hardwood flooring in kitchen, Kitchen island, Solid surface countertops in kitchen, Entry foyer, Front living room, Ceiling fan in master bedroom, Master bedroom separate from other, Mirrored door closet in master bedroom, 2nd bedroom: 11x13, 3rd bedroom: 11x14, 4th Bedroom: 18x13, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Convection oven, Double built-in gas ovens, Gas cooktop, Gas stove, Marble/Stone floors',
  Agent: {
    ID: 1,
    Name: 'John Heart',
    Phone: '(213) 555-9392',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png',
  },
}, {
  ID: 2,
  Favorite: false,
  Address: '82649 Topeka St',
  City: 'Riverbank',
  State: 'CA',
  ZipCode: '95360',
  Price: 1750000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/2.jpg',
  Features: 'Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Pantry, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Balcony in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13X20, 3rd bedroom: 13X17, 4th Bedroom: 13X18, 5th Bedroom: 14X16, Alarm system owned, Blinds, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Gas cooktop, Intercom system, Marble/Stone floors, Water conditioner owned, Water filtering system, Window Coverings Throughout',
  Agent: {
    ID: 2,
    Name: 'Olivia Peyton',
    Phone: '(310) 555-2728',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png',
  },
}, {
  ID: 3,
  Favorite: false,
  Address: '328 S Kerema Ave',
  City: 'Milford',
  State: 'CT',
  ZipCode: '06465',
  Price: 350000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/3.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 2nd floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Wet bar in family room, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 16x12, 3rd bedroom: 13x16, 4th Bedroom: 18x12, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Gas cooktop, Marble/Stone floors',
  Agent: {
    ID: 3,
    Name: 'Robert Reagan',
    Phone: '(818) 555-2387',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png',
  },
}, {
  ID: 4,
  Favorite: false,
  Address: '5119 Beryl Dr',
  City: 'San Antonio',
  State: 'TX',
  ZipCode: '78212',
  Price: 455000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/4.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Living/Dining room combo, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 15x13, 3rd bedroom: 12x12, 4th Bedroom: 14x12, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Convection oven, Double built-in electric ovens, Electric cooktop, Intercom system, Tile floors',
  Agent: {
    ID: 4,
    Name: 'Greta Sims',
    Phone: '(818) 555-6546',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png',
  },
}, {
  ID: 5,
  Favorite: false,
  Address: '61207 16th St N',
  City: 'Moorhead',
  State: 'MN',
  ZipCode: '56564',
  Price: 1700000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/5.jpg',
  Features: 'Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Formal living room, Rear living room, Sunken living room, Vaulted ceiling in living room, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 16X17, 3rd bedroom: 14X16, 4th Bedroom: 13X13, 5th Bedroom: 12X12, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Gas cooktop, Marble/Stone floors, Pot shelves, Water conditioner owned, Water filtering system, Window Coverings Throughout',
  Agent: {
    ID: 1,
    Name: 'John Heart',
    Phone: '(213) 555-9392',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png',
  },
}, {
  ID: 6,
  Favorite: false,
  Address: '8512 Tanglewood Cir',
  City: 'Reform',
  State: 'AL',
  ZipCode: '35487',
  Price: 250000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/6.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 11X15, 3rd bedroom: 11X14, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Drapes, Electric cooktop, Marble/Stone floors, Window Coverings Throughout, Wine refrigerator',
  Agent: {
    ID: 2,
    Name: 'Olivia Peyton',
    Phone: '(310) 555-2728',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png',
  },
}, {
  ID: 7,
  Favorite: false,
  Address: '7121 Bailey St',
  City: 'Worcester',
  State: 'MA',
  ZipCode: '01605',
  Price: 555000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/7.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Kitchen island, Recessed lighting in kitchen, Tile countertops in kitchen, Walk-in pantry, Entry foyer, Formal living room, Front living room, Dressing room in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 14x16, 3rd bedroom: 12x13, 4th Bedroom: 13x14, Carpet, Double built-in electric ovens, Drywall, Gas cooktop, Manmade wood or laminate floors, Marble/Stone floors, Water conditioner loope',
  Agent: {
    ID: 3,
    Name: 'Robert Reagan',
    Phone: '(818) 555-2387',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png',
  },
}, {
  ID: 8,
  Favorite: false,
  Address: '620201 Plymouth Rd',
  City: 'Detroit',
  State: 'MI',
  ZipCode: ' 48224',
  Price: 610000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/8.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, 2+ family rooms, Separate family room, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 12x15, 3rd bedroom: 12x15, 4th Bedroom: 12x15, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Electric cooktop, Shutters, Skylight(s), Water conditioner owned, Water filtering system, Window coverings partial',
  Agent: {
    ID: 4,
    Name: 'Greta Sims',
    Phone: '(818) 555-6546',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png',
  },
}, {
  ID: 9,
  Favorite: false,
  Address: '1198 Theresa Cir',
  City: 'Whitinsville',
  State: 'MA',
  ZipCode: '01582',
  Price: 320000,
  Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/9.jpg',
  Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, 1/2 bath downstairs, Formal dining room, 2+ family rooms, Built-in bookcases in family room, Breakfast Bar/Counter, Granite countertops in kitchen, Kitchen island, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Built-in bookcases in master bedroom, Built-in entertainment center in master bedroom, Ceiling fan in master bedroom, Dressing room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13x12, 3rd bedroom: 12x12, 4th Bedroom: 13x12, Alarm system rented, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in gas ovens, Tile floors, Window Coverings Throughout',
  Agent: {
    ID: 1,
    Name: 'John Heart',
    Phone: '(213) 555-9392',
    Picture: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png',
  },
},
];

@Injectable()
export class Service {
  getHouses(): House[] {
    return houses;
  }
}
