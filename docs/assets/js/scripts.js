document.addEventListener('DOMContentLoaded', function (event) {
    setModifiedDate();
});

function setModifiedDate() {
    fetch("https://api.github.com/repos/" + ownerName + "/" + repoName + "/commits?path=" + pagePath)
        .then((response) => {
            return response.json();
        })
        .then((commits) => {
            console.log(JSON.stringify(commits[0]));
            let modified = commits[0]['commit']['committer']['date'].slice(0, 10);
            let author = commits[0]['commit']['author']['name'];
            document.querySelectorAll(".last-modified").forEach(function (lastModifiedElement) {
                lastModifiedElement.textContent = "Last Modified: " + modified + ' by ' + author;
            });
        });
}
