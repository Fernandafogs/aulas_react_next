interface TabelaSerieAProps{
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps){
    
    /*
    //transformar uma string em <li>
    const itens: any[] = []
    for(let i = 0; i < props.times.length; i++){
        itens.push((
            <li key={props.times[i]} className="text-xl list-decimal">
                {props.times[i]}
            </li>
        ))
    }*/

    //transformar uma string em <li>
    const itens2 = props.times.map((time, i) => {
        return (
   
            <li 
            key={time} 
            className={`text-3xl list-decimal`}
            style={{color: i % 2 === 0 ? 'red' : 'blue'}}
            >
                {time}
            </li>
        )
    })

    return(
        <ol>
            {itens2}
        </ol>
    )

}