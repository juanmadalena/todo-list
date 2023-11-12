import { useEffect } from "react"

export default function ModalContainer({children}){

    useEffect(()=>{   
        document.body.style.overflow = 'hidden'
        return () => ( document.body.style.overflow = 'auto')
    }, [])


    return(
        <section className='fixed inset-0 z-50 backdrop-blur-sm'>
            {children}
        </section>
    )
}