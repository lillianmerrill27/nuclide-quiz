class isotope {
    constructor(Z, N, A, symbol, name, isStable) {
        this.protonNum = Z
        this.neutronNum = N
        this.atomicNum = A
        this.symbol = symbol
        this.isStable = isStable
    }
}

const nuclides = [
    // hydrogen
    {Z:1, N:0, A:1, symbol:"H", name:"Hydrogen", isStable: true},
    {Z:1, N:1, A:2, symbol:"H", name:"Hydrogen", isStable: true},
    {Z:1, N:2, A:3, symbol:"H", name:"Hydrogen", isStable: false},

    // helium
    {Z:2, N:1, A:3, symbol:"He", name:"Helium", isStable: true},
    {Z:2, N:2, A:4, symbol:"He", name:"Helium", isStable: true},
    {Z:2, N:3, A:5, symbol:"He", name:"Helium", isStable: false},

]