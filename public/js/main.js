const chatForm = document.getElementById('chat-form'); 

const socket = io();


//socket.emit('joinRoom');

socket.on('comment', comment =>{
    console.log(comment);
});

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const msg = e.target.elements.mesg.value;

    console.log(msg);
})