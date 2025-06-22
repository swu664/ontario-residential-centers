// watch video button
document.getElementById("play-btn").addEventListener('click', function() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");
    iframe.src = "https://www.youtube.com/embed/niRVx_rRVhc?si=fQSMfULBa_G3GsvL&amp";
    modal.style.display = "flex";
});

// close video button
document.getElementById('close-btn').addEventListener('click', function() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-iframe");
    iframe.src = "";
    modal.style.display = "none";
});

// change gallery image function
function changeImage(thumbnail) {
    // set main image to clicked thumbnail's src
    document.getElementById("main-image").src = thumbnail.src;

    // highlight active thumbnail
    const allThumbnails = document.querySelectorAll(".thumbnails img");
    allThumbnails.forEach(img => img.classList.remove("active"));
    thumbnail.classList.add("active");
}
