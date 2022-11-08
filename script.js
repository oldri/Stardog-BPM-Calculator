function myFunction(event) {
    let bpm = document.getElementById('bpm').value;
    let semitone = document.getElementById('semitone').value;
    
   if(isNaN(bpm) || !bpm || isNaN(semitone) || !semitone){
        alert("Must enter a valid number slatt.");
   }else{
        let newSemi = parseFloat(semitone / 12);
        let power = Math.pow(2, newSemi);
        let newBPM = parseFloat(bpm * power);
        let bpmHeader = document.createElement('h2');
        bpmHeader.innerHTML = newBPM;
        document.getElementById('form').appendChild(bpmHeader);
   }
   event.preventDefault();
}
