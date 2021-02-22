import React from 'react'

export function PageForm() {
    return(

        <form className='full__form' action="/">

            <div className="form__container">

                <div className="column">

                    <div className="column__info">

                        <div className="form__title">
                            <h3>Vos informations personnelles</h3>
                            <h6>Conformement aux demandes du regulateur francais ANJ</h6>
                        </div>

                        <div className="container">

                            <i className='fas fa-user-alt'></i>

                            <div className="form__info__container">

                                <div className='info'>    
                                    <label htmlFor="civility">Civilite</label>
                                    <select id="civility" name="civility">
                                        <option value="mister">Monsieur</option>
                                        <option value="madam">Madam</option>
                                    </select>
                                </div>

                                <div className='info'>
                                    <label htmlFor="fname">Prenom</label>
                                    <input type="text" id="fname" name="fname"/>                    
                                </div>

                                <div className="info">
                                    <label htmlFor="mname">Deuxieme Prenome</label>
                                    <input type="text" id="mname" name="mname"/>

                                </div>

                                <div className="info">
                                    <label htmlFor="lname">Nom</label>
                                    <input type="text" id="lname" name="lname"/>
                                </div>

                                <div className="info">
                                    <label htmlFor="sname">Nom d'usage</label>
                                    <input type="text" id="sname" name="sname"/>
                                </div>

                                <div className="info">
                                    <label htmlFor="date">Date de naissance</label>
                                    <input type="date" placeholder='JJ/MM/AAAA' id="date" name="date"/>
                                </div>

                                <div className="city__info">
                                    <div className="info">
                                        <label htmlFor="city">Ville de naissance</label>
                                        <input type="text" id="scity" name="city"/>
                                    </div>

                                    <div className="info">
                                        <label htmlFor="country">Pays de naissance</label>
                                        <select id="scountry" name="country">
                                            <option value="france">Frace</option>
                                            <option value="moldova">Moldova</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <i className='fas fa-home'></i>

                            <div className="form__info__container">
                                <div className="info">
                                    <label htmlFor="faddress">Adresse</label>
                                    <input type="text" id="faddress" name="faddress"/>
                                </div>

                                <div className="info">
                                    <label htmlFor="saddress">Adresse 2</label>
                                    <input type="text" id="saddress" name="saddress"/>                
                                </div>

                                <div className="postalcode__info">

                                    <div className="info">
                                        <label htmlFor="postalcode">Code postal</label>
                                        <input type="text" id="postalcode" name="postalcode"/>
                                    </div>

                                    <div className="info">
                                        <label htmlFor="city">Ville</label>
                                        <input type="text" id="city" name="city"/>
                                    </div>

                                </div>

                                <div className="info">
                                    <label htmlFor="country">Pays</label>
                                    <select id="country" name="country">
                                        <option value="france">Frace</option>
                                        <option value="moldova">Moldova</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-phone-alt'></i>

                            <div className="form__info__container">
                                <div className="info">
                                    <label htmlFor="tel">Telephone</label>
                                    <input type="tel" id="tel" name="tel"/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="column">

                    <div className="column__info">

                        <div className="form__title">
                            <h3>Vos informations de conexion</h3>
                        </div>

                        <div className="container">

                            <i className='fas fa-user-circle'></i>

                            <div className="form__info__container">
                                <div className='info'>    
                                    <label htmlFor="pseudo">Pseudo</label>
                                    <input type="text" id="pseudo" name="pseudo"/>                    
                                </div>
                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-envelope'></i>

                            <div className="form__info__container">
                                
                                <div className='info'>    
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email"/>                    
                                </div>
                            
                                <div className='info'>    
                                    <label htmlFor="semail">Confirmation email</label>
                                    <input type="email" id="semail" name="semail"/>                    
                                </div>

                            </div>
                            
                        </div>

                        <div className="container">

                            <i className='fas fa-key'></i>

                            <div className="form__info__container">
                                
                                <div className='info'>    
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password" id="password" name="password"/>                    
                                </div>
                            
                                <div className='info'>    
                                    <label htmlFor="spassword">Confirmation mot de passe</label>
                                    <input type="password" id="spassword" name="spassword"/>                    
                                </div>

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-comment-alt'></i>

                            <div className="form__info__container">
                                
                                <div className='info'>    
                                    <label htmlFor="question">Question secrete</label>
                                    <select id="question" name="question">
                                            <option value="first">Nom de jeune fille de ma mere?</option>
                                            <option value="moldova">Ain't nobody got time for that?</option>
                                    </select>                  
                                </div>

                                <div className='info'>    
                                    <label htmlFor="answer">Response a la question secrete</label>
                                    <input type="text" id="answer" name="answer"/>                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column__info">

                        <div className="form__title form__title__middle">
                            <h3>Vos informations bancaires</h3>
                        </div>

                        <div className="container">

                            <i className='fas fa-university'></i>

                            <div className="form__info__container bank__info__form">

                                <div className='info'>    
                                    <label htmlFor="iban">IBAN - Indetifiant International de Compte</label>
                                    <input type="text" placeholder='XXXX XXXX XXXX XXXX' id="iban" name="iban"/>                    
                                </div>

                                <div className='info'>    
                                    <label htmlFor="bic">BIC - Indetifiant International de l'etablissement</label>
                                    <input type="text" id="bic" name="bic"/>                    
                                </div>

                            </div>
    
                        </div>

                        <div className="container">

                            <i className='fas fa-gift'></i>

                            <div className="form__info__container">

                                <div className='info'>    
                                    <label htmlFor="code">Code promotionnel</label>
                                    <input type="text" id="code" name="code"/>                    
                                </div>

                            </div>
                            
                        </div>

                    </div>
                    
                </div>

            </div>

            <input className='btn' type="submit" value="Submit"/>
        </form> 
    )
}