// Values.jsx
import Valores from "./components_valores/ContenidoValores";
import iconMaybe from "../../Assets/Images/maybe 3.svg";
import monoMusica from "../../Assets/Images/MonoMusica.svg";
import texturaBackground from "../../Assets/Images/Textura.png";

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
                'Neque porro quisquam est qui dolorem',
                'psum quia dolor sit amet, consectetur, adipisci velit..."'
            ],
            position: { top: '244px', left: '10px' }
        }
    ];
    
    return (
        <div 
            className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-28 mb-28"
            style={{
                backgroundImage: `url(${texturaBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div 
                className="relative"
                style={{
                    width: '1222px',
                    height: '574px'
                }}
            >
                <div className="relative w-full h-full">
                    {/* Mono música - tamaño y posición absoluta fija */}
                    <img 
                        src={monoMusica} 
                        alt="Mono Música" 
                        style={{
                            position: 'absolute',
                            top: '287px',
                            left: '611px',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                    
                    {/* Valores - posiciones absolutas fijas */}
                    {valores.map((valor) => (
                        <div 
                            key={valor.id} 
                            style={{ 
                                position: 'absolute',
                                top: valor.position.top,
                                left: valor.position.left
                            }}
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
        </div>
    );
}

export default Values;