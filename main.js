var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var chooseGenre = document.getElementById("chooseGenre")
var reset = document.getElementById("reset")
var imgKomik = document.getElementById("imgKomik")
var sinopsis = document.getElementById("sinopsis")
var index = 0
var genre = [
    ["Action", "Slice-of-Life"],
    ["Revenge", "Shounen"],
    ["Comedy", "Psychological"],
    ["Different-World", "Modern-World"],
    ["Romance", "Mystery"]
]
var output=[]

function getGenre(){
    if (index >= genre.length){
        option1.style.display = "none";
        option2.style.display = "none";
        reset.style.display = "none"
        
        if (output[0] == "Action" && output[1] == "Revenge" && output[2] == "Different-World"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/34404/fukushuu-o-koinegau-saikyou-yuusha-wa-yami-no-chikara-de-senmetsu-musou-suru">The Hero Who Seeks Revenge Shall Exterminate With Darkness</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/34404.jpg?1601473111%22%3E"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>Raoul, who had defeated the demon king as the strongest hero, should have become the savior of the world.<br /><br />Having his treasured companions and family killed by power-hungry aristocrats, he was executed with false charges brought against him by the princess. Just before his life collapsed, at last, his heart fell into darkness.<br /><br />...I'll tear those traitors from limb to limb. Burn them at the stake. Sever them to pieces. Skewer them. I'll kill every one of those bastards without mercy and make them taste hell's suffering.....!!!<br/><br/>Obtaining the power of darkness, Raoul was revived. Sneering, he vowed revenge.<br/><br/>“Oh, I’m looking forward to it – from now on, I'll bask in their blood as I please.”</br><br/>Several days after the hero's revival in the imperial capital where flowers bloomed in profusion, the parade that would advance towards tragedy began.</p>"
        } else if (output[0] == "Action" && output[1] == "Revenge" && output[2] == "Modern-World"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/50019/rooftop-sword-master">Rooftop Sword Master</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/50019.jpg?1598524968"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>After being beat up and put into a coma by eight of his classmates at Nun'Gwang Middle school, Se'young woke up after nine long months and found out that his father committed suicide by self-immolation in an attempt to get justice for what happened to him. <br/><br/>As a result, the investigation re-opened and that attackers who tried to sweep it under the rug received a proper sentence for their crimes. But Se'young was unable to assuage the anger and fear he felt for the unjust world.<br/><br/> Se'young thoroughly hid himself from this sort of world. <br/><br/>The sun would rise and set, the seasons changed, and not once did he step outside of his home. But one day, a sudden and strange sound enticed him to open the door…<br/><br/>Embedded in the center of the rooftop was a gigantic blade emblazoned with the words “War Sword” and with it, came the whispers of a God.</p>"
        } else if (output[0] == "Action" && output[1] == "Shounen" && output[2] == "Different-World"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/94/gintama">Gintama</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/94.jpg?1545760820"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>Sakata Gintoki is a samurai living in an era when samurai are no longer needed.<br/><br/>To add to his troubles, oppressive aliens have moved in to invade. Gintoki lives with Kagura and Shinpachi, taking on odd jobs to make the world a better place... and to pay their rent.</p>"
        } else if (output[0] == "Action" && output[1] == "Shounen" && output[2] == "Modern-World"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/51546/the-villain">The Villain</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/51546.jpg?1594783550"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>The top dog of Busan is moving to Seoul. Will he be able to take over the new city?</p>"
        } else if (output[0] == "Slice-of-Life" && output[1] == "Comedy" && output[2] == "Romance"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/16617/komi-san-wa-komyushou-desu">Komi-san Has a Communication Disorder</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/16617.png?1598443083"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole school sees her as the cold beauty that's out of their league, but Tadano Hitohito knows the truth: she's just really bad at communicating with others. <br/><br/>Komi-san, who wishes to fix this bad habit of hers, tries to improve it with the help of Tadano-kun by achieving her goal of having 100 friends.</p>"
        } else if (output[0] == "Slice-of-Life" && output[1] == "Comedy" && output[2] == "Mystery"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/1403/sayonara-zetsubou-sensei">Goodbye Despair Teacher</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/1403.jpg?1519173174"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>Nozomu Itoshiki is a high school teacher so pessimistic that even the smallest of misfortunes can send him into a pit of raging despair; some of these 'catastrophes' even lead to suicide attempts. Sayonara Zetsubou Sensei is a satirical slice-of-life comedy set in the modern day, covering various aspects of Japanese life and culture through Nozomu and his interactions with his students: Kiri Komori, a recluse who refuses to leave the school; Abiru Kobushi, an enigma who frequently arrives to class with severe and mysterious injuries; the hyper-optimistic Kafuuka Fuura, Nozomu's polar opposite; and several other unusual girls, all of whom are just as eccentric as their teacher.</p>"
        } else if (output[0] == "Slice-of-Life" && output[1] == "Psychological" && output[2] == "Romance"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/22284/sachiiro-no-one-room">A Little Room for Hope</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/22284.jpg?1592241983"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>One day, a fourteen year-old girl was kidnapped... or so the police have been lead to believe. Actually, she tried to run away from her abusive parents and was helped by her stalker who then shelters her in his apartment. Although he considers his actions as kidnapping, the girl is happy about the situation and proposes to him, with the condition that if they are caught, they will commit suicide.</p>"
        } else if (output[0] == "Slice-of-Life" && output[1] == "Psychological" && output[2] == "Mystery"){
            chooseGenre.innerHTML = '<a href="https://mangadex.org/title/36161/dark-mortal">Dark Mortal</a>'
            document.getElementById("imgKomik").src = "https://mangadex.org/images/manga/36161.png?1588592673"
            imgKomik.style.display = "block"
            sinopsis.innerHTML = "<p>Gangnam lost his parents from a fire and has turned blind from the incident. He wasn't able to see anything but a hallucination called Kkamjang. Is Kkamjang actually a hallucination or something more? 'Your scars, your two eyes, and... even your strength! I'll change everything for you.'</p>"
        }
        
    } else {
        option1.innerHTML = genre[index][0]
        option2.innerHTML = genre[index][1]
        chooseGenre.innerHTML = "Pilih Genre"
        imgKomik.style.display = "none"
    }
    console.log(output)
    console.log(index)
}

reset.addEventListener("click",function(){
    BtnReset()
})

function optionChoosen1(){
    output.push(genre[index][0])
    if (index == 0){
        index ++
    } else {
        index += 2
    }
    getGenre()
}

function optionChoosen2(){
    output.push(genre[index][1])
    index += 2
    getGenre()
}

function BtnReset(){
    index = 0
    output = []
    getGenre()
}

function pressButton() {
    console.log("pressed")
  }