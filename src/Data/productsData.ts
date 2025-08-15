import { FiltersByX } from './filtersData'


  

 type FiltersOptions = Omit<
 FiltersByX,    
 'camas multiposiciones' |
 'comedores' |
 'living' |
 'mesas extensibles' |
 'relax' |
 'sofas cama' >



export type Product = {
    id: number,
    title: string,
    desc: string,
    img: string,
    price: number,
    category: 'relax' | 'sofas cama' | 'living' | 'camas multiposiciones' | 'comedores' | 'mesas extensibles',
    filters: FiltersOptions[]

}





export const productsData: Product[] = [
    {
        id: 1,
        title: 'Olimpo',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-1.jpg',
        price: 120000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 2,
        title: 'Munich',
        desc: 'Sillón de Relax',
        img: '/img/ProductsImg/Product-Id-2.jpg',
        price: 400000,
        category: 'relax',
        filters: ['eco cuero', '3 cuerpos', '40 dias']
    },
    {
        id: 3,
        title: 'Grand-M',
        desc: 'Sillón Masajeador',
        img: '/img/ProductsImg/Product-Id-3.jpg',
        price: 350000,
        category: 'relax',
        filters: ['tela', 'sillones masajeadores', 'entrega inmediata']
    },
    {
        id: 4,
        title: 'La Rome',
        desc: 'Sillón de Relax',
        img: '/img/ProductsImg/Product-Id-4.jpg',
        price: 320000,
        category: 'relax',
        filters: ['eco cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 5,
        title: 'Stability',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-5.jpg',
        price: 150000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 6,
        title: 'Rest-3000',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-6.jpg',
        price: 200000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 7,
        title: 'Vintage',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-7.jpg',
        price: 170000,
        category: 'relax',
        filters: [
            'madera', 'entrega inmediata']
    },
    {
        id: 8,
        title: 'Blacker',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-8.jpg',
        price: 165000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 9,
        title: 'Oklahoma',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-9.jpg',
        price: 180000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 10,
        title: 'Tucson',
        desc: 'Sillón  de Relax',
        img: '/img/ProductsImg/Product-Id-10.jpg',
        price: 220000,
        category: 'relax',
        filters: ['tela', '2 cuerpos', '35 dias']
    },
    {
        id: 11,
        title: 'Dakota',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-11.jpg',
        price: 150000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 12,
        title: 'Barbados',
        desc: 'Sillon de Relax',
        img: '/img/ProductsImg/Product-Id-12.jpg',
        price: 240000,
        category: 'relax',
        filters: ['cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 13,
        title: 'Onix',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-13.jpg',
        price: 120000,
        category: 'relax',
        filters: ['cuero', 'entrega inmediata']
    },
    {
        id: 14,
        title: 'Scarlet',
        desc: 'Sillon de Relax',
        img: '/img/ProductsImg/Product-Id-14.jpg',
        price: 190000,
        category: 'relax',
        filters: ['cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 15,
        title: 'Lipari',
        desc: 'Sillon de Relax',
        img: '/img/ProductsImg/Product-Id-15.jpg',
        price: 230000,
        category: 'relax',
        filters: ['tela', '3 cuerpos', '40 dias']
    },
    {
        id: 16,
        title: 'Esmeralda',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-16.jpg',
        price: 130000,
        category: 'relax',
        filters: ['tela',
            'madera', 'entrega inmediata']
    },
    {
        id: 17,
        title: 'Purple T',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-17.jpg',
        price: 140000,
        category: 'relax',
        filters: ['eco cuero', 'madera', 'entrega inmediata']
    },
    {
        id: 18,
        title: 'Dublin',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-18.jpg',
        price: 170000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 19,
        title: 'Burgos',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-19.jpg',
        price: 140000,
        category: 'relax',
        filters: ['eco cuero', 'madera', 'entrega inmediata']
    },
    {
        id: 20,
        title: 'Alaska',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-20.jpg',
        price: 320000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 21,
        title: 'Olsen',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-21.jpg',
        price: 350000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 22,
        title: 'Quick',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: '/img/ProductsImg/Product-Id-22.jpg',
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 23,
        title: 'Doppio',
        desc: 'Sofá cama 1 y 1/2 plazas',
        img: '/img/ProductsImg/Product-Id-23.jpg',
        price: 300000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '40 dias']
    },
    {
        id: 24,
        title: 'Michigan',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: '/img/ProductsImg/Product-Id-24.jpg',
        price: 330000,
        category: 'sofas cama',
        filters: ['cuero', '2 plazas', '40 dias']
    },
    {
        id: 25,
        title: 'Suecia',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: '/img/ProductsImg/Product-Id-25.jpg',
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 26,
        title: 'Chester',
        desc: 'Sofá cama 1 plaza',
        img: '/img/ProductsImg/Product-Id-26.jpg',
        price: 380000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 27,
        title: 'Estonia',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-27.jpg',
        price: 315000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 28,
        title: 'Marruecos',
        desc: 'Sofá cama 1 y 1/2 plazas',
        img: '/img/ProductsImg/Product-Id-28.jpg',
        price: 330000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 29,
        title: 'Granada',
        desc: 'Silla de Relax',
        img: '/img/ProductsImg/Product-Id-29.jpg',
        price: 340000,
        category: 'sofas cama',
        filters: ['tela', '35 dias']
    },
    {
        id: 30,
        title: 'Valencia',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-30.jpg',
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 31,
        title: 'Málaga',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-31.jpg',
        price: 350000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 32,
        title: 'Andorra',
        desc: 'Sofá cama 2 plazas',
        img: '/img/ProductsImg/Product-Id-32.jpg',
        price: 315000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 33,
        title: 'París',
        desc: 'Sofá cama 1 plaza',
        img: '/img/ProductsImg/Product-Id-33.jpg',
        price: 290000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 34,
        title: 'Altona',
        desc: 'Sofá rinconero',
        img: '/img/ProductsImg/Product-Id-34.jpg',
        price: 320000,
        category: 'living',
        filters: ['tela', '2 cuerpos modulares', '35 dias']
    },
    {
        id: 35,
        title: 'Etherna',
        desc: 'Sofá de living',
        img: '/img/ProductsImg/Product-Id-35.jpg',
        price: 330000,
        category: 'living',
        filters: ['tela', '3 cuerpos modulares', '40 dias']
    },
    {
        id: 36,
        title: 'Laurent',
        desc: 'Sofá rinconero',
        img: '/img/ProductsImg/Product-Id-36.jpg',
        price: 380000,
        category: 'living',
        filters: ['tela', '3 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 37,
        title: 'Motion E01',
        desc: 'Mesa baja',
        img: '/img/ProductsImg/Product-Id-37.jpg',
        price: 120000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 38,
        title: 'Island',
        desc: 'Sofá en isla',
        img: '/img/ProductsImg/Product-Id-38.jpg',
        price: 420000,
        category: 'living',
        filters: ['tela', '40 dias']
    },
    {
        id: 39,
        title: 'Motion E02',
        desc: 'Mesa baja',
        img: '/img/ProductsImg/Product-Id-39.jpg',
        price: 120000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 40,
        title: 'Motion E03',
        desc: 'Mesa Lateral',
        img: '/img/ProductsImg/Product-Id-40.jpg',
        price: 100000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 41,
        title: 'Motion E04',
        desc: 'Mesa baja',
        img: '/img/ProductsImg/Product-Id-41.jpg',
        price: 110000,
        category: 'living',
        filters: ['madera', 'entrega inmediata']
    },
    {
        id: 42,
        title: 'Grand Circle Motion',
        desc: 'Mesa Baja',
        img: '/img/ProductsImg/Product-Id-42.jpg',
        price: 150000,
        category: 'living',
        filters: ['madera', 'entrega inmediata']
    },
    {
        id: 43,
        title: 'Lerida',
        desc: 'Mesa baja plegable',
        img: '/img/ProductsImg/Product-Id-43.jpg',
        price: 115000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 44,
        title: 'Osaka',
        desc: 'Sofá rinconero modular',
        img: '/img/ProductsImg/Product-Id-44.jpg',
        price: 370000,
        category: 'living',
        filters: ['tela', '3 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 45,
        title: 'Loira',
        desc: 'Mesa Baja',
        img: '/img/ProductsImg/Product-Id-45.jpg',
        price: 130000,
        category: 'living',
        filters: ['40 dias']
    },
    {
        id: 46,
        title: 'Texas',
        desc: 'Silla de living',
        img: '/img/ProductsImg/Product-Id-46.jpg',
        price: 190000,
        category: 'living',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 47,
        title: 'Grand Michigan',
        desc: 'Sofá rinconero modular',
        img: '/img/ProductsImg/Product-Id-47.jpg',
        price: 430000,
        category: 'living',
        filters: ['tela', '4 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 48,
        title: 'Flex 1',
        desc: 'Cama articulada',
        img: '/img/ProductsImg/Product-Id-48.jpg',
        price: 500000,
        category: 'camas multiposiciones',
        filters: ['35 dias']
    },
    {
        id: 49,
        title: 'Flex 2',
        desc: 'Cama articulada',
        img: '/img/ProductsImg/Product-Id-49.jpg',
        price: 570000,
        category: 'camas multiposiciones',
        filters: ['35 dias']
    },
    {
        id: 50,
        title: 'Extense 1',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-50.jpg',
        price: 230000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 51,
        title: 'Extense 2',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-51.jpg',
        price: 240000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 52,
        title: 'Extense 3',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-52.jpg',
        price: 260000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 53,
        title: 'Vera',
        desc: 'Silla de comedor',
        img: '/img/ProductsImg/Product-Id-53.jpg',
        price: 80000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 54,
        title: 'Metz',
        desc: 'Silla de comedor',
        img: '/img/ProductsImg/Product-Id-54.jpg',
        price: 70000,
        category: 'comedores',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 55,
        title: 'Agness',
        desc: 'Silla de comedor',
        img: '/img/ProductsImg/Product-Id-55.jpg',
        price: 57000,
        category: 'comedores',
        filters: ['entrega inmediata']
    }, {
        id: 56,
        title: 'Lena',
        desc: 'Silla de comedor',
        img: '/img/ProductsImg/Product-Id-56.jpg',
        price: 60000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },

    {
        id: 50,
        title: 'Extense 1',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-50.jpg',
        price: 230000,
        category: 'mesas extensibles',
        filters: []
    },
    {
        id: 51,
        title: 'Extense 2',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-51.jpg',
        price: 240000,
        category: 'mesas extensibles',
        filters: []
    },
    {
        id: 52,
        title: 'Extense 3',
        desc: 'Mesa de comedor extensible',
        img: '/img/ProductsImg/Product-Id-52.jpg',
        price: 260000,
        category: 'mesas extensibles',
        filters: []
    },
]



export const TotalProducts = productsData.length



export const productosXCategorias = Object.entries(productsData.reduce((acc, product: Product) => {

    if (!acc[product.category]) {
        acc[product.category] = []
    }

    acc[product.category] = [...acc[product.category], product]

    return acc

}, {} as Record<string, Product[]>)
)


