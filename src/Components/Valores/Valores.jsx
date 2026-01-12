import Valores from "./components_valores/ContenidoValores";
import iconMaybe from "../../Assets/Images/maybe 3.svg";
import monoMusica from "../../Assets/Images/MonoMusica.svg";

function Values() {
    const valores = [
        {
            id: 1,
            icon: iconMaybe,
            title: 'Acompañamiento real',
            texts: [
                'Trabajamos contigo, no "para ti".',
                'Decisiones rápidas con contexto claro.'
            ],
            position: { top: '7px', left: '242px' }
        },
        {
            id: 2,
            icon: iconMaybe,
            title: 'UX que convierte',
            texts: [
                'Menos pasos. Más intención.',
                'Optimización de embudos y onboarding.'
            ],
            position: { top: '131px', left: '762px' }
        },
        {
            id: 3,
            icon: iconMaybe,
            title: 'Microinteracciones alineadas',
            texts: [
                'Iteración rápido y ordenada.',
                'Animaciones que guían y deleitan.'
            ],
            position: { top: '413px', left: '775px' }
        },
        {
            id: 4,
            icon: iconMaybe,
            title: 'Listo para escalar',
            texts: [
                'Sistemas que encajen contigo.',
                'Componentes y flujos a tu medida.' 
            ],
            position: { top: '497px', left: '191px' }
        },
        {
            id: 5,
            icon: iconMaybe,
            title: 'Personalización sin fricción',
            texts: [
                '--------------------',
                '---------------------'
            ],
            position: { top: '244px', left: '10px' }
        }
    ];
    
    return (
        <div 
            className="relative"
            style={{
                width: '1222px',
                height: '574px',
                marginTop: '205px',
                marginLeft: '127px',
                opacity: 1
            }}
        >
            <div className="relative w-full h-full">
                {/* Mono música */}
                <img 
                    src={monoMusica} 
                    alt="Mono Música" 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                
                {/* Valores */}
                {valores.map((valor) => (
                    <div 
                        key={valor.id} 
                        className="absolute"
                        style={{ top: valor.position.top, left: valor.position.left }}
                    >
                        <Valores 
                            id={valor.id} 
                            icon={valor.icon}
                            title={valor.title} 
                            content_left={valor.texts[0]} 
                            content_right={valor.texts[1]}
                        /> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Values;