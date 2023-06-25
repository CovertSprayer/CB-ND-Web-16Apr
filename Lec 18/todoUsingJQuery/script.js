$('#btn').on('click', (e)=>{
    const inpValue = $('#inp').val();

    let str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <p class="text">${inpValue}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">⬆️</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div>`

    // console.log(str);
   const newTask = $('<div>').addClass('task').html(str);

   $('#inp').val('');
   $('#task-list').append(newTask);

})

$('#task-list').on('click', (e)=>{
    const className = $(e.target).attr('class');
    console.log(className);

    if(className === 'bin'){
        $(e.target).parent().parent().remove();
    }

    else if(className === 'up-arrow'){
        const currElement = $(e.target).parent().parent();
        const prevElement = currElement.prev();
        
        prevElement.before(currElement);
    }

    else if(className === 'down-arrow'){
        const currElement = $(e.target).parent().parent();
        const nextElement = currElement.next();
        
        nextElement.after(currElement);
    }

    else if(className === 'checkbox'){
        $(e.target).next().toggleClass('checked');
    }

})

