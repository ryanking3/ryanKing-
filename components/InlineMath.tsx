import React from "react"
import { InlineMath } from "react-katex"
import "katex/dist/katex.min.css"

export default function InlineMathRenderer({ value }: { value: string }) {
  return <InlineMath math={value} />
}
