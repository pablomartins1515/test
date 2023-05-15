import { Rodape } from "../componentes/Rodape"
import { Header } from "../componentes/Header"


export function Politica() {
    return (
        <div>
            <Header/>
            <div className=" bg-zinc-100 hover:text-blue-900">
                {/*<NavLink to="/">
                    <SkipBack size={32} />
                </NavLink>*/}
            </div>

            <div >
                <h1 className="m-2 p-2 flex justify-center font-black text-4xl">
                    Privacy Policy
                </h1>

                <h3 className="flex text-left p-8">
                    buscardados.com.br website is owned by buscardados, which is a data controller of your personal data. We have adopted this Privacy Policy, which determines how we are processing the information collected by buscardados.com.br, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using buscardados.com.br website.
                </h3>
                <h3 className="flex text-left p-8">
                    We take care of your personal data and undertake to guarantee its confidentiality and security.
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Why do we process your data?
                </h2>

                <h3 className="flex text-left p-8">
                    Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
                </h3>

                <h3 className="flex text-left p-8">
                    You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via pablomartins1515@gmail.com
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Your rights:

                </h2>

                <h3 className="flex text-left p-8">
                    If you are a European resident, you have the following rights related to your personal data:
                </h3>

                <ul className="p-12">
                    <li>• The right to be informed.</li>
                    <li>• The right of access.</li>
                    <li>• The right to rectification.</li>
                    <li>• The right to erasure.</li>
                    <li>• The right to restrict processing.</li>
                    <li>• The right to data portability.</li>
                    <li>• The right to object.</li>
                    <li>• Rights in relation to automated decision-making and profiling.</li>
                </ul>

                <h3 className="flex text-left p-8">
                    If you would like to exercise this right, please contact us through the contact information below.
                    Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Links to other websites:
                </h2>

                <h3 className="flex text-left p-8">
                    Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Information security:

                </h2>

                <h3 className="flex text-left p-8">
                    We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Legal disclosure:
                </h2>

                <h3 className="flex text-left p-8">
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </h3>

                <h2 className="p-8 font-black text-lx2">
                    Contact information:
                </h2>

                <h3 className="flex text-left p-8">
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to pablomartins1515@gmail.com.
                </h3>
            </div>
            <Rodape />
        </div>
    )
}