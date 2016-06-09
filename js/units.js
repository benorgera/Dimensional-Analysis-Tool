var units = {
    "Length": [
    {"Html":"m","cvt":1, "type":"SI"},
    {"Html":"mm", "cvt:":0.001, "type":"SI"},
    {"Html":"cm", "cvt":0.01, "type":"SI"},
    {"Html":"dm", "cvt":0.1, "type":"SI"},
    {"Html":"dam", "cvt":10, "type":"SI"},
    {"Html":"hm", "cvt":100, "type":"SI"},
    {"Html":"km", "cvt":1000, "type":"SI"},
    {"Html":"in", "cvt":0.0254, "type":"US"},
    {"Html":"ft", "cvt":0.3048, "type":"US"},
    {"Html":"yd", "cvt":0.9144, "type":"US"},
    {"Html":"mi", "cvt":1609.34, "type":"US"},
    {"Html":"AU", "cvt":1.496e11, "type":"Other"},
    {"Html":"ly", "cvt":9.461e15, "type":"Other"},
    {"Html":"pc", "cvt":3.086e16, "type":"Other"},
    {"Html":"ℓ<sub>P</sub>", "cvt":1.6e-35, "type":"Other"}
  ],

  "Area": [
    {"Html":"m<sup>2</sup>", "cvt":1, "type":"SI"},
    {"Html":"mm<sup>2</sup>", "cvt":0.000001, "type":"SI"},
    {"Html":"cm<sup>2</sup>", "cvt":0.0001, "type":"SI"},
    {"Html":"dm<sup>2</sup>", "cvt":0.01, "type":"SI"},
    {"Html":"dam<sup>2</sup>", "cvt":100, "type":"SI"},
    {"Html":"hm<sup>2</sup>", "cvt":10000, "type":"SI"},
    {"Html":"km<sup>2</sup>", "cvt":1000000, "type":"SI"},
    {"Html":"in<sup>2</sup>", "cvt":0.00064516, "type":"US"},
    {"Html":"ft<sup>2</sup>", "cvt":0.09290304, "type":"US"},
    {"Html":"yd<sup>2</sup>", "cvt":0.83612736, "type":"US"},
    {"Html":"mi<sup>2</sup>", "cvt":2589988.110336, "type":"US"},
    {"Html":"ac", "cvt":4046.8564224, "type":"Other"},
    {"Html":"ha", "cvt":10000, "type":"Other"}
  ],
  
  "Volume": [
    {"Html":"L", "cvt":1, "type":"SI"},
    {"Html":"mL", "cvt":0.001, "type":"SI"},
    {"Html":"cL", "cvt":0.01, "type":"SI"},
    {"Html":"dL", "cvt":0.1, "type":"SI"},
    {"Html":"daL", "cvt":10, "type":"SI"},
    {"Html":"hL", "cvt":100, "type":"SI"},
    {"Html":"kL", "cvt":1000, "type":"SI"},
    {"Html":"m<sup>3</sup>", "cvt":1000, "type":"SI"},
    {"Html":"mm<sup>3</sup>", "cvt":1e-6, "type":"SI"},
    {"Html":"cm<sup>3</sup>", "cvt":0.001, "type":"SI"},
    {"Html":"dm<sup>3</sup>", "cvt":1, "type":"SI"},
    {"Html":"dam<sup>3</sup>", "cvt":1000000, "type":"SI"},
    {"Html":"hm<sup>3</sup>", "cvt":1000000000, "type":"SI"},
    {"Html":"km<sup>3</sup>", "cvt":1000000000000, "type":"SI"},
    {"Html":"in<sup>3</sup>", "cvt":0.016387064, "type":"US"},
    {"Html":"ft<sup>3</sup>", "cvt":28.316846592, "type":"US"},
    {"Html":"gal<sub>US</sub>", "cvt":3.785411784, "type":"US"},
    {"Html":"pt<sub>US</sub>", "cvt":0.473176473, "type":"US"},
    {"Html":"qt<sub>US</sub>", "cvt":0.946353, "type":"US"},
    {"Html":"cup<sub>US</sub>", "cvt":0.236588, "type":"US"},
    {"Html":"fl oz<sub>US</sub>", "cvt":0.0295735, "type":"US"},
    {"Html":"gal<sub>SI</sub>", "cvt":4.54609, "type":"SI"},
    {"Html":"pt<sub>SI</sub>", "cvt":0.56826125, "type":"SI"},
    {"Html":"qt<sub>SI</sub>", "cvt":1.13652, "type":"SI"},
    {"Html":"cup<sub>SI</sub>", "cvt":0.284131, "type":"SI"},
    {"Html":"fl oz<sub>SI</sub>", "cvt":0.0284131, "type":"SI"}
  ],

  "Time": [
    {"Html":"s", "cvt":1},
    {"Html":"min", "cvt":60},
    {"Html":"hr", "cvt":3600},
    {"Html":"day", "cvt":86400},
    {"Html":"week", "cvt":604800},
    {"Html":"month", "cvt":2.6298e6},
    {"Html":"year", "cvt":31557600},
    {"Html":"decade", "cvt":315576000},
    {"Html":"century", "cvt":3155760000},
    {"Html":"millenium", "cvt":31557600000},
    {"Html":"fortnight", "cvt":1209600},
    {"Html":"t<sub>P</sub>", "cvt":5.39056e-44}
  ],

  "Mass": [
    {"Html":"g", "cvt":1, "type":"SI"},
    {"Html":"mg", "cvt":0.001, "type":"SI"},
    {"Html":"cg", "cvt":0.01, "type":"SI"},
    {"Html":"dg", "cvt":0.1, "type":"SI"},
    {"Html":"dag", "cvt":10, "type":"SI"},
    {"Html":"hg", "cvt":100, "type":"SI"},
    {"Html":"kg", "cvt":1000, "type":"SI"},
    {"Html":"ton<sub>US</sub>", "cvt":907184.74, "type":"US"},
    {"Html":"ton<sub>SI</sub>", "cvt":1000000, "type":"SI"},
    {"Html":"oz", "cvt":28.35, "type":"US"},
    {"Html":"sl", "cvt":14593.903, "type":"US"},
    {"Html":"lb", "cvt":453.592, "type":"US"},
    {"Html":"amu", "cvt":1.661e-24, "type":"Other"},
    {"Html":"m<sub>P</sub>", "cvt":2.17645e-5, "type":"Other"}
  ],

  "Force": [
    {"Html":"N", "cvt":1, "type":"SI"},
    {"Html":"lb", "cvt":4.44822162825, "type":"US"},
    {"Html":"F<sub>P</sub>", "cvt":1.21027e44, "type":"Other"}
  ],

  "Pressure": [
    {"Html":"Pa", "cvt":1, "type":"SI"},
    {"Html":"bar", "cvt":100000, "type":"Other"},
    {"Html":"atm", "cvt":101325, "type":"Other"},
    {"Html":"psi", "cvt":6894.757, "type":"Other"},
    {"Html":"torr", "cvt":133.322, "type":"Other"}
  ],

  "Energy": [
    {"Html":"J", "cvt":1, "type":"SI"},
    {"Html":"kJ", "cvt":1000, "type":"SI"},
    {"Html":"ft·lb<sub>f</sub>", "cvt":1.356, "type":"US"}, 
    {"Html":"btu", "cvt":1055.056, "type":"US"},
    {"Html":"thm", "cvt":105480400, "type":"US"},
    {"Html":"cal", "cvt":4.184, "type":"Other"},
    {"Html":"kcal", "cvt":4184, "type":"Other"},
    {"Html":"kWh", "cvt":3.6e6, "type":"Other"},
    {"Html":"Wh", "cvt":3600, "type":"Other"},
    {"Html":"eV", "cvt":1.6022e-19, "type":"Other"},
    {"Html":"MeV", "cvt":1.6022e-13, "type":"Other"}
  ]
};