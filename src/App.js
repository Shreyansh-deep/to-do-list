import React from "react"
import Header from "./Header"
import Main from "./Main"

export default function App({firstLetter}) {
  return (
      <div className="all">
        <Header firstLetter = {firstLetter} />
        <Main/>
      </div>
  )
}
