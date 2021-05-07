var name = prompt("Write Secret Code" )
var love = ["люблю", "обожаю без памяти", "боготворю", "люблю до безумия", "обожаю страсно", "симпатизирую"];
var darling = ["Дорогая", "Ненаглядная", "Драгоценная", "Любимая", "Родная", "Любимая сердцу", "Бесценная", "Милая", "Дражайшая", "Дорогая сердцу"];
var part = ["грудь", "улыбку", "прическу", "бровь", "голову", "шею", "кисть", "щеку", "ладонь", "спину", "талию", "мочку уха", "природную нежность", "очаровательность"]



var randomLove = love[Math.floor(Math.random() * 6)];
var randomDarling = darling[Math.floor(Math.random() * 10)];
var randomPart = part[Math.floor(Math.random() * 14)];

var sentence = randomDarling + ' Юлдуза, я ' + randomLove + " твою " + randomPart + '.';



if (name == 'Я люблю тебя Амир' || name == 'Я обожаю тебя Амир') {
    document.getElementById("sentense").innerHTML = sentence;
    document.getElementById('my_image').style.display = 'inline';
    document.getElementById("sentense").style.fontFamily = 'LeoHand';
    document.getElementById("sentense").style.fontSize = "80px";
    document.getElementById("sentense").style.color = "white";
} else {
    document.getElementById("sentense").innerHTML = 'Вы не достойны читать подобное!';
    document.getElementById('my_image').style.display = 'none';
    document.getElementById("sentense").style.fontFamily = 'LeoHand';
    document.getElementById("sentense").style.fontSize = "80px";
    document.getElementById("sentense").style.color = "white";
}