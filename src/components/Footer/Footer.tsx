'use client'

import Button from "../Button/Button"

const Footer = () => {
  return (
    <footer className="bg-customNavy text-white overflow-x-hidden p-2 lg:p-0">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="lg:flex lg:items-center border-b border-gray-700 py-4 lg:py-8">
          <h1 className="lg:w-1/2 text-2xl lg:text-3xl font-medium tracking-wide leading-tight py-4">Join the Global Community for the Traders ✌️</h1>
          <div className="lg:w-1/2 lg:text-right">
            <Button text="" onClick={() => {}}>
              Join Our Discord<img className="inline ml-1" src="./social-discord.svg" alt="icon" height={10}/>
            </Button>
          </div>
        </div>
        <div className="lg:flex border-b border-gray-700 py-8 lg:py-12 gap-x-4 text-gray-300">
          <div className="lg:w-2/5">
            <p className="text-normal pb-4">Empowering global traders with unrivalled financial support. Navigate markets confidently with our innovative funding models and expert guidance.</p>
            <div className="flex items-center gap-x-4">
              <a href="#"><img className="text-gray-700" src="./social-twitter.svg" alt="twitter"/></a>
              <a href="#"><img className="text-gray-700" src="./social-linkedin.svg" alt="linkedIn"/></a>
              <a href="#"><img className="text-gray-700" src="./social-facebook.svg" alt="facebook"/></a>
              <a href="#"><img className="text-gray-700" src="./social-discord.svg" alt="discord"/></a>
            </div>
          </div>
          <div className="lg:w-1/5 my-6 lg:my-0">
            <h3 className="text-lg font-medium text-gray-100 mb-1">Important Link</h3>
            <ul>
              <li className="my-1"><a href="#">Overview</a></li>
              <li className="my-1"><a href="#">Affiliate Partner</a></li>
              <li className="my-1"><a href="#">Payment Partner</a></li>
              <li className="my-1"><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div className="lg:w-1/5 my-6 lg:my-0">
            <h3 className="text-lg font-medium text-gray-100 mb-1">Models</h3>
            <ul>
              <li className="my-1"><a href="#">Express</a></li>
              <li className="my-1"><a href="#">Evaluation</a></li>
              <li className="my-1"><a href="#">Stellar Challenge</a></li>
              <li className="my-1"><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div className="lg:w-1/5 my-6 lg:my-0">
            <h3 className="text-lg font-medium text-gray-100 mb-1">Contact Information</h3>
            <ul>
              <li className="my-2">
                <a className="flex items-center" href="#"><img className="mr-2" src="./sms.svg" alt="icon"/><span>hafizul@gmail.com</span></a>
              </li>
              <li className="my-2">
                <a className="flex items-center" href="#"><img className="mr-2" src="./call.svg" alt="icon"/><span>+8801833184155</span></a>
              </li>
              <li className="my-2">
                <a className="flex items-center" href="#"><img className="mr-2" src="./call.svg" alt="icon"/><span>+8801818925451</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center py-8 lg:gap-x-4 text-gray-300">
          <p>&copy; 2023, All Rights Reserved</p>
          <div className="flex items-center space-x-4 font-sm lg:font-normal my-4 lg:my-0">
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer