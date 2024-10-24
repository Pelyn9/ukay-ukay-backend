/**
 * This code was generated by Builder.io.
 */
import Header from "./Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useCheckUserLoggedUtil, useIsAdminUtil } from "../utilities";
import { useEffect } from "react";

function LoginPage() {
  const nav = useNavigate()
  const {logged} =useCheckUserLoggedUtil()
  const {isAdmin}  = useIsAdminUtil()

  useEffect(()=>{
    if(isAdmin){
      nav('/admin')
    }else if(logged){
      nav('/')
    }

  },[isAdmin,logged,nav])

  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d3e55c096bdcce6e4140a1bfaa5c4d38afb085ca7678b038a82efa173edf342?placeholderIfAbsent=true&apiKey=e6e279f9e06842139b3f7c01a7502bdc"
            alt="Gulmatico 2nd Hand Clothing Store logo"
            className={styles.storeLogo}
          />
          <h1 className={styles.storeTitle}>
            Gulmatico 2nd Hand <br /> Clothing Store
          </h1>
        </section>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
