import { Icon } from '@iconify/react'
import React from 'react'

export const Menu = () => {
  return (
    <header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <section className="redes">
      <a aria-label='Linkedin' href="https://www.linkedin.com/in/gerardo-marcovics-b8a07a180/" className="fa fa-linkedin" target="_blank"></a>
      <a aria-label='About Me' href="/about-me"><Icon icon="heroicons-outline:user" /></a>
    </section>
    </header> 
  )
}
export default Menu