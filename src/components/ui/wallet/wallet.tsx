import {useWallet} from "../../../hooks/useWallet"
import { FaCoins } from "react-icons/fa";
import './wallet.css'

export default function Wallet(){
    const wallet = useWallet((state)=>state.wallet)
    return(
        <>
            <div className="wallet">
                <p>{wallet}</p>
                <FaCoins />
            </div>
        </>
    )
}