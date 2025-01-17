let codeElement = document.querySelector('.integration__code')
let codeAnim = new TypeIt('.integration__code code', {
    speed: 10,
    nextStringDelay: 20,
    lifeLike: true,
    cursor: false,
    strings: [
        "export { micedition } from \"micedition-webapp\"\;\n\n",
        "const App = (props) => {\n",
        "\tconst [main, blog, app, web] = useState();\n",
        "\tuseAsyncEffect(async () => {\n",
        "\t\tconst share = await props.micedition.connect(props.peerId);\n",
        "\t\tsetApp(await peer.requestAsync(HighestLevel));\n",
        "\t});\n\n",
        "\treturn <micedition webapp={YourWebApp} />;\n",
        "\n};"
    ],
    html: false,
    afterStep: async (step, instance) => {
        Prism.highlightAll();
    },
    afterComplete: async (step, instance) => {
        toggleSyncedVideos()
    }
})
codeAnim.go()


// Toggle Synced videos
var syncedVideo = document.querySelector('.synced-video'),
    syncedVideoElements = document.querySelectorAll('.synced-video video')

syncedVideoElements.forEach(function (el, i) {
    el.pause()
})

let syncInterval

var toggleSyncedVideos = function (offset) {
    syncedVideoElements.forEach(function (el, i) {
        el.classList.add('integration-video--visible')
        el.classList.add('position-absolute')
        el.play()
    })
    if (syncInterval) {
        window.clearInterval(syncInterval)
    }
    syncInterval = window.setInterval(ensureVideoSync, 1000)
}

const ensureVideoSync = () => {
    const videoElements = Array.from(syncedVideoElements)
    if (videoElements.every((el) => el.currentTime > 1 && el.currentTime < el.duration - 1)) {
        const mainVideoElement = videoElements[0]
        const secondaryVideoElements = videoElements.slice(1)
        if (secondaryVideoElements.some((el) =>
            videoElements.some((otherEl) =>
                Math.abs(el.currentTime - otherEl.currentTime) > 0.05)
        )) {
            for (let el of videoElements) {
                el.pause()
            }
            for (let el of secondaryVideoElements) {
                el.currentTime = mainVideoElement.currentTime
            }
            window.setTimeout(() => {
                for (let el of videoElements) {
                    el.play()
                }
            }, 200)
        }
    }
}