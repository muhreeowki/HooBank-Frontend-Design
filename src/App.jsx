import React from 'react'
import styles from './style'
import { Navbar, Hero, Billing, Business, Stats, CardDeal, Footer, CTA, Clients, Testimonials} from './components'

const App = () => (
    // Start of wrapper div
    <div className='bg-primary overflow-hidden w-full'>
        {/* Nav */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        {/* Hero */}
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        {/* All the other Components */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>

    </div>
    // End of wrapper div
  )

export default App