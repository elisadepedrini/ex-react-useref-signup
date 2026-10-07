import { useMemo, useState } from "react"

function App() {

const [nameComplete, setNameComplete] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [specialization, setSpecialization] = useState("")
const [yearExperience, setYearExperience] = useState("")
const [description, setDescription] = useState("")


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

// Username valido
const usernameValido = useMemo(() => {
  const soloAlfanumerici = username.split("").every(el =>
    letters.includes(el.toLowerCase()) ||
    numbers.includes(el.toLowerCase()))
    return username.trim().length >= 6 && soloAlfanumerici
}, [username])

// Password valida
const passwordValida = useMemo(() => {
  const haLettera = password.split("").some(el => letters.includes(el.toLowerCase()))
  const haNumero = password.split("").some(el => numbers.includes(el.toLowerCase()))
  const haSimbolo = password.split("").some(el => symbols.includes(el.toLowerCase()))
  return password.trim().length >= 8 && haLettera && haNumero && haSimbolo
}, [password])

// Descrizione valida
const descrizioneValida = useMemo(() => {
  const senzaSpazi = description.trim().length
  return senzaSpazi >= 100 && senzaSpazi <= 1000
}, [description])


const submit = (e) => {
  e.preventDefault()

  if (!nameComplete.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization ||
      !yearExperience ||
      !description.trim() ||
      !usernameValido ||
      !passwordValida ||
      !descrizioneValida )
      {
        alert("Compila tutti i campi")
        return
      }


    if (Number(yearExperience) <= 0) {
      alert("Il numero di anni della tua esperienza deve essere maggiore o uguale a 0")
      return
    }


  console.log(`
    Nome: ${nameComplete};
    Username: ${username};
    Password: ${password};
    Specializzazione: ${specialization};
    Anni di esperienza: ${yearExperience};
    Descrizione: ${description}`)
  
}

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={nameComplete}
          onChange={(e) => setNameComplete(e.target.value)}
          placeholder="Nome completo"
          />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          />
        <strong style={{ color: usernameValido ? "green" : "red" }}>
          {usernameValido ? "Username valido" : "Almeno 6 caratteri, solo lettere e numeri"}
        </strong>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
          <strong style={{ color: passwordValida ? "green" : "red" }}>
            {passwordValida ? "Password valida" : "Almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
          </strong>
        <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
          <option value="">Seleziona specializzazione</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          </select>
        <input
          type="number"
          value={yearExperience}
          onChange={(e) => setYearExperience(e.target.value)}
          placeholder="Anni di esperienza"
          />
          <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
          <strong style={{ color: descrizioneValida ? "green" : "red" }}>
            {descrizioneValida ? "Descrizione valida" : "Deve contenere tra 100 e 1000 caratteri"}
          </strong>

          <button type="submit">Conferma</button>
      </form>
    </>
  )
}

export default App

// 📌 Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

// ✅ Nome completo (input di testo)

// ✅ Username (input di testo)

// ✅ Password (input di tipo password)

// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

// ✅ Anni di esperienza (input di tipo number)

// ✅ Breve descrizione sullo sviluppatore (textarea)

// Aggiungi una validazione al submit, verificando che:

// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata

// Al submit, se il form è valido, stampa in console i dati.


// 📌 Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:

// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:

// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.