import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const starlink = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Whitestar_black.svg/1200px-Whitestar_black.svg.png";

  return (
    <div className="App">
      <div className="vidquotewrapper">
        <div className="quote">
          Quran 75:36  "Does man think that he will be left neglected?"
        </div>
          <iframe src="https://streamable.com/e/whijq7?autoplay=1" frameBorder="0" width="100%" height="100%" allow="autoplay">
          </iframe>
          <audio preload src="riversound.mp3" className="audio-river" loop autoPlay>
            <source src="riversound.mp3" type="audio/mp3"></source>
          </audio>
      </div>

      <div className="content-wrapper">
        <div className="content">
          <h1> Creed </h1>
            <li>
            1.) Belief in one God and his attributes
            </li>
            <li>
            2.) Belief in the Angels
            </li>
            <li>
            3.) Belief in Divine Books
            </li>
            <li>
            4.) Belief in the Prophets
            </li>
            <li>
            5.) Belief in the Day of Judgment
            </li>
            <li>
            6.) Belief in God's Divine Decree/Destiny
            </li>
            <br /> <br />
        </div>
      </div>

      <div className="bgimg-1">
      </div>

      <div className="content-wrapper">
        <div className="content">
          <h1> Quranic signs <br/> (God's Direct Words) </h1>
          <h3>Scientific reality</h3>
          <img width="25px" src={starlink} /> <span>"Have not those who disbelieve known that the heavens and the earth were of one piece, then We parted them, and we made every living thing of water? Will they not then believe?" Quran 21:30. Indeed the universe was one unit, aka the Earth was then later separated into it's own being. And from water came all of life. Also: "Moreover He directed Himself to the heaven while it was(as) smoke and said to it and to the earth, "Come [into being], willingly or by compulsion." They said, "We have come willingly." Quran 41:11 The universe at one early point was nothing but clouds of hot hydrogen and helium. God then shapes into to the heavens and creates the Earth from it.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>The Quran's middle chapter is titled 'The Iron'. This correlates with the center of our Earth, which consists of only iron and nickel.</span>
          <br/> <br />
          <h3>Prophecy</h3>
          <img width="25px" src={starlink} /> <span>The Quran has a chapter which predicts Prophet Muhammad's half paternal uncle would never convert. This uncle would constantly follow the Prophet and try to negate anything he said on the spot, like a pest. All he had to do to disprove Islam was to fake his conversion. Yet he didn't the rest of his life despite knowing this verse.</span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>"The Romans have been defeated in the neighboring land, but after their defeat they shall gain victory in a few years. All power belongs to Allah both before and after. On that day will the believers rejoice" Quran 30:1-5. This was an insane prediction to make for someone claiming to be a Prophet. The Byzantines suffered a severe crippling series of losses by the Persians, it was nearly hopeless. Yet they triumphed, and near that day the Muslims also triumped vs. the Meccan pagans.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>The Quran, a 'recitation' memorized by hundreds of people at the time, was compiled into book form to perfection. If any verse or chapter was missing, there would have been hundreds of reciters pointing to any omissions or insertions. "Indeed We have sent down the Reminder, and indeed We will preserve it."</span>
          <br/> <br/>
          <h3>Mathematical</h3>
          <img width="25px" src={starlink} /> <span>If you take the end of the middle chapter of the Quran, Chapter 57, and multiply it by its number of verses, 29, you get 1653. This is the sum of all the chapters up to and including 57. That is freakishly accurate.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>Recently a 'checksum' was discovered, which verifies the Quran's preservation.  If you add the chapter number to verse number, for each chapter, and then if you take the odd chapters results and sum them, they turn out to be equal to the sum of the chapter numbers of the quran. If you take the even chapter results and sum them, they turn out to be equal to total number of verses in quran. Not only that, the odd results are 57 in total, and even results are 57 in total....Just incredible symmetry & balance. 3 impressive signs all bundled into one. The Quran makes a specific mention of even and odd, the Creator swears by them Quran 89:3, along with two other things "And by the even and the odd" and three verses later asks us, Quran 89:6  "Is there in that an oath for a sensible person?". It's only been a recent discovery, nobody made a mention of this math structure until the late 1900's. Remember that the Quran was revealed as a speech, usually directly on the spot of a situation which needed divine revelation, it was never revealed as an entire book, only in pieces, and not even in chronological order. It is impossible for anybody to multiplty, sum, calculate especially as a 7th century Arab the amount of verses to make this all fit. It is only divinely planned.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>"And it is thus that We appointed you to be the community of the middle way so that you might be witnesses to all mankind" Quran 2:143. This verse describing 'the middle way', was found directly in the middle of the chapter which consisted of 286 verses.</span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>A very interesting hidden prediction/record of the Prophet's death. There is one unique word (Natawafayanak = "We take you in death"), used only three times referring to the Prophet's oncoming death. It is used in chapters 40, 10, and 13. The Prophet spent 40 years living before Prophethood. Then 10 years in Mecca. And 13 years in Medina before finally dying. Adding 10, 13, and 40, sum to the age of 63, which was his age of death. The Prophet lived and spread his message only in these two cities. So it is incredible...that these numbers line up to accurately represent his life span in each, and sum to his exact age of death.</span>
          <br/> <br />
          <h3>Historical</h3>
          <img width="25px" src={starlink} /> <span>"In the Qur'an, the title of the Ruler of Egypt during the time of Joseph is specifically said to be "King", whilst that of the Ruler of Egypt during the time of Moses is specifically said to be "Pharaoh." This is interesting because according to historical sources, the title Pharaoh only began to be used to refer to the rulers of Egypt (starting with the rule of Thutmose III) in 1479 BCE - approximately 21 years after the prophet Joseph died. But in the narration of Yusuf in the Bible, the titles King and Pharaoh are used interchangeably for the ruler of Egypt in Genesis chapters 39-41." This tells us about the Quran's historical precision, and triumphs over the Bible in accuracy, despite the Quran being revealed many centuries later.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>Whenever Moses has dialogue with the Israelites he refers to them as 'My nation'. Whenever Jesus speaks to the Israelites he refers to them as 'Sons of Israel'. The Quran remains consistent with history. Jesus never had a father, and so his father wasn't among that nation. They would refer to each other based on their father's names. So he could never refer to them as 'My nation'.</span>
          <br/> <br />
          Many more to come!
        </div>
      </div>

      <div className="bgimg-2"></div>

      <div className="content-wrapper">
        <div className="content">
          <h1> Hadith signs <br/>(Prophet Muhammad's divinely revealed knowledge) </h1>
          <img width="25px" src={starlink} /> <span>"The Last Hour will not come before wealth becomes abundant and overflowing, so much so that a man takes Zakat out of his property and cannot find anyone to accept it from him and till the land of Arabia reverts to meadows and rivers." This prophecy is almost insane to make. Nowhere in Arab tradition did anybody believe that Arabia used to be forests with rivers. RIVERS! FORESTS! And that it would return to transforming into forests sometime before the day of judgment! It was only recently discovered that Arabia changes climate every 23,000 years. Even the Sahara used to be a jungle. Perhaps with climate change, people will be forced to turn deserts into green land to combat global warming. Something inittated by Allan Savory already.</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that Lake Tiberius/Galilee will dry up, and that this will signal the coming of Dajjal (The great deceiver/anti christ). Israel is predicted to receive between 15%-25% less rainfall over the next century due to climate change and it is already having major issues with the usage of Lake Tiberius it had to cut off most usage to it and instead use other water sources.</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that the Euphrates river will dry up, revealing a mountain of gold, and most of the people who try to get that gold will die for it. https://www.npr.org/templates/story/story.php?storyId=102184336 It seems that it is partially coming true. The Euphrates is the lowest it's ever been, fisherman can't even find fish in there anymore. And jewels, coins, documents, and ancient artifacts super valuable to archaeologists to their surprise are showing up.</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that one day, things we wear like shoes, or the area on our thighs will speak to us, and tell us of things happening back at home. It could be referring to some sort of cell technology. https://sunnah.com/tirmidhi/33/24 </span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span> "When the shepherds of black camels start boasting and competing with others in the construction of higher buildings. And the Hour is one of five things which nobody knows except Allah"  This prophecy can be seen today where the UAE (#1) and Saudi Arabia (#3) are in the top 3 of having the tallest buildings in the world....Something they would have never accomplished without the money they are getting from oil sales.  https://sunnah.com/bukhari/2/43</span>
          <br/> <br />
          More to come!
        </div>
      </div>

      <div className="bgimg-3"></div>
    </div>
  );
}

export default App;
