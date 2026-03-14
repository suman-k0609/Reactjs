import React from 'react'
import Card from './components/Card';

const App = () => {
  const jobs = [
{
  brandLogo: "https://logo.clearbit.com/google.com",
  company: "Google",
  datePosted: "5 days ago",
  post: "Frontend Developer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: "$45/hr",
  location: "Bangalore, India"
},

{
  brandLogo: "https://logo.clearbit.com/amazon.com",
  company: "Amazon",
  datePosted: "2 weeks ago",
  post: "Backend Developer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$60/hr",
  location: "Hyderabad, India"
},

{
  brandLogo: "https://logo.clearbit.com/meta.com",
  company: "Meta",
  datePosted: "1 week ago",
  post: "React Developer",
  tag1: "Part Time",
  tag2: "Junior Level",
  pay: "$40/hr",
  location: "Mumbai, India"
},

{
  brandLogo: "https://logo.clearbit.com/apple.com",
  company: "Apple",
  datePosted: "3 days ago",
  post: "iOS Developer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$70/hr",
  location: "California, USA"
},

{
  brandLogo: "https://logo.clearbit.com/netflix.com",
  company: "Netflix",
  datePosted: "10 days ago",
  post: "Software Engineer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$75/hr",
  location: "Los Angeles, USA"
},

{
  brandLogo: "https://logo.clearbit.com/microsoft.com",
  company: "Microsoft",
  datePosted: "4 days ago",
  post: "Cloud Engineer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: "$50/hr",
  location: "Seattle, USA"
},

{
  brandLogo: "https://logo.clearbit.com/adobe.com",
  company: "Adobe",
  datePosted: "2 days ago",
  post: "UI/UX Developer",
  tag1: "Part Time",
  tag2: "Junior Level",
  pay: "$38/hr",
  location: "Noida, India"
},

{
  brandLogo: "https://logo.clearbit.com/tesla.com",
  company: "Tesla",
  datePosted: "1 week ago",
  post: "Software Engineer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$68/hr",
  location: "Austin, USA"
},

{
  brandLogo: "https://logo.clearbit.com/uber.com",
  company: "Uber",
  datePosted: "6 days ago",
  post: "Full Stack Developer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: "$48/hr",
  location: "Delhi, India"
},

{
  brandLogo: "https://logo.clearbit.com/airbnb.com",
  company: "Airbnb",
  datePosted: "8 days ago",
  post: "Backend Engineer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$65/hr",
  location: "San Francisco, USA"
}
];
  return (
    <div className='parent'>
{jobs.map(function(elem){
  return <Card brandlogo={elem.brandLogo} companys={elem.company} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
})}      
      </div>
  )
}

export default App