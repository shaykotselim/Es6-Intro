document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = 'green 3px solid'

});
function addBackGroundColor() {
const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    };
}
   function addFriend() {
       const container = document.getElementById('friend-container');
       const friendDiv = document.createElement('div');
       friendDiv.classList.add('friend');
       friendDiv.innerHTML= `
                <h3 class="friend-name">New-Friend</h3>
                <p>Molestias, facere soluta.</p>
       `
       container.appendChild(friendDiv)
   }