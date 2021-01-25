export function findWithAttr(array, attr, value) {
  //console.log('array', array)
  //console.log('attr', attr)
  //console.log('value', value)

    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

export function filterArray(array, criteria){

  var tableauFiltre = array
  //console.log('filtered Array', tableauFiltre)
  //console.log('longueur du tableau', tableauFiltre.length)

  var tableauTemp
  var counter = 0
  //var tableauTemp =[]

  Object.keys(criteria).forEach(key => {

    //console.log('counter', counter)
    //console.log('valeur init tableauTemp', tableauTemp)

    if (criteria[key] !== '***' && criteria[key] !== '') {

                  if (tableauTemp?.length >0){
                  tableauTemp = tableauTemp.filter(item => item[key] == criteria[key])
                  console.log('filtre A1')
                  }

                  if (!tableauTemp){
                  tableauTemp = tableauFiltre.filter(item => item[key] == criteria[key])
                  //counter = counter + 1
                  //console.log('initiation A')
                  console.log('filtre A2')
                  }

                  //console.log('tableau avec un filtre A ', tableauTemp)

    } else {
                  //console.log('tableauTemp dans le else', tableauTemp)
                  if (tableauTemp?.length >0){
                    //var tableauTemp = tableauFiltre
                    console.log('on garde le même tableau')
                  } else {
                    tableauTemp = tableauFiltre
                    //console.log('pour debug')
                  }


                  //console.log('tableau avec un filtre B', tableauTemp)


    }

  })

  //console.log('resultat', tableauTemp? tableauTemp : array)

  return tableauTemp? tableauTemp : array

}
