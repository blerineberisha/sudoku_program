import React from 'react'
import './Instructions.css';

export default function InstructionsPage() {
  return (
    <div>
      <h1>How the hell do I play sudoku?</h1>
      <section id="instructions">
        <p>
          Worry not, this page is here to explain to you how to solve sudokus.
        </p>
        <p>
          Firstly, you have 81 fields that have to be filled with numbers in the end. 
          The numbers are always 1-9 and can only appear once in a <b>row</b>, in a <b>column</b> and in a <b>3x3 box</b>.
        </p>
        <p>Usually, you start by looking at the sudoku board first. There are mathematic methods
          to solve sudokus, but I recommend human intuition.
          What <b><i>I</i></b> usually do, is simply start at one. I check where I have 1s and if I 
          can fill out a field already. That happens in a situation like this, for example:
        </p>
      </section>
    </div>
  )
}
