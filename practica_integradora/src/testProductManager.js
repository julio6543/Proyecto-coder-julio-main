import ProductManager from "./dao/ProductManager.js";

const PM = new ProductManager();
console.log(PM.getProducts());
PM.addProduct({title:"Genshin Impact", description:"gratuito", price:0, thumbnail:"https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=es", code:"JUEGO", stock:10});
console.log(PM.getProducts());
PM.addProduct({title:"Rocket Liegue", description:"gratuito", price:0, thumbnail:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_RocketLeague_image1600w.jpg", code:"JUEGO 2", stock:9});
PM.addProduct({title:"Fortnite", description:"gratuito", price:0, thumbnail:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Fortnite_image1600w.jpg", code:"JUEGO 3", stock:8});
console.log(PM.getProducts());
console.log(PM.getProductById(3));
console.log(PM.getProductById(1));