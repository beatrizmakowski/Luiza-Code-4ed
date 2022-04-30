/**
 * 2. Implemente uma função que executa uma busca binária sobre um array de um tipo
 * complexo também criado por você (por exemplo: classe Livro, classe Produto). A
 * busca deve receber um determinado valor de atributo e utilizar esse valor para
 * realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título
 * do livro para realizar a comparação.
*/

class Book {
    constructor(ISBN, title, author) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
    }
 }

 const books = [
     new Book('0679760806', 'The Master and Margarita', 'Mikhail Bulgakov'),
     new Book('1984822179', 'Normal People', 'Sally Rooney'),
     new Book('0141441143', 'Jane Eyre', 'Charlotte Brontë'),
     new Book('8535911235', 'Ficciones', 'Jorge Luis Borges'),
     new Book('1401207928', 'V for Vendetta', 'Alan Moore'),
     new Book('0316066524', 'Infinite Jest', 'David Foster Wallace'),
     new Book('0375703764', 'House of Leaves', 'Mark Z. Danielewski'),
     new Book('0965341984', 'The Wind-Up Bird Chronicle','Haruki Murakami'),
     new Book('850102872X', 'El amor en los tiempos del cólera', 'Gabriel García Márquez'),
     new Book('9788571644953', 'Ensaio sobre a Cegueira', 'José Saramago')
 ]

const orderByAuthor = (books) => {
    newArray = books.sort((a,b) => a.author > b.author ? 1 : -1);
    return newArray;
}

const binarySearchByAuthor = (books, beginning, end, author) => {
    const middle = beginning + Math.floor((end - beginning)/2);
    if (books[middle].author === author){
        return middle;
    } else if (books[middle].author > author) {
        return binarySearchByAuthor(books, beginning, middle, author);
    } else if (books[middle].author < author) {
        return binarySearchByAuthor(books, middle, end, author);
    }
}

const orderedBooks = orderByAuthor(books);
let author = 'Alan Moore';
let index = binarySearchByAuthor(orderedBooks, 0, books.length, author);
console.log(orderedBooks[index]);