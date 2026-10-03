import { useState } from "react"

function App() {

const [nameComplete, setNameComplete] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [specialization, setSpecialization] = useState("")
const [yearExperience, setYearExperience] = useState("")
const [description, setDescription] = useState("")

const submit = (e) => {
  e.preventDefault()

  if (!nameComplete.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization ||
      !yearExperience ||
      !description.trim())
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
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
