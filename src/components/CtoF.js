import React from 'react'

export default function CtoF({main,temp_max}) {
    const [c,f] = useState(false);
    const fahrenheit = Math.round(main.temp_max)
    const celsius = Math.round((fahrenheit - 32) * 5/9)
    return (
        <div>
            
        </div>
    )
}
