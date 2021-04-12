import React from 'react'
import { ResultInput } from './PageElements/ResultInput'


export function PageResult() {
    return (

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

                                <ResultInput label='Civilite' inputInfo='civility' />
                                <ResultInput label='Prenom' inputInfo='fname' />
                                <ResultInput label='Deuxieme Prenome' inputInfo='mname' />
                                <ResultInput label='Nom' inputInfo='lname' />
                                <ResultInput label="Nom d'usage" inputInfo='sname' />
                                <ResultInput label='Date de naissance' inputInfo='date' />

                                <div className="twoInRow__input__container">

                                    <ResultInput label="Ville de naissance" inputInfo='city' />
                                    <ResultInput label="Pays de naissance" inputInfo='country' />

                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <i className='fas fa-home'></i>

                            <div className="form__info__container">

                                <ResultInput label="Adresse" inputInfo='faddress' />
                                <ResultInput label="Adresse 2" inputInfo='saddress' />

                                <div className="twoInRow__input__container">

                                    <ResultInput label="Code postal" inputInfo='postalcode' />
                                    <ResultInput label="Ville" inputInfo='scity' />

                                </div>
                                
                                <ResultInput label="Pays" inputInfo='scountry' />

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-phone-alt'></i>

                            <div className="form__info__container">
    
                                <ResultInput label="Telephone" inputInfo='tel' />

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
    
                                <ResultInput label="Pseudo" inputInfo='pseudo' />

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-envelope'></i>

                            <div className="form__info__container">
                            
                                <ResultInput label="Email" inputInfo='email' />
                                <ResultInput label="Confirmation email" inputInfo='semail' />

                            </div>

                        </div>

                        <div className="container">

                            <i className='fas fa-key'></i>

                            <div className="form__info__container">

                                <ResultInput label="Mot de passe" inputInfo='password' />
                                <ResultInput label="Confirmation mot de passe" inputInfo='spassword' />

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-comment-alt'></i>

                            <div className="form__info__container">
                                
                                <ResultInput label="Question secrete" inputInfo='question' />
                                <ResultInput label="Response a la question secrete" inputInfo='answer' />

                            </div>
                        </div>
                    </div>

                    <div className="column__info">

                        <div className="form__title form__title__middle">
                            <h3>Vos informations bancaires</h3>
                        </div>

                        <div className="container">

                            <i className='fas fa-university'></i>

                            <div className="form__info__container">

                                <ResultInput label="IBAN - Indetifiant International de Compte" inputInfo='iban' />
                                <ResultInput label="BIC - Indetifiant International de l'etablissement" inputInfo='bic' />

                            </div>

                        </div>

                        <div className="container">

                            <i className='fas fa-gift'></i>

                            <div className="form__info__container">

                                <ResultInput label="Code promotionnel" inputInfo='code' />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="full__sliders__container">
                {/* <Slider id='switch1' label="J'accepte de recevoir des informations et offres exceptinnelles de la part de Betway" />
                <Slider id='switch2' label="Je certifie avoir plus de 18 ans et que les informations ci-dessus me concernant sont exactes" />
                <Slider id='switch3' label={sliderLabel} /> */}
            </div>

            <div className="recaptcha">
                {/* <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" hl='fr'/> */}
            </div>

            {/* <input htmlFor="code" className='btn' type="submit" value="Etape suivante" /> */}

        </form>
    )
}