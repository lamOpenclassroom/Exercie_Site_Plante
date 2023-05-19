import "../style/banner.css"
import logo from "../assets/logo.png"

function Banner() {
  const title = "La maison jungle"
  return (
    <div className="lmj-banner">
      <img src={logo} alt="la maison jungle" className="lmj-logo"/>
      <h1 className="lmj-title">{title}</h1>
    </div>
    )
}

export default Banner

/*Il est possible de mettre la partie return dans le component App.js à l'intérieur
de <Banner> </Banner> comme un enfant du parent Banner
et le récupérer dans le return (au dessus) return <div className='lmj-banner'>{children}</div>*/


