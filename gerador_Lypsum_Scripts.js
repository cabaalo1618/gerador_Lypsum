
var botaoLorem = document.getElementById("botaoLorem");
var loremContainer = document.getElementById("loremContainer");

botaoLorem.addEventListener("click", function(){
    var loremText = generateLoremIpsum(loremContainer.offsetWidth, loremContainer.offsetHeight);
    loremContainer.textContent = loremText;
});

function generateLoremIpsum(width, height) {
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.";
    
    var loremWords = lorem.split(" ");
    var loremGenerated = "";
    var currentWidth = 0;
    var currentHeight = 0;
    
    loremWords.forEach(function(word) {
        loremGenerated += word + " ";
        currentWidth += word.length * 10;
        if (currentWidth >= width) {
            loremGenerated += "<br>";
            currentWidth = 0;
            currentHeight += 20; // 
            if (currentHeight >= height) {
                return loremGenerated;
            }
        }
    });
    
    return loremGenerated;
}
