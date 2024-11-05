document.addEventListener("DOMContentLoaded", function() {
    // Select all heading elements from h1 to h6
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    for (var i = 1; i < headings.length; i++) {
        var previousHeading = headings[i - 1];
        var currentHeading = headings[i];
        var previousLevel = parseInt(previousHeading.tagName.substring(1));
        var currentLevel = parseInt(currentHeading.tagName.substring(1));

        // Check if previous heading is of the same or deeper level than the current heading
        if (previousLevel >= currentLevel) {
            // Create the HR element
            var hr = document.createElement("hr");
            hr.classList.add("section-divider");

            // Insert HR before the current heading
            currentHeading.parentNode.insertBefore(hr, currentHeading);
        }
    }
});
