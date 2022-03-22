function Block(letter, rate? used, father,code) {
this.letter = letter;
this.rate = rate;
this.used =used;
this.father = father;
this.code = cod;
}

function FindCode(block) {

if (tree[block.father].code !='') {
block.cod = tree[block.father].cod +'1';
}
  else {
if (block.letter == tree[minIndex].letter) {
block.cod = '0';
}
   else if  (block.letter == tree[preminIndex].letter) {
block.cod = '1';
}
   else {
   FindCode(tree[block.father]);
   block.cod = tree[block.father].code + '0';
  }
}
}
