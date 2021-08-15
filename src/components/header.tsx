import React from 'react';
import style from './header.module.css'
import { Link } from "gatsby";


export default function Header() {
    return (
        <div className={style.nav}>
            <Link to="/">Home</Link>
            <Link to="/Blog/">Blog</Link>
            <Link to="/About/">About</Link>
        </div>
    );
}