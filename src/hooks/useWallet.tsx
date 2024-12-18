import { create } from "zustand";

type wallet = {
    wallet: number,
    increment: (amount:number)=>void,
    decrement: (amount:number)=>void
}

export const useWallet = create<wallet>((set)=>({
    wallet:500,
    increment:(amount)=>set((state)=>({wallet: state.wallet + amount})),
    decrement: (amount)=>set((state)=>({wallet: state.wallet - amount < 0 ? 0 : state.wallet - amount}))
    
}))
