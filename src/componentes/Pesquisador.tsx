import React, { useState, useEffect } from 'react';
import { Botao_liberar } from './Botao_liberar';
import { Botao_liberar2 } from './Botao_liberar2';
import { consultarPlacaSinesp } from "./sinesp1";

const ConsultaPlaca: React.FC = () => {
  const [placa, setPlaca] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [erro, setErro] = useState<React.ReactNode>(null);


    //consulta da API   

    const consultarPlaca = async () => {
      try {
        const token = "c61acacceb11770c83fe47d06b49f4ba"; // substitua pelo seu token de acesso
        const resposta = await consultarPlacaSinesp(placa, token);
        setResultado(resposta);
        setErro(null);
      } catch (error) {
        setResultado(null);
        setErro( <div className=' col-span-1'>
                    <div className='p-3 text-center '>
                      <p  className='font-medium'>Erro ao trazer o resultado! </p> 
                      <p>
                        <br/>Não conseguiu todas as informações? 
                        <br/>Nos Chame agora no Whatsapp!
                      </p>
                    </div> 
                    <div className='text-center pt-2'>
                      <Botao_liberar2/>
                    </div>
                </div>
                );
      }
    };

    

  //Construção do Timer
  const [time, setTime] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [unlockTime, setUnlockTime] = useState(0);

  useEffect(() => {
    // recupera informações do localStorage (se houver)
    const storedData = localStorage.getItem('timerData');
    if (storedData) {
      const { timeLeft, unlockTime } = JSON.parse(storedData);
      setTime(timeLeft);
      setButtonDisabled(true);
      setUnlockTime(unlockTime);
    }
  }, []);

  useEffect(() => {
    let intervalId: any = null;

    if (clicked && !buttonDisabled) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [clicked, buttonDisabled]);

  useEffect(() => {
    if (buttonDisabled) {
      const intervalId = setInterval(() => {
        const timeLeft = Math.round((unlockTime - Date.now()) / 1000);
        if (timeLeft <= 0) {
          setButtonDisabled(false);
          setUnlockTime(0);
          clearInterval(intervalId);
          // remove informações do localStorage
          localStorage.removeItem('timerData');
        } else {
          setTime(timeLeft * 1000);
          // salva informações no localStorage
          const data = { timeLeft: timeLeft * 1000, unlockTime };
          localStorage.setItem('timerData', JSON.stringify(data));
        }
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [buttonDisabled, unlockTime]);

  const handleClick = () => {
    setClicked(true);
    setButtonDisabled(true);
    setUnlockTime(Date.now() + 300000);
  };

  function handleBoth() {
    handleClick();
    consultarPlaca();
  }

  return (
    

    <div className=' flex '>
      
      
      <div className='justify-center w-full'>
      
      

        <h1 className='text-xl  text-center py-3 font-medium text-gray-600 '> Digite aqui a sua placa: </h1>

        
        <div className=' flex justify-center py-4'>          
          <textarea
            className="min-w-[200px]  max-w-[24px] max-h-[64px] shadow px-3 py-2 text-4xl placeholder-shown:text-center placeholder-shown:justify-center placeholder-zinc-400 text-gray-800 bg-white rounded-md border border-gray-400 focus:ring-blue-900 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-gray-700 scroolbar-track-transparent scrollbar-thin "
            placeholder="AAA-1234"

            onChange={event => setPlaca(event.target.value.slice(0, 9))}
            maxLength={7}            
            minLength={6}
            />
        </div>

        <div className=' flex justify-center py-2'>
          <button
                onClick={handleBoth}
                disabled={buttonDisabled}
                className="min-w-[240px]  max-w-[3800px] shadow flex justify-center py-3   border border-transparent text-lg font-semibold rounded-md text-white bg-green-800 hover:bg-blue-900"

              >
                {buttonDisabled
                  ? `Botão bloqueado. Espere ${Math.round(
                      (unlockTime - Date.now()) / 1000
                    )} segundos`
                  : 'Consultar Placa'}
          </button>        
        </div>

        <div className='flex  items-center justify-center '>
        <div className=' items-center justify-center '>
          {resultado && (

            <div className='m-2'>          

                <div>
                           

                  <h2 className=' ml-6 mt-8  mb-4 text-xl' >Resultado da consulta:</h2>
                    
                      <div className='m-2 max-w-[380px]'>
                     

                        <div className='flex '>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Marca:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.MARCA}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full  p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Modelo:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.MODELO}</p>
                        </div>                        

                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>Proprietário:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div>                        
                                                
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Cor:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.cor}</p>
                        </div>                                             
                        
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Ano:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.ano}</p>
                        </div>
                        
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Submodelo:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.SUBMODELO}</p>
                        </div>
                        
                        
                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>Chassi:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div>  
                                              
                        
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Ano/Modelo:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.anoModelo}</p>
                        </div>                       
                                                
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Código Situação:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.codigoSituacao}</p>
                        </div>
                      
                        <div className='flex'>
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-100 border border-gray-400 font-medium'>Data:</p> 
                          <p className='w-full p-2 pr-20 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.data}</p>
                        </div>
                        

                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>Renavam:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div>                           
                        
                     </div>
                    </div>                  
 
                <div className='m-2 max-w-[380px]'>
                    <h2 className='p-4 text-xl' >Resultado da EXTRA:</h2>

                    <div className=''>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Ano_fabricação:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.ano_fabricacao}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Ano_modelo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.ano_modelo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Caixa_câmbio:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.caixa_cambio}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Cap_máxima_tração:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.cap_maxima_tracao}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Carroceria:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.carroceria}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Cilindradas:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.cilindradas}</p>
                        </div>                       

                       <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Combustivel:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.combustivel}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Di:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.di}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Eixo_traseiro_dif:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.eixo_traseiro_dif}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Eixos:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.eixos}</p>
                        </div>
                        
                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Especie:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.especie}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Faturado:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.faturado}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Grupo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.grupo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Limite_restricao_trib:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.limite_restricao_trib}</p>
                        </div>

                       <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Linha:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.linha}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Média_preco:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.media_preco}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Modelo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.modelo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Motor:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.motor}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Município:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.municipio}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Nacionalidade:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.nacionalidade}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Peso_bruto_total:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.peso_bruto_total}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Placa:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.placa}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Placa_modelo_antigo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.placa_modelo_antigo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Placa_modelo_novo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.placa_modelo_novo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Quantidade de passageiros:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.quantidade_passageiro}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Caixa_câmbio:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.caixa_cambio}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Registro_di:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.registro_di}</p>
                        </div>
                       
                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>restricao_1:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div> 
                       

                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>restricao_2:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div> 

                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>restricao_3:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div> 

                        <div className='flex '>
                          <p className='w-full justify-center pt-3 pl-2  bg-gray-100 border border-gray-400 font-medium'>restricao_4:</p> 
                          <p className='w-full  pr-2 pt-2 bg-gray-50 border border-gray-400'> <Botao_liberar/></p>
                        </div> 
                       
                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Segmento:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.segmento}</p>
                        </div>
                        
                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Situação Chassi:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.situacao_chassi}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Situação_veículo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.situacao_veiculo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Sub_segmento:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.sub_segmento}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Terceiro_eixo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.terceiro_eixo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_carroceria:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_carroceria}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_doc_faturado:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_doc_faturado}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_doc_importadora:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_doc_importadora}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_doc_prop:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_doc_prop}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_montagem:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_montagem}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Tipo_veiculo:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.tipo_veiculo}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>UF:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.uf}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Uf_placa:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.uf_placa}</p>
                        </div>

                        <div className='flex'>
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-100 border border-gray-400 font-medium'>Unidade_local_srf:</p> 
                          <p className='w-full p-2 pr-22 xy-2 bg-gray-50 border border-gray-400 font-normal'>{resultado.extra.unidade_local_srf}</p>
                        </div>

                    
                    </div>
                </div>                  
            </div>
          )}
          {erro && <p>{erro}</p>}

        </div> 
        </div>
               
      </div>
    </div>
  );
};

export default ConsultaPlaca;
