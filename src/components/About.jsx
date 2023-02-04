export default function About(){
    return(
        <div className="flex flex-col my-5 ml-20 mr-auto">
            <h2 className="font-serif text-start text-2xl mb-5">ABOUT</h2>

            <p className="max-w-md mb-3 text-lg">My name is Gala Chernikova and this is my example of the news React app, using MUI and Tailwind.</p>
            <p className="max-w-md mb-3 text-lg">I use NewsAPI, provided by <a href="https://github.com/SauravKanchan/NewsAPI" className="underline font-medium">Saurav Kanchan</a>, which allows to receive the news from 6 countries, including general, business, entertainment, health, science, sports and technology categories.
            I also added search form and login/register section.</p>
            <p className="max-w-md mb-3 text-lg">Hope you're enjoy it! If you have any suggestions, please contact me <a href="mailto:galachcoding@gmail.com" className="underline font-medium">galachcoding@gmail.com</a> </p>
        </div>
    )
}