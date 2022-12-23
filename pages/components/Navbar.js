import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src='/images/pokeball.png' width='50' height='50' alt="Pokebola" />
                <h1>PokéNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}