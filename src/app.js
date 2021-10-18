console.log("Merhaba Ünal")

let dolarDun=9.20
dolarDun="MUŞ" //javascript tip güvenli değildir. 

let dolarBugun=9.30

{
    let dolarBugun=9.10
}

console.log(dolarBugun)

const euroDun=11.35
//euroDun=11 //Bu şekilde doğru değil... çünkü const değişken
console.log(euroDun)

//PascalCasing--> ilk harfler büyük
//array
//camelCasing--> ilk harfler küçük
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for(let index=0;index<konutKredileri.length;index++)
{
    console.log("<li>"+konutKredileri[index]+"</li>")
}
 console.log("</ul>")