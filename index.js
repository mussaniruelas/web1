var projectList = [
    { img: 'terrenos/000001.png', title: 'Achumani Final Sector Los Rosales', description: 'En venta Terreno en Achumani, a la altura del final Urb Los Rosales, a 2 minutos del complejo Strongest y 25 minutos de la Iglesia de San Miguel, cuenta con una superficie de 9120 m2 útiles, plataforma natural y suelo muy estable, amurallado con malla , todos los servicios básicos muy cerca al lugar y transporte público en la zona \n Precio 85 $/m2 o 730000 se acepta departamento como parte de pago' },
    { img: 'terrenos/000002.png', title: 'La Florida', description: 'OFERTABLEValiosa propiedad de en esquina en el exclusivo barrio de La Florida Consta de 1336 mts2 en esquina IDEAL para construir un edificio DE LUJO De momento consta de casa con 467 mts de construcción, piscina, y parrillero Tiene vistas espectaculares, está ubicada en la zona más cálida de la ciudad de La Paz Siendo que el terreno es tan amplio y sólido, invita a edificar construcciones nuevas tambiénDocumentación al día sin gravamen PRECIO OFERTABLE' },
    { img: 'terrenos/000003.png', title: 'Achumani calle 37 esquina costanera', description: '380 m2 planos, papeles al día Listo para construir' },
    { img: 'terrenos/000004.png', title: 'Av. Burgaleta C. Inca Sebastian', description: 'A una cuadra de la Av Burgaleta , documentación al dia precio negociable' },
    { img: 'terrenos/000005.png', title: 'CASA EN VENTA CALACOTO COMO TERRENO EXCELETE UBICACION', description: 'Con un terreno precioso de 1033 m2 de superficie y una casa amplia con cómodos espacios todos grandes, súper soleados, parada de Puma Katari solo a pocos pasos, además cuenta con un frente imponente sobre avenida\nSus ambientes son:\n• Área de recepción\n• Amplio living y comedor\n• Cocina con comedor de diario y despensa\n• Baño de visitas\n• Escritorio\n• 5 Dormitorios, dos en Suite\n• Sala de estar\n• Hermoso jardín\n• Parrillero\n• Área de lavandería\n• Área de servicio con cuarto y baño\n• Garaje para 5 movilidades' },
    { img: 'terrenos/000006.png', title: 'Cota Cota La Paz', description: 'Lindo Terreno y galpones en Alquiler, Terreno con 1222 m2 construidos sobre 858 m2, Mas de 2400 m3 de capacidad de almacenaje, Espacio disponible para el ingreso de camiones, gruas, montacargas u otros vehiculos de carga, Deposito seguro y especialmente apto para almacenaje, Sin Humedad, No hay peligro de incendio o inunacion, Construido bajo estandares internacionales' },
    { img: 'terrenos/000007.png', title: 'TERRENO EN VENTA, ACHUMANI', description: 'COMPRA HERMOSO TERRENO EN ESQUINA, ZONA RESIDENCIAL SOBRE AVENIDA PRINCIPAL LISTO PARA CONSTRUIR:, SUPERFICIE: 635,18 MTS2, FRENTE: 23,76 MTS2, FONDO: 25,25 MTS2, UBICACIÓN: ESQUINA, PRECIO: 320000 $US, PENDIENTE DE TERRENO: TERRENO PLANO, SERVICIOS DEL PREDIO: ENERGIA ELECTRICA,AGUA POTABLE, ALCANTARILLADO, TELEFONO, ALUMBRADO PÚBLICO, GAS DOMICILIARIO, ANCHO DE VIA: CALLE PRINCIPAL 15M ( ASFALTADO ) CALLE SECUNDARIA 10M ( ASFALTADO )' },
    { img: 'terrenos/000008.png', title: 'Terreno en Venta, Inmediaciones Plaza Uyuni Listo para construir', description: 'Terreno en Venta a pasos de Plaza Uyuni, Sup 893 m2, Plano, listo para construir, Amurallado, Excelente ubicación, Papeles al dia, PRECIO Us 950000, Consultas y visitas WhatsApp' },
    { img: 'terrenos/000009.png', title: 'Av. Principal de Pamir Pampa, terreno esquina', description: 'Hermoso terreno, en esquina con tres frentes, en la mejor ubicación de Pamir Pampa, Achumani, frente al Club Alemán, a 600 metros de la entrada a la urbanización, único terreno sin construir aún\nOportunidad única, no deje de verlo 523 metros cuadrados $US 280000\nTeléfono\nPAGO SOLO EN DOLARES' },
    { img: 'terrenos/000010.png', title: 'TERRENO EN VENTA AL FINAL LOS PINOS - PUENTE ALMENDROS', description: 'N VENTA TERRENO FINAL LOS PINOS PUENTE ALMENDROS\nATENCION EMPRESAS CONSTRUCTORAS, INSTITUCIONES PUBLICAS Y PRIVADAS, ORGANISMOS INTERNACIONALES!!!! IMPERDIBLE INVERSION!!! TERRENO EN VENTA CON ESPECTACULAR UBICACION\nCARACTERISTICAS:\nSUPERFICIE TERRENO: 500 mts2\nFRENTE: 20 Mts\nPRECIO: $us 289000 ofertable!!!\nCARACTERISTICAS:\nPAPELES EN ORDEN\nAPTO PARA CUALQUIER TIPO DE NEGOCIO\nTRANSPORTE PÚBLICO EN LA PUERTA\nTODOS LOS SERVICIOS' },
    { img: 'terrenos/000011.png', title: 'TERRENO EN VENTA EN SEQUOIA', description: 'Ubicación estratégica, ya que permite conectarse a supermercados, farmacias, colegios, etc papeles en orden, seguridad 24 horas\nUBICACIÓN: Sequoia\nSUPERFICIE BC2: 40002 Mts2\nPRECIO AL CONTADO: $us 96105\nPRECIO CON CREDITO BANCARIO: $us 98005\nPRECIO CON CREDITO DIRECTO: $us 108005,40' },
    { img: 'terrenos/000012.png', title: 'Auquisamaña, La Glorieta', description: 'Bonito terreno, queda a tres cuadras subiendo desde la Av Costanera\nEl terreno tiene 350m2 y es espectacular por su excelente vista a toda la ciudad y la mejor ubicación al sol, que se puede tener Es casi cuadrado que permite tener un buen diseño para una construcción Buen suelo!\nTodos los servicios estan en la zona\nLos papeles estan al día!' },
    { img: 'terrenos/000013.png', title: 'TERRENO EN VENTA, CALACOTO', description: 'Terreno de 755 m² en una urbanización exclusiva a 5 minutos de San Miguel, Jardín Real, cuenta con todos los servicios, incluido gas domiciliario, área de recreación y seguridad las 24 horas del día\nEste terreno necesita un nuevo propietario que aprecie su potencial, para que construya una casa elegante, distinguida y única Precio de venta Usd 390000\nAsesora de Bienes Raíces\nPatty Hurtado' },
    { img: 'terrenos/000014.png', title: 'EN VENTA TERRENO EN PLENA ESQUINA, ACHUMANI PAMIR PAMPA', description: 'En venta terreno de 524m2 ubicado en Achumani Urbanización Pamir Pampa cerca al club Aleman\nCARACTERÍSTICAS: Lindo terreno en plena esquina con sol todo el día\nCuenta con servicios de agua, alcantarillado y electricidad' },
    { img: 'terrenos/000015.png', title: 'TERRENO EN VENTA EN ACHUMANI – LAS VIOLETAS', description: '¡Atención inversionistas!\nTenemos el agrado de presentarles este lindo terreno apto para un proyecto inmobiliario Ubicado en plena esquina, con calles asfaltadas, sol todo el día, lugar tranquilo y a 7 minutos del mercado de Achumani\nTiene una superficie de 1418 m2, todos los documentos al día\nPrecio: $us 520 por m2' },
    { img: 'terrenos/000016.png', title: 'TERRENO EN VENTA EN OVEJUYO', description: 'ATENCION INVERSIONISTAS, CONSTRUCTORES COMPRA TU TERRENO EN OVEJUYO\nUBICACIÓN: Ovejuyo\nSUPERFICIE: 3636 Mts2\nPRECIO: $us 350000\nCARACTERÍSTICAS:\nHermoso terreno con vista de toda la ciudad y asoleamiento, ideal para construir un condominio, casas, etc Cuenta con todos los servicios en la zona, incluyendo gas domiciliario\nDe fácil acceso, cerca a transporte público, a pocas cuadras de supermercados, restaurantes y bancos\nPapeles en orden, listos para financiamiento bancario' },
    { img: 'terrenos/000017.png', title: 'TERRENO EN VENTA, ACHUMANI', description: 'COMPRA ESTE TERRENO EN ACHUMANI SOBRE AV THE STRONGEST EN CONDOMINIO PRIVADO\nNo pierdas la oportunidad de construir la casa soñada para ti y tu familia, donde podrás disfrutar de una vista hermosa de la ciudad orientado hacia el sol de mañana y tarde\nUBICACIÓN: Achumani, calle 28 de Achumani , sobre Av Principal, dentro de Condominio Privado\nSUPERFICIE DE TERRENO: 504 M2\nPRECIO: $us 320000' },
    { img: 'terrenos/000018.png', title: 'IRPAVI II TERRENO EN PLENA ESQUINA EN VENTA', description: 'Irpavi II muy cerca al Hospital psiquiátrico, excelente terreno de 1028m2 en plena esquina con un frontis de 45mts\nCuenta con todo los servicios básicos y documentación en orden' },
    { img: 'terrenos/000019.png', title: 'Valencia Río Abajo', description: 'Hermosos lotes planos amurallados de 1450m2\nEn Valencia a 1 cuadra de la carretera,\nZona de casas de alta calidad\nTodos los servicios públicos habilitados\nPapeles 100% en orden\nTrato directo con el propietario\nWhats App 705 61 8 51' },
    { img: 'terrenos/000020.png', title: 'Valencia Río Abajo', description: 'Este terreno de 1020,50 m2 está super bien ubicado a dos cuadras de la Plaza Riosiño\nAcceso por dos calles, en este momento es una propiedad que cuenta con dos galpones, áreas de oficinas, cocina y baños\nNo deja de ser un proyecto que puede ser restaurado, y utilizarlo con este fin de salas de eventos, ya galpón, pero también es un gran terreno para inversión futura para ser la base de un gran proyecto inmobiliario, por la ubicación, tamaño y estar ubicado en un sector tan demandado' },
    { img: 'terrenos/000021.png', title: 'TERRENO EN VENTA EN EL PEDREGAL', description: 'ATENCION INVERSIONISTAS, CONSTRUCTORES COMPRA TU TERRENO EN ALTO CALACOTO CON DISEÑO APROBADO EN LA ALCALDIA DE LA PAZ\nUBICACIÓN: El Pedregal\nSUPERFICIE: 1215 Mts2\nPRECIO: $us 304000\nCARACTERÍSTICAS:\nHermoso terreno con vista de toda la ciudad y asoleamiento, ideal para construir un condominio, casas, etc Cuenta con todos los servicios en la zona, incluyendo gas domiciliario\nDe fácil acceso, cerca a transporte público, a pocas cuadras de supermercados, restaurantes y bancos\nPapeles en orden, listos para financiamiento bancario' },
    { img: 'terrenos/000022.png', title: 'INCREIBLE UBICACION TERRENO A LA VENTA FINAL 6 DE AGOSTO ESQUINA SAN JORGE', description: 'Este terreno excelentemente bien ubicado, en un lugar de privilegio en nuestra ciudad, todo su fronti principal da a la av 6 de agosto , no es patrimonio\nademás tiene el plus de que su parte posterior da a otra calle asi que tenemos dos frentes\ncuenta con 579 m2 de área útil su frontis 15 m' },
    { img: 'terrenos/000023.png', title: 'TERRENO EN VENTA, LOS PINOS', description: 'EN VENTA TERRENO FINAL LOS PINOS PUENTE ALMENDROS\nATENCION EMPRESAS CONSTRUCTORAS, INSTITUCIONES PUBLICAS Y PRIVADAS, ORGANISMOS INTERNACIONALES!!!! IMPERDIBLE INVERSION!!! TERRENO EN VENTA CON ESPECTACULAR UBICACION\nCARACTERISTICAS:\nSUPERFICIE TERRENO: 500 mts2\nFRENTE: 20 Mts\nPRECIO: $us 289000 ofertable!!!\nCARACTERISTICAS:' },
    { img: 'terrenos/000024.png', title: 'ACHUMANI - LAS LOMAS TERRENO EN VENTA', description: 'Terreno de 322m2 en Las Lomas de Achumani con un frontis de 14mts, cerca al centro comercial La Suiza Cuenta con todo los servicios básicos y documentación en orden\nEl terreno es muy apto para la construcción de una urbanización de casas\nHay todos los servicios básicos en la zona' },
    { img: 'terrenos/000025.png', title: 'Mecapaca', description: 'HERMOSA PROPIEDAD con 12 CABALLERIZAS\nCon casa de fin de semana de 3 dormitorios (1 en suite), caballerizas, potrero, picadero, quincho con asadero y horno de barro, gran galería de estar, maravillosa vista, agua potable, energía eléctrica, agua de riego, depósitos, vivienda para empleados Excelente ubicación\nTerreno 9182 m2\nConstrucciones 707 m2\nCel WApp 705 61 8 51' },
    { img: 'terrenos/000026.png', title: 'TERRENO EN VENTA, LA FLORIDA - URBANIZACIÓN LA RINCONADA.', description: 'Cuenta con todos los servicios incluidos, gas domiciliario área de recreación y seguridad las 24 horas del día\nEste terreno necesita un nuevo propietario que aprecie su potencial, para que construya una casa elegante, distinguida y única\nPRECIO DE VENTA: Usd 288000 ofertable' },
    { img: 'terrenos/000027.png', title: 'Achumani, aprox calle 22', description: 'CÉNTRICO TERRENO EN VENTA EN ACHUMANI\n¡ATENCIÓN CONSTRUCTORAS! Enorme terreno en venta, en el corazón de Achumani, ideal para inversión y/o construcción!\nConsta de 785,79 mts2 de superficie\nPrecio: $us 720000 OFERTABLE!!!' },
    { img: 'terrenos/000028.png', title: 'VENDO HERMOSO TERRENO AV. ALEXANDER ACHUMANI', description: 'LINDO TERRENO DENTRO DE URBANIZACION CERRADA Y PRIVILEGIADA SOBRE LA AV, ALEXANDER\nA DOS CUADRAS DEL COLEGIO ALEMAN, LADO CLUB ALEMAN,\nUNICO TERRENO SIN CONSTRUIR, ZONA TOTALMENTE URBANIZADA\n520 M2\nUBICADO EN ESQUINA,\nPRECIO DEL M2 EN OFERTA!!!!!' },
    { img: 'terrenos/000029.png', title: 'TERRENO EN VENTA EN ACHOCALLA', description: 'UBICACIÓN: A 32 METROS DE LA AVENIDA PRINCIPAL\nCARACTERÍSTICAS:\nUNA DE LAS FUTURAS AV PRINCIPALES Y ESQUINA\n734102 M2\nAMURALLADO\n1 baño\nLiving comedor\nCocina\n4 DORMITORIOS\nServicios básicos AGUA DE CAÑERIA Y AGUA DE RIEGO , LUZ\nPRECIO: 650,000 DOLARES OFERTABLE' },
    { img: 'terrenos/000030.png', title: 'Villa Esmeralda IV, Manzano A, Avircato.', description: '3 Lotes amurallados Lote 2 (369m2), Lote3 (371m2),Lote 4(548m2) Se venden juntos o separados, cuenta con energía eléctrica y el camino de acceso está asfaltado A una cuadra de la Plaza Miguel Cerruto Bozo Precio negociable En google Maps todavía no se ve amurallado porque es una imagen antigua' }
];

function displayProjects() {
    var projectsContainer = document.getElementById('listaProyectos');
    projectsContainer.innerHTML = '';

    projectList.forEach(function(project, index) {
        var projectDiv = document.createElement('div');
        projectDiv.className = 'proyecto';
        projectDiv.style.display = index < 8 ? 'flex' : 'none';

        var img = document.createElement('img');
        img.src = project.img;
        img.alt = 'Descripción de ' + project.title;

        var title = document.createElement('h3');
        title.textContent = project.title;

        var description = document.createElement('p');
        description.textContent = project.description;

        projectDiv.appendChild(img);
        projectDiv.appendChild(title);
        projectDiv.appendChild(description);

        projectsContainer.appendChild(projectDiv);
    });
}

function filterProjects() {
    var input, filter, projects, project, i, txtValue;
    input = document.getElementById('buscadorProyecto');
    filter = input.value.toUpperCase();
    projects = document.getElementById('listaProyectos');
    project = projects.getElementsByClassName('proyecto');

    if (filter === "") {
        let count = 0;
        for (i = 0; i < project.length; i++) {
            if (count < 8) {
                project[i].style.display = "flex";
                count++;
            } else {
                project[i].style.display = "none";
            }
        }
    } else {
        for (i = 0; i < project.length; i++) {
            txtValue = project[i].textContent || project[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                project[i].style.display = "flex";
            } else {
                project[i].style.display = "none";
            }
        }
    }
}

document.getElementById('searchButton').addEventListener('click', filterProjects);

window.onload = function() {
    displayProjects();
};
