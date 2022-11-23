import React from 'react'

const Perks = () => {
  return (
    <div>
      <div className="grid place-items-center text-4xl text-secondary">
        What's there for you? 👀
      </div>

      <div className="md:flex p-3">
        <div className="flex justify-center p-3 my-4 mx-2 border-green-600">
          <p>
          <div className='text-2xl'>
          💻Technical content
            </div>
            
            <br />
            Unlocking the best part of the most awaited intercontinental Google developer community, GDG Patna gives you a full package of knowledge and one on one interaction with global experts and technologies.
          </p>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg border-green-600">
          <p>
          <div className='text-2xl'>
          🛠️Workshops & Codelabs
            </div>
          
          <br />
A coding rendezvous with your friends plus hands-on experience for a day long workshop! What else could we ask for? Initiate your journey towards a new technology and get to learn it from experts.
          </p>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg border-green-600">
          <p>
          <div className='text-2xl'>
          🌐Networking
            </div>
          
          <br />
Expand your branches of knowledge and indentity further. Connect and collaborate with developers and tech enthusiasts on a single platform to create a new and exciting chapter in your and our timeline because our network is your networth.
          </p>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg ">
          <p>
            <div className='text-2xl'>
          🍕👕Swags n Refreshments

            </div>
          <br />
          A long conference with empty stomach is just not fun! GDG Patna is making sure that your visit will surely leave a taste of this historic city on your mind. As a souvenir for our great journey, you'll also be getting some cool goodies and google badges.
          </p>
        </div>
       
      </div>
    </div>
  )
}

export default Perks