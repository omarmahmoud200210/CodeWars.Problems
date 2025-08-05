function DNAtoRNA(dna) {
    let regDNA = /t/ig;
    return dna.replace(regDNA, "U");
}

DNAtoRNA("GACCGCCGCC");