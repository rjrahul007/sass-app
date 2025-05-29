import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <div>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
        id='123' 
        name="Neura the Brainy Explorer" 
        topic="Neural Network of the Brain" subject="science" 
        duration={30} 
        color="#ffda6e"/>
        <CompanionCard id='456' 
        name="Countsy the Number Wizard" 
        topic="Derivatives & Integrals" subject="Maths" 
        duration={30} 
        color="#efd0ff"/>
        <CompanionCard id='789' 
        name="Verba the Vocabulary Virtuoso"
        topic="English Vocabulary" subject="English"
        duration={30}
        color="#bde7ff"/> 
  
      </section>
      <section className="home-section">
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full "
        
        />
        <CTA/>
      </section>
    </div>
  )
}

export default Page