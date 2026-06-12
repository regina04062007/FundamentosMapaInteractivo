const baseDatos = {
    autoridades: {
        titulo: "Autoridades Reguladoras y Supervisoras",
        descripcion: "Coordinan, regulan y supervisan el correcto funcionamiento de todas las entidades financieras del país.",
        instituciones: {
            shcp: {
                nombre: "SHCP (Secretaría de Hacienda y Crédito Público)",
                funciones: ["Coordinar, planear y evaluar el sistema bancario nacional.", "Máxima autoridad del Gobierno Federal para el sistema financiero."],
                actividades: "Emisión histórica de bonos soberanos sustentables y reestructuración de la política fiscal post-pandemia.",
                legal: "Ley Orgánica de la Administración Pública Federal.",
                impacto: "Diseña la directriz económica del país y coordina a los demás órganos reguladores.",
                enlace: "https://www.gob.mx/shcp",
                rutaImg: "../img/shcp.jpg"
            },
            banxico: {
                nombre: "Banco de México (Banxico)",
                funciones: ["Preservar el valor de la moneda nacional controlando la inflación.", "Garantizar el sano desarrollo del sistema financiero y sistemas de pagos."],
                actividades: "Implementación de políticas monetarias restrictivas elevando la tasa de referencia hasta el 11.25% en respuesta a la inflación global.",
                legal: "Ley del Banco de México.",
                impacto: "Estabilidad de precios macroeconómica y control del poder adquisitivo.",
                enlace: "https://www.banxico.org.mx",
                rutaImg: "../img/banxico.webp"
            },
            cnbv: {
                nombre: "CNBV (Comisión Nacional Bancaria y de Valores)",
                funciones: ["Supervisar y regular a las entidades bancarias, bursátiles y sectores populares.", "Autorizar la operación de nuevos intermediarios."],
                actividades: "Supervisión activa y otorgamiento de licencias para la integración de Instituciones de Tecnología Financiera bajo la Ley Fintech.",
                legal: "Ley de la Comisión Nacional Bancaria y de Valores.",
                impacto: "Mantiene la solvencia y confianza en los sectores de ahorro, crédito y acciones.",
                enlace: "https://www.gob.mx/cnbv",
                rutaImg: "../img/cnbv.jpg"
            },
            cnsf: {
                nombre: "CNSF (Comisión Nacional de Seguros y Fianzas)",
                funciones: ["Supervisar que los sectores de seguros y fianzas se apeguen al marco legal.", "Preservar la solvencia financiera de las aseguradoras."],
                actividades: "Monitoreo de capitales mínimos de garantía ante el incremento de reclamaciones de pólizas de salud y daños de 2020 a 2024.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Asegura que las compañías tengan el dinero suficiente para pagar siniestros catastróficos.",
                enlace: "https://www.gob.mx/cnsf",
                rutaImg: "../img//cnsf.webp"
            },
            consar: {
                nombre: "CONSAR (Comisión Nacional del Sistema de Ahorro para el Retiro)",
                funciones: ["Regular y supervisar los sistemas de ahorro para el retiro.", "Asegurar que las AFOREs inviertan correctamente el dinero de los trabajadores."],
                actividades: "Implementación y vigilancia del nuevo tope legal a las comisiones cobradas por las AFOREs (fijado en 0.57%).",
                legal: "Ley de los Sistemas de Ahorro para el Retiro.",
                impacto: "Protege el patrimonio del retiro de millones de trabajadores mexicanos.",
                enlace: "https://www.gob.mx/consar",
                rutaImg: "../img/consar.jpg"
            },
            condusef: {
                nombre: "CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros)",
                funciones: ["Asesorar, proteger y defender los derechos e intereses de los usuarios financieros.", "Promover la educación financiera."],
                actividades: "Lanzamiento de plataformas de conciliación en línea y alertas masivas contra fraudes digitales y apps de préstamos ilegales.",
                legal: "Ley de Protección y Defensa al Usuario de Servicios Financieros.",
                impacto: "Equilibra la relación de poder entre los grandes bancos y el consumidor final.",
                enlace: "https://www.condusef.gob.mx",
                rutaImg: "../img/condusef.jpg"
            }
        }
    },
    bancaMultiple: {
        titulo: "Instituciones de Banca Múltiple",
        descripcion: "Bancos comerciales privados dedicados a captar recursos del público y colocarlos en créditos.",
        instituciones: {
            bbva: {
                nombre: "BBVA México",
                funciones: ["Captación de ahorro público.", "Otorgamiento de créditos comerciales e hipotecarios."],
                actividades: "Migración masiva hacia canales 100% digitales y eliminación progresiva de sucursales tradicionales.",
                legal: "Ley de Instituciones de Crédito.",
                impacto: "Es el banco más grande del país; dicta tendencias operativas y flujos de nóminas.",
                enlace: "https://www.bbva.mx",
                rutaImg: "../img/bbva.jpg"
            },
            banamex: {
                nombre: "Citibanamex",
                funciones: ["Financiamiento corporativo.", "Servicios bancarios minoristas."],
                actividades: "Proceso histórico de separación corporativa entre Citi (banca empresarial) y Banamex (banca de consumo).",
                legal: "Ley de Instituciones de Crédito.",
                impacto: "Pilar histórico del sistema de pagos y custodia de inversiones.",
                enlace: "https://www.citibanamex.com",
                rutaImg: "../img/banamex.png"
            },
            santander: {
                nombre: "Santander México",
                funciones: ["Emisión de deuda.", "Financiamiento de PyMEs."],
                actividades: "Inversión en infraestructura tecnológica y lanzamiento de alternativas digitales competitivas.",
                legal: "Ley de Instituciones de Crédito.",
                impacto: "Fuerte conector de financiamiento para medianas empresas.",
                enlace: "https://www.santander.com.mx",
                rutaImg: "../img/santander.jpg"
            },
            banorte: {
                nombre: "Banorte",
                funciones: ["Administración de activos.", "Créditos gubernamentales y de consumo."],
                actividades: "Lanzamiento oficial en 2024 de 'Bineo', su neobanco con licencia digital propia.",
                legal: "Ley de Instituciones de Crédito.",
                impacto: "El banco de capital mexicano más grande, clave para el desarrollo regional.",
                enlace: "https://www.banorte.com",
                rutaImg: "../img/banorte.jpg"
            }
        }
    },
    bancaDesarrollo: {
        titulo: "Instituciones de Banca de Desarrollo",
        descripcion: "Entidades de la administración pública federal dedicadas a facilitar el acceso al crédito en sectores estratégicos.",
        instituciones: {
            bancomext: {
                nombre: "Bancomext",
                funciones: ["Financiar el comercio exterior de empresas mexicanas.", "Otorgar garantías de exportación."],
                actividades: "Líneas de crédito preferenciales para empresas manufactureras insertándose en el Nearshoring.",
                legal: "Ley Orgánica de Bancomext.",
                impacto: "Impulsa la balanza comercial y la captación de divisas.",
                enlace: "https://www.bancomext.com",
                rutaImg: "../img/bancomext.jpg"
            },
            nafin: {
                nombre: "Nacional Financiera (Nafin)",
                funciones: ["Promover el desarrollo de las micro, pequeñas y medianas empresas (PyMEs).", "Desarrollar el mercado de capitales."],
                actividades: "Programas conjuntos de garantías con la banca comercial para rescatar PyMEs afectadas económicamente por la pandemia.",
                legal: "Ley Orgánica de Nacional Financiera.",
                impacto: "Sostiene el empleo nacional mediante la supervivencia de pequeñas empresas.",
                enlace: "https://www.nafin.com",
                rutaImg: "../img/nafin.jpg"
            },
            banobras: {
                nombre: "Banobras",
                funciones: ["Financiar proyectos de infraestructura pública y servicios públicos.", "Fortalecer institucionalmente a municipios y estados."],
                actividades: "Financiamiento prioritario a los proyectos federales de conectividad, carreteras y refinerías.",
                legal: "Ley Orgánica de Banobras.",
                impacto: "Detona la obra pública de gran escala indispensable para el crecimiento logístico.",
                enlace: "https://www.gob.mx/banobras",
                rutaImg: "../img/banobras.jpg"
            },
            fira: {
                nombre: "FIRA (Fideicomisos Instituidos en Relación con la Agricultura)",
                funciones: ["Canalizar recursos al sector agropecuario, forestal y pesquero.", "Otorgar asistencia técnica al campo."],
                actividades: "Emisión de bonos verdes con perspectiva de género para financiar la agricultura sostenible.",
                legal: "Ley de Instituciones de Crédito / Reglas de Banxico.",
                impacto: "Garantiza la seguridad alimentaria y el desarrollo social rural.",
                enlace: "https://www.fira.gob.mx",
                rutaImg: "../img/fira.jpg"
            }
        }
    },
    bursatil: {
        titulo: "Sector Bursátil",
        descripcion: "Mercado organizado donde se transaccionan títulos de renta variable, deuda y valores corporativos.",
        instituciones: {
            bmv: {
                nombre: "Bolsa Mexicana de Valores (BMV)",
                funciones: ["Facilitar las transacciones con valores.", "Garantizar el desarrollo del mercado accionario."],
                actividades: "Emisión récord de bonos bajo criterios ambientales, sociales y de gobernanza (ESG).",
                legal: "Ley del Mercado de Valores.",
                impacto: "Canaliza el gran ahorro institucional hacia proyectos productivos corporativos.",
                enlace: "https://www.bmv.com.mx",
                rutaImg: "../img/bmv.webp"
            },
            biva: {
                nombre: "Bolsa Institucional de Valores (BIVA)",
                funciones: ["Brindar competencia al mercado bursátil mexicano.", "Incentivar la inclusión de nuevas empresas de menor tamaño a la bolsa."],
                actividades: "Implementación de tecnología avanzada de listados y atracción de empresas tecnológicas medianas.",
                legal: "Ley del Mercado de Valores.",
                impacto: "Rompió el monopolio bursátil, reduciendo costos de financiamiento para corporativos.",
                enlace: "https://www.biva.mx",
                rutaImg: "../img/biva.webp"
            },
            vector: {
                nombre: "Vector Casa de Bolsa",
                funciones: ["Intermediar la compra y venta de acciones para clientes individuales e institucionales."],
                actividades: "Expansión internacional and digitalización de portafolios mediante Inteligencia Artificial de asesoría.",
                legal: "Ley del Mercado de Valores.",
                impacto: "Vincula directamente los ahorros patrimoniales de las personas con los mercados globales.",
                enlace: "https://www.vector.com.mx",
                rutaImg: "../img/vector.png"
            }
        }
    },
    seguros: {
        titulo: "Sector de Seguros y Fianzas",
        descripcion: "Entidades dedicadas a la prevención y cobertura financiera de riesgos patrimoniales y personales.",
        instituciones: {
            gnp: {
                nombre: "GNP Seguros",
                funciones: ["Ofrecer pólizas de vida, gastos médicos y autos."],
                actividades: "Afrontamiento de pagos históricos por siniestralidad médica en el periodo crítico de salud nacional.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Garantiza la continuidad familiar y empresarial ante pérdidas imprevistas.",
                enlace: "https://www.gnp.com.mx",
                rutaImg: "../img/gnp.png"
            },
            axa: {
                nombre: "AXA Seguros",
                funciones: ["Gestión integral de riesgos y coberturas corporativas."],
                actividades: "Lanzamiento de seguros paramétricos climáticos orientados al sector agrícola y hotelero.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Aporta resiliencia financiera internacional al mercado local.",
                enlace: "https://axa.mx",
                rutaImg: "../img/axa.jpg"
            },
            metlife: {
                nombre: "MetLife México",
                funciones: ["Especialistas en seguros de vida colectivos e individuales."],
                actividades: "Digitalización acelerada del proceso de reclamación y pago de primas a burócratas y particulares.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Sostiene el ahorro a largo plazo de millones de familias.",
                enlace: "https://www.metlife.com.mx",
                rutaImg: "../img/metlife.jpg"
            },
            qualitas: {
                nombre: "Quálitas",
                funciones: ["Líderes en aseguramiento del sector automotriz y transporte de carga."],
                actividades: "Integración de telemetría e IA para calcular tarifas de riesgo vehicular personalizadas.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Mitiga el impacto económico de accidentes en las redes de distribución del país.",
                enlace: "https://www.qualitas.com.mx",
                rutaImg: "../img/qualitas.webp"
            }
        }
    },
    ahorroPopular: {
        titulo: "Sector de Ahorro y Crédito Popular",
        descripcion: "Entidades que promueven la inclusión financiera en zonas rurales o de escasos recursos mediante esquemas cooperativos.",
        instituciones: {
            cajaPopular: {
                nombre: "Caja Popular Mexicana",
                funciones: ["Fomentar el ahorro cooperativo entre sus socios.", "Prestar servicios financieros con tasas justas."],
                actividades: "Inversión millonaria para blindar sus sistemas de banca móvil tras incidencias de ciberseguridad operativas.",
                legal: "Ley de Ahorro y Crédito Popular / Ley de SOCAPs.",
                impacto: "Es la cooperativa más grande, vital para las economías locales del Bajío y Occidente.",
                enlace: "https://www.cpm.coop",
                rutaImg: "../img/cajapopular.jpg"
            },
            compartamos: {
                nombre: "Financiera Compartamos",
                funciones: ["Otorgar microcréditos productivos a mujeres y microemprendedores."],
                actividades: "Ampliación de metodologías de crédito grupal para mitigar la contracción económica familiar.",
                legal: "Ley de Ahorro y Crédito Popular.",
                impacto: "Detona el autoempleo en la base de la pirámide socioeconómica.",
                enlace: "https://www.compartamos.com.mx",
                rutaImg: "../img/compartamos.png"
            }
        }
    },
    auxiliares: {
        titulo: "Organizaciones y Actividades Auxiliares del Crédito",
        descripcion: "Entidades complementarias que ayudan a las empresas a conseguir liquidez rápida mediante herramientas alternativas.",
        instituciones: {
            unifin: {
                nombre: "Unifin",
                funciones: ["Ofrecer arrendamiento puro, factoraje y crédito empresarial."],
                actividades: "Proceso complejo de concurso mercantil y reestructura de pasivos para mantener su viabilidad operativa.",
                legal: "Ley General de Organizaciones y Actividades Auxiliares del Crédito.",
                impacto: "Histórico motor de financiamiento alternativo para la adquisición de maquinaria industrial.",
                enlace: "https://www.unifin.com.mx",
                rutaImg: "../img/unifin.png"
            },
            creditoReal: {
                nombre: "Crédito Real (Requerido Anexo A)",
                funciones: ["Otorgar créditos de nómina, microcréditos y financiamiento de autos usados."],
                actividades: "Liquidación corporativa formal y reordenamiento de cartera crediticia tras problemas de liquidez bursátil.",
                legal: "Ley General de Organizaciones y Actividades Auxiliares del Crédito.",
                impacto: "Sirvió de referencia regulatoria sobre el riesgo sistémico de las SOFOMEs no reguladas.",
                enlace: "https://www.creditoreal.com.mx",
                rutaImg: "../img/creditoreal.webp"
            },
            hdiSeguros: {
                nombre: "HDI Seguros / Afianzadora (Requerido Anexo A)",
                funciones: ["Emisión de fianzas de fidelidad y cumplimiento de contratos gubernamentales."],
                actividades: "Soporte de garantías comerciales para obras del sector energético e inmobiliario.",
                legal: "Ley de Instituciones de Seguros y de Fianzas.",
                impacto: "Garantiza que los contratos entre particulares o con el gobierno se ejecuten sin pérdidas económicas.",
                enlace: "https://www.hdi.com.mx",
                rutaImg: "../img/hdi.jpg"
            }
        }
    },
    derivados: {
        titulo: "Sector de Derivados",
        descripcion: "Mercado especializado en contratos cuyo valor depende de un activo subyacente (tasas, divisas, acciones), útil para mitigar riesgos volatilidad.",
        instituciones: {
            mexder: {
                nombre: "MexDer (Bolsa de Derivados)",
                funciones: ["Proveer el foro e infraestructura para cotizar contratos de futuros y opciones."],
                actividades: "Transición operativa hacia nuevos contratos referenciados a la TIIE de Fondeo a un día hábiles financieros.",
                legal: "Reglas emitidas conjuntamente por SHCP, Banxico y CNBV.",
                impacto: "Permite a las grandes industrias asegurar precios de insumos o el valor del dólar a futuro.",
                enlace: "http://www.mexder.com.mx",
                rutaImg: "../img/mexder.png"
            },
            asigna: {
                nombre: "Asigna (Cámara de Compensación)",
                funciones: ["Actuar como contraparte central de todas las operaciones de MexDer.", "Administrar las garantías para eliminar el riesgo de incumplimiento."],
                actividades: "Ajuste de los niveles de aportaciones iniciales mínimas debido a la alta volatilidad global de los mercados.",
                legal: "Reglas del Sector de Derivados nacionales.",
                impacto: "Otorga certeza absoluta; si un comprador quiebra, Asigna responde por el dinero.",
                enlace: "http://www.asigna.com.mx",
                rutaImg: "../img/asigna.jpg"
            }
        }
    },
    afores: {
        titulo: "Administradoras de Fondos para el Retiro (AFORES)",
        descripcion: "Instituciones privadas financieras que resguardan e invierten los ahorros de pensión obligatorios de los trabajadores.",
        instituciones: {
            sura: {
                nombre: "Afore SURA",
                funciones: ["Administrar cuentas individuales de retiro e invertirlas mediante SIEFOREs."],
                actividades: "Adopción de inversiones sustentables e incremento de portafolios en infraestructura nacional bajo lineamientos ESG.",
                legal: "Ley de los Sistemas de Ahorro para el Retiro.",
                impacto: "Pilar de ahorro interno a largo plazo para la economía.",
                enlace: "https://www.aforesura.com.mx",
                rutaImg: "../img/sura.jpg"
            },
            profuturo: {
                nombre: "Afore Profuturo",
                funciones: ["Maximizar el rendimiento neto de los fondos de retiro de los afiliados."],
                actividades: "Liderazgo consistente en las tablas de rendimiento neto de CONSAR en el bloque generacional.",
                legal: "Ley de los Sistemas de Ahorro para el Retiro.",
                impacto: "Directo beneficio sobre la tasa de reemplazo y pensiones dignas futuras.",
                enlace: "https://www.profuturo.mx",
                rutaImg: "../img/profuturo.png"
            },
            principal: {
                nombre: "Afore Principal",
                funciones: ["Gestión transparente de fondos de ahorro y aportaciones voluntarias."],
                actividades: "Modernización de trámites mediante la app AforeMóvil para mitigar retiros por desempleo pospandémicos.",
                legal: "Ley de los Sistemas de Ahorro para el Retiro.",
                impacto: "Facilita la inclusión del trabajador al sistema financiero formal.",
                enlace: "https://www.principal.com.mx",
                rutaImg: "../img/principal.jpg"
            },
            banorteAfore: {
                nombre: "Afore XXI Banorte",
                funciones: ["Administrar el fondo de pensiones más grande por volumen de cuentas en el país."],
                actividades: "Ajuste operativo riguroso al tope de comisiones de la reforma del SAR.",
                legal: "Ley de los Sistemas de Ahorro para el Retiro.",
                impacto: "Es un inversionista institucional gigantesco para el financiamiento corporativo mexicano.",
                enlace: "https://www.xxi-banorte.com",
                rutaImg: "../img/xxibanorte.png"
            }
        }
    },
    fondos: {
        titulo: "Instituciones de Fondos y Fideicomisos Públicos",
        descripcion: "Fondos estatales orientados a solucionar problemáticas sociales prioritarias como vivienda y desarrollo regional.",
        instituciones: {
            fovissste: {
                nombre: "FOVISSSTE",
                funciones: ["Otorgar créditos de vivienda a los trabajadores al servicio del Estado."],
                actividades: "Lanzamiento del programa de reestructura de UMAs a pesos para evitar deudas impagables.",
                legal: "Ley del ISSSTE.",
                impacto: "Estabiliza el bienestar social de la fuerza laboral pública.",
                enlace: "https://www.gob.mx/fovissste",
                rutaImg: "../img/fovissste.png"
            },
            infonavit: {
                nombre: "INFONAVIT",
                funciones: ["Administrar el Fondo Nacional de la Vivienda para los trabajadores del sector privado."],
                actividades: "Implementación masiva de la ventanilla de Responsabilidad Compartida y nuevos esquemas de créditos para terrenos.",
                legal: "Ley del INFONAVIT.",
                impacto: "Es el mayor motor del sector construcción y de la vivienda social en el país.",
                enlace: "https://portalmx.infonavit.org.mx",
                rutaImg: "../img/infonavit.jpg"
            },
            fojal: {
                nombre: "FOJAL (Fondo Jalisco de Fomento Empresarial - Requerido Anexo A)",
                funciones: ["Otorgar financiamiento, capacitación y consultoría para emprendedores de la región."],
                actividades: "Colocación masiva de microcréditos de reactivación económica local en las cadenas de valor estatales (2021-2025).",
                legal: "Ley de Entidades Paraestatales / Decretos Estatales de Fomento.",
                impacto: "Ejemplo clave de cómo un fondo público descentralizado impulsa la economía interna regional.",
                enlace: "https://fojal.jalisco.gob.mx",
                rutaImg: "../img/fojal.png"
            }
        }
    }
};

let sectorActualGlobal = null;


function cargarSector(claveSector) {
    const sector = baseDatos[claveSector];
    if (!sector) return;

    sectorActualGlobal = sector; 
  
    const modal = document.getElementById("modalContenedor");
    modal.style.display = "flex";
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.opacity = "1"; }, 50);


    document.getElementById("mTitulo").innerText = sector.titulo;
    document.getElementById("mDescripcionSector").innerText = sector.descripcion;

  
    document.getElementById("mDetalleEspecifico").style.display = "none";
    document.getElementById("mColImg").style.display = "none";

   
    const subMenu = document.getElementById("mSubMenuInstituciones");
    subMenu.innerHTML = ""; 

    Object.keys(sector.instituciones).forEach(claveInst => {
        const inst = sector.instituciones[claveInst];
        const boton = document.createElement("button");
        boton.innerText = inst.nombre.split(" (")[0]; 
        boton.className = "btnSubInst";
        boton.onclick = () => cargarInstitucion(claveInst);
        subMenu.appendChild(boton);
    });
}


function cargarInstitucion(claveInst) {
    if (!sectorActualGlobal) return;
    const inst = sectorActualGlobal.instituciones[claveInst];
    if (!inst) return;


    document.getElementById("mDetalleEspecifico").style.display = "block";
    document.getElementById("mColImg").style.display = "block";


    document.getElementById("mActividades").innerText = inst.actividades;
    document.getElementById("mMarcoLegal").innerText = inst.legal;
    document.getElementById("mImpacto").innerText = inst.impacto;
    
   
    document.getElementById("mImagen").src = inst.rutaImg;
    document.getElementById("mImagen").alt = `Logotipo Oficial de ${inst.nombre}`;

   
    const btnEnlace = document.getElementById("mEnlace");
    btnEnlace.href = inst.enlace;
    btnEnlace.style.display = "inline-block";

  
    const listaFunciones = document.getElementById("mFunciones");
    listaFunciones.innerHTML = "";
    inst.funciones.forEach(func => {
        const li = document.createElement("li");
        li.innerText = func;
        listaFunciones.appendChild(li);
    });
}

function cerrarModal() {
    const modal = document.getElementById("modalContenedor");
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.display = "none"; }, 300);
    sectorActualGlobal = null;
}