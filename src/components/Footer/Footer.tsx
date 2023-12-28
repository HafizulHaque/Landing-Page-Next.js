import Button from "../Button/Button"

const Footer = () => {
  return (
    <footer className="bg-customNavy w-100 text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex justify-between align-items-center border-b border-white py-8">
          <h1>Join the Global Community for the Traders ✌️</h1>
          <Button/>
        </div>
        <div className="flex border-b border-white py-8">
          <div className="w-2/5">
            <p>Empowering global traders with unrivalled financial support. Navigate markets confidently with our innovative funding models and expert guidance.</p>
            <div className="flex">
              <a href="#"><img src="./social-twitter.svg" alt="twitter"/></a>
              <a href="#"><img src="./social-linkedin.svg" alt="linkedIn"/></a>
              <a href="#"><img src="./social-facebook.svg" alt="facebook"/></a>
              <a href="#"><img src="./social-discord.svg" alt="discord"/></a>
            </div>
          </div>
          <div className="w-1/5">
            <h3>Important Link</h3>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Affiliate Partner</a></li>
              <li><a href="#">Payment Partner</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3>Models</h3>
            <ul>
              <li><a href="#">Express</a></li>
              <li><a href="#">Evaluation</a></li>
              <li><a href="#">Stellar Challenge</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3>Contact Information</h3>
            <ul>
              <li><a href="#"><span><img src="./sms.svg" alt="icon"/></span>hafizul.cse.cuet@gmail.com</a></li>
              <li><a href="#"><span><img src="./call.svg" alt="icon"/></span>+8801833184155</a></li>
              <li><a href="#"><span><img src="./call.svg" alt="icon"/></span>+8801818925451</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between align-items-center py-8">
          <p>&copy; 2023, All Rights Reserved</p>
          <div className="flex align-items-center">
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