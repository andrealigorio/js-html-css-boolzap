Vue.config.devtools = true;
var root = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Andrea Ligorio',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Come stai oggi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Tutto bene, grazie',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Martina',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Marti ti va di vedere un film oggi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ok aspettami per le 20:00 stasera',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Matteo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ho visto che sei uscito con Luisa',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma quei baffi non si possono proprio vedere',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Salvatore',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Io non ti conosco... io non so chi sei',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'So che hai cancellato con un gesto i sogni miei',
                        status: 'received'
                    }
                ],
            }
        ],
        activeItem: {},
        activeMessages: [],
        newMessage: "",
        contactName: ""
    },
    methods: {
        selectedItem(index) {
            this.activeItem = this.contacts[index];
            this.activeMessages = this.contacts[index].messages;
        },
        addMessage() {
            var data = new Date();
            var year = data.getFullYear();
            var month = data.getMonth();
            month += 1;
            var day = data.getDate();
            var hours = data.getHours();
            var minuts = data.getMinutes();
            var seconds = data.getSeconds();
            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;
            if (hours < 10) hours = "0" + hours;
            if(this.newMessage != "") {
                this.activeMessages.push({ text: this.newMessage, 
                                            status: 'sent', 
                                            date: `${day}/${month}/${year} ${hours}:${minuts}:${seconds}`});
                this.newMessage = "";
            }
            setTimeout( () => {
                this.activeMessages.push({ text: "ok",
                                            status: 'received',
                                            date: `${day}/${month}/${year} ${hours}:${minuts}:${seconds}`})
            }, 1000);
        },
        searchName(contactName, array) {
            for(var j = 0; j < array.length; j++) {
                var cont = 0;       //Utilizzo variabile contatore per verificare che tutte le lettere corrispondano
                for(var i = 0; i < contactName.length; i++) {
                    if ((contactName.charAt(i) != array[j].name.charAt(i).toUpperCase()) && (contactName.charAt(i) != array[j].name.charAt(i).toLowerCase())) {
                        array[j].visible = false;
                    } else {
                        cont++;
                    }
                }
                if (cont == contactName.length) {
                    array[j].visible = true;
                } else {
                    array[j].visible = false;
                }
            }
        }
    },
    created() {
        this.selectedItem(0);
    }
});