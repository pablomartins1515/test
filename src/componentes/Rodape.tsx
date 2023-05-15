import { NavLink } from "react-router-dom";

export function Rodape() {
    return (
    <div>      
        <NavLink to="/politica">
            <div className="py-8 mt-8 bg-zinc-100 text-gray-600 font-semibold w-full flex items-center justify-center  boder-b boder-gray-60 hover:bg-white hover:text-blue-900">
                Política de Privacidade
            </div>
        </NavLink>
    </div>
)
}