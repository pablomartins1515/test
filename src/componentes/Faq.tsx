import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Faq() {
  return (
    <div className="w-full px-4 pt-4">
      <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <p>O que é o Buscar Dados? </p>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>O nosso serviço de Buscar Dados oferece as melhores e maiores consultas veiculares,
                  para que você faça negociações seguras. De forma fácil, apenas pela placa,
                  você consulta o histórico completo do veículo usado ou seminovo e se livra de golpes e problemas.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <p>Como fazer a consulta?</p>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>É muito fácil consultar um veículo no nosso site! Você pode fazer a consulta pela placa ou pelo chassi, para isso, é só clicar no botão do <b>WhatsApp</b> e conversar com  um de nossos consultores profissionais. </p>

              </Disclosure.Panel>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>É possível consultar apenas pela placa?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>Sim! Você pode consultar apenas pela placa ou escolher a consulta pelo chassi.
                        Para fazer a consulta do veículo informe o número da placa ou chassi para os nossos consultores do WhatsApp e em poucos mintuos estaremos entregando o resultado compleo da consulta. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>Por que é importante consultar?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>Grande parte dos carros usados que são vendidos no Brasil tem problemas em seu histórico que, além de diminuírem o seu valor de mercado, podem impedir a realização de um seguro ou até mesmo a transferência para o seu nome. A consulta veicular é a melhor forma de evitar prejuízos financeiros e garantir a compra do melhor carro usado ou seminovo. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>Como consultar o Renavam?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p> Para fazer a consulta do Renavam, você precisa saber o número da placa ou do chassi do veículo. Depois é só escolher uma das nossas consultas. Se você só quer descobrir o número do Renavam pela placa, indicamos a Consulta de Dados Cadastrais do Veículo. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>Posso fazer a consulta só pelo chassi?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>Sim! Todas as nossas consultas podem ser feitas pelo número do chassi ou da placa do veículo. Mas é importante que, ao escolher o chassi como sua chave de busca, você confira todos os caracteres com atenção. Isso porque, a informação de chassi não é padronizada, o que aumenta a chance de erros. Caso seja inserido um número errado de chassi, a busca no sistema será feita da mesma forma e não poderemos fazer o estorno do valor.</p>

                    </Disclosure.Panel>

                    
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>Como fazer a consulta?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>É muito fácil consultar um veículo no nosso site! Você pode fazer a consulta pela placa ou pelo chassi, para isso, é só clicar no botão do <b>WhatsApp</b> e conversar com  um de nossos consultores profissionais. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>O que é o número do Renavam?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>RENAVAM significa Registro Nacional de Veículos Automotores e o número do Renavam é um código de 11 dígitos, que funciona como o nosso CPF. Ele é utilizado para identificar todos os veículos registrados no Brasil e, por meio dele, é possível ter acesso a dados de fabricação, emplacamento, mudanças de propriedade, de estado e até mesmo mudanças nas características originais. Esse número é único e acompanha o veículo até que ele saia de circulação. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>O que é o histórico de proprietários?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>No histórico de proprietários, você pode saber quantos proprietários o veículo já teve e se eles são Pessoas Físicas ou Jurídicas. Essa informação só aparecerá na consulta se estiver disponível nas bases de dados. *Atenção! Não é possível ter acesso aos dados cadastrais de nenhum proprietário por meio das nossas consultas, pois isso é contra a lei. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <p>O que são débitos e multas?</p>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-700`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p>São informações detalhadas sobre débitos (IPVA, licenciamento, seguro DPVAT) e multas pendentes do veículo, que estão registradas no Detran de emplacamento, com possibilidade de pagamento em até 12 x no cartão de crédito. *Importante! Para consultar débitos de dívida ativa, acesse o site da Secretaria da Fazenda da UF de registro do veículo. A consulta/pagamento de débitos ainda não está disponível para veículos do Acre, Amapá, Amazonas, Pará, Rondônia, Roraima, Sergipe e Tocantins. </p>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>



            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
