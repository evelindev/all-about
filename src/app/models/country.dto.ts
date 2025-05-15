export interface Country {
    name: {
      common: string;
      official: string;
    };
    cca3: string,
    currencies: {
      [code:string]:{
        symbol: string;
        name: string;
      };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
      [lang: string]: string;
    };
    flags: {
      svg: string;
      png: string;
    };
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    timezones: string[];
    continents: string[];
  }

  
