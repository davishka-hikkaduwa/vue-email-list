console.log('JS OK!');

/*
Descrizione:
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus:
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



const NUM_EMAILS = 10;

const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        loading: true,
    },
    created() {
        // generateEmails() {
        for (let i = 1; i <= NUM_EMAILS; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        const randomEmail = response.data.response;
                        this.emails.push(randomEmail);
                        this.loading = this.emails.length < NUM_EMAILS;
                    }
                });
        }
    },
}
)