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
        <div className="quote">
          Quran 25:51 "Had Allah willed, He would have made you one nation [united in religion], but [He intended] to test you in what He has given you; so race to [all that is] good. To Allah is your return all together, and He will [then] inform you concerning that over which you used to differ."
        </div>
          <iframe src="https://streamable.com/e/whijq7?autoplay=1&t=15" frameBorder="0" width="100%" height="100%" allow="autoplay">
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
          <h3>Linguistic</h3>
          <img width="25px" src={starlink} /><span>Quran 54:17 "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?" The Quran is memorized by millions of people every year by arabic speakers and most importantly, even non native arabic speakers! Which scripture, as long as 604 pages or around 6236 verses could be FULLY memorized, word for word, every accent mark, on such a large scale? And to have small to large portions of it memorized for daily prayer? Also, if all scriptures were thrown away and burnt, only the Quran would remain due to this memorization by millions.</span>
          <br/><br/>
          <h3>Scientific reality</h3>
          <img width="25px" src={starlink} /> <span>"Have not those who disbelieve known that the heavens and the earth were of one piece, then We parted them, and we made every living thing of water? Will they not then believe?" Quran 21:30. The interpretation most in harmony with science today: Indeed the universe was one unit, aka the Earth was then later separated into it's own being. And from water came all of life, also confirmed in another verse, Quran 24:45 "Allah has created every moving creature from water." Also: "Moreover He directed Himself to the heaven while it was(as) smoke and said to it and to the earth, "Come [into being], willingly or by compulsion." They said, "We have come willingly." Quran 41:11 The universe at one early point was nothing but clouds of hot hydrogen and helium. God then shapes into to the heavens and creates the Earth from it.</span>
          <br/> <br/>
          <h3>Prophecy</h3>
          <img width="25px" src={starlink} /> <span>The Quran has a chapter which predicts Prophet Muhammad's half paternal uncle would never convert. This uncle would constantly follow the Prophet and try to negate anything he said on the spot, like a pest. All he had to do to disprove Islam was to fake his conversion. Yet he didn't the rest of his life despite knowing this verse.</span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>"The Romans have been defeated in the neighboring land, but after their defeat they shall gain victory in a few years. All power belongs to Allah both before and after. On that day will the believers rejoice" Quran 30:1-5. This was an insane prediction to make for someone claiming to be a Prophet. The Byzantines suffered a severe crippling series of losses by the Persians, it was nearly hopeless. Yet they triumphed, and near that day the Muslims also triumped vs. the Meccan pagans.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>The Quran tells us the Kaaba will remain in the hands of the Muslims as true guardians, ever since taking it away from the Quraysh pagans. It's been 1400 years and none but Muslims have kept guardian over it. "And why should Allah not punish them while they hinder pilgrims from the Sacred Mosque, claiming to be its rightful guardians? None has the right to guardianship except those mindful ˹of Allah˺, but most pagans do not know." Quran 8:34</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>The Quran, a 'recitation' memorized by hundreds of people at the time, was compiled into book form to perfection. If any verse or chapter was missing, there would have been hundreds of reciters pointing to any omissions or insertions. "Indeed We have sent down the Reminder, and indeed We will preserve it."</span>
          <br/> <br/>
          <h3>Mathematical</h3>
          <img width="25px" src={starlink} /> <span>If you take the end of the middle chapter of the Quran, Chapter 57, and multiply it by its number of verses, 29, you get 1653. This is the sum of all the chapters up to and including 57. That is freakishly accurate.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>Recently a 'checksum' was discovered, which verifies the Quran's preservation.  If you add the chapter number to verse number, for each chapter, and then if you take the odd chapters results and sum them, they turn out to be equal to the sum of the chapter numbers of the quran. If you take the even chapter results and sum them, they turn out to be equal to total number of verses in quran. Not only that, the odd results are 57 in total, and even results are 57 in total....Just incredible symmetry & balance. 3 impressive signs all bundled into one. The Quran makes a specific mention of even and odd, the Creator swears by them Quran 89:3, along with two other things "And by the even and the odd" and three verses later asks us, Quran 89:6  "Is there in that an oath for a sensible person?". It's only been a recent discovery, nobody made a mention of this math structure until the late 1900's. Remember that the Quran was revealed as a speech, usually directly on the spot of a situation which needed divine revelation, it was never revealed as an entire book, only in pieces, and not even in chronological order. It is impossible for anybody to multiply, sum, calculate especially as a 7th century Arab the amount of verses to make this all fit. It is only divinely planned. https://www.youtube.com/watch?v=OOfe-lWMwtg&ab_channel=StraightPath  and  https://youtu.be/4Ha5YoPWOww</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>"And it is thus that We appointed you to be the community of the middle way so that you might be witnesses to all mankind" Quran 2:143. This verse describing 'the middle way', was found directly in the middle of the chapter which consisted of 286 verses.</span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>A very interesting hidden prediction/record of the Prophet's death. There is one unique word (Natawafayanak = "We take you in death"), used only three times referring to the Prophet's oncoming death. It is used in chapters 40, 10, and 13. The Prophet spent 40 years living before Prophethood. Then 10 years in Mecca. And 13 years in Medina before finally dying. Adding 10, 13, and 40, sum to the age of 63, which was his age of death. The Prophet lived and spread his message only in these two cities. So it is incredible...that these numbers line up to accurately represent his life span in each, and sum to his exact age of death.</span>
          <br/> <br />
          <h3>Historical</h3>
          <img width="25px" src={starlink} /><span> The Bible's narrative on the Israelite Exodus says that the Jews numbered in 603,550. History shows no such records of this size. The Quran however tells us the Israelites in Egypt were just a 'small band' of people, which fits in with history: Quran 26:53-56: "Then Pharaoh sent among the cities gatherers, saying: "These (Israelites) are only a small band of people. And indeed they are enraging us. And we are a host, well-armed"</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>"In the Qur'an, the title of the Ruler of Egypt during the time of Joseph is specifically said to be "King", whilst that of the Ruler of Egypt during the time of Moses is specifically said to be "Pharaoh." This is interesting because according to historical sources, the title Pharaoh only began to be used to refer to the rulers of Egypt (starting with the rule of Thutmose III) in 1479 BCE - approximately 21 years after the prophet Joseph died. But in the narration of Yusuf in the Bible, the titles King and Pharaoh are used interchangeably for the ruler of Egypt in Genesis chapters 39-41." This tells us about the Quran's historical precision, and triumphs over the Bible in accuracy, despite the Quran being revealed many centuries later.</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>Whenever Moses has dialogue with the Israelites he refers to them as 'My nation'. Whenever Jesus speaks to the Israelites he refers to them as 'Sons of Israel'. The Quran remains consistent with history. Jesus never had a father, and so his father wasn't among that nation. They would refer to each other based on their father's names. So he could never refer to them as 'My nation'.</span>
          <br/> <br />
          <img width="25px" src={starlink} /><span>"After describing their demise, the Qur’an then says about Pharaoh and his troops, “And the heaven and earth wept not for them, nor were they reprieved” (44:29). While maintaining the coherence of this verse at face value, a recently unearthed pyramid text has granted us new depths to its meaning. Therein, Pharaoh is described as ascending at death to claim supremacy of the heavens; the ancient hieroglyphics read, “The sky weeps for thee; the earth trembles for thee… when thou ascendest to heaven as a star, as the morning star.” In other words, the Qur’an was issuing a direct response to these specific mythological adulations, over one thousand years before the vaults hiding them were unlocked." Credits to Yaqeen Institute. </span>
          <br/> <br/>
          <h3>Psychology</h3>
          <img width="25px" src={starlink} /><span></span>
          Many more to come!
        </div>
      </div>

      <div className="bgimg-2"></div>

      <div className="content-wrapper">
        <div className="content">
          <h1> Hadith signs <br/>(Prophet Muhammad's divinely revealed knowledge) </h1>
          <h3>Psychology</h3>
          <img width="25px" src={starlink} /> <span>The Prophet continued to live a life of poverty even after ruling most of Arabia. One of his close companions weeped at the sight. "postle of Allah, why should I not shed tears? This mat has left its marks on your sides and I do not see in your store room (except these few things) that I have seen; Ceasar and Closroes are leading their lives in plenty whereas you are Allah's Messenger. His chosen one, and that is your store! He said: Ibn Khattab, aren't you satisfied that for us (there should be the prosperity) of the Hereafter, and for them (there should be the prosperity of) this world? I said: Yes." https://sunnah.com/muslim:1479</span>
          <br/> <br/>
          <img width="25px" src={starlink} /> <span>A sign is his lack of ego, even after he took power. We all know power corrupts most of us. Yet the Prophet when he was told by God that his past and future sins were forgiven, and asked why he often stayed up the night to keep praying until his legs hurt, he replied 'Should I not be a thankful servant?'
          https://sunnah.com/mishkat:1220 </span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>  When his son Ibrahim died, that same day there was an eclipse, and people were saying it was due to his son's death. The Prophet replied they sun and moon do not eclipse for anyone's death, rather they are signs of Allah.
          He could have taken advantage of that situation to boost his claim to prophethood if he was an imposter https://sunnah.com/bukhari:1063 </span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>After the Prophet took gained the upperhand and took back Mecca, he spared his enemies in the city, the same people that caused all types of humiliation and torture on his followers. In that time, tribes would rape the enemy women, enslave the children and kill all the men. Instead he showed them mercy, and didn't force anybody to convert.</span>
          <h3>Scientific reality</h3>
          'A human fetus does not develop its external sexual organs until seven weeks after fertilization. The fetus appears to be sexually indifferent, looking neither like a male or a female.'
          Hudhayfah b. Usayd narrated: "After the drop (nutfah) is in the womb for <b>forty or forty-five nights</b>, the angel comes to it and says: 'O Lord, will it be fortunate or unfortunate?' And these matters shall be written. Then he says: 'O Lord, will it be male or female?" [Sahîh Muslim]
          https://sunnah.com/muslim:2644
          <h3>Historical</h3>
          <img width="25px" src={starlink} /> <span>Prophet Muhammad started out as a one man mission. The Arab pagans and tribes which vastly outnumbered him and attempted several assasinations, crumbled. The super powers at the time, both Byzantine and Persia, crumbled beneath Islam. Today it is 24% of the world population Considering he is the last Prophet and Messenger, it makes sense the message was given such force to be spread to everyone. It transformed the Arabs from being an unwanted wasteland, to a powerful respectable kingdom, for a while.</span>
          <br/><br/>
          <h3>Prophecy</h3>
          <img width="25px" src={starlink} /> <span>"The Last Hour will not come before wealth becomes abundant and overflowing, so much so that a man takes Zakat out of his property and cannot find anyone to accept it from him and till the land of Arabia reverts to meadows and rivers." This prophecy is almost insane to make. Nowhere in Arab tradition did anybody believe that Arabia used to be forests with rivers. RIVERS! FORESTS! And that it would return to transforming into rivers and forests sometime before the day of judgment! It was only recently discovered that Arabia changes climate every 23,000 years. Even the Sahara used to be a jungle. Perhaps with climate change, people will be forced to turn deserts into green land to combat global warming. Something initiated by Allan Savory already.</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that Lake Tiberius/Galilee will dry up, and that this will signal the coming of Dajjal (The great deceiver/anti christ). Israel is predicted to receive between 15%-25% less rainfall over the next century due to climate change and it is already having major issues with the usage of Lake Tiberius it had to cut off most usage to it and instead use other water sources. https://sunnah.com/ibnmajah:4075</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that the Euphrates river will dry up, revealing a mountain of gold, and most of the people who try to get that gold will die for it. https://www.npr.org/templates/story/story.php?storyId=102184336 It seems that it is partially coming true. The Euphrates is the lowest it's ever been, fisherman can't even find fish in there anymore. And jewels, coins, documents, and ancient artifacts super valuable to archaeologists to their surprise are showing up.</span>
          <br/><br/>
          <img width="25px" src={starlink} /> <span> A prophecy that one day, things we wear like shoes, or the area on our thighs will speak to us, and tell us of things happening back at home. There is little doubt it's referring to some cell technology. https://sunnah.com/tirmidhi/33/24 </span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span> "When the shepherds of black camels start boasting and competing with others in the construction of higher buildings. And the Hour is one of five things which nobody knows except Allah"  This prophecy can be seen today where the UAE (#1) and Saudi Arabia (#3) are in the top 3 of having the tallest buildings in the world....Something they would have never accomplished without the money they are getting from oil sales.  https://sunnah.com/bukhari/2/43</span>
          <br/> <br />
          <img width="25px" src={starlink} /> <span>In Musnad Ahmad Hadith #18207 (2nd Entry), The Prophet said: ‘Al-Dajjal will come, and he will climb Uhud, and he will look at Al-Madinah and he will say to his companions: ‘Do you see that <b>white palace? That is the mosque of Ahmad.’</b> Then he will come to Al-Madinah, and he will find on each gateway of it drawn (armed) an angel, so he will come to the wasteland of Al-Jurf, and he will strike his camp. Then Al-Madinah will quake three times, and there will not remain a single (male) hypocrite or (female) hypocrite, and no (male) evil-doer or (female) evil-doer but they will go out to him, and that is the Day of Riddance.” The point is that the mosque of Ahmad aka Prophet Muhammad still remains with us today. Reconstructed, and in the form of a white palace when looking at it. This mosque was nowhere near it's size as we see it today, nor in any palace fashion. It was a tiny humble praying place made of wood. It wasn't until 100 years after the Prophet's death that it was upgraded. And even then, throughout history, the color of the palace changed depending on the material used to build it. Today it remains with us to be a white palace.</span>
          <br/> <br />
          More to come!
        </div>
      </div>

      <div className="bgimg-3"></div>
    </div>
  );
}

export default App;
