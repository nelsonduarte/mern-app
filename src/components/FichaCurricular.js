const fichaCurricular = () => {
  const [nome, setNome] = useState("")
  const [apelido, setApelido] = useState("")
  const [morada, setMorada] = useState("")
  const [codPostal, setCodPostal] = useState("")
  const [cidade, setCidade] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [telemovel, setTelemovel] = useState("")
  const [locNasc, setLocNasc] = useState("")
  const [dataNasc, setDataNasc] = useState("")
  const [nacionalidade, setDacionalidade] = useState("")
  const [contribuinte, setContribuinte] = useState("")
  const [cc, setCc] = useState("")
  const [regCivil, setRegCivil] = useState("")

  return (
    <div className="forms">
      <p className="titulo">
        <strong>Ficha Curricular Completa do Docente</strong>
        <br />
        <small>
          <em>/ Complete Academic Staff Curricular File</em>
        </small>
      </p>
      <p>
        <strong>1. Dados Pessoais</strong>
        <small>
          <em> / Personal data</em>
        </small>
      </p>
      <div className="dados-pessoais">
        <form action="">
          <div className="dados-form">
            <div className="dados">
              <label>
                <strong>Nome(s)</strong>
                <em> / First Name(s)</em>
              </label>
              <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Nome(s) de Família</strong> <em> / Family Name(s)</em>
              </label>
              <input
                type="text"
                onChange={(e) => setApelido(e.target.value)}
                value={apelido}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Morada</strong> <em> / Address</em>
              </label>
              <input
                type="text"
                onChange={(e) => setMorada(e.target.value)}
                value={morada}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Código postal</strong> <em> / Post code</em>
              </label>
              <input
                type="text"
                onChange={(e) => setCodPostal(e.target.value)}
                value={codPostal}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Cidade</strong> <em> / City</em>
              </label>
              <input
                type="text"
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
              />
            </div>
          </div>

          <div className="dados-form">
            <div className="dados">
              <label>
                <strong>Correio eletrónico</strong>
                <em> / E-mail Address</em>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Telefone</strong> <em> / Phone number</em>
              </label>
              <input
                type="text"
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Telemóvel</strong> <em> / Mobile Phone</em>
              </label>
              <input
                type="text"
                onChange={(e) => setTelemovel(e.target.value)}
                value={telemovel}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Local de nascimento</strong>
                <em> / Place of birth</em>
              </label>
              <input
                type="text"
                onChange={(e) => setLocNasc(e.target.value)}
                value={locNasc}
              />
            </div>
          </div>

          <div className="dados-form">
            <div className="dados">
              <label>
                <strong>Data de nascimento</strong> <em> / Date of birth</em>
              </label>
              <input
                type="text"
                onChange={(e) => setDataNasc(e.target.value)}
                value={dataNasc}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Nacionalidade</strong> <em> / Nationality</em>
              </label>
              <input
                type="text"
                onChange={(e) => setNacionalidade(e.target.value)}
                value={nacionalidade}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Contribuinte</strong>
                <em> / Taxpayer Number</em>
              </label>
              <input
                type="text"
                onChange={(e) => setContribuinte(e.target.value)}
                value={contribuinte}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Cartão de cidadão</strong> <em> / ID Number</em>
              </label>
              <input
                type="text"
                onChange={(e) => setCc(e.target.value)}
                value={cc}
              />
            </div>
            <div className="dados">
              <label>
                <strong>Registo civil</strong> <em> / Civil registration</em>
              </label>
              <input
                type="text"
                onChange={(e) => setRegCivil(e.target.value)}
                value={regCivil}
              />
            </div>
          </div>
        </form>
        <button className="btn-enviar">Enviar</button>
      </div>
    </div>
  )
}
