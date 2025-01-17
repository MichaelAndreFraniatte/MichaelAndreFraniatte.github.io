
var nextpagetoken = "";
var nomorevideo = false;

function handleFilename(buttonid) {
    var filename = document.getElementById(buttonid).value;
	download(filename);
}

function download(filename) {
    var File = "";
    var downloadLink;
	if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
		alert("Your browser doesn't support Blobs");
		return;
	}
    csvFile = new Blob([File], {type:"text/txt"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

var apikey = localStorage.getItem("apikey");
if (!(apikey == null || apikey == "")) {
    document.getElementById("APIKey").value = apikey;
} else {
    document.getElementById("APIKey").value = "API Key";
}

function myFunction() {
    apikey = document.getElementById("APIKey").value;
    if (apikey == null || apikey == "") {
        document.getElementById("APIKey").value = "API Key";
        return;
    }
    localStorage.setItem("apikey", apikey);
    (async () => {
        var playlistID = document.getElementById("playlistID").value;
        var htmlString = '';
        var param = "";
        param = "playlistId=" + playlistID;
        const responsef = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&" + param + "&key=" + apikey);
        const files = await responsef.json();
        for (let file of files.items) {
            var videoid = file.snippet.resourceId.videoId;
            var title = file.snippet.title;
            htmlString += `
                <div>` + title + `</div>
                <form class="form-horizontal">
                    <input type="text" id="` + videoid + `" value="` + videoid + `.txt">
                    <input type="button" onClick="handleFilename('` + videoid + `')" value="Save" class="button">
                </form></br>`;
            try {
                nextpagetoken = files.nextPageToken;
                nomorevideo = false;
            }
            catch {
                nomorevideo = true;
            }
        }
        if (!nomorevideo) {
            const responsenf = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&pageToken=" + nextpagetoken + "&" + param + "&key=" + apikey);
            const nfiles = await responsenf.json();
            for (let file of nfiles.items) {
                var videoid = file.snippet.resourceId.videoId;
                var title = file.snippet.title;
                htmlString += `
                    <div>` + title + `</div>
                    <form class="form-horizontal">
                        <input type="text" id="` + videoid + `" value="` + videoid + `.txt">
                        <input type="button" onClick="handleFilename('` + videoid + `')" value="Save" class="button">
                    </form></br>`;
                try {
                    nextpagetoken = nfiles.nextPageToken;
                    nomorevideo = false;
                }
                catch {
                    nomorevideo = true;
                }
            }
        }
        if (!nomorevideo) {
            const responsepf = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&pageToken=" + nextpagetoken + "&" + param + "&key=" + apikey);
            const pfiles = await responsepf.json();
            for (let file of pfiles.items) {
                var videoid = file.snippet.resourceId.videoId;
                var title = file.snippet.title;
                htmlString += `
                    <div>` + title + `</div>
                    <form class="form-horizontal">
                        <input type="text" id="` + videoid + `" value="` + videoid + `.txt">
                        <input type="button" onClick="handleFilename('` + videoid + `')" value="Save" class="button">
                    </form></br>`;
            }
        }
        $("#contents").append(htmlString);
    })();
}