<template>
    <div class="bg-green-500 rounded">
        <div id="aplayer"></div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import APlayer from 'aplayer'
    import 'aplayer/dist/APlayer.min.css';
    import { useSongStore } from '../../../stores/song-store'
    const songStore = useSongStore()
    let songsList = []
    onMounted(() => { 
        thePlayer();
        // setTimeout(() => { mapSongs() }, 500)
        mapSongs()
        thePlayer();
    })
    const mapSongs = () => {
        let newSongs = songStore.songs.map(function (song) {
            return {
                name: song.title,
                artist: songStore.artistName,
                url: 'http://127.0.0.1:8000/api/' + 'songs/' + songStore.artistId + '/' + song.song
            }
        })
        console.log(newSongs)
        for (let i = 0; i < newSongs.length; i++) {
            songsList.push(newSongs[i])
        }
        thePlayer()
    }
    const thePlayer = () => {
        new APlayer({
            container: document.getElementById('aplayer'),
            audio: songsList
            // [
            //     {
            //         name:'First Song',
            //         artist:'artist',
            //         url:'/music/classicmusic.mp3',
            //         cover:'cover.jpg',
            //     },
            //     {
            //         name:'Second Song',
            //         artist:'artist',
            //         url:'/music/classicmusic2.mp3',
            //         cover:'cover.jpg',
            //     },
            // ]
        });
    }
</script>