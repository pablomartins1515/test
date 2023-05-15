import { Header } from "../componentes/Header"
import { MainBlog } from "../componentes/MainBlog"
import { useParams } from "react-router-dom"
import { ArrowRight } from "phosphor-react"
import { Rodape } from "../componentes/Rodape"

export function Post () {
    const { slug } = useParams<{ slug:string }>()
    
    return (
        <div className="flex flex-col min-h-screen">            
            <Header />

            <main className="flex flex-1">
               
                {slug ? 
                    <MainBlog lessonSlug={slug} />
                     : <div className="flex-1  text-2xl text-zinc-200 text-opacity-30   hover:mix-blend-hard-light font-bold flex 
                     gap-2 items-center justify-center " >Clique em uma aula <ArrowRight size={32}/></div>  }               
                
                </main>

            <Rodape />                       
        </div>   
    )       
}