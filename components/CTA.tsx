import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
   <section className="cta-section">
    <div className="cta-badge">Start learning your way.</div>
    <h2 className="text-3lx font-bold" >Build and Personalize Learning Companion</h2>
    <p className="text-lg">Create your own learning companion to help you learn any topic, anytime, anywhere.</p>
    <Image src={"/images/cta.svg"} alt="CTA Illustration" width={362} height={232} />
    <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12} />
        <Link href="/companions/new" className="ml-2">
            Build a new Companion
        </Link>
    </button>
   </section>
  )
}

export default CTA
