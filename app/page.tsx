import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
// import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 })
  const recentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {/* <CompanionCard 
        id='123' 
        name="Neura the Brainy Explorer" 
        topic="Neural Network of the Brain" subject="science" 
        duration={30} 
        color="#ffda6e"/> */}
        {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
  
      </section>
      <section className="home-section">
        <CompanionsList
        title="Recently completed sessions"
        // companions={recentSessions}
        companions={recentSessionsCompanions}
        classNames="w-2/3 max-lg:w-full "
        
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page