import './App.css';

import Book from './components/Book/Book';
import IdCard from './components/IdCard/IdCard';
import List from './components/List/List';
import Movie from './components/Movie/Movie';


function App(){
  return(
    <div className="App">


<h2 className="id_cards">Id Cards:</h2>
      <List>
        <IdCard
          name="Itana Dragojevic"
          date="12.05.1997."
          city="Podgorica"
          image="second.jpg" />

        <IdCard
          name="Marija Markovic"
          date="03.07.1993."
          city="Budva"
          image="third.jpg" />

        <IdCard
          name="Adolfo Lambert"
          date="10.09.1987."
          city="Avignon"
          image="first.jpg" />
      </List>

      <h2 className="id_cards">Movies:</h2>
      <List>

        <Movie 
          name="The Prestige"
          year="2006."
          genre="mystery thriller"
          director="Christopher Nolan"
          actors="Christian Bale, Hugh Jackman, Michael Caine"
          image="first.jpg"/>

        <Movie 
          name="Get out"
          year="2017"
          genre="horror"
          director="Jordan Peele"
          actors="Daniel Kaluuya, Allison Williams, Bradley Whitford"
          image="second.jpg"/> 

        <Movie 
          name="Eteros Ego"
          year="2016."
          genre="crime"
          director="Sotiris Tsafoulias"
          actors="Dimitris Katalifos, Manos Vakousis, Vissillis Risvas"
          image="third.jpg"/>

      </List>
      <h2 className="id_cards">Books:</h2>
      <List>
        <Book
         name="Orkanski visovi"
         year="1847."
         author="Emily Bronte"
         quoute="Izvlačiti nekome nerve usijanim kleštima zahteva veću hladnokrvnost nego udariti ga po glavi."
         image="first.jpg"/>
        
        <Book
         name="Kradljivica knjiga"
         year="2005."
         author="Markus Zusak"
         quoute="Prvo boje. Potom ljude. Tako ja obično vidim stvari. Ili bar pokušavam."
         image="second.jpg"/>

        <Book
         name="Psihopatologija svakodnevnog zivota"
         year="2018."
         author="Sigmund Frojd"
         quoute="Nezrela ličnost često zna, ali ne ume. Zrela ne samo da zna, već i ume. Zato nezrela ličnost kritikuje, a zrela dela."
         image="third.jpg"/> 
      </List>
      
      
      </div>
  );
}

export default App;