//Code tenté de faire maison !

const puppeteer = require ('puppeteer-extra')
let url = "https://www.leboncoin.fr/"
//let url = "http://books.toscrape.com/"

puppeteer.launch({headless : false, args : ["--start-maximized"]})
	.then(async browser => { 
		const page = await browser.newPage()
		//const promesse = page.waitForNavigation()
		await page.goto(url)
		await page.setViewport({ width : 1900, height : 900 })
		
		//Click on capchta
		//await page.click("#\31 e505deed3832c02c96ca5abe70df9ab > div")
		
		//Remplit la case "Rechercher"
		await page.type("#mainContent > div._3id11 > div._1o09v > div > div > div:nth-child(2) > div._1JWLq > div > div > div > input[type=text]", "voiture")
		//Clique sur le bouton rechercher"
		await page.click("#mainContent > div._3id11 > div._1o09v > div > div > div._3-Pua > div > button")
		print("LOL")
		
		//await page.waitFor(1000)
		
		//const infos = await page.evaluate( () => { 
			//let titre = document.querySelector("div.col-sm-6:nth-child(2) > h1:nth-child(1)").innerText
		//	let prix = document.querySelector(".price_color").innerText
			
			//console.log(titre)
		//	return infos
		 //} )
		 
		 //console.log(infos)
		
		//await browser.close()
	})
	
//Code copié directement d'internet : https://www.smooth-code.com/articles/scraper-le-web-avec-puppeteer


/*let url = "https://www.leboncoin.fr/"
const puppeteer = require('puppeteer')

const getData = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto(url)
  //await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img',)
  //await page.waitFor(1000) // fait une pause d'une seconde

  // 3 - Récupérer les données
  //const result = await page.evaluate(() => {
    //let title = document.querySelector('h1').innerText
    //let price = document.querySelector('.price_color').innerText
   // return { title, price }
  //})

  // 4 - Retourner les données (et fermer le navigateur)
  //browser.close()
  //return result
//}

// Appelle la fonction getData() et affichage les données retournées
getData()
//getData().then(value => {
//  console.log(value)
} //)*/

