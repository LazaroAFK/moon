import assets from "./assets";

const DRESSData = [
  {
    id: "DRESS-01",
    temp: "otoño",
    name: "Jeans",
    creator: "Isai",
    price: "negros",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Isai",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Mayra",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Ruby",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "DRESS-02",
    temp: "verano",
    name: "Jeans",
    creator: "Mayra",
    price: "azules",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Isai",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "DRESS-03",
    temp: "verano",
    name: "Jeans",
    creator: "Tú",
    price: "negro y cafe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Mayra",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Ruby",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "DRESS-04",
    temp: "invierno",
    name: "Sueter",
    creator: "Isai",
    price: "gris",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Isai",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Ruby",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Mayra",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "DRESS-05",
    temp: "invierno",
    name: "Chamarra",
    creator: "Isai",
    price: "gris",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Ruby",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  }
];

const MEDRESSData = [
  {
    id: "DRESS-06",
    temp: "otoño",
    name: "Falda larga",
    creator: "Ruby",
    price: "azul",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft06,
    bids: [],
  },
  {
    id: "DRESS-07",
    temp: "verano",
    name: "Pantalón roto",
    creator: "Ruby",
    price: "negro",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.nft07,
    bids: [],
  },
];

const NotyData = [
  {
    id: "NOT-01",
    title: "Notificación 1",
    description:
      "Lorem Ipsum are like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.person01,
    date: "22/11/2022",
  },{
    id: "NOT-02",
    title: "Notificación 2",
    description:
      "Lorem Ipsum are like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.person02,
    date: "22/11/2022",
  },{
    id: "NOT-03",
    title: "Notificación 3",
    description:
      "Lorem Ipsum are like Aldus PageMaker including versions of Lorem Ipsum.",
    image: assets.person03,
    date: "22/11/2022",
  }
];

export { DRESSData, NotyData, MEDRESSData };
