import { useContext } from "react"
import { PokedexContext } from "../context/PokedexContext"

export const HomePage = () => {

  const {a}=useContext(PokedexContext)
  return (
    <div>{a}</div>
  )
}
