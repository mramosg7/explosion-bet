import Wallet from "../ui/wallet/wallet";
import './header.css'
import { FaInfoCircle } from "react-icons/fa";

export default function Header (){
    return(
        <>
            <header className="header">
                <nav className="menu">
                    <div className="left">
                        <Wallet/>
                        <div>
                            <FaInfoCircle />
                        </div>
                    </div>
                    
                    <div>
                        <p>EXPLOSION BET</p>
                    </div>
                    <div>
                        github  
                    </div>
                </nav>
                
            </header>
        </>
    )
}