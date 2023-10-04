interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props:CirculoProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-cyan-500 
            w-64 h-64 
            text-black font-black text-3xl
            ${props.quasePerfeito ? 'rounded-2xl': 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}