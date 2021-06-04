export default class Book {
  constructor(id, filename, author, title, numberOfPages, isRead) {
    this.id = id;
    this.filename = filename;
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
  }
}

//The below is all for testing purposes.
const library = [];

library.push(
  new Book(
    "126c155a-7eba-42f0-be33-1a7fa9c9e04a",
    "mahabharata-cover.jpg",
    "Vyasadeva",
    "Mahabharata",
    100000,
    false
  )
);
library.push(
  new Book(
    "bc2d3c49-ab12-4f6c-be71-fca26efb9eb7",
    "gita-cover.jpg",
    "Krsna",
    "Bhagavad Gita",
    700,
    false
  )
);
library.push(
  new Book(
    "14738675-6754-49f6-8974-9ebc9c97a0d9",
    "cradle-cover.jpeg",
    "Will Wight",
    "Cradle",
    500,
    false
  )
);
library.push(
  new Book(
    "158de8a9-5d4d-4d00-946b-51aa090a0c46",
    "mwc-cover.jpg",
    "Wutosama",
    "Metaworld Chronicles",
    500,
    false
  )
);
library.push(
  new Book(
    "40dffc59-7b56-40ba-a631-ba81a6708a61",
    "ramayana-cover.jpg",
    "Valmiki",
    "Ramayana",
    24000,
    false
  )
);
library.push(
  new Book(
    "9ca4e3b6-de51-4159-8aea-0b782053abea",
    "samhita-cover.jpeg",
    "Brahma",
    "Brahma Samhita",
    500,
    false
  )
);

export function getLibrary() {
  return library;
}
