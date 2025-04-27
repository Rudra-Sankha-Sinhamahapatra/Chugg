export interface Wallpaper {
  url: string;
  name: string;
}

export interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url:"https://ideogram.ai/assets/progressive-image/balanced/response/MbKPsa9KQtGV9uPXhyOFpg",
      name:"Motivation",
      liked:true,
      suggested:true,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/nqRs6Cg4ThWJwzCVzZnWyg",
      name: "Heritage",
      liked:true,
      suggested:false,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/N0Gf7WJTTUesLu6eBs__Zg",
      name: "Warrior",
      liked:false,
      suggested:true,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/HkEAG1YAQJqv47J4NG2b3w",
      name: "The Lake",
      liked:false,
      suggested:false,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/tTJydW8GQBqVmTsN6pW4pw",
      name: "The future",
      liked:false,
      suggested:false,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/qDK-LqkKT-mf3yrDm1dFlg",
      name: "The evening",
      liked:false,
      suggested:false,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/UQSJf85JRVGywiDrGTf1pA",
      name: "The mountains",
      liked:false,
      suggested:true,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/sYOiOhgTSU611YM5-tBMKQ",
      name: "Vibrant",
      liked:true,
      suggested:false,
      library:true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ylK59a5yQJKc-67YVg1RlQ",
      name: "Your journey",
      liked:true,
      suggested:true,
      library:false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/C2ho6b6HQJGjl67KYjJj-A",
      name: "Deja vu",
      liked:true,
      suggested:true,
      library:false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ImmnPHfUQEuNgjbk53jKuw",
      name: "The sunflower",
      liked:true,
      suggested:true,
      library:false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Fwo2dZ1DR8irHJZe3puSLg",
      name: "The traveller",
      liked:true,
      suggested:true,
      library:false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/DEh4P32YTq--wdvHPTCKqg",
      name: "Happy Festivals",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/FLOiXgFeQvyPG79Y8xDu0Q",
      name: "Silvia Clothings",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/cdrxVcvDShuBk1O6uVeMiw",
      name: "The Aurora",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/WRrVsyrxSmKcbZYeen7UOg",
      name: "The Cafe",
      liked:true,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/j3xQnsGfS_aO59y5HqdicQ",
      name: "The Rainbow",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/YhtovZ7ZRlGr00rklGMCyg",
      name: "Princess",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/PWIdDlyASxqmSaiQ_OA3gQ",
      name: "House mystery",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/z3-wHSJZSKeOdUbpRFD2Hw",
      name: "Afraid of dark",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/2EV7oci8SOCJOe6qiRlBNg",
      name: "The island",
      liked:false,
      suggested:false,
      library:true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/GbWdeCEiQtyCcTUtTTccfw",
      name: "The Spring",
      liked:true,
      suggested:false,
      library:false
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/w5pvrAMDSgGuXYTZXrIWOg",
      name: "Mountain",
      liked:true,
      suggested:false,
      library:false
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/_HjNjONpTgu5Qz6FNl8Y3A",
        name:"Dignity",
        liked:false,
        suggested:false,
        library:true
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/_Q93k4q7Sumx0sEIMvFRJw",
        name:"Growth",
        liked:false,
        suggested:true,
        library:false
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/U4YQ8_SAQGaScC1l6Y0grg",
        name:"Gratitude",
        liked:false,
        suggested:false,
        library:true
    }
  ];
}
