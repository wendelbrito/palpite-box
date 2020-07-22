import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: {' '}
                <a> Wendel Brito</a> / {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/wendel-brito-4b6462176/'>Linkedin</a> / {' '}
                <a className='hover:underline' href='https://github.com/wendelbrito'>Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}
export default Footer
