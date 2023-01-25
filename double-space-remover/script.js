var spaces = 0;

function spaceRemover() {
    var usertxt = document.getElementById('text-input');
    var usertxt1 = usertxt.value

    var nospace = usertxt1.replace(/\s\s+/g, ' ');
    usertxt.value = nospace;
}