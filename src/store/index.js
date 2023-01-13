import {createStore} from 'vuex'

export default createStore({
    state: {
        user: null,
        filme: [{
            titel: 'Chappie',
            erscheinungsjahr: '2015',
            hinzugefügtAm: '12.01.2023',
            bewertung: 5,
            kommentar: 'is supa tol',
            titelbild: 'https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22807.jpg?w=2000'
        }, {
            titel: 'Star Wars',
            erscheinungsjahr: '2018',
            hinzugefügtAm: '12.01.2023',
            bewertung: 5,
            kommentar: 'is supaaaaaa tol',
            titelbild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png'
        }, {
            titel: 'Chappie',
            erscheinungsjahr: '2015',
            hinzugefügtAm: '12.01.2023',
            bewertung: 5,
            kommentar: 'is supa tol',
            titelbild: 'https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22807.jpg?w=2000'
        }, {
            titel: 'Chappie',
            erscheinungsjahr: '2015',
            hinzugefügtAm: '12.01.2023',
            bewertung: 5,
            kommentar: 'is supa tol',
            titelbild: 'https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22807.jpg?w=2000'
        },]
    },
    getters: {
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        }
    },
    modules: {}
})
