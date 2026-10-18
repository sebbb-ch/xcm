// External imports
import { useState } from 'react'

// Internal imports
import './Navbar.css'

type NavbarElements = {
    title   : string
    links   : {
        label : string,
        href  : string
    }[]
}
/**
 * @todo Collapse elements to a burger menu on mobile/when collapesed
 * 
 * @todo Style this nicely and don't make it look generic
 *      @cite https://www.navbar.gallery/
 */
export default function Navbar({ title, links } : NavbarElements) {
    /**
     * @notes So useState returns the actual state variable and a way to update it.
     *  It takes as input the starting value of the state 
     * 
     * @notes The question mark is optional chaining - ? returns undefined if 
     *  links is empty
     */
    const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? '')

    return (
        <nav className="navbar">
            <a href="/" className="navbar-title">
                {title}
            </a>

            <ul className="navbar-links">
                {/**
                    @note This is just mapping the elements of links to list elements
                */}
                {links.map(link => (
                    <li key={link.href}>
                        <a
                            href        = {link.href}
                            className   = {link.href === activeHref ? 'active' : ''}
                            onClick     = {() => setActiveHref(link.href)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}