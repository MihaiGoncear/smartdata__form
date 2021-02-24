import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { Select } from './PageElements/Select'
import { Slider } from './PageElements/Slider'
import { Input } from './PageElements/Input';
import { selectCivility, selectedCityinPersonalInfo, selectedCityinAdress, securityQuestion, sliderLabel } from './PageElements/Components/LableAndSelectArrays';


export function PageForm() {

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

                                <Select arr={selectCivility} />
                                <Input type='text' htmlFor='fname' label='Prenom' />
                                <Input type='text' htmlFor='mname' label='Deuxieme Prenome' />
                                <Input type='text' htmlFor='lname' label='Nom' />
                                <Input type='text' htmlFor='sname' label="Nom d'usage" />
                                <Input type='date' htmlFor='date' label="Date de naissance" />

                                <div className="twoInRow__input__container">

                                    <Input type='text' htmlFor='city' label="Ville de naissance" />
                                    <Select arr={selectedCityinPersonalInfo} />

                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <i className='fas fa-home'></i>

                            <div className="form__info__container">

                                <Input type='text' htmlFor='faddress' label="Adresse" />
                                <Input type='text' htmlFor='saddress' label="Adresse 2" />

                                <div className="twoInRow__input__container">

                                    <Input type='text' htmlFor='postalcode' label="Code postal" />
                                    <Input type='text' htmlFor='scity' label="Ville" />

                                </div>

                                <Select arr={selectedCityinAdress} />

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-phone-alt'></i>

                            <div className="form__info__container">

                                <Input type='tel' htmlFor='tel' label="Telephone" />

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

                                <Input type='text' htmlFor='pseudo' label="Pseudo" />

                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-envelope'></i>

                            <div className="form__info__container">

                                <Input type='email' htmlFor='email' label="Email" />
                                <Input type='email' htmlFor='semail' label="Confirmation email" />

                            </div>

                        </div>

                        <div className="container">

                            <i className='fas fa-key'></i>

                            <div className="form__info__container">

                                <Input type='password' htmlFor='password' label="Mot de passe" />
                                <Input type='password' htmlFor='spassword' label="Confirmation mot de passe" />


                            </div>
                        </div>

                        <div className="container">

                            <i className='fas fa-comment-alt'></i>

                            <div className="form__info__container">

                                <Select arr={securityQuestion} />
                                <Input type='text' htmlFor='answer' label="Response a la question secrete" />

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

                                <Input placeholder='XXXX XXXX XXXX XXXX' type='text' htmlFor='iban' label="IBAN - Indetifiant International de Compte" />
                                <Input type='text' htmlFor='bic' label="BIC - Indetifiant International de l'etablissement" />

                            </div>

                        </div>

                        <div className="container">

                            <i className='fas fa-gift'></i>

                            <div className="form__info__container">

                                <Input type='text' htmlFor='code' label="Code promotionnel" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="full__sliders__container">
                <Slider id='switch1' label="J'accepte de recevoir des informations et offres exceptinnelles de la part de Betway" />
                <Slider id='switch2' label="Je certifie avoir plus de 18 ans et que les informations ci-dessus me concernant sont exactes" />
                <Slider id='switch3' label={sliderLabel} />
            </div>

            <div className="recaptcha">
                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" hl='fr'/>
            </div>

            <input htmlFor="code" className='btn' type="submit" value="Etape suivante" />

        </form>
    )
}