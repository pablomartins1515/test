import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { List } from "phosphor-react"

export function Header() {
    return (
        <header className="w-full py-3.5 grid grid-flow-col bg-zinc-100 border-b border-zinc-100">
            <div className="px-7 row-start-1 row-span-1">
                <Logo />
            </div>                   

            <div className="flex items-center justify-center row-end-3 row-span-3 flex-row-reverse">
                <NavLink to="/maisconsultas" className="text-blue-900">
                    <strong className="text-xl text-gray-700 hover:text-blue-900 transition-colors hover:text-2xl hover:border-b-2 border-blue-900"
                    >
                        + Consultas
                    </strong>
                </NavLink>
            </div>

            
            <div className="flex items-center justify-center row-end-3 row-span-3 flex-row-reverse">
                <NavLink to="" className="text-blue-900">
                    <strong className="text-xl text-gray-700 hover:text-blue-900 transition-colors hover:text-2xl hover:border-b-2 border-blue-900">
                        Blog
                    </strong>
                </NavLink>
            </div> 

            <div className="px-5 flex items-center row-end-4 row-span-4 flex-row-reverse">
            <NavLink to="/">
                <List size={42} />
            </NavLink>
                
            </div>
        </header>

    )

}


//colocar no navLink to="/blogpage" linha 22