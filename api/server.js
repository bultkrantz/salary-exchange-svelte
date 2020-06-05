const express = require('express');
const app = express();
const port = 3001;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const cms = {
    title: "Välkommen"
}

const api = {
    informationSections: [
        {
            title: "Vad är löneväxling?",
            body: "Löneväxling är en överenskommelse mellan en arbetstagare och en arbetsgivare om att avstå en del av sin bruttolön (innan inkomstskatten dras) och istället låta arbetsgivaren betala in den summan till den anställdes pension. Inkomstskatten dras först när du påbörjar utbetalningen av din pension.",
            usp: {
                list: [
                    "En snöbollseffekt som gör att ditt sparande växer exponentiellt",
                    "Du får ränta på avkastningen ditt kapital genererat tidigare år",
                    "Ju högre ränta på ditt sparande desto snabbare kan dina pengar växa"
                ]
            }
        },
        {
            title: "Få mera i pension.",
            body: "Eftersom skatten på pensionssparande idag är ca 6 % lägre än arbetsgivaravgiften på lön så brukar arbetsgivaren istället då betala dessa 6 % extra i den anställdes pensionsfond. Då de varken ska kosta eller vara sparsamt för arbetsgivaren att låta den anställde pensionsspara.",
            usp: {
                title: "Fördelar med löneväxling",
                list: [
                    "Behöver inte betala skatt på pengarna förrän de betalas ut i pension. Vilket innebär att du får högre ränta på hela beloppet under lång tid samtidigt som inkomstskatten på pengarna antagligen blir lägre när de betalas ut då de flesta får mindre i pension än i lön.",
                    "Den lön du tjänar över 43 309kr är inte pensionsgrundande i det statliga pensionssystemet, och dessutom betalar du högre skatt på den inkomsten vilket då gör de perfekt att spara den överskjutande delen."
                ]
            }
        },
        {
            title: "Löneväxling passar inte alla.",
            body: "Din allmänna pension, sjukpenning, föräldrapenning och a-kasseersättning beräknas utifrån den ersättningsgrundande inkomst du har för var och en av dessa ersättningar. När din bruttolön sänks påverkas de, dock inte om din månadslön eller årslön efter löneväxling ligger över inkomsttaket för de olika ersättningsgrundande inkomsterna. Som för den allmänna pensionen 2019 är 8,07 * inkomstbasbeloppet 2019 (64 400) som är 519 708kr i årsinkomst eller 43 309kr i månaden.",
            usp: {
                title: "Nackdelar med löneväxling",
                list: [
                    "Den lön som du växlar bort sänker din sjuk- och pensionsgrundande inkomst. Det betyder att vissa ersättningar blir lägre både på sikt och i nutid.",
                    "Inom kollektivavtalad tjänstepension låser man pengarna till åtminstone 55 års ålder.",
                    "Din ITP sjukpension som du får vid långvarig sjukdom blir lägre. Om du efter löneväxlingen tjänar under inkomsttaket för respektive förmån, blir sjukpenning, föräldrapenning och tillfällig föräldrapenning lägre. Under vissa förutsättningar kan även den allmänna pensionen bli lägre."
                ]
            }
        }
    ]
}

app.get('/cms', (req, res) => {
    setTimeout(() => {
        // res.sendStatus(500);
        res.send(JSON.stringify(cms))
    }, 1500)
})

app.get('/api', (req, res) => {
    setTimeout(() => {
        // res.sendStatus(500);
        res.send(JSON.stringify(api))
    }, 3000)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))