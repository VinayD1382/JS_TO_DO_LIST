document.addEventListener('DOMContentLoaded', () => {
    /*So the above line of code will wait until the HTML code is loaded to browser after loading 
    it share ()=>{ then task*/ 
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            /*After adding value to ul make the user input taking as '' */
        }
    });

    taskList.addEventListener('click', (e) => {
        /*If just we click in the any list it will active and sends a object e  */
        if (e.target.classList.contains('delete')) {
            /*so e.target(click) check the click occur on delete button and any css
            style is there for that if not there means  */
            deleteTask(e.target);
        } else if (e.target.tagName === 'LI') { 
            /*if not there means it consider click occur on list item and call togglemethdo */
            toggleTaskCompletion(e.target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        /*So javascript textcontent is inbuild to store the text content no need of craeting a variable*/ 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');/*here it adding style to button without
        checking */
        /*The above code  deleteButton.classList.add('delete'); used to add style to from css*/
        
        li.appendChild(deleteButton);
        /*Along with list it add the button to it */
        taskList.appendChild(li);
        /*That will loaded to ul list */
    }

    function deleteTask(button) {
        const li = button.parentElement;
        /*when delete button is clicked then parent of that button 
        ex:  (li :value : button )   01 : value : delete : parent of delete is 01
        so directed to li*/
        taskList.removeChild(li);
        /*remove the data according to list */
    }

    function toggleTaskCompletion(task) {
        task.classList.toggle('completed');/*toggle() a buildin method that only add or delete */
        /*in css if linked on the item then line draw on that text is there */
    }
});
