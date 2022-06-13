import React, { createContext, useState } from 'react'

export const store = createContext()

const Detail = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title":"Akshay Kumar-Manushi Chhillar's Samrat Prithviraj banned in Oman, Kuwait",
      "Image": "https://images.hindustantimes.com/img/2022/06/01/550x309/763d5720-e1aa-11ec-a220-69841afa1483_1654088888783.jpg",
      "category": "Bollywood",
      "description": "Samrat Prithviraj, which is all set to open the historical chapter on the big screen in India on June 3, narrates the life story of legendary warrior king Prithviraj Chauhan, played by Kumar, and Chhillar stars in the movie as Princess Sanyogita.Written and helmed by Chandraprakash Dwivedi, the film marks the Bollywood debut of Chhillar. The film was earlier titled Prithviraj. The team changed the title on May 27, with the film team writing a letter to Karni Sena, which demanded change in the film's name."
    },
    {
      "id": 51,
      "title": "Govinda reacts to being called ‘unprofessional’, says people turned against him",
      "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/_39e50e76-4322-11eb-bcf5-ed790659da7b_1654779258695.jpg",
      "category": "bollywood",
      "description": "Actor Govinda ruled the industry back in the 80s and 90s. After giving several hits, Govinda took a break from acting in the early 2000s and joined politics for a while. There were several reports that claimed that the actor lost some projects due to his unprofessional behaviour. In a new interview, Govinda talked about these claims and told his side of the story."
    },
    {
      "id": 2,
      "title": "Sanjay Dutt shares throwback pic with mother Nargis on her birth anniversary",
      "Image": "https://images.hindustantimes.com/img/2022/06/01/550x309/sanjayy_1654085800713_1654086482653.png",
      "category": "Bollywood",
      "description":"On actor Nargis Dutt's birth anniversary on Wednesday, her son, actor Sanjay Dutt and daughter, Priya Dutt remembered her on social media. Nargis was married to late actor Sunil Dutt. She died on May 3, 1981, at Mumbai's Breach Candy Hospital. "
    },
    {
      "id": 61,
      "title": "KK said he 'really missed the city' before performing his last show in Kolkata",
      "Image": " https://images.hindustantimes.com/img/2022/06/01/550x309/KK_thumb_1654077749722_1654078787662.jpg",
      "category": "footer1",
      "description": "Singer KK's death has shocked his fans and friends from the music industry. He died on Tuesday, after performing a live concert in Kolkata. He had returned to Kolkata for two performances after two years. Talking about the city, KK had shared that he was overwhelmed with the love he had received from his Kolkata fans."
    },
    
    {
      "id": 3,
      "title": "Nayanthara, Vignesh Shivan's first official wedding pics out: Take a peek inside their fairytale-style ceremony",
      "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/nayanthara_vignesh_shivan_pics_1654770000110_1654770000247.jpg",
      "category": "Bollywood",
      "description": "Nayanthara and Vignesh Shivan got married in a beautiful ceremony, in the presence of their friends and family in the early hours of Thursday. See their photos here.Filmmaker Vignesh Shivan has shared the first pictures from his wedding with actor Nayanthara. The two got married at the Sheraton Grand, Mahabalipuram in presence of friends and family. In attendance were stars such as Shah Rukh Khan, Rajinikanth, Suriya and others."
    },
    {
      "id": 4,
      "title": "Amitabh Bachchan wields the mighty Prabhastra in his first poster from Brahmastra, released after changed teaser",
      "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/amitabh_1654764097329_1654764097507.jpg",
      "category": "Bollywood",
      "description": "The new poster gives a closer look at Amitabh’s intense character, posing with a sword. This comes days after the first teaser of the film was released on social media with a minor edit. While the first teaser featured lead couple Ranbir Kapoor and Alia Bhatt’s names in the beginning, followed by the supporting cast, the new video had a change in the sequence. Amitabh’s name was brought to attention first in the re-released teaser before Ranbir and Alia's. Actors Nagarjuna Akkineni and Mouni Roy’s names appeared in the fourth and fifth positions, respectively, in the new teaser.Directed by Ayan Mukerji, Brahmastra is a three-part fantasy epic. In the film, Ranbir will be taking the lead role of Shiva, while his love interest will be Alia Bhatt as Isha. Amitabh Bachchan will be seen as Professor Arvind Chaturvedi. On the other hand, Nargarjuna will play Ajay Vashisht, an archaeologist. Mouni Roy will be the antagonist of the film, named Damayanti. Brahmastra will release on September 9"
    },
    {
      "id": 5,
      "title": "Akshay Kumar was all praise for Manushi Chillar's sharp memory during the promotions of Prithviraj",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/akshaykumarwasallpraises41653652745.jpg",
      "category": "Bollywood",
      "description": "Akshay Kumar and Manushi Chhillar have kick-started promotions for their upcoming movie Prithviraj, which will be released on June 3. In a recent appearance on a comedy reality show, Akshay was all praise for Manushi Chhillar's sharp memory. Manushi Chhillar also reciprocated by complimenting Akshay Kumar.In the reality show, Akshay Kumar said, If I talk about Manushi, she has such a sharp memory. She used to memorise all the dialogues, hers, mine as well as those of other actors. She could remember the toughest of words. The duo were also joined by the director, Chandraprakash Dwivedi, for the promotion of the movie on the reality show. He spoke in-depth about the upcoming release. The movie also stars Sanjay Dutt, Sonu Sood, Ashutosh Rana, and Sakshi Tanwar in pivotal rolesManushi also said that even though she loves Akshay Kumar's comedy movies, she strongly feels that Prithviraj is his best movie to date. She said, I am a big fan of sir's comedy and the few comedy films that sir has done. But, after watching Prithviraj, I can definitely say that Prithviraj is my favourite film of sir."
    },
    {
      "id": 6,
      "title": "Kshama Bindu marries herself; relationship expert on pros and cons of sologamy",
      "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/kshama_bindu_thumb_1654777202509_1654777212687.jpg",
      "category": "Bollywood",
      "description": "Gujarat's Kshama Bindu, 24, married herself on Wednesday in what is perhaps India's first sologamy or self-marriage, but not as she had planned before. A controversy erupted after Kshama announced her plans to marry herself and a BJP leader said Hinduism doesn't permit such marriages and that the young woman shouldn't be allowed to marry in a temple. Undeterred by the row, Kshama went ahead with the wedding ceremony solemnised at her home, complete with haldi and mehendi rituals, sans priest. She had earlier planned to tie the knot on June 11, but married ahead of schedule, anticipating controversy. Meanwhile Kshama thanked all her fans and followers for their support in a video message.I love you all. I can't describe it in words you have been so kind to me with all the trolls happening taking my side. I have tears of joy reading your messages and stories and I am so excited for my wedding day,she said"
    },
    {
      "id": 54,
      "title": "Samrat Prithviraj actor Manushi Chhillar in pink silk saree is a picture of elegance for new photoshoot",
      "Image": "https://images.hindustantimes.com/img/2022/06/02/550x309/manushi_chhillar_5_1654149548883_1654149561842.jpg",
      "category": "mix",
      "description": "Miss World 2017 winner Manushi Chhillar is currently gearing up for the release of her upcoming historical drama Samrat Prithviraj with Akshay Kumar. The much-anticipated film is Manushi's big debut in Bollywood, and the star has been promoting it with full pomp. Throughout the promotions, the star's sartorial choices have also been on-point. From elegant sarees to sharara sets and bespoke lehengas, Manushi has donned it all .Recently, Manushi and Akshay, with the team of Samrat Prithviraj, got together to hold a special screening of the film. The Home Minister of India, Amit Shah, also attended the event. Manushi even posted a picture from the occasion on her Instagram page and captioned it, Honoured and humbled to meet the Honourable Home Minister of India Shri Amit Shah Ji and all the other esteemed guests today at the special screening of #SamratPrithviraj in New Delhi."
    },
    {
      "id": 7,
      "title": "Vicky Kaushal and Shahid Kapoor serve dapper looks in black tuxedo at IIFA Awards 2022",
      "Image": "https://images.hindustantimes.com/img/2022/06/05/550x309/vicky_kaushal_shahid_kapoor_1654399060416_1654399245642.jpg",
      "category": "Bollywood",
      "description": "Vicky Kaushal and Shahid Kapoor were among the long list of celebrities who attended the IIFA (International Indian Film Academy) Awards 2022 in Abu Dhabi last night. The two stars arrived at the star-studded event dressed in black tuxedos. They walked the green carpet looking dapper in their outfits and served suave classiness. While Vicky chose an elegant version of the black pantsuit, Shahid incorporated his quirky style into his green carpet look. Scroll ahead to see both Vicky and Shahid's looks. Don't forget to take style tips from the two actors for the next black-tie event you attend. "
    },
  {
    "id": 8,
    "title": "IIFA Awards 2022: Jacqueline Fernandez, Ananya Panday and Sara Ali Khan take over the awards night in glam looks",
    "Image": "https://images.hindustantimes.com/img/2022/06/04/550x309/jacqueline_fernandez_ananya_panday_sara_ali_khan_1654310663202_1654310870969.jpg",
    "category": "Bollywood",
    "description": "IIFA (International Indian Film Academy) Awards 2022 saw many big names from the film industry, including Salman Khan, Shahid Kapoor, Nora Fatehi and more, walk the green carpet set in Abu Dhabi. Jacqueline Fernandez, Sara Ali Khan and Ananya Panday were also a part of this star-studded list. The three divas graced the event dressed in impeccable ensembles and starred in our best-dressed celebrity list from the awards night. While Jacqueline chose a shimmering metallic-toned gown, Sara chose a quirky black number, and Ananya went for ethereal vibes in a floral-themed dress. They all looked equally stunning for the occasion. Scroll ahead to check out their photos."
  },
  {
    "id": 9,
    "title": "Anushka Sharma shares pics from Maldives, promises daughter Vamika: 'Will carry you through this world and the next'",
    "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/Virushka_1642943308318_1654782527783.jpeg",
    "category": "Bollywood",
    "description": "haring the picture, she wrote, “Will carry you through this world and the next and beyond, my life.” In the picture, Vamika’s name is seen on the back of the carrier. Earlier on Thursday, Anushka had shared a picture of her breakfast at the popular destination. It read, “Start healthy end the other way” as she enjoyed a plate full of fruits. She also shared a picture of the Maldivian sunset on her Instagram Stories. "
  },
  {
    "id": 10,
    "title": "Aishwarya Rai buries her face in Abhishek Bachchan's arm on being reminded they've been married 15 years. ",
    "Image": "https://images.hindustantimes.com/img/2022/06/06/550x309/abhishek-aishwarya_1654483289046_1654483301001.jpg",
    "category": "Bollywood",
    "description": "Abhishek was decked up in grey pants, white shirt and velvet blazer with a bowtie for the green carpet. Aishwarya was twinning with him in a black anarkali dress with colourful details. When a reporter spotted the two of them together walking hand in hand, he mentioned how they have been married for 15 years. Aishwarya looked surprised and buried her face in Abhishek's arm and reacted, Aah thank you, oh my god, yes."

  },
  {
    "id": 11,
    "title": "Amber Heard steps out of a private plane in first sighting since trial verdict ",
    "Image": "https://images.hindustantimes.com/img/2022/06/11/550x309/amber_heard_1654956488249_1654956488415.jpg",
    "category": "Hollywood",
    "description": "Actor Amber Heard was spotted for the first time since the verdict was announced in her defamation trial against her ex-husband, actor Johnny Depp. She was clicked by the paparazzi at an airfield in Washington DC on Friday. She stepped out of a private airplane and moved to a luxury SUV.the jury ruled earlier this month that Amber did defame Johnny with her op-ed piece published in the Washington Post. In the trial, Johnny won more than $10 million in damages after a jury in Virginia ruled Amber defamed him when she claimed she was a survivor of sexual violence in her write-up."
  },
  {
    "id": 55,
    "title": "Jurassic World Dominion makes over ₹10 cr on opening day despite bad reviews ",
    "Image": "https://images.hindustantimes.com/img/2022/06/11/550x309/jurassic-world-dominion_1654942302906_1654942310976.jpg",
    "category": "mix",
    "description": "The business expected to come in at around 7.75-8 crore and there were paid previews of 3.75 crore nett which will take the total to around 10.75 crore nett,” quoted a report on Boxofficeindia.com.According to Deadline, in US, the film had a $55.5M opening day and projected $132.5M 3-day at 4,676 theaters. including $18M in previews.” The report further states, “If that holds, it will be the third best start for Jurassic movie after Jurassic World ($208.8M) and Jurassic World: Fallen Kingdom ($148M)."
  },
  {
    "id": 12,
    "title": " New Thor Love and Thunder clip shows Christian Bale battle Valkyrie, Chris Hemsworth loves a classic Thor adventure",
    "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/Thor_1654765699428_1654765720525.jpeg",
    "category": "Hollywood",
    "description": "The new video opens with some previously-seen shots of Thor (Chris Hemsworth) and Gorr (Christian Bale). We then see them on an asteroid along with the Guardians of the Galaxy, who are all worried they are going to die. The video then gives a glimpse of Gorr battling Valkyrie (Tessa Thompson). Rocket (Bradley Cooper) reprimands Thor that he had implied this would be a relaxing holiday. His line is interspersed with the other Guardians engaged in battle. Thor then retorts, “I said this was going to be like a relaxing holiday."
  },
  {
    "id": 13,
    "title": "jurassic World Dominion review: By sacrificing plot for VFX, Chris Pratt film shows how to ruin a beloved franchise ",
    "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/Jurassic_World_1654754485356_1654754506236.jpg",
    "category": "Hollywood",
    "description": "Jurassic World Dominion introduces us to a world where dinosaurs are now everywhere. Pterodactyls are nesting on top of New York skyscrapers, raptors attacking people on Europe’s beaches, and triceratops are roaming around with elephants in Africa. This proliferation has led to governments and people struggling to coexist with these out-of-time creatures as corporations and criminals attempt to make the most of it. It’s an interesting premise, which the movie throws away after ten minutes, in favour of a more predictable and done-to-death story about corporate greed and ethics."
  },
  {
    "id": 62,
    "title": "jurassic World Dominion review: By sacrificing plot for VFX, Chris Pratt film shows how to ruin a beloved franchise ",
    "Image": "https://images.hindustantimes.com/img/2022/06/09/550x309/Jurassic_World_1654754485356_1654754506236.jpg",
    "category": "footer2",
    "description": "Jurassic World Dominion introduces us to a world where dinosaurs are now everywhere. Pterodactyls are nesting on top of New York skyscrapers, raptors attacking people on Europe’s beaches, and triceratops are roaming around with elephants in Africa. This proliferation has led to governments and people struggling to coexist with these out-of-time creatures as corporations and criminals attempt to make the most of it. It’s an interesting premise, which the movie throws away after ten minutes, in favour of a more predictable and done-to-death story about corporate greed and ethics."
  },
  {
    "id": 14,
    "title": "TikTok star Cooper Noriega dies at 19, had shared video hours before death: 'Who else be thinking they gonna die young ",
    "Image": "https://images.hindustantimes.com/img/2022/06/12/550x309/Cooper_Noriega_1_1655004573910_1655004581697.jpg",
    "category": "Hollywood",
    "description": "Variety reports Cooper shared a video of himself lying in bed with the message, Who else b thinking they gon die young a*? just hours before his death.According to the Los Angeles Medical Examiner-office, Coroner Noriega was found dead in a Los Angeles mall parking lot on June 9. As per TMZ, Cooper exhibited no evidence of violence to his body and no foul play is suspected.Cooper had 1.77 million TikTok followers, where he posted funny skateboarding and fashion videos. He also claimed to have 427,000 Instagram followers and called himself a fashion model. He had worked with TikTok stars Jxdn and Nessa. Cooper was a guest on Dave Portnoy, Josh Richards, and Bri Chickenfry's Barstool's BFF's show just last week."
  },
  {
    "id": 15,
    "title": "Johnny Depp's lawyer Camille Vasquez calls reports of her dating actor 'sexist' ",
    "Image": "https://images.hindustantimes.com/img/2022/06/10/550x309/PEOPLE-DEPP--50_1654852135027_1654852166412.JPG",
    "category": "Hollywood",
    "description": "Johnny Depp’s lawyer Camille Vasquez has opened up for the first time about the rumours claiming that she was dating the actor. Camille gained popularity after she was spotted by Johnny’s side throughout his recent defamation trial against ex-wife Amber Heard. Through the trial, many had speculated about Camille and Johnny’s ‘closeness’ and claimed the two were dating  ."
  },
  {
    "id": 16,
    "title": "Explained: Will Amber Heard or Johnny Depp go to prison if other party wins? ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/Amber_Johnny_1653803672420_1653803684854.jpeg",
    "category": "Hollywood",
    "description": "ohnny Depp and Amber Heard’s bitter and public defamation trial came to a close on Friday as both parties rested their case, and the judge handed the case over to the jury. Now, the jury will deliberate over the case’s facts and findings and deliver their verdict next week. The high-profile defamation trial has seen its fair share of twists and turns. But now the question on everyone’s lips is what would be the outcome. As per reports, Johnny Depp is heavily favoured to emerge victorious in his suit against his ex-wife. But if he does win, what does that mean for Amber? We take a look.Johnny has sued Amber for $50 million saying she defamed him when she claimed to be a victim of domestic violence in a Washington Post op-ed in 2018. Johnny’s lawyers have said that even though Amber didn’t name him, the implication damaged his career. He has further alleged that Amber was abusive towards him during their marriage. Amber has countersued him for $100 million claiming that he has smeared her name by calling her a liar. She has maintained that she suffered physical and sexual abuse at Johnny’s hands. Both trials ran concurrently in a Virginia court for over six weeks. The hearings ended on May 27."
  },
  {
    "id": 17,
    "title": "Cannes full list of winners: Swedish film Triangle of Sadness wins Palme d'Or ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/FILMFESTIVAL-CANNES-AWARDS-354_1653794715337_1653794733888.JPG",
    "category": "Hollywood",
    "description": "The 75th Cannes Film Festival - Closing ceremony - Cannes, France, May 28, 2022. Song Kang-ho, Best Actor award winner for his role in the film Broker (Les bonnes etoiles), director Ruben Ostlund, Palme d'Or award winner for the film film Triangle of Sadness, and Vincent Lindon, Jury President of the 75th Cannes Film Festival, react on stage. REUTERS/Sarah Meyssonnier TPX IMAGES OF THE DAY(REUTERS). The 75th edition of the Cannes Film Festival came to a glittering close on Saturday with the nine-member jury giving out the big awards at the prestigious festival. Swedish director Ruben Ostlund’s class warfare comedy took the top honours by winning the festival's top prize--the Palme d’Or. Korean cinema again showed its dominance by taking home multiple awards for different films.The awards were selected by a nine-member jury headed by French actor Vincent Lindon and presented Saturday in a closing ceremony inside Cannes' Grand Lumière Theater. The jury included an Indian face in actor Deepika Padukone. A separate section of two awards for documentary films was adjudged e earlier on Saturday. Those awards were adjudged by a separate jury."
  },
  {
    "id": 18,
    "title": "Goodfellas actor Ray Liotta dies at 67: media reports ",
    "Image": "https://images.hindustantimes.com/img/2022/05/26/550x309/_850bdaac-499d-11e6-90e0-482a513bad8b_1653583341724.jpg",
    "category": "Hollywood",
    "description": "Actor Ray Liotta, star of the gangster film Goodfellas, has died at the age of 67 in Dominican Republic, as per media reports.Ray was engaged to be married to Jacy Nittolo and leaves behind a daughter, Yahoo reported. He was in the Dominican Republic shooting the film Dangerous Waters, as per a report in Deadline. The report also added that the actor died in his sleep on Thursday.While Ray was best known for his role in Martin Scorsese's Goodfellas, he had performed in a number of other films over the years, most notably Field of Dreams. He was on a path of resurgence in recent years with increased visibility and roles in major films. His recent roles included The Many Saints of Newark, Marriage Story and No Sudden Move.Deadline reported that he had finished the Elizabeth Banks-directed Cocaine Bear and was also due to star in the Working Title film The Substance opposite Demi Moore and Margaret Qualley."
  },
  {
    "id": 19,
    "title": "Jake Gyllenhaal: Acting is not real life in any form, you walk into a scene with all of your life experiences ",
    "Image": "https://images.hindustantimes.com/img/2022/05/28/550x309/US-CLOSING-ARGUMENTS-BEGIN-IN-DEPP-V--HEARD-TRIAL-5_1653726305859_1653726337385.jpg",
    "category": "Hollywood",
    "description": "Hollywood actor Jake Gyllenhaal took a conscious decision to stay in New York, but he admits his soul is in Los Angeles.For a lot of people, real life is deeply connected with the acting world, and sometimes even mirrors it, but that doesn’t stand true for Hollywood star Jake Gyllenhaal.I think real life shapes you as a human, and acting shapes your imagination. I strongly believe that acting is not real life in any form,” Gyllenhaal tells us.It’s been over three decades since Gyllenhaal has been working his way through in Hollywood, bringing different shades of complicated men on screen from cons to police officers. He is known for films such as Donnie Darko, Brokeback Mountain, Zodiac, Nightcrawler, Spider-Man: Far from Home, The Guilty and Ambulance.Opening up about his method as an actor, the 41-year-old shares, “A lot of times people say that acting is pretend. I don’t believe acting is pretend. I think it’s a real access to your imagination and a sense of play. And then you can hopefully build the human you are with the stuff that has nothing to do with the acting, but more to do with life and the people you love and the things you go through good and bad”"
  },
  {
    "id": 20,
    "title": "op Gun 2 tipped to be Tom Cruise’s career-best opener with $125 million weekend ",
    "Image": "https://images.hindustantimes.com/img/2022/05/25/550x309/_569e90dc-cd70-11ea-a892-bc0febb83d85_1653488101945.jpg",
    "category": "Hollywood",
    "description": "Tom Cruise's Top Gun Maverick has been projected to earn $125 million in its opening weekend, which will comfortably make it he best opener in the actor's long career.As per trade reports, Tom Cruise’s upcoming film Top Gun: Maverick could end up registering the biggest opening by any film of his career. Despite his stardom, Tom has never had a film gross over $100 million on the opening weekend. But reports say that Maverick may just change that. Some estimates claim that the film could end up making $125 million in its opening weekend in the domestic market alone.According to a report in The Hollywood Reporter, “Top Gun 2 is easily headed for the biggest opening of Tom Cruise’s career at the domestic box office, with a four-day gross of at least $92 million, according to official tracking. And that’s a conservative estimate. Many pundits believe the critically acclaimed sequel could soar well north of $100 million domestically, but tracking — one of Hollywood’s favorite pastimes — has become fraught in the pandemic era. Exhibitors are especially bullish on the pic, and are even thinking $125 million-plus.”"
  },
  {
    "id": 21,
    "title": "These Apple products will no longer get software updates ",
    "Image": "https://images.indianexpress.com/2022/06/These-apple-devices-will-no-longer-get-updates-June-2022.jpg",
    "category": "Technology",
    "description": "During its annual Worldwide Developer Conference (WWDC), Apple unveiled new versions of its iOS, macOS and watchOS platforms along with new MacBook Air and a 13-inch Macbook Pro. But with the release of new software from the company came a new list of older Apple devices that will no longer get software updates.Some iPhones will not be getting iOS 16, some iPads will not get iPad OS 16, some macs will not get macOS and a series of Apple Watches will not get watchOS 9. Here is a list of Apple products that will now stop receiving updates."
  },
  {
    "id": 56,
    "title": "Samsung launches Smart Monitor M8 in India: Check price, specifications here",
    "Image": "https://images.indianexpress.com/2022/06/Untitled-design-2022-06-10T175623.014.jpg",
    "category": "mix",
    "description": "Samsung has launched the Smart Monitor M8, its latest addition to the Smart Monitor series. The new M8 will be available from June 15, 2022, in India at a starting price of Rs 59,999.With Smart Monitor M8 we aspire to create a product that matches the evolved lifestyle and design taste of Gen Z and millennial consumers as they constantly look for a one-stop solution to work, learn and play. Our new Smart Monitor M8 is built for a PC-less experience for work and entertainment. Its iconic stylish design is meant to complement and enhance all living spaces,” said Puneet Sethi, Vice President, Consumer Electronics Enterprise Business, Samsung India."
  },
  {
    "id": 52,
    "title": "Samsung launches Smart Monitor M8 in India: Check price, specifications here ",
    "Image": "https://images.indianexpress.com/2022/06/Untitled-design-2022-06-10T175623.014.jpg",
    "category": "technology",
    "description": "Samsung has launched the Smart Monitor M8, its latest addition to the Smart Monitor series. The new M8 will be available from June 15, 2022, in India at a starting price of Rs 59,999.With Smart Monitor M8 we aspire to create a product that matches the evolved lifestyle and design taste of Gen Z and millennial consumers as they constantly look for a one-stop solution to work, learn and play. Our new Smart Monitor M8 is built for a PC-less experience for work and entertainment. Its iconic stylish design is meant to complement and enhance all living spaces,” said Puneet Sethi, Vice President, Consumer Electronics Enterprise Business, Samsung India."
  },
  {
    "id": 22,
    "title": "How much your data is worth on dark web? NordVPN’s research has some answers",
    "Image": "https://images.indianexpress.com/2022/06/cyber-crime-1-4.jpg",
    "category": "Technology",
    "description": "The dark web is a hub of cybercriminals looking to buy, sell and share stolen data and hacking tools. But just how much is your data worth on the dark web? New research by cyber security firm NordVPN has some answers. For instance, an Indian passport can be bought for as little as Rs 776, which is the fourth cheapest price compared to the rest of the countries.NordVPN analyzed one of the dark web markets that has illegally sold more than 720,000 items and data pieces for $17.3 million. The research shows that Indian items repeatedly appear at the bottom of the price list. Some of the top items found globally on the dark web were passports, personal IDs, driving licenses, email, payment card data, mobile phone numbers, online accounts, bank account logins, and crypto accounts as well as other personal data.this one market is just the tip of an iceberg. There are over 30K websites on the dark web at the moment. Keep in mind that only 4 per cent of the entire internet belongs to the surface web that is available to any user online,”  Adrianus Warmenhoven, a cybersecurity expert at NordVPN said in a press statement"
  },
  {
    "id": 63,
    "title": "Instagram Reels new features include longer Reels, templates and more",
    "Image": "https://images.indianexpress.com/2022/06/Instagram-new-features.jpg",
    "category": "footer3",
    "description": "Instagram has been adding new features time and time again to compete with rival short-format video apps such as TikTok and Snapchat. The Meta-owned platform has now rolled out longer Reels, Reel templates and more.Instagram Reels can now be 90 seconds long instead of the previous 60 seconds. While the new feature still doesn’t allow Reels to be as long as TikToks which can now be as long as 10 minutes long, it still is a step towards longer short-format videos. Such videos are seemingly becoming more popular, especially among creators."
  },
  {
    "id": 22,
    "title": "Apple plans 15-inch MacBook Air for 2023 and new 12-inch laptop ",
    "Image": "https://images.indianexpress.com/2022/06/Apple_MacBookAir_2022.jpg",
    "category": "Technology",
    "description": "Apple Inc plans to expand the lineup of laptops using its new, speedier in-house chips next year, aiming to grab a bigger share of the market, people with knowledge of the matter said.The company is working on a larger MacBook Air with a 15-inch screen for release as early as next spring, said the people, who asked not to be identified because the plans aren’t public. This would mark the first model of that size in the MacBook Air’s 14-year history. Apple is also developing what would be its smallest new laptop in years.The new models underscore Apple’s strategy to use homegrown processors to make gains in a market led by Lenovo Group Ltd. and HP Inc. The company began splitting from longtime partner Intel Corp in 2020 and announced its latest chip, the M2, at a developers conference earlier this week. Better performance and new designs have helped spur a resurgence for the Mac lineup, which accounts for about 10% of Apple’s sales."
  },
  {
    "id": 23,
    "title": "Microsoft’s HoloLens future in question after project leader departs ",
    "Image": "https://images.indianexpress.com/2022/06/Microsoft-hololens-future-alex-kipman-featured.jpg",
    "category": "Technology",
    "description": "Microsoft Corp. said the executive in charge of its HoloLens goggles is leaving the company, putting the future of its augmented-reality project in question.Alex Kipman, who had been with the Redmond, Washington-based software firm since 2001, was accused of inappropriate behavior toward female employees at Microsoft by current and former workers in an Insider report in late May. He had been the public face of the HoloLens initiative and his departure comes at a sensitive time for the project, as Microsoft is deciding on whether to continue developing its own AR hardware, according to two people familiar with the matter.HoloLens hardware will now be overseen by Panos Panay, who heads up Microsoft’s Surface computer division, while Jeff Teper, a corporate vice president managing areas like the Teams collaboration product, will take over the software part of the group, the people said. Microsoft Cloud chief Scott Guthrie detailed the changes on Tuesday in a memo sent to executive staff, according to the people, who declined to be named because the company isn’t publicly discussing the decision."
  },
  {
    "id": 24,
    "title": "EU agrees single mobile charging port in blow to Apple ",
    "Image": "https://images.indianexpress.com/2022/06/EU-deal-single-charging-port-apple.jpg",
    "category": "Technology",
    "description": "Apple will have to change the connector on iPhones sold in Europe by 2024 after EU countries and lawmakers agreed on Tuesday to a single mobile charging port for mobile phones, tablets and cameras in a world first. The political intervention, which the European Commission said would make life easier for consumers and save them money, came after companies failed to reach a common solution.Brussels has been pushing for a single mobile charging port for more than a decade, prompted by complaints from iPhone and Android users about having to switch to different chargers for their devices."
  },
  {
    "id": 25,
    "title": "Apple’s next-gen CarPlay announced at WWDC 22: All you need to know ",
    "Image": "https://images.indianexpress.com/2022/06/Apple-dives-deeper-into-autos-with-software-for-car-dashboard.jpg",
    "category": "Technology",
    "description": "Apple Inc on Monday announced it would more deeply integrate its software into the core driving systems of cars, while the iPhone maker rolled out a slew of features for payments and business collaboration and a pair of new laptops.The announcements at Apple’s annual developer conference showed a company that was once an outsider working its way firmly into the mainstream of nearly every screen in day-to-day life. The company whose late 1990s turnaround meant branding itself for rebels and troublemakers spent Monday talking up how to use iPads to collaborate on business presentations and how its software will eventually help display fuel economy on car dashboards. Notably absent were any hints of Apple’s expected next big product, a mixed-reality headset that can overlay digital objects on a view of the real world. Hopeful fans got only a few tidbits of new augmented reality technology at a technical talk."
  },
  {
    "id": 26,
    "title": "See your car in the metaverse with the ‘MGverse’ before buying it in the real world ",
    "Image": "https://images.indianexpress.com/2022/06/MGverse-try-car-metaverse-featured.jpg",
    "category": "Technology",
    "description": "MG Motor has launched its own metaverse platform called “MGverse”. The MGverse will combine five different virtual spaces including an “Explore & Creator centre,” an NFT Gallery, a virtual “MG Car Club,” a gaming arena and an “MG Knowledge Centre” for employees. The platform will initially be available on mobile and on desktop web browsers. The company says that it intends to make the same experience available with virtual reality headsets in the future.The Explore & Creator Center will allow users to personalise, accesorise and build MG vehicle models in the Metaverse. It will also let customers “take a virtual test drive in the cities and streets of their preference,” according to the company."
  },
  {
    "id": 27,
    "title": "Instagram launches exclusive ‘1 minute music’ tracks for Reels ",
    "Image": "https://images.indianexpress.com/2021/12/Instagram-AP-1.jpg",
    "category": "Technology",
    "description": "Instagram has launched a new exclusive ‘1 Minute Music’ track for its Reels, which is a set of music tracks and videos, exclusively available on its platform.The new 1-minute music set includes music from 200 artists across India, including the likes of Dhvani Bhanushali, Neeti Mohan, Shaan, Himanshi Khurana, Anirudh and GV Prakaash Kumar. The Meta-owned platform believes that will make your Instagram content more entertaining, and inspire other artists to release their one-minute music on the platform as well.“Music is a catalyst for trends on Instagram today. In fact, Reels is becoming the platform for people to discover music and artists too. With ‘1 Minute Music’, we’re now giving people access to an exclusive set of tracks they could use to make their reels more entertaining. We’re also hoping this platform serves as a paradigm for established and emerging artists to share their own music, and create their own videos, all on Reels,” said Paras Sharma, Director, Content & Community Partnerships, Facebook India (Meta).The music will be accompanied by music videos, which too will be available exclusively on Instagram.  Music distribution and artist services company, Believe, has worked with Instagram for this association"
  },
  {
    "id": 28,
    "title": "iQOO Z6 Pro review: What’s the X factor here? ",
    "Image": "https://images.indianexpress.com/2022/05/iQOO-Z6-Pro-review-1.jpg",
    "category": "Technology",
    "description": "The iQOO Z6 Pro is yet another performance-oriented phone for the masses. Starting at Rs 23,999, the phone comes with a Snapdragon 778G  processor, 66W fast charging, and other features, which are geared towards gaming. Now I have used a number of phones running this same processor already, and all of them seem to target a particular use case. The Xiaomi 11 Lite NE 5G for instance, is a compact phone, while the Realme 9 5G SE is a gaming phone on a budget.The iQOO Z6 Pro doesn’t seem to hit a particular string, and neither is it the most affordable phone with the chip. So should you care about this phone at all? Let’s find out.iQOO Z6 Pro specs: 6.44-inch AMOLED 90Hz screen | Snapdragon 778G chip | 64MP + 8MP + 2MP camera, 16MP front camera | 4700mAh battery with 66W fast charging One of the first things noticeable about the iQOO Z6 Pro is a unique looking rear-design, complete with two large circles holding in the three camera sensors. The phone has a plastic body but the build quality is really nice and everything feels solid to the touch when using this."
  },
  {
    "id": 29,
    "title": " Google hit with fresh UK investigation over ad tech dominance",
    "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
    "category": "Technology",
    "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
  },
  {
    "id": 30,
    "title": "Realme GT Neo 3 get a special Naruto Edition: All you need to know ",
    "Image": "https://images.indianexpress.com/2022/05/Realme-Naruto-edition-1.jpg",
    "category": "Technology",
    "description": "Realme is no stranger to launching special edition devices targeted at anime fans out there. The brand’s GT Neo 2 smartphone came out with a limited Dragon Ball edition complete with the titular character Goku’s colours and more. Now, the company has revealed yet another anime-edition phone.The Realme GT Neo Naruto Edition phone is based on the Naruto-series. Taking elements from both Naruto and the sequel series Naruto: Shippuden, the phone’s design takes cues from the signature black and orange jacket worn by the show’s lead character Naruto Uzumaki, as well as the silver headband most ninja in the show wear, complete with the Konoha seal.However, that’s just the device. Realme has also thrown in other themed goodies into the package, including a neat-looking Naruto-themed case, a black and orange charging adapter and a black USB type-C to type-C cable to go with it. Additionally, there is also a Naruto-themed SIM-ejector pin and a 10,000mAh power bank.Asides from the aesthetics, the phone itself is a regular Realme GT Neo 3 (the 150W fast charging variant) and includes the same hardware as its standard counterpart. This includes a MediaTek Dimensity 8100 chip. A 6.7-inch AMOLED display with 120Hz HDR10+ and an under-display fingerprint scanner. The single storage variant will also feature 12GB RAM and 256GB UFS 3.1 storage."
  },
  {
    "id": 31,
    "title": "Can practising meditation and yoga help sleep better?",
    "Image": "https://images.indianexpress.com/2021/11/meditation_1200_getty.jpg",
    "category": "Fitness",
    "description": "Yoga and meditation are ancient practices that are known to promote holistic healing of the mind, soul and body. No wonder they’re becoming increasingly popular the world over. Even during the pandemic, many people either got introduced to or resumed the practices of yoga and meditation to find peace within, which has many positive effects on the body."
  },
  {
    "id": 32,
    "title": "Mumbai: Set to launch yoga centres, BMC reaches out to resident groups ",
    "Image": "https://images.indianexpress.com/2022/05/YOGA.jpg",
    "category": "Fitness",
    "description": "To set up Shiv Yoga Kendras across the 24 administrative wards in Mumbai, the BMC has started reaching out to resident groups and office-bearers of various housing societies. It has also called for expression of interest from yoga centres, which are registered for two years with the Yoga Certification Board or the Indian Yoga Institute as per the guidelines and recommendations of AYUSH.  The yoga teachers or instructor to be recruited for the initiative should have three years of experience and be trained in Common Yoga Protocol as per Union government norms."
  },
  {
    "id": 33,
    "title": "In the water, on the mountains: Yoga asanas at unique places in the world",
    "Image": "https://images.indianexpress.com/2016/06/idy-strange-places-820.jpg?w=630",
    "category": "Fitness",
    "description": "The second edition of the International Day of Yoga in 2016 saw mass participation from yoga practicioners and newbies alike from across the world. As a run up to June 21, there were a series of sessions held by experts and newbiews alike to spread the word on yoga. To make it a truly spectacular mass event, yoga events were held rather unusual places too. From the freezing glaciers of Siachen to 35,000ft aboard a plane, here are some unusual venues that hosted the second International Day of Yoga."
  },
  {
    "id": 34,
    "title": "Shilpa, Lara, Kareena, Lady Gaga: 21 celebrities who swear by yoga, and why",
    "Image": "https://images.indianexpress.com/2016/06/celebrities-yoga-820.jpg?w=630",
    "category": "Fitness",
    "description": "Do you wonder how your favourite celebrities look so fit and toned and age so well? Both Bollywood and Hollywood swear by yoga, not only for fitness' sake, but also for inner peace given their crazy shooting schedules and the pressures that come with stardom. Here are 21 celebrities who've adopted yoga as a part of their lifestyle, for the better.Shilpa Shetty: Apart from releasing yoga DVDs, Shilpa Shetty also has her own YouTube channel called Shilpa's Yoga, which is full of the actor demonstrating various asanas and yoga poses. In an interview, Shetty once said, Yoga cures you of illnesses, tones your body, keeps you fit...I feel it is the road to happiness.(Source: Shilpa's Yoga/YouTube).Lara Dutta has released a DVD on prenatal yoga and also has her own YouTube channel called Heal With Lara — a comprehensive workout and fitness channel of which yoga forms an integral part. She once wrote in a column:Keeping fit and moving throughout your pregnancy will ensure faster recovery post delivery. Yoga is the best thing that happened to me. I firmly believe that yoga coupled with strength training creates a stronger, leaner and more flexible body. I have been a yoga practitioner for over 12 years and the benefits that I have reaped have been immense.(Source: Heal With Lara/YouTube)"
  },
  {
    "id": 35,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "Fitness",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 37,
    "title": "21 ways yoga is beneficial for you ",
    "Image": "https://images.indianexpress.com/2016/06/yoga-thinkstock-820.jpg?w=630",
    "category": "mix",
    "description": "Yoga is a holistic wellness system that boosts mental, physical and spiritual health. Over decades, yoga has gained a lot of popularity and is perfect for those who complain of having no time to exercise. If you still haven't jumped on to the yoga bandwagon and are wondering what the hype is all about, here are 21 benefits of regular yoga practice you could use. Aids weight loss: Surya Namaskar and Kapal Bhati Pranayama are effective for weight loss. Continued practice of yoga tunes the body to its needs, therefore regulating appetite and consumption of different kinds of food. Many practitioners find their craving for junk food reduce with sustained yoga practice.    "
  },
  {
    "id": 36,
    "title": " Yoga For stress Relief and for improve imunity",
    "Image": "https://images.indianexpress.com/2016/06/17-yoga-ap.jpg?w=630",
    "category": "Fitness",
    "description": "Yoga postures, Pranayama and meditation are effective in stress relief, especially with prolonged practice. In the rush of modern life, meditation helps bring a much-needed anchor to calm the mind.The immune system benefits tremendously from the practice of yoga. Yoga poses massage organs and strengthen muscles, improving their efficiency. Halasana and Bhujangasana directly improve the immune system by releasing white blood cells."
  },
  {
    "id": 37,
    "title": "Celeb fitness: Sooraj Pancholi is ‘back to the game ",
    "Image": "https://images.indianexpress.com/2022/05/sooraj-pancholi_1200_insta.jpg",
    "category": "Fitness",
    "description": "Sooraj Pancholi, who loves to work out, is back to the fitness grind after long. His fitness trainer, Pawan Jatwa, recently shared a video in which the Hero actor could be seen flexing his muscles. According to Bala Krishna Reddy Dabbedi, a fitness expert, and co-founder, director at Fittr, people usually think that they can pick up from where they left and that their original strength will be the same — “but that will not be the case”. “It’s easy to compare yourself to the times when you were training regularly. But, if there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,” he expressed.Assess again, test your current strength levels and train accordingly, he suggested. “There is something called muscle memory which helps one get back to their previous strength levels and muscle mass, but this takes times — from a few weeks to even some months. Just be consistent and positive till you get there. On resuming, do not start with an intense program. Keep it minimal, start slow, and you may even experience muscle soreness and pain. Eventually increase the intensity with every passing week,” she said."
  },
  {
    "id": 38,
    "title": "Yoga help us to fight with lifestyle diseases ",
    "Image": "https://images.indianexpress.com/2016/06/3-yoga-pti.jpg?w=630",
    "category": "Fitness",
    "description": "Helps fight lifestyle diseases: Chronic lifestyle diseases like hypertension, hormonal imbalances, diabetes, reproductory disorders and respiratory and cardiovascular related health concerns have risen in the past few decades and are increasingly being diagnosed among the younger population. Regular practice of yoga helps keep these at bay, or manage them if you already suffer from them."
  },
  {
    "id": 39,
    "title": "Exercise Improves Brain Fitness as You Age ",
    "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
    "category": "Fitness",
    "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
  },
  {
    "id": 40,
    "title": "Step-by-step breakdown and health benefits of the Surya Namaskar",
    "Image": "https://images.indianexpress.com/2016/03/surya-namaskar-thinkstock.jpg?w=630",
    "category": "Fitness",
    "description": "For those who don't have the time or resources to invest in an elaborate exercise regime, doing the Surya Namaskar daily is a holistic way to stay fit as its twists and bends encompass all major muscle groups and organ systems. Here is a step-by-step breakdown on how to perform the Surya Namaskar, as well as its health benefits. Start with 4 reps of the Surya Namaskar cycle, and then keep increasing the count depending on your comfort level."
  },
  {
    "id": 41,
    "title": "Try this gluten-free thaali to make a healthy dietary switch",
    "Image": "https://images.indianexpress.com/2022/06/GF-Thaali-with-Parmal-Kadi-1200.jpeg",
    "category": "Food",
    "description": "If you think you don’t have many options with gluten-free diets — or that you have to be dependent on processed dips and sauces to add zing to your millet meals — consider preparing traditional recipes in the most creative ways. Now that the world is waking up to the importance of traditional grains and recipes, I feel immense joy in sharing various gluten-free scrumptious thaali ideas on my Instagram.Even if you are not gluten-sensitive or intolerant, you must consider bringing traditional varieties of rice, wheat and millets to your platter. Not only are they powerhouses of nutrition, but they also give you fibre that helps in cleansing the gut."
  },
  {
    "id": 42,
    "title": "Joshi House restaurant in Mumbai to host Michelin Star dining experience with chefs Suvir Saran and Vardaan Marwah",
    "Image": "https://images.indianexpress.com/2022/06/joshi-house-1200.jpg",
    "category": "Food",
    "description": "Joshi House restaurant, located in Pali Naka, Bandra in Mumbai, is famous for serving a host of world cuisines – Italian, European and Indian, among others. And now, the eatery is all set to host its first Michelin Star dining experience with chefs Suvir Saran and Vardaan Marwah on June 15 and 16. The two-day pop-up event will give diners a glimpse into chef Suvir‘s approachable style of fine dining that has “helped him demystify Indian cuisine in America”. “His culinary philosophy — ‘American Masala’ — integrates the cuisines of Indian, American, and other world cultures, exalting each one’s distinct character yet melding them in his signature style that is wholly delicious and instantly recognisable and celebrated,” the restaurant said."
  },
  {
    "id": 43,
    "title": "Here’s why you should have jaljeera this summer",
    "Image": "https://images.indianexpress.com/2022/05/jaljeera-1200.jpg",
    "category": "Food",
    "description": "With the temperatures soaring high during summers, people have a variety of drinks to choose from to keep themselves hydrated and cool. One of the most popular drinks in the Indian households is jaljeera.Karishma Shah, an integrative health nutritionist and holistic life coach, explained the benefits associated with jaljeera along with the quantity it should be consumed in for the best results. The nutritionist said that a plethora of people consume jaljeera for digestive aid as it has mint powder, jeera, rock salt, amchoor powder and hing as its ingredients which are good for digestion. Moreover, she stated that jaljeera is good for detoxifying the body, keeping the person relaxed and not feeling bloated throughout the day"
  },
  {
    "id": 44,
    "title": "Excessive Consumption of Ginger can Lead to These Side Effects",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/ginger-16521781103x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Ginger is a very common Indian household ingredient, which is well known for its amazing flavour. For many, morning tea is incomplete without crushing ginger in it. Not only as spices, but ginger has been a traditional remedy in many cultures for thousands of years. After all, it is loaded with impeccable health benefits. While we have been told time and again that ginger carries innumerable nutritious benefits, it’s rarely discussed that this magical ingredient can also cause side effects.Although the side effects usually happen after excessive intake of ginger, several cases have been witnessed where it aggravates the health issues. So let’s learn more about the side effects.As ginger carries antiplatelet properties, excessive intake of ginger may cause bleeding. Not just this, but if it is consumed with clove or garlic, it further increases the risk of excessive bleeding.The most common symptoms of basic side effects caused by excessive ginger intake are skin rashes, eye redness, dyspnea, itching, swollen lips, itchy eyes, and throat discomfort. In such circumstances, it is advised to immediately seek medical attention.Consuming ginger beyond the prescribed limit of 1500 mg per day may even lead to the risk of miscarriage. Therefore it is advised to avoid too much ginger during pregnancy and intake it only after consulting the doctor"
  },
  {
    "id": 45,
    "title": "Beat the scorching summer heat with these naturally refreshing drinks",
    "Image": "https://images.indianexpress.com/2022/04/kokum1.jpg",
    "category": "Food",
    "description": "The summer season calls for rfreshing and cooling drinks, to quench our thirst and relieve parched throats. But, many of us are guilty of reaching out for cold drinks, sodas, and other aerated drinks that are extremely healthy. This is why here we are — sharing perfect summer drinks that are not just delicious and refreshing but naturally healthy, too. While lemonade and buttermilk are some common choices, you can also try a bunch of other summer drink options suggested by Ayurvedic expert Dr Dixa Bhavsar.“Beat the heat with these natural, cooling drinks this summer,” she wrote."
  },
  {
    "id": 46,
    "title": "atiate your taste buds with this delicious Rooh Afza shrikhand (recipe inside)",
    "Image": "https://images.indianexpress.com/2022/05/shrikhand-1200.jpg",
    "category": "food",
    "description": "Summer heat calls for some refreshing and chilled desserts, and what better than one prepared at home? Rooh Afza, also known as the ‘summer drink of the east’, has a special place in the hearts of many. It is consumed in various ways — as a sharbat with chilled water or by mixing it with milk to produce a shake. Another famous chilled delicacy of Indian households is shrikhand, a sweetened yoghurt preparation.  How about combing these two favourites to create something flavoursome and extremely satisfying? As such, Chef Pankaj Bhadouria recent took to Instagram to share a delicious recipe which she titled as ‘Rooh Afza shrikhand.’ Her caption read, “Let’s whip up this delicious Thanda Thanda Cool Cool dessert this Summer! Hum bhi Happy, Tummy bhi Happy!”"
  },
  {
    "id": 46,
    "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/curd-rice-1-16519277623x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
  },
  {
    "id": 47,
    "title": "Naga Cuisine is Just as Rich And Flavourful as its Culture",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/nagaland-16386760023x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Nagaland is known for its cultural, ethnic and linguistic diversity. The state boasts a rich socio-cultural heritage comprising several local tribes, each having their own distinct ethnic traditions. The northeastern state is also a favourite destination for nature lovers because of its diverse flora and fauna, forests, splendid valleys and waterfalls.Nagaland also has its own unique cuisines which are rich in flavour and represent the food culture of different tribal groups.Naga cuisine is based on the local produce that has been available to tribes. It mostly includes fish, meat, rice, herbs, vegetables and fermented grains. The food is definitely different than what you are used to so you may rethink trying, but there are many dishes which are delicious and worth trying at least once. To understand Naga cuisine and what a common resident consumes, you can visit the Central Market in Kohima. The market will offer you a glimpse into the exotic Naga tribal food items like mefi (wriggling hornet grubs), frogs, silkworms, snails, crabs, dried fish and pork, among others. The market also offers exotic condiments such as dried and fermented bamboo shoots, fiery king chillies and plethora of vegetables as well as a variety of leaves, which are intergral to Naga cuisine.A routine Naga meal will include rice, pork or any other meat, fish, boiled or steamed vegetables and side dishes like a variety of chutney or pickles.Axone, fermented soybean paste, is an important part of Naga cuisine. Axone, also known as Akhuni, is used in a variety of preparations like pickles, chutneys, curries and non-veg dishes"
  },
  {
    "id": 48,
    "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
  },
  {
    "id": 49,
    "title": "Ensure your cheese does not turn sticky on grating with this tip",
    "Image": "https://images.indianexpress.com/2022/05/cheese_1200_pexels.jpg",
    "category": "Food",
    "description": "Kitchen tips and tricks are always welcome. They make cooking seem like a breeze, and the experience hassle-free and enjoyable. They are also perfect for days when you want to whip up a dish in a jiffy! So here we are with a quick and easy tip that is going to come extremely handy — especially if you are a lover of cheese."
  },
  {
    "id": 58,
    "title": "Try this refreshing drink to beat dehydration in summer ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-coconut-water-coconut-drink-1200.jpg",
    "category": "mix",
    "description": "While it is advisable to drink water and keep yourself hydrated all throughout the year, the summer season is when the body can quickly lose its water content in the form of sweat.Which is why, it is important to sip on something soothing and watery from time to time. Besides plain water, you can also opt for coolants, and what can be a better coolant than one that involves coconut water? Celeb fitness trainer Yasmin Karachiwala shared the recipe of coconut cooler on Instagram, writing that it is “the most refreshing drink to beat dehydration in this summer heat”. “It’s also the perfect drink to break your fast during Ramadan,” she wrote in the caption."
  },
  {
    "id": 50,
    "title": "Unable to Find Tofu at Local Store? Here’s an Easy Recipe to Make it at Home",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/04/tofu-16510624083x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "If you are a fitness enthusiast and a vegan, you might be one of the people who have tofu in their meals instead of paneer. While many people find it easily in the supermarket, others may find it difficult to spot tofu at their local stores. If you are one of those people, don’t worry as this simple method can help you make protein-rich tofu at home with just two ingredients – chickpeas and water.Once the tofu is set, you can use it as and when required. It is as tasty as the tofu bought from a store and tofu is as versatile as cottage cheese. It can be used in dry and wet recipes depending on your mood and diet requirements. Chickpea is rich in protein and hence the tofu is a great source of protein to help you complete the daily protein requirement.Soak the chickpeas overnight after thoroughly washing with the help of a strainer under running water.Drain all the water and wash the chickpeas the next day. Add chickpeas with two cups of water in a blender and blend in batches until you have a smooth mixture.Strain the blended chickpeas through a muslin cloth into a bowl. Make a squeezable bag out of the muslin cloth with the mixture in it. Squeeze the blend well to strain it nicely. As the water drains slowly from the mixture, it takes some time to strain the blend.Take the strained blend and put it in a pot. Keep the pot on full flame and let the mixture boil. Once you see bubbles, lower the flame and cook the blend for another half n hour. The mixture will thicken with time. When it is thick enough, put off the flame and let the blend cool down for a while. Leave the mixture in a container for more than 2 hours idle. This will ensure that the mixture sits and the tofu sets properly"
  },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Detail