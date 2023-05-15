import { Header } from "../componentes/Header";
import { Duvidas } from "../componentes/Duvidas";
import Faq from "../componentes/Faq";
import { BottomStyle } from "../componentes/BottomStyle";
import { Rodape } from "../componentes/Rodape";
import { Imagem } from "../componentes/Imagem";
import Pesquisador from "../componentes/Pesquisador";

export function Home() {
    return (
        <>
            <Header />
            <main className="justify-center items-center">
                <span className="">
                    <Pesquisador />
                </span>

                <span className="">
                    <h1 className="py-8  text-center font-black text-5xl text-blue-900">
                        Vai comprar um veículo?
                    </h1>

                    <h2 className="text-center justify-center text-xl mb-8">
                        Saber seu histórico nunca foi tão fácil! <br />
                        Por <strong>apenas</strong> <strong className="text-blue-900">R$ 8,99</strong> consulte pela placa e <br /> receba diversas informações. 😉
                    </h2>
                </span>
            </main>
            <Imagem />
            <Duvidas />
            <Faq />
            <BottomStyle />
            <Rodape />
        </>
    );
}
