import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users=[
    {img:'https://www.flexjobs.com/blog/wp-content/uploads/2024/03/04140524/How-to-Transition-From-In-Person-to-Remote-Work.jpg?w=1024',intro:'',tag:'Satisfied'},
    {img:'https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80',intro:'',tag:'Underserved'},
    {img:'https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/79/ca/30/9f/74/v1_E10/E109CEFE.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=885&s=7a549ef16933f2f99c5e7e637a84b8f2fec40da1aff65a0e4c526328b296a734',intro:'',tag:'Underbanked'}
  ]
  return (
    <div>
     <Section1 users={users}/>
     <Section2 />
    </div>
  )
}

export default App