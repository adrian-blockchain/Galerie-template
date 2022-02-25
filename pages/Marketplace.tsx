import Link from "next/link";

export default function Marketplace(){
    return(
        <div>
            <main className="text-center top-auto text-8xl">
                <h1>Marketplace List</h1>
            </main>
            <ul className="text-center mt-10 text-2xl">
                <li>
                    <Link href="/NFT/Achraf"><a>Achraf Marketplace</a></Link>
                </li>
                <li>
                    <Link href="/NFT/Eyad"><a>Eyad Marketplace</a></Link>
                </li>
                <li>
                    <Link href="/NFT/Baptise"><a>Baptiste Marketplace</a></Link>
                </li>

            </ul>
        </div>
    )
}