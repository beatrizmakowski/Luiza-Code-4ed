/**
 *  Implementar hash usando outra função hash usando a sua criatividade
 */

const words = ['Luiza', 'Luna', 'Bia', 'Luana', 'Maria', 'Alice', 'Liz', 'Estela', 'Natalia', 'Ana',
             'Rebeca', 'Bruna', 'Mariana', 'Julia', 'Giovana', 'Bianca', 'Beatriz', 'Leticia',
             'Isadora', 'Isabela', 'Stephanie', 'Flavia', 'Fabiana', 'Carol', 'Caroline', 'Zara', 
             'Zendaya', 'Hunter', 'Barbie', 'Jules', 'Cassie', 'Rue', 'Leslie', 'Amy', 'Lia', 
             'Karol', 'Karoline', 'Barbara', 'Abigail', 'Virginia', 'Juliette', 'Vivian', 'Viviane',
             'Katniss', 'Margarita', 'Ada', 'Luisa', 'Anita', 'Ludmila', 'Dora', 'Dory', 'Susan',
             'Karen', 'Fatima', 'Georgia', 'Jessica', 'Andressa', 'Jane', 'Kayla', 'Pietra', 'Lou',
             'Megara', 'Aurora', 'Ariel', 'Branca', 'Pocahontas', 'Cinderela', 'Mulan', 'Bela',
             'Giovanna', 'Kourtney', 'Kim', 'Khloe', 'Kendall', 'Kylie', 'Tarsila', 'Frida', 'Sarah',
             'Rute', 'Raquel', 'Cibele', 'Adelaide', 'Catarina', 'Regina', 'Silvia', 'Silvana',
             'Marina', 'Zhoe', 'Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella',
             'Mia', 'Evelyn', 'Harper', 'Gianna', 'Camila', 'Luna', 'Ella', 'Elizabeth', 'Avery',
             'Mila', 'Scarlett', 'Eleanor', 'Eliana', 'Madison', 'Layla', 'Penelope', 'Arya', 'Chloe',
             'Hazel', 'Grace', 'Ellie', 'Nora', 'Riley', 'Miley', 'Victoria', 'Lilly', 'Violet', 'Hannah',
             'Nova', 'Zoe', 'Stella', 'Everly', 'Kimberly', 'Reighley', 'Isla', 'Lyla', 'Leah', 'Lillian',
             'Addison', 'Willow', 'Lucy', 'Paisley', 'Natalie', 'Naomi', 'Brooklyn', 'Elena', 'Helena',
             'Aubrey', 'Claire', 'Ivy', 'Kinsley', 'Aubrey', 'Maya', 'Sky', 'Skylar'];
// words.length = 150
let arrayHash = new Array();
let colisoes = 0;

// Função original de espalhamento para array
function original_hash(word){
    let hashmap = word.length;
    // Em caso de colisão
    while(arrayHash[hashmap] !== undefined) {
        colisoes++;
        hashmap++;
    }
    return hashmap;
}

/**
 * Algoritmo da função new_hash() :
 * 1. Transforma a palavra em lower case.
 * 2. Para cada caractere da palavra:
 *  2.1 Se o índice do caractere na palavra é [0] ou par, soma o valor ASCII do caractere.
 *  2.2 Se o índice do caractere na palavra é ímpar, subtrai o valor ASCII do caractere.
 * 3. Como o valor desse conjunto de somas e subtrações pode ser negativo, tomamos o valor absoluto. Esse valor é o hash da palavra.
 * 4. Resolvemos as colisões procurando o próximo índice disponível no arrayHash.
 */
function new_hash(word) {
    word = word.toLowerCase();
    let aux = 0;
    let i = 1;
    for (let j = 0; j < word.length; j++) {
        aux += (word.charCodeAt(j) - 97) * i;
        i *= -1; 
    }
    let hashmap = Math.abs(aux);

    // Em caso de colisão
    while(arrayHash[hashmap] !== undefined) {
        colisoes++;
        hashmap++;
    }
    return hashmap;
}

console.log('\n*** Original hash status ***');
let start = Date.now();
words.forEach( (value, index, list) => {
    let index_hash = original_hash(value);
    arrayHash[index_hash] = value;
})
let duration = (Date.now() - start);
//console.log(arrayHash);
console.log('runtime: ' + duration + ' ms');
console.log('hashtable size: ' + arrayHash.length);
console.log('colisoes: ' + colisoes/1000 + ' x 10^3');

// ----------------------------------------------------
// Restarting the global variables
arrayHash = new Array();
colisoes = 0;
// ----------------------------------------------------

console.log('\n*** New hash status ***');
start = Date.now();
words.forEach( (value, index, list) => {
    let index_hash = new_hash(value);
    arrayHash[index_hash] = value;
})
duration = (Date.now() - start);
//console.log(arrayHash);
console.log('runtime: ' + duration + ' ms');
console.log('hashtable size: ' + arrayHash.length);
console.log('colisoes: ' + colisoes/1000 + ' x 10^3');