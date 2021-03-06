import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Seja Bem-Vindo' />
            <p className='mt-12 text-center'>
              O estabelecimento X sempre busca por atender melhor seus cliente.<br />
              Por isso, estamos sempre abertos a ouvir sua opnião
            </p>
            <div className='text-center my-12'>
               <Link href='/pesquisa'>
                    <a className='bg-blue-600 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>   
                </Link> 
            </div>
            {!data && <p>carregando...</p>}    
            {!error && data && data.showCoupon &&
                <p className='text-center my-12'>
                   {data.message} 
                </p>  
            } 
        </div>
    )
}

export default Index
