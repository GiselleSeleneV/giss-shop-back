import * as bcrypt from 'bcrypt';

interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedUser {
    email:    string;
    fullName: string;
    password: string;
    roles:     string[];
}


interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}


export const initialData: SeedData = {

    users: [
        {
            email: 'test1@google.com',
            fullName: 'Test One',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['admin']
        },
        {
            email: 'test2@google.com',
            fullName: 'Test Two',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['user','super']
        }
    ],

    products: [
        {
            description: "Presentamos la colección Giss Brisa. La sudadera de cuello redondo Brisa para hombre está tejida con algodón orgánico de gramaje alto y un interior de felpa natural, suave al tacto y antialérgica. Lleva un sutil logo Giss bordado en el pecho y el nombre de la marca debajo del cuello trasero, estampado con tinturas vegetales. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            stock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sudadera'],
            title: "Sudadera de cuello redondo Brisa para hombre",
            gender: 'men'
        },
        {
            description: "La chaqueta camisera acolchada para hombre está rellena de algodón orgánico cepillado para brindar calor y movilidad en temporadas frías, sin fibras sintéticas. Con una estética natural, incluye el logo Giss bordado a mano debajo del cuello trasero y en la manga derecha, y cierre de madera y metal reciclado. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],
            stock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['chaqueta'],
            title: "Chaqueta camisera acolchada para hombre",
            gender: 'men'
        },
        
        {
            description: "Presentamos la colección Giss Bosque. La chaqueta bomber ligera con cierre Bosque para hombre tiene una silueta premium y moderna, tejida con algodón orgánico y bambú certificado para usarla en cualquier estación. Incluye el logo Giss bordado en el pecho izquierdo y debajo del cuello trasero, un bolsillo oculto y un interior de felpa natural antialérgica. Tinturas vegetales y sin testeo en animales. Algodón orgánico y bambú.",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            stock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Chaqueta bomber ligera con cierre Bosque para hombre",
            gender: 'men'
        },

        {
            description: "Presentamos la colección Giss Linum. Diseñada para el estilo, la comodidad y el día a día, la camiseta de manga larga Linum para hombre presenta un sutil logo Giss estampado con tintura vegetal en el pecho izquierdo y el nombre de la marca debajo del cuello trasero. El algodón orgánico ligero se tiñe con pigmentos naturales, lo que crea un tacto suave, antialérgico y casual. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],
            stock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga larga Linum para hombre",
            gender: 'men'
        },
        {
            description: "Presentamos la colección Giss Linum. Diseñada para el estilo, la comodidad y el día a día, la camiseta de manga corta Linum para hombre presenta el nombre Giss estampado con tintura vegetal en el pecho y nuestro logo bajo el cuello trasero. El algodón orgánico ligero se tiñe con pigmentos naturales para un estilo suave, antialérgico y casual en cualquier estación. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],
            stock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga corta Linum para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para la comodidad, la camiseta Búho Orgánico está hecha de algodón orgánico certificado y presenta un ilustrado búho estampado con tinturas naturales en la espalda. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],
            stock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Búho Orgánico para hombre",
            gender: 'men'
        },
        {
            description: "Inspirada en los campos de algodón al sol, la camiseta Giss Cosecha Solar celebra las fibras naturales y el cultivo responsable. Diseñada para el ajuste, la comodidad y el estilo, muestra un paisaje de telas al aire libre en el frente y el logo Giss sobre 'Cosecha Solar' en la espalda, estampado con tinturas vegetales. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            stock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            slug: "men_solar_roof_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Cosecha Solar para hombre",
            gender: 'men'
        },
        {
            description: "Inspirada en el recurso más ilimitado de la naturaleza, la camiseta Que Brille el Sol destaca el cultivo de algodón orgánico y las tinturas extraídas de plantas. Diseñada para el ajuste, la comodidad y el estilo, presenta un gráfico de atardecer junto con el nombre Giss en el frente y nuestro logo sobre 'Cosecha Solar' en la espalda. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            stock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Que Brille el Sol para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Giss Grande para hombre está hecha de algodón orgánico con el nombre Giss bordado a lo largo del pecho. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],
            stock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Giss Grande para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Logo Giss está hecha de algodón orgánico y presenta el logo Giss bordado en el pecho izquierdo con hilo de algodón natural. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            stock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Logo Giss para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para la comodidad y el estilo en cualquier talla, la camiseta Giss Pequeña está hecha de algodón orgánico y presenta el nombre de la marca bordado en el pecho izquierdo. Tinturas vegetales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            stock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Giss Pequeña para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para celebrar el tejido de cuadros teñido con plantas, la camiseta Cuadros Naturales ofrece un gran ajuste, comodidad y estilo. Hecha de algodón orgánico, es tan suave como una fibra recién cosechada. Sin testeo en animales y apta para pieles sensibles. 100% algodón orgánico.",
            images: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            stock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Cuadros Naturales para hombre",
            gender: 'men'
        },
        {
            description: "Inspirada en la energía de las fibras vivas, la camiseta Giss Energía Pura está hecha de algodón orgánico y presenta la frase 'Energía Pura' bajo nuestro logo en la espalda, estampada con tinturas naturales. Diseñada para el ajuste, la comodidad y el estilo, promueve un vestir orgánico en cualquier entorno. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            stock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Energía Pura para hombre",
            gender: 'men'
        },
        {
            description: "Inspirada en el día de la cosecha del algodón Giss, la camiseta Tierra Viva celebra el futuro de las telas orgánicas y el cultivo responsable. Diseñada para el ajuste, la comodidad y el estilo, está hecha de algodón orgánico con un motivo de semilla estampado con pigmentos vegetales en el pecho. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            stock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Tierra Viva para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para una comodidad excepcional e inspirada en la resistencia de las fibras naturales, la camiseta Escudo Natural está hecha de algodón orgánico de tejido denso y presenta el sello Giss estampado con tinturas vegetales en la espalda. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            stock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Escudo Natural para hombre",
            gender: 'men'
        },
        {
            description: "Inspirada en la alegría de vestir telas limpias, la camiseta de edición limitada Sí Natural está diseñada para la comodidad y el estilo. Hecha de algodón orgánico y con el nombre Giss bordado en el pecho, esta prenda exclusiva acompaña tu armario consciente por años. Tinturas naturales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            stock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Sí Natural para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de edición limitada Esencia Giss está hecha de algodón orgánico con el logo Giss bordado a lo largo del pecho. Tinturas vegetales, fibras antialérgicas y sin testeo en animales. Disponible en negro teñido con pigmentos naturales. 100% algodón orgánico.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            stock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Esencia Giss para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Giss para hombre está hecha de algodón orgánico y presenta un discreto nombre de marca bordado en el pecho izquierdo. Tinturas naturales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            stock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga larga Giss para hombre",
            gender: 'men'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Logo Giss para hombre está hecha de algodón orgánico y presenta un discreto logo Giss bordado en el pecho izquierdo. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            stock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga larga Logo Giss para hombre",
            gender: 'men'
        },
        {
            description: "Presentamos la colección Giss Bosque. La sudadera con capucha ligera Bosque para hombre tiene una silueta premium y relajada, tejida con algodón orgánico y bambú certificado. Incluye el logo Giss bordado en el pecho y en la manga, con un interior de felpa natural antialérgica para usarla en cualquier estación. Tinturas vegetales y sin testeo en animales. Algodón orgánico y bambú.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            stock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera con capucha ligera Bosque para hombre",
            gender: 'men'
        },
        {
            description: "Presentamos la colección Giss Brisa. La sudadera con capucha Brisa tiene un exterior de algodón orgánico de gramaje alto y un interior de felpa natural para brindar comodidad en cualquier estación. Esta sudadera unisex incluye el logo Giss bordado en el pecho y en la manga, una capucha de doble capa con una sola costura y bolsillos con cordones de algodón. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera con capucha Brisa",
            gender: 'unisex'
        },
        {
            description: "Presentamos la colección Giss Brisa. La sudadera con capucha y cierre completo Brisa para hombre tiene un exterior de algodón orgánico de gramaje alto y un interior de felpa natural para brindar comodidad en cualquier estación. Incluye el logo Giss bordado en el pecho izquierdo y en la manga, una capucha de doble capa y bolsillos con cordones de algodón. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            stock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Sudadera con capucha y cierre Brisa para hombre",
            gender: 'men'
        },
        {
            description: "Presentamos la colección Giss Brisa. El pullover con cierre Brisa para hombre tiene un exterior de algodón orgánico de gramaje alto y un interior de felpa natural para brindar comodidad en cualquier estación. Incluye el logo Giss bordado en el pecho izquierdo y debajo del cuello trasero. Tinturas vegetales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            stock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Pullover con cierre Brisa para hombre - Gris",
            gender: 'men'
        },
        {
            description: "Presentamos la colección Giss Brisa. El pullover con cierre Brisa para hombre tiene un exterior de algodón orgánico de gramaje alto y un interior de felpa natural para brindar comodidad en cualquier estación. Incluye el logo Giss bordado en el pecho izquierdo y debajo del cuello trasero. Tinturas vegetales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            stock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Pullover con cierre Brisa para hombre - Blanco",
            gender: 'men'
        },
        {
            description: "La sudadera con capucha Giss Grande unisex presenta felpa de algodón orgánico y una capucha ajustable forrada de jersey natural para mayor comodidad. Diseñada en estilo unisex, incluye el nombre Giss bordado tono sobre tono a lo largo del pecho. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            stock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera con capucha Giss Grande",
            gender: 'unisex'
        },
        {
            description: "Al igual que el sello de Giss, la sudadera Estampa Botánica es un clásico en proceso. Estilo unisex con felpa de algodón orgánico y capucha ajustable forrada de jersey natural. Motivo botánico teñido con pigmentos vegetales. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            stock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera Estampa Botánica",
            gender: 'unisex'
        },
        {
            description: "La gorra Relaxed Logo Giss combina una silueta clásica con detalles naturales, con el logo Giss bordado y un cierre de hebilla de metal reciclado. El algodón orgánico ultrasuave es flexible y antialérgico, mientras que la banda interior incluye un acolchado de algodón para mayor comodidad. La visera está hecha con fibras vegetales. Tinturas naturales y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            stock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['gorros'],
            title: "Gorra Relaxed Logo Giss",
            gender: 'unisex'
        },
        {
            description: "El gorro térmico con doblez está tejido con algodón orgánico cepillado para un calor suave y antialérgico. El diseño es flexible y cómodo, con una banda interior de algodón que absorbe la humedad de forma natural. Tinturas vegetales y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            stock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['gorros'],
            title: "Gorro térmico con doblez",
            gender: 'unisex'
        },
        {
            description: "La chaqueta puffer cropped para mujer presenta una silueta recortada para un estilo moderno en la temporada de frío. Está rellena de algodón orgánico cepillado, con el logo Giss bordado debajo del cuello trasero y en la manga derecha, y un cuello forrado de felpa natural. Tinturas vegetales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            stock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Chaqueta puffer cropped para mujer",
            gender: 'women'
        },
        {
            description: "Presentamos la colección Giss Brisa. La sudadera cropped con medio cierre Brisa para mujer tiene un exterior de felpa de algodón orgánico y una silueta recortada para la comodidad del día a día. Incluye un dobladillo elástico de algodón que se frunce en la cintura, el logo Giss bordado a lo largo de la capucha y en la manga, y una capucha de doble capa. Tinturas naturales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera cropped con medio cierre Brisa para mujer",
            gender: 'women'
        },
        {
            description: "Presentamos la colección Giss Bosque. La sudadera de cuello redondo holgada Bosque para mujer tiene una silueta premium y relajada, tejida con algodón orgánico y bambú certificado. Incluye el nombre Giss bordado en la manga izquierda y un interior de felpa natural antialérgica para un look acogedor en cualquier estación. Combínala con los joggers Bosque o tu outfit favorito. Tinturas vegetales y sin testeo en animales.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            stock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['sudadera'],
            title: "Sudadera de cuello redondo holgada Bosque para mujer",
            gender: 'women'
        },
        {
            description: "Presentamos la colección Giss Linum. Diseñada para el estilo, la comodidad y el día a día, la camiseta cropped de manga larga Linum para mujer presenta el nombre Giss estampado con tintura vegetal en el pecho y nuestro logo bajo el cuello trasero. El algodón orgánico ligero se tiñe con pigmentos naturales para un estilo suave y antialérgico con silueta recortada. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            stock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta cropped de manga larga Linum para mujer",
            gender: 'women'
        },
        {
            description: "Presentamos la colección Giss Linum. Diseñada para el estilo, la comodidad y el día a día, la camiseta cropped de manga corta Linum para mujer presenta el nombre Giss estampado con tintura vegetal en el pecho y nuestro logo bajo el cuello trasero. El algodón orgánico ligero se tiñe con pigmentos naturales para un estilo suave y antialérgico con silueta recortada. Sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            stock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta cropped de manga corta Linum para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta ultrasuave de manga corta con escote redondo Logo Giss para mujer presenta el logo Giss bordado en el pecho izquierdo. Hecha de algodón orgánico y viscosa de origen vegetal. Tinturas naturales, fibras antialérgicas y sin testeo en animales.",
            images: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            stock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga corta con escote redondo Logo Giss para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta ultrasuave de manga larga con escote redondo Logo Giss para mujer presenta el logo Giss bordado en el pecho izquierdo. Hecha de algodón orgánico y viscosa de origen vegetal. Tinturas naturales, fibras antialérgicas y sin testeo en animales.",
            images: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            stock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga larga con escote redondo Logo Giss para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga corta con cuello en V Giss Pequeña para mujer presenta el nombre de la marca bordado en el pecho izquierdo. Tinturas vegetales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],
            stock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga corta con cuello en V Giss Pequeña para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga corta con cuello redondo Giss Grande para mujer presenta el nombre Giss bordado a lo largo del pecho. Tinturas vegetales y sin testeo en animales. 100% algodón pima orgánico antialérgico.",
            images: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            stock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga corta con cuello redondo Giss Grande para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para celebrar el tejido de cuadros teñido con plantas, la camiseta Cuadros Naturales ofrece un gran ajuste, comodidad y estilo. Hecha de algodón orgánico, es tan suave como una fibra recién cosechada. Sin testeo en animales y apta para pieles sensibles. 100% algodón orgánico.",
            images: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            stock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Cuadros Naturales para mujer",
            gender: 'women'
        },
        {
            description: "Inspirada en la energía de las fibras vivas, la camiseta Giss Energía Pura está hecha de algodón orgánico y presenta la frase 'Energía Pura' bajo nuestro logo en la espalda, estampada con tinturas naturales. Diseñada para el ajuste, la comodidad y el estilo, promueve un vestir orgánico en cualquier entorno. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Energía Pura para mujer",
            gender: 'women'
        },
        {
            description: "Totalmente pensada para un estilo natural, la chaqueta Giss para mujer presenta el logo Giss bordado en el pecho izquierdo y el nombre de la marca a lo largo de la espalda, con hilo de algodón. Tinturas vegetales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            stock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Chaqueta Giss para mujer",
            gender: 'women'
        },
        {
            description: "Presentamos la colección Giss Bosque. Los joggers Bosque para mujer tienen una silueta premium y relajada, tejidos con algodón orgánico y bambú certificado. Incluyen el nombre Giss y el logo bordados, además de un interior de felpa natural antialérgica. Combínalos con la sudadera holgada Bosque, la chaqueta ligera Bosque u otro outfit favorito. Tinturas vegetales y sin testeo en animales.",
            images: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            stock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Joggers Bosque para mujer",
            gender: 'women'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Aventura Natural para niños presenta un motivo botánico estampado con tinturas vegetales en el pecho, el nombre Giss a lo largo del brazo izquierdo y nuestro logo en el cuello trasero. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de manga larga Aventura Natural para niños",
            gender: 'kid'
        },
        {
            description: "La camiseta Dibujo Logo Giss para niños está hecha de algodón orgánico y presenta el logo Giss ilustrado a mano para que lo use todo artista joven. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],
            stock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Dibujo Logo Giss para niños",
            gender: 'kid'
        },
        {
            description: "La camiseta Aventura Natural para niños presenta un motivo botánico estampado con tinturas vegetales y está hecha de algodón orgánico para máxima comodidad en pieles sensibles. Sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],
            stock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Aventura Natural para niños",
            gender: 'kid'
        },
        {
            description: "La camiseta renovada Sendero para niños está hecha de algodón orgánico y presenta una franja inspirada en caminos naturales, con el nombre Giss estampado con tintura vegetal: perfecta para explorar al aire libre. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Sendero para niños",
            gender: 'kid'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Logo Giss para niños está hecha de algodón orgánico y presenta el logo Giss bordado en el pecho izquierdo. Tinturas naturales y sin testeo en animales. 100% algodón orgánico antialérgico.",
            images: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta Logo Giss para niños",
            gender: 'kid'
        },
        {
            description: "La camiseta de cuadros está hecha de algodón orgánico de fibra larga, libre de químicos agresivos. El algodón se recolecta a mano para evitar daños a la fibra y se tiñe con pigmentos vegetales. Este proceso da como resultado un algodón suave, resistente, antialérgico y brillante: y la camiseta se volverá aún más suave con cada lavado. Sin testeo en animales.",
            images: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Camiseta de cuadros para niños",
            gender: 'kid'
        },
        {
            description: "Para los más pequeños, un body de algodón orgánico suave con cierre de broches en la parte inferior. Etiquetado claro con fibras antialérgicas pensadas para la piel delicada. Tinturas naturales y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            stock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Body Hecho de la Tierra",
            gender: 'kid'
        },
        {
            description: "El body Dibujo Logo Giss para niños está hecho de algodón orgánico y presenta el logo Giss ilustrado a mano para que lo use todo artista pequeño. Tinturas vegetales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            stock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Body Dibujo Logo Giss",
            gender: 'kid'
        },
        {
            description: "Muestra tu compromiso con las telas limpias con este body orgánico para tu pequeño. Nota: teñido con pigmentos vegetales y sin químicos agresivos. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Body Cero químicos (casi)",
            gender: 'kid'
        },
        {
            description: "Usa la chaqueta bomber Aventura Natural para niños en tus salidas al aire libre. Presenta una ilustración botánica estampada con tinturas vegetales y el sello Giss. Con tres bolsillos y nuestro logo Giss bordado a lo largo de las mangas, es perfecta para donde te lleve el camino. Fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            stock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Chaqueta bomber Aventura Natural para niños",
            gender: 'kid'
        },
        {
            description: "Recorre el parque con estilo con la chaqueta Giss para niños. Inspirada en la chaqueta Giss original, tiene el mismo corte discreto y algodón orgánico de alta calidad, pero a escala infantil. Tinturas naturales, fibras antialérgicas y sin testeo en animales. 100% algodón orgánico.",
            images: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['camiseta'],
            title: "Chaqueta Giss para niños",
            gender: 'kid'
        },
    ]
}
