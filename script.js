function playBirthdayMessage() {
    const birthdayMessage = 'HAPPY BIRTHDAY!';

    setTimeout(() => {
        const voices = window.speechSynthesis.getVoices();

        if (voices.length > 0) {
            const randomVoice = voices[Math.floor(Math.random() * voices.length)];
            const msg = new SpeechSynthesisUtterance(birthdayMessage);
            msg.voice = randomVoice;
            window.speechSynthesis.speak(msg);
        } else {
            alert('Text-to-speech voices not available.');
        }
    }, 1000); // Adjust the timeout duration as needed
}
