import React from 'react'
import './Cards.css'

export const Cards = () => {
  return (
    <div className="Cards">
        <div className="c-up">
            <img src="/logo.png" alt="" />
        </div>

        <div className="c-down">
            <span className="name">NISHA</span>
            <span className="rltp">BABE</span>
            <span className="days">69 DAYS LEFT</span>
            <span className="dob">03.03.2000</span>
            <span className="age">22</span>
        </div>
    </div>
  )
}