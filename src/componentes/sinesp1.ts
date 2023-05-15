import axios from "axios";

interface SinespResponse {
  MARCA: string;
  MODELO: string;
  SUBMODELO: string;
  VERSAO: string;
  renavan: string; 
  anoModelo: string; 
  chassi: string;
  codigoSituacao: string; 
  data: string;   
  cor: string;
  ano: string;
  renavam: string; 
 
  extra: {
    ano_fabricacao: string;
    ano_modelo: string;      
    caixa_cambio: string; 
    cap_maxima_tracao: string;
    carroceria: string;
    chassi: string;
    cilindradas: 1599, 
    combustivel: string;
    di: string;
    eixo_traseiro_dif: string;
    eixos: string;
    especie: string; 
    faturado: string; 
    grupo: string;
    limite_restricao_trib: string;
    linha: string;
    media_preco: string;
    modelo: string; 
    motor: string;
    municipio: string; 
    nacionalidade: string; 
    peso_bruto_total: string;
    placa: string;
    placa_modelo_antigo: string; 
    placa_modelo_novo: string;
    quantidade_passageiro: string;
    registro_di: string;
    renavam: string;
    restricao_1: string; 
    restricao_2: string; 
    restricao_3: string; 
    restricao_4: string; 
    s_especie: string; 
    segmento: string;
    situacao_chassi: string;
    situacao_veiculo: string;
    sub_segmento: string;
    terceiro_eixo: string;
    tipo_carroceria: string; 
    tipo_doc_faturado: string; 
    tipo_doc_importadora: string;
    tipo_doc_prop: string; 
    tipo_montagem: string;
    tipo_veiculo: string; 
    uf: string;
    uf_faturado: string; 
    uf_placa: string;
    unidade_local_srf: string;
  } 
}
  

export const consultarPlacaSinesp = async (placa: string, token: string) => {
  const url = `https://wdapi.com.br/placas/${placa}/c61acacceb11770c83fe47d06b49f4ba`;

  const response = await axios.get<SinespResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(`Erro ao consultar placa ${placa}`);
  }
};
