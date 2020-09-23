const puppeteer = require('puppeteer');
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const fs = require('fs');
const creds = require('./ClientSecret.json');



async function Dodawanie(cenaNaroznika, nazwaNaroznika, opisNaroznika, page, index, pomocnicza) {
    async function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
        }); 
     }

    let indexOfPhoto = 0;
    const addAdButton = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.j83agx80.cbu4d94t > div > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.qmfd67dx.hpfvmrgz.gile2uim.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5 > div:nth-child(1) > div > div > div > div > div > div';
   
    await sleep(10000);
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.g5gj957u.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.gs1a9yip.owycx6da.btwxx1t3.pxsmfnpt.pedkr2u6.n1dktuyu.dvqrsczn.l23jz15m.d4752i1f > div > div > div > div > div > div.bp9cbjyn.j83agx80.btwxx1t3.k4urcfbm > a:nth-child(2)');
    await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.g5gj957u.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.gs1a9yip.owycx6da.btwxx1t3.pxsmfnpt.pedkr2u6.n1dktuyu.dvqrsczn.l23jz15m.d4752i1f > div > div > div > div > div > div.bp9cbjyn.j83agx80.btwxx1t3.k4urcfbm > a:nth-child(4)');
    await page.waitForSelector(addAdButton).then(() => console.log('got it'));
    await page.waitForSelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.j83agx80.cbu4d94t > div > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.qmfd67dx.hpfvmrgz.gile2uim.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5 > div:nth-child(1) > div > div > div > div > div > div').then(() => console.log('got it'));
    await sleep(2000);   
    await page.evaluate(() => 
        document.querySelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.j83agx80.cbu4d94t > div > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.qmfd67dx.gile2uim.buofh1pr.g5gj957u.hpfvmrgz.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5 > div:nth-child(1) > div > div > div > div > div > div').click()
    );

    const addFirstPhoto = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div.n1l5q3vz.hv4rvrfc.dati1w0a > div.aov4n071 > div > div > div > div > div';
    
    await page.waitForSelector(addFirstPhoto);
    
    const [fileChooser] = await Promise.all([

        page.waitForFileChooser(),
        page.click(addFirstPhoto),
        
        ]);
    let path = '';
    if(index > 9) {
    let indexPlus = index.toString();
    indexPlus = indexPlus[1];
    path = './Narozniki/'+nazwaNaroznika+"/"+nazwaNaroznika+' 0'+'.jpg';
    await fileChooser.accept([path]);
    } else {
        path = './Narozniki/'+nazwaNaroznika+"/"+nazwaNaroznika+" 0"+'.jpg';
        await fileChooser.accept([path]);
    }


        
    await page.waitForSelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div.n1l5q3vz.hv4rvrfc.dati1w0a > div.aov4n071 > div > div > div:nth-child(2) > div > div > span > div');

    const AddingPhotoSelectorFirst = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div.n1l5q3vz.hv4rvrfc.dati1w0a > div.aov4n071 > div > div > div:nth-child(';
    
    const AddingPhotoSelectorSecond = ') > div > div > span > div';
    let numberOfAddingPhoto = 0;

    for(indexOfPhoto = 1; indexOfPhoto < 10; indexOfPhoto++) {
        await sleep(2000);
        numberOfAddingPhoto = indexOfPhoto + 1;
        addPhotoButton = AddingPhotoSelectorFirst+numberOfAddingPhoto+AddingPhotoSelectorSecond;
        path = './Narozniki/'+nazwaNaroznika+"/"+nazwaNaroznika+" "+indexOfPhoto+'.jpg';
        [fileChoosertwo] = await Promise.all([
            page.waitForFileChooser(),
            page.click(addPhotoButton),
        ]);
        await fileChoosertwo.accept([path]);
    }

    const addTextProductFirst = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div:nth-child(';
    const addTextProductSecond = ') > div > div > label > div > div > input';


    await page.click(addTextProductFirst+'2'+addTextProductSecond);
    await page.keyboard.type(nazwaNaroznika);
    await page.click(addTextProductFirst+'3'+addTextProductSecond);
    await page.keyboard.type(cenaNaroznika);
    await page.click(addTextProductFirst+'5'+') > div > div > label > div > div > textarea');
    await page.keyboard.type(opisNaroznika);

    const productTagsArea = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div:nth-child(6) > div > div.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > label > div > div > div > div.j83agx80.oud54xpy.kvgmc6g5.hv4rvrfc.h4z51re5.ieid39z1';

    let productTag = '';
    for(let liczydlo = 0; liczydlo < 6;liczydlo++){
        if(liczydlo==0) {
            productTag = 'Meble';
        }
        if(liczydlo==1) {
            productTag = 'Siedzenie';
        }
        if(liczydlo==2) {
            productTag = 'Nnarożniki';
        }
        if(liczydlo==3) {
            productTag = 'Narożnik';
        }
        if(liczydlo==4) {
            productTag = 'Meblot';
        }
        if(liczydlo==5) {
            productTag = 'sklep meblarski';
        }
        await page.click(productTagsArea + ' > textarea');
        await page.keyboard.type(productTag);
        await page.keyboard.press(String.fromCharCode(13));
    }
    await sleep(250000);
    
    await page.waitForSelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div.discj3wi.ihqw7lf3.l6v480f0.dati1w0a.hv4rvrfc > div');
    await sleep(1000);
    await page.evaluate(() => {
        document.querySelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div:nth-child(3) > div.discj3wi.ihqw7lf3.l6v480f0.dati1w0a.hv4rvrfc > div').click()
    });
    const marketplaceButton = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div';
    

    const groupButton = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > div:nth-child(';
    await page.waitForSelector(marketplaceButton);
    await page.click(marketplaceButton);
    const postButton = '#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div:nth-child(4) > div.discj3wi.ihqw7lf3.l6v480f0.dati1w0a.hv4rvrfc';
    if(pomocnicza==1) {
        for(liczydlo = 1; liczydlo < 22;liczydlo++) {
            await page.click(groupButton+liczydlo+') > div');
        }}
    if(pomocnicza==2) {
        for(liczydlo = 22; liczydlo < 43;liczydlo++) {
            await page.click(groupButton+liczydlo+') > div');
        }}
    if(pomocnicza==3) {
        for(liczydlo = 43; liczydlo < 64;liczydlo++) {
            await page.click(groupButton+liczydlo+') > div');
        }}
    if(pomocnicza==4) {
        for(liczydlo = 64; liczydlo < 85;liczydlo++) {
            await page.click(groupButton+liczydlo+') > div');
        }}
    if(pomocnicza==5) {
        for(liczydlo = 85; liczydlo < 100;liczydlo++) {
            await page.click(groupButton+liczydlo+') > div');
        }}
    
    await page.evaluate(() =>
        document.querySelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(5) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div:nth-child(4) > div.discj3wi.ihqw7lf3.l6v480f0.dati1w0a.hv4rvrfc > div').click()
        
    );
    await sleep(20000);
    console.log('Wstawiono '+pomocnicza+' raz naroznik');
}
exports.elo = async function start() {
    
    async function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
        }); 
     }
        /* Arkusz Naroznikow */
    const doc = new GoogleSpreadsheet('1JhbkFbtPsmpBhpm_wfCJz0RnKNeBwwAzBOWwXUu0ubw');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`title: ${sheet.title}, Rows: ${sheet.rowCount}`);
    const date = new Date();
    const day = date.getDay();
    console.log(day);
    const imie = 'Dawid';
    let cells = await promisify(sheet.getCells)({
        'min-row': 50,
        'max-row': 69,
        'min-col': 2,
        'max-col': 2,
        'return-empty': true,
    });
    let cena = await promisify(sheet.getCells)({
        'min-row':50,
        'max-row':69,
        'min-col': 1,
        'max-col': 1,
    });
    let opis = await promisify(sheet.getCells)({
        'min-row':50,
        'max-row':69,
        'min-col': 3,
        'max-col': 3,
    });

    if(imie=="Dawid") {
        if(day==1) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 2,
                'max-col': 2,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 1,
                'max-col': 1,
            });
            opis = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 3,
                'max-col': 3,
            });
        }
        if(day==2) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 5,
                'max-col': 5,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row':50,
                'max-row':69,
                'min-col': 4,
                'max-col': 4,
            });
            opis = await promisify(sheet.getCells)({
                'min-row':50,
                'max-row':69,
                'min-col': 6,
                'max-col': 6,
            });
        }
        if(day==3) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 8,
                'max-col': 8,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row':50,
                'max-row':69,
                'min-col': 7,
                'max-col': 7,
            });
            opis = await promisify(sheet.getCells)({
                'min-row':50,
                'max-row':69,
                'min-col': 9,
                'max-col': 9,
            });
        }
        if(day==4) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 11,
                'max-col': 11,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row':50,
                'max-row':69,
                'min-col': 10,
                'max-col': 10,
            });
            opis = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 12,
                'max-col': 12,
            });
        }
        if(day==5) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 14,
                'max-col': 14,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 13,
                'max-col': 13,
            });
            opis = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 15,
                'max-col': 15,
            });
        }
        if(day==6) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 17,
                'max-col': 17,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 16,
                'max-col': 16,
            });
            opis = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 18,
                'max-col': 18,
            });
        }
        if(day==0) {
            cells = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 20,
                'max-col': 20,
                'return-empty': true,
            });
            cena = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 19,
                'max-col': 19,
            });
            opis = await promisify(sheet.getCells)({
                'min-row': 50,
                'max-row': 69,
                'min-col': 21,
                'max-col': 21,
            });
        }
    }
    
    let cenaNaroznika = '';
    let nazwaNaroznika = '';
    let opisNaroznika = '';

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.facebook.com/groups/755021684582281');
    //await page.click('#email');
    await page.waitForSelector('#login_form > div > div:nth-child(1) > label > input');
    await sleep(2000);
    await page.click('#login_form > div > div:nth-child(1) > label > input');
    await page.keyboard.type('dawidkobie@wp.pl');
    //await page.click('#pass');
    await page.click('#login_form > div > div:nth-child(2) > label > input');
    await page.keyboard.type('Agrarbau2019');
    //await page.click('#loginbutton');
    await page.click('#login_form > div > div:nth-child(3) > div');
    await sleep(5000);
    await page.close();
    for(let index=0; index < 21; index++) {
        try {
            cenaNaroznika = cena[index].value;
            nazwaNaroznika = cells[index].value;
            opisNaroznika = opis[index].value;

            console.log(cenaNaroznika);
            console.log(nazwaNaroznika);

            const page = await browser.newPage();
            await page.setViewport({ width: 1280, height: 1000 })
            await page.goto('https://www.facebook.com/groups/755021684582281', {
                waitUntil: 'load',
                timeout: 0
            });
            
            for(let pomocnicza = 1;pomocnicza<6;pomocnicza++) {
                await Dodawanie(cenaNaroznika, nazwaNaroznika, opisNaroznika, page, index, pomocnicza);
            }
            await page.close();

    } catch (e) {
    console.log('main program error:' + e);}
}
await browser.close();
app.quit();
};