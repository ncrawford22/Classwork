let radio = {
    stations: [
        {
            name: 'Station 1',
            songs: [
                {
                    title: 'Song 1',
                    artist: 'Artist 1'
                },
                {
                    title: 'Song 2',
                    artist: 'Artist 2'
                },
                {
                    title: 'Song 3',
                    artist: 'Artist 3'
                }
            ]
        },
        {
            name: 'Station 2',
            songs: [
                {
                    title: 'Song 4',
                    artist: 'Artist 4'
                },
                {
                    title: 'Song 5',
                    artist: 'Artist 5'
                },
                {
                    title: 'Song 6',
                    artist: 'Artist 6'
                }
            ]
        }
    ],
    changeStation: () => {
        let randomStation = Math.floor((Math.random() * 100)) % 2;
            console.log(randomStation);
        let randomSong = Math.floor((Math.random() * 100)) % 3;
            console.log(randomSong);
        let randomBoth = radio.stations[randomStation].songs[randomSong];
        console.log('Now Playing: ' + randomBoth.title + ' by ' + randomBoth.artist + '!');
    }
}

radio.changeStation();

    