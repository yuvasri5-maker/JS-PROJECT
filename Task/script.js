const input = document.getElementById('taskInput');
const list = document.getElementById('list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save(){ localStorage.setItem('tasks', JSON.stringify(tasks)) }

function render(){
    list.innerHTML = '';
    tasks.forEach((t,i)=>{
        list.innerHTML += `<div class="task">
        <span>${t.text}</span>
        <div class="actions">
            <input type="checkbox" ${t.done?'checked':''} onchange="tasks[${i}].done=!tasks[${i}].done;save();render()">
            <button class="delete-btn" onclick="tasks.splice(${i},1);save();render()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#d32f2f">
                    <path d="M9 3V1.5A1.5 1.5 0 0 1 10.5 0h3A1.5 1.5 0 0 1 15 1.5V3h5a1 1 0 1 1 0 2h-1v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5H4a1 1 0 1 1 0-2h5zM9 3h6V2H9v1zm2 4a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z"/>
                </svg>
            </button>
        </div>
        </div>`;
    });
}

input.addEventListener('keypress', e=>{
    if(e.key === 'Enter' && input.value.trim()){
        tasks.push({text:input.value.trim(), done:false});
        save(); render(); input.value = '';
    }
});

render();