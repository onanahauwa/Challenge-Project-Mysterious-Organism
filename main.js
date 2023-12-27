// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
       let randomBaseIndex = Math.floor(Math.random() * this._dna.length);
       let randomBase = this._dna[randomBaseIndex];
       let generatedBase = returnRandBase();
       if (randomBase ===  generatedBase ){
          generatedBase = returnRandBase();
      }
        this._dna[randomBaseIndex] = generatedBase;
        return this._dna;
  },
  compareDNA(pAequor) {
  console.log(this._dna);
  console.log(pAequor._dna);
   let compare = [];
   for(let i = 0; i < this._dna.length; i++){
    for(let j = 0; j < pAequor._dna.length; j++){
      if( this._dna[i] === pAequor._dna[j] && i === j){
        compare.push(pAequor._dna[j]);
      }
    }
   }
    let result = (compare.length / this._dna.length) * 100;
    result = result.toFixed();
      console.log(`specimen ${this._specimenNum} and specimen ${pAequor._specimenNum} have ${result}% DNA in common.`);
  },
  willLikelySurvive() {
    let survive = [];
    for (let i = 0; i < this._dna.length; i++){
      if(this._dna[i] === 'C' || this._dna[i] === 'G'){
          survive.push(this._dna[i]);
      }
    }
    let result = (survive.length / this._dna.length) * 100;
    //console.log(`The percentage is ${result}%`);
    return result >= 60;
  },
  complementStrand() {
    console.log(`Original dna is: `);
    console.log(this._dna);
    for(let i = 0; i < this._dna.length; i++){
        if(this._dna[i] === 'A'){
          this._dna[i] = 'T';
        }else if(this._dna[i] === 'T'){
           this._dna[i] = 'A';
        }else if(this._dna[i] === 'C'){
           this._dna[i] = 'G';
        }else if(this._dna[i] === 'G'){
           this._dna[i] = 'C';
        }
    }
    console.log(`Complementary DNA is: `);
    return this._dna;
  }
}
}

const survivingDna = () => { 
  let array = [];
  let index = 1 ;
 while(array.length < 30){
  let sampleDna = pAequorFactory(index, mockUpStrand());
  if(sampleDna.willLikelySurvive()){
    array.push(sampleDna);  
  } index += 1;
 }
 return array;
}

const pAequor = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
 //pAequor.compareDNA(pAequor2);
 //console.log(pAequor.willLikelySurvive());
 
//console.log(sur._dna); 
 console.log(pAequor.complementStrand());

/* I could not finish the second part of project extension to find the two most related instances of pAequor.
 const compatible = () => {
  const survive = survivingDna();
  const array = [];
  survive.forEach(base => {
   array.push(base._dna);
  });
 }
 Challenge Project Mysterious Organism
 */