
import React from "react";
//import { NavLink } from "react-router-dom"; still have fix the link being active all the time
import '../styles/footer.css';
import { useLocation } from "react-router-dom";

  
function Footer () {
  
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/signin" || pathname === "/signup") return null;

  return (
    <div className="box">
      <h1 className="text">
        MyDiet: Uma interação saudável entre nutricionista e paciente!
      </h1>
      <span className ='logo_footer'>
          <img src = {'/images/logo.png'} alt = "logo"/>
      </span>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="heading">Sobre nós</div>
            <div className="footerlink" href="#">Objetivos</div>
            <div className="footerlink" href="#">Avaliações</div>
            <div className="footerlink" href="#">Contato</div>
          </div>
          <div className="column">
            <div className="heading">Planos</div>
            <div className="footerlink" href="#">Personal + Nutri</div>
            <div className="footerlink" href="#">Nutri</div>
            <div className="footerlink" href="#">Nutri Plus</div>
          </div>
          <div className="column">
            <div className="heading">Faça parte</div>
            <div className="footerlink">Login</div>
            <div className="footerlink">Cadastro</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;