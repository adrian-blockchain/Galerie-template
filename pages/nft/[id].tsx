import {useRouter} from 'next/router'

export default function Nft(){
    const router = useRouter()
    const {id}= router.query

    return(
        <div>
            <h1>NFT n°{id}</h1>
        </div>
    )
}

export async function getServerSideProps({params}:any){
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json();

    return{
        props: {car:data}
    }

}