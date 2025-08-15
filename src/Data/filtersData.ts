
export type FiltersByX = 'entrega inmediata' |
    '40 dias' |
    '35 dias' |
    'sillones masajeadores' |
    'tela' |
    'cuero' |
    'eco cuero' |
    'madera' |
    '1 plaza' |
    '2 plazas' |
    '2 cuerpos' |
    '2 cuerpos modulares' |
    '3 cuerpos' |
    '3 cuerpos modulares' |
    '4 cuerpos' |
    'esquinero' |
    'camas multiposiciones' |
    'comedores' |
    'living' |
    'mesas extensibles' |
    'relax' |
    'sofas cama' 




    type Filter = {
        filter: FiltersByX
    }






export const filtersData: [string, Filter[]][] = [


    ['categorias',
    [
        {filter: 'camas multiposiciones'},
        {filter: 'comedores'},
        {filter: 'living'},
        {filter: 'mesas extensibles'},
        {filter: 'relax'},
        {filter: 'sofas cama'}
    ]],

    ['material',
    [
        {filter: 'cuero'},
        {filter: 'eco cuero'},
        {filter: 'tela'},
        {filter: 'madera'},
    ]],

    ['plazas',
    [
        {filter: '2 plazas'},
        {filter: '1 plaza'},
    ]],

    ['tamaño',
    [
       {filter: '2 cuerpos'},
        {filter: '2 cuerpos modulares'},
        {filter: '3 cuerpos'},
        {filter: '3 cuerpos modulares'},
        {filter: '4 cuerpos'},
        {filter: 'esquinero'},
        {filter: 'sillones masajeadores'},
    ]],


    ['entrega',
    [
        {filter: '35 dias'},
        {filter: '40 dias'},
        {filter: 'entrega inmediata'},
    ]],



]



