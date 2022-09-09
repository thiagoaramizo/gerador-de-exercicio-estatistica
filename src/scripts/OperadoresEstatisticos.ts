export const maior = ( numeros: number[] ) => {
    return Math.max( ...numeros )
}

export const menor = ( numeros: number[] ) => {
    return Math.min( ...numeros )
}

export const intervalo = ( numeros: number[] ) => {
    return maior(numeros) - menor(numeros)
}

export const soma = (numeros: number[]) => {
    let somatorio = 0;
    numeros.forEach( numero => somatorio = somatorio + numero )
    return somatorio
}

export const media = ( numeros: number[] ) => {
    return soma(numeros)/numeros.length
}

export const frequencia = ( numeros: number[] ) => {
    const numerosUnicos = [ ... new Set(numeros)]
    let resultado: number[] = []
    numerosUnicos.forEach( n1 => {
        let contador = 0
        numeros.forEach( n2 => {
            contador = (n1 === n2) ? contador+1 : contador
        })
        resultado.push( contador )
    })
    const retorno = new Map()
    numerosUnicos.map( (value, i) => retorno.set( value, resultado[i]) )
    return retorno
}

export const moda = ( numeros: number[] ) => {
    const mapaDeFrequencia = frequencia( numeros )
    let retorno: number[] = []
    const maiorFreq = Math.max( ... mapaDeFrequencia.values() )
    mapaDeFrequencia.forEach( (value, key) => {
        if ( value >= maiorFreq ) { retorno.push(key) }
    })
    return ( retorno.length === mapaDeFrequencia.size )? [] : retorno
}

export const mediana = ( numeros: number[] ) => {
    const valoresOrdenados = numeros.sort( (a,b) => a-b )
    const metade = Math.floor(valoresOrdenados.length / 2)
    if( valoresOrdenados.length % 2 === 0 ){
        return (valoresOrdenados[metade-1] + valoresOrdenados[metade])/2
    } else {
        return valoresOrdenados[metade - 1]
    }
}