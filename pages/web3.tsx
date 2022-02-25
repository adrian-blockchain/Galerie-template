import {ethers} from "ethers";
import {useState} from "react";

// @ts-ignore
import {nftMarketplace} from "../artifacts/contracts/NFTMarketplace/NFTMarketplace.json";

declare let window: any;

const contractAdress = "0xB06f4db16E72b7aA0C47235b3782cCc5fC2f6Db6"


export default function GetAccount (){
    const [address, setAdrress] = useState<string>()

    function connect(){
        if (!window.ethereum){
            alert("No Metamask detected")
        }else {
            const provider = new ethers.providers.Web3Provider(window.ethereum)


            window.ethereum.enable().then(()=>{
                const signer = provider.getSigner()
                signer.getAddress().then((result)=>{setAdrress(result)})
            })
        }
    }
    return (
        <div className="absolute right-10 top-10">
            <h1>{address}</h1>
            <button onClick={connect}>Connect</button>
        </div>
    )
}

export const Mint = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(
        contractAdress,
        nftMarketplace,
        signer
    )

    const mint = await contract.safeMint("À vous de trouver ce qu'il faut mettre : )")
}



