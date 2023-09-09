import Link from "next/link"
import style from "./style.module.css"
import Search from "./search"

export default function NavBar()
{
    return (
        <nav className={style.NavBar}>
            <Link href="/">
                All posts
            </Link>

            <Search/>

        </nav>
    )
}