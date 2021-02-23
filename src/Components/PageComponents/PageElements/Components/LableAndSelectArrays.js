let cityOptions = [
    {
        value: 'france',
        label: 'Frace'
    },

    {
        value: 'moldova',
        label: 'Moldova'
    },
    {
        value: 'nigeria',
        label: 'Nigeria'
    }
]


export let selectCivility = {

    label: 'Civilite',
    htmlFor: 'civility',
    options: [

        {
            value: 'mister',
            label: 'Monsieur'
        },

        {
            value: 'madam',
            label: 'Madam'
        }
    ]
}

export let selectedCityinPersonalInfo = {

    label: 'Pays de naissance',
    htmlFor: 'country',
    options: cityOptions
}

export let selectedCityinAdress = {

    label: 'Pays',
    htmlFor: 'scountry',
    options: cityOptions
}

export let securityQuestion = {

    label: 'Question secrete',
    htmlFor: 'question',
    options: [

        {
            value: 'first',
            label: 'Nom de jeune fille de ma mere?'
        },

        {
            value: 'second',
            label: "Ain't nobody got time for that?"
        }
    ]
}

export let sliderLabel = [
    "Je certifie avoir pris connaissance des ", <span className='green'>Conditions Generales d'Utilisation</span>, 
    ", des ", <span className='green'>Conditions Generales des Bonus</span>,
    ", du ", <span className='green'>reglement des Paris</span>,
    ", et de la ", <span className='green'>charte de respect de la vie privee</span>,
    " et eb acceoter les termes"
]