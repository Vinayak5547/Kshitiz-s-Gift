function playBirthdayMessage() {
    const birthdayMessage = 'HAPPY BIRTHDAY!';

    // Wait for the 'voiceschanged' event before getting voices
    window.speechSynthesis.onvoiceschanged = function () {
        const voices = window.speechSynthesis.getVoices();
        
        if (voices.length > 0) {
            const randomVoice = voices[Math.floor(Math.random() * voices.length)];
            const msg = new SpeechSynthesisUtterance(birthdayMessage);
            msg.voice = randomVoice;
            window.speechSynthesis.speak(msg);
        } else {
            alert('Text-to-speech voices not available.');
        }
    };
}
